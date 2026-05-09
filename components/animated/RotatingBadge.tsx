"use client";

import { motion, useReducedMotion } from "framer-motion";

interface RotatingBadgeProps {
  text: string;
  className?: string;
}

export default function RotatingBadge({ text, className }: RotatingBadgeProps) {
  const reduced = useReducedMotion();
  const characters = text.split("");
  const radius = 64;

  return (
    <div className={`relative h-40 w-40 ${className ?? ""}`}>
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full"
        animate={reduced ? undefined : { rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <path
            id="rotating-circle"
            d={`M 100,100 m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>
        <text fill="rgba(255,255,255,0.85)" fontSize="11" letterSpacing="3.5" fontFamily="inherit">
          <textPath href="#rotating-circle" startOffset="0">
            {characters.join("").toUpperCase()}
          </textPath>
        </text>
      </motion.svg>
      <div className="absolute inset-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/60 bg-accent/15 text-accent shadow-[0_0_24px_rgba(40,233,140,0.4)]">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14" />
          <path d="m13 5 7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}
