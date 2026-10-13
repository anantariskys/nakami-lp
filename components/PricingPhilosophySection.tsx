"use client";

import React from "react";
import {
  ShieldCheck,
  FileCheck,
  Layers,
  CheckCircle2,
  GraduationCap,
  ArrowRight,
  Calculator,
} from "lucide-react";

export function PricingPhilosophySection() {
  return (
    <section id="transparansi-biaya" className="scroll-mt-28 py-20 sm:py-24 bg-[#121316] border-b border-[#2E323B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1C1E24] border border-[#2E323B] text-xs font-mono font-medium text-[#F9B637] mb-4 shadow-sm">
            <FileCheck className="w-3.5 h-3.5 text-[#FB6C00]" />
            <span>TRANSPARANSI KONTRAK &amp; BIAYA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-[var(--font-display)] mb-4">
            Biaya pasti berdasar lingkup kerja tertulis.
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed">
            Kami menerapkan sistem fixed-scope agreement: modul, tenggat pengerjaan, dan biaya disepakati tertulis di awal sebelum penulisan kode dimulai. Tanpa biaya tersembunyi.
          </p>
        </div>

        {/* 3 Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-7 rounded-3xl border border-[#2E323B] bg-[#1C1E24] hover:border-[#FB6C00]/40 shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#242730] border border-[#2E323B] text-[#FB6C00] flex items-center justify-center mb-4">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 font-[var(--font-display)]">
              Audit Kebutuhan 15 Menit Awal
            </h3>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              Diskusi awal untuk memetakan kendala nyata operasional bisnis atau skripsi Anda sebelum ada komitmen finansial apa pun.
            </p>
          </div>

          <div className="p-7 rounded-3xl border border-[#2E323B] bg-[#1C1E24] hover:border-emerald-500/40 shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#242730] border border-[#2E323B] text-emerald-400 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 font-[var(--font-display)]">
              Fixed-Scope Agreement
            </h3>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              Spesifikasi modul, daftar fitur, dan tanggal selesai dikunci secara transparan dalam dokumen kesepakatan tertulis.
            </p>
          </div>

          <div className="p-7 rounded-3xl border border-[#2E323B] bg-[#1C1E24] hover:border-[#F9B637]/40 shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#242730] border border-[#2E323B] text-[#F9B637] flex items-center justify-center mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 font-[var(--font-display)]">
              Protokol Change Request
            </h3>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              Jika ada ide penambahan fitur di tengah jalan, kami hitung estimasi terpisah tanpa mengganggu tenggat rilis modul utama.
            </p>
          </div>
        </div>

        {/* 3-Milestone Payment Scheme for UMKM */}
        <div className="rounded-[32px] sm:rounded-[40px] border border-[#2E323B] bg-[#1C1E24] p-6 sm:p-10 lg:p-12 shadow-lg mb-10">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#FB6C00] font-bold">
              SKEMA PEMBAYARAN BERTARAF 3 TERMIN UMKM
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 font-[var(--font-display)]">
              Pembayaran mengikuti progres yang terbukti berjalan.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Step 1 */}
            <div className="rounded-2xl border border-[#2E323B] bg-[#17181C] p-6 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-[#242730] text-[#CBD5E1] border border-[#2E323B]">
                    TERMIN 01
                  </span>
                  <span className="text-xl font-extrabold text-[#FB6C00] font-[var(--font-display)]">50%</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  Uang Muka &amp; Kickoff Proyek
                </h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                  Dibayarkan setelah dokumen lingkup kerja disepakati bersama.
                </p>
                <div className="space-y-2 text-xs text-[#CBD5E1]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Perancangan arsitektur database</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Setup repositori kode &amp; server dev</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Penyusunan desain antarmuka sistem</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border border-[#2E323B] bg-[#17181C] p-6 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-[#242730] text-[#CBD5E1] border border-[#2E323B]">
                    TERMIN 02
                  </span>
                  <span className="text-xl font-extrabold text-[#FB6C00] font-[var(--font-display)]">30%</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  Staging Demo &amp; Uji Coba Klien
                </h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                  Dibayarkan setelah seluruh modul inti selesai dan dapat dicoba langsung di server staging.
                </p>
                <div className="space-y-2 text-xs text-[#CBD5E1]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Link staging demo aktif untuk dicoba</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Uji alur transaksi kasir / booking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Sesi revisi penyempurnaan alur kerja</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border border-[#2E323B] bg-[#17181C] p-6 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-[#242730] text-[#CBD5E1] border border-[#2E323B]">
                    TERMIN 03
                  </span>
                  <span className="text-xl font-extrabold text-[#FB6C00] font-[var(--font-display)]">20%</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  Pelunasan, Handover &amp; Garansi
                </h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                  Dibayarkan saat serah terima penuh, sistem live, dan garansi bug 30 hari aktif.
                </p>
                <div className="space-y-2 text-xs text-[#CBD5E1]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Handover full source code repositori Git</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Pelatihan staf / tim hingga lancar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Garansi perbaikan bug aktif 30 hari</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Mentoring IT Model Note + Forward Bridge to Estimator */}
        <div className="rounded-2xl bg-[#1C1E24] border border-[#2E323B] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#242730] border border-[#2E323B] text-white flex items-center justify-center shrink-0 mt-0.5">
              <GraduationCap className="w-5 h-5 text-[#F9B637]" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#94A3B8] mb-1">
                SKEMA MENTORING IT MAHASISWA
              </div>
              <h4 className="text-base font-bold text-white mb-1">
                Transparan per sesi atau paket bimbingan sebelum jadwal dimulai
              </h4>
              <p className="text-xs sm:text-sm text-[#94A3B8] max-w-2xl leading-relaxed">
                Biaya dihitung per jam (mulai Rp 150rb) atau per paket terarah tanpa tagihan berulang. Sudah mencakup video rekaman sesi privat dan garansi tanya jawab lanjutan.
              </p>
            </div>
          </div>

          <a
            href="#kalkulator-estimasi"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#FB6C00] to-[#E73F1E] text-[#121316] font-bold text-xs sm:text-sm shadow-glow-warm hover:brightness-110 transition-all shrink-0 w-full md:w-auto"
          >
            <Calculator className="w-4 h-4 text-[#121316]" />
            <span>Simulasikan di Kalkulator</span>
            <ArrowRight className="w-4 h-4 text-[#121316]" />
          </a>
        </div>

      </div>
    </section>
  );
}
