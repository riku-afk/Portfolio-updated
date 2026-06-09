import { projects } from '../data/projects';
import ProjectCard from './ProjectsCard';

export default function ProjectsSection() {
    return (
        <section id="projects" aria-labelledby="projects-title">
            <div className="projects-header">
                <h2 id="projects-title" className="section-title" data-reveal>Projects</h2>
                <p className="section-subtitle" data-reveal data-delay="1">A selection of things I've built</p>
            </div>

            <div className="projects-grid" role="list">
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
}
