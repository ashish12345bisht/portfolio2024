import type { MDXComponents } from "mdx/types";

// Styles for blog posts written in MDX.
const components: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-12 mb-4 text-2xl font-semibold tracking-[-0.02em] text-fg"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="mt-8 mb-3 text-lg font-semibold text-fg" {...props} />
  ),
  p: (props) => <p className="my-5 leading-[1.75] text-fg-2" {...props} />,
  a: (props) => (
    <a
      className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="my-5 list-disc space-y-2 pl-6 text-fg-2 marker:text-dim"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="my-5 list-decimal space-y-2 pl-6 text-fg-2 marker:text-dim"
      {...props}
    />
  ),
  li: (props) => <li className="leading-[1.7]" {...props} />,
  strong: (props) => <strong className="font-semibold text-fg" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-2 border-accent pl-5 text-muted italic"
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-line-2" />,
  pre: (props) => (
    <pre
      className="my-6 overflow-x-auto rounded-xl border border-line-2 bg-surface-2 p-5 font-mono text-[13px] leading-relaxed text-fg-2"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded bg-line-2 px-1.5 py-0.5 font-mono text-[0.85em] text-fg [pre_&]:bg-transparent [pre_&]:p-0"
      {...props}
    />
  ),
  table: (props) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  th: (props) => (
    <th
      className="border-b border-line-3 px-3 py-2 text-left font-semibold text-fg"
      {...props}
    />
  ),
  td: (props) => (
    <td className="border-b border-line px-3 py-2 text-fg-2" {...props} />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
