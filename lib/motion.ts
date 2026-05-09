import type { Transition, Variants } from "framer-motion";

export const easing = {
  out: [0.16, 1, 0.3, 1] as const,
  inOut: [0.83, 0, 0.17, 1] as const,
  smooth: [0.65, 0, 0.35, 1] as const,
  spring: [0.34, 1.56, 0.64, 1] as const,
} as const;

export const duration = {
  fast: 0.35,
  base: 0.6,
  slow: 0.9,
  cinematic: 1.2,
} as const;

export const baseTransition: Transition = {
  duration: duration.base,
  ease: easing.out,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: duration.slow, ease: easing.out },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: baseTransition },
};

export const fadeFromLeft: Variants = {
  hidden: { opacity: 0, x: -48, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: duration.slow, ease: easing.out },
  },
};

export const fadeFromRight: Variants = {
  hidden: { opacity: 0, x: 48, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: duration.slow, ease: easing.out },
  },
};

export const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.92, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: duration.slow, ease: easing.out },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.08,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.14,
    },
  },
};

export const heroChar: Variants = {
  hidden: { opacity: 0, y: "60%", filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: duration.cinematic, ease: easing.out },
  },
};

export const viewportOnce = { once: true, amount: 0.2 } as const;
export const viewportRepeat = { once: false, amount: 0.25 } as const;
