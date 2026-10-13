"use client";

import React from "react";
import {
  Store,
  GraduationCap,
  ArrowRight,
  XCircle,
  CheckCircle2,
  Layers,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { createWhatsAppUrl } from "@/lib/constants";

export function DualGateway() {
  const handleSelectTrack = (track: "biz" | "edu") => {
    // Update hash and dispatch event for smooth tab sync
    const targetId = track === "biz" ? "layanan-bisnis" : "mentoring-it";
    window.location.hash = targetId;
    window.dispatchEvent(new CustomEvent("nakami:switch-track", { detail: { track } }));
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pilih-jalur" className="scroll-mt-28 py-20 sm:py-24 bg-[#17181C] border-b border-[#2E323B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1C1E24] border border-[#2E323B] text-xs font-mono font-medium text-[#F9B637] mb-4 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-[#FB6C00]" />
            <span>DUAL GATEWAY · PILIH JALUR KEBUTUHAN ANDA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-[var(--font-display)] mb-4">
            Dua tantangan berbeda, satu standar rekayasa teruji.
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed">
            Pilih jalur yang paling menggambarkan fokus Anda saat ini untuk melihat diagnosa kendala nyata dan solusi modul yang dirancang tepat sasaran.
          </p>
        </div>

        {/* Dual Track Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* Track 1: Solusi Bisnis & UMKM */}
          <div className="rounded-[32px] sm:rounded-[36px] bg-[#1C1E24] border border-[#2E323B] hover:border-[#FB6C00]/50 p-7 sm:p-10 shadow-lg hover:shadow-glow-warm/10 transition-all flex flex-col justify-between relative overflow-hidden group">
            {/* Top Accent Pill */}
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#242730] border border-[#FB6C00]/30 text-xs font-mono font-bold text-[#FB6C00]">
                  <Store className="w-4 h-4 text-[#FB6C00]" />
                  <span>JALUR BISNIS &amp; UMKM</span>
                </div>
                <span className="text-[11px] font-mono font-semibold text-[#94A3B8]">
                  FOKUS: EFISIENSI &amp; OMZET
                </span>
              </div>

              {/* Title & Narrative */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-[var(--font-display)] mb-3 leading-snug">
                Sistem Operasional Kustom &amp; Website Kredibel
              </h3>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-6">
                Dirancang untuk pemilik usaha yang ingin menghentikan kebocoran stok, meningkatkan konversi pelanggan, dan memiliki sistem mandiri tanpa biaya langganan bulanan.
              </p>

              {/* Problem vs Nakami Approach Micro-Grid */}
              <div className="space-y-4 pt-6 border-t border-[#2E323B]">
                <div className="p-4 rounded-2xl bg-[#242024]/80 border border-rose-500/20">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-rose-400 mb-2">
                    <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span>KENDALA OPERASIONAL UMUM</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#CBD5E1]">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold">×</span>
                      <span>Stok fisik sering selisih karena rekap kasir masih manual / Excel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold">×</span>
                      <span>Biaya langganan aplikasi POS membengkak tiap tambah outlet</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold">×</span>
                      <span>Calon pelanggan ragu karena bisnis belum punya web resmi berdomain</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-[#192420]/80 border border-emerald-500/20">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 mb-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>PENDEKATAN NAKAMI STUDIO</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#CBD5E1]">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>Software kustom milik Anda 100% tanpa sewa bulanan per perangkat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>Sinkronisasi stok real-time, print struk thermal &amp; scan barcode</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>Web performa tinggi (Lighthouse 95+) dengan garansi 30 hari bebas bug</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Sample Deliverables Chips */}
              <div className="pt-6 mt-6 border-t border-[#2E323B] flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-md bg-[#242730] border border-[#2E323B] font-mono text-[#E2E8F0] font-semibold">
                  BIZ-01 Web Profil
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#242730] border border-[#2E323B] font-mono text-[#E2E8F0] font-semibold">
                  BIZ-02 POS Kasir
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#242730] border border-[#2E323B] font-mono text-[#E2E8F0] font-semibold">
                  BIZ-03 Booking
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#242730] border border-[#2E323B] font-mono text-[#E2E8F0] font-semibold">
                  BIZ-04 ERP Kustom
                </span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-8 mt-6 border-t border-[#2E323B] flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={() => handleSelectTrack("biz")}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#FB6C00] to-[#E73F1E] text-[#121316] font-bold text-sm shadow-glow-warm hover:brightness-110 transition-all cursor-pointer"
              >
                <span>Eksplorasi Solusi Bisnis</span>
                <ArrowRight className="w-4 h-4 text-[#121316]" />
              </button>
              <a
                href={createWhatsAppUrl(
                  "Halo Nakami Studio, saya pelaku usaha dan ingin konsultasi kebutuhan sistem bisnis saya..."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#242730] hover:bg-[#2C303B] border border-[#2E323B] text-white font-semibold text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#10B981]" />
                <span>Tanya Engineer</span>
              </a>
            </div>
          </div>

          {/* Track 2: Mentoring IT & Skripsi */}
          <div className="rounded-[32px] sm:rounded-[36px] bg-[#1C1E24] border border-[#2E323B] hover:border-[#F9B637]/50 p-7 sm:p-10 shadow-lg hover:shadow-amber-500/5 transition-all flex flex-col justify-between relative overflow-hidden group">
            {/* Top Accent Pill */}
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#242730] border border-[#F9B637]/30 text-xs font-mono font-bold text-[#F9B637]">
                  <GraduationCap className="w-4 h-4 text-[#F9B637]" />
                  <span>JALUR MAHASISWA IT</span>
                </div>
                <span className="text-[11px] font-mono font-semibold text-[#94A3B8]">
                  FOKUS: LOGIKA &amp; SIDANG
                </span>
              </div>

              {/* Title & Narrative */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-[var(--font-display)] mb-3 leading-snug">
                Bimbingan Logika Kode &amp; Simulasi Sidang Etis
              </h3>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-6">
                Dirancang khusus bagi mahasiswa IT yang ingin menuntaskan error buntu, membedah query database, dan menguasai alur program agar percaya diri menghadapi dosen penguji.
              </p>

              {/* Problem vs Nakami Approach Micro-Grid */}
              <div className="space-y-4 pt-6 border-t border-[#2E323B]">
                <div className="p-4 rounded-2xl bg-[#242024]/80 border border-rose-500/20">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-rose-400 mb-2">
                    <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span>KENDALA MAHASISWA UMUM</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#CBD5E1]">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold">×</span>
                      <span>Stuck berhari-hari pada satu baris error tanpa tahu membaca error trace</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold">×</span>
                      <span>Bingung rancang ERD normalisasi dan standarisasi endpoint REST API</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold">×</span>
                      <span>Takut blank saat dosen penguji bertanya fungsi baris kode saat sidang</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-[#242218]/80 border border-amber-500/20">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>PENDEKATAN MENTORING NAKAMI</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#CBD5E1]">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">✓</span>
                      <span>Live debugging 1-on-1 screen-share bersama senior engineer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">✓</span>
                      <span>Bedah kode baris demi baris: paham logika 100%, bebas risiko joki</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">✓</span>
                      <span>Simulasi sidang dengan bank pertanyaan kritis dosen penguji IT</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Sample Deliverables Chips */}
              <div className="pt-6 mt-6 border-t border-[#2E323B] flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-md bg-[#242730] border border-[#2E323B] font-mono text-[#E2E8F0] font-semibold">
                  EDU-01 Live Debugging
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#242730] border border-[#2E323B] font-mono text-[#E2E8F0] font-semibold">
                  EDU-02 Database &amp; API
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#242730] border border-[#2E323B] font-mono text-[#E2E8F0] font-semibold">
                  EDU-03 Bedah Sidang
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#242730] border border-[#F9B637]/40 font-mono text-[#F9B637] font-semibold">
                  Manifesto Anti-Joki
                </span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-8 mt-6 border-t border-[#2E323B] flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={() => handleSelectTrack("edu")}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#242730] hover:bg-[#2C303B] border border-[#F9B637]/50 text-white font-bold text-sm transition-colors cursor-pointer"
              >
                <span>Eksplorasi Mentoring IT</span>
                <ArrowRight className="w-4 h-4 text-[#F9B637]" />
              </button>
              <a
                href={createWhatsAppUrl(
                  "Halo Nakami Studio, saya mahasiswa IT dan butuh mentoring etis untuk tugas akhir saya..."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#242730] hover:bg-[#2C303B] border border-[#2E323B] text-white font-semibold text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#10B981]" />
                <span>Konsultasi Mentor</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
