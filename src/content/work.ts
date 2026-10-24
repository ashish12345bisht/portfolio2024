import type { EarlierProject, Project } from "./types";

// The FacilityTracker suite at Conserve It (Daikin Australia). Ownership = my commits / all
// commits in the repos behind each app, from git history.
export const projects: Project[] = [
  {
    slug: "magnify",
    title: "Magnify",
    period: "2024 — Present",
    kind: "Web app + API",
    summary:
      "FacilityTracker's monitoring app for chiller plants and building equipment, with live and historical charts across sites. I work across the Next.js frontend and the Monitor Spring Boot APIs behind it (time‑series export with interpolation, Axon and Cypher queries) and led the Next 14 → 16 upgrade with Playwright visual tests.",
    stack: [
      "Next.js 16",
      "Redux Toolkit",
      "Spring Boot",
      "Axon",
      "Cypher",
      "Playwright",
    ],
    ownership: { mine: 861, total: 3232 },
    featured: true,
  },
  {
    slug: "rca",
    title: "RCA service",
    period: "2025 — Now",
    kind: "Built from scratch",
    summary:
      "Root‑cause analysis for building faults: matches a fault to its likely cause from the platform's fault‑detection rules. Designed and built by me, with parallel fan‑out and fail‑soft upstream calls.",
    stack: ["Spring Boot", "WebFlux", "PostgreSQL"],
    ownership: { mine: 73, total: 76 },
  },
  {
    slug: "insite",
    title: "Insite",
    period: "2025 — Now",
    kind: "Web app + API",
    summary:
      "FacilityTracker's analytics app and its IWS Spring Boot API. I modernised the frontend (React 16 → 18, webpack 5, Enzyme → Testing Library) and surfaced root cause on IWS rule and fault endpoints.",
    stack: ["React 18", "Redux‑Saga", "Spring Boot", "PostgreSQL"],
    ownership: { mine: 178, total: 1297 },
  },
  {
    slug: "gecko",
    title: "Gecko",
    period: "2025 — Now",
    kind: "Backend",
    summary:
      "Spring Boot service for chiller‑plant performance: live data, part‑load hours, thresholds, site customer details and bulk history export.",
    stack: ["Java 17", "Spring Boot 4", "JPA", "PostgreSQL"],
    ownership: { mine: 168, total: 408 },
  },
  {
    slug: "keyra",
    title: "Keyra",
    period: "2026",
    kind: "Built from scratch",
    summary:
      "Authentication for the suite on AWS Cognito: JWT login, OTP verification, first‑time login, password reset and user management with custom attributes.",
    stack: ["Next.js", "AWS Cognito", "JWT", "Docker"],
    ownership: { mine: 25, total: 26 },
  },
];

export const earlierProjects: EarlierProject[] = [
  {
    title: "Blackjet",
    period: "2023 — 2024",
    summary:
      "Private‑jet marketing site with SVG animation and a 3D cabin tour.",
  },
  {
    title: "PartnerGate",
    period: "2023",
    summary: "Vue → React rebuild with interactive window drawing (Webcc).",
  },
  {
    title: "Recrutium",
    period: "2022",
    summary: "Job portal with resume parsing via a Python service.",
  },
  {
    title: "SCCH · STPI",
    period: "2023",
    summary: "MERN platform with multi‑module, role‑based login.",
  },
];
