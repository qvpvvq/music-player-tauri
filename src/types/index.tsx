/* ================================================================
   Общие доменные типы
   ================================================================ */

/** Класс градиента обложки. В будущем заменится на coverUrl. */
export type CoverClass = 'cover-1' | 'cover-2' | 'cover-3' | 'cover-4' | 'cover-5';

/** Базовые поля, общие для трека и плейлиста */
export interface MediaBase {
    id: number | string;
    title: string;
    coverClass: CoverClass;
    emoji: string;
}

/** Трек — используется в TrackCard и TrackRow */
export interface Track extends MediaBase {
    artist: string;
    duration: string; // "3:42"
}

/** Плейлист — используется в PlaylistCard */
export interface Playlist extends MediaBase {
    count: number;
    /** Специальный флаг для карточки "создать новый плейлист" */
    isNew?: boolean;
}

/** Текущий играющий трек (для NowPlaying / PlayerBar) */
export interface CurrentTrack extends Track {
    currentTime: string; // "1:23"
    totalTime: string; // "3:42"
    progress: number; // 0..100
}

/** Пользователь */
export interface User {
    name: string;
    plan: string;
    initial: string;
}

/** Элемент навигации в Sidebar */
export interface NavItem {
    id: string;
    icon: string;
    label: string;
    active?: boolean;
}

/** Плейлист в списке Sidebar (упрощённый) */
export interface SidebarPlaylist {
    id: number;
    name: string;
}

/** Действие в QuickActions */
export interface QuickAction {
    id: string;
    icon: string;
    label: string;
}

/* ================================================================
   Типы для Section
   ================================================================ */

export type SectionVariant = 'carousel' | 'list' | 'grid';

/** Union всех возможных item, которые может принять Section */
export type SectionItem = Track | Playlist;
