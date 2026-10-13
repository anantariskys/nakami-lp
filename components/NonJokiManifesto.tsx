"use client";

import React from "react";
import { createWhatsAppUrl } from "@/lib/constants";
import {
  ShieldCheck,
  ArrowRight,
  BookOpen,
  Award,
  MessageCircle,
  GraduationCap,
} from "lucide-react";

interface NonJokiManifestoProps {
  embedded?: boolean;
}

export function NonJokiManifesto({ embedded = false }: NonJokiManifestoProps) {
  const content = (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Warm Editorial Showcase Card */}
      <div className="rounded-[32px] sm:rounded-[44px] bg-gradient-to-br from-[#FFFBEB] via-[#FFFDF5] to-white border border-amber-200 p-7 sm:p-11 lg:p-14 shadow-xs relative overflow-hidden">
        
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-200 text-xs font-mono font-bold text-amber-900 mb-6 shadow-2xs">
          <ShieldCheck className="w-4 h-4 text-amber-700" />
          <span>PRINSIP INTEGRITAS &amp; MENTORING ETIS</span>
        </div>

        {/* Headline & Mission Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12">
          <div className="lg:col-span-8">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950 font-[var(--font-display)] leading-[1.18] mb-5">
              Lulus sidang dengan menguasai setiap baris kode,{" "}
              <span className="text-[#FB6C00]">bukan menanggung risiko</span> hasil joki.
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              Jasa joki menawarkan jalan pintas kode instan, namun meninggalkan Anda sendirian dan panik saat dicecar pertanyaan dosen penguji di ruang sidang. Di Nakami Studio, kami melatih logika, membedah struktur arsitektur, dan mengawal mental Anda agar mampu mempertahankan karya sendiri dengan percaya diri.
            </p>
          </div>

          {/* Quote Box Commitment */}
          <div className="lg:col-span-4 bg-white/95 rounded-2xl border border-amber-200/80 p-5 sm:p-6 shadow-2xs">
            <div className="text-xs font-mono font-bold text-amber-800 uppercase tracking-wider mb-2">
              KOMITMEN NAKAMI STUDIO
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
              &quot;Kami tidak menjual kode instan joki. Kami mentransfer pemahaman logika rekayasa agar Anda tidak pernah takut menghadapi dosen penguji.&quot;
            </p>
            <div className="pt-3 border-t border-amber-100 flex items-center gap-2 text-xs font-semibold text-slate-900">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>100% Bebas Risiko Sanksi Akademik</span>
            </div>
          </div>
        </div>

        {/* 3 Pillars of Ethical Mentoring */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="rounded-2xl bg-white/95 border border-amber-200/60 p-6 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-950 mb-2 font-[var(--font-display)]">
                Paham Logika 100%
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Bukan hafalan sintaks buta. Kami bedah logika algoritma, alur query database, dan struktur API baris demi baris hingga Anda benar-benar paham.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white/95 border border-amber-200/60 p-6 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 text-[#FB6C00] flex items-center justify-center mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-950 mb-2 font-[var(--font-display)]">
                Simulasi Sidang &amp; Uji Mental
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Sebelum berhadapan dengan dosen penguji, kami lakukan sesi tanya-jawab intensif untuk melatih kelancaran argumen dan kesiapan mental Anda.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white/95 border border-amber-200/60 p-6 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-950 mb-2 font-[var(--font-display)]">
                Portofolio Nyata Industri
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Kode yang Anda bangun dengan bimbingan kami memiliki standar industri bersih, siap dijadikan portofolio nyata saat melamar kerja setelah lulus.
              </p>
            </div>
          </div>
        </div>

        {/* Action CTA & Forward Links */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pt-8 border-t border-amber-200/70">
          <div>
            <div className="text-sm font-bold text-slate-900">
              Stuck pada error atau bingung alur arsitektur tugas akhir?
            </div>
            <div className="text-xs text-slate-600">
              Konsultasikan kendala kode Anda via WhatsApp langsung bersama senior mentor.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={createWhatsAppUrl(
                "Halo Nakami Studio, saya mahasiswa IT dan butuh mentoring etis untuk tugas akhir/error koding..."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Jadwalkan Mentoring Etis</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#transparansi-biaya"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-xs sm:text-sm shadow-2xs transition-colors"
            >
              <span>Biaya Mentoring</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>

            <a
              href="#kalkulator-estimasi"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-xs sm:text-sm shadow-2xs transition-colors"
            >
              <span>Simulasi di Kalkulator</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );

  if (embedded) {
    return (
      <div id="manifesto-etis" className="scroll-mt-28 mt-14 sm:mt-16 pt-10 border-t border-slate-200/80">
        {content}
      </div>
    );
  }

  return (
    <section id="manifesto-etis" className="scroll-mt-28 py-20 sm:py-24 bg-white border-b border-slate-200/80">
      {content}
    </section>
  );
}