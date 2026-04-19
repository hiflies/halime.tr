import './styles.css'
import ToggleThemeButton from "./ToggleThemeButton.tsx";

function scrollToSection(sectionId: string) {
    document.getElementById(`section-${sectionId}`)?.scrollIntoView({behavior: 'smooth'});
}

export default function NavigationMenu() {
    return (
        <div className="navigation-menu">
            <nav>
                <div className="logo">halime<span>UcarTurk</span><span className="fn-call">();</span></div>
                <div className="links">
                    <a onClick={() => scrollToSection('01')}>About</a>
                    <a onClick={() => scrollToSection('02')}>Experience</a>
                    <a onClick={() => scrollToSection('03')}>Projects</a>
                    <a onClick={() => scrollToSection('04')}>Contact</a>
                </div>
                <div className="right-section">
                    <ToggleThemeButton/>
                </div>
            </nav>
        </div>
    )
}