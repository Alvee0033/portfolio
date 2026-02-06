"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { FaStar, FaCrosshairs } from "react-icons/fa";
import { PROFILE_DATA } from "@/lib/data";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(springY, [-500, 500], [5, -5]);
    const rotateY = useTransform(springX, [-500, 500], [-5, 5]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            mouseX.set(e.clientX - centerX);
            mouseY.set(e.clientY - centerY);
        }
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center pt-32 pb-20 relative overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Background Lighting Effects */}
            <div className="absolute top-[-20%] left-[-20%] w-[1200px] h-[1200px] bg-teal-400/25 blur-[180px] rounded-full -z-20 animate-pulse pointer-events-none" />
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full -z-10 animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full -z-10" />

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-xl md:text-2xl font-medium text-white/80 mb-4 tracking-wide">
                            Hi, I am
                        </h2>
                        <h1 className="text-6xl md:text-8xl lg:text-[6rem] font-bold tracking-widest mb-6 hero-text-glow relative">
                            {PROFILE_DATA.name.toUpperCase().replace(/\s/g, "")}
                            <div className="absolute inset-0 bg-teal-400/30 blur-[100px] -z-10 animate-pulse pointer-events-none" />
                        </h1>
                        <h3 className="text-xl md:text-2xl text-white/70 max-w-lg mb-8 leading-relaxed font-light">
                            {PROFILE_DATA.role}. Crafting intelligent digital universes.
                        </h3>
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <a
                                href="#projects"
                                className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                            >
                                View Selected Work
                            </a>
                        </div>
                    </motion.div>
                </div>

                <div className="order-1 lg:order-2 flex justify-center relative perspective-1000" ref={containerRef}>
                    <motion.div
                        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                        className="relative group will-change-transform auto-wiggle"
                    >
                        <div className="absolute top-4 -right-4 w-full h-full border-2 border-dashed border-slate-700/50 rounded-[40px] -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />

                        <div className="relative w-[300px] h-[380px] md:w-[400px] md:h-[500px] bg-slate-800 rounded-[40px] border border-slate-700 shadow-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] to-[#020617] flex items-center justify-center">
                                <span className="text-white/20 font-cyber text-6xl md:text-8xl tracking-widest">
                                    {PROFILE_DATA.name.split(" ").map(n => n[0]).join("")}
                                </span>
                            </div>
                        </div>
                        {/* Shadow under the frame for depth */}
                        <div className="absolute -bottom-10 inset-x-0 h-10 bg-teal-500/10 blur-3xl -z-20" />

                        <motion.div
                            className="absolute top-8 -left-6 md:-left-12 glass-card-cosmic p-4 rounded-2xl flex items-center gap-4 floating-badge"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400">
                                <FaStar className="text-lg" />
                            </div>
                            <div className="text-left">
                                <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Experience</p>
                                <p className="text-sm font-bold text-white">Pro Level</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="absolute bottom-12 -right-4 md:-right-8 bg-slate-900/90 glass-card-cosmic p-4 rounded-2xl flex items-center gap-4 floating-badge"
                            style={{ animationDelay: "2s" }}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
                                <FaCrosshairs className="text-lg" />
                            </div>
                            <div className="text-left">
                                <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Status</p>
                                <p className="text-sm font-bold text-white">Available</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
