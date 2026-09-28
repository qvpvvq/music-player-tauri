import type { Track } from '../../../types';

interface TrackCardProps {
    item: Track;
    onClick?: () => void;
}

export default function TrackCard({ item, onClick }: TrackCardProps) {
    return (
        <div className="track-card" data-id={item.id} onClick={onClick}>
            <div className={`cover ${item.coverClass}`}>{item.emoji}</div>
            <div className="track-title">{item.title}</div>
            <div className="track-artist">{item.artist}</div>
        </div>
    );
}
