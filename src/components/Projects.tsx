import { projects } from "../data/projects";
import ProjectCard from "./ProjectsCard";

export default function ProjectsSection() {
    return (
        <section id="projects">
            <div className="projects-header">
                <h2 className="projects-header__title">Projects</h2>
                <p className="projects-header__subtitle">
                    A selection of things I've built
                </p>
            </div>

            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
}
