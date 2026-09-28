import type { Track } from '../../../types';

interface QueueProps {
    items?: Track[];
    onItemClick?: (id: number | string) => void;
}

export default function Queue({ items = [], onItemClick }: QueueProps) {
    return (
        <div className="queue">
            <div className="queue-head">
                <span className="queue-label">Очередь</span>
                <span className="queue-count">{items.length}</span>
            </div>

            {items.map((item) => (
                <div
                    key={item.id}
                    className="queue-item"
                    data-id={item.id}
                    onClick={() => onItemClick?.(item.id)}>
                    <div className={`queue-cover ${item.coverClass}`}>{item.emoji}</div>
                    <div className="queue-meta">
                        <div className="queue-title">{item.title}</div>
                        <div className="queue-artist">{item.artist}</div>
                    </div>
                    <div className="queue-dur">{item.duration}</div>
                </div>
            ))}
        </div>
    );
}
