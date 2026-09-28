import type { User, NavItem, SidebarPlaylist, Track, Playlist, CurrentTrack } from '../types';

export const user: User = {
    name: 'Username',
    plan: 'Free plan',
    initial: 'U',
};

export const navItems: NavItem[] = [
    { id: 'home', icon: '🏠', label: 'Главная', active: true },
    { id: 'library', icon: '📚', label: 'Библиотека' },
    { id: 'playlists', icon: '📁', label: 'Плейлисты' },
    { id: 'queue', icon: '🎧', label: 'Очередь' },
    { id: 'stats', icon: '📊', label: 'Статистика' },
    { id: 'settings', icon: '⚙', label: 'Настройки' },
];

export const sidebarPlaylists: SidebarPlaylist[] = [
    { id: 1, name: 'Chill Vibes' },
    { id: 2, name: 'Phonk for Gym' },
    { id: 3, name: 'Workout Mix' },
    { id: 4, name: 'Late Night' },
];

export const recentlyAdded: Track[] = [
    {
        id: 1,
        title: 'Midnight City',
        artist: 'M83',
        duration: '3:42',
        coverClass: 'cover-1',
        emoji: '🎧',
    },
    {
        id: 2,
        title: 'Blinding Lights',
        artist: 'The Weeknd',
        duration: '3:20',
        coverClass: 'cover-2',
        emoji: '🎵',
    },
    {
        id: 3,
        title: 'Phonk Attack',
        artist: 'Kordhell',
        duration: '2:55',
        coverClass: 'cover-3',
        emoji: '🔥',
    },
    {
        id: 4,
        title: 'Thunderstruck',
        artist: 'AC/DC',
        duration: '4:52',
        coverClass: 'cover-4',
        emoji: '⚡',
    },
    {
        id: 5,
        title: 'Ocean Drive',
        artist: 'Duke Dumont',
        duration: '3:26',
        coverClass: 'cover-5',
        emoji: '🌊',
    },
];

export const recentlyPlayed: Track[] = [
    {
        id: 1,
        title: 'Midnight City',
        artist: 'M83',
        duration: '3:42',
        coverClass: 'cover-1',
        emoji: '🎧',
    },
    {
        id: 2,
        title: 'Blinding Lights',
        artist: 'The Weeknd',
        duration: '3:20',
        coverClass: 'cover-2',
        emoji: '🎵',
    },
    {
        id: 3,
        title: 'Phonk Attack',
        artist: 'Kordhell',
        duration: '2:55',
        coverClass: 'cover-3',
        emoji: '🔥',
    },
    {
        id: 4,
        title: 'Thunderstruck',
        artist: 'AC/DC',
        duration: '4:52',
        coverClass: 'cover-4',
        emoji: '⚡',
    },
];

export const userPlaylists: Playlist[] = [
    { id: 1, title: 'Chill Vibes', count: 24, coverClass: 'cover-1', emoji: '🎧' },
    { id: 2, title: 'Phonk for Gym', count: 12, coverClass: 'cover-3', emoji: '🔥' },
    { id: 3, title: 'Workout Mix', count: 8, coverClass: 'cover-2', emoji: '💪' },
    { id: 4, title: 'Новый плейлист', isNew: true, count: 0, coverClass: 'cover-1', emoji: '' },
];

export const currentTrack: CurrentTrack = {
    id: 1,
    title: 'Midnight City',
    artist: 'M83',
    coverClass: 'cover-1',
    emoji: '🎧',
    duration: '3:42',
    currentTime: '1:23',
    totalTime: '3:42',
    progress: 38,
};

export const queue: Track[] = [
    {
        id: 2,
        title: 'Blinding Lights',
        artist: 'The Weeknd',
        duration: '3:20',
        coverClass: 'cover-2',
        emoji: '🎵',
    },
    {
        id: 3,
        title: 'Phonk Attack',
        artist: 'Kordhell',
        duration: '2:55',
        coverClass: 'cover-3',
        emoji: '🔥',
    },
    {
        id: 4,
        title: 'Thunderstruck',
        artist: 'AC/DC',
        duration: '4:52',
        coverClass: 'cover-4',
        emoji: '⚡',
    },
];
