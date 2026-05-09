"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroChar, viewportOnce } from "@/lib/motion";

interface AnimatedHeadingProps {
  text: string;
  highlight?: string;
  className?: string;
  highlightClassName?: string;
}

export default function AnimatedHeading({
  text,
  highlight,
  className,
  highlightClassName = "text-accent",
}: AnimatedHeadingProps) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  return (
    <h1 className={`max-w-full min-w-0 ${className ?? ""}`}>
      <span className="sr-only">
        {text}
        {highlight ? ` ${highlight}` : ""}
      </span>
      <motion.span
        aria-hidden
        className="flex w-full max-w-full min-w-0 flex-wrap gap-x-[0.28em] gap-y-[0.12em]"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        transition={{ staggerChildren: reduced ? 0 : 0.06 }}
      >
        {words.map((word, idx) => (
          <span
            key={`${word}-${idx}`}
            className="inline-flex min-w-0 max-w-full pb-[0.05em]"
          >
            <motion.span
              className="inline-block max-w-full min-w-0 break-words will-change-transform"
              variants={reduced ? { hidden: { opacity: 0 }, visible: { opacity: 1 } } : heroChar}
            >
              {word}
            </motion.span>
          </span>
        ))}
        {highlight ? (
          <span className="inline-flex min-w-0 max-w-full basis-full pb-[0.05em] sm:basis-auto">
            <motion.span
              className={`inline-block max-w-full min-w-0 break-words will-change-transform ${highlightClassName}`}
              variants={reduced ? { hidden: { opacity: 0 }, visible: { opacity: 1 } } : heroChar}
            >
              {highlight}
            </motion.span>
          </span>
        ) : null}
      </motion.span>
    </h1>
  );
}
