"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PROFILE_DATA } from "@/lib/data";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-scroll";

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36 pb-12 lg:pt-20 lg:pb-0">
            {/* Holographic Cyber Grid */}
            <div className="absolute inset-0 cyber-grid pointer-events-none opacity-50 z-0" />

            {/* Background glowing orbs */}
            <div className="absolute top-[10%] right-[5%] w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-primary/20 blur-[100px] md:blur-[120px] rounded-full pointer-events-none z-0" />
            <div className="absolute bottom-[10%] left-[5%] w-[200px] h-[200px] bg-blue-600/15 blur-[100px] rounded-full pointer-events-none hidden md:block z-0" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-12 items-center">

                    {/* Left Column - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-6 items-center text-center lg:items-start lg:text-left order-2 lg:order-1"
                    >
                        {/* Status Prompt Removed */}

                        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-tight uppercase">
                            Hi, I am <span className="text-primary neon-glow block md:inline mt-2 md:mt-0 relative inline-block">
                                ALVY
                            </span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-lg leading-relaxed font-light px-4 lg:px-0">
                            {PROFILE_DATA.role}
                        </p>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-2 w-full sm:w-auto">
                            <Link
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={800}
                                className="w-full sm:w-auto"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative overflow-hidden w-full sm:w-auto px-8 py-3.5 bg-primary/10 border border-primary text-primary hover:bg-primary/20 font-bold rounded-sm transition-all shadow-[0_0_15px_rgba(0,229,255,0.3)] hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] group"
                                >
                                    <span className="relative z-10 uppercase tracking-wider text-sm">View Selected Work</span>
                                    {/* Glitch slash effect on hover */}
                                    <div className="absolute inset-0 -translate-x-full bg-primary/20 group-hover:animate-[glitch-slide_0.5s_ease-out_forwards] skew-x-12" />
                                </motion.button>
                            </Link>
                            <a
                                href="/resume.pdf"
                                download="Alvyresume.pdf"
                                className="w-full sm:w-auto"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto px-6 py-3.5 bg-transparent border border-white/20 hover:border-white/50 text-white font-medium rounded-sm flex items-center justify-center gap-2 transition-all uppercase tracking-wider text-sm hover:bg-white/5"
                                >
                                    <Download size={16} />
                                    Download Resume
                                </motion.button>
                            </a>
                        </div>

                        {/* Social Icons */}
                        <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-3 md:gap-6 mt-4 w-full border-t border-white/5 pt-6">
                            <span className="text-xs text-slate-500 uppercase tracking-widest hidden md:block">Connect</span>
                            <div className="flex gap-4">
                                <a href={PROFILE_DATA.socials.find(s => s.name === 'LinkedIn')?.url} className="text-slate-400 hover:text-primary transition-colors p-2.5 md:p-2 bg-white/5 rounded-sm hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                                    <Linkedin size={20} />
                                </a>
                                <a href={PROFILE_DATA.socials.find(s => s.name === 'GitHub')?.url} className="text-slate-400 hover:text-primary transition-colors p-2.5 md:p-2 bg-white/5 rounded-sm hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                                    <Github size={20} />
                                </a>
                                <a href={PROFILE_DATA.socials.find(s => s.name === 'Email')?.url} className="text-slate-400 hover:text-primary transition-colors p-2.5 md:p-2 bg-white/5 rounded-sm hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                                    <Mail size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Organic Layered Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative flex justify-center items-center order-1 lg:order-2 px-4 sm:px-0 min-h-[400px] md:min-h-[600px]"
                    >
                        {/* Large Background Decorative Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 0.03, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="absolute inset-0 flex items-center justify-center font-display text-[150px] md:text-[250px] lg:text-[300px] font-black text-white pointer-events-none select-none z-0 tracking-tighter"
                        >
                            HELLO
                        </motion.div>

                        {/* Large Glowing Orb behind portrait */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] bg-primary/10 blur-[80px] md:blur-[120px] rounded-full z-0 animate-pulse" />

                        {/* Portrait Main Container */}
                        <div className="relative z-10 w-[280px] h-[380px] sm:w-[380px] sm:h-[480px] lg:w-[480px] lg:h-[580px]">
                            {/* Image Container - No frame, just a subtle mask-like rounding */}
                            <div className="absolute inset-0 rounded-[3rem] md:rounded-[5rem] overflow-hidden">
                                <Image
                                    src="/profile.jpg"
                                    alt="ALVY Profile"
                                    fill
                                    className="object-cover object-top scale-[1.1] hover:scale-[1.15] transition-transform duration-1000"
                                    priority
                                />
                                {/* Bottom masking gradient to fade out the bottom of the photo */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#030816] via-[#030816]/40 to-transparent z-10" />
                            </div>

                            {/* Floating UI Elements / Badges */}
                            <motion.div
                                animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute -top-4 -left-6 md:-top-8 md:-left-12 glass-pill px-4 py-2 md:px-5 md:py-2.5 border border-primary/30 flex items-center gap-2 rounded-2xl shadow-[0_10px_30px_rgba(0,229,255,0.15)] z-20 backdrop-blur-xl"
                            >
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                                    <span className="text-sm font-bold">★</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase tracking-tighter text-slate-400 font-bold">Experience</span>
                                    <span className="text-xs font-black text-white whitespace-nowrap">PRO LEVEL</span>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                                transition={{ repeat: Infinity, duration: 5, delay: 1, ease: "easeInOut" }}
                                className="absolute bottom-16 -right-6 md:bottom-24 md:-right-16 glass-pill px-4 py-2 md:px-5 md:py-2.5 border border-green-500/30 flex items-center gap-3 rounded-2xl shadow-[0_10px_30px_rgba(34,197,94,0.1)] z-20 backdrop-blur-xl"
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 bg-green-500 rounded-full blur-sm animate-pulse" />
                                    <div className="relative w-3 h-3 bg-green-500 rounded-full border border-white/20" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase tracking-tighter text-slate-400 font-bold">Availability</span>
                                    <span className="text-xs font-black text-white whitespace-nowrap">OPEN TO WORK</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
