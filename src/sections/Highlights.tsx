import { highlights, stack } from "@/content/site";
import { cn } from "@/lib/utils";

export function Highlights() {
  return (
    <section
      aria-label="Highlights"
      className="mx-auto max-w-[1200px] px-4 pb-[72px] md:px-8 md:pb-24"
    >
      <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-surface-2 md:grid-cols-4">
        {highlights.map((h, i) => (
          <div
            key={h.label}
            className={cn(
              "flex flex-col-reverse border-line p-5 md:p-7",
              i % 2 === 0 && "border-r",
              i < 2 && "border-b md:border-b-0",
              i === 1 && "md:border-r",
            )}
          >
            <dt className="mt-1.5 text-[13px] text-muted md:text-sm">
              {h.label}
            </dt>
            <dd className="text-[30px] font-semibold tracking-[-0.03em] md:text-[40px]">
              {h.value}
            </dd>
          </div>
        ))}
      </dl>
      <div
        className="mt-8 grid gap-x-8 gap-y-6 px-1 sm:grid-cols-2 lg:grid-cols-5"
        aria-label="Tech stack"
      >
        {stack.map((group) => (
          <div key={group.area}>
            <h3 className="font-mono text-[11px] tracking-[0.08em] text-accent uppercase">
              {group.area}
            </h3>
            <ul className="mt-3 space-y-1.5 font-mono text-xs text-fg-2">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
