import './styles.css';
import SectionHeader from "../../components/SectionHeader";
import Project from "./Project.tsx";

const projects = [
    {
        title: 'BoardVerse',
        description: 'BoardVerse is a social platform for board game enthusiasts. Users can browse a game catalog, log their plays, write posts, follow hashtags/categories, and manage their profile.',
        stack: ['C#', 'ASP.NET Core MVC', 'Entity Framework Core', 'MySQL', 'React', 'TypeScript', 'TanStack Router', 'TanStack Query', 'Zustand'],
        links: [
            {href: 'https://github.com/hiflies/boardverse-backend', text: 'Backend', icon: 'github-icon-2'},
            {href: 'https://github.com/hiflies/boardverse-frontend', text: 'Frontend', icon: 'github-icon-2'},
            {href: 'https://boardverse.se', text: 'Demo', icon: 'link-icon'},
        ],
    },
    {
        title: 'CineScope',
        description: 'A movie discovery and management web application built with ASP.NET Core MVC. Browse movies, filter by genre, view detailed information, search and import movies from TMDB, and manage the catalog through an admin dashboard.',
        stack: ['C#', 'ASP.NET Core MVC', '.NET 10', 'Entity Framework Core', 'SQL Server', 'Razor', 'Tailwind CSS'],
        links: [
            { href: 'https://github.com/hiflies/cinescope', text: 'GitHub', icon: 'github-icon-2' },
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