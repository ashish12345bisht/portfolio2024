export interface Ownership {
  /** Commits authored by me in the repo(s) behind this project. */
  mine: number;
  total: number;
}

export interface Project {
  slug: string;
  title: string;
  period: string;
  kind: string;
  summary: string;
  stack: string[];
  ownership?: Ownership;
  featured?: boolean;
}

export interface EarlierProject {
  title: string;
  period: string;
  summary: string;
}

export interface Role {
  mark: string;
  company: string;
  title: string;
  period: string;
  points: string[];
  stack: string[];
}

export interface PersonalProject {
  name: string;
  tagline: string;
  summary: string;
  features: string[];
  stack: string[];
  repo: string;
  /** Live demo or download page, when there is one. */
  live?: string;
  /** One-line install command shown with a copy button. */
  install?: string;
  version?: string;
  platform?: string;
}

export interface Challenge {
  title: string;
  problem: string;
  approach: string;
  outcome: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  period: string;
  role: string;
  overview: string;
  stack: string[];
  challenges: Challenge[];
  learnings: string[];
  links?: SocialLink[];
}

export interface Post {
  slug: string;
  title: string;
  summary: string;
  /** ISO date, e.g. "2026-10-24". */
  date: string;
  readingMinutes: number;
  tags: string[];
}

export interface Certificate {
  title: string;
  issuer: string;
  url: string;
}

export interface Highlight {
  value: string;
  label: string;
}

export interface StackGroup {
  area: string;
  items: string[];
}

export interface SocialLink {
  label: string;
  href: string;
}
