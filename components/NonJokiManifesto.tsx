import React from "react";
import Image from "next/image";
import { createWhatsAppUrl } from "@/lib/constants";
import { ShieldCheck, GraduationCap, CheckCircle2, ArrowRight, Award, Quote } from "lucide-react";

export function NonJokiManifesto() {
  return (
    <section id="non-joki" className="py-20 md:py-28 bg-[#FAFAF9] relative border-b border-slate-200/80 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Banner Card */}
        <div className="rounded-3xl bg-gradient-to-br from-[#FFFBEB] via-[#FFFDF5] to-[#FFFFFF] border border-amber-200/90 p-8 sm:p-12 lg:p-14 shadow-[0_20px_48px_-12px_rgba(245,158,11,0.12)] relative overflow-hidden">
          
          {/* Subtle Decorative Pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-25 -z-10"
            style={{
              backgroundImage: "radial-gradient(#F59E0B 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-10">
            {/* Left Content (Story & Headline) */}
            <div className="lg:col-span-7">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 text-xs font-mono font-bold text-amber-900 mb-6">
                <ShieldCheck className="w-4 h-4 text-amber-700" />
                <span>INTEGRITAS AKADEMIK · MENTORING ETIS</span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-[var(--font-display)] mb-6 leading-tight">
                Lulus Sidang dengan Paham Setiap Baris Kode,{" "}
                <span className="block text-sunset-gradient mt-1">
                  Bukan Bergantung pada Hasil Joki.
                </span>
              </h2>

              {/* Manifesto Storytelling */}
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Banyak jasa joki menawarkan klaim &quot;terima beres&quot; dengan kode tempelan.
                  Saat dosen penguji meminta menjelaskan logika di baris tertentu, mahasiswa gelagapan tidak bisa menjawab
                  atau bahkan tersangkut masalah integritas dan sanksi akademik fatal.
                </p>
                <p>
                  Di Nakami Studio, kami mendampingi lewat <strong className="text-slate-900 font-semibold">Live Mentoring & Code Review 1-on-1</strong>.
                  Kami bantu membedah struktur database, menelusuri sumber error, dan melatih simulasi tanya-jawab agar Anda
                  menguasai apa yang sedang Anda bangun secara menyeluruh.
                </p>
              </div>
            </div>

            {/* Right Visual (Realistic Student & Mentorship Context) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm rounded-2xl overflow-hidden shadow-[0_16px_36px_-8px_rgba(0,0,0,0.12)] border-2 border-amber-200/90 bg-white">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/student-coder-asian.jpg"
                    alt="Mahasiswa IT belajar memahami kode tugas akhir"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/90 backdrop-blur-md text-[11px] font-bold text-white mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>100% Karya Murni Mahasiswa</span>
                    </span>
                    <p className="text-xs font-medium text-slate-100">
                      Bimbingan pemahaman logika baris per baris hingga siap sidang.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            <div className="p-6 rounded-2xl bg-white border border-amber-200/80 hover:border-amber-400 transition-all shadow-sm">
              <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800 w-fit mb-3">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0F172A] mb-2">100% Paham Mandiri</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Paham alur logika program dari awal hingga akhir, siap menjawab pertanyaan penguji secara percaya diri dan ilmiah.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-emerald-200/80 hover:border-emerald-400 transition-all shadow-sm">
              <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800 w-fit mb-3">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0F172A] mb-2">Bebas Risiko Sanksi</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Tanpa kode bajakan atau skema curang. Portofolio tugas akhir Anda 100% etis, sah, dan dapat dipertanggungjawabkan.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-orange-200/80 hover:border-[#FB6C00] transition-all shadow-sm">
              <div className="p-2.5 rounded-xl bg-orange-100 text-[#C2410C] w-fit mb-3">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0F172A] mb-2">Bekal Karier Industri</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Kemampuan membaca error stack trace dan arsitektur database yang langsung menjadi nilai jual nyata di industri software.
              </p>
            </div>
          </div>

          {/* Quote & CTA */}
          <div className="pt-6 border-t border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-2.5 max-w-lg">
              <Quote className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-amber-950 font-medium italic">
                &ldquo;Gelar sarjana IT Anda terlalu berharga untuk dipertaruhkan pada kode instan yang tidak Anda pahami.&rdquo;
              </p>
            </div>

            <a
              href={createWhatsAppUrl(
                "Halo Nakami Studio, saya tertarik sesi Mentoring Coding Etis 1-on-1 (Anti-Joki)..."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-sm active:translate-y-px shrink-0 hover:shadow"
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
