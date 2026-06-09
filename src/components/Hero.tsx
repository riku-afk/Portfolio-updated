import {
    SiPhp,
    SiTypescript,
    SiJavascript,
    SiVuedotjs,
    SiQuasar,
    SiPython,
    SiHtml5,
    SiCss3,
    SiNextdotjs,
} from 'react-icons/si';
import '../styles/hero.css';

const techStack = [
    { icon: SiPhp,        label: 'PHP'        },
    { icon: SiTypescript, label: 'TypeScript'  },
    { icon: SiJavascript, label: 'JavaScript'  },
    { icon: SiVuedotjs,   label: 'Vue 3'       },
    { icon: SiQuasar,     label: 'Quasar'      },
    { icon: SiPython,     label: 'Python'      },
    { icon: SiNextdotjs,  label: 'Next.js'     },
    { icon: SiHtml5,      label: 'HTML'        },
    { icon: SiCss3,       label: 'CSS'         },
];

export default function Hero() {
    return (
        <section id="hero" aria-label="Introduction">
            <div className="hero-inner">
                <div className="hero-content">

                    <div className="hero-badge" role="status" aria-label="Currently available for work">
                        <span className="hero-badge__dot" aria-hidden="true" />
                        Open to Opportunities
                    </div>

                    <span className="hero-greeting" aria-hidden="true">Hi, I'm</span>
                    <h1 className="hero-name">Jerald Punzalan</h1>
                    <p className="hero-role">Web Developer</p>

                    <p className="hero-description">
                        I design and develop scalable backend systems and modern frontends,
                        applying clean architecture and structured domain models across the stack.
                        I architect efficient services and distributed components to handle
                        complex processing workloads.
                    </p>

                    <div className="hero-cta">
                        <a href="#projects" className="hero-cta__primary">
                            View Projects
                        </a>
                        <a href="#contact" className="hero-cta__secondary">
                            Get in Touch
                        </a>
                    </div>
                </div>

                <div className="hero-image" aria-hidden="true">
                    <img
                        src="/cropped.jpg"
                        alt="Jerald Punzalan — Web Developer"
                        width="320"
                        height="320"
                        loading="eager"
                    />
                </div>
            </div>

            <div className="hero-stack" aria-label="Technologies I work with">
                <span className="hero-stack__label" aria-hidden="true">Tech Stack</span>
                <div className="hero-stack__icons" role="list">
                    {techStack.map(({ icon: Icon, label }) => (
                        <span
                            key={label}
                            className="hero-stack__item"
                            role="listitem"
                            title={label}
                            aria-label={label}
                        >
                            <Icon aria-hidden="true" />
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
