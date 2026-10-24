import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Chips } from "@/components/Chips";
import { posts } from "@/content/posts";
import { site } from "@/content/site";
import { formatDate } from "@/sections/blog/PostList";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      publishedTime: post.date,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const { default: Body } = await import(`@/content/posts/${slug}.mdx`);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    author: { "@type": "Person", name: site.name, url: site.url },
  };

  return (
    <main
      id="top"
      className="mx-auto max-w-[720px] px-4 pt-12 pb-24 md:px-8 md:pt-20"
    >
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
      >
        <ArrowLeft className="size-4" aria-hidden /> All posts
      </Link>
      <article className="mt-10">
        <header className="border-b border-line pb-8">
          <p className="font-mono text-xs text-dim">
            <time dateTime={post.date}>{formatDate(post.date)}</time> ·{" "}
            {post.readingMinutes} min read
          </p>
          <h1 className="mt-4 text-[34px] leading-[1.1] font-semibold tracking-[-0.03em] md:text-[44px]">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {post.summary}
          </p>
          <Chips items={post.tags} className="mt-5" />
        </header>
        <div className="text-[16px]">
          <Body />
        </div>
      </article>
      <script
        type="application/ld+json"
        // Static, trusted data defined in this repo.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </main>
  );
}
