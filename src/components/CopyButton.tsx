"use client";

import { useEffect, useState } from "react";

type Status = "idle" | "copied" | "failed";

export function CopyButton({
  text,
  label = "Copy",
  className,
}: {
  text: string;
  label?: string;
  className?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (status === "idle") return;
    const timer = setTimeout(() => setStatus("idle"), 1600);
    return () => clearTimeout(timer);
  }, [status]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  };

  const shown = { idle: label, copied: "Copied ✓", failed: "Copy failed" }[
    status
  ];

  return (
    <button
      type="button"
      onClick={copy}
      className={className}
      aria-live="polite"
    >
      {shown}
    </button>
  );
}
