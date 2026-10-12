import React from "react";
import { createWhatsAppUrl } from "@/lib/constants";
import { ShieldCheck, FileCheck, Layers, ArrowRight, CheckCircle2 } from "lucide-react";

export function PricingPhilosophySection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#121316] relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-[var(--font-display)] mb-4">
            Biaya Pasti Berdasarkan Lingkup Kerja,{" "}
            <span className="text-sunset-gradient">
              Disepakati Tertulis Sejak Awal.
            </span>
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg">
            Kami menerapkan sistem <strong className="text-white font-medium">fixed-scope agreement</strong>: modul, jadwal
            pengerjaan, dan biaya disepakati sebelum proyek dimulai. Tanpa biaya siluman di tengah jalan.
          </p>
        </div>

        {/* 3 Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-[#1C1E24] border border-[#2E323B] hover:border-[#FB6C00]/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#FB6C00]/10 text-[#FB6C00] flex items-center justify-center mb-4">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Audit Gratis 15 Menit</h3>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              Diskusi eksplorasi mendalam untuk membedah problem nyata bisnis atau skripsi sebelum Anda mengeluarkan komitmen finansial apa pun.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#1C1E24] border border-[#2E323B] hover:border-[#FB6C00]/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Fixed-Scope Agreement</h3>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              Spesifikasi modul, fitur, deliverables, dan jadwal selesai dikunci transparan dalam dokumen kesepakatan tertulis.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#1C1E24] border border-[#2E323B] hover:border-[#FB6C00]/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Protokol Change Request</h3>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              Jika ada ide penambahan fitur di tengah jalan, kami hitung transparan tanpa mengganggu jadwal pengiriman modul utama.
            </p>
          </div>
        </div>

        {/* 3-Milestone Payment Flow */}
        <div className="rounded-3xl bg-[#17181C] border border-[#2E323B] p-8 sm:p-12 mb-12 shadow-card-subtle">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FB6C00]">
              SKEMA 3 TERMIN PEMBAYARAN UMKM (50 - 30 - 20)
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              Progres Jelas, Pembayaran Mengikuti Hasil
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Step 1 */}
            <div className="rounded-2xl bg-[#1C1E24] border border-[#2E323B] p-6 relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#FB6C00]/20 text-[#FB6C00] border border-[#FB6C00]/30">
                    TERMIN 1
                  </span>
                  <span className="text-2xl font-black text-white font-[var(--font-display)]">50%</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">Uang Muka (DP) & Kick-off</h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                  Inisiasi proyek resmi, finalisasi arsitektur sistem, rancangan wireframe/UI kustom, dan setup repository kode.
                </p>
              </div>
              <div className="pt-3 border-t border-[#2E323B] text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Pengerjaan langsung dimulai</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl bg-[#1C1E24] border border-[#2E323B] p-6 relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#F9B637]/20 text-[#F9B637] border border-[#F9B637]/30">
                    TERMIN 2
                  </span>
                  <span className="text-2xl font-black text-white font-[var(--font-display)]">30%</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">Demo Staging & Testing</h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                  Fitur inti selesai dikembangkan dan dideploy di server staging pribadi. Klien menguji langsung alur transaksi & data.
                </p>
              </div>
              <div className="pt-3 border-t border-[#2E323B] text-[11px] font-mono text-amber-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verifikasi fitur sebelum peluncuran</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl bg-[#1C1E24] border border-[#2E323B] p-6 relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    TERMIN 3
                  </span>
                  <span className="text-2xl font-black text-white font-[var(--font-display)]">20%</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">Peluncuran & Serah Terima</h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                  Deploy ke domain & server produksi resmi, penyerahan full source code repo, panduan admin, serta aktivasi garansi 30 hari.
                </p>
              </div>
              <div className="pt-3 border-t border-[#2E323B] text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Aset 100% milik klien penuh</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="text-center">
          <a
            href={createWhatsAppUrl(
              "Halo Nakami Studio, saya ingin konsultasi skema fixed-scope dan estimasi biaya proyek saya..."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1C1E24] hover:bg-[#22252C] text-white border border-[#2E323B] hover:border-[#FB6C00]/50 font-semibold text-sm transition-all active:translate-y-px"
          >
            <span>Tanya Rincian Biaya via WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-[#FB6C00]" />
          </a>
        </div>
      </div>
    </section>
  );
}
