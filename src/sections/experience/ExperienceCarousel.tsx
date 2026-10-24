"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Chips } from "@/components/Chips";
import { SectionHeading } from "@/components/SectionHeading";
import type { Role } from "@/content/types";
import { cn } from "@/lib/utils";

const pad = (n: number) => String(n).padStart(2, "0");
// Opacity by distance from the active slide; slides further away are hidden.
const slideOpacity = [1, 0.32];
const arrowButton =
  "inline-flex size-11 items-center justify-center rounded-full border border-line-3 bg-surface text-fg transition-colors hover:border-[#3a3f4d]";

export function ExperienceCarousel({ roles }: { roles: Role[] }) {
  const [index, setIndex] = useState(0);
  const pointerStart = useRef<number | null>(null);
  const slides = useRef<(HTMLElement | null)[]>([]);
  const [heights, setHeights] = useState<number[]>([]);

  // Track each card's height so the stage can fit the active one.
  useEffect(() => {
    const measure = () =>
      setHeights(slides.current.map((el) => el?.offsetHeight ?? 0));
    const observer = new ResizeObserver(measure);
    slides.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Fixed heights from the class names apply until the cards are measured.
  const stageHeight = heights[index] ? heights[index] + 20 : undefined;

  const go = (i: number) => setIndex((i + roles.length) % roles.length);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") go(index - 1);
    if (e.key === "ArrowRight") go(index + 1);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    const start = pointerStart.current;
    pointerStart.current = null;
    if (start === null || Math.abs(e.clientX - start) < 40) return;
    go(index + (e.clientX < start ? 1 : -1));
  };

  return (
    <section
      id="experience"
      aria-roledescription="carousel"
      aria-label="Work experience"
      onKeyDown={onKeyDown}
      className="pb-[72px] md:pb-[120px]"
    >
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <SectionHeading
          eyebrow="03 — Experience"
          title="Where I've worked"
          aside={
            <div className="flex items-center gap-3">
              <span
                className="font-mono text-[13px] text-muted"
                aria-live="polite"
              >
                {pad(index + 1)} / {pad(roles.length)}
              </span>
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label="Previous role"
                className={arrowButton}
              >
                <ArrowLeft className="size-[18px]" />
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label="Next role"
                className={arrowButton}
              >
                <ArrowRight className="size-[18px]" />
              </button>
            </div>
          }
        />
      </div>

      <div
        className="relative h-[700px] touch-pan-y overflow-hidden transition-[height] duration-[600ms] ease-out-expo sm:h-[520px] md:h-[470px]"
        style={{ height: stageHeight }}
        onPointerDown={(e) => (pointerStart.current = e.clientX)}
        onPointerUp={onPointerUp}
      >
        {roles.map((role, i) => {
          const offset = i - index;
          const distance = Math.abs(offset);
          return (
            <article
              key={role.company}
              ref={(el) => {
                slides.current[i] = el;
              }}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${roles.length}: ${role.company}`}
              inert={distance !== 0}
              className="absolute top-2.5 left-1/2 ml-[calc(min(680px,88%)/-2)] w-[min(680px,88%)] rounded-3xl border border-line-3 bg-[linear-gradient(180deg,#161922_0%,#101219_100%)] p-[22px] transition-[translate,scale,opacity] duration-[600ms] ease-out-expo select-none md:p-8"
              style={{
                translate: `${offset * 106}% 0`,
                scale: distance ? 0.88 : 1,
                opacity: slideOpacity[distance] ?? 0,
                zIndex: 10 - distance,
              }}
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="flex size-[52px] flex-none items-center justify-center rounded-[14px] border border-line-3 bg-bg font-mono text-sm text-accent">
                  {role.mark}
                </span>
                <div>
                  <h3 className="text-xl font-semibold md:text-[22px]">
                    {role.company}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{role.title}</p>
                </div>
                <p className="w-full font-mono text-xs text-muted md:ml-auto md:w-auto md:text-right">
                  {role.period}
                </p>
              </div>
              <ul className="mt-6 flex list-disc flex-col gap-2.5 pl-[18px] text-[15px] leading-relaxed text-fg-2">
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Chips items={role.stack} className="mt-6 text-xs" />
            </article>
          );
        })}
      </div>

      <div className="mx-auto mt-2 grid max-w-[1200px] grid-cols-2 gap-2 px-4 md:grid-cols-4 md:px-8">
        {roles.map((role, i) => (
          <button
            key={role.company}
            type="button"
            onClick={() => go(i)}
            aria-current={i === index}
            className={cn(
              "min-h-11 border-t-2 px-1 pt-3.5 text-left transition-colors duration-300",
              i === index
                ? "border-accent"
                : "border-line-2 hover:border-line-3",
            )}
          >
            <span className="block font-mono text-[11px] text-dim">
              {role.period}
            </span>
            <span className="mt-1 block text-sm font-medium">
              {role.company}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
