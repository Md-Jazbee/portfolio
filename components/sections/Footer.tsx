"use client";

import { motion } from "framer-motion";
import { fadeIn, viewportOnce } from "@/lib/motion";

interface FooterProps {
  name: string;
}

export default function Footer({ name }: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <motion.footer
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-white/8 pt-8 text-xs text-muted sm:flex-row"
    >
      <p>
        © {year} {name}. Built with care, motion, and Next.js.
      </p>
      <p className="uppercase tracking-[0.32em]">Crafted in India</p>
    </motion.footer>
  );
}
