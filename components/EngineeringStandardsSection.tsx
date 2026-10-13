"use client";

import React from "react";
import {
  Code2,
  Lock,
  BookOpen,
  ShieldCheck,
  CheckCircle2,
  Compass,
  ArrowRight,
} from "lucide-react";

export function EngineeringStandardsSection() {
  const standards = [
    {
      icon: Code2,
      iconBg: "bg-[#2A1D18] text-[#FB6C00] border-[#FB6C00]/30",
      tag: "KUALITAS KODE",
      title: "100% Custom Code, Tanpa Template Pasaran",
      description:
        "Setiap baris kode ditulis khusus menggunakan Next.js, React, TypeScript, dan Tailwind CSS. Bersih dari plugin usang, bebas bloatware lambat, dan dibangun dengan struktur modular yang mudah dirawat.",
      metrics: [
        "Skor Google Lighthouse 95+ (Kecepatan & SEO)",
        "Struktur semantik ramah aksesibilitas (WCAG 2.1 AA)",
        "Arsitektur komponen modular dan scalable",
      ],
    },
    {
      icon: Lock,
      iconBg: "bg-[#182820] text-emerald-400 border-emerald-500/30",
      tag: "HAK KEPEMILIKAN",
      title: "Full Source Code Ownership, Bebas Biaya Bulanan",
      description:
        "Anda memiliki 100% repositori kode sumber dan skema database secara penuh. Bebas memilih hosting sendiri, bebas menambah kasir atau outlet tanpa tagihan sewa lisensi per perangkat setiap bulan.",
      metrics: [
        "Handover repositori Git privat dan kredensial lengkap",
        "0 biaya langganan bulanan wajib ke pihak studio",
        "Bebas vendor lock-in: sistem milik bisnis Anda seutuhnya",
      ],
    },
    {
      icon: BookOpen,
      iconBg: "bg-[#282218] text-amber-400 border-amber-500/30",
      tag: "INTEGRITAS EDUKASI",
      title: "Transfer Logika Baris Demi Baris (Bukan Kode Gelap Joki)",
      description:
        "Untuk mahasiswa IT, kami membimbing cara membaca error trace, mendesain normalisasi tabel, dan memahami fungsi setiap baris kode. Kami mendidik Anda menjadi engineer yang siap diuji di ruang sidang.",
      metrics: [
        "Sesi 1-on-1 screen-share privat via Google Meet",
        "Rekaman video sesi dikirimkan untuk dipelajari kembali",
        "100% bebas risiko sanksi plagiarisme atau drop out akademik",
      ],
    },
    {
      icon: ShieldCheck,
      iconBg: "bg-[#18202A] text-sky-400 border-sky-500/30",
      tag: "KEPASTIAN KERJA",
      title: "Fixed-Scope Agreement & Garansi 30 Hari Bebas Bug",
      description:
        "Daftar modul, tenggat waktu, dan biaya disepakati tertulis di awal sebelum penulisan kode dimulai. Setelah sistem diluncurkan, Anda dilindungi masa garansi aktif 30 hari untuk perbaikan bug tanpa biaya tambahan.",
      metrics: [
        "Dokumen spesifikasi modul tertulis tanpa biaya tersembunyi",
        "Masa uji coba staging demo sebelum pembayaran termin akhir",
        "Garansi perbaikan bug responsif 30 hari pascapeluncuran",
      ],
    },
  ];

  return (
    <section id="standar-kualitas" className="scroll-mt-28 py-20 sm:py-24 bg-[#17181C] border-b border-[#2E323B]">
      <div id="standar-rekayasa" className="scroll-mt-28 sr-only" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1C1E24] border border-[#2E323B] text-xs font-mono font-medium text-[#F9B637] mb-4 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-[#FB6C00]" />
            <span>STANDAR REKAYASA · THE NAKAMI STANDARD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-[var(--font-display)] mb-4">
            Fondasi rekayasa kami di setiap baris kode.
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed">
            Apapun jalur yang Anda pilih, kualitas eksekusi kami berpijak pada empat standar kerja studio yang tidak pernah kami kompromikan.
          </p>
        </div>

        {/* 4 Standards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8">
          {standards.map((std, idx) => {
            const Icon = std.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-[#1C1E24] border border-[#2E323B] hover:border-[#FB6C00]/50 p-7 sm:p-9 shadow-md hover:shadow-glow-warm/10 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top: Icon & Tag */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 ${std.iconBg}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#242730] text-[#CBD5E1] border border-[#2E323B]">
                      {std.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-[var(--font-display)] leading-snug">
                    {std.title}
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {std.description}
                  </p>
                </div>

                {/* Metrics / Verified Items */}
                <div className="pt-5 border-t border-[#2E323B] space-y-2.5">
                  {std.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="flex items-start gap-2.5 text-xs text-[#CBD5E1]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-medium">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Forward Transition Banner to Service Catalog */}
        <div className="mt-14 pt-8 border-t border-[#2E323B] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-sm font-bold text-white">
              Siap melihat modul spesifik untuk bisnis Anda atau paket bimbingan IT?
            </div>
            <div className="text-xs text-[#94A3B8]">
              Pilih modul aplikasi siap rilis atau jadwalkan sesi live code review bersama engineer.
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3">
            <a
              href="#layanan-bisnis"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(
                    new CustomEvent("nakami:switch-track", { detail: { track: "biz" } })
                  );
                }
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FB6C00] to-[#E73F1E] text-[#121316] font-bold text-xs sm:text-sm shadow-glow-warm hover:brightness-110 transition-all cursor-pointer"
            >
              <span>Katalog Modul Bisnis</span>
              <ArrowRight className="w-4 h-4 text-[#121316]" />
            </a>
            <a
              href="#mentoring-it"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(
                    new CustomEvent("nakami:switch-track", { detail: { track: "edu" } })
                  );
                }
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#242730] hover:bg-[#2C303B] border border-[#2E323B] text-white font-semibold text-xs sm:text-sm shadow-sm transition-colors cursor-pointer"
            >
              <span>Paket Mentoring IT</span>
              <ArrowRight className="w-4 h-4 text-[#94A3B8]" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
