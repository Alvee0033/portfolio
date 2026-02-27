"use client";

import { motion } from "framer-motion";
import { PROFILE_DATA } from "@/lib/data";

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-[#030816] relative overflow-hidden">
            {/* Holographic Cyber Grid */}
            <div className="absolute inset-0 cyber-grid pointer-events-none opacity-50 z-0" />

            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent pointer-events-none z-0" />
            <div className="absolute right-0 top-20 w-96 h-96 bg-primary/5 blur-[100px] rounded-full pointer-events-none z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="font-display text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 mb-16 tracking-wide"
                >
                    EXPERIENCE
                </motion.h2>

                <div className="relative border-l border-primary/20 ml-3 md:ml-6 space-y-12">
                    {PROFILE_DATA.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_10px_rgba(0,229,255,0.8)]" />

                            {/* Content */}
                            <div className="group">
                                <h3 className="text-xl font-bold text-white flex flex-col md:flex-row md:items-center gap-2 group-hover:text-primary transition-colors">
                                    {exp.role} @ {exp.company}
                                    <span className="hidden md:block text-slate-600">|</span>
                                    <span className="text-sm font-medium text-slate-400 font-mono tracking-tight">{exp.period}</span>
                                </h3>

                                <div className="mt-4 text-slate-400">
                                    <p className="text-sm text-primary/80 font-semibold mb-2">Key Responsibilities:</p>
                                    <ul className="space-y-2">
                                        {exp.responsibilities.map((req, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                                                <span className="mt-1.5 w-1.5 h-1.5 bg-slate-600 rounded-full flex-shrink-0" />
                                                <span>{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
