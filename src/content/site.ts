import type { Certificate, Highlight, SocialLink, StackGroup } from "./types";

export const site = {
  name: "Ashish Bisht",
  initials: "AB",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ashishxbisht.in",
  email: "ashish12345bisht@gmail.com",
  resume: "/resume.pdf",
  source: "https://github.com/ashish12345bisht/portfolio2024",
  badge: "Daikin India × Conserve It",
  timezone: "IST (UTC+5:30)",
  headline: "Full‑stack engineer building software for smarter buildings.",
  description:
    "5+ years of experience shipping production web apps end to end, from React and Next.js interfaces to Java, Spring Boot and Node.js services. I care about clean architecture, performance and code that's easy to maintain. Currently at Daikin, building analytics software for commercial buildings.",
};

export const highlights: Highlight[] = [
  { value: "5+", label: "years building production software" },
  { value: "1,500+", label: "production commits since 2024" },
  {
    value: "UI → Ops",
    label: "owning features end to end: React UI, Spring Boot APIs, CI/CD",
  },
  {
    value: "IN ⇄ AU",
    label: "shipping with a distributed team across India and Australia",
  },
];

export const stack: StackGroup[] = [
  {
    area: "Frontend",
    items: [
      "React 19",
      "Next.js App Router",
      "TypeScript",
      "D3 · MapLibre GL",
      "Three.js / R3F",
      "Design systems",
    ],
  },
  {
    area: "Backend",
    items: [
      "Java 17 / 21",
      "Spring Boot 4",
      "WebFlux (reactive)",
      "JPA / Hibernate",
      "Node.js",
      "REST · OpenAPI",
    ],
  },
  {
    area: "Data & messaging",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "DynamoDB",
      "MQTT",
      "Axon · Cypher",
      "Time‑series data",
    ],
  },
  {
    area: "Cloud & DevOps",
    items: [
      "AWS: Cognito · S3 · SQS · Lambda",
      "EKS · ECR",
      "Docker",
      "Jenkins CI/CD",
      "SonarQube",
    ],
  },
  {
    area: "Security & quality",
    items: [
      "Keycloak · OIDC · JWT",
      "Zero‑trust networking",
      "SBOM · Trivy · Dependency‑Track",
      "Playwright visual testing",
      "Jest · JUnit 5 · Mockito",
    ],
  },
];

export const socials: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ashishbishtconnect/",
  },
  { label: "GitHub", href: "https://github.com/ashish12345bisht" },
  { label: "LeetCode", href: "https://leetcode.com/ashish12345bisht/" },
  { label: "X", href: "https://twitter.com/https__ashishb" },
];

export const certificates: Certificate[] = [
  {
    title: "MERN Full Stack",
    issuer: "Great Learning · 2022–23",
    url: "https://drive.google.com/file/d/1LOiRUeB1Xgolq-QMvq1Totfq2YW1ul8q/view",
  },
  {
    title: "Meta Front-End Developer Capstone",
    issuer: "Coursera · 2023",
    url: "https://drive.google.com/file/d/1kiNcn5I1-pdoSXrfbMqI8So861YEIHA0/view",
  },
];

export const navItems = [
  { label: "Work", href: "/#work" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];
