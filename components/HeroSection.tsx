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
  // Precompute halftone dome dots for the 3D globe arch
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
        const op = +(0.12 + 0.55 * z * (0.3 + 0.7 * normY)).toFixed(2);
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
      className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28 overflow-hidden text-[#0A0A0A] bg-white border-b border-neutral-200"
    >
      {/* 1. Subtle Thin-Line Technical Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(251, 108, 0, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(251, 108, 0, 0.06) 1px, transparent 1px)",
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
              fill="#FB6C00"
              fillOpacity={d.op * 0.8}
            />
          ))}
        </svg>
      </div>

      {/* 3. Ambient Center Warm Sunset Radial Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] sm:w-[980px] h-[520px] bg-[radial-gradient(ellipse_at_center,rgba(251,108,0,0.08)_0%,rgba(231,63,30,0.04)_40%,transparent_70%)] pointer-events-none blur-3xl"
        aria-hidden="true"
      />

      {/* Floating Playful Tech Badges (Desktop/Tablet) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none max-w-7xl mx-auto z-10" aria-hidden="true">
        {/* Badge A (Kiri Atas) */}
        <div className="absolute top-36 left-8 bg-white/95 backdrop-blur-md border border-neutral-200 text-neutral-800 px-3.5 py-1.5 rounded-xl shadow-md -rotate-3 text-xs font-mono flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#FB6C00]" />
          <span>100% Hand-Crafted Code</span>
        </div>

        {/* Badge B (Kanan Atas) */}
        <div className="absolute top-36 right-8 bg-white/95 backdrop-blur-md border border-neutral-200 text-neutral-800 px-3.5 py-1.5 rounded-xl shadow-md rotate-3 text-xs font-mono flex items-center gap-2">
          <Coffee className="w-3.5 h-3.5 text-emerald-600" />
          <span>Free 15-Min System Audit</span>
        </div>

        {/* Badge C (Kanan Bawah) */}
        <div className="absolute bottom-52 right-12 bg-white/95 backdrop-blur-md border border-neutral-200 text-neutral-800 px-3.5 py-1.5 rounded-xl shadow-md -rotate-2 text-xs font-mono flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-[#FB6C00]" />
          <span>Strict Zero-Joki Ethics</span>
        </div>

        {/* Badge D (Kiri Bawah) */}
        <div className="absolute bottom-52 left-12 bg-white/95 backdrop-blur-md border border-neutral-200 text-neutral-800 px-3.5 py-1.5 rounded-xl shadow-md rotate-2 text-xs font-mono flex items-center gap-2">
          <Zap className="w-3.5 h-3.5 text-[#E73F1E]" />
          <span>Next.js 16 • Tailwind v4</span>
        </div>
      </div>

      {/* Hero Content Area */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
        
        {/* Category Pill Badge (Top) */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-800 text-xs font-mono tracking-wider uppercase mb-6 shadow-xs">
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

        {/* Main Headline (H1) */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-extrabold tracking-tight text-[#0A0A0A] leading-[1.12] mb-6 sm:mb-7 font-[var(--font-display)] max-w-5xl mx-auto">
          Bukan Sekadar Baris Kode.{" "}
          <span className="bg-gradient-to-r from-[#E73F1E] via-[#FB6C00] to-[#F9B637] bg-clip-text text-transparent">
            Kami Meracik Sistem
          </span>{" "}
          yang Benar-Benar Bekerja.
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg lg:text-xl text-neutral-600 font-normal leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10">
          Otomasi operasional praktis untuk bisnis Anda yang sedang bertumbuh, serta bimbingan 1-on-1 mendalam bagi mahasiswa IT tanpa jalan pintas joki.
        </p>

        {/* Floating Interactive Preview Pill (System Status) */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-50 border border-emerald-500/30 text-neutral-800 text-xs font-mono shadow-sm mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="tracking-wide">SYSTEM STATUS: ALL SYSTEMS NOMINAL // 0 CRITICAL ERRORS</span>
        </div>

        {/* Dual CTA Buttons (Centered Pill Pair) */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10 sm:mb-14 z-20 relative">
          <a
            href={createWhatsAppUrl(
              "Halo Nakami Studio, saya ingin konsultasi kebutuhan sistem bisnis / mentoring IT..."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 h-14 px-8 rounded-full bg-gradient-to-r from-[#FB6C00] to-[#E73F1E] text-white font-bold text-base hover:opacity-95 active:scale-[0.98] shadow-md transition-all"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            <span>Ngobrol Santai di WhatsApp →</span>
          </a>

          <a
            href="#pilih-jalur"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-neutral-100 hover:bg-neutral-200/80 text-neutral-900 border border-neutral-300 font-semibold text-base transition-colors"
          >
            <span>Eksplorasi Solusi & Paket</span>
            <ArrowDown className="w-4 h-4 text-neutral-600" />
          </a>
        </div>

        {/* Halftone Dome / Globe Anchor Graphic in Light Theme */}
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
                fill={dot.r > 2.5 ? "#FB6C00" : "#71717A"}
                fillOpacity={dot.op * 0.65}
              />
            ))}
          </svg>
        </div>

        {/* Trust Bar & Client / Technology Logos */}
        <div className="w-full pt-8 sm:pt-12 mt-2 sm:mt-4 border-t border-neutral-200">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-neutral-500 uppercase mb-8 sm:mb-10 text-center font-mono">
            Dipercaya oleh pemilik bisnis, UMKM modern, dan ratusan talenta IT di seluruh Indonesia
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 text-neutral-700">
            {/* 1. KASIR KILAT */}
            <div className="flex items-center gap-2 hover:text-black transition-colors">
              <svg className="w-5 h-5 text-[#FB6C00]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 4h3l2.5 11h9.5l2-8H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <circle cx="10" cy="19" r="2" />
                <circle cx="17" cy="19" r="2" />
              </svg>
              <span className="font-extrabold tracking-widest text-neutral-900 text-base sm:text-lg">
                KASIR KILAT
              </span>
            </div>

            {/* 2. NEXT.JS */}
            <div className="flex items-center gap-2 hover:text-black transition-colors">
              <svg className="w-5 h-5 text-neutral-900" viewBox="0 0 180 180" fill="none">
                <circle cx="90" cy="90" r="88" stroke="currentColor" strokeWidth="12" />
                <path d="M149.5 157.4L69.1 54H54V126H66.1V69.4L140 164.8C143.3 162.6 146.5 160.1 149.5 157.4Z" fill="currentColor" />
                <rect x="115" y="54" width="12" height="72" fill="currentColor" />
              </svg>
              <span className="font-bold tracking-tight text-neutral-900 text-base sm:text-lg font-sans">
                Next.js 16
              </span>
            </div>

            {/* 3. TAILWIND */}
            <div className="flex items-center gap-2 hover:text-black transition-colors">
              <svg className="w-6 h-6 text-[#06B6D4]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
              </svg>
              <span className="font-bold tracking-tight text-neutral-900 text-base sm:text-lg">
                Tailwind CSS
              </span>
            </div>

            {/* 4. POSTGRESQL */}
            <div className="flex items-center gap-2 hover:text-black transition-colors">
              <svg className="w-5 h-5 text-[#336791]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
              </svg>
              <span className="font-bold tracking-tight text-neutral-900 text-base sm:text-lg">
                PostgreSQL
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
