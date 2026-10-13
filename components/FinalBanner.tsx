"use client";

import React from "react";
import { createWhatsAppUrl } from "@/lib/constants";
import { MessageCircle, ShieldCheck, Clock, Lock, ArrowUpRight } from "lucide-react";

export function FinalBanner() {
  return (
    <section id="konsultasi-akhir" className="scroll-mt-28 py-20 sm:py-24 bg-[#121316] border-b border-[#2E323B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Warm Showcase Closing Card */}
        <div className="rounded-[32px] sm:rounded-[44px] bg-[#1C1E24] border border-[#2E323B] p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden shadow-lg">

          {/* Subtle warm ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(255, 87, 34, 0.10) 0%, rgba(245, 158, 11, 0.04) 50%, transparent 80%)",
            }}
          />
          
          {/* Eyebrow Pill */}
          <div className="relative inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#242730] border border-[#FB6C00]/30 text-xs font-mono font-bold text-[#F9B637] mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FB6C00]" />
            <span>KONSULTASI AWAL 15 MENIT BEBAS BIAYA</span>
          </div>

          {/* Heading */}
          <h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-[var(--font-display)] mb-6 max-w-3xl mx-auto leading-[1.15]">
            Siap memajukan sistem bisnis Anda atau{" "}
            <span className="bg-gradient-to-r from-[#FFDD9C] via-[#FB6C00] to-[#E73F1E] bg-clip-text text-transparent">mengamankan kelulusan</span> skripsi?
          </h2>

          {/* Subheading */}
          <p className="relative text-[#94A3B8] text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Diskusikan kebutuhan proyek Anda langsung bersama tim engineer Nakami. Kami hitungkan spesifikasi, durasi pengerjaan, dan estimasi biaya secara transparan sebelum Anda memutuskan.
          </p>

          {/* Action Button Group */}
          <div className="relative flex flex-wrap items-center justify-center gap-3.5 mb-10">
            <a
              href={createWhatsAppUrl(
                "Halo Nakami Studio, saya ingin konsultasi 15 menit via WhatsApp..."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#FB6C00] to-[#E73F1E] text-[#121316] font-bold text-base shadow-glow-warm hover:brightness-110 transition-all active:translate-y-px"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Mulai Diskusi via WhatsApp</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>

            <a
              href="#kalkulator-estimasi"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#242730] hover:bg-[#2C303B] border border-[#2E323B] text-white font-semibold text-base transition-colors shadow-sm"
            >
              <span>Hitung Estimasi Mandiri</span>
            </a>
          </div>

          {/* Trust Footnotes */}
          <div className="relative flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#94A3B8] font-medium pt-8 border-t border-[#2E323B]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#FB6C00]" />
              <span>Respons Cepat via WhatsApp</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Tanpa Biaya &amp; Tanpa Ikatan</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#94A3B8]" />
              <span>Kerahasiaan Ide Terjamin</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
