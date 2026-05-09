"use client";

import SectionShell from "@/components/ui/SectionShell";
import SectionTitle from "@/components/ui/SectionTitle";
import { StaggerGroup, StaggerItem } from "@/components/animated/Stagger";
import TiltCard from "@/components/animated/TiltCard";
import type { EducationItem } from "@/lib/types";

interface EducationSectionProps {
  items: EducationItem[];
}

export default function EducationSection({ items }: EducationSectionProps) {
  return (
    <SectionShell id="education">
      <SectionTitle
        label="Education"
        title="Academic"
        highlight="foundation"
        description="Where the engineering mindset began — and continues to evolve through hands-on production work."
      />

      <StaggerGroup className="mt-8 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <StaggerItem key={item.degree}>
            <TiltCard
              maxTilt={5}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-accent/40"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(440px circle at 100% 0%, color-mix(in oklab, var(--primary_color) 18%, transparent), transparent 60%)",
                }}
              />
              <span className="mb-4 inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-accent">
                {item.period}
              </span>
              <h3 className="text-lg font-semibold text-foreground">{item.degree}</h3>
              <p className="mt-2 text-sm text-muted">{item.institute}</p>
            </TiltCard>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionShell>
  );
}
