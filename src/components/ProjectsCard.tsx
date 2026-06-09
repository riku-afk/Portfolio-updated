import { useEffect, useRef } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import type { Project } from '../data/projects';
import '../styles/projectcard.css';

function getStatusBadge(status: Project['status']) {
    switch (status) {
        case 'in-progress':
            return {
                style: { backgroundColor: 'var(--clr-warning-bg)', color: 'var(--clr-warning)', borderColor: 'var(--clr-warning-bdr)' },
                label: 'In Progress',
            };
        case 'completed':
            return {
                style: { backgroundColor: 'var(--clr-success-bg)', color: 'var(--clr-success)', borderColor: 'var(--clr-success-bdr)' },
                label: 'Completed',
            };
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
                    el.classList.add('visible');
                    observer.unobserve(el);
                }
            },
            { threshold: 0.1 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const hasLinks = !!(github?.length || live?.length);
    const badge    = getStatusBadge(status);

    return (
        <div className="project-card" ref={cardRef} role="listitem">
            <div className="project-card__body">
                <div className="project-card__title-row">
                    <h3 className="project-card__title">{title}</h3>
                    {badge && (
                        <span
                            className="project-card__badge"
                            style={{
                                ...badge.style,
                                border: `1px solid ${badge.style.borderColor}`,
                            }}
                        >
                            {badge.label}
                        </span>
                    )}
                </div>

                <p className="project-card__description">{description}</p>

                <div className="project-card__tags" aria-label="Technologies used">
                    {technologies.map((t) => (
                        <span key={t} className="project-card__tag">{t}</span>
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
                            aria-label={`${title} — view source code on GitHub`}
                        >
                            <FiGithub aria-hidden="true" />
                            <span>Source</span>
                        </a>
                    )}
                    {live && live.length > 0 && (
                        <a
                            href={live}
                            target="_blank"
                            rel="noreferrer"
                            className="project-card__link"
                            aria-label={`${title} — view live demo`}
                        >
                            <FiExternalLink aria-hidden="true" />
                            <span>Live Demo</span>
                        </a>
                    )}
                </div>
            )}
        </div>
    );
}
