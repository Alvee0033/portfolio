"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Terminal, Star, GitFork } from "lucide-react";
import {
    SiNextdotjs, SiReact, SiNodedotjs, SiExpress, SiNestjs,
    SiFlutter, SiMongodb, SiPostgresql, SiMysql, SiPython,
    SiTensorflow, SiOpencv, SiArduino, SiCplusplus, SiTailwindcss, SiDart,
    SiTypescript, SiJavascript, SiSqlite, SiHtml5
} from "react-icons/si";
import { BrainCircuit, Eye, Bot, Network } from "lucide-react";

interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
    homepage: string | null;
    topics: string[];
    language: string;
    stargazers_count: number;
    forks_count: number;
    fork: boolean;
}

const iconMap: Record<string, React.ElementType> = {
    "Next.js": SiNextdotjs,
    "React.js": SiReact,
    "React": SiReact,
    "Node.js": SiNodedotjs,
    "Express.js": SiExpress,
    "NestJS": SiNestjs,
    "Flutter": SiFlutter,
    "MongoDB": SiMongodb,
    "PostgreSQL": SiPostgresql,
    "SQL": SiMysql,
    "SQLite": SiSqlite,
    "Python": SiPython,
    "TensorFlow": SiTensorflow,
    "MediaPipe": Eye,
    "OpenCV": SiOpencv,
    "RAG": Network,
    "Ollama": Bot,
    "LLM API": BrainCircuit,
    "Arduino": SiArduino,
    "C++": SiCplusplus,
    "Tailwind CSS": SiTailwindcss,
    "Dart": SiDart,
    "TypeScript": SiTypescript,
    "JavaScript": SiJavascript,
    "Shell": Terminal,
    "HTML": SiHtml5
};

const colorMap: Record<string, string> = {
    "Next.js": "text-white",
    "React": "text-[#61DAFB]",
    "React.js": "text-[#61DAFB]",
    "Node.js": "text-[#339933]",
    "Express.js": "text-white",
    "NestJS": "text-[#E0234E]",
    "Flutter": "text-[#02569B]",
    "MongoDB": "text-[#47A248]",
    "PostgreSQL": "text-[#4169E1]",
    "SQL": "text-[#4479A1]",
    "SQLite": "text-[#003B57]",
    "Python": "text-[#3776AB]",
    "TensorFlow": "text-[#FF6F00]",
    "MediaPipe": "text-[#00B4EB]",
    "OpenCV": "text-[#5C3EE8]",
    "RAG": "text-[#FF9900]",
    "Ollama": "text-white",
    "LLM API": "text-[#10A37F]",
    "Arduino": "text-[#00979D]",
    "C++": "text-[#00599C]",
    "Tailwind CSS": "text-[#06B6D4]",
    "Dart": "text-[#0175C2]",
    "TypeScript": "text-[#3178C6]",
    "JavaScript": "text-[#F7DF1E]",
    "Shell": "text-[#4EAA25]",
    "HTML": "text-[#E34F26]"
};

