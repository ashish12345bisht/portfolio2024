/** Static globe drawing: shown while the 3D globe loads, and as its no-WebGL fallback. */
export function SvgGlobe() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="absolute inset-0 size-full"
      fill="none"
      aria-hidden
    >
      <circle cx="200" cy="200" r="170" stroke="var(--color-line-3)" />
      <g className="origin-center animate-spin-slow">
        <ellipse
          cx="200"
          cy="200"
          rx="170"
          ry="60"
          stroke="var(--color-line-2)"
        />
        <ellipse
          cx="200"
          cy="200"
          rx="170"
          ry="120"
          stroke="var(--color-line)"
        />
        <ellipse
          cx="200"
          cy="200"
          rx="60"
          ry="170"
          stroke="var(--color-line-2)"
        />
        <ellipse
          cx="200"
          cy="200"
          rx="120"
          ry="170"
          stroke="var(--color-line)"
        />
      </g>
      <path
        d="M95 120 Q 200 40 300 135"
        stroke="var(--color-accent)"
        strokeOpacity=".7"
        strokeDasharray="3 5"
      />
      <path
        d="M300 135 Q 330 240 250 300"
        stroke="var(--color-accent)"
        strokeOpacity=".5"
        strokeDasharray="3 5"
      />
      <path
        d="M95 120 Q 90 240 160 290"
        stroke="var(--color-accent)"
        strokeOpacity=".4"
        strokeDasharray="3 5"
      />
      <circle cx="95" cy="120" r="6" fill="var(--color-accent)" />
      <circle
        cx="95"
        cy="120"
        r="16"
        stroke="var(--color-accent)"
        strokeOpacity=".35"
      />
      <circle cx="300" cy="135" r="5" fill="var(--color-fg)" />
      <circle cx="250" cy="300" r="5" fill="var(--color-accent)" />
      <circle cx="160" cy="290" r="4" fill="var(--color-fg)" />
    </svg>
  );
}
