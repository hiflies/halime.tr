import SectionHeader from "../../components/SectionHeader";

export default function ContactSection() {
    return (
        <>
            <SectionHeader number="04" title="contact"/>
            <section className="next-steps">
                <div>
                    <svg className="icon" role="presentation" aria-hidden="true">
                        <use href="/icons.svg#social-icon"></use>
                    </svg>
                    <h2>Get In Touch</h2>
                    <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out if you want to connect!</p>
                    <ul>
                        <li>
                            <a href="https://github.com/vitejs/vite" target="_blank">
                                <svg
                                    className="button-icon"
                                    role="presentation"
                                    aria-hidden="true"
                                >
                                    <use href="/icons.svg#github-icon"></use>
                                </svg>
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a href="https://chat.vite.dev/" target="_blank">
                                <svg
                                    className="button-icon"
                                    role="presentation"
                                    aria-hidden="true"
                                >
                                    <use href="/icons.svg#discord-icon"></use>
                                </svg>
                                Discord
                            </a>
                        </li>
                        <li>
                            <a href="https://x.com/vite_js" target="_blank">
                                <svg
                                    className="button-icon"
                                    role="presentation"
                                    aria-hidden="true"
                                >
                                    <use href="/icons.svg#x-icon"></use>
                                </svg>
                                X.com
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}