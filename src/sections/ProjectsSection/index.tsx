import './styles.css';
import SectionHeader from "../../components/SectionHeader";
import Project from "./Project.tsx";

const projects = [
    {
        title: 'Honeybee Cakes',
        description: 'This project is a modern bakery website built from an AI-generated design. It focuses on responsive layout, interactive elements, and delivering a smooth, visually engaging user experience.',
        stack: ['HTML', 'CSS', 'JavaScript', 'React'],
        links: [
            {href: 'https://github.com/hiflies/mini-web-projects/tree/main/honeybee-cakes-react', text: 'GitHub', icon: 'github-icon-2'},
            {href: 'https://mini.halime.tr/honeybee-cakes/', text: 'Demo', icon: 'link-icon'},
        ],
    },
    {
        title: 'Yellow Corporation Tracking App',
        description: 'A shipment tracking dashboard built with React and TypeScript. View incoming parcels, filter by status, and navigate to pickup locations directly from the app.',
        stack: ['HTML', 'CSS', 'TypeScript', 'React', 'Bootstrap'],
        links: [
            {href: 'https://github.com/hiflies/yellow-corp-tracking', text: 'GitHub', icon: 'github-icon-2'},
            {href: 'https://mini.halime.tr/yellow-corp-tracking/', text: 'Demo', icon: 'link-icon'},
        ],
    },
    {
        title: 'Munamii Cakery',
        description: 'Munamii Cakery is a website developed using modern web technologies. A responsive and user-friendly interface has been designed using HTML and CSS, providing a visually focused presentation of the products.',
        stack: ['HTML', 'CSS'],
        links: [
            {href: 'https://github.com/hiflies/mini-web-projects/tree/main/munamii-cakery', text: 'GitHub', icon: 'github-icon-2'},
            {href: 'https://mini.halime.tr/munamii-cakery/', text: 'Demo', icon: 'link-icon'},
        ],
    },
    {
        title: 'Maze Maker',
        description: 'Maze Maker is a mini project that generates customizable mazes. It focuses on algorithmic logic,  and dynamic rendering, providing an engaging and functional experience.',
        stack: ['HTML', 'P5.js'],
        links: [
            {href: 'https://github.com/hiflies/mini-web-projects/tree/main/p5/maze', text: 'GitHub', icon: 'github-icon-2'},
            {href: 'https://mini.halime.tr/p5/maze/', text: 'Demo', icon: 'link-icon'},
        ],
    },
    {
        title: 'Pi',
        description: 'Approximate the value of π (pi) through visual or computational methods, demonstrating mathematical concepts and simulations in an interactive and graphical way.',
        stack: ['HTML', 'P5.js'],
        links: [
            {href: 'https://github.com/hiflies/mini-web-projects/tree/main/p5/pi', text: 'GitHub', icon: 'github-icon-2'},
            {href: 'https://mini.halime.tr/p5/pi/', text: 'Demo', icon: 'link-icon'},
        ],
    },
    {
        title: 'Parallelogram',
        description: 'Draw and visualize a parallelogram using basic geometric principles, demonstrating how shapes can be created programmatically with vertex-based functions and coordinates.”',
        stack: ['HTML', 'P5.js'],
        links: [
            {href: 'https://github.com/hiflies/mini-web-projects/tree/main/p5/parallelogram', text: 'GitHub', icon: 'github-icon-2'},
            {href: 'https://mini.halime.tr/p5/parallelogram/', text: 'Demo', icon: 'link-icon'},
        ],
    },
    {
        title: 'CV',
        description: 'This mini project involves recreating a randomly selected CV design. The focus was on accurately replicating the layout, typography, and visual structure while ensuring a clean and responsive design.',
        stack: ['HTML', 'CSS'],
        links: [
            {href: 'https://github.com/hiflies/mini-web-projects/tree/main/cv', text: 'GitHub', icon: 'github-icon-2'},
            {href: 'https://mini.halime.tr/cv/', text: 'Demo', icon: 'link-icon'},
        ],
    },
];

export default function ProjectsSection() {
    return (
        <>
            <SectionHeader number="03" title="projects"/>
            <div id="projects">
                {
                    projects.map((project, index) => (
                        <Project key={index} {...project}/>
                    ))
                }
            </div>
        </>
    );
}