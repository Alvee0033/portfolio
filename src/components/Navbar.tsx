"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { FaBolt } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const navLinks = [
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "About", to: "about" },
    { name: "Contact", to: "contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 p-4">
            <nav className={`max-w-5xl mx-auto rounded-full px-6 py-3 transition-all duration-300 ${scrolled ? "nav-glass shadow-lg" : "bg-transparent"}`}>
                <div className="flex items-center justify-between">
                    <ScrollLink to="hero" smooth={true} duration={500} className="cursor-pointer">
                        <motion.div className="flex items-center gap-2 text-xl font-bold text-white" whileHover={{ scale: 1.05 }}>
                            <FaBolt className="text-blue-500" />
                            <span>Portfolio</span>
                        </motion.div>
                    </ScrollLink>

                    <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full px-2 py-1 border border-white/10">
                        {navLinks.map((link) => (
                            <ScrollLink key={link.name} to={link.to} smooth={true} duration={500} offset={-80}>
                                <motion.button
                                    className="px-4 py-2 rounded-full text-sm text-white/70 hover:text-white hover:bg-white/10 transition-all"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {link.name}
                                </motion.button>
                            </ScrollLink>
                        ))}
                    </div>

                    <ScrollLink to="contact" smooth={true} duration={500} className="hidden md:block">
                        <motion.button
                            className="px-6 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-500 transition-colors shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Let&apos;s Talk
                        </motion.button>
                    </ScrollLink>

                    <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <HiX /> : <HiMenuAlt4 />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden fixed inset-0 top-20 bg-black/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8"
                    >
                        {navLinks.map((link) => (
                            <ScrollLink key={link.name} to={link.to} smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                                <motion.span className="text-2xl text-white/80 hover:text-white" whileHover={{ scale: 1.1 }}>
                                    {link.name}
                                </motion.span>
                            </ScrollLink>
                        ))}
                        <ScrollLink to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                            <motion.button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full" whileHover={{ scale: 1.05 }}>
                                Let&apos;s Talk
                            </motion.button>
                        </ScrollLink>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
