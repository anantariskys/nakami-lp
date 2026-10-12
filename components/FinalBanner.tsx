"use client";

import React from "react";
import { createWhatsAppUrl } from "@/lib/constants";
import { MessageCircle, ShieldCheck, Clock, Lock, ArrowRight } from "lucide-react";

export function FinalBanner() {
  return (
    <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-900 text-white p-8 sm:p-14 border border-slate-800 shadow-lg text-center relative overflow-hidden">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800 border border-slate-700 text-xs font-mono font-medium text-slate-300 mb-6">
            <span>KONSULTASI AWAL TEPAT SASARAN</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-[var(--font-display)] mb-6 max-w-3xl mx-auto leading-[1.15]">
            Mulai rancang sistem Anda atau tuntaskan kode skripsi hari ini.
          </h2>

          {/* Subtitle */}
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Gunakan sesi diskusi 15 menit untuk memetakan kendala sistem operasional atau error teknis yang sedang dihadapi. Kami bantu berikan rekomendasi solusi tanpa kewajiban memesan paket.
          </p>

          {/* WhatsApp CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href={createWhatsAppUrl(
                "Halo Nakami Studio, saya ingin konsultasi 15 menit untuk membahas kendala sistem bisnis / skripsi IT..."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#FB6C00] hover:bg-[#E73F1E] text-white font-bold text-base transition-colors shadow-sm"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Jadwalkan Diskusi via WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* 3 Guarantees */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-800 text-xs font-mono text-slate-400">
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Diskusi Awal Tanpa Biaya</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-[#FB6C00] shrink-0" />
              <span>Respons Cepat & Solutif</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Lock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Kerahasiaan Source Code Terjaga</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
