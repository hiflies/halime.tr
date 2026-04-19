import './styles.css';
import TypewriterText from "./TypewriterText.tsx";

const texts = [
    'Software Developer',
    'Web Developer',
    'Frontend Developer',
];

export default function HeroSection() {
    return (
        <section id="hero">
            <code>console.log('Hello, World!');</code>
            <div>
                <h1>Halime Uçar Türk</h1>
                <h2>
                    <TypewriterText texts={texts}/>
                </h2>
                <p>Web developer focused on clean design, smooth user experience, and modern technologies.
                    Always learning, always building.</p>
            </div>
        </section>
    );
}