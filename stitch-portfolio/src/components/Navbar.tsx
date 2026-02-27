"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Close menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const navLinks = [
        { name: "Skills", href: "skills" },
        { name: "Projects", href: "projects" },
        { name: "Experience", href: "experience" },
        { name: "Achievements", href: "achievements" },
    ];

    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-6">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="glass-pill px-6 py-3 rounded-full flex items-center gap-12 max-w-5xl w-full justify-between shadow-2xl relative z-[110]"
            >
                <div className="font-display text-2xl font-black tracking-wider flex items-baseline select-none cursor-pointer group">
                    <Link to="hero" smooth={true} duration={800} onClick={closeMenu}>
                        <span className="text-white group-hover:text-primary transition-colors duration-300">alvy</span>
                        <span className="text-primary neon-glow ml-0.5 group-hover:text-white transition-colors duration-300">.dev</span>
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-slate-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={800}
                            className="hover:text-white transition-colors cursor-pointer"
                            activeClass="text-primary font-bold"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <Link to="contact" smooth={true} duration={800}>
                        <button className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold rounded-full text-sm transition-all shadow-lg shadow-blue-500/20">
                            Let's Talk
                        </button>
                    </Link>
                    <button
                        className="md:hidden text-slate-300 p-2 z-[120]"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.div>

            {/* Mobile Menu Backdrop */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeMenu}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] md:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Mobile Menu Panel */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="absolute top-24 left-6 right-6 p-8 bg-[#071129]/95 backdrop-blur-3xl border border-white/10 rounded-[2rem] md:hidden z-[100] shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    >
                        <div className="flex flex-col gap-8 items-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={800}
                                    className="text-xl font-bold text-slate-200 hover:text-primary transition-colors cursor-pointer"
                                    onClick={closeMenu}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="contact"
                                smooth={true}
                                duration={800}
                                className="w-full"
                                onClick={closeMenu}
                            >
                                <button className="w-full py-4 bg-primary text-slate-950 font-black rounded-2xl shadow-lg shadow-primary/20 uppercase tracking-widest text-sm">
                                    Let's Talk
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
