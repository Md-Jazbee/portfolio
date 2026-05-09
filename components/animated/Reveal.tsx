"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { ReactNode } from "react";
import {
  fadeFromLeft,
  fadeFromRight,
  fadeIn,
  fadeUp,
  scaleReveal,
  viewportOnce,
} from "@/lib/motion";

type RevealVariant = "up" | "in" | "left" | "right" | "scale";

const variantMap: Record<RevealVariant, Variants> = {
  up: fadeUp,
  in: fadeIn,
  left: fadeFromLeft,
  right: fadeFromRight,
  scale: scaleReveal,
};

interface RevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
  as?: keyof typeof motion;
  once?: boolean;
  amount?: number;
}

export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  className,
  as = "div",
  once = true,
  amount = 0.25,
}: RevealProps) {
  const reduced = useReducedMotion();
  const Component = motion[as] as typeof motion.div;
  const baseVariants = reduced ? variantMap.in : variantMap[variant];

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={once ? viewportOnce : { once: false, amount }}
      variants={baseVariants}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}
