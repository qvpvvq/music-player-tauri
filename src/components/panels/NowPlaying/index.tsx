import type { CurrentTrack } from '../../../types';

interface NowPlayingProps {
    track: CurrentTrack | null;
    onPrev?: () => void;
    onPlay?: () => void;
    onNext?: () => void;
}

export default function NowPlaying({ track, onPrev, onPlay, onNext }: NowPlayingProps) {
    if (!track) return null;

    return (
        <div className="now-playing">
            <div className="np-label">Сейчас играет</div>
            <div className={`np-cover ${track.coverClass}`}>{track.emoji}</div>
            <div className="np-title">{track.title}</div>
            <div className="np-artist">{track.artist}</div>

            <div className="np-controls">
                <button className="np-btn" onClick={onPrev}>
                    ⏮
                </button>
                <button className="np-play" onClick={onPlay}>
                    ▶
                </button>
                <button className="np-btn" onClick={onNext}>
                    ⏭
                </button>
            </div>
        </div>
    );
}
