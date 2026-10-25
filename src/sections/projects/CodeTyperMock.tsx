import { cn } from "@/lib/utils";

const languages = ["C++17", "Java", "Python", "JavaScript"];

// The first `typed` characters render as typed; one is a mistake.
const lines = [
  "def twoSum(nums, target):",
  "    seen = {}",
  "    for i, n in enumerate(nums):",
  "        if target - n in seen:",
  "            return [seen[target - n], i]",
];
const starts = lines.map((_, n) =>
  lines.slice(0, n).reduce((sum, l) => sum + l.length + 1, 0),
);
const typed = 58;
const mistake = 54;

/** Static drawing of the Code Typer editor mid-solution, for the project card. */
export function CodeTyperMock() {
  return (
    <div
      aria-hidden
      className="relative flex h-full min-h-[220px] items-center justify-center overflow-hidden bg-[radial-gradient(80%_120%_at_50%_0%,#141831_0%,var(--color-bg)_70%)] p-6"
    >
      <div className="w-full max-w-[360px] rounded-xl border border-line-3 bg-surface shadow-2xl">
        <div className="flex border-b border-line-2 font-mono text-[10px] text-dim">
          {languages.map((l) => (
            <span
              key={l}
              className={cn(
                "flex-1 border-r border-line-2 py-2 text-center last:border-r-0",
                l === "Python" && "bg-accent/15 text-fg",
              )}
            >
              {l}
            </span>
          ))}
        </div>
        <pre className="overflow-hidden p-3 font-mono text-[11px] leading-[1.7]">
          {lines.map((line, n) => {
            const start = starts[n];
            return (
              <div key={line} className="whitespace-pre">
                {[...line].map((ch, j) => {
                  const i = start + j;
                  return (
                    <span
                      key={j}
                      className={cn(
                        i === mistake &&
                          "rounded-sm bg-red-500/25 text-red-300",
                        i < typed && i !== mistake && "text-fg",
                        i === typed && "border-l-2 border-accent",
                        i > typed && "text-dim/60",
                      )}
                    >
                      {ch}
                    </span>
                  );
                })}
              </div>
            );
          })}
        </pre>
        <div className="flex gap-4 border-t border-line-2 px-3 py-2 font-mono text-[10px] text-dim">
          <span>
            <span className="text-fg">64</span> WPM
          </span>
          <span>
            <span className="text-fg">98%</span> accuracy
          </span>
          <span className="ml-auto">solution.py</span>
        </div>
      </div>
    </div>
  );
}
