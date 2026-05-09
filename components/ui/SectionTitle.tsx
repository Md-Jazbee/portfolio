"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

interface SectionTitleProps {
  label: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  label,
  title,
  highlight,
  description,
  align = "left",
}: SectionTitleProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl min-w-0 text-center" : "max-w-3xl min-w-0"}>
      <motion.span
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[10px] font-medium uppercase tracking-[0.32em] text-muted backdrop-blur"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_var(--primary_color)]" />
        {label}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        transition={{ delay: 0.05 }}
        className="mt-4 break-words text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl"
      >
        {title}
        {highlight ? (
          <>
            {" "}
            <span className="text-gradient">{highlight}</span>
          </>
        ) : null}
      </motion.h2>
      {description ? (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={{ delay: 0.1 }}
          className="mt-4 max-w-2xl text-base text-muted prose-safe"
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  );
}
