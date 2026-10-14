"use client";

import React from "react";
import {
  Code2,
  Database,
  ShieldCheck,
  Zap,
  CheckCircle2,
} from "lucide-react";

export function EngineeringStandardsSection() {
  const standards = [
    {
      index: "01",
      title: "Arsitektur Modular & Strict TypeScript",
      icon: Code2,
      tag: "CODE INTEGRITY",
      summary:
        "Kode dirancang dengan Clean Architecture dan type-safe menyeluruh. Tidak ada spaghetti code, tidak ada variabel misterius.",
      specs: [
        "TypeScript Strict Mode aktif tanpa kompromi 'any' serampangan",
        "Pemisahan tegas: Business Logic, Data Access, dan UI Components",
        "Format kode standar industri (ESLint + Prettier configuration)",
      ],
      impact:
        "Developer mana pun di masa depan bisa langsung membaca, memelihara, dan mengembangkan sistem tanpa perlu menebak logika.",
    },
    {
      index: "02",
      title: "Database Ternormalisasi & Zero Data Loss",
      icon: Database,
      tag: "PERSISTENCE & SECURITY",
      summary:
        "Skema database relasional (PostgreSQL / MySQL) dirancang dengan indexing optimal dan integritas data ACID.",
      specs: [
        "Normalisasi tabel (3NF) mencegah duplikasi data transaksi",
        "Automated migration schema (Prisma / Drizzle) terdokumentasi",
        "Proteksi terhadap SQL Injection dan sanitasi input mutlak",
      ],
      impact:
        "Data transaksi kasir, inventori stok, dan riwayat pesanan bisnis Anda terlindungi aman dan konsisten bahkan saat mati lampu mendadak.",
    },
    {
      index: "03",
      title: "Performa Tinggi & Lighthouse Score 95+",
      icon: Zap,
      tag: "PERFORMANCE BENCHMARK",
      summary:
        "Optimasi asset, server-side caching, dan bundle splitting untuk waktu muat halaman di bawah 1.5 detik.",
      specs: [
        "Next.js App Router dengan Server Components berdaya komputasi tinggi",
        "Image optimization otomatis WebP/AVIF berbobot minimal",
        "Core Web Vitals optimal: LCP < 1.8s, CLS < 0.05, FID < 80ms",
      ],
      impact:
        "Pelanggan tidak kabur karena web lambat, dan peringkat SEO Google bisnis Anda naik secara organik tanpa trik murahan.",
    },
    {
      index: "04",
      title: "Garansi Bug 30 Hari & 100% Hak Milik",
      icon: ShieldCheck,
      tag: "POST-DEPLOYMENT SLA",
      summary:
        "Anda memegang penuh seluruh source code, database, dan akun hosting. Kami mendampingi selama masa adaptasi operasional.",
      specs: [
        "Akses repositori GitHub private diserahkan 100% ke klien",
        "Garansi perbaikan bug dan cacat logika aktif selama 30 hari penuh",
        "Panduan SOP pengoperasian sistem dalam bentuk video & PDF ringkas",
      ],
      impact:
        "Bebas rasa was-was. Tidak ada keterikatan sepihak (vendor lock-in) atau biaya tebusan lisensi di kemudian hari.",
    },
  ];

  return (
    <section
      id="standar-kualitas"
      className="scroll-mt-24 py-24 sm:py-32 bg-white border-b border-neutral-200 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial 2-Column Split: Asymmetrical Awwwards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (Sticky Editorial Manifesto & Verified Metrics) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
            <div>
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#FB6C00] font-bold mb-3">
                <span>[ ARSITEKTUR // STANDAR REKAYASA ]</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight font-[var(--font-display)] leading-[1.12]">
                Kami menolak kode rapuh.
              </h2>
              <p className="mt-4 text-neutral-600 text-base leading-relaxed">
                Setiap baris kode yang meninggalkan editor kami harus lolos uji ketahanan. Bukan sekadar berjalan di layar pengembang, tapi siap bertahan di server produksi dan mudah dipahami manusia.
              </p>
            </div>

            {/* Architectural Data Matrix (Verified Benchmarks) */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-200">
              <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-neutral-200">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#0A0A0A] font-[var(--font-display)]">
                  98<span className="text-[#FB6C00]">+</span>
                </div>
                <div className="mt-1 text-xs font-mono text-neutral-500 uppercase tracking-wider">
                  LIGHTHOUSE PERF
                </div>
                <p className="mt-2 text-xs text-neutral-600 leading-normal">
                  Kecepatan muat kilat di jaringan mobile 4G Indonesia.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-neutral-200">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#0A0A0A] font-[var(--font-display)]">
                  0<span className="text-neutral-400">Rp</span>
                </div>
                <div className="mt-1 text-xs font-mono text-neutral-500 uppercase tracking-wider">
                  BIAYA BULANAN KASIR
                </div>
                <p className="mt-2 text-xs text-neutral-600 leading-normal">
                  Milik Anda seutuhnya tanpa biaya langganan software wajib.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-neutral-200">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#0A0A0A] font-[var(--font-display)]">
                  100<span className="text-[#FB6C00]">%</span>
                </div>
                <div className="mt-1 text-xs font-mono text-neutral-500 uppercase tracking-wider">
                  KEPEMILIKAN KODE
                </div>
                <p className="mt-2 text-xs text-neutral-600 leading-normal">
                  Source code &amp; database diserahkan penuh ke tangan Anda.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-neutral-200">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#0A0A0A] font-[var(--font-display)]">
                  30<span className="text-[#E73F1E]">D</span>
                </div>
                <div className="mt-1 text-xs font-mono text-neutral-500 uppercase tracking-wider">
                  ACTIVE SLA GARANSI
                </div>
                <p className="mt-2 text-xs text-neutral-600 leading-normal">
                  Perbaikan bug operasional gratis 30 hari pasca live.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900 text-white flex items-center justify-between">
              <div className="text-xs">
                <div className="font-mono text-[#F9B637] font-semibold">ZERO TECHNICAL DEBT</div>
                <div className="text-neutral-400 mt-0.5">Sistem siap diaudit oleh tim IT eksternal</div>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            </div>
          </div>

          {/* Right Column (Numbered Architectural Specification Ledger) */}
          <div className="lg:col-span-7 space-y-6">
            {standards.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.index}
                  className="rounded-3xl bg-[#FAFAFA] border border-neutral-200 hover:border-neutral-400 p-6 sm:p-8 transition-all duration-200 hover:shadow-md"
                >
                  {/* Top Metadata Line */}
                  <div className="flex items-center justify-between border-b border-neutral-200 pb-4 mb-5">
                    <span className="font-mono text-xs font-bold text-[#FB6C00] tracking-widest">
                      {"//"} {item.index} — {item.tag}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-700">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Core Summary */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] font-[var(--font-display)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {item.summary}
                  </p>

                  {/* Technical Specs List */}
                  <div className="space-y-2 mb-6 p-4 rounded-2xl bg-white border border-neutral-200">
                    <div className="text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-wider mb-2">
                      SPESIFIKASI IMPLEMENTASI
                    </div>
                    {item.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2.5 text-xs text-neutral-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FB6C00] shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Real World Impact */}
                  <div className="pt-4 border-t border-neutral-200/60 flex items-start gap-2 text-xs text-neutral-500">
                    <span className="font-mono font-bold text-neutral-900 shrink-0">IMPACT:</span>
                    <span>{item.impact}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
