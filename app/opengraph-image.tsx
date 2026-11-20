import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.role} at ${site.company}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social card. Deliberately typographic — the same cobalt as the site's accent.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#3061d8",
          color: "#ffffff",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, opacity: 0.8 }}>
          {site.location.toUpperCase()} · {site.company.toUpperCase()}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 108, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 46, fontStyle: "italic", marginTop: 24, opacity: 0.92 }}>
            Architecting immutable systems. Probably nothing.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: 3,
            opacity: 0.8,
          }}
        >
          <div>{site.role.toUpperCase()}</div>
          <div>SILASALDERWOOD.COM</div>
        </div>
      </div>
    ),
    size
  );
}
