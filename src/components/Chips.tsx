import { cn } from "@/lib/utils";

export function Chips({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "flex flex-wrap gap-1.5 font-mono text-[11px] text-muted",
        className,
      )}
    >
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-line-3 px-2 py-0.5"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
