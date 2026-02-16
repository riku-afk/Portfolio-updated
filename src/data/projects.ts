export type Project = {
    title: string;
    description: string;
    technologies: string[];
    github?: string;
    live?: string;
    status?: "in-progress" | "completed";
};

export const projects: Project[] = [
    {
        title: "Gamified Fitness Monitoring App",
        description:
            "A capstone project focused on a mobile application that allows users to track their fitness goals and monitor their progress through gamification.",
        technologies: ["Android Studio", "Java", "Firebase"],
        github: "",
        status: "completed",
    },
    {
        title: "ML-based Rogue Access Point Detection",
        description:
            "A system designed to detect rogue access points in a network to enhance security measures using the AWID-2 dataset and Random Forest algorithm.",
        technologies: ["Python", "Scikit-learn", "Flask", "Pandas"],
        github: "https://github.com/riku-afk/Machine-Learning-based-Rouge-Access-Point-detection-using-AWID-2-Dataset-and-Random-Forest-Algorithm/tree/master",
        status: "completed",
        live: "https://machine-learning-based-rouge-access.onrender.com"
    },
    {
        title: "Pulse AI — Generative Wellness Coach",
        description:
            "A generative AI coach for wellness, providing personalized health guidance through conversational AI.",
        technologies: ["React Native"],
        github: "https://github.com/riku-afk/Pulse-Wellness-AI-coach/tree/main/Pulse",
        status: "in-progress",
    },
];
