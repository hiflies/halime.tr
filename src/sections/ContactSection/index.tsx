import SectionHeader from "../../components/SectionHeader";
import './styles.css';
// const social = [
//     {
//         icon: 'mail-icon',
//         url: 'mailto:<EMAIL>',
//     },
//     {
//         icon: 'github-icon-2',
//         url: 'https://github.com/hiflies',
//     },
//     {
//         icon: 'linkedin-icon',
//         url: 'https://www.linkedin.com/in/hiflies/',
//     }
// ];

export default function ContactSection() {
    return (
        <>
            <SectionHeader number="04" title="contact"/>
            <section className="next-steps">
                <div id="contact">
                    <svg className="icon" role="presentation" aria-hidden="true">
                        <use href="/icons.svg#social-icon"></use>
                    </svg>
                    <h2>Get In Touch</h2>
                    <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                        visions. Feel free to reach out if you want to connect!</p>
                    <div className="mail-to">
                        <a href="mailto:halimeucarturk@gmail.com" target="_blank">
                            <svg
                                className="button-icon"
                                role="presentation"
                                aria-hidden="true"
                                fill="none"
                                stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                            >
                                <use href="/icons.svg#mail-icon"></use>
                            </svg>
                            <div className="mail-text">
                                <div className="title">Email</div>
                                <div className="address">halimeucarturk@gmail.com</div>
                            </div>
                        </a>
                    </div>
                        <div className="social-links">
                            <a href="https://github.com/hiflies" target="_blank">
                                <svg
                                    className="button-icon"
                                    fill="none"
                                    stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                                >
                                    <use href="/icons.svg#github-icon"></use>
                                </svg>
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/hiflies/" target="_blank">
                                <svg
                                    className="button-icon" fill="none"
                                    stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                                >
                                    <use href="/icons.svg#linkedin-icon"></use>
                                </svg>
                                LinkedIn
                            </a>

                        </div>

                </div>
            </section>
        </>
    );
}