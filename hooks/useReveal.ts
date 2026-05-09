"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

interface RevealOptions {
  amount?: number;
  once?: boolean;
}

export function useReveal({ amount = 0.25, once = true }: RevealOptions = {}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount, once });
  return { ref, inView };
}
