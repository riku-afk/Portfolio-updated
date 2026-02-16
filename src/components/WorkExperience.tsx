import '../styles/experience.css';

type Props = {
    title: string;
    where: string;
    date: string;
    description: string;
};

export default function WorkExperience({
    title,
    where,
    date,
    description,
}: Props) {
    return (
        <div className="experience-card">
            <div className="experience-card__header">
                <h3 className="experience-card__title">{title}</h3>
                <span className="experience-card__date">{date}</span>
            </div>
            <p className="experience-card__where">{where}</p>
            <p className="experience-card__description">{description}</p>
        </div>
    );
}