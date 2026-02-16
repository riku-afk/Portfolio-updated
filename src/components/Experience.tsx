import { workexperience } from "../data/experience";
import WorkExperience from "./WorkExperience";

export default function ExperienceSection() {
    return (
        <section id="experience">
            <div className="experience-header">
                <h2 className="experience-header__title">Work Experience</h2>
                <p className="experience-header__subtitle">
                    Where I've worked
                </p>
            </div>

            <div className="experience-list">
                {workexperience.map((exp, index) => (
                    <WorkExperience
                        key={index}
                        title={exp.title}
                        where={exp.where}
                        date={exp.date}
                        description={exp.description}
                    />
                ))}
            </div>
        </section>
    );
}