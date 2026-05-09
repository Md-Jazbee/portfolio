"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import AnimatedHeading from "@/components/animated/AnimatedHeading";
import RotatingBadge from "@/components/animated/RotatingBadge";
import Magnetic from "@/components/animated/Magnetic";
import { StaggerGroup, StaggerItem } from "@/components/animated/Stagger";
import type { PortfolioData } from "@/lib/types";

interface HeroSectionProps {
  profile: PortfolioData["profile"];
  stats: PortfolioData["heroStats"];
}

export default function HeroSection({ profile, stats }: HeroSectionProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 0.96]);

  return (
    <section
      id="home"
      ref={ref}
      className="section-anchor relative min-w-0 max-w-full overflow-hidden rounded-[28px] border border-white/8 bg-panel/40 p-5 sm:p-8 sm:rounded-[32px] lg:p-14"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(800px circle at 0% 0%, color-mix(in oklab, var(--primary_color) 22%, transparent), transparent 60%), radial-gradient(700px circle at 100% 100%, rgba(20,197,253,0.18), transparent 60%)",
        }}
      />
      <motion.div style={{ y, opacity, scale }} className="relative min-w-0 max-w-full">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.28em] text-muted backdrop-blur sm:px-4 sm:text-[10px] sm:tracking-[0.32em]"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Hello, I am Jasbeer
        </motion.span>

        <div className="mt-6 grid min-w-0 max-w-full gap-10 sm:mt-7 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="min-w-0 max-w-full">
            <AnimatedHeading
              text="Building resilient platforms"
              highlight="for developer velocity."
              className="text-balance text-[clamp(1.45rem,calc(4.2vw+0.65rem),4.5rem)] font-semibold leading-[1.07] tracking-tight text-foreground"
              highlightClassName="text-gradient"
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="prose-safe mt-5 max-w-2xl text-base leading-relaxed text-muted sm:mt-6 sm:text-lg"
            >
              {profile.longBio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Magnetic>
                <a
                  href="#projects"
                  className="group/cta relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-accent/60 bg-accent/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-foreground transition hover:bg-accent hover:text-background"
                >
                  <span className="relative z-10">See my work</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transition group-hover/cta:translate-x-0.5">
                    <path d="M5 12h14" />
                    <path d="m13 5 7 7-7 7" />
                  </svg>
                </a>
              </Magnetic>
              <Magnetic strength={12}>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs font-medium uppercase tracking-[0.22em] text-foreground transition hover:border-accent hover:text-accent"
                >
                  Let&apos;s talk
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition group-hover:translate-x-0.5">
                    <path d="M5 12h14" />
                    <path d="m13 5 7 7-7 7" />
                  </svg>
                </a>
              </Magnetic>
            </motion.div>
          </div>

          <div className="hidden self-end lg:block">
            <a href="#projects" aria-label="Explore projects">
              <RotatingBadge text="explore projects • explore projects • " />
            </a>
          </div>
        </div>

        <div className="mt-12 lg:mt-16">
          <div className="divider-glow mb-6" />
          <StaggerGroup className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <StaggerItem
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-accent/40"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(360px circle at 50% 0%, color-mix(in oklab, var(--primary_color) 25%, transparent), transparent 60%)",
                  }}
                />
                <p className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  <span className="bg-gradient-to-br from-foreground to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </motion.div>
    </section>
  );
}
