"use client";

import { motion } from "framer-motion";
import { PROFILE_DATA } from "@/lib/data";

export default function TechStack() {
    const tech = [...PROFILE_DATA.techStack, ...PROFILE_DATA.techStack];

    return (
        <div className="py-12 overflow-hidden relative bg-white/[0.02] border-y border-white/5">
            <motion.div
                className="flex space-x-16 items-center w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            >
                {tech.map((item, index) => (
                    <motion.div key={index} className="flex items-center space-x-4 text-white/30 hover:text-blue-400 transition-colors duration-300 group cursor-default" whileHover={{ scale: 1.05 }}>
                        <item.icon className="text-3xl transition-transform duration-500 group-hover:rotate-12" />
                        <span className="text-xl font-bold tracking-tight uppercase font-mono">{item.name}</span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
