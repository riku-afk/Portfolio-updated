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
} from "react-icons/si";
import '../styles/hero.css';

const techStack = [
    { icon: SiPhp, label: "PHP" },
    { icon: SiTypescript, label: "TypeScript" },
    { icon: SiJavascript, label: "JavaScript" },
    { icon: SiVuedotjs, label: "Vue 3" },
    { icon: SiQuasar, label: "Quasar" },
    { icon: SiPython, label: "Python" },
    { icon: SiNextdotjs, label: "Next.js" },
    { icon: SiHtml5, label: "HTML" },
    { icon: SiCss3, label: "CSS" },
];

export default function Hero() {
    return (
        <section id="hero">
            <div className="hero-inner">
                <div className="hero-content">
                    <span className="hero-greeting">Hi, I'm</span>
                    <h1 className="hero-name">Jerald Punzalan</h1>
                    <p className="hero-role">Web Developer</p>
                    <p className="hero-description">
                        I build scalable APIs with PHP (Slim) and TypeScript, and create modern frontends using Quasar (Vue 3). I apply structured models and clean architecture across the stack, leveraging Python for microservices and processing workloads.
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

                <div className="hero-image">
                    <img src="/cropped.jpg" alt="Jerald Punzalan" />
                </div>
            </div>

            <div className="hero-stack">
                <span className="hero-stack__label">Techstack</span>
                <div className="hero-stack__icons">
                    {techStack.map(({ icon: Icon, label }) => (
                        <span key={label} className="hero-stack__item" title={label}>
                            <Icon />
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
