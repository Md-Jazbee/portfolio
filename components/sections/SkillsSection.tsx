"use client";

import SectionShell from "@/components/ui/SectionShell";
import SectionTitle from "@/components/ui/SectionTitle";
import { StaggerGroup, StaggerItem } from "@/components/animated/Stagger";
import TiltCard from "@/components/animated/TiltCard";
import Marquee from "@/components/animated/Marquee";
import type { SkillCategory } from "@/lib/types";

interface SkillsSectionProps {
  groups: SkillCategory[];
}

export default function SkillsSection({ groups }: SkillsSectionProps) {
  const allSkills = groups.flatMap((group) => group.items);

  return (
    <SectionShell id="skills">
      <SectionTitle
        label="Skills"
        title="The toolkit behind the"
        highlight="systems I build"
        description="A pragmatic stack honed across distributed systems, observability, cloud platforms, and AI tooling."
      />

      <StaggerGroup className="mt-8 grid gap-4 md:grid-cols-2">
        {groups.map((group) => (
          <StaggerItem key={group.category}>
            <TiltCard
              maxTilt={5}
              className="group relative h-full overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-accent/40"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(440px circle at 50% 100%, color-mix(in oklab, var(--primary_color) 16%, transparent), transparent 65%)",
                }}
              />
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent/30 bg-accent/12 text-[11px] font-semibold text-accent">
                  {group.category.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()}
                </span>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted transition hover:border-accent/40 hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </TiltCard>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <div className="mt-10 border-t border-white/8 pt-8">
        <Marquee>
          <div className="flex items-center gap-12 text-base uppercase tracking-[0.3em] text-muted">
            {allSkills.map((skill) => (
              <span key={skill} className="flex items-center gap-12">
                <span className="text-foreground/80">{skill}</span>
                <span className="text-accent">✦</span>
              </span>
            ))}
          </div>
        </Marquee>
      </div>
    </SectionShell>
  );
}
