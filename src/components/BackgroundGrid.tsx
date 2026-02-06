"use client";

import { useEffect, useState } from "react";

export default function BackgroundGrid() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 z-[-40] overflow-hidden pointer-events-none select-none bg-dark-bg transition-colors duration-1000">

            {/* 
        Background Star Field using CSS radial gradients for performance
      */}
            <div className="absolute inset-0 z-0 opacity-60"
                style={{
                    backgroundImage: `
               radial-gradient(1px 1px at 20% 30%, #fff 100%, transparent),
               radial-gradient(1px 1px at 40% 70%, #fff 100%, transparent),
               radial-gradient(2px 2px at 60% 20%, #00FFF2 100%, transparent),
               radial-gradient(1px 1px at 80% 60%, #fff 100%, transparent),
               radial-gradient(2px 2px at 30% 80%, #00D4FF 100%, transparent),
               radial-gradient(1px 1px at 70% 40%, #fff 100%, transparent)
             `,
                    backgroundSize: "500px 500px",
                }}
            />

            {/* 
        We use a container with perspective.
        The grid plane is rotated X to lie "flat".
        We animate the background-position-y to simulate forward movement.
      */}
            <div className="absolute inset-0 [perspective:1000px] flex items-center justify-center z-10">

                {/* Layer 1: Primary Grid - Brighter and Larger */}
                <div
                    className="absolute -top-[100%] -bottom-[100%] -left-[100%] -right-[100%] 
            origin-bottom [transform:rotateX(60deg)] 
            bg-[linear-gradient(to_right,rgba(0,255,242,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,242,0.3)_1px,transparent_1px)] 
            bg-[size:80px_80px] 
            animate-grid-flow"
                />

                {/* Layer 2: Secondary Grid - More transparent, smaller details */}
                <div
                    className="absolute -top-[100%] -bottom-[100%] -left-[100%] -right-[100%] 
            origin-bottom [transform:rotateX(60deg)] 
            bg-[linear-gradient(to_right,rgba(0,212,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,212,255,0.1)_1px,transparent_1px)] 
            bg-[size:20px_20px] 
            animate-grid-flow"
                    style={{ animationDuration: "3s" }}
                />

            </div>

            {/* 
        A softer vignette mask
      */}
            <div className="absolute inset-0 bg-radial-gradient-fade z-20" />

            {/* 
        Ambient light blobs - Brighter and more spread out
      */}
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-neon-teal/15 blur-[150px] rounded-full z-10 mix-blend-screen" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[500px] bg-[#00D4FF]/10 blur-[130px] rounded-full z-10 mix-blend-screen" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[500px] bg-[#00FF88]/10 blur-[130px] rounded-full z-10 mix-blend-screen" />

        </div>
    );
}
