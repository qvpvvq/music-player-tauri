import type { CurrentTrack } from '../../../types';

interface NowPlayingProps {
    track: CurrentTrack | null;
}

export default function NowPlaying({ track }: NowPlayingProps) {
    if (!track) return null;

    return (
        <div className="now-playing">
            <div className="np-label">Сейчас играет</div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'rgba(13, 13, 16, 1)',
                    padding: '10px',
                    borderRadius: '20px',
                }}
                className="">
                <div className={`np-cover ${track.coverClass}`}>{track.emoji}</div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <div className="">
                        <div className="np-title">{track.title}</div>
                        <div className="np-artist">{track.artist}</div>
                    </div>

                    <img className="icon" src="uicons/heart.svg" />
                </div>
            </div>
        </div>
    );
}
