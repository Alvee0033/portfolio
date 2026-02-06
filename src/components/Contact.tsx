"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { PROFILE_DATA } from "@/lib/data";

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full -z-10" />
            <div className="container mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Let&apos;s Connect</h2>
                    <p className="text-white/50 max-w-2xl mx-auto">Have a project in mind or just want to chat? I&apos;m always open to new opportunities.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
                        <div className="glass-card-cosmic p-8 rounded-2xl">
                            <div className="space-y-6">
                                <a href={PROFILE_DATA.links.email} className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group">
                                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600/20 transition-colors"><FaEnvelope size={20} /></div>
                                    <div><p className="text-xs text-white/40 uppercase tracking-wider mb-1">Email</p><p className="font-medium">{PROFILE_DATA.links.email.replace("mailto:", "")}</p></div>
                                </a>
                                <div className="flex items-center gap-4 text-white/70">
                                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-400"><FaMapMarkerAlt size={20} /></div>
                                    <div><p className="text-xs text-white/40 uppercase tracking-wider mb-1">Location</p><p className="font-medium">{PROFILE_DATA.location}</p></div>
                                </div>
                            </div>
                            <div className="mt-8 pt-8 border-t border-white/10">
                                <h4 className="text-sm text-white/40 mb-4 uppercase tracking-wider">Connect with me</h4>
                                <div className="flex gap-3">
                                    <SocialBtn href={PROFILE_DATA.links.github} icon={<FaGithub size={18} />} />
                                    <SocialBtn href={PROFILE_DATA.links.linkedin} icon={<FaLinkedin size={18} />} />
                                    <SocialBtn href={PROFILE_DATA.links.facebook} icon={<FaFacebook size={18} />} />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <form className="glass-card-cosmic p-8 rounded-2xl space-y-5">
                            <div><label htmlFor="name" className="block text-sm text-white/50 mb-2">Name</label><input type="text" id="name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all" placeholder="Your name" /></div>
                            <div><label htmlFor="email" className="block text-sm text-white/50 mb-2">Email</label><input type="email" id="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all" placeholder="your@email.com" /></div>
                            <div><label htmlFor="message" className="block text-sm text-white/50 mb-2">Message</label><textarea id="message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all resize-none" placeholder="Your message..." /></div>
                            <motion.button type="submit" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]">Send Message</motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function SocialBtn({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <motion.a href={href} target="_blank" rel="noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300">
            {icon}
        </motion.a>
    );
}
