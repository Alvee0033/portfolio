"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROFILE_DATA } from "@/lib/data";
import {
    SiNextdotjs, SiReact, SiNodedotjs, SiExpress, SiNestjs,
    SiFlutter, SiMongodb, SiPostgresql, SiMysql, SiPython,
    SiTensorflow, SiOpencv, SiArduino, SiCplusplus
} from "react-icons/si";
import { BrainCircuit, Eye, Bot, Network } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
    "Next.js": SiNextdotjs,
    "React.js": SiReact,
    "Node.js": SiNodedotjs,
    "Express.js": SiExpress,
    "NestJS": SiNestjs,
    "Flutter": SiFlutter,
    "MongoDB": SiMongodb,
    "PostgreSQL": SiPostgresql,
    "SQL": SiMysql,
    "Python": SiPython,
    "TensorFlow": SiTensorflow,
    "MediaPipe": Eye,
    "OpenCV": SiOpencv,
    "RAG": Network,
    "Ollama": Bot,
    "LLM API": BrainCircuit,
    "Arduino": SiArduino,
    "C++": SiCplusplus,
};

export default function Skills() {
    const categories = ["All", ...PROFILE_DATA.skills.map(s => s.category)];
    const [activeFilter, setActiveFilter] = useState("All");
    const [showAll, setShowAll] = useState(false);

    const allSkills = PROFILE_DATA.skills.flatMap(group =>
        group.items.map(item => ({ ...item, category: group.category }))
    );

    const filteredSkills = activeFilter === "All"
        ? allSkills
        : allSkills.filter(skill => skill.category === activeFilter);

    const displayedSkills = showAll ? filteredSkills : filteredSkills.slice(0, 6);

    const handleFilterChange = (category: string) => {
        setActiveFilter(category);
        setShowAll(false);
    };

    return (
        <section id="skills" className="py-24 bg-[#030816] relative overflow-hidden">
            {/* Holographic Cyber Grid */}
            <div className="absolute inset-0 cyber-grid pointer-events-none opacity-50 z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-12">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="font-display text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 mb-6 tracking-wide"
                    >
                        TECH ECOSYSTEM
                    </motion.h2>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleFilterChange(category)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === category
                                    ? "bg-primary text-slate-900 shadow-[0_0_15px_rgba(0,229,255,0.4)]"
                                    : "glass-pill text-slate-300 hover:text-white hover:border-primary/50"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Skills Grid */}
                <motion.div layout className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    <AnimatePresence mode="popLayout">
                        {displayedSkills.map((skill) => {
                            const Icon = iconMap[skill.name];
                            return (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.3 }}
                                    key={skill.name}
                                    className="neon-border neon-border-hover rounded-xl p-6 flex flex-col items-center justify-center text-center gap-4 group transition-all"
                                >
                                    <div className="text-4xl text-slate-400 group-hover:text-primary transition-colors">
                                        {Icon && <Icon />}
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-base group-hover:neon-glow transition-all">{skill.name}</h3>
                                        <p className="text-xs text-slate-500 mt-1">{skill.desc}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* Show More / Show Less Button */}
                {filteredSkills.length > 6 && (
                    <motion.div layout className="mt-12 flex justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowAll(!showAll)}
                            className="px-8 py-3 bg-transparent border border-primary/50 text-white font-medium rounded-full hover:bg-primary/10 hover:border-primary transition-all shadow-[0_0_15px_rgba(0,229,255,0.1)] hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]"
                        >
                            {showAll ? "Show Less" : "Show More"}
                        </motion.button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
