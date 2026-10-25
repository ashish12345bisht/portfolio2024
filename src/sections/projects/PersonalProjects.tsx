import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Chips } from "@/components/Chips";
import { CopyButton } from "@/components/CopyButton";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { personalCaseStudies } from "@/content/case-studies";
import { personalProjects } from "@/content/personal";
import { socials } from "@/content/site";
import type { PersonalProject } from "@/content/types";
import { button } from "@/lib/styles";
import { cn } from "@/lib/utils";
import { CodeTyperMock } from "./CodeTyperMock";
import { CopyshelfMock } from "./CopyshelfMock";

// Project-specific visuals, keyed by project name. Projects without one get a text-only card.
const previews: Record<string, React.ReactNode> = {
  Copyshelf: <CopyshelfMock />,
  "Code Typer": <CodeTyperMock />,
};

const github = socials.find((s) => s.label === "GitHub")?.href;

const slugify = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
const hasCaseStudy = (name: string) =>
  personalCaseStudies.some((c) => c.slug === slugify(name));

function ProjectCard({ project }: { project: PersonalProject }) {
  const preview = previews[project.name];

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[20px] border border-line-2 bg-surface">
      {preview && <div className="border-b border-line-2">{preview}</div>}
      <div className="flex flex-1 flex-col gap-4 p-6 md:p-7">
        <p className="flex justify-between gap-3 font-mono text-xs text-dim">
          <span>
            {[project.version, project.platform].filter(Boolean).join(" · ")}
          </span>
          <span className="uppercase">Open source</span>
        </p>
        <div>
          <h3 className="text-[26px] font-semibold tracking-[-0.02em]">
            {project.name}
          </h3>
          <p className="mt-1 text-[15px] text-accent">{project.tagline}</p>
        </div>
        <p className="text-[15px] leading-relaxed text-muted">
          {project.summary}
        </p>
        <ul className="space-y-2 text-sm text-fg-2">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-2.5">
              <Check
                className="mt-0.5 size-4 flex-none text-accent"
                aria-hidden
              />
              {feature}
            </li>
          ))}
        </ul>
        <Chips items={project.stack} />
        {project.install && (
          <div className="flex items-center gap-2 rounded-xl border border-line-2 bg-bg py-1.5 pr-1.5 pl-4">
            <code className="min-w-0 flex-1 overflow-x-auto font-mono text-xs whitespace-nowrap text-fg-2">
              <span className="text-dim select-none">$ </span>
              {project.install}
            </code>
            <CopyButton
              text={project.install}
              className={button({
                size: "md",
                className: "h-9 flex-none px-3 text-xs",
              })}
            />
          </div>
        )}
        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={button({ variant: "light" })}
            >
              Try it live <ArrowUpRight className="size-4" aria-hidden />
            </a>
          )}
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className={button({ variant: project.live ? "ghost" : "light" })}
          >
            <FaGithub className="size-4" aria-hidden /> View on GitHub
          </a>
          {hasCaseStudy(project.name) && (
            <Link
              href={`/projects/${slugify(project.name)}`}
              className={button({ variant: "ghost" })}
            >
              Case study
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

function NextBuildCard({ wide }: { wide: boolean }) {
  return (
    <div
      className={cn(
        "flex h-full flex-col gap-4 rounded-[20px] border border-dashed border-line-3 p-6 md:p-7",
        wide && "md:flex-row md:items-center md:gap-6",
      )}
    >
      <p
        className={cn(
          "flex items-center gap-2 font-mono text-xs text-dim uppercase",
          wide && "md:flex-none md:whitespace-nowrap",
        )}
      >
        <span
          className="size-2 animate-pulse rounded-full bg-accent"
          aria-hidden
        />
        In progress
      </p>
      <h3
        className={cn(
          "text-xl font-semibold",
          wide && "md:flex-none md:whitespace-nowrap",
        )}
      >
        Next build
      </h3>
      <p className="text-sm leading-relaxed text-muted">
        I build small tools that fix my own daily annoyances, then open-source
        them. The next one lands here soon.
      </p>
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "mt-auto inline-flex items-center gap-1.5 text-sm text-fg-2 transition-colors hover:text-fg",
            wide && "md:mt-0 md:ml-auto md:flex-none",
          )}
        >
          Follow along on GitHub <ArrowUpRight className="size-4" aria-hidden />
        </a>
      )}
    </div>
  );
}

export function PersonalProjects() {
  // One project sits beside the "next build" card; a pair shares a row with it below.
  const paired = personalProjects.length % 2 === 0;

  return (
    <section
      id="projects"
      className="mx-auto max-w-[1200px] px-4 pb-[72px] md:px-8 md:pb-[120px]"
    >
      <SectionHeading
        eyebrow="02 — Personal projects"
        title="Things I build on my own time"
        aside={
          <p className="max-w-[420px] text-[15px] leading-relaxed text-muted">
            Side projects I design, ship and maintain end to end, all open
            source.
          </p>
        }
      />
      <div className="grid gap-4 md:grid-cols-6">
        {personalProjects.map((project, i) => (
          <Reveal
            key={project.name}
            delay={i * 0.08}
            className={cn(
              "min-w-0",
              paired ? "md:col-span-3" : "md:col-span-4",
            )}
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
        <Reveal
          delay={0.08}
          className={paired ? "md:col-span-6" : "md:col-span-2"}
        >
          <NextBuildCard wide={paired} />
        </Reveal>
      </div>
    </section>
  );
}
