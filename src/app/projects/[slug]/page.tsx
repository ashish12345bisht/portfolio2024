import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { personalCaseStudies } from "@/content/case-studies";
import { CaseStudyPage } from "@/sections/case-study/CaseStudyPage";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return personalCaseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = personalCaseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return {
    title: `${study.title} · Case study`,
    description: study.tagline,
    alternates: { canonical: `/projects/${study.slug}` },
  };
}

export default async function ProjectCaseStudy({ params }: Props) {
  const { slug } = await params;
  const study = personalCaseStudies.find((s) => s.slug === slug);
  if (!study) notFound();
  return (
    <CaseStudyPage
      study={study}
      backHref="/#projects"
      backLabel="Back to projects"
    />
  );
}
