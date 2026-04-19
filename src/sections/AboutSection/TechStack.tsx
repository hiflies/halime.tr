type TechStackProps = {
    title: string;
    details: string[];
}

export default function TechStack({title, details}: TechStackProps) {
    return (
        <div className="tech-stack">
            <code>{title}</code>
            <div>
                {details.map((item, index) => (<code key={index}>{item}</code>))}
            </div>
        </div>
    );
}