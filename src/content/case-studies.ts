import type { CaseStudy } from "./types";

// Case studies describe problems and approaches only, never internal architecture.
export const workCaseStudies: CaseStudy[] = [
  {
    slug: "magnify",
    title: "Magnify",
    tagline: "Monitoring app for chiller plants and building equipment",
    period: "2024 — Present",
    role: "Full‑stack engineer: frontend and the Spring Boot APIs behind it",
    overview:
      "Magnify gives facility teams live and historical views of their plant equipment across sites. I've worked on it since I joined: shipping features and charts on the Next.js side, building endpoints in its Spring Boot APIs, and keeping a large, long‑lived codebase healthy as the framework moved on.",
    stack: [
      "Next.js 16",
      "React",
      "Redux Toolkit",
      "Spring Boot",
      "Axon",
      "Cypher",
      "Playwright",
      "Jest",
      "Jenkins",
    ],
    challenges: [
      {
        title: "Two framework majors without breaking the UI",
        problem:
          "The app was on Next.js 14 and Tailwind 3, with dependencies falling behind and security findings piling up. A big upgrade on a large app risks small visual regressions nobody notices until a customer does.",
        approach:
          "I upgraded in steps (Next 14 → 16, Tailwind 3 → 4, Jest 29 → 30, Node 24) and leaned on Playwright screenshot tests as a safety net. I stabilised the screenshots first, hiding dev‑only overlays and loading each app's environment the same way in CI, so every diff that remained was a real change.",
        outcome:
          "The upgrade shipped with visual baselines updated deliberately rather than by accident, and the dependency findings that triggered it were cleared.",
      },
      {
        title: "Gaps in time‑series data",
        problem:
          "Sensors don't report on a perfect schedule. When an export window started between two readings, the first values came back empty, which made charts and exported reports look like the equipment had stopped.",
        approach:
          "I added optional interpolation that fills the gap from the last known reading before the window, behind an explicit flag so existing consumers kept their behaviour, and covered the edge cases with tests.",
        outcome:
          "Exports and charts now start with sensible values, and the behaviour is opt‑in and documented.",
      },
      {
        title: "Making dependency risk visible",
        problem:
          "Nobody could easily answer which vulnerable packages were shipping in which app.",
        approach:
          "I added SBOM generation to the CI pipelines and uploads to a dependency‑tracking dashboard, scoped to the branches that matter so the signal stays clean.",
        outcome:
          "Vulnerabilities are now tracked per app and release, which turned upgrades from guesswork into a prioritised list.",
      },
    ],
    learnings: [
      "Make visual tests deterministic before trusting them; flaky screenshots are worse than none.",
      "Behaviour changes in shared APIs should be opt‑in first.",
      "Security tooling only helps if its output is scoped and actionable.",
    ],
  },
  {
    slug: "rca",
    title: "RCA service",
    tagline: "Root‑cause analysis for building faults, built from scratch",
    period: "2025 — Now",
    role: "Designed and built the service end to end",
    overview:
      "When a building raises a fault, engineers want to know the likely cause, not just the symptom. I built this service from an empty repository: API design, data model, tests, containerisation, CI and documentation. Today it powers root‑cause information across the product.",
    stack: [
      "Java",
      "Spring Boot",
      "WebFlux",
      "PostgreSQL",
      "JUnit",
      "Mockito",
      "Docker",
      "Jenkins",
    ],
    challenges: [
      {
        title: "Slow responses from sequential lookups",
        problem:
          "Each analysis needs data for several pieces of equipment, and the first version fetched them one by one. Response time grew with every item.",
        approach:
          "I moved the lookups out of the loop and ran them concurrently, with sensible limits so a large request can't flood the systems it depends on.",
        outcome:
          "Analysis time stopped scaling linearly with the number of items, and the service handles bigger requests comfortably.",
      },
      {
        title: "One bad dependency breaking every request",
        problem:
          "The service depends on external data sources that occasionally fail or time out, and a single failure used to fail the whole response.",
        approach:
          "I made those calls fail soft: skip what can't be fetched, log it, and return everything that could be resolved, with tests for each failure path.",
        outcome:
          "Users get partial, useful results instead of an error page, and failures are visible in logs instead of to users.",
      },
      {
        title: "Setting the bar for a new codebase",
        problem:
          "A new service sets conventions everyone after you follows, good or bad.",
        approach:
          "From the first commits I added controller and service tests, a clear README for setup and deployment, a Dockerfile and a CI pipeline with security scanning.",
        outcome:
          "Teammates can run, test and deploy the service without asking me, and it has stayed easy to change.",
      },
    ],
    learnings: [
      "Concurrency is a fix for latency, but limits are what make it safe.",
      "Partial results beat no results when the user can still act on them.",
      "Docs and tests in week one are cheaper than in month six.",
    ],
  },
  {
    slug: "insite",
    title: "Insite",
    tagline: "Modernising a long‑lived analytics app",
    period: "2025 — Now",
    role: "Frontend modernisation and API features",
    overview:
      "Insite is a mature analytics app with years of history. My work focused on bringing its frontend up to date without a rewrite, and adding features to its Spring Boot API.",
    stack: [
      "React 18",
      "Redux‑Saga",
      "webpack 5",
      "Testing Library",
      "Cypress",
      "Spring Boot",
      "PostgreSQL",
    ],
    challenges: [
      {
        title: "A legacy frontend stuck on old majors",
        problem:
          "The app ran on React 16, webpack 4 and an old Redux stack, with vulnerable transitive dependencies and tooling that no longer worked on current Node.",
        approach:
          "I upgraded one layer at a time, keeping the app releasable after every step: React 18 and react‑redux 8, webpack 5 with the polyfills it no longer ships, axios 1, Jest 30 and Node 24. I replaced deprecated tooling like react‑hot‑loader with Fast Refresh and removed unused libraries and widgets along the way.",
        outcome:
          "The app is on supported versions, the bundle lost dead weight, and the dependency findings were resolved.",
      },
      {
        title: "Tests that couldn't survive React 18",
        problem:
          "The test suite was written with Enzyme, which doesn't support React 18.",
        approach:
          "I migrated the tests to Testing Library, rewriting them around what the user sees rather than component internals.",
        outcome:
          "The suite runs on the new stack and is less brittle to refactors.",
      },
      {
        title: "Small UI paper cuts",
        problem:
          "Chart labels wrapped on short bars and table headers broke while scrolling, which made dense data hard to read.",
        approach:
          "I fixed the layout issues and tightened the chart label logic.",
        outcome: "Dense views are readable again on real data.",
      },
    ],
    learnings: [
      "Incremental upgrades with a releasable app at every step beat a big‑bang rewrite.",
      "Tests written against behaviour survive framework changes; tests against internals don't.",
    ],
  },
  {
    slug: "gecko",
    title: "Gecko",
    tagline: "Chiller‑plant performance service",
    period: "2025 — Now",
    role: "Major contributor",
    overview:
      "Gecko serves chiller‑plant performance data to the rest of the suite: live values, part‑load hours, thresholds and bulk exports. I've been one of its main contributors, focused on data correctness, new endpoints and keeping it on current Spring Boot.",
    stack: [
      "Java 17",
      "Spring Boot 4",
      "JPA",
      "PostgreSQL",
      "JUnit",
      "Mockito",
    ],
    challenges: [
      {
        title: "Correct numbers from messy inputs",
        problem:
          "Equipment data arrives in inconsistent formats. Some values came through as strings or nulls, which led to wrong readings, like severe values showing as zero.",
        approach:
          "I made parsing defensive and explicit, and added tests for invalid and edge‑case inputs so regressions get caught in CI.",
        outcome:
          "Live values are reliable, and bad input fails loudly in tests instead of quietly in production.",
      },
      {
        title: "Keeping the framework current",
        problem:
          "Older Spring and Jackson versions were flagged with security issues.",
        approach:
          "I upgraded to Spring Boot 4 and Jackson 3, fixed the breaking changes, and added SBOM scanning to the pipeline.",
        outcome:
          "The service runs on supported versions with its dependency risk tracked.",
      },
    ],
    learnings: [
      "Treat every external value as untrusted until it's parsed and validated.",
      "A test for each bug you fix is how a codebase gets more reliable over time.",
    ],
  },
  {
    slug: "keyra",
    title: "Keyra",
    tagline: "Authentication for the suite, built from scratch",
    period: "2026",
    role: "Built end to end",
    overview:
      "Keyra handles sign‑in and user management on AWS Cognito. I built it from scratch: every user‑facing flow, the user administration screens and the deployment setup.",
    stack: [
      "Next.js",
      "React 19",
      "AWS Cognito",
      "JWT",
      "Tailwind CSS",
      "Docker",
    ],
    challenges: [
      {
        title: "Covering every real sign‑in path",
        problem:
          "Real users don't just log in. They verify with OTP, set a password on first login, forget passwords and change phone numbers.",
        approach:
          "I built each flow as a first‑class screen (login, OTP verification, first‑time login, forgot and reset password) and tested them against a real Cognito pool.",
        outcome:
          "Every path a user can take through sign‑in is handled, not just the happy one.",
      },
      {
        title: "Admin tools without a console",
        problem:
          "Creating users and editing their attributes required going through the AWS console.",
        approach:
          "I added screens to create users with custom attributes and to edit them afterwards, behind proper authorisation.",
        outcome: "Admins manage users from the product instead of AWS.",
      },
      {
        title: "No secrets baked into the build",
        problem:
          "Environment‑specific settings shouldn't be compiled into a frontend image.",
        approach:
          "I moved configuration to runtime so the same Docker image runs in every environment.",
        outcome:
          "One image, many environments, and nothing sensitive in the bundle.",
      },
    ],
    learnings: [
      "Auth is mostly edge cases; design for the unhappy paths first.",
      "Runtime configuration keeps images portable and secrets out of bundles.",
    ],
  },
];

