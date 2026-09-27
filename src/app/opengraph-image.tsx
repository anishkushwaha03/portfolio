import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The card shown when the site is shared on social or in chat.
 * Colours mirror the dark theme tokens in globals.css.
 */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#070c17",
          backgroundImage:
            "radial-gradient(900px 420px at 12% 8%, rgba(99,102,241,0.30), transparent 60%), radial-gradient(760px 420px at 92% 96%, rgba(6,182,212,0.24), transparent 60%)",
          padding: "84px 88px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 68,
              height: 68,
              borderRadius: 18,
              background: "linear-gradient(105deg, #818cf8, #22d3ee)",
              color: "#0b1220",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            {profile.initials}
          </div>
          <div style={{ display: "flex", color: "#94a6c0", fontSize: 28 }}>
            {profile.location}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 52,
            fontSize: 92,
            fontWeight: 700,
            letterSpacing: "-0.035em",
            color: "#e8eef9",
          }}
        >
          {profile.name}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 14,
            fontSize: 44,
            fontWeight: 600,
            color: "#818cf8",
          }}
        >
          {profile.role}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 40,
            paddingTop: 32,
            borderTop: "1px solid #1f2b45",
            fontSize: 30,
            color: "#94a6c0",
          }}
        >
          {profile.stack}
        </div>
      </div>
    ),
    size
  );
}
