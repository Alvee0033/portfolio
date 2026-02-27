"use client";

import { motion } from "framer-motion";
import { PROFILE_DATA } from "@/lib/data";
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-[#030816] relative overflow-hidden">
            {/* Holographic Cyber Grid */}
            <div className="absolute inset-0 cyber-grid pointer-events-none opacity-50 z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card max-w-4xl mx-auto rounded-3xl p-8 md:p-14 border border-white/10 shadow-2xl relative overflow-hidden"
                >
                    {/* Decorative glowing orb behind the card */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 blur-[120px] rounded-full z-0 pointer-events-none" />

                    <div className="flex flex-col items-center text-center relative z-10">
                        <h2 className="font-display text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 mb-6 tracking-wide uppercase">
                            LET'S CONNECT
                        </h2>

                        <p className="text-slate-400 max-w-2xl mb-12 text-sm md:text-base leading-relaxed">
                            Have a project in mind, looking to hire an engineer, or just want to say hi?
                            I'm currently <span className="text-primary font-medium">open to opportunities</span> and my inbox is always open.
                            Drop me an email or connect on socials!
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mb-12">
                            {/* Email */}
                            <a
                                href={`mailto:${PROFILE_DATA.email}`}
                                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-1 transition-all group"
                            >
                                <div className="p-4 bg-primary/10 rounded-full text-primary group-hover:scale-110 transition-transform">
                                    <Mail size={28} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-medium mb-1">Email Me</p>
                                    <p className="text-sm md:text-base text-white">{PROFILE_DATA.email}</p>
                                </div>
                            </a>

                            {/* Location */}
                            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-1 transition-all group">
                                <div className="p-4 bg-primary/10 rounded-full text-primary group-hover:scale-110 transition-transform">
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-medium mb-1">Location</p>
                                    <p className="text-sm md:text-base text-white">{PROFILE_DATA.location}</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-1 transition-all group">
                                <div className="p-4 bg-primary/10 rounded-full text-primary group-hover:scale-110 transition-transform">
                                    <Phone size={28} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-medium mb-1">Phone</p>
                                    <p className="text-sm md:text-base text-white">{PROFILE_DATA.phone}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 justify-center">
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                href={PROFILE_DATA.socials.find(s => s.name === "LinkedIn")?.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#0077b5] border border-white/10 hover:border-[#0077b5] hover:shadow-[0_0_20px_rgba(0,119,181,0.5)] transition-all"
                            >
                                <Linkedin size={24} />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                href={PROFILE_DATA.socials.find(s => s.name === "GitHub")?.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#333] border border-white/10 hover:border-[#333] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all"
                            >
                                <Github size={24} />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                href={`mailto:${PROFILE_DATA.email}`}
                                className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:text-white hover:bg-primary border border-white/10 hover:border-primary hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all"
                            >
                                <Mail size={24} />
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
