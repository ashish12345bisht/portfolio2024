import type { Post } from "./types";

// Newest first. Each slug needs a matching src/content/posts/<slug>.mdx file.
export const posts: Post[] = [
  {
    slug: "upgrading-nextjs-14-to-16",
    title:
      "Upgrading a large Next.js app from 14 to 16 without breaking the UI",
    summary:
      "What I'd do again, and what I'd do first, after taking a production app across two Next.js majors and Tailwind 4.",
    date: "2026-10-24",
    readingMinutes: 7,
    tags: ["Next.js", "Testing", "Tailwind"],
  },
  {
    slug: "building-copyshelf",
    title: "Building Win+V for Linux: clipboard history on Wayland",
    summary:
      "Wayland blocks the two things a clipboard manager needs to do. Here's how Copyshelf works around that on every major desktop.",
    date: "2026-10-24",
    readingMinutes: 7,
    tags: ["Linux", "Python", "Wayland"],
  },
];
