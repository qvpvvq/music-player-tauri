function Header() {
    return (
        <header className="header">
            <div className="search-wrapper">
                <span className="search-icon">🔍</span>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Поиск треков, артистов или вставьте ссылку..."
                />
                <span className="search-source-badge" id="sourceBadge"></span>
            </div>

            <div className="header-actions">
                <button className="btn btn-primary">＋ Добавить</button>
                <button className="btn btn-ghost" title="Настройки">
                    ⚙
                </button>
            </div>
        </header>
    );
}

export default Header;
