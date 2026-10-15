import { useEffect, useRef } from 'react';
import { useGetTracks } from '../../../api/tracks/queries';
import { currentTrack, queue } from '../../../data/mock';
import NowPlaying from '../../panels/NowPlaying';
import Queue from '../../panels/Queue';

import { useVirtualizer } from '@tanstack/react-virtual';

export default function LibraryContent() {
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetTracks();

    const tracks = data?.pages.flatMap((page) => page.items) ?? [];

    const parentRef = useRef<HTMLDivElement>(null);

    const rowVirtualizer = useVirtualizer({
        count: hasNextPage ? tracks.length + 1 : tracks.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 65,
        overscan: 5,
    });

    useEffect(() => {
        const [lastItem] = [...rowVirtualizer.getVirtualItems().reverse()];
        if (!lastItem) return;

        if (lastItem.index >= tracks.length - 1 && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [
        hasNextPage,
        fetchNextPage,
        tracks.length,
        isFetchingNextPage,
        rowVirtualizer.getVirtualItems(),
    ]);

    return (
        <main className="main">
            <div className="content">
                <div className="library-head">
                    <h1 className="library-title">Библиотека</h1>
                    <span className="library-count">500 треков</span>
                </div>

                <div className="library-toolbar">
                    <div className="search-wrapper">
                        <img src="uicons/search.svg" className="search-icon" />
                        <input
                            className="search-input"
                            type="text"
                            placeholder="Поиск по библиотеке"
                        />
                    </div>
                </div>

                <div ref={parentRef} className="track-list">
                    <div className="track-list-head">
                        <span style={{ textAlign: 'center' }}>#</span>
                        <span />
                        <span>Название</span>
                        <span>Альбом</span>
                        <span style={{ textAlign: 'right' }}>Время</span>
                    </div>

                    {/* Прокладка с общей высотой всех строк */}
                    <div
                        style={{
                            height: `${rowVirtualizer.getTotalSize()}px`,
                            width: '100%',
                            position: 'relative',
                        }}>
                        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                            const isLoaderRow = virtualRow.index > tracks.length - 1;
                            const track = tracks[virtualRow.index];

                            return (
                                <div
                                    key={virtualRow.key}
                                    data-index={virtualRow.index}
                                    ref={rowVirtualizer.measureElement}
                                    className={`track-row ${isLoaderRow ? 'skeleton' : ''}`}
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        transform: `translateY(${virtualRow.start}px)`,
                                    }}>
                                    {isLoaderRow ? (
                                        <>
                                            <span className="row-num" />
                                            <div className="row-cover" />
                                            <div className="row-meta">
                                                <div className="sk-line" style={{ width: '60%' }} />
                                                <div
                                                    className="sk-line"
                                                    style={{ width: '35%', height: 8 }}
                                                />
                                            </div>
                                            <div className="sk-line" style={{ width: '50%' }} />
                                            <span />
                                        </>
                                    ) : (
                                        <>
                                            <span className="row-num">{virtualRow.index + 1}</span>
                                            <div className="row-cover">🎵</div>
                                            <div className="row-meta">
                                                <div className="row-title">{track.title}</div>
                                                <div className="row-artist">{track.author}</div>
                                            </div>
                                            <span className="row-album">{track.album}</span>
                                            <span className="row-duration">{track.duration}</span>
                                            <button className="row-menu">⋯</button>
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <aside className="right-panel">
                <NowPlaying track={currentTrack} />
                <Queue items={queue} />
            </aside>
        </main>
    );
}
