"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionShell from "@/components/ui/SectionShell";
import SectionTitle from "@/components/ui/SectionTitle";
import { StaggerGroup, StaggerItem } from "@/components/animated/Stagger";
import type { ExperienceItem } from "@/lib/types";

interface ExperienceSectionProps {
  items: ExperienceItem[];
}

export default function ExperienceSection({ items }: ExperienceSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 30%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <SectionShell id="experience">
      <SectionTitle
        label="Experience"
        title="A timeline of"
        highlight="platform impact"
        description="From legacy modernization to AI-assisted developer tooling — a track record of measurable improvements."
      />

      <div ref={ref} className="relative mt-10">
        <div className="pointer-events-none absolute left-[14px] top-0 h-full w-px bg-white/10 sm:left-[18px]" />
        <motion.div
          aria-hidden
          style={{ height: lineHeight }}
          className="pointer-events-none absolute left-[14px] top-0 w-px bg-gradient-to-b from-accent via-accent/60 to-transparent shadow-[0_0_18px_var(--primary_color)] sm:left-[18px]"
        />

        <StaggerGroup className="space-y-6">
          {items.map((item) => (
            <StaggerItem key={`${item.organization}-${item.period}`}>
              <article className="group relative pl-12 sm:pl-14">
                <span className="absolute left-0 top-2 flex h-7 w-7 items-center justify-center sm:left-1">
                  <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-accent/20" />
                  <span className="relative h-3 w-3 rounded-full bg-accent shadow-[0_0_18px_var(--primary_color)]" />
                </span>

                <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-accent/40 sm:p-6">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(500px circle at 100% 0%, color-mix(in oklab, var(--primary_color) 18%, transparent), transparent 60%)",
                    }}
                  />
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-foreground sm:text-xl">{item.title}</h3>
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-accent">
                      {item.period}
                    </span>
                  </div>
                  <p className="mb-4 text-sm font-medium text-muted">{item.organization}</p>

                  <ul className="space-y-2">
                    {item.highlights.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </SectionShell>
  );
}
