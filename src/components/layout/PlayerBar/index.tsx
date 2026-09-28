import { currentTrack } from '../../../data/mock';

export default function PlayerBar() {
    const t = currentTrack;

    return (
        <footer className="player">
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
                        🔀
                    </button>
                    <button className="ctrl" title="Previous">
                        ⏮
                    </button>
                    <button className="ctrl-play" title="Play/Pause">
                        ▶
                    </button>
                    <button className="ctrl" title="Next">
                        ⏭
                    </button>
                    <button className="ctrl active" title="Repeat">
                        🔁
                    </button>
                </div>

                <div className="progress-wrap">
                    <span className="time">{t.currentTime}</span>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${t.progress}%` }} />
                    </div>
                    <span className="time right">{t.totalTime}</span>
                </div>
            </div>

            {/* Right: volume + extras */}
            <div className="player-right">
                <button className="ctrl" title="Тексты">
                    📝
                </button>
                <button className="ctrl" title="Очередь">
                    📋
                </button>
                <button className="ctrl" title="Громкость">
                    🔊
                </button>
                <div className="volume-bar">
                    <div className="volume-fill"></div>
                </div>
                <button className="ctrl" title="Ещё">
                    ⋯
                </button>
            </div>
        </footer>
    );
}
