"use client";

import { motion } from "framer-motion";
import SectionShell from "@/components/ui/SectionShell";
import SectionTitle from "@/components/ui/SectionTitle";
import Magnetic from "@/components/animated/Magnetic";
import TiltCard from "@/components/animated/TiltCard";
import { StaggerGroup, StaggerItem } from "@/components/animated/Stagger";
import type { LinkItem, PortfolioData } from "@/lib/types";

interface ContactSectionProps {
  contact: PortfolioData["contact"];
  profile: PortfolioData["profile"];
  socialLinks: LinkItem[];
}

export default function ContactSection({ contact, profile, socialLinks }: ContactSectionProps) {
  return (
    <SectionShell id="contact">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-80"
        style={{
          background:
            "radial-gradient(700px circle at 50% 0%, color-mix(in oklab, var(--primary_color) 16%, transparent), transparent 60%)",
        }}
      />

      <SectionTitle
        label="Contact"
        title={contact.heading.split(" ").slice(0, -1).join(" ")}
        highlight={contact.heading.split(" ").slice(-1)[0]}
        description={contact.note}
        align="center"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10 flex flex-col items-center text-center"
      >
        <a
          href={`mailto:${profile.email}`}
          className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
        >
          <span className="text-gradient">{profile.email}</span>
        </a>
        <Magnetic className="mt-7">
          <a
            href={`mailto:${profile.email}`}
            className="group/cta relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-accent bg-accent px-7 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-black transition hover:bg-transparent hover:text-accent"
          >
            <span className="relative z-10">Send me an email</span>
            <span className="relative z-10 transition group-hover/cta:translate-x-0.5">→</span>
          </a>
        </Magnetic>
      </motion.div>

      <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2">
        <StaggerItem>
          <TiltCard
            maxTilt={5}
            className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-accent/40"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-muted">Email</p>
            <a href={`mailto:${profile.email}`} className="mt-3 block text-sm text-foreground transition group-hover:text-accent">
              {profile.email}
            </a>
          </TiltCard>
        </StaggerItem>
        <StaggerItem>
          <TiltCard
            maxTilt={5}
            className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-accent/40"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-muted">Phone</p>
            <a href={`tel:${profile.phone}`} className="mt-3 block text-sm text-foreground transition group-hover:text-accent">
              {profile.phone}
            </a>
          </TiltCard>
        </StaggerItem>
      </StaggerGroup>

      <div className="mt-10">
        <p className="mb-3 text-xs uppercase tracking-[0.32em] text-muted text-center">Or find me on</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {socialLinks.map((link) => (
            <Magnetic key={link.label} strength={10}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-xs font-medium uppercase tracking-[0.22em] text-muted transition hover:border-accent hover:text-accent"
              >
                {link.label}
              </a>
            </Magnetic>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
