"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import type { MouseEvent, ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
}

export default function TiltCard({
  children,
  className,
  maxTilt = 8,
  glare = true,
}: TiltCardProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const sx = useSpring(x, { stiffness: 180, damping: 18, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 180, damping: 18, mass: 0.5 });

  const rotateX = useTransform(sy, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-maxTilt, maxTilt]);

  const glareX = useTransform(sx, [-0.5, 0.5], [20, 80]);
  const glareY = useTransform(sy, [-0.5, 0.5], [20, 80]);
  const glareGradient = useMotionTemplate`radial-gradient(420px circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.10), transparent 60%)`;

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 1200,
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
      {glare ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glareGradient }}
        />
      ) : null}
    </motion.div>
  );
}
