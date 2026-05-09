"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { PortfolioData } from "@/lib/types";
import TopNav from "@/components/layout/TopNav";
import MobileMenu from "@/components/layout/MobileMenu";
import ProfileSidebar from "@/components/layout/ProfileSidebar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

interface PortfolioPageProps {
  data: PortfolioData;
}

export default function PortfolioPage({ data }: PortfolioPageProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const initials = useMemo(
    () =>
      data.profile.name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase(),
    [data.profile.name],
  );

  return (
    <>
      <TopNav
        items={data.navigation}
        brand="Jasbeer"
        onOpenMobile={() => setMobileOpen(true)}
      />
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        items={data.navigation}
        socialLinks={data.socialLinks}
      />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto w-full min-w-0 max-w-[1500px] overflow-x-clip px-3 pb-20 pt-[6.5rem] sm:px-6 sm:pt-28 lg:px-10"
      >
        <div className="grid min-w-0 gap-8 xl:grid-cols-[340px_1fr] 2xl:grid-cols-[380px_1fr]">
          <ProfileSidebar
            profile={data.profile}
            socialLinks={data.socialLinks}
            accentPalette={data.accentPalette}
            initials={initials}
          />

          <div className="order-1 flex min-w-0 flex-col gap-10 lg:gap-14 xl:order-2">
            <HeroSection profile={data.profile} stats={data.heroStats} />
            <AboutSection strengths={data.strengths} />
            <ExperienceSection items={data.experience} />
            <SkillsSection groups={data.skills} />
            <ProjectsSection projects={data.projects} />
            <EducationSection items={data.education} />
            <ContactSection
              contact={data.contact}
              profile={data.profile}
              socialLinks={data.socialLinks}
            />
            <Footer name={data.profile.name} />
          </div>
        </div>
      </motion.main>
    </>
  );
}
