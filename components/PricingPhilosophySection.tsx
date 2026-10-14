"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

export function PricingPhilosophySection() {
  const principles = [
    {
      num: "01",
      title: "Audit Teknis Awal 15 Menit",
      desc: "Sebelum sepeser pun uang muka dibayarkan, kami bedah diagram alur bisnis Anda untuk memastikan sistem benar-benar menyelesaikan masalah, bukan sekadar gaya-gayaan.",
      badge: "GRATIS & NON-BINDING",
    },
    {
      num: "02",
      title: "Kontrak Fixed-Scope Tertulis",
      desc: "Daftar fitur, batas modul, dan tanggal serah terima dikunci dalam dokumen hitam di atas putih. Tidak ada lonjakan tagihan mendadak di tengah proyek.",
      badge: "KEPASTIAN ANGGARAN",
    },
    {
      num: "03",
      title: "Protokol Change Request",
      desc: "Jika Anda ingin menambah fitur baru di tengah pengembangan, kami hitung estimasi jam kerja tambahannya secara transparan sebelum dikerjakan.",
      badge: "KONTROL PENUH",
    },
  ];

  const milestones = [
    {
      step: "TERMIN 01",
      pct: "50%",
      title: "Kickoff & Blueprint Arsitektur",
      desc: "Komitmen awal untuk memulai perancangan skema database, wireframe UI, dan inisialisasi server staging.",
      checklist: [
        "Desain skema database (ERD) tervalidasi",
        "Setup repositori private & CI/CD pipeline",
        "Prototipe antarmuka UI komponen utama",
      ],
    },
    {
      step: "TERMIN 02",
      pct: "30%",
      title: "Live Staging Demo & Uji Fungsional",
      desc: "Sistem sudah hidup di URL staging privat. Anda menguji langsung transaksi kasir, input data, dan alur operasional.",
      checklist: [
        "Aplikasi berfungsi penuh di server testing",
        "Klien mencoba alur transaksi secara nyata",
        "Iterasi revisi bug minor tahap fungsional",
      ],
    },
    {
      step: "TERMIN 03",
      pct: "20%",
      title: "Handover Penuh & Rilis Produksi",
      desc: "Penyerahan seluruh kredensial repositori, database produksi, setup domain resmi, dan pelatihan staf operasional.",
      checklist: [
        "Deployment ke domain resmi & server utama",
        "Serah terima 100% source code GitHub",
        "Masa garansi bug aktif 30 hari dimulai",
      ],
    },
  ];

  return (
    <section
      id="transparansi-biaya"
      className="scroll-mt-24 py-24 sm:py-32 bg-white border-b border-neutral-200 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#FB6C00] font-bold mb-3">
            <span>[ TATA KELOLA KONTRAK // 0 HIDDEN FEES ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight font-[var(--font-display)] leading-[1.12]">
            Tanpa jebakan harga di tengah jalan.
          </h2>
          <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed">
            Setiap rupiah yang Anda bayarkan terikat langsung dengan deliverable nyata yang bisa Anda uji dan sentuh secara objektif. Bukan sekadar janji estimasi.
          </p>
        </div>

        {/* 3 Core Principles: Architectural Ledger */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 sm:mb-20">
          {principles.map((item) => (
            <div
              key={item.num}
              className="rounded-3xl bg-[#FAFAFA] border border-neutral-200 p-8 flex flex-col justify-between hover:border-neutral-400 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between border-b border-neutral-200 pb-4 mb-6">
                  <span className="font-mono text-2xl font-extrabold text-neutral-300">
                    {item.num}
                  </span>
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-white border border-neutral-200 text-[#FB6C00] tracking-wider uppercase">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0A0A0A] font-[var(--font-display)] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Milestone Timeline Showcase: 3 Termin Pipeline */}
        <div className="rounded-3xl bg-[#FAFAFA] border border-neutral-200 p-8 sm:p-12 lg:p-14">
          <div className="border-b border-neutral-200 pb-6 mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xs font-bold text-[#FB6C00] tracking-wider uppercase">
                ALUR PEMBAYARAN PROYEK PENGEMBANGAN
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A0A0A] font-[var(--font-display)] mt-1">
                Protokol Termin 50 - 30 - 20 Berbasis Milestone
              </h3>
            </div>
            <div className="font-mono text-xs px-3 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-700 shrink-0 self-start sm:self-auto">
              PEMBAYARAN DICAIRKAN HANYA SETELAH BUKTI VERIFIKASI
            </div>
          </div>

          {/* 3 Step Pipeline Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {milestones.map((ms) => (
              <div
                key={ms.step}
                className="rounded-2xl bg-white border border-neutral-200 p-6 sm:p-8 flex flex-col justify-between relative shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-neutral-100 pb-4 mb-5">
                    <span className="font-mono text-xs font-bold text-neutral-500">
                      {ms.step}
                    </span>
                    <span className="text-2xl font-extrabold text-[#FB6C00] font-[var(--font-display)]">
                      {ms.pct}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-[#0A0A0A] font-[var(--font-display)] mb-2">
                    {ms.title}
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                    {ms.desc}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-neutral-100">
                    <div className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider mb-2">
                      CHECKPOINT PENCAIRAN:
                    </div>
                    {ms.checklist.map((check, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-neutral-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FB6C00] shrink-0 mt-0.5" />
                        <span>{check}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Clarification for Mentoring */}
          <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
            <span>
              * Catatan untuk Mentoring Mahasiswa IT: Pembayaran dilakukan per sesi atau per paket bimbingan sebelum jadwal mentoring dimulai.
            </span>
            <span className="text-neutral-900 font-bold shrink-0">
              100% REFUND JIKA SESI BATAL DARI PIHAK MENTOR
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
