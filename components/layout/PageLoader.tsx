"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const reduced = useReducedMotion();
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const timer = window.setTimeout(() => setDone(true), 1100);
    return () => window.clearTimeout(timer);
  }, [reduced]);

  if (reduced) return null;

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] } }}
        >
          <div className="flex flex-col items-center gap-5">
            <motion.div
              className="h-3 w-3 rounded-full bg-accent shadow-[0_0_24px_var(--primary_color)]"
              animate={{ y: [0, -22, 0] }}
              transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              className="text-xs uppercase tracking-[0.5em] text-muted"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            >
              Jasbeer
            </motion.span>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
