import React from "react";
import Image from "next/image";
import { createWhatsAppUrl } from "@/lib/constants";
import {
  MessageCircle,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Zap,
  Code2,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-white text-[#121316]">
      {/* Background Soft Organic Radial Glows & Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 overflow-hidden"
        aria-hidden="true"
      >
        {/* Subtle Brand Ambient Warmth */}
        <div className="absolute -top-32 right-[-10%] w-[650px] h-[650px] bg-gradient-to-br from-[#FB6C00]/12 via-[#F9B637]/10 to-transparent rounded-full blur-3xl opacity-80" />
        <div className="absolute top-1/3 left-[-12%] w-[550px] h-[550px] bg-gradient-to-tr from-[#E73F1E]/8 via-[#FFDD9C]/15 to-transparent rounded-full blur-3xl opacity-70" />

        {/* Crisp subtle micro-dot grid for engineered technical aesthetic */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(#CBD5E1 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Grid: Left = Typography & CTAs, Right = Visual Talent & Metrics Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (Content) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Live Studio Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FFF7ED] border border-[#FFEDD5] text-[#C2410C] text-xs font-semibold tracking-wide shadow-sm mb-6">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FB6C00] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FB6C00]" />
              </span>
              <span>Nakami Studio · Rekayasa Web UMKM & Mentoring IT</span>
            </div>

            {/* Semantic H1 with Hand-Drawn Highlight */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.12] mb-6 font-[var(--font-display)]">
              Bangun Sistem Bisnis{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-10 text-[#0F172A]">Teruji</span>
                {/* Hand-drawn organic circle highlight */}
                <svg
                  className="absolute -top-2 -left-2.5 -right-3 -bottom-2 w-[calc(100%+20px)] h-[calc(100%+16px)] text-[#FB6C00] pointer-events-none z-0"
                  viewBox="0 0 160 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M18 42C45 49 135 48 150 33C165 18 110 8 70 9C30 10 5 24 10 39C14 51 60 54 105 52"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-90 drop-shadow-[0_2px_4px_rgba(251,108,0,0.25)]"
                  />
                </svg>
              </span>
              , Kuasai Logika{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E73F1E] via-[#FB6C00] to-[#EA580C]">
                Kodemu Sendiri.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-[#475569] font-normal leading-relaxed mb-8 max-w-2xl">
              Solusi rekayasa website dan software kasir (POS) kustom untuk merapikan
              alur kerja operasional UMKM, serta live mentoring coding 1-on-1 etis agar
              mahasiswa IT siap menghadapi sidang tugas akhir tanpa ketergantungan joki.
            </p>

            {/* CTA Button Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href={createWhatsAppUrl(
                  "Halo Nakami Studio, saya ingin konsultasi kebutuhan saya (Bisnis/Mahasiswa)..."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-[#FB6C00] to-[#E73F1E] text-white font-bold text-base hover:opacity-95 shadow-md shadow-[#FB6C00]/25 transition-all active:translate-y-px"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span>Mulai Konsultasi WhatsApp</span>
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </span>
              </a>

              <a
                href="#segment-overview"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-[#F8FAFC] text-[#1E293B] border border-[#E2E8F0] hover:border-[#CBD5E1] font-semibold text-base transition-all shadow-sm active:translate-y-px"
              >
                <span>Lihat Solusi & Paket</span>
              </a>
            </div>

            {/* Trust Proof Metrics Strip */}
            <div className="pt-6 border-t border-[#E2E8F0] w-full grid grid-cols-3 gap-4 sm:gap-8">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-[var(--font-display)]">
                  100%
                </p>
                <p className="text-xs sm:text-sm text-[#64748B] font-medium mt-0.5">
                  Kode Kustom Bersih
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-[var(--font-display)]">
                  95+
                </p>
                <p className="text-xs sm:text-sm text-[#64748B] font-medium mt-0.5">
                  Skor Lighthouse SEO
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-[var(--font-display)]">
                  1-on-1
                </p>
                <p className="text-xs sm:text-sm text-[#64748B] font-medium mt-0.5">
                  Mentoring Etis Tanpa Joki
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (Visual Composition: Organic Blob + Cutout Photo + Floating Stats Card + Floating Tag) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[460px] aspect-[4/5] sm:aspect-[3/4] flex items-center justify-center">
              {/* Organic Brand Blob Backplate (Orange & Amber Energy) */}
              <div
                className="absolute inset-4 sm:inset-6 bg-gradient-to-br from-[#FB6C00] via-[#F97316] to-[#F59E0B] rounded-[42%_58%_70%_30%/45%_45%_55%_55%] shadow-2xl shadow-[#FB6C00]/25 -rotate-2 scale-95"
                aria-hidden="true"
              />

              {/* Decorative Accent Graphic (Curved Dotted Rings) */}
              <svg
                className="absolute -top-6 -right-6 w-32 h-32 text-[#FB6C00]/30 pointer-events-none"
                viewBox="0 0 100 100"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="4 6"
                />
              </svg>

              {/* Main Photo Cutout (Clean Isolated Talent Holding Laptop) */}
              <div className="relative z-10 w-full h-full flex items-end justify-center pointer-events-none select-none">
                <Image
                  src="/images/female-coder-cutout.png"
                  alt="Talenta engineer dan pembelajar Nakami Studio"
                  width={480}
                  height={680}
                  priority
                  className="object-contain object-bottom max-h-[96%] w-auto drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)]"
                />
              </div>

              {/* Floating Social Proof Card (Top Right / Asymmetric) */}
              <div className="absolute -top-4 -right-2 sm:-right-6 z-20 bg-white/95 backdrop-blur-md border border-[#E2E8F0] rounded-2xl p-4 shadow-xl shadow-slate-900/10 max-w-[210px] sm:max-w-[230px] transition-transform hover:-translate-y-1 duration-200">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-[var(--font-display)] tracking-tight">
                    489+
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#FFF7ED] border border-[#FFEDD5] text-[#EA580C] flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-xs text-[#475569] leading-snug mb-3 font-medium">
                  Pelaku usaha & mahasiswa telah didampingi hingga mandiri.
                </p>
                {/* Avatar Stack Social Proof */}
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
                  <div className="w-7 h-7 rounded-full bg-[#0F172A] text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
                    ★ 4.9
                  </div>
                </div>
              </div>

              {/* Floating Pill Badge (Bottom Left) */}
              <div className="absolute -bottom-4 -left-2 sm:-left-6 z-20 bg-white/95 backdrop-blur-md border border-[#E2E8F0] rounded-xl px-4 py-3 shadow-lg shadow-slate-900/8 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100">
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

        {/* Value Pillars Grid (Clean, Elevated White Cards on subtle border) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 mt-16 pt-8 border-t border-[#F1F5F9] text-left">
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#FB6C00]/40 hover:shadow-md transition-all flex items-start sm:items-center gap-3.5 group">
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

          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E2E8F0] hover:border-emerald-500/40 hover:shadow-md transition-all flex items-start sm:items-center gap-3.5 group">
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

          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E2E8F0] hover:border-amber-500/40 hover:shadow-md transition-all flex items-start sm:items-center gap-3.5 group">
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

          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#E73F1E]/40 hover:shadow-md transition-all flex items-start sm:items-center gap-3.5 group">
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
    </section>
  );
}
