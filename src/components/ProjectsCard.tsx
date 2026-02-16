import { useEffect, useRef } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import type { Project } from "../data/projects";
import "../styles/projectcard.css";

function getStatusStyle(status: Project["status"]) {
    switch (status) {
        case "in-progress":
            return { backgroundColor: "rgba(251, 191, 36, 0.1)", color: "#fbbf24", label: "In Progress" };
        case "completed":
            return { backgroundColor: "rgba(52, 211, 153, 0.1)", color: "#34d399", label: "Completed" };
        default:
            return null;
    }
}

export default function ProjectCard({
    title,
    description,
    technologies,
    github,
    live,
    status,
}: Project) {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("visible");
                    observer.unobserve(el);
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const hasLinks = (github && github.length > 0) || (live && live.length > 0);
    const badge = getStatusStyle(status);

    return (
        <div className="project-card" ref={cardRef}>
            <div className="project-card__body">
                <div className="project-card__title-row">
                    <h3 className="project-card__title">{title}</h3>
                    {badge && (
                        <span
                            className="project-card__badge"
                            style={{ backgroundColor: badge.backgroundColor, color: badge.color }}
                        >
                            {badge.label}
                        </span>
                    )}
                </div>
                <p className="project-card__description">{description}</p>

                <div className="project-card__tags">
                    {technologies.map((t) => (
                        <span key={t} className="project-card__tag">
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            {hasLinks && (
                <div className="project-card__links">
                    {github && github.length > 0 && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noreferrer"
                            className="project-card__link"
                            aria-label={`${title} source code`}
                        >
                            <FiGithub />
                            <span>Source</span>
                        </a>
                    )}
                    {live && live.length > 0 && (
                        <a
                            href={live}
                            target="_blank"
                            rel="noreferrer"
                            className="project-card__link"
                            aria-label={`${title} live demo`}
                        >
                            <FiExternalLink />
                            <span>Live</span>
                        </a>
                    )}
                </div>
            )}
        </div>
    );
}
