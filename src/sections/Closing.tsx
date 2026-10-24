import { ArrowUpRight } from "lucide-react";
import { CopyButton } from "@/components/CopyButton";
import { Eyebrow } from "@/components/SectionHeading";
import { certificates, site, socials } from "@/content/site";
import { earlierProjects } from "@/content/work";
import { button } from "@/lib/styles";

const container = "mx-auto max-w-[1200px] px-4 md:px-8";

export function EarlierWork() {
  return (
    <section
      aria-labelledby="earlier-title"
      className={`${container} pb-[72px] md:pb-[120px]`}
    >
      <h2
        id="earlier-title"
        className="mb-4 font-mono text-xs tracking-[0.08em] text-dim"
      >
        EARLIER WORK · 2021 — 2024
      </h2>
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {earlierProjects.map((p) => (
          <li
            key={p.title}
            className="flex flex-col gap-2.5 rounded-2xl border border-line p-5"
          >
            <span className="font-mono text-[11px] text-dim">{p.period}</span>
            <h3 className="text-[17px] font-semibold">{p.title}</h3>
            <p className="text-[13px] leading-normal text-muted">{p.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Certificates() {
  return (
    <section
      aria-label="Certificates"
      className={`${container} pb-[72px] md:pb-[120px]`}
    >
      <div className="mb-5">
        <Eyebrow>05 — Certificates</Eyebrow>
      </div>
      <div className="flex flex-wrap gap-4">
        {certificates.map((c) => (
          <a
            key={c.title}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-[1_1_300px] items-center justify-between gap-4 rounded-[14px] border border-line px-6 py-5 transition-colors hover:border-line-3"
          >
            <span>
              <span className="block font-medium">{c.title}</span>
              <span className="mt-1 block text-[13px] text-muted">
                {c.issuer}
              </span>
            </span>
            <ArrowUpRight className="size-4 text-muted" aria-hidden />
          </a>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className={`${container} pb-20`}>
      <div className="flex flex-col gap-7 rounded-[28px] border border-line-2 bg-[radial-gradient(120%_140%_at_100%_0%,#161b2e_0%,var(--color-surface-2)_55%)] px-[22px] py-8 md:px-12 md:py-16">
        <Eyebrow>06 — Contact</Eyebrow>
        <h2 className="max-w-[760px] text-[32px] leading-[1.08] font-semibold tracking-[-0.035em] md:text-[56px] md:leading-[1.05]">
          Have a product that needs building? Let&apos;s talk.
        </h2>
        <p className="-mt-2 font-mono text-sm text-muted">
          Based in India · {site.timezone} · working with teams in Australia
          daily
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${site.email}`}
            className={button({ variant: "accent", size: "lg" })}
          >
            {site.email}
          </a>
          <CopyButton
            text={site.email}
            label="Copy email"
            className={button({ variant: "ghost", size: "lg" })}
          />
        </div>
        <ul className="flex flex-wrap gap-6 text-sm">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-fg"
              >
                {s.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer
      className={`${container} flex flex-wrap justify-between gap-4 border-t border-line pt-6 pb-10 text-[13px] text-dim`}
    >
      <span>
        © {new Date().getFullYear()} {site.name}
      </span>
      <span className="font-mono text-xs">
        Next.js 16 · React Three Fiber · Motion ·{" "}
        <a
          href={site.source}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-fg"
        >
          View source ↗
        </a>
      </span>
    </footer>
  );
}
