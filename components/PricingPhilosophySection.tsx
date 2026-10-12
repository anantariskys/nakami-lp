"use client";

import React from "react";
import { ShieldCheck, FileCheck, Layers, CheckCircle2 } from "lucide-react";

export function PricingPhilosophySection() {
  return (
    <section id="transparansi-biaya" className="py-20 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700 mb-4">
            <FileCheck className="w-3.5 h-3.5 text-[#FB6C00]" />
            <span>TRANSPARANSI KONTRAK & BIAYA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-[var(--font-display)] mb-4">
            Biaya pasti berdasar lingkup kerja tertulis.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Kami menerapkan sistem fixed-scope agreement: modul, tenggat pengerjaan, dan biaya disepakati tertulis di awal sebelum penulisan kode dimulai. Tanpa biaya tersembunyi.
          </p>
        </div>

        {/* 3 Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 text-[#C2410C] flex items-center justify-center mb-4">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Audit Kebutuhan 15 Menit Awal
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Diskusi awal untuk memetakan kendala nyata operasional bisnis atau skripsi Anda sebelum ada komitmen finansial apa pun.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Fixed-Scope Agreement
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Spesifikasi modul, daftar fitur, dan tanggal selesai dikunci secara transparan dalam dokumen kesepakatan tertulis.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Protokol Change Request
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Jika ada ide penambahan fitur di tengah jalan, kami hitung estimasi terpisah tanpa mengganggu tenggat rilis modul utama.
            </p>
          </div>
        </div>

        {/* 3-Milestone Payment Scheme */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-10">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#FB6C00] font-bold">
              SKEMA PEMBAYARAN BERTARAF 3 TERMIN UMKM
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Pembayaran mengikuti progres yang terbukti berjalan.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Step 1 */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                    TERMIN 01
                  </span>
                  <span className="text-xl font-extrabold text-[#FB6C00]">50%</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  Uang Muka & Kickoff Proyek
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Dibayarkan setelah dokumen lingkup kerja disepakati bersama.
                </p>
                <div className="space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Perancangan arsitektur database</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Setup repositori kode & server dev</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Penyusunan desain antarmuka sistem</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                    TERMIN 02
                  </span>
                  <span className="text-xl font-extrabold text-[#FB6C00]">30%</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  Staging Demo & Uji Coba Klien
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Dibayarkan setelah seluruh modul inti selesai dan dapat dicoba langsung di server staging.
                </p>
                <div className="space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Link staging demo aktif untuk dicoba</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Uji alur transaksi kasir / booking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Sesi revisi penyempurnaan alur kerja</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                    TERMIN 03
                  </span>
                  <span className="text-xl font-extrabold text-[#FB6C00]">20%</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  Pelunasan, Handover & Garansi
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Dibayarkan saat serah terima penuh, sistem live, dan garansi bug 30 hari aktif.
                </p>
                <div className="space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Handover full source code repositori Git</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Pelatihan staf / tim hingga lancar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Garansi perbaikan bug aktif 30 hari</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
