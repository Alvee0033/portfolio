"use client";

import { PROFILE_DATA } from "@/lib/data";

export default function Footer() {
    return (
        <footer className="py-8 bg-[#030816] relative z-10 w-full mb-12 lg:mb-0">
            <div className="container mx-auto px-6 text-center lg:text-left flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                <div className="text-slate-500 text-sm font-medium">
                    © {new Date().getFullYear()} <span className="text-white font-bold">{PROFILE_DATA.name}</span>. All rights reserved. Designed and built with <span className="text-red-500">❤️</span> using <span className="text-primary hover:neon-glow transition-all cursor-pointer">Next.js</span>
                </div>
            </div>
        </footer>
    );
}
