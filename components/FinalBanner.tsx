"use client";

import React from "react";
import { MessageCircle, ArrowRight, ShieldCheck, Clock, Sparkles } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/constants";

export function FinalBanner() {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* High-Impact Architectural Banner Container */}
        <div className="rounded-3xl bg-[#0A0A0A] text-white p-10 sm:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
          
          {/* Subtle Halftone Grid Texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-15"
            style={{
              backgroundImage:
                "linear-gradient(to right, #FB6C00 1px, transparent 1px), linear-gradient(to bottom, #FB6C00 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
            aria-hidden="true"
          />

          {/* Warm Ambient Radial Glow */}
          <div
            className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(251,108,0,0.25)_0%,transparent_70%)] pointer-events-none blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            
            {/* Top Monospace Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-700 text-[#F9B637] text-xs font-mono tracking-widest uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-[#FB6C00] animate-pulse" />
              <span>MULAI DISKUSI TEKNIS SEKARANG</span>
            </div>

            {/* Giant Editorial Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-[var(--font-display)] leading-[1.12] mb-6 text-white">
              Cukup berkutat dengan bug &amp; sistem manual.{" "}
              <span className="bg-gradient-to-r from-[#FB6C00] via-[#E73F1E] to-[#F9B637] bg-clip-text text-transparent">
                Mari bangun arsitektur yang solid.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed">
              Konsultasikan kendala operasional kasir bisnis Anda atau diskusikan error kode tugas akhir Anda langsung dengan senior engineer Nakami Studio.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <a
                href={createWhatsAppUrl(
                  "Halo Nakami Studio, saya ingin konsultasi kebutuhan sistem bisnis / mentoring IT..."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 h-14 px-8 rounded-full bg-gradient-to-r from-[#FB6C00] to-[#E73F1E] text-white font-bold text-base hover:opacity-95 active:scale-95 shadow-xl transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Konsultasi Cepat via WhatsApp</span>
              </a>

              <a
                href="#kalkulator-estimasi"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 font-semibold text-base transition-colors"
              >
                <span>Hitung Estimasi Proyek</span>
                <ArrowRight className="w-4 h-4 text-neutral-400" />
              </a>
            </div>

            {/* Trust Footer Ledger */}
            <div className="pt-8 border-t border-neutral-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-neutral-400">
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-[#FB6C00]" />
                <span>RESPON DALAM &lt; 15 MENIT</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>15 MENIT AUDIT AWAL GRATIS</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FB6C00]" />
                <span>100% KEPEMILIKAN SOURCE CODE</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
