"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "@/lib/ThemeContext";
import type { LinkItem, PortfolioData } from "@/lib/types";
import Magnetic from "@/components/animated/Magnetic";

interface ProfileSidebarProps {
  profile: PortfolioData["profile"];
  socialLinks: LinkItem[];
  accentPalette: string[];
  initials: string;
}

export default function ProfileSidebar({
  profile,
  socialLinks,
  accentPalette,
  initials,
}: ProfileSidebarProps) {
  const { primaryColor, setPrimaryColor } = useTheme();
  const reduced = useReducedMotion();

  return (
    <motion.aside
      initial={{ opacity: 0, x: -30, filter: "blur(12px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="order-2 group relative flex min-w-0 max-w-full flex-col gap-7 overflow-hidden rounded-3xl border border-white/10 bg-panel/55 p-5 backdrop-blur-xl sm:p-6 xl:order-1 xl:sticky xl:top-24 xl:max-h-[calc(100vh-7rem)] xl:overflow-y-auto"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-70 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at 30% 0%, color-mix(in oklab, var(--primary_color) 22%, transparent), transparent 60%)",
        }}
      />

      <div className="rounded-2xl border border-accent/30 bg-accent/10 p-3">
        <div className="flex flex-wrap items-center gap-4">
          <motion.div
            className="grid h-16 w-16 place-items-center rounded-2xl border border-accent/50 bg-background/70 text-2xl font-semibold text-accent shadow-[0_0_30px_-10px_var(--primary_color)]"
          animate={
            reduced
              ? undefined
              : {
                  boxShadow: [
                    "0 0 30px -10px var(--primary_color)",
                    "0 0 50px -8px var(--primary_color)",
                    "0 0 30px -10px var(--primary_color)",
                  ],
                }
          }
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {initials}
          </motion.div>
          <div className="min-w-0 flex-1 basis-[200px]">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Available for work</p>
            <p className="mt-1 inline-flex items-center gap-2 text-sm text-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Open to new roles
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/15 bg-white/[0.04] px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-muted">
                Remote-friendly
              </span>
              <span className="rounded-full border border-white/15 bg-white/[0.04] px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-muted">
                Platform Engineering
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">{profile.name}</h2>
        <p className="mt-1 text-sm text-accent">{profile.role}</p>
        <p className="prose-safe mt-4 text-sm leading-relaxed text-muted sm:text-[15px]">{profile.shortBio}</p>
      </div>

      <div className="space-y-2 text-sm">
        <p className="text-xs uppercase tracking-[0.32em] text-muted">Reach me</p>
        <a
          href={`mailto:${profile.email}`}
          className="group/link flex min-w-0 items-center justify-between gap-2 rounded-xl border border-white/5 bg-background/30 px-3 py-2.5 text-foreground transition hover:border-accent/60"
        >
          <span className="min-w-0 flex-1 break-all text-left text-xs leading-snug sm:break-words sm:text-sm">
            {profile.email}
          </span>
          <span className="text-muted transition group-hover/link:translate-x-0.5 group-hover/link:text-accent">→</span>
        </a>
        <a
          href={`tel:${profile.phone}`}
          className="group/link flex min-w-0 items-center justify-between gap-2 rounded-xl border border-white/5 bg-background/30 px-3 py-2.5 text-muted transition hover:border-accent/60 hover:text-foreground"
        >
          <span className="min-w-0 flex-1 text-left text-xs tabular-nums sm:text-sm">{profile.phone}</span>
          <span className="transition group-hover/link:translate-x-0.5 group-hover/link:text-accent">→</span>
        </a>
        <p className="prose-safe text-xs text-muted">Based in {profile.location}</p>
      </div>

      <div>
        <p className="mb-2 text-xs uppercase tracking-[0.32em] text-muted">Connect</p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-white/5 bg-background/30 px-2 py-2 text-center text-xs text-muted transition hover:border-accent/60 hover:text-accent"
            >
              <span className="inline-flex items-center gap-1">
                {item.label}
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 text-xs uppercase tracking-[0.32em] text-muted">Accent</p>
        <div className="flex flex-wrap gap-2">
          {accentPalette.map((color) => (
            <button
              key={color}
              type="button"
              aria-label={`Set accent color ${color}`}
              onClick={() => setPrimaryColor(color)}
              className={`relative h-7 w-7 overflow-hidden rounded-full border-2 transition ${
                primaryColor === color ? "border-white" : "border-white/10 hover:border-white/40"
              }`}
              style={{ backgroundColor: color }}
            >
              {primaryColor === color ? (
                <motion.span
                  layoutId="accent-active"
                  className="absolute inset-0 rounded-full ring-2 ring-white/80"
                />
              ) : null}
            </button>
          ))}
        </div>
      </div>

      <Magnetic className="mt-2">
        <a
          href="#contact"
          className="group/cta relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-accent/60 bg-accent/20 px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-foreground transition hover:bg-accent hover:text-background"
        >
          <span className="relative z-10">{profile.availability}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transition group-hover/cta:translate-x-0.5">
            <path d="M5 12h14" />
            <path d="m13 5 7 7-7 7" />
          </svg>
        </a>
      </Magnetic>
    </motion.aside>
  );
}
