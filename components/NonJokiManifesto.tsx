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
      <div className="rounded-[32px] sm:rounded-[44px] bg-[#1C1E24] border border-[#2E323B] p-7 sm:p-11 lg:p-14 shadow-lg relative overflow-hidden">
        
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#242730] border border-[#F9B637]/30 text-xs font-mono font-bold text-[#F9B637] mb-6 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-[#F9B637]" />
          <span>PRINSIP INTEGRITAS &amp; MENTORING ETIS</span>
        </div>

        {/* Headline & Mission Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12">
          <div className="lg:col-span-8">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white font-[var(--font-display)] leading-[1.18] mb-5">
              Lulus sidang dengan menguasai setiap baris kode,{" "}
              <span className="bg-gradient-to-r from-[#FFDD9C] via-[#FB6C00] to-[#E73F1E] bg-clip-text text-transparent">bukan menanggung risiko</span> hasil joki.
            </h3>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed font-normal">
              Jasa joki menawarkan jalan pintas kode instan, namun meninggalkan Anda sendirian dan panik saat dicecar pertanyaan dosen penguji di ruang sidang. Di Nakami Studio, kami melatih logika, membedah struktur arsitektur, dan mengawal mental Anda agar mampu mempertahankan karya sendiri dengan percaya diri.
            </p>
          </div>

          {/* Quote Box Commitment */}
          <div className="lg:col-span-4 bg-[#17181C] rounded-2xl border border-[#2E323B] p-5 sm:p-6 shadow-sm">
            <div className="text-xs font-mono font-bold text-[#F9B637] uppercase tracking-wider mb-2">
              KOMITMEN NAKAMI STUDIO
            </div>
            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed italic mb-4">
              &quot;Kami tidak menjual kode instan joki. Kami mentransfer pemahaman logika rekayasa agar Anda tidak pernah takut menghadapi dosen penguji.&quot;
            </p>
            <div className="pt-3 border-t border-[#2E323B] flex items-center gap-2 text-xs font-semibold text-white">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>100% Bebas Risiko Sanksi Akademik</span>
            </div>
          </div>
        </div>

        {/* 3 Pillars of Ethical Mentoring */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="rounded-2xl bg-[#17181C] border border-[#2E323B] p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#242730] border border-[#2E323B] text-amber-400 flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-2 font-[var(--font-display)]">
                Paham Logika 100%
              </h4>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Bukan hafalan sintaks buta. Kami bedah logika algoritma, alur query database, dan struktur API baris demi baris hingga Anda benar-benar paham.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#17181C] border border-[#2E323B] p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#242730] border border-[#2E323B] text-[#FB6C00] flex items-center justify-center mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-2 font-[var(--font-display)]">
                Simulasi Sidang &amp; Uji Mental
              </h4>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Sebelum berhadapan dengan dosen penguji, kami lakukan sesi tanya-jawab intensif untuk melatih kelancaran argumen dan kesiapan mental Anda.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#17181C] border border-[#2E323B] p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#242730] border border-[#2E323B] text-emerald-400 flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-2 font-[var(--font-display)]">
                Portofolio Nyata Industri
              </h4>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Kode yang Anda bangun dengan bimbingan kami memiliki standar industri bersih, siap dijadikan portofolio nyata saat melamar kerja setelah lulus.
              </p>
            </div>
          </div>
        </div>

        {/* Action CTA & Forward Links */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pt-8 border-t border-[#2E323B]">
          <div>
            <div className="text-sm font-bold text-white">
              Stuck pada error atau bingung alur arsitektur tugas akhir?
            </div>
            <div className="text-xs text-[#94A3B8]">
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
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#FB6C00] to-[#E73F1E] text-[#121316] font-bold text-xs sm:text-sm shadow-glow-warm hover:brightness-110 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#121316]" />
              <span>Jadwalkan Mentoring Etis</span>
              <ArrowRight className="w-4 h-4 text-[#121316]" />
            </a>

            <a
              href="#transparansi-biaya"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#242730] hover:bg-[#2C303B] border border-[#2E323B] text-white font-semibold text-xs sm:text-sm shadow-sm transition-colors"
            >
              <span>Biaya Mentoring</span>
              <ArrowRight className="w-4 h-4 text-[#94A3B8]" />
            </a>

            <a
              href="#kalkulator-estimasi"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#242730] hover:bg-[#2C303B] border border-[#2E323B] text-white font-semibold text-xs sm:text-sm shadow-sm transition-colors"
            >
              <span>Simulasi di Kalkulator</span>
              <ArrowRight className="w-4 h-4 text-[#94A3B8]" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );

  if (embedded) {
    return (
      <div id="manifesto-etis" className="scroll-mt-28 mt-14 sm:mt-16 pt-10 border-t border-[#2E323B]">
        {content}
      </div>
    );
  }

  return (
    <section id="manifesto-etis" className="scroll-mt-28 py-20 sm:py-24 bg-[#121316] border-b border-[#2E323B]">
      {content}
    </section>
  );
}
