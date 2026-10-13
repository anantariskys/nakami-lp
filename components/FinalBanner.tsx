"use client";

import React from "react";
import { createWhatsAppUrl } from "@/lib/constants";
import { MessageCircle, ShieldCheck, Clock, Lock, ArrowUpRight } from "lucide-react";

export function FinalBanner() {
  return (
    <section className="py-20 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Warm Showcase Closing Card */}
        <div className="rounded-[32px] sm:rounded-[44px] bg-gradient-to-br from-[#FFFDFB] via-[#FFFBF6] to-orange-50/60 border border-orange-200/90 p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden shadow-xs">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-orange-100/90 border border-orange-200 text-xs font-mono font-bold text-orange-950 mb-6 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#FB6C00]" />
            <span>KONSULTASI AWAL 15 MENIT BEBAS BIAYA</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-[var(--font-display)] mb-6 max-w-3xl mx-auto leading-[1.15]">
            Siap memajukan sistem bisnis Anda atau{" "}
            <span className="text-[#FB6C00]">mengamankan kelulusan</span> skripsi?
          </h2>

          {/* Subheading */}
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Diskusikan kebutuhan proyek Anda langsung bersama tim engineer Nakami. Kami hitungkan spesifikasi, durasi pengerjaan, dan estimasi biaya secara transparan sebelum Anda memutuskan.
          </p>

          {/* Action Button Group */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
            <a
              href={createWhatsAppUrl(
                "Halo Nakami Studio, saya ingin konsultasi 15 menit via WhatsApp..."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#FB6C00] hover:bg-[#E73F1E] text-white font-bold text-base shadow-xs hover:shadow-sm transition-all active:translate-y-px"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Mulai Diskusi via WhatsApp</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>

            <a
              href="#kalkulator-estimasi"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-base transition-colors shadow-2xs"
            >
              <span>Hitung Estimasi Mandiri</span>
            </a>
          </div>

          {/* Trust Footnotes */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-600 font-medium pt-8 border-t border-orange-100">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#FB6C00]" />
              <span>Respons Cepat via WhatsApp</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Tanpa Biaya &amp; Tanpa Ikatan</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-slate-500" />
              <span>Kerahasiaan Ide Terjamin</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
