"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { RefObject } from "react";

interface ParallaxOptions {
  /** Pixels of vertical translation across the scroll range. Positive = element moves up. */
  range?: number;
  /** Optional element ref to track instead of internal ref. */
  target?: RefObject<HTMLElement | null>;
}

export function useParallax({ range = 80, target }: ParallaxOptions = {}) {
  const internalRef = useRef<HTMLDivElement | null>(null);
  const ref = (target ?? internalRef) as RefObject<HTMLElement | null>;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [range, -range]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.6, 1, 1, 0.6]);

  return { ref: internalRef, scrollYProgress, y, opacity };
}
