"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROFILE_DATA } from "@/lib/data";
import { Trophy, Award, Medal, Star } from "lucide-react";

export default function Achievements() {
    const icons = [Trophy, Award, Medal, Star];
    const [showAll, setShowAll] = useState(false);

    // Show 4 by default
    const displayedAchievements = showAll ? PROFILE_DATA.achievements : PROFILE_DATA.achievements.slice(0, 4);

    return (
        <section id="achievements" className="py-24 bg-[#030816] relative overflow-hidden">
            {/* Holographic Cyber Grid */}
            <div className="absolute inset-0 cyber-grid pointer-events-none opacity-50 z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-white/10 pb-4 gap-4">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="font-display text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 tracking-wide m-0"
                    >
                        ACHIEVEMENTS
                    </motion.h2>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-primary font-mono text-sm bg-primary/10 px-3 py-1 rounded-full border border-primary/20 whitespace-nowrap"
                    >
                        Total: {PROFILE_DATA.achievements.length}
                    </motion.span>
                </div>

                <motion.div layout className="grid grid-cols-2 xl:grid-cols-4 gap-3 md:gap-6">
                    <AnimatePresence mode="popLayout">
                        {displayedAchievements.map((achievement, index) => {
                            const Icon = icons[index % icons.length];
                            return (
                                <motion.div
                                    key={achievement.title}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="glass-pill p-4 md:p-6 rounded-xl border border-primary/20 flex flex-col items-start gap-3 md:gap-4 hover:bg-primary/5 transition-all h-full"
                                >
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary border border-primary/20 shrink-0 self-start">
                                        <Icon size={24} />
                                    </div>
                                    <div className="flex flex-col flex-grow">
                                        <h3 className="text-white font-bold text-sm md:text-base leading-tight mb-2">
                                            {achievement.title}
                                        </h3>
                                        <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-between">
                                            <p className="text-xs text-slate-400 font-medium leading-relaxed max-w-[70%]">
                                                {achievement.description}
                                            </p>
                                            <span className="text-[10px] md:text-xs text-primary font-mono bg-primary/10 px-2 py-0.5 rounded-md whitespace-nowrap shrink-0 ml-2">
                                                {achievement.year}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* Show More Button */}
                {PROFILE_DATA.achievements.length > 4 && (
                    <motion.div layout className="mt-10 md:mt-12 flex justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowAll(!showAll)}
                            className="px-6 py-2.5 md:px-8 md:py-3 bg-transparent border border-primary/50 text-white text-sm md:text-base font-medium rounded-full hover:bg-primary/10 hover:border-primary transition-all shadow-[0_0_15px_rgba(0,229,255,0.1)] hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]"
                        >
                            {showAll ? "Show Less" : `Load All Achievements (${PROFILE_DATA.achievements.length})`}
                        </motion.button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
