export interface NavItem {
  id: string;
  label: string;
}

export interface LinkItem {
  label: string;
  url: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ProjectItem {
  name: string;
  summary: string;
  impact: string;
  stack: string[];
  link?: string;
}

export interface EducationItem {
  degree: string;
  institute: string;
  period: string;
}

export interface PortfolioData {
  seo: {
    title: string;
    description: string;
  };
  profile: {
    name: string;
    role: string;
    location: string;
    email: string;
    phone: string;
    shortBio: string;
    longBio: string;
    availability: string;
  };
  navigation: NavItem[];
  socialLinks: LinkItem[];
  accentPalette: string[];
  heroStats: StatItem[];
  strengths: string[];
  experience: ExperienceItem[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  education: EducationItem[];
  contact: {
    heading: string;
    note: string;
  };
}
