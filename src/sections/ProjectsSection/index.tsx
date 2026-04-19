import './styles.css';
import SectionHeader from "../../components/SectionHeader";
import Project from "./Project.tsx";

export default function ProjectsSection() {
    return (
        <>
            <SectionHeader number="03" title="projects"/>
            <div id="projects">
                <Project/>
                <Project/>
                <Project/>
                <Project/>
            </div>
        </>
    );
}