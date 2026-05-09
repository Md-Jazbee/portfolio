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
      className="section-anchor relative overflow-hidden rounded-[32px] border border-white/8 bg-panel/40 p-7 sm:p-10 lg:p-14"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(800px circle at 0% 0%, color-mix(in oklab, var(--primary_color) 22%, transparent), transparent 60%), radial-gradient(700px circle at 100% 100%, rgba(20,197,253,0.18), transparent 60%)",
        }}
      />
      <motion.div style={{ y, opacity, scale }} className="relative">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[10px] font-medium uppercase tracking-[0.32em] text-muted backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Hello, I am Jasbeer
        </motion.span>

        <div className="mt-7 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <AnimatedHeading
              text="Building resilient platforms"
              highlight="for developer velocity."
              className="text-balance text-[clamp(2.4rem,5.6vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-foreground"
              highlightClassName="text-gradient"
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
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
                  className="group/cta relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-accent bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-black transition hover:bg-transparent hover:text-accent"
                >
                  <span className="relative z-10">See my work</span>
                  <span className="relative z-10 transition group-hover/cta:translate-x-0.5">→</span>
                </a>
              </Magnetic>
              <Magnetic strength={12}>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs font-medium uppercase tracking-[0.22em] text-foreground transition hover:border-accent hover:text-accent"
                >
                  Let&apos;s talk
                </a>
              </Magnetic>
            </motion.div>
          </div>

          <div className="hidden self-end lg:block">
            <RotatingBadge text="explore projects • explore projects • " />
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
