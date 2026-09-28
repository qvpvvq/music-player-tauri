import type { Track, Playlist, SectionVariant } from '../../../types';
import PlaylistCard from '../../cards/PlaylistCard';
import TrackCard from '../../cards/TrackCard';
import TrackRow from '../../cards/TrackRow';
import TrackSectionHeader from '../TrackSectionHeader';

interface TrackSectionProps {
    title: string;
    linkText?: string;
    variant?: SectionVariant;
    items: (Track | Playlist)[];
    onItemClick?: (id: number | string) => void;
}

export default function TrackSection({
    title,
    linkText,
    variant = 'carousel',
    items,
    onItemClick,
}: TrackSectionProps) {
    return (
        <section className="section">
            <TrackSectionHeader title={title} linkText={linkText} />

            {variant === 'carousel' && (
                <div className="carousel">
                    {items.map((item) => (
                        <TrackCard
                            key={item.id}
                            item={item as Track}
                            onClick={() => onItemClick?.(item.id)}
                        />
                    ))}
                </div>
            )}

            {variant === 'list' && (
                <div className="track-list">
                    {items.map((item, i) => (
                        <TrackRow
                            key={item.id}
                            item={item as Track}
                            index={i + 1}
                            onClick={() => onItemClick?.(item.id)}
                        />
                    ))}
                </div>
            )}

            {variant === 'grid' && (
                <div className="playlist-grid">
                    {items.map((item) => (
                        <PlaylistCard
                            key={item.id}
                            item={item as Playlist}
                            onClick={() => onItemClick?.(item.id)}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
