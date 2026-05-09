"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import type { LinkItem, NavItem } from "@/lib/types";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
  socialLinks: LinkItem[];
}

export default function MobileMenu({ open, onClose, items, socialLinks }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-background/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="relative ml-auto flex h-full w-full max-w-sm flex-col gap-8 overflow-y-auto border-l border-white/10 bg-panel/95 p-8 backdrop-blur-xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.32em] text-muted">Menu</span>
              <button
                type="button"
                onClick={onClose}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-background/40 text-foreground transition hover:border-accent hover:text-accent"
                aria-label="Close menu"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </svg>
              </button>
            </div>

            <nav>
              <ul className="space-y-2">
                {items.map((item, idx) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + idx * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={onClose}
                      className="group flex items-center justify-between rounded-2xl border border-white/5 bg-background/40 px-5 py-4 text-base text-foreground transition hover:border-accent/60 hover:text-accent"
                    >
                      <span className="tracking-tight">{item.label}</span>
                      <span className="text-muted transition group-hover:translate-x-1 group-hover:text-accent">
                        →
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto">
              <p className="mb-3 text-xs uppercase tracking-[0.32em] text-muted">Social</p>
              <ul className="grid grid-cols-3 gap-2">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid place-items-center rounded-xl border border-white/10 bg-background/40 px-3 py-3 text-xs text-muted transition hover:border-accent hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
