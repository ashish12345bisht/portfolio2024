import { Image as ImageIcon, Pin, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { text: "docker compose up -d --build", pinned: true },
  { text: "https://github.com/ashish12345bisht/copyshelf", active: true },
  { text: "screenshot-2026-10-24.png", image: true },
  { text: "SELECT site_id, status FROM alarms WHERE …" },
];

/** Static drawing of the Copyshelf popup, for the project card. */
export function CopyshelfMock() {
  return (
    <div
      aria-hidden
      className="relative flex h-full min-h-[220px] items-center justify-center overflow-hidden bg-[radial-gradient(80%_120%_at_50%_0%,#141831_0%,var(--color-bg)_70%)] p-6"
    >
      <div className="w-full max-w-[360px] rounded-xl border border-line-3 bg-surface shadow-2xl">
        <div className="flex items-center gap-2 border-b border-line-2 px-3 py-2.5 text-xs text-dim">
          <Search className="size-3.5" />
          Search clipboard…
          <span className="ml-auto rounded border border-line-3 px-1.5 py-0.5 font-mono text-[10px]">
            Super + V
          </span>
        </div>
        <ul className="p-1.5">
          {items.map((item) => (
            <li
              key={item.text}
              className={cn(
                "flex items-center gap-2 rounded-md px-2.5 py-2 font-mono text-[11px]",
                item.active ? "bg-accent/15 text-fg" : "text-fg-2",
              )}
            >
              {item.image && (
                <ImageIcon className="size-3.5 flex-none text-dim" />
              )}
              <span className="truncate">{item.text}</span>
              {item.pinned && (
                <Pin className="ml-auto size-3 flex-none text-accent" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
