import type { MetadataRoute } from "next";
import { personalCaseStudies, workCaseStudies } from "@/content/case-studies";
import { posts } from "@/content/posts";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/blog`, changeFrequency: "weekly", priority: 0.8 },
    ...workCaseStudies.map((s) => ({
      url: `${site.url}/work/${s.slug}`,
      priority: 0.7,
    })),
    ...personalCaseStudies.map((s) => ({
      url: `${site.url}/projects/${s.slug}`,
      priority: 0.7,
    })),
    ...posts.map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: p.date,
      priority: 0.6,
    })),
  ];
}
