import {
    user,
    recentlyAdded,
    recentlyPlayed,
    userPlaylists,
    currentTrack,
    queue,
} from '../../../data/mock';
import NowPlaying from '../../panels/NowPlaying';
import Queue from '../../panels/Queue';
import QuickActions from '../../sections/QuickActions';
import TrackSection from '../../sections/TrackSection';

export default function MainContent() {
    return (
        <main className="main">
            <div className="content">
                <h1 className="greeting">
                    Привет, {user.name} <span className="wave">👋</span>
                </h1>

                <QuickActions />

                <TrackSection
                    title="Недавно добавленные"
                    linkText="Показать все →"
                    variant="carousel"
                    items={recentlyAdded}
                />

                <TrackSection
                    title="Недавно слушал"
                    linkText="История →"
                    variant="list"
                    items={recentlyPlayed}
                />

                <TrackSection
                    title="Твои плейлисты"
                    linkText="Все плейлисты →"
                    variant="grid"
                    items={userPlaylists}
                />
            </div>

            <aside className="right-panel">
                <NowPlaying track={currentTrack} />
                <Queue items={queue} />
            </aside>
        </main>
    );
}
