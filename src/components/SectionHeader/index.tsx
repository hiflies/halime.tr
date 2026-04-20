import './styles.css'

type SectionProps = {
    number: string,
    title: string,
}
export default function SectionHeader({number, title}: SectionProps) {
    return (
        <div className="section-header" id={`section-${number}`}>
            <span>{number}</span>
            <div className="divider"></div>
            <span>{title}.js</span>
        </div>
    );
}
