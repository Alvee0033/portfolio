"use client";

import { motion } from "framer-motion";
import { PROFILE_DATA } from "@/lib/data";

export default function About() {
    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">About Me</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full" />
                    <p className="text-white/60 leading-relaxed text-lg">{PROFILE_DATA.about}</p>
                </motion.div>
            </div>
        </section>
    );
}
