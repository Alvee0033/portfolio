import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from "react-icons/fa";
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiPostgresql, SiMongodb, SiFlutter, SiPython, SiTensorflow, SiDocker, SiAmazonwebservices, SiGit } from "react-icons/si";

export const PROFILE_DATA = {
    name: "Your Name",
    role: "Full-Stack Developer & AI Specialist",
    username: "your-username",
    location: "Your Location",
    bio: "Your bio here.",
    about: "Write your about section here.",
    links: {
        github: "https://github.com/your-username",
        linkedin: "https://linkedin.com/in/your-username",
        email: "mailto:your@email.com",
        facebook: "https://facebook.com/your-username",
    },
    phone: "",
    skills: [
        { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "Java", "C++", "Dart"] },
        { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
        { category: "Backend", items: ["Node.js", "Express", "NestJS", "PostgreSQL", "MongoDB"] },
        { category: "Mobile", items: ["Flutter", "React Native"] },
        { category: "AI/ML", items: ["TensorFlow", "PyTorch", "OpenCV", "LLMs"] },
        { category: "DevOps & Tools", items: ["Docker", "Git", "AWS", "Linux", "Figma"] },
    ],
    techStack: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "React", icon: SiReact },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Flutter", icon: SiFlutter },
        { name: "Python", icon: SiPython },
        { name: "TensorFlow", icon: SiTensorflow },
        { name: "Docker", icon: SiDocker },
        { name: "AWS", icon: SiAmazonwebservices },
        { name: "Git", icon: SiGit },
    ],
    featuredProjects: [
        { name: "project-1", description: "Description of your project.", language: "TypeScript", url: "https://github.com/your-username/project-1" },
        { name: "project-2", description: "Description of your project.", language: "Python", url: "https://github.com/your-username/project-2" },
        { name: "project-3", description: "Description of your project.", language: "JavaScript", url: "https://github.com/your-username/project-3" },
    ],
};
