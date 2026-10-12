import React from "react";
import { createWhatsAppUrl } from "@/lib/constants";
import { ShieldCheck, GraduationCap, CheckCircle2, ArrowRight, Award } from "lucide-react";

export function NonJokiManifesto() {
  return (
    <section id="non-joki" className="py-20 md:py-28 bg-[#17181C] relative border-y border-[#2E323B] scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Banner Card */}
        <div className="rounded-3xl bg-[#1C1E24] border border-amber-500/30 p-8 sm:p-12 shadow-card-subtle relative overflow-hidden">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-xs font-mono font-bold text-amber-400 mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>INTEGRITAS AKADEMIK · MENTORING ETIS</span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-[var(--font-display)] mb-6 leading-tight">
            Lulus Sidang dengan Paham Setiap Baris Kode,{" "}
            <span className="block text-sunset-gradient mt-1">
              Bukan Bergantung pada Hasil Joki.
            </span>
          </h2>

          {/* Manifesto Storytelling */}
          <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed mb-10 max-w-3xl">
            <p>
              Banyak jasa joki menawarkan klaim &quot;terima beres&quot; dengan kode tempelan.
              Saat dosen penguji meminta menjelaskan logika di baris tertentu, mahasiswa tidak bisa menjawab
              atau bahkan tersangkut masalah integritas dan sanksi akademik.
            </p>
            <p>
              Kami mendampingi lewat <strong className="text-white font-semibold">Live Mentoring & Code Review 1-on-1</strong>.
              Kami bantu membedah struktur database, menelusuri sumber error, dan latihan simulasi tanya-jawab agar Anda
              mengerti apa yang sedang Anda bangun secara menyeluruh.
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
                Paham alur logika program dari awal hingga akhir, siap menjawab pertanyaan penguji secara percaya diri dan ilmiah.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#121316] border border-[#2E323B] hover:border-emerald-400/40 transition-colors">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit mb-3">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Bebas Risiko Sanksi</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Tanpa kode bajakan atau skema curang. Portofolio tugas akhir Anda 100% etis, sah, dan dapat dipertanggungjawabkan.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#121316] border border-[#2E323B] hover:border-[#FB6C00]/40 transition-colors">
              <div className="p-2.5 rounded-xl bg-[#FB6C00]/10 text-[#FB6C00] w-fit mb-3">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Bekal Karier Industri</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Kemampuan membaca error stack trace dan arsitektur database yang langsung menjadi nilai jual nyata di industri software.
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#121316] font-bold text-sm transition-all shadow-sm active:translate-y-px shrink-0"
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
