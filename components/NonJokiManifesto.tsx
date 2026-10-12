import React from "react";
import { createWhatsAppUrl } from "@/lib/constants";
import { ShieldCheck, GraduationCap, CheckCircle2, ArrowRight, Award } from "lucide-react";

export function NonJokiManifesto() {
  return (
    <section id="non-joki" className="py-20 md:py-28 bg-[#17181C] relative border-y border-[#2E323B] scroll-mt-24">
      {/* Background glow subtle amber */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/5 blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Banner Card */}
        <div className="rounded-3xl bg-[#1C1E24] border-2 border-amber-500/40 p-8 sm:p-12 shadow-[0_0_40px_-10px_rgba(249,182,55,0.15)] relative overflow-hidden">
          {/* Subtle watermark badge */}
          <div className="absolute -top-10 -right-10 text-amber-500/5 pointer-events-none select-none">
            <ShieldCheck className="w-80 h-80" />
          </div>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-xs font-mono font-bold text-amber-400 mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>KOMITMEN INTEGRITAS AKADEMIK // ZERO-TOLERANCE JOKI</span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-[var(--font-display)] mb-6 leading-tight">
            Kenapa Kami Menolak Jadi Joki Tugas?{" "}
            <span className="block text-sunset-gradient mt-1">
              Karena Kami Mau Kamu Lulus Sidang dengan Kepala Tegak.
            </span>
          </h2>

          {/* Manifesto Storytelling */}
          <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed mb-10 max-w-3xl">
            <p>
              Di luar sana, banyak jasa yang menawarkan klaim manis &quot;terima beres&quot; dengan kode hasil copy-paste yang rapuh.
              Akibatnya fatal: mahasiswa gemetar saat dosen penguji mematikan proyektor dan meminta menjelaskan logika di baris 140,
              atau terancam sanksi akademik karena terindikasi plagiarisme.
            </p>
            <p>
              Di Nakami Studio, kami memilih jalan yang berprinsip: <strong className="text-white font-semibold">Live Mentoring & Code Review 1-on-1</strong>.
              Kami mendampingi Anda membedah arsitektur, menemukan akar bug error, dan melatih simulasi sidang agar Anda menguasai
              setiap jengkal baris kodemu sendiri.
            </p>
          </div>

          {/* 3 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            <div className="p-5 rounded-2xl bg-[#121316] border border-[#2E323B] hover:border-amber-400/40 transition-colors">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 w-fit mb-3">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">100% Paham Mandiri</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Paham logika kode dari awal hingga akhir, siap menjawab pertanyaan penguji secara percaya diri dan ilmiah.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#121316] border border-[#2E323B] hover:border-emerald-400/40 transition-colors">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit mb-3">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Bebas Risiko Sanksi</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Tanpa kode bajakan atau skema curang. Portofolio tugas akhir Anda 100% etis, sah, dan membanggakan.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#121316] border border-[#2E323B] hover:border-[#FB6C00]/40 transition-colors">
              <div className="p-2.5 rounded-xl bg-[#FB6C00]/10 text-[#FB6C00] w-fit mb-3">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Bekal Karier Industri</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Kemampuan membaca error stack trace dan arsitektur database yang langsung menjadi nilai jual di dunia kerja tech.
              </p>
            </div>
          </div>

          {/* Quote & CTA */}
          <div className="pt-6 border-t border-[#2E323B] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-xs sm:text-sm text-[#F9B637] font-mono italic max-w-lg">
              &ldquo;Gelar sarjana IT Anda terlalu berharga untuk dipertaruhkan pada kode instan yang tidak Anda pahami.&rdquo;
            </div>

            <a
              href={createWhatsAppUrl(
                "Halo Nakami Studio, saya tertarik sesi Mentoring Coding Etis 1-on-1 (Anti-Joki)..."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#121316] font-bold text-sm transition-all shadow-[0_0_20px_rgba(249,182,55,0.3)] hover:scale-105 shrink-0"
            >
              <span>Jadwalkan Mentoring Etis</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
