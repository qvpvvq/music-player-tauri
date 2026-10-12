import { useEffect, useRef, useState } from 'react';
import { currentTrack } from '../../../data/mock';

export default function PlayerBar() {
    const t = currentTrack;

    const audioRef = useRef<HTMLAudioElement>(null);

    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const [isPlaing, setIsPlaing] = useState<boolean>(false);
    const [repeat, setRepeat] = useState<boolean>(false);
    const [volume, setVolume] = useState<number>(0);

    const handleBarChange = (element) => {
        if (audioRef.current) {
            const newTime = Number(element.target.value);
            audioRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
    };

    const handleVolumeChange = (event) => {
        if (audioRef.current) {
            audioRef.current.volume = event.target.value / 100;
            setVolume(event.target.value);
        }
    };

    useEffect(() => {
        if (isPlaing) {
            audioRef.current?.play();
        } else {
            audioRef.current?.pause();
        }
    }, [isPlaing]);

    const percent = duration ? (currentTime / duration) * 100 : 0;

    return (
        <footer className="player">
            <audio
                ref={audioRef}
                loop={repeat}
                onEnded={() => setIsPlaing(false)}
                src="music/marmixer-deep-sea-324392.mp3"
                onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
                onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
            />

            {/* Left: track */}
            <div className="player-track">
                <div className={`player-cover ${t.coverClass}`}>{t.emoji}</div>
                <div className="player-meta">
                    <div className="player-title">{t.title}</div>
                    <div className="player-artist">{t.artist}</div>
                </div>
                <button className="player-heart">♡</button>
            </div>

            {/* Center: controls */}
            <div className="player-center">
                <div className="player-controls">
                    <button className="ctrl" title="Shuffle">
                        <span
                            className="ctrl-icon"
                            style={
                                { '--icon': 'url(uicons/audio-shuffle.svg)' } as React.CSSProperties
                            }
                        />
                    </button>
                    <button className="ctrl" title="Previous">
                        <span
                            className="ctrl-icon"
                            style={
                                {
                                    '--icon': 'url(uicons/player-audio-arrow-left.svg)',
                                } as React.CSSProperties
                            }
                        />
                    </button>
                    <button
                        onClick={() => setIsPlaing((prev) => !prev)}
                        className="ctrl-play"
                        title="Play/Pause">
                        ▶
                    </button>
                    <button className="ctrl" title="Next">
                        <span
                            className="ctrl-icon"
                            style={
                                {
                                    '--icon': 'url(uicons/player-audio-arrow-right.svg)',
                                } as React.CSSProperties
                            }
                        />
                    </button>
                    <button
                        onClick={() => setRepeat((prev) => !prev)}
                        className={`ctrl ${repeat ? 'active' : ''}`}
                        title="Repeat">
                        <span
                            className="ctrl-icon"
                            style={{ '--icon': 'url(uicons/repeat.svg)' } as React.CSSProperties}
                        />
                    </button>
                </div>

                <div className="progress-wrap">
                    <span className="time">{t.currentTime}</span>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${percent}%` }} />
                        <input
                            type="range"
                            step={0.1}
                            value={currentTime}
                            min={0}
                            max={duration}
                            className="progress-input"
                            onChange={handleBarChange}
                        />
                    </div>
                    <span className="time right">{t.totalTime}</span>
                </div>
            </div>

            {/* Right: volume + extras */}
            <div className="player-right">
                <button className="ctrl" title="Тексты">
                    <img src="uicons/song-lyrics-icon.svg" />
                </button>
                <button className="ctrl" title="Очередь">
                    <img src="uicons/list-music.svg" />
                </button>
                <button className="ctrl" title="Эквалайзер">
                    <img src="uicons/equaliser.svg" />
                </button>
                <button className="ctrl" title="Громкость">
                    <img src="uicons/volume.svg" />
                </button>
                <div className="volume-bar">
                    <div style={{ width: `${volume}%` }} className="volume-fill"></div>
                    <input
                        type="range"
                        step={1}
                        value={volume}
                        min={0}
                        max={100}
                        className="progress-input"
                        onChange={handleVolumeChange}
                    />
                </div>
                <button className="ctrl" title="Ещё">
                    ⋯
                </button>
            </div>
        </footer>
    );
}
