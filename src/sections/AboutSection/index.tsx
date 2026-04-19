import './styles.css';
import SectionHeader from "../../components/SectionHeader";
import TechStack from "./TechStack.tsx";

const techStacks = [
    {
        title: 'Programming Languages',
        details: [
            'C#',
            'TypeScript',
            'JavaScript (ES6+)',
            'HTML5',
            'CSS3',
        ],
    },
    {
        title: 'Frameworks & Libraries',
        details: [
            'React.js',
            'React Native',
            'Node.js',
            'Redux',
            'Bootstrap',
            'Tailwind CSS',
            'Vite',
        ]
    },
    {
        title: 'Software & Tools',
        details: [
            'Claude',
            'Git',
            'Visual Studio Code',
            'Webstorm',
            'Rider',
            'Cursor',
            'Github',
        ]
    },
    {
        title: 'Expertise',
        details: [
            'Generative AI',
            'Web Development',
            'Mobile Development',
            'Agile',
        ]
    },
];

export default function AboutSection() {
    return (
        <>
            <SectionHeader number="01" title="about"/>
            <section className="next-steps">
                <div id="about">
                    <svg className="icon" role="presentation" aria-hidden="true">
                        <use href="/icons.svg#documentation-icon"></use>
                    </svg>
                    <h2>About Me</h2>
                    <p>Hello, I’m Halime Uçar Türk, a Junior Software Developer based in Malmö, Sweden. I hold a
                        Bachelor’s degree in Architecture, but over time I discovered a strong passion for software
                        development and decided to pursue it more actively..</p>
                    <p>For the past few years, I’ve been developing my skills in web and mobile technologies, primarily
                        working with React and React Native. I enjoy turning ideas and designs into functional,
                        user-friendly applications, and I have experience collaborating with design tools like Figma and
                        Zeplin to bring interfaces to life.</p>
                    <p>Professionally, I’ve contributed to website development using WordPress, supported the creation
                        of admin panels with React, and worked on implementing mobile app designs in React Native. I’m
                        continuously learning and improving my skills, with a focus on building clean, efficient, and
                        scalable solutions.</p>
                    <p>Outside of coding, I enjoy creative and mindful activities like origami, solving puzzles, and
                        taking care of plants. I’m currently looking for opportunities where I can grow as a developer
                        and contribute to meaningful projects.</p>
                    <ul>
                        <li>
                            <a href="https://blog.halime.tr/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                     stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                                Explore Website
                            </a>
                        </li>
                        <li>
                            <a href="https://flowcv.com/resume/gqscdm1h4p" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                     stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                                View Resume
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Tech Stack</h3>
                    {
                        techStacks.map((techStack) => (
                            <TechStack key={techStack.title} title={techStack.title} details={techStack.details}/>
                        ))
                    }
                </div>
            </section>
        </>
    );
}