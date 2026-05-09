"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import {
  fadeUp,
  staggerContainer,
  staggerContainerSlow,
  viewportOnce,
} from "@/lib/motion";

interface StaggerProps {
  children: ReactNode;
  className?: string;
  slow?: boolean;
  amount?: number;
}

export function StaggerGroup({
  children,
  className,
  slow,
  amount = 0.2,
}: StaggerProps) {
  const reduced = useReducedMotion();
  const variants = reduced
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : slow
      ? staggerContainerSlow
      : staggerContainer;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...viewportOnce, amount }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={reduced ? { hidden: { opacity: 0 }, visible: { opacity: 1 } } : fadeUp}
    >
      {children}
    </motion.div>
  );
}
