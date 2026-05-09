"use client";

import SectionShell from "@/components/ui/SectionShell";
import SectionTitle from "@/components/ui/SectionTitle";
import { StaggerGroup, StaggerItem } from "@/components/animated/Stagger";
import TiltCard from "@/components/animated/TiltCard";
import type { ProjectItem } from "@/lib/types";

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <SectionShell id="projects">
      <SectionTitle
        label="Projects"
        title="Selected"
        highlight="platform initiatives"
        description="Each project ties back to engineer outcomes — faster pipelines, fewer incidents, smarter tooling."
      />

      <StaggerGroup className="mt-8 grid gap-4 md:grid-cols-2">
        {projects.map((project, idx) => (
          <StaggerItem key={project.name}>
            <TiltCard
              maxTilt={6}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/8 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-accent/40"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(520px circle at 0% 100%, color-mix(in oklab, var(--primary_color) 20%, transparent), transparent 65%)",
                }}
              />

              <div className="mb-4 flex items-start justify-between gap-3">
                <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-muted">
                  / {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-accent">
                  {project.impact}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-accent sm:text-xl">
                {project.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-muted transition hover:border-accent/40 hover:text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-4">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-accent transition hover:text-foreground"
                  >
                    View project
                    <span className="transition group-hover/link:translate-x-0.5">→</span>
                  </a>
                ) : (
                  <span className="text-[11px] uppercase tracking-[0.22em] text-muted">
                    Link to be updated
                  </span>
                )}
                <span className="text-[10px] uppercase tracking-[0.32em] text-muted">
                  Case study
                </span>
              </div>
            </TiltCard>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionShell>
  );
}
