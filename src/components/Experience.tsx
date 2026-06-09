import { workexperience } from '../data/experience';
import WorkExperience from './WorkExperience';

export default function ExperienceSection() {
    return (
        <section id="experience" aria-labelledby="experience-title">
            <div className="experience-header">
                <h2 id="experience-title" className="section-title" data-reveal>Work Experience</h2>
                <p className="section-subtitle" data-reveal data-delay="1">Where I've worked</p>
            </div>

            <div className="experience-list" role="list">
                {workexperience.map((exp, index) => (
                    <WorkExperience
                        key={index}
                        index={index}
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
