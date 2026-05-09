"use client";

import SectionShell from "@/components/ui/SectionShell";
import SectionTitle from "@/components/ui/SectionTitle";
import { StaggerGroup, StaggerItem } from "@/components/animated/Stagger";
import TiltCard from "@/components/animated/TiltCard";

interface AboutSectionProps {
  strengths: string[];
}

export default function AboutSection({ strengths }: AboutSectionProps) {
  return (
    <SectionShell id="about">
      <SectionTitle
        label="About"
        title="What I bring to"
        highlight="engineering teams"
        description="A practical mix of distributed systems intuition, platform thinking, and a deep care for developer experience — backed by quantified outcomes."
      />

      <StaggerGroup className="mt-8 grid gap-4 sm:grid-cols-2">
        {strengths.map((strength, idx) => (
          <StaggerItem key={strength}>
            <TiltCard className="group relative h-full overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-accent/40">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(420px circle at 0% 0%, color-mix(in oklab, var(--primary_color) 18%, transparent), transparent 60%)",
                }}
              />
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-accent/30 bg-accent/15 text-accent">
                  <span className="text-sm font-semibold">{String(idx + 1).padStart(2, "0")}</span>
                </span>
                <p className="text-sm leading-relaxed text-muted">{strength}</p>
              </div>
            </TiltCard>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionShell>
  );
}
