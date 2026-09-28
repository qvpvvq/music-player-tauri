interface TrackSectionHeaderProps {
    title: string;
    linkText?: string;
    onLinkClick?: () => void;
}

export default function TrackSectionHeader({
    title,
    linkText,
    onLinkClick,
}: TrackSectionHeaderProps) {
    return (
        <div className="section-head">
            <h2 className="section-title">{title}</h2>
            {linkText && (
                <a className="section-link" onClick={onLinkClick}>
                    {linkText}
                </a>
            )}
        </div>
    );
}
