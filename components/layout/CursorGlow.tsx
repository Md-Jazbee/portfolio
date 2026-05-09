"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const reduced = useReducedMotion();
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const sx = useSpring(x, { stiffness: 120, damping: 18, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 120, damping: 18, mass: 0.5 });

  useEffect(() => {
    if (reduced) return;
    const handle = (event: MouseEvent) => {
      x.set(event.clientX - 220);
      y.set(event.clientY - 220);
    };
    window.addEventListener("mousemove", handle, { passive: true });
    return () => window.removeEventListener("mousemove", handle);
  }, [reduced, x, y]);

  if (reduced) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[440px] w-[440px] rounded-full opacity-50 mix-blend-screen blur-[100px] lg:block"
      style={{
        x: sx,
        y: sy,
        background:
          "radial-gradient(circle, color-mix(in oklab, var(--primary_color) 65%, transparent) 0%, transparent 60%)",
      }}
    />
  );
}
