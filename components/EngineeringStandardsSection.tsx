"use client";

import React from "react";
import {
  Code2,
  Lock,
  BookOpen,
  ShieldCheck,
  CheckCircle2,
  Compass,
} from "lucide-react";

export function EngineeringStandardsSection() {
  const standards = [
    {
      icon: Code2,
      iconBg: "bg-orange-50 text-[#FB6C00] border-orange-200",
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
      iconBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
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
      iconBg: "bg-amber-50 text-amber-700 border-amber-200",
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
      iconBg: "bg-blue-50 text-blue-700 border-blue-200",
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
    <section id="standar-rekayasa" className="py-20 sm:py-24 bg-slate-50/50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono font-medium text-slate-700 mb-4 shadow-2xs">
            <Compass className="w-3.5 h-3.5 text-[#FB6C00]" />
            <span>STANDAR REKAYASA · THE NAKAMI STANDARD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-[var(--font-display)] mb-4">
            Fondasi rekayasa kami di setiap baris kode.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
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
                className="rounded-3xl bg-white border border-slate-200/90 hover:border-orange-200 p-7 sm:p-9 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top: Icon & Tag */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 ${std.iconBg}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {std.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-3 font-[var(--font-display)] leading-snug">
                    {std.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {std.description}
                  </p>
                </div>

                {/* Metrics / Verified Items */}
                <div className="pt-5 border-t border-slate-100 space-y-2.5">
                  {std.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-medium">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}