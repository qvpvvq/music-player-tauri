const actions = [
    { id: 'url', icon: '🔗', label: 'По ссылке' },
    { id: 'search', icon: '🔍', label: 'Найти трек' },
    { id: 'folder', icon: '📂', label: 'Новая папка' },
];

export default function QuickActions() {
    return (
        <div className="quick-actions">
            {actions.map((a) => (
                <button key={a.id} className="qa-btn">
                    <span className="qa-icon">{a.icon}</span>
                    {a.label}
                </button>
            ))}
        </div>
    );
}