export const personalCaseStudies: CaseStudy[] = [
  {
    slug: "copyshelf",
    title: "Copyshelf",
    tagline: "Clipboard history for Linux, open source",
    period: "2026",
    role: "Solo: design, code, packaging and docs",
    overview:
      "I missed Windows' Win+V on Linux, so I built it: press Super+V, pick an earlier copy, and it's pasted into the app you're using. It runs on GNOME, KDE, Sway, Hyprland and X11, installs with one command without root, and is tested in CI on several Ubuntu versions.",
    stack: [
      "Python",
      "GTK · PyGObject",
      "GNOME Shell extension",
      "D‑Bus",
      "Wayland / X11",
      "GitHub Actions",
    ],
    challenges: [
      {
        title: "Wayland doesn't let apps watch the clipboard",
        problem:
          "On Wayland, an app can't read the clipboard unless it has focus, which is exactly what a clipboard manager needs to do.",
        approach:
          "I pick a method per desktop. On GNOME, Copyshelf runs through XWayland, where GNOME shares every copy. On KDE and wlroots desktops it uses the data‑control protocol via wl‑paste.",
        outcome:
          "Clipboard history works on every major desktop, not just one.",
      },
      {
        title: "Pasting into other apps",
        problem:
          "Wayland also blocks apps from pressing keys in other apps, so 'auto‑paste' is not allowed by default.",
        approach:
          "On GNOME I wrote a small GNOME Shell extension that presses Ctrl+V when Copyshelf asks over D‑Bus. Elsewhere it uses xdotool, wtype or the RemoteDesktop portal. Terminals get Ctrl+Shift+V. Where nothing works, it copies the item and tells you to press Ctrl+V, so it never fails silently.",
        outcome:
          "Auto‑paste works across desktops and terminals, with a clear fallback.",
      },
      {
        title: "Not leaking passwords",
        problem:
          "A clipboard history that records passwords is a security problem.",
        approach:
          "Copyshelf skips copies that password managers mark as secret, using the hint KeePassXC and KDE apps attach to sensitive copies.",
        outcome:
          "Passwords copied from password managers never land in the history.",
      },
    ],
    learnings: [
      "Desktop Linux is many platforms; design for detection and fallbacks.",
      "A one‑line, no‑root installer matters as much as features for adoption.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ashish12345bisht/copyshelf",
      },
    ],
  },
];
