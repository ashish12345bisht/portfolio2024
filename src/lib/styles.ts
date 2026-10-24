import { cn } from "./utils";

const variants = {
  default: "border-line-3 bg-surface text-fg hover:border-[#3a3f4d]",
  ghost: "border-line-3 bg-transparent text-fg hover:border-[#3a3f4d]",
  accent: "border-accent bg-accent font-semibold text-bg hover:brightness-110",
  light: "border-fg bg-fg font-semibold text-bg hover:bg-white",
};

const sizes = {
  md: "h-11 rounded-[10px] px-[18px] text-sm",
  lg: "h-12 rounded-xl px-[22px] text-[15px]",
};

export function button({
  variant = "default",
  size = "md",
  className,
}: {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
} = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 border font-medium transition-[background-color,border-color,filter] duration-200",
    variants[variant],
    sizes[size],
    className,
  );
}
