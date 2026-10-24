import type { Metadata } from "next";
import { Eyebrow } from "@/components/SectionHeading";
import { posts } from "@/content/posts";
import { PostList } from "@/sections/blog/PostList";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on building software: frontend, backend, Linux and the problems in between.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  return (
    <main
      id="top"
      className="mx-auto max-w-[860px] px-4 pt-12 pb-24 md:px-8 md:pt-20"
    >
      <Eyebrow>Blog</Eyebrow>
      <h1 className="mt-4 text-[40px] leading-[1.05] font-semibold tracking-[-0.035em] md:text-[56px]">
        Notes from the build
      </h1>
      <p className="mt-5 max-w-[560px] text-[17px] leading-relaxed text-muted">
        Problems I ran into while shipping software, and what worked.
      </p>
      <div className="mt-12">
        <PostList posts={posts} />
      </div>
    </main>
  );
}
