import './styles.css';
import SectionHeader from "../../components/SectionHeader";
import ExperienceCard from "./ExperienceCard.tsx";

const experiences = [
    {

        title: 'Frontend Developer',
        timeline: 'March 2025 - Present',
        company: 'George Washington University',
        details: [
            'Designed and deployed full-stack applications on AWS EC2 with AWS RDS for reliable database management and 99.999% uptime.',
            'Containerized applications using Docker, enabling 40% faster deployment cycles.',
            'Designed CI/CD pipelines with GitHub Actions, reducing release times by 50%.',
            'Built full-stack application with React.js, Node.js, Express.js, PostgreSQL, and Tailwind CSS, supporting 500+ concurrent users and 20% faster load times.',
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