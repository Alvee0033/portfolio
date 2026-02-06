"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ParticleField() {
    const [mounted, setMounted] = useState(false);
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setMounted(true);
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        const resize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);

    if (!mounted) return null;

    const colors = ["rgba(255, 255, 255, 0.3)", "rgba(255, 255, 255, 0.1)", "rgba(147, 197, 253, 0.2)", "rgba(59, 130, 246, 0.15)"];

    const particles = Array.from({ length: 25 }).map((_, i) => ({
        id: i,
        x: Math.random() * windowSize.width,
        y: Math.random() * windowSize.height,
        size: Math.random() * 1.5 + 0.5,
        duration: Math.random() * 20 + 20,
        color: colors[i % colors.length],
    }));

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full gpu-accelerated"
                    style={{ width: particle.size, height: particle.size, left: particle.x, top: particle.y, backgroundColor: particle.color, boxShadow: `0 0 ${particle.size * 2}px ${particle.color}` }}
                    animate={{ y: [particle.y, particle.y - 50, particle.y], opacity: [0.1, 0.5, 0.1] }}
                    transition={{ duration: particle.duration, repeat: Infinity, ease: "linear" }}
                />
            ))}
        </div>
    );
}
