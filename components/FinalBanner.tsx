import React from "react";
import { createWhatsAppUrl } from "@/lib/constants";
import { MessageCircle, ShieldCheck, Clock, Lock, ArrowRight } from "lucide-react";

export function FinalBanner() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="rounded-3xl bg-gradient-to-b from-[#FFF7ED] via-[#FFFDFB] to-[#FFF7ED] border-2 border-[#FED7AA] p-8 sm:p-14 shadow-[0_24px_64px_-16px_rgba(251,108,0,0.12)] relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-orange-200/50 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
            aria-hidden="true"
          />

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight font-[var(--font-display)] mb-6 max-w-3xl mx-auto leading-tight">
            Ceritakan Kendala Sistem Bisnis atau{" "}
            <span className="text-sunset-gradient block sm:inline">
              Hambatan Skripsi Anda.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Gunakan sesi diskusi 15 menit untuk memetakan kendala sistem atau error teknis yang sedang Anda hadapi. Kami bantu berikan gambaran solusinya tanpa kewajiban memesan paket apa pun.
          </p>

          {/* WhatsApp CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href={createWhatsAppUrl(
                "Halo Nakami Studio, saya ingin konsultasi 15 menit untuk membahas kendala sistem/skripsi saya..."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-cta-gradient text-white font-extrabold text-base hover:opacity-95 shadow-md active:translate-y-px transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Jadwalkan Diskusi via WhatsApp</span>
              <ArrowRight className="w-4 h-4 opacity-80" />
            </a>
          </div>

          {/* 3 Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-amber-200/80 text-xs font-mono text-slate-700">
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-medium">Diskusi Awal Tanpa Biaya</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-[#FB6C00] shrink-0" />
              <span className="font-medium">Respons Terarah & Cepat</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Lock className="w-4 h-4 text-amber-700 shrink-0" />
              <span className="font-medium">Kerahasiaan Data & Kode Terjamin</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
