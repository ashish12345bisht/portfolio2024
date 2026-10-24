"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navItems, site } from "@/content/site";
import { button } from "@/lib/styles";
import { CommandMenu } from "./CommandMenu";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-4 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 text-[15px] font-semibold"
        >
          <span className="inline-flex size-9 items-center justify-center rounded-lg border border-line-3 font-mono text-[13px] font-normal text-accent">
            {site.initials}
          </span>
          {site.name}
        </Link>

        <nav aria-label="Primary" className="hidden gap-7 text-sm md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted transition-colors hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => setCommandOpen(true)}
            aria-label="⌘ K command menu"
            className={button({
              className: "hidden font-mono text-xs text-muted sm:inline-flex",
            })}
          >
            ⌘ K
          </button>
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className={button({ variant: "accent" })}
          >
            Resume
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={button({ className: "w-11 px-0 md:hidden" })}
          >
            {menuOpen ? (
              <X className="size-[18px]" />
            ) : (
              <Menu className="size-[18px]" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-line px-4 pb-4 md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex h-12 items-center border-b border-line text-[15px] text-fg-2"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}

      <CommandMenu open={commandOpen} onOpenChange={setCommandOpen} />
    </header>
  );
}
