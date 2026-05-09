"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export default function Marquee({ children, speed = 28, className }: MarqueeProps) {
  const reduced = useReducedMotion();
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <motion.div
        className="flex w-max gap-12"
        animate={reduced ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        <div className="flex shrink-0 items-center gap-12">{children}</div>
        <div aria-hidden className="flex shrink-0 items-center gap-12">
          {children}
        </div>
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
