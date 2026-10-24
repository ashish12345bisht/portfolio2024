import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Chips } from "@/components/Chips";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/SectionHeading";
import type { CaseStudy } from "@/content/types";
import { button } from "@/lib/styles";

export function CaseStudyPage({
  study,
  backHref,
  backLabel,
}: {
  study: CaseStudy;
  backHref: string;
  backLabel: string;
}) {
  return (
    <main
      id="top"
      className="mx-auto max-w-[860px] px-4 pt-12 pb-24 md:px-8 md:pt-20"
    >
      <Link
        href={backHref}
        className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
      >
        <ArrowLeft className="size-4" aria-hidden /> {backLabel}
      </Link>

      <header className="mt-10">
        <Eyebrow>Case study · {study.period}</Eyebrow>
        <h1 className="mt-4 text-[40px] leading-[1.05] font-semibold tracking-[-0.035em] md:text-[56px]">
          {study.title}
        </h1>
        <p className="mt-3 text-lg text-accent">{study.tagline}</p>
        <p className="mt-6 text-[17px] leading-relaxed text-fg-2">
          {study.overview}
        </p>
        <dl className="mt-8 grid gap-6 rounded-2xl border border-line bg-surface-2 p-6 sm:grid-cols-[1fr_2fr]">
          <div>
            <dt className="font-mono text-[11px] tracking-[0.08em] text-dim uppercase">
              My role
            </dt>
            <dd className="mt-2 text-sm text-fg-2">{study.role}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] tracking-[0.08em] text-dim uppercase">
              Stack
            </dt>
            <dd className="mt-2">
              <Chips items={study.stack} />
            </dd>
          </div>
        </dl>
        {study.links && (
          <div className="mt-6 flex flex-wrap gap-3">
            {study.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={button({ variant: "light" })}
              >
                {link.label} <ArrowUpRight className="size-4" aria-hidden />
              </a>
            ))}
          </div>
        )}
      </header>

      <section aria-labelledby="challenges" className="mt-16">
        <h2
          id="challenges"
          className="text-2xl font-semibold tracking-[-0.02em]"
        >
          Challenges
        </h2>
        <ol className="mt-6 space-y-5">
          {study.challenges.map((c, i) => (
            <li key={c.title}>
              <Reveal>
                <article className="rounded-[20px] border border-line-2 bg-surface p-6 md:p-8">
                  <p className="font-mono text-[11px] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">{c.title}</h3>
                  <dl className="mt-5 space-y-4 text-[15px] leading-relaxed">
                    {(
                      [
                        ["Problem", c.problem],
                        ["Approach", c.approach],
                        ["Outcome", c.outcome],
                      ] as const
                    ).map(([label, text]) => (
                      <div
                        key={label}
                        className="grid gap-1 sm:grid-cols-[110px_1fr] sm:gap-4"
                      >
                        <dt className="font-mono text-xs text-dim uppercase sm:pt-1">
                          {label}
                        </dt>
                        <dd className="text-fg-2">{text}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="learnings" className="mt-16">
        <h2
          id="learnings"
          className="text-2xl font-semibold tracking-[-0.02em]"
        >
          What I took away
        </h2>
        <ul className="mt-6 space-y-3">
          {study.learnings.map((l) => (
            <li
              key={l}
              className="flex gap-3 text-[15px] leading-relaxed text-fg-2"
            >
              <span
                className="mt-2.5 size-1.5 flex-none rounded-full bg-accent"
                aria-hidden
              />
              {l}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
