"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, viewportOnce } from "@/lib/motion";

interface SectionShellProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function SectionShell({ id, children, className }: SectionShellProps) {
  return (
    <motion.section
      id={id}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className={`section-anchor relative min-w-0 max-w-full overflow-hidden rounded-[28px] border border-white/8 bg-panel/40 p-5 sm:p-8 sm:rounded-[28px] lg:p-10 ${className ?? ""}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(600px circle at 100% 0%, rgba(255,255,255,0.045), transparent 60%)",
        }}
      />
      {children}
    </motion.section>
  );
}
