"use client";

import { motion } from "framer-motion";
import { FaGithub, FaStar, FaExternalLinkAlt } from "react-icons/fa";
import { PROFILE_DATA } from "@/lib/data";
import { useEffect, useState } from "react";

const LANG_COLORS: Record<string, string> = {
    JavaScript: "#F7DF1E",
    TypeScript: "#3178C6",
    Python: "#3776AB",
    Dart: "#0175C2",
    HTML: "#E34F26",
    PHP: "#777BB4",
    C: "#A8B9CC",
    Java: "#b07219",
    CSS: "#563d7c",
    Swift: "#ffac45",
    Rust: "#dea584",
};

interface Project {
    name: string;
    description: string;
    language: string;
    url: string;
    stars: number;
}

export default function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchGitHubProjects = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${PROFILE_DATA.username}/repos?sort=updated&per_page=9`);
                if (!response.ok) throw new Error("Failed to fetch");
                const data = await response.json();
                
                const formattedProjects = data.map((repo: any) => ({
                    name: repo.name,
                    description: repo.description || "A cutting-edge project built for performance and scalability.",
                    language: repo.language || "Unknown",
                    url: repo.html_url,
                    stars: repo.stargazers_count
                }));
                
                setProjects(formattedProjects);
            } catch (error) {
                console.error("GitHub fetch error:", error);
                // Fallback to local data if API fails
                setProjects(PROFILE_DATA.featuredProjects.map(p => ({ ...p, stars: 0 })));
            } finally {
                setIsLoading(false);
            }
        };

        fetchGitHubProjects();
    }, []);

    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
                >
                    <div>
                        <p className="text-sm text-white/40 font-mono mb-2">&lt;/&gt; SELECTED WORKS</p>
                        <h2 className="text-4xl md:text-5xl font-bold"><span className="cyber-title">FEATURED PROJECTS</span></h2>
                    </div>
                    <a href={PROFILE_DATA.links.github} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 font-medium">
                        VIEW GITHUB PROFILE <FaExternalLinkAlt className="text-xs" />
                    </a>
                </motion.div>

                {isLoading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {projects.map((project, index) => (
                            <motion.a
                                key={project.name + index}
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ y: -4 }}
                                className="group block rounded-xl overflow-hidden project-card"
                            >
                                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                                    <div className="flex gap-2">
                                        <span className="w-3 h-3 rounded-full bg-red-500/80" />
                                        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                        <span className="w-3 h-3 rounded-full bg-green-500/80" />
                                    </div>
                                    <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: `${LANG_COLORS[project.language] || '#2563eb'}20`, color: LANG_COLORS[project.language] || '#2563eb' }}>
                                        {project.language}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.name}</h3>
                                    <p className="text-white/50 text-sm leading-relaxed line-clamp-2 mb-6">{project.description}</p>
                                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                        <div className="flex items-center gap-4">
                                            <span className="flex items-center gap-1 text-sm text-white/40"><FaStar className="text-yellow-500/80" /><span>{project.stars}</span></span>
                                            <span className="text-sm text-white/40 flex items-center gap-1"><FaGithub />Source</span>
                                        </div>
                                        <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                            <FaExternalLinkAlt className="text-xs" />
                                        </span>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                )}

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-14">
                    <motion.a href={PROFILE_DATA.links.github} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-medium text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-all">
                        <FaGithub size={20} /> View All Repositories
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
