import { NavLink } from 'react-router';
import { navItems, sidebarPlaylists, user } from '../../../data/mock.ts';

export default function Sidebar() {
    return (
        <aside className="sidebar">
            {/* Logo */}
            <div className="logo">
                <div className="logo-mark">🎵</div>
                <div className="logo-text">
                    СК<span>·САУНДКЛАУД</span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="nav">
                {navItems.map((item) => (
                    <NavLink
                        to={item.link}
                        key={item.id}
                        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                        <span className="icon">{item.icon}</span>
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="nav-divider"></div>

            {/* Playlists */}
            <div className="playlists-section">
                <div className="playlists-label">
                    <span>Плейлисты</span>
                    <button title="Создать плейлист">＋</button>
                </div>
                {sidebarPlaylists.map((pl) => (
                    <div key={pl.id} className="playlist-item">
                        <span className="dot"></span>
                        {pl.name}
                    </div>
                ))}
            </div>

            {/* User footer */}
            <div className="sidebar-footer">
                <div className="avatar">{user.initial}</div>
                <div className="user-info">
                    <div className="user-name">{user.name}</div>
                    <div className="user-status">{user.plan}</div>
                </div>
            </div>
        </aside>
    );
}
