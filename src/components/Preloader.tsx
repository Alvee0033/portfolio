"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [loading, setLoading] = useState(true);
    const [phase, setPhase] = useState<"universe" | "alvee">("universe");

    useEffect(() => {
        const t1 = setTimeout(() => setPhase("alvee"), 1000);
        const t2 = setTimeout(() => setLoading(false), 2200);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, []);

    useEffect(() => {
        if (loading) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "unset";
    }, [loading]);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#030712]">
                    <div className="flex flex-col items-center">
                        <AnimatePresence mode="wait">
                            {phase === "universe" ? (
                                <motion.p key="universe" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }} className="text-lg md:text-xl text-white/50 tracking-[0.2em] uppercase">Loading Universe</motion.p>
                            ) : (
                                <motion.h1 key="alvee" initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, ease: "easeOut" }} className="text-4xl md:text-5xl font-bold text-white" style={{ textShadow: "0 0 40px rgba(37, 99, 235, 0.4), 0 0 80px rgba(139, 92, 246, 0.2)" }}>ALVEE</motion.h1>
                            )}
                        </AnimatePresence>
                        <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden mt-6">
                            <motion.div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" initial={{ width: "0%" }} animate={{ width: phase === "alvee" ? "100%" : "60%" }} transition={{ duration: 1, ease: "easeInOut" }} />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
