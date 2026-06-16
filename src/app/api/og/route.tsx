import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#09090b",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Glow accent */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "60px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Available badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(34,197,94,0.1)",
            border: "1px solid rgba(34,197,94,0.25)",
            borderRadius: "999px",
            padding: "6px 14px",
            width: "fit-content",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#22c55e",
            }}
          />
          <span style={{ color: "#4ade80", fontSize: "16px", fontWeight: 600 }}>
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "#fafafa",
            lineHeight: 1.1,
            marginBottom: "20px",
            letterSpacing: "-2px",
          }}
        >
          Rohan Singla
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "28px",
            color: "#a1a1aa",
            fontWeight: 500,
            marginBottom: "48px",
          }}
        >
          Full Stack · Rust · Backend/Infra · Solana Engineer
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: "48px" }}>
          {[
            { value: "2+", label: "Years Building" },
            { value: "10+", label: "Hackathons" },
            { value: "2", label: "Prizes Won" },
          ].map((stat) => (
            <div key={stat.label} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "36px", fontWeight: 700, color: "#a78bfa" }}>
                {stat.value}
              </span>
              <span style={{ fontSize: "16px", color: "#71717a" }}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "80px",
            fontSize: "18px",
            color: "#52525b",
            fontWeight: 500,
          }}
        >
          rohanbuilds.xyz
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
