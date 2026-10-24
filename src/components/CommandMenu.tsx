"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowUpRight,
  CornerDownLeft,
  FileText,
  Hash,
  Mail,
  Search,
} from "lucide-react";
import { navItems, site, socials } from "@/content/site";
import { cn } from "@/lib/utils";

interface Command {
  label: string;
  group: string;
  icon: React.ComponentType<{ className?: string }>;
  run: () => void;
}

function openUrl(href: string) {
  window.open(href, "_blank", "noopener,noreferrer");
}

export function CommandMenu({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const router = useRouter();

  const commands = useMemo<Command[]>(
    () => [
      ...navItems.map((item) => ({
        label: item.label,
        group: "Go to",
        icon: Hash,
        run: () => router.push(item.href),
      })),
      {
        label: "Open resume",
        group: "Actions",
        icon: FileText,
        run: () => openUrl(site.resume),
      },
      {
        label: "Copy email address",
        group: "Actions",
        icon: Mail,
        run: () => void navigator.clipboard?.writeText(site.email),
      },
      ...socials.map((s) => ({
        label: s.label,
        group: "Links",
        icon: ArrowUpRight,
        run: () => openUrl(s.href),
      })),
    ],
    [router],
  );

  const results = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase()),
  );

  // Global ⌘K / Ctrl+K shortcut.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  // Keep the native <dialog> in sync with the `open` prop.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const close = () => {
    onOpenChange(false);
    setQuery("");
    setActive(0);
  };

  const runAt = (index: number) => {
    const command = results[index];
    if (!command) return;
    close();
    command.run();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      runAt(active);
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={close}
      onClick={(e) => e.target === dialogRef.current && close()}
      aria-label="Command menu"
      className="m-auto mt-[15vh] w-[min(560px,calc(100%-32px))] overflow-hidden rounded-2xl border border-line-3 bg-surface p-0 text-fg shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm"
    >
      <div className="flex items-center gap-3 border-b border-line-2 px-4">
        <Search className="size-4 text-dim" aria-hidden />
        <input
          autoFocus
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(0);
          }}
          onKeyDown={onKeyDown}
          placeholder="Type a command or search…"
          aria-label="Search commands"
          className="h-14 flex-1 bg-transparent text-[15px] outline-none placeholder:text-dim"
        />
        <kbd className="rounded border border-line-3 px-1.5 py-0.5 font-mono text-[10px] text-dim">
          ESC
        </kbd>
      </div>
      <ul
        className="max-h-80 overflow-y-auto p-2"
        role="listbox"
        aria-label="Commands"
      >
        {results.length === 0 && (
          <li className="px-3 py-6 text-center text-sm text-dim">No results</li>
        )}
        {results.map((command, i) => (
          <li key={command.label} role="option" aria-selected={i === active}>
            <button
              type="button"
              onClick={() => runAt(i)}
              onMouseMove={() => setActive(i)}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm",
                i === active ? "bg-line-2 text-fg" : "text-fg-2",
              )}
            >
              <command.icon className="size-4 text-dim" />
              <span className="flex-1">{command.label}</span>
              <span className="font-mono text-[10px] text-dim">
                {command.group}
              </span>
              {i === active && (
                <CornerDownLeft className="size-3.5 text-dim" aria-hidden />
              )}
            </button>
          </li>
        ))}
      </ul>
    </dialog>
  );
}
