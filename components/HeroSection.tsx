"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { createWhatsAppUrl } from "@/lib/constants";
import {
  MessageCircle,
  ArrowDown,
  Sparkles,
  Coffee,
  ShieldCheck,
  Zap,
} from "lucide-react";

export function HeroSection() {
  // Precompute halftone dome dots for the 3D globe arch (with warm/amber tint)
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

  // Precompute upper-right dot matrix
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
      className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28 overflow-hidden text-white bg-[#121316] border-b border-[#2E323B]/80"
    >
      {/* 1. Subtle Thin-Line Technical Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(251, 108, 0, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(251, 108, 0, 0.08) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
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
              fill="#F9B637"
              fillOpacity={d.op}
            />
          ))}
        </svg>
      </div>

      {/* 3. Ambient Center Warm Sunset Radial Glow (Docs Spec: rgba(251, 108, 0, 0.12) to rgba(231, 63, 30, 0.08)) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] sm:w-[980px] h-[520px] bg-[radial-gradient(ellipse_at_center,rgba(251,108,0,0.14)_0%,rgba(231,63,30,0.08)_40%,transparent_70%)] pointer-events-none blur-3xl"
        aria-hidden="true"
      />

      {/* Floating Playful Tech Badges (Desktop/Tablet) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none max-w-7xl mx-auto z-10" aria-hidden="true">
        {/* Badge A (Kiri Atas) */}
        <div className="absolute top-36 left-8 bg-[#1C1E24]/90 backdrop-blur-md border border-[#FB6C00]/40 text-white px-3.5 py-1.5 rounded-xl shadow-lg -rotate-3 text-xs font-mono flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#FB6C00]" />
          <span>100% Hand-Crafted Code</span>
        </div>

        {/* Badge B (Kanan Atas) */}
        <div className="absolute top-36 right-8 bg-[#1C1E24]/90 backdrop-blur-md border border-[#10B981]/40 text-[#10B981] px-3.5 py-1.5 rounded-xl shadow-lg rotate-3 text-xs font-mono flex items-center gap-2">
          <Coffee className="w-3.5 h-3.5 text-[#10B981]" />
          <span>Free 15-Min System Audit</span>
        </div>

        {/* Badge C (Kanan Bawah) */}
        <div className="absolute bottom-52 right-12 bg-[#1C1E24]/90 backdrop-blur-md border border-[#F9B637]/40 text-[#F9B637] px-3.5 py-1.5 rounded-xl shadow-lg -rotate-2 text-xs font-mono flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-[#F9B637]" />
          <span>Strict Zero-Joki Ethics</span>
        </div>

        {/* Badge D (Kiri Bawah) */}
        <div className="absolute bottom-52 left-12 bg-[#1C1E24]/90 backdrop-blur-md border border-[#2E323B] text-[#94A3B8] px-3.5 py-1.5 rounded-xl shadow-lg rotate-2 text-xs font-mono flex items-center gap-2">
          <Zap className="w-3.5 h-3.5 text-[#FB6C00]" />
          <span>Next.js 16 • Tailwind v4</span>
        </div>
      </div>

      {/* Hero Content Area */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
        
        {/* Category Pill Badge (Top) - Docs Spec: 5.2 */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1C1E24] border border-[#F9B637]/40 text-[#F9B637] text-xs font-mono tracking-wider uppercase mb-6 shadow-sm">
          <Image
            src="/brand/nakami-app-icon-192.png"
            alt="Nakami Studio Icon"
            width={18}
            height={18}
            className="w-4.5 h-4.5 rounded-md object-cover shadow-xs"
            priority
          />
          <span className="w-1.5 h-1.5 rounded-full bg-[#FB6C00] animate-pulse" />
          <span>NAKAMI STUDIO // PRODUCTION LAUNCH</span>
        </div>

        {/* Main Headline (H1) - Docs Spec: 5.2 */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-extrabold tracking-tight text-white leading-[1.12] mb-6 sm:mb-7 font-[var(--font-display)] max-w-5xl mx-auto">
          Bukan Sekadar Baris Kode.{" "}
          <span className="bg-gradient-to-r from-[#FFDD9C] via-[#FB6C00] to-[#E73F1E] bg-clip-text text-transparent">
            Kami Meracik Sistem
          </span>{" "}
          yang Benar-Benar Bekerja.
        </h1>

        {/* Subheadline - Docs Spec: 5.2 */}
        <p className="text-base sm:text-lg lg:text-xl text-[#94A3B8] font-normal leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10">
          Otomasi operasional praktis untuk bisnis Anda yang sedang bertumbuh, serta bimbingan 1-on-1 mendalam bagi mahasiswa IT tanpa jalan pintas joki.
        </p>

        {/* Floating Interactive Preview Pill (System Status) - Docs Spec: 5.2 */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1C1E24]/90 border border-[#10B981]/50 text-white text-xs font-mono shadow-lg mb-10 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
          </span>
          <span className="tracking-wide">SYSTEM STATUS: ALL SYSTEMS NOMINAL // 0 CRITICAL ERRORS</span>
        </div>

        {/* Dual CTA Buttons (Centered Pill Pair) - Docs Spec: 5.2 */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10 sm:mb-14 z-20 relative">
          <a
            href={createWhatsAppUrl(
              "Halo Nakami Studio, saya ingin konsultasi kebutuhan sistem bisnis / mentoring IT..."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 h-14 px-8 rounded-full bg-gradient-to-r from-[#FB6C00] to-[#E73F1E] text-[#121316] font-bold text-base hover:scale-[1.02] active:scale-[0.98] shadow-glow-warm transition-transform"
          >
            <MessageCircle className="w-5 h-5 text-[#121316]" />
            <span>Ngobrol Santai di WhatsApp →</span>
          </a>

          <a
            href="#pilih-jalur"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-[#1C1E24] hover:bg-[#242730] text-white border border-[#3F4450] font-semibold text-base transition-colors"
          >
            <span>Eksplorasi Solusi & Paket</span>
            <ArrowDown className="w-4 h-4 text-[#94A3B8]" />
          </a>
        </div>

        {/* Halftone Dome / Globe Anchor Graphic in Warm Sunset Theme */}
        <div className="relative w-full max-w-5xl mx-auto -mt-4 sm:-mt-6 mb-6 sm:mb-10 pointer-events-none select-none">
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
                fill={dot.r > 2.5 ? "#FB6C00" : "#FFFFFF"}
                fillOpacity={dot.op * 0.75}
              />
            ))}
          </svg>
        </div>

        {/* Trust Bar & Client / Technology Logos - Docs Spec: 5.2 (Dark Canvas Consistency) */}
        <div className="w-full pt-8 sm:pt-12 mt-2 sm:mt-4 border-t border-[#2E323B]/60">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#94A3B8] uppercase mb-8 sm:mb-10 text-center font-mono">
            Dipercaya oleh pemilik bisnis, UMKM modern, dan ratusan talenta IT di seluruh Indonesia
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 text-[#94A3B8]">
            {/* 1. KASIR KILAT */}
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <svg className="w-5 h-5 text-[#FB6C00]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 4h3l2.5 11h9.5l2-8H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <circle cx="10" cy="19" r="2" />
                <circle cx="17" cy="19" r="2" />
              </svg>
              <span className="font-extrabold tracking-widest text-white text-base sm:text-lg">
                KASIR KILAT
              </span>
            </div>

            {/* 2. NEXT.JS */}
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <svg className="w-5 h-5 text-white" viewBox="0 0 180 180" fill="none">
                <circle cx="90" cy="90" r="88" stroke="currentColor" strokeWidth="12" />
                <path d="M149.5 157.4L69.1 54H54V126H66.1V69.4L140 164.8C143.3 162.6 146.5 160.1 149.5 157.4Z" fill="currentColor" />
                <rect x="115" y="54" width="12" height="72" fill="currentColor" />
              </svg>
              <span className="font-bold tracking-tight text-white text-base sm:text-lg">
                Next.js
              </span>
            </div>

            {/* 3. POSTGRESQL */}
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <div className="w-6 h-6 rounded bg-[#242730] border border-[#2E323B] flex items-center justify-center text-[#FB6C00] font-mono font-bold text-xs">
                PG
              </div>
              <span className="font-semibold tracking-wide text-white text-base sm:text-lg">
                PostgreSQL
              </span>
            </div>

            {/* 4. DOCKER */}
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <svg className="w-6 h-5 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 8h2v2h-2V8zm-3 0h2v2h-2V8zm-3 0h2v2H7V8zm6-3h2v2h-2V5zm-3 0h2v2h-2V5zm-3 0h2v2H7V5zm14.5 7.5c-.4-.3-1.3-.4-2-.1-.2-.8-.7-1.4-1.5-1.9l-.6-.3-.3.6c-.4.8-.4 1.7-.1 2.5-.5.3-1.3.3-1.8.3H3c-.5 0-1 .4-1 .9 0 2.4 1.2 4.6 3.2 5.9 2 1.3 4.5 1.6 6.8 1.6 5.5 0 10-3.5 10.5-8.9.6-.2 1.3-.4 2-.6v-.9z" />
              </svg>
              <span className="font-bold tracking-widest text-white text-sm sm:text-base">
                DOCKER
              </span>
            </div>

            {/* 5. TYPESCRIPT */}
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <div className="w-6 h-6 rounded bg-[#3178C6] text-white flex items-center justify-center font-bold text-xs font-mono">
                TS
              </div>
              <span className="font-bold tracking-tight text-white text-base sm:text-lg">
                TypeScript
              </span>
            </div>

            {/* 6. TAILWIND */}
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <svg className="w-5 h-5 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.33-1.83 4-1.5.95.19 1.63.88 2.38 1.65C14.61 11.38 16.19 13 20 13c2.67 0 4.33-1.33 5-4-1 1.33-2.33 1.83-4 1.5-.95-.19-1.63-.88-2.38-1.65C17.39 7.62 15.81 6 12 6zm-8 7c-2.67 0-4.33 1.33-5 4 1-1.33 2.33-1.83 4-1.5.95.19 1.63.88 2.38 1.65C6.61 18.38 8.19 20 12 20c2.67 0 4.33-1.33 5-4-1 1.33-2.33 1.83-4 1.5-.95-.19-1.63-.88-2.38-1.65C9.39 14.62 7.81 13 4 13z" />
              </svg>
              <span className="font-semibold tracking-wide text-white text-base sm:text-lg">
                Tailwind CSS
              </span>
            </div>

            {/* 7. KAFE & CO */}
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <svg className="w-5 h-5 text-[#F9B637]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" />
              </svg>
              <span className="font-bold tracking-wider text-white text-base sm:text-lg">
                KAFE &amp; CO
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
