import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { posts } from "@/content/posts";
import { PostList } from "./PostList";

export function Writing() {
  return (
    <section
      id="writing"
      className="mx-auto max-w-[1200px] px-4 pb-[72px] md:px-8 md:pb-[120px]"
    >
      <SectionHeading
        eyebrow="04 — Writing"
        title="Notes from the build"
        aside={
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
          >
            All posts <ArrowRight className="size-4" aria-hidden />
          </Link>
        }
      />
      <PostList posts={posts.slice(0, 3)} />
    </section>
  );
}
