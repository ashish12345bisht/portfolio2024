import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { button } from "@/lib/styles";
import { HeroGlobe } from "./HeroGlobe";

export function Hero() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 pt-12 pb-10 md:px-8 md:pt-24 md:pb-[72px]">
      <div className="grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-line-2 px-3 py-1.5 font-mono text-xs text-muted">
            <span className="size-2 rounded-full bg-ok" aria-hidden />
            {site.badge}
          </p>
          <h1 className="my-5 text-[40px] leading-[1.05] font-semibold tracking-[-0.035em] md:my-7 md:text-[64px] md:leading-[1.03]">
            {site.headline}
          </h1>
          <p className="mb-7 max-w-[560px] text-base leading-relaxed text-muted md:text-lg">
            {site.description}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#work"
              className={button({ variant: "light", size: "lg" })}
            >
              View selected work <ArrowRight className="size-4" aria-hidden />
            </a>
            <a
              href="#projects"
              className={button({ variant: "ghost", size: "lg" })}
            >
              Personal projects
            </a>
          </div>
        </div>
        <HeroGlobe />
      </div>
    </section>
  );
}
