import { useEffect, useRef, useState } from 'react';
import '../styles/experience.css';

type Props = {
    index?: number;
    title: string;
    where: string;
    date: string;
    description: string;
};

export default function WorkExperience({ index = 0, title, where, date, description }: Props) {
    const isCurrent = date.toLowerCase().includes('present');
    const cardRef   = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setVisible(true), index * 120);
                    observer.unobserve(card);
                }
            },
            { threshold: 0.12 }
        );
        observer.observe(card);
        return () => observer.disconnect();
    }, [index]);

    return (
        <div
            ref={cardRef}
            className={[
                'experience-card',
                isCurrent ? 'experience-card--current' : '',
                visible    ? 'visible'                   : '',
            ].filter(Boolean).join(' ')}
            role="listitem"
        >
            <div className="experience-card__header">
                <div className="experience-card__title-group">
                    <h3 className="experience-card__title">{title}</h3>
                    {isCurrent && (
                        <span className="experience-card__current-badge" aria-label="Current position">
                            Current
                        </span>
                    )}
                </div>
                <span className="experience-card__date" aria-label={`Duration: ${date}`}>
                    {date}
                </span>
            </div>

            <p className="experience-card__where">{where}</p>
            <p className="experience-card__description">{description}</p>
        </div>
    );
}
