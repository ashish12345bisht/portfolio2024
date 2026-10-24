import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Chips } from "@/components/Chips";
import { OwnershipBar } from "@/components/OwnershipBar";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import type { Project } from "@/content/types";
import { projects } from "@/content/work";
import { cn } from "@/lib/utils";
import { DashboardArt } from "./DashboardArt";

const card =
  "flex h-full flex-col gap-3.5 rounded-[20px] border border-line-2 bg-surface p-6 transition-[border-color,translate] duration-300 hover:-translate-y-0.5 hover:border-[#3a3f4d]";

function ProjectCard({ project }: { project: Project }) {
  const { featured } = project;
  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn(card, "group", featured && "min-h-[440px] p-7")}
    >
      <p className="flex justify-between gap-3 font-mono text-xs text-dim uppercase">
        <span>{project.period}</span>
        <span>{project.kind}</span>
      </p>
      {featured && (
        <div className="min-h-[200px] flex-1 overflow-hidden rounded-xl border border-line-2">
          <DashboardArt />
        </div>
      )}
      <h3
        className={cn(
          "font-semibold tracking-[-0.01em]",
          featured ? "text-[26px]" : "text-xl",
        )}
      >
        {project.title}
      </h3>
      <p
        className={cn(
          "leading-relaxed text-muted",
          featured ? "text-[15px]" : "text-sm",
        )}
      >
        {project.summary}
      </p>
      <Chips items={project.stack} className={cn(!featured && "mt-auto")} />
      {project.ownership && <OwnershipBar {...project.ownership} />}
      <span className="inline-flex items-center gap-1 text-sm text-fg-2 transition-colors group-hover:text-accent">
        Read case study
        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}

export function SelectedWork() {
  return (
    <section
      id="work"
      className="mx-auto max-w-[1200px] px-4 pb-[72px] md:px-8 md:pb-[120px]"
    >
      <SectionHeading
        eyebrow="01 — Work · Conserve It"
        title="The FacilityTracker suite"
        aside={
          <p className="max-w-[420px] text-[15px] leading-relaxed text-muted">
            Building‑analytics apps for Conserve It, part of Daikin Australia.{" "}
            <span className="font-mono text-xs text-dim">
              Bars = my share of each app&apos;s commits.
            </span>
          </p>
        }
      />
      <div className="grid gap-4 md:grid-cols-6">
        {projects.map((project, i) => (
          <Reveal
            key={project.slug}
            delay={(i % 3) * 0.08}
            className={project.featured ? "md:col-span-4" : "md:col-span-2"}
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
