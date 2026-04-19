type ExperienceCardProps = {
    experienceTitle: string,
    experienceTimeline: string,
    experienceCompany: string,
    experienceDetails: string[],
}
export default function ExperienceCard(props: ExperienceCardProps) {
    const {
        experienceTitle,
        experienceTimeline,
        experienceCompany,
        experienceDetails,
    } = props;

    return (
        <>
            <div className="experience-card">
                <div className="experience-header">
                    <div className="experience-title">
                        <h2>{experienceTitle}</h2>
                        <p>{experienceCompany}</p>
                    </div>
                    <span className="experience-timeline">{experienceTimeline}</span>
                </div>
                <ul>
                    {experienceDetails.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}