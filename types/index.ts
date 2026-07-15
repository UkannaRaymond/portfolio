export type NavLink = {
  label: string;
  href: string;
};

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Cloud"
  | "DevOps"
  | "Tools"
  | "Testing & Quality";

export type Skill = {
  name: string;
  category: SkillCategory;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  summary: string;
  image: string;
  gallery: string[];
  tech: string[];
  github?: string;
  liveUrl?: string;
  featured: boolean;
  year: string;
  role: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: string;
  challenges: string;
  lessonsLearned: string;
};

export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  summary: string;
  highlights: string[];
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "twitter" | "mail";
  description: string;
};