export default function Projects() {
    const [projects, setProjects] = useState<Repository[]>([]);
    const [showAll, setShowAll] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                // Fetch user repos sorted by updated time
                const response = await fetch("https://api.github.com/users/Alvee0033/repos?sort=updated&per_page=100");
                if (response.ok) {
                    const data: Repository[] = await response.json();
                    // Filter out repos without descriptions or forks if you prefer, here we keep all non-forks
                    const filteredData = data.filter(repo => !repo.fork && repo.name !== "Alvee0033");
                    setProjects(filteredData);
                }
            } catch (error) {
                console.error("Failed to fetch projects:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const displayedProjects = showAll ? projects : projects.slice(0, 4);

    return (
        <section id="projects" className="py-24 bg-[#030816] relative overflow-hidden">
            {/* Holographic Cyber Grid */}
            <div className="absolute inset-0 cyber-grid pointer-events-none opacity-50 z-0" />

            <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-white/10 pb-4 gap-4">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="font-display text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 tracking-wide m-0"
                    >
                        GITHUB PROJECTS
                    </motion.h2>
                    {!loading && projects.length > 0 && (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-primary font-mono text-sm bg-primary/10 px-3 py-1 rounded-full border border-primary/20 whitespace-nowrap"
                        >
                            Total: {projects.length}
                        </motion.span>
                    )}
                </div>

                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    </div>
                ) : (
                    <>
                        <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
                            <AnimatePresence mode="popLayout">
                                {displayedProjects.map((project, index) => (
                                    <motion.div
                                        key={project.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="neon-border rounded-xl p-4 md:p-6 relative flex flex-col group transition-all aspect-square overflow-hidden bg-slate-900/40 hover:bg-slate-800/60"
                                    >
                                        <div className="flex justify-between items-start mb-2 md:mb-3">
                                            <h3 className="text-sm md:text-lg font-bold text-white group-hover:text-primary transition-colors line-clamp-1 flex-1 pr-2">
                                                {project.name}
                                            </h3>
                                            <div className="flex items-center gap-2 md:gap-3 text-slate-500 text-[9px] md:text-xs font-semibold shrink-0">
                                                <span className="flex items-center gap-1"><Star size={10} className={`md:w-3 md:h-3 ${project.stargazers_count > 0 ? "text-yellow-500" : ""}`} /> {project.stargazers_count}</span>
                                                <span className="flex items-center gap-1"><GitFork size={10} className="md:w-3 md:h-3" /> {project.forks_count}</span>
                                            </div>
                                        </div>

                                        <p className="text-slate-400 text-[10px] md:text-sm leading-snug md:leading-relaxed mb-3 md:mb-4 flex-grow line-clamp-3 md:line-clamp-4">
                                            {project.description || "No description provided."}
                                        </p>

                                        {/* Tech Stack Pills (Language + Topics) */}
                                        <div className="flex flex-wrap gap-1 md:gap-1.5 mb-3 md:mb-4 max-h-[40px] md:max-h-[60px] overflow-y-auto custom-scrollbar">
                                            {project.language && (
                                                <span className="flex items-center gap-1 md:gap-1.5 text-[9px] md:text-xs px-1.5 md:px-2 py-0.5 md:py-1 bg-primary/10 text-primary border border-primary/20 rounded-md font-medium cursor-default whitespace-nowrap">
                                                    {iconMap[project.language] && React.createElement(iconMap[project.language], { className: colorMap[project.language] || "" })}
                                                    {project.language}
                                                </span>
                                            )}
                                            {project.topics?.slice(0, 4).map((topic) => {
                                                const Icon = iconMap[topic];
                                                return (
                                                    <span key={topic} className="flex items-center gap-1 md:gap-1.5 text-[9px] md:text-xs px-1.5 md:px-2 py-0.5 md:py-1 bg-slate-800/50 text-slate-300 border border-slate-700/50 rounded-md font-medium cursor-default whitespace-nowrap">
                                                        {Icon && <Icon className={colorMap[topic] || "text-slate-400"} />}
                                                        {topic}
                                                    </span>
                                                );
                                            })}
                                        </div>

                                        <div className="flex items-center gap-3 md:gap-4 mt-auto pt-2 md:pt-3 border-t border-white/5">
                                            <a
                                                href={project.html_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 md:gap-1.5 text-[9px] md:text-xs font-medium text-slate-300 hover:text-white transition-colors"
                                            >
                                                <Github size={10} className="md:w-3.5 md:h-3.5" />
                                                Repo
                                            </a>
                                            {project.homepage && (
                                                <a
                                                    href={project.homepage}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1 md:gap-1.5 text-[9px] md:text-xs font-medium text-primary hover:text-white transition-colors ml-auto"
                                                >
                                                    <ExternalLink size={10} className="md:w-3.5 md:h-3.5" />
                                                    View
                                                </a>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>

                        {/* Show More / Show Less Button */}
                        {projects.length > 6 && (
                            <motion.div layout className="mt-10 md:mt-12 flex justify-center">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setShowAll(!showAll)}
                                    className="px-6 py-2.5 md:px-8 md:py-3 bg-transparent border border-primary/50 text-white text-sm md:text-base font-medium rounded-full hover:bg-primary/10 hover:border-primary transition-all shadow-[0_0_15px_rgba(0,229,255,0.1)] hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]"
                                >
                                    {showAll ? "Show Less" : `Load All Projects (${projects.length})`}
                                </motion.button>
                            </motion.div>
                        )}
                    </>
                )}
            </div>
        </section>
    );
}
