import { ImageResponse } from "next/og";
import { highlights, site } from "@/content/site";

export const alt = `${site.name}, full‑stack engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background:
          "radial-gradient(120% 140% at 100% 0%, #161b2e 0%, #0a0b10 60%)",
        color: "#eceef3",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 28 }}
      >
        <div
          style={{
            display: "flex",
            width: 64,
            height: 64,
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #2a2e39",
            borderRadius: 14,
            color: "#7c93ff",
          }}
        >
          {site.initials}
        </div>
        {site.name}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 68,
          fontWeight: 600,
          letterSpacing: -2,
          lineHeight: 1.05,
        }}
      >
        {site.headline}
      </div>
      <div style={{ display: "flex", gap: 48, fontSize: 24, color: "#9aa0ae" }}>
        {highlights.slice(0, 3).map((h) => (
          <div
            key={h.label}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <span style={{ fontSize: 40, color: "#eceef3", fontWeight: 600 }}>
              {h.value}
            </span>
            {h.label}
          </div>
        ))}
      </div>
    </div>,
    size,
  );
}
