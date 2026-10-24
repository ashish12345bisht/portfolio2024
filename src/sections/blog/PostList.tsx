import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Post } from "@/content/types";

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <ul className="divide-y divide-line border-y border-line">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link
            href={`/blog/${post.slug}`}
            className="group grid gap-2 py-6 md:grid-cols-[140px_1fr_auto] md:items-baseline md:gap-8"
          >
            <span className="font-mono text-xs text-dim">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </span>
            <span>
              <span className="block text-lg font-semibold tracking-[-0.01em] transition-colors group-hover:text-accent">
                {post.title}
              </span>
              <span className="mt-1.5 block text-sm leading-relaxed text-muted">
                {post.summary}
              </span>
            </span>
            <span className="hidden items-center gap-1 font-mono text-xs text-dim md:flex">
              {post.readingMinutes} min
              <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
