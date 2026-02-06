"use client";

import { useRef, Children } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function WarpSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [42, 14, 0, -14, -38]
  );
  const z = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.94]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35, 0.65, 0.85, 1],
    [0.5, 0.85, 1, 1, 0.85, 0.5]
  );

  return (
    <motion.div
      ref={ref}
      className="warp-section"
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        z,
        scale,
        opacity,
        transformOrigin: "50% 50%",
      }}
    >
      <div className="warp-section-inner">{children}</div>
    </motion.div>
  );
}

export default function ScrollWarp({
  children,
}: {
  children: React.ReactNode;
}) {
  const items = Children.toArray(children);
  return (
    <div className="warp-container" style={{ perspective: "1600px" }}>
      {items.map((child, i) => (
        <WarpSection key={i}>{child}</WarpSection>
      ))}
    </div>
  );
}
