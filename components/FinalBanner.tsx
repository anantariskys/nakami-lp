import React from "react";
import { createWhatsAppUrl } from "@/lib/constants";
import { MessageCircle, ShieldCheck, Clock, Lock } from "lucide-react";

export function FinalBanner() {
  return (
    <section className="py-20 md:py-28 bg-[#121316] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="rounded-3xl bg-gradient-to-b from-[#1C1E24] to-[#17181C] border border-[#2E323B] p-8 sm:p-14 shadow-card-subtle">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-[var(--font-display)] mb-6 max-w-3xl mx-auto leading-tight">
            Ceritakan Kendala Sistem Bisnis atau{" "}
            <span className="text-sunset-gradient">
              Hambatan Skripsi Anda.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-[#94A3B8] text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-cta-gradient text-white font-extrabold text-base hover:opacity-95 shadow-sm active:translate-y-px transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Jadwalkan Diskusi via WhatsApp</span>
            </a>
          </div>

          {/* 3 Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-[#2E323B] text-xs font-mono text-[#94A3B8]">
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Diskusi Awal Tanpa Biaya</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-[#FB6C00] shrink-0" />
              <span>Respons Terarah & Cepat</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Lock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Kerahasiaan Data & Kode Terjamin</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
