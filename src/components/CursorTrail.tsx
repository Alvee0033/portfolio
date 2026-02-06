"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorTrail() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const updateMousePosition = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", updateMousePosition);
        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    if (!mounted) return null;

    return (
        <>
            <motion.div className="fixed top-0 left-0 w-4 h-4 rounded-full bg-blue-500 z-50 pointer-events-none mix-blend-difference" animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8 }} transition={{ type: "spring", stiffness: 500, damping: 28 }} />
            <motion.div className="fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-400 z-50 pointer-events-none mix-blend-difference" animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }} transition={{ type: "spring", stiffness: 250, damping: 20 }} />
        </>
    );
}
