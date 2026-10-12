import React from "react";
import { createWhatsAppUrl } from "@/lib/constants";
import { MessageCircle, ArrowDown, Sparkles, CheckCircle2, ShieldCheck, Terminal, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#121316]">
      {/* Background ambient sunset radial glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] md:w-[900px] md:h-[500px] bg-gradient-to-tr from-[#E73F1E]/20 via-[#FB6C00]/25 to-[#F9B637]/10 blur-[130px] pointer-events-none rounded-full -z-10"
        aria-hidden="true"
      />
      
      {/* Subtle background tech grid lines */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#2E323B15_1px,transparent_1px),linear-gradient(to_bottom,#2E323B15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Eyebrow Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C1E24] border border-[#2E323B] shadow-sm mb-6 hover:border-[#FB6C00]/50 transition-colors">
          <Sparkles className="w-3.5 h-3.5 text-[#F9B637] animate-pulse" />
          <span className="text-xs font-mono font-medium tracking-wider text-[#94A3B8] uppercase">
            REKAYASA SISTEM & MENTORING IT
          </span>
        </div>

        {/* Semantic H1 Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.12] mb-6 font-[var(--font-display)]">
          Bangun Sistem Bisnis yang Teruji,{" "}
          <span className="block mt-2 text-sunset-gradient">
            Kuasai Logika Kodemu Sendiri.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-[#94A3B8] max-w-3xl mx-auto mb-8 font-normal leading-relaxed">
          Website dan software kasir untuk merapikan alur kerja UMKM, serta
          live mentoring coding 1-on-1 etis agar mahasiswa IT siap menghadapi
          sidang tugas akhir tanpa joki.
        </p>

        {/* Live System Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#17181C] border border-[#2E323B] text-xs font-mono mb-10 shadow-inner">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10B981]"></span>
          <span className="text-[#94A3B8]">KONSULTASI AWAL:</span>
          <span className="text-emerald-400 font-semibold tracking-wide">
            SLOT DISKUSI TERSEDIA MINGGU INI
          </span>
        </div>

        {/* Dual CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-16">
          <a
            href={createWhatsAppUrl(
              "Halo Nakami Studio, saya ingin konsultasi kebutuhan saya (Bisnis/Mahasiswa)..."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-cta-gradient text-white font-bold text-base hover:opacity-95 transition-all duration-200 shadow-glow-warm hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-amber-300"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Ngobrol Santai di WhatsApp</span>
          </a>

          <a
            href="#segment-overview"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#1C1E24] hover:bg-[#242730] text-white border border-[#2E323B] hover:border-[#FB6C00]/50 font-semibold text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Eksplorasi Solusi & Paket</span>
            <ArrowDown className="w-4 h-4 text-[#FB6C00]" />
          </a>
        </div>

        {/* Floating Sticker / Interactive Badges (Responsive Grid) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto pt-4 border-t border-[#2E323B]/60 text-left">
          <div className="p-3.5 rounded-xl bg-[#17181C]/80 border border-[#2E323B] hover:border-[#FB6C00]/40 transition-colors flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#FB6C00]/10 text-[#FB6C00] shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-tight">100% Kustom</p>
              <p className="text-[11px] text-[#94A3B8]">Bukan template pasaran</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#17181C]/80 border border-[#2E323B] hover:border-[#FB6C00]/40 transition-colors flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-tight">Lighthouse 95+</p>
              <p className="text-[11px] text-[#94A3B8]">Akses cepat & SEO lokal</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#17181C]/80 border border-[#2E323B] hover:border-amber-400/40 transition-colors flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-tight">Mentoring Etis</p>
              <p className="text-[11px] text-[#94A3B8]">Paham kode mandiri</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#17181C]/80 border border-[#2E323B] hover:border-[#FB6C00]/40 transition-colors flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#E73F1E]/10 text-[#E73F1E] shrink-0">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-tight">Full Source Code</p>
              <p className="text-[11px] text-[#94A3B8]">Hak milik & garansi 30 hari</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
