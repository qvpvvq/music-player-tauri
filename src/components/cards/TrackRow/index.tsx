import type { Track } from '../../../types';

interface TrackRowProps {
    item: Track;
    index: number;
    onClick?: () => void;
    onMenuClick?: () => void;
}

export default function TrackRow({ item, index, onClick, onMenuClick }: TrackRowProps) {
    return (
        <div className="track-row" data-id={item.id} onClick={onClick}>
            <div className="row-num">{index}</div>
            <div className={`row-cover ${item.coverClass}`}>{item.emoji}</div>
            <div className="row-meta">
                <div className="row-title">{item.title}</div>
                <div className="row-artist">{item.artist}</div>
            </div>
            <div className="row-duration">{item.duration}</div>
            <button
                className="row-menu"
                aria-label="Действия"
                onClick={(e) => {
                    e.stopPropagation();
                    onMenuClick?.();
                }}>
                ⋮
            </button>
        </div>
    );
}
