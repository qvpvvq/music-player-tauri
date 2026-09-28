import type { Playlist } from '../../../types';

interface PlaylistCardProps {
    item: Playlist;
    onClick?: () => void;
}

export default function PlaylistCard({ item, onClick }: PlaylistCardProps) {
    if (item.isNew) {
        return (
            <div className="playlist-card new" data-action="create-playlist" onClick={onClick}>
                <div className="plus">＋</div>
                <div>{item.title}</div>
            </div>
        );
    }

    return (
        <div className="playlist-card" data-id={item.id} onClick={onClick}>
            <div className={`playlist-card-cover ${item.coverClass}`}>{item.emoji}</div>
            <div className="playlist-card-name">{item.title}</div>
            <div className="playlist-card-count">{item.count} треков</div>
        </div>
    );
}
