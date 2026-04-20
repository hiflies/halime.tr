import './styles.css';
import SectionHeader from "../../components/SectionHeader";
import ExperienceCard from "./ExperienceCard.tsx";

const experiences = [

    {
        title: 'Software Developer',
        timeline: 'March 2026 - Present',
        company: 'Lexicon IT',
        details: [
            'Built foundational skills in C# and the .NET ecosystem',
            'Developed modern web applications using HTML, CSS, JavaScript, React, Bootstrap, and Vite',
            'Participated in team-based projects, collaborating with peers on development tasks',
            'Took part in project planning, task distribution, and regular team meetings',
            'Gained experience with structured development workflows and collaborative problem-solving'
        ]
    },
    {
        title: 'Junior Developer',
        timeline: 'January 2022 - March 2023',
        company: 'Inovathings',
        details: [
            'Contributed to the development of the company’s website using WordPress',
            'Translated UI/UX designs from Figma and Zeplin into functional React Native interfaces',
            'Developed responsive and user-friendly mobile application components',
            'Supported the development of the admin panel using React',
            'Focused on writing clean, maintainable, and scalable code'
        ]
    }
]
export default function ExperienceSection() {
    return (
        <>
            <SectionHeader number="02" title="experience"/>
            <section>
                {
                    experiences.map((experience, index) => (
                        <ExperienceCard
                            key={index}
                            experienceTitle={experience.title}
                            experienceTimeline={experience.timeline}
                            experienceCompany={experience.company}
                            experienceDetails={experience.details}
                        />))
                }
            </section>
        </>
    );
}