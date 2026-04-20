type Link = {
    href: string,
    text: string,
    icon: string,
};

type ProjectProps = {
    title: string,
    description: string,
    stack: string[],
    links: Link[],
};

export default function Project(props: ProjectProps) {
    const {title, description, stack, links} = props;
    return (
        <section className="project">
            <div className="project-title">
                <div
                    className="project-title-pointer"></div>
                {title}
            </div>
            <div className="project-description">
                <p>{description}</p>
                <div className="project-stack">
                    {stack.map((item, index) => (<code key={index}>{item}</code>))}
                </div>
                <div className="links">
                    {links.map((link, index) => (
                        <a href={link.href} key={index}
                           target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
                                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <use href={`/icons.svg#${link.icon}`}></use>
                            </svg>
                            <span>{link.text}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}