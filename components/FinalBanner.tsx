import React from "react";
import { createWhatsAppUrl } from "@/lib/constants";
import { MessageCircle, ShieldCheck, Clock, Lock, Sparkles } from "lucide-react";

export function FinalBanner() {
  return (
    <section className="py-20 md:py-28 bg-[#121316] relative overflow-hidden">
      {/* Background radial gradient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] md:w-[900px] md:h-[450px] bg-gradient-to-r from-[#E73F1E]/20 via-[#FB6C00]/25 to-[#F9B637]/15 blur-[130px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="rounded-3xl bg-gradient-to-b from-[#1C1E24] to-[#17181C] border border-[#FB6C00]/40 p-8 sm:p-14 shadow-glow-warm">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121316] border border-[#2E323B] text-xs font-mono text-[#F9B637] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#FB6C00]" />
            <span>DISCOVERY CALL 15 MENIT BEBAS RISIKO</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-[var(--font-display)] mb-6 max-w-3xl mx-auto leading-tight">
            Siap Merapikan Sistem Bisnismu atau{" "}
            <span className="text-sunset-gradient">
              Menuntaskan Skripsimu Sekarang?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-[#94A3B8] text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Sesi 15 menit discovery call pertama bebas risiko. Ceritakan kendala operasional atau error yang Anda hadapi, dan kami tunjukkan peta jalan solusinya tanpa paksaan komitmen apa pun.
          </p>

          {/* WhatsApp CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href={createWhatsAppUrl(
                "Halo Nakami Studio, saya ingin klaim sesi discovery call 15 menit bebas risiko..."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-cta-gradient text-white font-extrabold text-base hover:opacity-95 shadow-glow-warm hover:scale-105 active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-amber-300"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Mulai Konsultasi Bebas Risiko</span>
            </a>
          </div>

          {/* 3 Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-[#2E323B] text-xs font-mono text-[#94A3B8]">
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>15 Menit Bebas Risiko</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-[#FB6C00] shrink-0" />
              <span>Respons Cepat &lt; 2 Jam</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Lock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>100% Kerahasiaan Data & Kode</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
