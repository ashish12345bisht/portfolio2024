import type { Ownership } from "@/content/types";

export function OwnershipBar({ mine, total }: Ownership) {
  const percent = Math.round((mine / total) * 100);
  // Show "73 / 76" for small repos, "530 commits" when the total is large.
  const count = total < 100 ? `${mine} / ${total}` : `${mine} commits`;

  return (
    <div className="mt-auto flex items-center gap-2.5 font-mono text-[11px] text-dim">
      <span>{count}</span>
      <span
        className="h-1 flex-1 overflow-hidden rounded-full bg-line-2"
        role="meter"
        aria-label="Share of the repository's commits written by me"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <span
          className="block h-full rounded-full bg-accent"
          style={{ width: `${percent}%` }}
        />
      </span>
      <span className="font-medium text-fg">{percent}%</span>
    </div>
  );
}
