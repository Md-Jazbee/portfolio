"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Aurora() {
  const reduced = useReducedMotion();
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{
        maskImage:
          "radial-gradient(ellipse at center, rgba(0,0,0,0.95) 30%, rgba(0,0,0,0.55) 70%, transparent 100%)",
      }}
    >
      <motion.div
        className="absolute -left-[30%] top-[-20%] h-[70vh] w-[70vh] rounded-full blur-[140px]"
        style={{ background: "radial-gradient(circle, rgba(40,233,140,0.35), transparent 60%)" }}
        animate={
          reduced
            ? undefined
            : {
                x: ["0%", "20%", "-10%", "0%"],
                y: ["0%", "10%", "-5%", "0%"],
              }
        }
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-25%] top-[10%] h-[55vh] w-[55vh] rounded-full blur-[160px]"
        style={{ background: "radial-gradient(circle, rgba(20,197,253,0.32), transparent 60%)" }}
        animate={
          reduced
            ? undefined
            : {
                x: ["0%", "-15%", "10%", "0%"],
                y: ["0%", "15%", "-10%", "0%"],
              }
        }
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-20%] left-[20%] h-[60vh] w-[60vh] rounded-full blur-[160px]"
        style={{ background: "radial-gradient(circle, rgba(250,102,171,0.22), transparent 65%)" }}
        animate={
          reduced
            ? undefined
            : {
                x: ["0%", "10%", "-15%", "0%"],
                y: ["0%", "-10%", "8%", "0%"],
              }
        }
        transition={{ duration: 36, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.5] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' seed='4'/><feColorMatrix values='0 0 0 0 0.9 0 0 0 0 0.9 0 0 0 0 0.9 0 0 0 0.06 0'/></filter><rect width='160' height='160' filter='url(%23n)'/></svg>\")",
        }}
      />
    </div>
  );
}
