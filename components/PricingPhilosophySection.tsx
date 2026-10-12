import React from "react";
import { createWhatsAppUrl } from "@/lib/constants";
import { ShieldCheck, FileCheck, Layers, ArrowRight, CheckCircle2 } from "lucide-react";

export function PricingPhilosophySection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-white relative scroll-mt-24 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight font-[var(--font-display)] mb-4">
            Biaya Pasti Berdasarkan Lingkup Kerja,{" "}
            <span className="text-sunset-gradient">
              Disepakati Tertulis Sejak Awal.
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Kami menerapkan sistem <strong className="text-slate-900 font-semibold">fixed-scope agreement</strong>: modul, jadwal
            pengerjaan, dan biaya disepakati sebelum proyek dimulai. Tanpa biaya siluman di tengah jalan.
          </p>
        </div>

        {/* 3 Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-[#FB6C00]/40 transition-all shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-md">
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 text-[#C2410C] flex items-center justify-center mb-4">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#0F172A] mb-2">Audit Gratis 15 Menit</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Diskusi eksplorasi mendalam untuk membedah problem nyata bisnis atau skripsi sebelum Anda mengeluarkan komitmen finansial apa pun.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-400 transition-all shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-md">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#0F172A] mb-2">Fixed-Scope Agreement</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Spesifikasi modul, fitur, deliverables, dan jadwal selesai dikunci transparan dalam dokumen kesepakatan tertulis.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-amber-400 transition-all shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-md">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#0F172A] mb-2">Protokol Change Request</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Jika ada ide penambahan fitur di tengah jalan, kami hitung transparan tanpa mengganggu jadwal pengiriman modul utama.
            </p>
          </div>
        </div>

        {/* 3-Milestone Payment Flow */}
        <div className="rounded-3xl bg-gradient-to-b from-[#FFFDFB] via-[#FFFBF6] to-[#FFF7EE] border border-[#FED7AA]/80 p-8 sm:p-12 mb-12 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C2410C] font-bold">
              SKEMA 3 TERMIN PEMBAYARAN UMKM (50 - 30 - 20)
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mt-2">
              Progres Jelas, Pembayaran Mengikuti Hasil
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Step 1 */}
            <div className="rounded-2xl bg-white border border-orange-200/90 p-6 relative flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-orange-50 text-[#C2410C] border border-orange-200">
                    TERMIN 1
                  </span>
                  <span className="text-2xl font-black text-[#0F172A] font-[var(--font-display)]">50%</span>
                </div>
                <h4 className="text-base font-bold text-[#0F172A] mb-2">Uang Muka (DP) & Kick-off</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Inisiasi proyek resmi, finalisasi arsitektur sistem, rancangan wireframe/UI kustom, dan setup repository kode.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-emerald-700 flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Pengerjaan langsung dimulai</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl bg-white border border-amber-200/90 p-6 relative flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-amber-50 text-amber-800 border border-amber-200">
                    TERMIN 2
                  </span>
                  <span className="text-2xl font-black text-[#0F172A] font-[var(--font-display)]">30%</span>
                </div>
                <h4 className="text-base font-bold text-[#0F172A] mb-2">Demo Staging & Testing</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Fitur inti selesai dikembangkan dan dideploy di server staging pribadi. Klien menguji langsung alur transaksi & data.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-amber-800 flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                <span>Verifikasi fitur sebelum peluncuran</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl bg-white border border-emerald-200/90 p-6 relative flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                    TERMIN 3
                  </span>
                  <span className="text-2xl font-black text-[#0F172A] font-[var(--font-display)]">20%</span>
                </div>
                <h4 className="text-base font-bold text-[#0F172A] mb-2">Peluncuran & Serah Terima</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Deploy ke domain & server produksi resmi, penyerahan full source code repo, panduan admin, serta aktivasi garansi 30 hari.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-emerald-700 flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
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
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-sm active:translate-y-px"
          >
            <span>Tanya Rincian Biaya via WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-[#FB6C00]" />
          </a>
        </div>
      </div>
    </section>
  );
}
