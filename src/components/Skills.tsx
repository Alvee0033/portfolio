"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PROFILE_DATA } from "@/lib/data";
import { 
    SiJavascript, SiTypescript, SiPython, SiCplusplus, SiDart, SiArduino,
    SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress, SiNestjs,
    SiPostgresql, SiMongodb, SiFlutter, SiTensorflow, SiPytorch, SiOpencv,
    SiDocker, SiGit, SiAmazonwebservices, SiLinux, SiFigma, SiFramer
} from "react-icons/si";
import { FaMobileAlt, FaRobot, FaJava } from "react-icons/fa";

const ICON_MAP: Record<string, any> = {
    "JavaScript": SiJavascript,
    "TypeScript": SiTypescript,
    "Python": SiPython,
    "Java": FaJava,
    "C++": SiCplusplus,
    "Dart": SiDart,
    "Arduino": SiArduino,
    "React": SiReact,
    "Next.js": SiNextdotjs,
    "Tailwind CSS": SiTailwindcss,
    "Framer Motion": SiFramer,
    "Node.js": SiNodedotjs,
    "Express": SiExpress,
    "NestJS": SiNestjs,
    "PostgreSQL": SiPostgresql,
    "MongoDB": SiMongodb,
    "Flutter": SiFlutter,
    "React Native": FaMobileAlt,
    "TensorFlow": SiTensorflow,
    "PyTorch": SiPytorch,
    "OpenCV": SiOpencv,
    "LLMs (Groq)": FaRobot,
    "Docker": SiDocker,
    "Git": SiGit,
    "AWS": SiAmazonwebservices,
    "Linux": SiLinux,
    "Figma": SiFigma,
};

const LANG_COLORS: Record<string, string> = {
    "JavaScript": "#F7DF1E",
    "TypeScript": "#3178C6",
    "Python": "#3776AB",
    "Java": "#007396",
    "C++": "#00599C",
    "Dart": "#0175C2",
    "Arduino": "#00979D",
    "React": "#61DAFB",
    "Next.js": "#ffffff",
    "Tailwind CSS": "#06B6D4",
    "Framer Motion": "#0055FF",
    "Node.js": "#339933",
    "Express": "#ffffff",
    "NestJS": "#E0234E",
    "PostgreSQL": "#4169E1",
    "MongoDB": "#47A248",
    "Flutter": "#02569B",
    "React Native": "#61DAFB",
    "TensorFlow": "#FF6F00",
    "PyTorch": "#EE4C2C",
    "OpenCV": "#5C3EE8",
    "LLMs (Groq)": "#F55036",
    "Docker": "#2496ED",
    "Git": "#F05032",
    "AWS": "#FF9900",
    "Linux": "#FCC624",
    "Figma": "#F24E1E",
};

const categories = ["All", "Languages", "Frontend", "Backend", "Mobile", "AI/ML", "DevOps & Tools"];

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState("All");

    const allSkills = PROFILE_DATA.skills.flatMap(cat => cat.items.map(name => ({
        name,
        category: cat.category
    })));

    const filteredSkills = activeCategory === "All"
        ? allSkills
        : allSkills.filter((s) => s.category === activeCategory);

    return (
        <section id="skills" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="cyber-title">TECH ECOSYSTEM</span>
                    </h2>
                    <p className="text-white/50 max-w-xl mx-auto">Technologies I use to build amazing digital experiences</p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                    ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                    : "bg-white/5 text-white/70 hover:bg-white/10 border border-white/10"
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>

                <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
                    {filteredSkills.map((skill, index) => {
                        const Icon = ICON_MAP[skill.name];
                        const color = LANG_COLORS[skill.name] || "#2563eb";
                        
                        return (
                            <motion.div
                                key={skill.name + index}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.02 }}
                                whileHover={{ y: -5 }}
                                className="flex flex-col items-center gap-2 group cursor-pointer"
                            >
                                <div
                                    className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10 relative overflow-hidden"
                                >
                                    <div 
                                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
                                        style={{ backgroundColor: color }}
                                    />
                                    {Icon ? (
                                        <Icon className="w-8 h-8 transition-all duration-300 group-hover:scale-110 z-10" style={{ color }} />
                                    ) : (
                                        <div className="w-8 h-8 flex items-center justify-center z-10">
                                            <span className="text-xl font-bold text-white/20 group-hover:text-blue-400 transition-colors">{skill.name[0]}</span>
                                        </div>
                                    )}
                                </div>
                                <span className="text-[10px] uppercase tracking-wider text-white/40 group-hover:text-white/80 transition-colors text-center font-mono">{skill.name}</span>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
