import React from "react";
import Image from "next/image";
import { createWhatsAppUrl } from "@/lib/constants";
import {
  MessageCircle,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Zap,
  Code2,
  Sparkles,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-white text-[#0F172A]">
      {/* Subtle Background Ambience Outside the Hero Card */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-b from-[#FB6C00]/8 to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-gradient-to-tr from-[#FFDD9C]/20 to-transparent rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enclosed Framed Hero Showcase Card (Faithful to Reference Layout) */}
        <div className="relative rounded-[32px] sm:rounded-[40px] bg-gradient-to-b from-[#FFFDFB] via-[#FFFBF6] to-[#FFF7EE] border border-[#FED7AA]/70 shadow-[0_24px_64px_-16px_rgba(251,108,0,0.08)] overflow-hidden p-6 sm:p-10 lg:p-14">
          
          {/* Subtle Technical Micro-Dot Grid inside the Card */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30 -z-10"
            style={{
              backgroundImage: "radial-gradient(#CBD5E1 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
            aria-hidden="true"
          />

          {/* Top Row: Eyebrow Badge (Left) & Reference-Inspired Live Pill (Right) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 sm:mb-12">
            {/* Live Studio Status Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FFF7ED] border border-[#FFEDD5] text-[#C2410C] text-xs font-semibold tracking-wide shadow-sm w-fit">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FB6C00] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FB6C00]" />
              </span>
              <span>Nakami Studio · Rekayasa Web UMKM & Mentoring IT</span>
            </div>

            {/* Quick Availability Status Pill */}
            <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E2E8F0] text-xs font-semibold text-[#334155] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Slot Q4 Terbuka · Konsultasi 1-on-1 Langsung</span>
            </div>
          </div>

          {/* Split Content: Left = Headline & CTAs, Right = Spotlight Visual & Floating Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
            
            {/* Left Column (Content & Typography) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Semantic H1 with Hand-Drawn Highlight */}
              <div className="relative mb-6">
                {/* Subtle hand-drawn sparkle accent */}
                <Sparkles className="w-5 h-5 text-[#FB6C00]/50 absolute -top-4 -left-4 pointer-events-none" />
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.14] font-[var(--font-display)]">
                  Bangun Sistem Bisnis{" "}
                  <span className="relative inline-block whitespace-nowrap">
                    <span className="relative z-10 text-[#0F172A]">Teruji</span>
                    {/* Hand-drawn organic sketch oval highlight */}
                    <svg
                      className="absolute -top-3 -left-3 -right-3 -bottom-3.5 w-[calc(100%+24px)] h-[calc(100%+24px)] text-[#FB6C00] pointer-events-none z-0"
                      viewBox="0 0 160 62"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M18 44C45 51 135 50 150 35C165 20 110 8 70 9C30 10 5 24 10 39C14 53 60 56 105 54"
                        stroke="currentColor"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-95 drop-shadow-[0_2px_4px_rgba(251,108,0,0.3)]"
                      />
                    </svg>
                  </span>
                  , Kuasai Logika{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E73F1E] via-[#FB6C00] to-[#EA580C]">
                    Kodemu Sendiri.
                  </span>
                </h1>
              </div>

              {/* Subheadline */}
              <p className="text-base sm:text-lg md:text-xl text-[#475569] font-normal leading-relaxed mb-8 max-w-xl">
                Solusi rekayasa website dan software kasir (POS) kustom untuk merapikan alur kerja operasional UMKM, serta pendampingan coding 1-on-1 etis agar mahasiswa IT menguasai logika mandiri tanpa ketergantungan joki.
              </p>

              {/* Dual CTA Button Group (Faithful to Reference: Primary Pill + Separate Circular Arrow Button) */}
              <div className="flex flex-wrap items-center gap-3.5 mb-8">
                {/* Primary Button + Separate Circular Arrow Button Interactive Pair */}
                <div className="flex items-center gap-2">
                  <a
                    href={createWhatsAppUrl(
                      "Halo Nakami Studio, saya ingin konsultasi kebutuhan saya (Bisnis/Mahasiswa)..."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FB6C00] to-[#E73F1E] text-white font-bold text-base hover:opacity-95 shadow-md shadow-[#FB6C00]/25 transition-all duration-200 active:translate-y-px"
                  >
                    <MessageCircle className="w-5 h-5 shrink-0" />
                    <span>Mulai Konsultasi WhatsApp</span>
                  </a>

                  <a
                    href={createWhatsAppUrl(
                      "Halo Nakami Studio, saya ingin konsultasi kebutuhan saya (Bisnis/Mahasiswa)..."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Buka Chat WhatsApp"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FFF7ED] border border-[#FFEDD5] text-[#EA580C] hover:bg-[#FB6C00] hover:text-white hover:border-[#FB6C00] shadow-sm transition-all duration-200 hover:scale-105 active:scale-95"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>

                {/* Secondary Pill Action */}
                <a
                  href="#segment-overview"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white/95 hover:bg-white text-[#1E293B] border border-[#E2E8F0] hover:border-[#CBD5E1] font-semibold text-sm transition-all shadow-sm active:translate-y-px"
                >
                  <span>Lihat Solusi & Paket</span>
                </a>
              </div>

              {/* Trust Verification Strip with consistent styling */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#64748B] font-medium pt-2">
                <div className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Kode Kustom Bersih</span>
                </div>
                <div className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Skor Lighthouse SEO 95+</span>
                </div>
                <div className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Garansi Bug 30 Hari Penuh</span>
                </div>
              </div>
            </div>

            {/* Right Column (Visual Composition: Spotlight Halo Circle + Cutout + Floating Cards + Squiggles) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[450px] aspect-[4/5] flex items-center justify-center">
                
                {/* Concentric Decorative Dashed Ring for depth */}
                <div
                  className="absolute w-[360px] h-[360px] sm:w-[410px] sm:h-[410px] rounded-full border border-[#FB6C00]/30 border-dashed animate-[spin_60s_linear_infinite]"
                  aria-hidden="true"
                />

                {/* Radiant Spotlight Circular Halo Backplate */}
                <div
                  className="absolute w-[320px] h-[320px] sm:w-[370px] sm:h-[370px] rounded-full bg-gradient-to-tr from-[#E73F1E] via-[#FB6C00] to-[#FBBF24] shadow-[0_20px_50px_rgba(251,108,0,0.32)] -rotate-3"
                  aria-hidden="true"
                />

                {/* Subtle Organic Background Blob Layer */}
                <div
                  className="absolute w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] rounded-[48%_52%_65%_35%/40%_45%_55%_60%] bg-[#FED7AA]/40 -z-10 blur-md scale-105"
                  aria-hidden="true"
                />

                {/* Decorative Hand-Drawn Squiggle SVG (Top-Left Accent) */}
                <svg
                  className="absolute -top-4 -left-4 w-16 h-16 text-[#FB6C00]/50 pointer-events-none"
                  viewBox="0 0 60 60"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M10 20C20 10 30 35 45 15C52 6 56 12 55 25"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Decorative Hand-Drawn Squiggle SVG (Bottom-Right Accent) */}
                <svg
                  className="absolute -bottom-4 right-2 w-14 h-14 text-[#FB6C00]/40 pointer-events-none"
                  viewBox="0 0 50 50"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M8 25C15 15 25 35 38 20"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Main Photo Cutout with Seamless Gradient Bottom Fade (No Hard Box Cut!) */}
                <div
                  className="relative z-10 w-full h-full flex items-end justify-center pointer-events-none select-none overflow-hidden"
                  style={{
                    maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                  }}
                >
                  <Image
                    src="/images/female-coder-cutout.png"
                    alt="Talenta engineer dan pembelajar Nakami Studio"
                    width={480}
                    height={680}
                    priority
                    className="object-contain object-bottom max-h-[98%] w-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.14)]"
                  />
                </div>

                {/* Floating Social Proof Card (Top Right, Direct Match to Reference "489+" Card) */}
                <div className="absolute -top-3 -right-2 sm:-right-4 z-20 bg-white/95 backdrop-blur-md border border-[#E2E8F0] rounded-2xl p-4 shadow-xl shadow-slate-900/10 max-w-[215px] sm:max-w-[235px] transition-transform hover:-translate-y-1 duration-200">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-[var(--font-display)] tracking-tight">
                      489<span className="text-[#FB6C00] text-xl font-bold ml-0.5">+</span>
                    </span>
                    <div className="w-7 h-7 rounded-full bg-[#FFF7ED] border border-[#FFEDD5] text-[#EA580C] flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-xs text-[#475569] leading-relaxed mb-3 font-medium">
                    Pelaku usaha & mahasiswa telah didampingi hingga mandiri.
                  </p>
                  
                  {/* Clean Authentic Avatar Stack + Verified Tag */}
                  <div className="flex items-center justify-between pt-2 border-t border-[#F1F5F9]">
                    <div className="flex items-center -space-x-2">
                      <Image
                        src="/images/avatar-1.jpg"
                        alt="Klien Nakami Studio"
                        width={28}
                        height={28}
                        className="w-7 h-7 rounded-full object-cover ring-2 ring-white"
                      />
                      <Image
                        src="/images/avatar-2.jpg"
                        alt="Mahasiswa Mentoring"
                        width={28}
                        height={28}
                        className="w-7 h-7 rounded-full object-cover ring-2 ring-white"
                      />
                      <Image
                        src="/images/avatar-3.jpg"
                        alt="Founder UMKM"
                        width={28}
                        height={28}
                        className="w-7 h-7 rounded-full object-cover ring-2 ring-white"
                      />
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                      Terverifikasi
                    </span>
                  </div>
                </div>

                {/* Floating Assurance Pill (Bottom Left) */}
                <div className="absolute -bottom-2 -left-2 sm:-left-4 z-20 bg-white/95 backdrop-blur-md border border-[#E2E8F0] rounded-2xl px-4 py-3 shadow-lg shadow-slate-900/8 flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0F172A] leading-tight">
                      Garansi Bug 30 Hari
                    </p>
                    <p className="text-[11px] text-[#64748B]">
                      Full Hak Milik Source Code
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* 4 Value Pillars Row at the bottom of the Card */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 mt-12 pt-8 border-t border-[#FED7AA]/50 text-left">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#E2E8F0] hover:border-[#FB6C00]/40 hover:shadow-md transition-all flex items-start sm:items-center gap-3.5 group">
              <div className="p-2.5 rounded-xl bg-[#FFF7ED] text-[#EA580C] shrink-0 group-hover:scale-105 transition-transform">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-[#0F172A] leading-tight">
                  100% Kustom
                </p>
                <p className="text-[11px] sm:text-xs text-[#64748B] mt-0.5">
                  Bukan template pasaran
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#E2E8F0] hover:border-emerald-500/40 hover:shadow-md transition-all flex items-start sm:items-center gap-3.5 group">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 shrink-0 group-hover:scale-105 transition-transform">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-[#0F172A] leading-tight">
                  Lighthouse 95+
                </p>
                <p className="text-[11px] sm:text-xs text-[#64748B] mt-0.5">
                  Akses kilat & SEO teknis
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#E2E8F0] hover:border-amber-500/40 hover:shadow-md transition-all flex items-start sm:items-center gap-3.5 group">
              <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 shrink-0 group-hover:scale-105 transition-transform">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-[#0F172A] leading-tight">
                  Mentoring Etis
                </p>
                <p className="text-[11px] sm:text-xs text-[#64748B] mt-0.5">
                  Paham logika coding mandiri
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#E2E8F0] hover:border-[#E73F1E]/40 hover:shadow-md transition-all flex items-start sm:items-center gap-3.5 group">
              <div className="p-2.5 rounded-xl bg-rose-50 text-[#E73F1E] shrink-0 group-hover:scale-105 transition-transform">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-[#0F172A] leading-tight">
                  Full Source Code
                </p>
                <p className="text-[11px] sm:text-xs text-[#64748B] mt-0.5">
                  Hak milik & dokumentasi rapi
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
