const actions = [
    { id: 'url', icon: '', label: 'Добавить трек по ссылке' },
    { id: 'search', icon: 'uicons/search.svg', label: 'Найти трек' },
];

export default function QuickActions() {
    return (
        <div className="quick-actions">
            {actions.map((a) => (
                <button key={a.id} className="qa-btn">
                    {a.icon && <img src={a.icon} style={{ padding: '5px' }} className="qa-icon" />}
                    {a.label}
                </button>
            ))}
        </div>
    );
}
