/** Abstract dashboard illustration for the flagship card; no real client data. */
export function DashboardArt() {
  return (
    <svg
      viewBox="0 0 640 260"
      className="h-full w-full"
      fill="none"
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="dash-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--color-accent)" stopOpacity=".35" />
          <stop offset="1" stopColor="var(--color-accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="640" height="260" fill="var(--color-bg)" />
      <rect x="0" y="0" width="640" height="34" fill="var(--color-surface-2)" />
      <circle cx="20" cy="17" r="4" fill="var(--color-line-3)" />
      <circle cx="34" cy="17" r="4" fill="var(--color-line-3)" />
      <circle cx="48" cy="17" r="4" fill="var(--color-line-3)" />
      <rect
        x="80"
        y="12"
        width="120"
        height="10"
        rx="5"
        fill="var(--color-line-2)"
      />

      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${20 + i * 104} 52)`}>
          <rect
            width="92"
            height="56"
            rx="8"
            fill="var(--color-surface)"
            stroke="var(--color-line-2)"
          />
          <rect
            x="12"
            y="12"
            width="40"
            height="6"
            rx="3"
            fill="var(--color-line-3)"
          />
          <rect
            x="12"
            y="28"
            width={[54, 38, 46][i]}
            height="14"
            rx="4"
            fill={i === 0 ? "var(--color-accent)" : "var(--color-fg-2)"}
            opacity=".85"
          />
        </g>
      ))}

      <g transform="translate(20 124)">
        <rect
          width="300"
          height="120"
          rx="8"
          fill="var(--color-surface)"
          stroke="var(--color-line-2)"
        />
        {[30, 60, 90].map((y) => (
          <line
            key={y}
            x1="12"
            x2="288"
            y1={y}
            y2={y}
            stroke="var(--color-line)"
          />
        ))}
        <path
          d="M12 92 C 50 80 70 40 110 52 S 170 96 210 60 S 262 30 288 38 L 288 108 L 12 108 Z"
          fill="url(#dash-fill)"
        />
        <path
          d="M12 92 C 50 80 70 40 110 52 S 170 96 210 60 S 262 30 288 38"
          stroke="var(--color-accent)"
          strokeWidth="2"
        />
        <path
          d="M12 100 C 60 96 90 70 140 78 S 220 92 288 70"
          stroke="var(--color-fg-2)"
          strokeOpacity=".4"
          strokeDasharray="4 4"
        />
      </g>

      <g transform="translate(340 52)">
        <rect
          width="280"
          height="192"
          rx="8"
          fill="var(--color-surface)"
          stroke="var(--color-line-2)"
        />
        <path
          d="M60 130 A 80 80 0 0 1 220 130"
          stroke="var(--color-line-2)"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          d="M60 130 A 80 80 0 0 1 188 72"
          stroke="var(--color-accent)"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <rect
          x="112"
          y="108"
          width="56"
          height="16"
          rx="4"
          fill="var(--color-fg-2)"
          opacity=".85"
        />
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x={30 + i * 58}
            y="156"
            width="46"
            height="14"
            rx="4"
            fill={i === 1 ? "var(--color-accent)" : "var(--color-line-3)"}
            opacity={i === 1 ? 0.8 : 1}
          />
        ))}
      </g>
    </svg>
  );
}
