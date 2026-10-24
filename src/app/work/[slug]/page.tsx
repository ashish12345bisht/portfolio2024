import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { workCaseStudies } from "@/content/case-studies";
import { CaseStudyPage } from "@/sections/case-study/CaseStudyPage";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return workCaseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = workCaseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return {
    title: `${study.title} · Case study`,
    description: study.tagline,
    alternates: { canonical: `/work/${study.slug}` },
  };
}

export default async function WorkCaseStudy({ params }: Props) {
  const { slug } = await params;
  const study = workCaseStudies.find((s) => s.slug === slug);
  if (!study) notFound();
  return (
    <CaseStudyPage study={study} backHref="/#work" backLabel="Back to work" />
  );
}
