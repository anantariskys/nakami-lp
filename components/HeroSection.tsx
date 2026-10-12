import React from "react";
import { createWhatsAppUrl } from "@/lib/constants";
import { MessageCircle, ArrowDown, CheckCircle2, ShieldCheck, Terminal, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#121316]">
      {/* Refined ambient warm tech lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#E73F1E]/12 via-[#FB6C00]/15 to-[#F9B637]/10 blur-[120px] pointer-events-none rounded-full -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Subtle, restrained studio badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17181C] border border-[#2E323B] mb-8">
          <span className="w-2 h-2 rounded-full bg-[#FB6C00]" />
          <span className="text-xs font-mono font-medium tracking-wider text-[#94A3B8] uppercase">
            Nakami Studio · Rekayasa Sistem & Mentoring IT
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
        <p className="text-lg sm:text-xl text-[#94A3B8] max-w-3xl mx-auto mb-10 font-normal leading-relaxed">
          Website dan software kasir untuk merapikan alur kerja operasional UMKM, serta
          live mentoring coding 1-on-1 etis agar mahasiswa IT siap menghadapi
          sidang tugas akhir tanpa ketergantungan joki.
        </p>

        {/* Dual CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto mb-16">
          <a
            href={createWhatsAppUrl(
              "Halo Nakami Studio, saya ingin konsultasi kebutuhan saya (Bisnis/Mahasiswa)..."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-cta-gradient text-white font-bold text-sm sm:text-base hover:opacity-95 transition-all shadow-sm active:translate-y-px"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Mulai Konsultasi WhatsApp</span>
          </a>

          <a
            href="#segment-overview"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#17181C] hover:bg-[#202228] text-white border border-[#2E323B] hover:border-[#3F4450] font-semibold text-sm sm:text-base transition-all active:translate-y-px"
          >
            <span>Eksplorasi Solusi & Paket</span>
            <ArrowDown className="w-4 h-4 text-[#FB6C00]" />
          </a>
        </div>

        {/* Value Pillars Dock */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
          <div className="p-4 rounded-xl bg-[#17181C] border border-[#2E323B] hover:border-[#3F4450] transition-colors flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#FB6C00]/10 text-[#FB6C00] shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-tight">100% Kustom</p>
              <p className="text-[11px] text-[#94A3B8]">Bukan template pasaran</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#17181C] border border-[#2E323B] hover:border-[#3F4450] transition-colors flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-tight">Lighthouse 95+</p>
              <p className="text-[11px] text-[#94A3B8]">Akses cepat & SEO lokal</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#17181C] border border-[#2E323B] hover:border-[#3F4450] transition-colors flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-tight">Mentoring Etis</p>
              <p className="text-[11px] text-[#94A3B8]">Paham logika mandiri</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#17181C] border border-[#2E323B] hover:border-[#3F4450] transition-colors flex items-center gap-3">
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
