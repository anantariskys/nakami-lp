"use client";

import React from "react";
import {
  ArrowUpRight,
  Check,
  X,
  MessageCircle,
} from "lucide-react";
import { createWhatsAppUrl } from "@/lib/constants";

export function DualGateway() {
  const handleSelectTrack = (track: "biz" | "edu") => {
    const targetId = track === "biz" ? "layanan-bisnis" : "mentoring-it";
    window.location.hash = targetId;
    window.dispatchEvent(
      new CustomEvent("nakami:switch-track", { detail: { track } })
    );
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="pilih-jalur"
      className="scroll-mt-24 py-24 sm:py-32 bg-white border-b border-neutral-200 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header: Clean Swiss Hierarchy, No AI Slop Eyebrow */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#FB6C00] font-bold mb-3">
            <span>[ DUAL-TRACK ARCHITECTURE ]</span>
            <span className="w-8 h-px bg-neutral-300" />
            <span className="text-neutral-500 font-normal">PILIH JALUR KEBUTUHAN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight font-[var(--font-display)] leading-[1.12]">
            Dua tantangan berbeda.{" "}
            <span className="text-neutral-500 font-normal">Satu standar rekayasa presisi.</span>
          </h2>
          <p className="mt-4 text-neutral-600 text-base sm:text-lg max-w-2xl leading-relaxed">
            Pilih jalur yang mewakili fokus Anda. Setiap trek dirancang dengan metodologi spesifik: memangkas inefisiensi operasional bisnis atau membekali logika murni mahasiswa IT.
          </p>
        </div>

        {/* Asymmetrical Editorial Gateway Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* TRACK 01: SOLUSI BISNIS & UMKM (Span 6) */}
          <div
            className="lg:col-span-6 rounded-3xl bg-[#FAFAFA] border border-neutral-200 hover:border-neutral-400 p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between relative group hover:shadow-xl hover:shadow-neutral-200/50"
          >
            {/* Architectural Index Header */}
            <div>
              <div className="flex items-center justify-between border-b border-neutral-200 pb-5 mb-8">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FB6C00]" />
                  <span className="font-mono text-xs font-bold text-neutral-900 tracking-wider">
                    TRACK 01 // BISNIS &amp; UMKM
                  </span>
                </div>
                <span className="font-mono text-xs text-neutral-500">
                  EFISIENSI &amp; SISTEM MANDIRI
                </span>
              </div>

              {/* Headline */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A0A0A] font-[var(--font-display)] mb-4 leading-tight">
                Software Kasir Kustom &amp; Website Kredibilitas Tinggi
              </h3>

              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-8">
                Untuk pengusaha yang lelah dengan selisih stok fisik, biaya sewa aplikasi kasir bulanan yang membengkak, dan ingin memiliki aset software mandiri 100%.
              </p>

              {/* Contrast Spec Ledger: The Reality vs The Nakami Engine */}
              <div className="space-y-3 mb-8">
                <div className="p-4 rounded-xl bg-white border border-neutral-200">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-rose-600 mb-2 flex items-center gap-1.5">
                    <X className="w-3.5 h-3.5" />
                    <span>Hambatan Operasional Umum</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Stok selisih tiap rekap manual malam, biaya SaaS per device naik tiap tambah outlet, dan kehilangan calon pembeli karena belum punya web berdomain resmi.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900 text-white border border-neutral-800">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FB6C00] mb-2 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#FB6C00]" />
                    <span>Rekayasa Nakami Studio</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Software POS milik Anda seutuhnya (0 biaya bulanan wajib), sinkronisasi stok real-time multi-outlet, print struk thermal, dan garansi bug aktif 30 hari.
                  </p>
                </div>
              </div>

              {/* Module Deliverable Codes */}
              <div className="flex flex-wrap items-center gap-2 mb-8 pt-4 border-t border-neutral-200">
                <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-white border border-neutral-200 text-neutral-700">
                  BIZ-01 Web Profil
                </span>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-white border border-neutral-200 text-neutral-700">
                  BIZ-02 POS Kasir
                </span>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-white border border-neutral-200 text-neutral-700">
                  BIZ-03 Booking Otomatis
                </span>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-white border border-neutral-200 text-neutral-700">
                  BIZ-04 ERP Mini
                </span>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={() => handleSelectTrack("biz")}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0A0A0A] hover:bg-neutral-800 text-white font-bold text-sm transition-all cursor-pointer shadow-sm group-hover:bg-[#FB6C00]"
              >
                <span>Buka Katalog Modul Bisnis</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href={createWhatsAppUrl(
                  "Halo Nakami Studio, saya pelaku usaha dan ingin konsultasi kebutuhan sistem bisnis saya..."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-neutral-100 border border-neutral-300 text-neutral-800 font-semibold text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#FB6C00]" />
                <span>Konsultasi WA</span>
              </a>
            </div>
          </div>

          {/* TRACK 02: MENTORING IT & SKRIPSI (Span 6) */}
          <div
            className="lg:col-span-6 rounded-3xl bg-[#FAFAFA] border border-neutral-200 hover:border-neutral-400 p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between relative group hover:shadow-xl hover:shadow-neutral-200/50"
          >
            {/* Architectural Index Header */}
            <div>
              <div className="flex items-center justify-between border-b border-neutral-200 pb-5 mb-8">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E73F1E]" />
                  <span className="font-mono text-xs font-bold text-neutral-900 tracking-wider">
                    TRACK 02 // MAHASISWA IT &amp; SKRIPSI
                  </span>
                </div>
                <span className="font-mono text-xs text-neutral-500">
                  MENTORING ETIS · ANTI-JOKI
                </span>
              </div>

              {/* Headline */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A0A0A] font-[var(--font-display)] mb-4 leading-tight">
                Bedah Logika Kode 1-on-1 &amp; Simulasi Sidang Etis
              </h3>

              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-8">
                Untuk mahasiswa IT yang stuck berhari-hari pada satu bug error, bingung normalisasi tabel database, dan ingin menguasai alur program agar percaya diri menghadapi dosen penguji.
              </p>

              {/* Contrast Spec Ledger */}
              <div className="space-y-3 mb-8">
                <div className="p-4 rounded-xl bg-white border border-neutral-200">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-rose-600 mb-2 flex items-center gap-1.5">
                    <X className="w-3.5 h-3.5" />
                    <span>Jalan Pintas Joki Tradisional</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Membeli kode gelap jadi tanpa paham cara kerjanya, panik saat dosen bertanya &apos;jelaskan baris 120&apos;, dan berisiko sanksi pembatalan skripsi / drop-out.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900 text-white border border-neutral-800">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#F9B637] mb-2 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#F9B637]" />
                    <span>Metodologi Mentoring Nakami</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Live screen-share debugging 1-on-1, bedah alur algoritma dan REST API hingga paham 100%, rekaman video sesi, serta simulasi sidang skripsi realistis.
                  </p>
                </div>
              </div>

              {/* Module Deliverable Codes */}
              <div className="flex flex-wrap items-center gap-2 mb-8 pt-4 border-t border-neutral-200">
                <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-white border border-neutral-200 text-neutral-700">
                  EDU-01 Live Debugging
                </span>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-white border border-neutral-200 text-neutral-700">
                  EDU-02 Database &amp; API
                </span>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-white border border-neutral-200 text-neutral-700">
                  EDU-03 Simulasi Sidang
                </span>
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-[#E73F1E]">
                  Prinsip Anti-Joki
                </span>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={() => handleSelectTrack("edu")}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0A0A0A] hover:bg-neutral-800 text-white font-bold text-sm transition-all cursor-pointer shadow-sm group-hover:bg-[#E73F1E]"
              >
                <span>Buka Paket Mentoring IT</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href={createWhatsAppUrl(
                  "Halo Nakami Studio, saya mahasiswa IT dan butuh mentoring etis untuk tugas akhir saya..."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-neutral-100 border border-neutral-300 text-neutral-800 font-semibold text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#FB6C00]" />
                <span>Konsultasi Mentor</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
