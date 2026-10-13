"use client";

import React, { useMemo } from "react";
import { createWhatsAppUrl } from "@/lib/constants";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
  // 1. Precompute halftone dome dots for the 3D globe arch
  const domeDots = useMemo(() => {
    const cx = 600;
    const cy = 460;
    const rx = 520;
    const ry = 300;
    const spacingX = 18;
    const spacingY = 15;

    const dots: Array<{ x: number; y: number; r: number; op: number }> = [];
    for (let y = cy - ry; y <= cy; y += spacingY) {
      const normY = (cy - y) / ry;
      const wAtY = rx * Math.sqrt(Math.max(0, 1 - normY * normY));
      const startX = cx - Math.floor(wAtY / spacingX) * spacingX;
      const endX = cx + Math.floor(wAtY / spacingX) * spacingX;

      for (let x = startX; x <= endX; x += spacingX) {
        const normX = (x - cx) / rx;
        const distSq = normX * normX + normY * normY;
        if (distSq > 0.98) continue;
        const z = Math.sqrt(Math.max(0, 1 - distSq));
        // Dots are larger and denser near the top apex of the curve
        const r = +(1.2 + 2.8 * z * (0.25 + 0.75 * normY)).toFixed(2);
        const op = +(0.15 + 0.65 * z * (0.3 + 0.7 * normY)).toFixed(2);
        dots.push({ x, y, r, op });
      }
    }
    return dots;
  }, []);

  // 2. Precompute upper-right dot matrix
  const matrixDots = useMemo(() => {
    const dots: Array<{ x: number; y: number; op: number }> = [];
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 14; col++) {
        const x = col * 16;
        const y = row * 16;
        const op = +((col / 13) * (1 - row / 11) * 0.45).toFixed(2);
        if (op > 0.05) dots.push({ x, y, op });
      }
    }
    return dots;
  }, []);

  return (
    <section
      id="hero"
      className="relative pt-32 pb-14 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-24 overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(180deg, #070628 0%, #0C093A 6%, #100D42 12%, #1B186B 22%, #2F2BB2 36%, #5B5CFB 52%, #9698FD 68%, #CCCDFF 82%, #E9E9FF 92%, #FFFFFF 100%)",
      }}
    >
      {/* 1. Subtle Thin-Line Technical Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)",
          backgroundSize: "112px 112px",
          maskImage:
            "radial-gradient(ellipse 80% 65% at 50% 35%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 65% at 50% 35%, black 40%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* 2. Top-Right Dot Matrix Texture */}
      <div
        className="absolute top-20 right-6 sm:right-16 lg:right-28 pointer-events-none hidden sm:block"
        aria-hidden="true"
      >
        <svg width="224" height="144" viewBox="0 0 224 144" fill="none">
          {matrixDots.map((d, i) => (
            <circle
              key={i}
              cx={d.x + 8}
              cy={d.y + 8}
              r="1.8"
              fill="white"
              fillOpacity={d.op}
            />
          ))}
        </svg>
      </div>

      {/* 3. Ambient Center Radial Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] sm:w-[920px] h-[480px] bg-[radial-gradient(ellipse_at_center,rgba(91,92,251,0.28),transparent_70%)] pointer-events-none blur-3xl"
        aria-hidden="true"
      />

      {/* Hero Content Area */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
        
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-bold tracking-tight text-white leading-[1.14] mb-6 sm:mb-8 font-[var(--font-display)] max-w-5xl mx-auto">
          Platform rekayasa sistem bisnis teruji, aplikasi kustom dan mentoring IT mandiri.
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg lg:text-xl text-white/80 font-normal leading-relaxed max-w-3xl mx-auto mb-10 sm:mb-12">
          Solusi website profil dan aplikasi kasir operasional tanpa biaya langganan bulanan untuk UMKM, serta bimbingan 1-on-1 bagi mahasiswa IT untuk menuntaskan logika kode tanpa jalan pintas joki.
        </p>

        {/* Action Buttons (Centered Pill Pair) */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10 sm:mb-14 z-20 relative">
          <a
            href={createWhatsAppUrl(
              "Halo Nakami Studio, saya ingin konsultasi kebutuhan sistem bisnis / mentoring IT..."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-[#100D42] hover:bg-slate-50 font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Mulai Konsultasi WhatsApp
          </a>

          <a
            href="#pilih-jalur"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-medium text-sm sm:text-base backdrop-blur-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Lihat Jalur Layanan</span>
            <ChevronRight className="w-4 h-4 text-white/80" />
          </a>
        </div>

        {/* Halftone Dome / Globe Anchor Graphic */}
        <div className="relative w-full max-w-5xl mx-auto -mt-4 sm:-mt-8 mb-6 sm:mb-10 pointer-events-none select-none">
          <svg
            viewBox="0 0 1200 460"
            className="w-full h-auto max-h-[340px] overflow-visible"
            fill="none"
            aria-hidden="true"
          >
            {domeDots.map((dot, idx) => (
              <circle
                key={idx}
                cx={dot.x}
                cy={dot.y}
                r={dot.r}
                fill="white"
                fillOpacity={dot.op}
              />
            ))}
          </svg>
        </div>

        {/* Trust Bar & Client / Technology Logos (Bottom Section on Pure White Transition) */}
        <div className="w-full pt-8 sm:pt-12 mt-2 sm:mt-4">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-slate-700 uppercase mb-8 sm:mb-10 text-center">
            Dipercaya oleh pemilik bisnis, UMKM modern, dan ratusan talenta IT di seluruh Indonesia
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 text-slate-900 opacity-90">
            {/* 1. SCANIA style: KASIR KILAT */}
            <div className="flex items-center gap-2 hover:opacity-100 transition-opacity">
              <svg className="w-5 h-5 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 4h3l2.5 11h9.5l2-8H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <circle cx="10" cy="19" r="2" />
                <circle cx="17" cy="19" r="2" />
              </svg>
              <span className="font-extrabold tracking-widest text-slate-950 text-base sm:text-lg">
                KASIR KILAT
              </span>
            </div>

            {/* 2. HubSpot style: NEXT.JS */}
            <div className="flex items-center gap-2 hover:opacity-100 transition-opacity">
              <svg className="w-5 h-5 text-slate-900" viewBox="0 0 180 180" fill="none">
                <circle cx="90" cy="90" r="88" stroke="currentColor" strokeWidth="12" />
                <path d="M149.5 157.4L69.1 54H54V126H66.1V69.4L140 164.8C143.3 162.6 146.5 160.1 149.5 157.4Z" fill="currentColor" />
                <rect x="115" y="54" width="12" height="72" fill="currentColor" />
              </svg>
              <span className="font-bold tracking-tight text-slate-900 text-base sm:text-lg">
                Next.js
              </span>
            </div>

            {/* 3. Milliman style: POSTGRESQL */}
            <div className="flex items-center gap-2 hover:opacity-100 transition-opacity">
              <div className="w-6 h-6 rounded bg-slate-900 flex items-center justify-center text-white font-mono font-bold text-xs">
                PG
              </div>
              <span className="font-semibold tracking-wide text-slate-900 text-base sm:text-lg">
                PostgreSQL
              </span>
            </div>

            {/* 4. WHITE & CASE style: DOCKER */}
            <div className="flex items-center gap-2 hover:opacity-100 transition-opacity">
              <svg className="w-6 h-5 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 8h2v2h-2V8zm-3 0h2v2h-2V8zm-3 0h2v2H7V8zm6-3h2v2h-2V5zm-3 0h2v2h-2V5zm-3 0h2v2H7V5zm14.5 7.5c-.4-.3-1.3-.4-2-.1-.2-.8-.7-1.4-1.5-1.9l-.6-.3-.3.6c-.4.8-.4 1.7-.1 2.5-.5.3-1.3.3-1.8.3H3c-.5 0-1 .4-1 .9 0 2.4 1.2 4.6 3.2 5.9 2 1.3 4.5 1.6 6.8 1.6 5.5 0 10-3.5 10.5-8.9.6-.2 1.3-.4 2-.6v-.9z" />
              </svg>
              <span className="font-bold tracking-widest text-slate-900 text-sm sm:text-base">
                DOCKER
              </span>
            </div>

            {/* 5. Debevoise & Plimpton style: TYPESCRIPT */}
            <div className="flex items-center gap-2 hover:opacity-100 transition-opacity">
              <div className="w-6 h-6 rounded bg-slate-900 text-white flex items-center justify-center font-bold text-xs font-mono">
                TS
              </div>
              <span className="font-bold tracking-tight text-slate-900 text-base sm:text-lg">
                TypeScript
              </span>
            </div>

            {/* 6. CLYDE & CO style: TAILWIND */}
            <div className="flex items-center gap-2 hover:opacity-100 transition-opacity">
              <svg className="w-5 h-5 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.33-1.83 4-1.5.95.19 1.63.88 2.38 1.65C14.61 11.38 16.19 13 20 13c2.67 0 4.33-1.33 5-4-1 1.33-2.33 1.83-4 1.5-.95-.19-1.63-.88-2.38-1.65C17.39 7.62 15.81 6 12 6zm-8 7c-2.67 0-4.33 1.33-5 4 1-1.33 2.33-1.83 4-1.5.95.19 1.63.88 2.38 1.65C6.61 18.38 8.19 20 12 20c2.67 0 4.33-1.33 5-4-1 1.33-2.33 1.83-4 1.5-.95-.19-1.63-.88-2.38-1.65C9.39 14.62 7.81 13 4 13z" />
              </svg>
              <span className="font-semibold tracking-wide text-slate-900 text-base sm:text-lg">
                Tailwind CSS
              </span>
            </div>

            {/* 7. AstraZeneca style: KAFE & CO */}
            <div className="flex items-center gap-2 hover:opacity-100 transition-opacity">
              <svg className="w-5 h-5 text-slate-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" />
              </svg>
              <span className="font-bold tracking-wider text-slate-900 text-base sm:text-lg">
                KAFE &amp; CO
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
