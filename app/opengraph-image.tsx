import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Nakami Studio — Jasa pembuatan aplikasi bisnis";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/brand/nakami-monogram-512.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#111214",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(251,108,0,0.45), transparent 45%), radial-gradient(circle at 70% 90%, rgba(231,63,30,0.3), transparent 40%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={64} height={64} alt="" />
          <span style={{ fontSize: 30, fontWeight: 700, letterSpacing: -1 }}>Nakami Studio</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.02, letterSpacing: -3, maxWidth: 900 }}>
            Aplikasi bisnis yang dirancang mengikuti cara Anda bekerja.
          </div>
          <div style={{ marginTop: 28, fontSize: 26, color: "rgba(255,255,255,0.6)" }}>
            Kasir & inventori · Reservasi online · Aplikasi mobile · Aplikasi operasional
          </div>
        </div>
      </div>
    ),
    size,
  );
}
