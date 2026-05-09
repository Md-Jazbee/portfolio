"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { NavItem } from "@/lib/types";

interface TopNavProps {
  items: NavItem[];
  brand: string;
  onOpenMobile?: () => void;
}

export default function TopNav({ items, brand, onOpenMobile }: TopNavProps) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    observerRef.current?.disconnect();
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    sections.forEach((section) => observer.observe(section));
    observerRef.current = observer;
    return () => observer.disconnect();
  }, [items]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 px-3 pt-4 sm:px-6">
      <div className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-white/10 bg-background/55 px-4 py-2 backdrop-blur-xl shadow-[0_18px_40px_-25px_rgba(0,0,0,0.8)]">
        <a
          href="#home"
          className="group flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-foreground"
        >
          <span className="grid h-7 w-7 place-items-center rounded-full border border-accent/40 bg-accent/15 text-accent">
            <span className="text-[11px] font-semibold tracking-wider">J</span>
          </span>
          <span className="tracking-tight">{brand}</span>
        </a>

        <nav className="hidden lg:block">
          <ul className="relative flex items-center gap-1 text-sm">
            {items.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id} className="relative">
                  <a
                    href={`#${item.id}`}
                    className={`relative inline-flex rounded-full px-3 py-1.5 text-xs uppercase tracking-[0.16em] transition-colors ${
                      isActive ? "text-foreground" : "text-muted hover:text-foreground"
                    }`}
                  >
                    <AnimatePresence>
                      {isActive ? (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 -z-10 rounded-full border border-accent/40 bg-accent/10"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      ) : null}
                    </AnimatePresence>
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full border border-accent/50 bg-accent/15 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-accent transition hover:bg-accent/25 md:inline-flex"
          >
            Hire me
          </a>
          <button
            type="button"
            onClick={onOpenMobile}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-panel/60 text-foreground transition hover:border-accent hover:text-accent md:hidden"
            aria-label="Open menu"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
