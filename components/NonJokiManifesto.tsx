"use client";

import React from "react";
import {
  CheckCircle2,
  XCircle,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { createWhatsAppUrl } from "@/lib/constants";

export function NonJokiManifesto() {
  return (
    <div
      id="manifesto-etis"
      className="scroll-mt-24 my-16 rounded-3xl bg-[#0A0A0A] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl"
    >
      {/* Subtle technical background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, #FB6C00 1px, transparent 1px), linear-gradient(to bottom, #FB6C00 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      {/* Warm accent glow */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 bg-[radial-gradient(circle,rgba(231,63,30,0.25)_0%,transparent_70%)] pointer-events-none blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Top Ethical Charter Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-800 pb-6 mb-8 sm:mb-12">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E73F1E] animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#F9B637]">
              PIAGAM INTEGRITAS AKADEMIK // ZERO-JOKI PLEDGE
            </span>
          </div>
          <div className="font-mono text-xs text-neutral-400">
            DOKUMEN ETIKA REKAYASA NAKAMI
          </div>
        </div>

        {/* Massive Editorial Headline */}
        <div className="mb-10 sm:mb-14">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-[var(--font-display)] leading-[1.15] text-white">
            Kami Menolak Jual Beli Joki Kodingan.{" "}
            <span className="bg-gradient-to-r from-[#FB6C00] via-[#E73F1E] to-[#F9B637] bg-clip-text text-transparent">
              Kami Mentransfer Daya Pikir Rekayasa.
            </span>
          </h3>
          <p className="mt-5 text-neutral-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Membeli kode jadi untuk skripsi atau tugas akhir adalah ilusi kenyamanan yang membahayakan masa depan Anda. Di Nakami Studio, Anda bukan penonton pasif — Anda adalah pencipta sistem Anda sendiri.
          </p>
        </div>

        {/* 2-Column High-Contrast Ethical Contrast Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          
          {/* Column A: Jasa Joki Gelap */}
          <div className="rounded-2xl bg-neutral-900/90 border border-rose-900/40 p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-5">
              <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase">
                <XCircle className="w-4 h-4 text-rose-500" />
                <span>Jasa Joki Gelap Tradisional</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950/60 text-rose-400 border border-rose-900/50">
                HIGH RISK
              </span>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-neutral-300">
              <li className="flex items-start gap-3">
                <span className="text-rose-500 font-bold mt-0.5">—</span>
                <div>
                  <strong className="text-white block mb-0.5">Kode Misterius Tanpa Pemahaman:</strong>
                  Mendapatkan file zip jadi tanpa tahu cara kerjanya. Saat dosen meminta ganti algoritma di tempat, Anda membeku.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-500 font-bold mt-0.5">—</span>
                <div>
                  <strong className="text-white block mb-0.5">Ancaman Integritas &amp; Drop-Out:</strong>
                  Plagiarisme kode dapat berujung pembatalan skripsi, penundaan wisuda 1 tahun, hingga sanksi pemecatan akademis.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-500 font-bold mt-0.5">—</span>
                <div>
                  <strong className="text-white block mb-0.5">Kegagalan saat User Interview:</strong>
                  Lulus dengan nilai semu, namun langsung gugur saat live-coding test di perusahaan teknologi karena nol fondasi logika.
                </div>
              </li>
            </ul>
          </div>

          {/* Column B: Nakami Studio Mentoring */}
          <div className="rounded-2xl bg-neutral-900/90 border border-amber-500/30 p-6 sm:p-8 relative">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-5">
              <div className="flex items-center gap-2 text-[#F9B637] font-mono text-xs font-bold uppercase">
                <CheckCircle2 className="w-4 h-4 text-[#FB6C00]" />
                <span>Mentoring Etis Nakami Studio</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/60 text-[#F9B637] border border-amber-700/50">
                100% ETHICAL
              </span>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-neutral-300">
              <li className="flex items-start gap-3">
                <span className="text-[#FB6C00] font-bold mt-0.5">✓</span>
                <div>
                  <strong className="text-white block mb-0.5">Live Screen-Share 1-on-1:</strong>
                  Mentor membedah struktur database, REST API, dan logika algoritma langsung di layar Anda. Anda yang mengetik kodenya.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FB6C00] font-bold mt-0.5">✓</span>
                <div>
                  <strong className="text-white block mb-0.5">Simulasi Sidang Skripsi Realistis:</strong>
                  Mentor bertindak sebagai dosen penguji kritis, melatih Anda menjawab &apos;Mengapa pakai arsitektur ini?&apos; secara ilmiah.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FB6C00] font-bold mt-0.5">✓</span>
                <div>
                  <strong className="text-white block mb-0.5">Rekaman Video Sesi Belajar:</strong>
                  Setiap menit sesi mentoring direkam khusus untuk Anda putar ulang berulang kali sebelum hari-H ujian sidang.
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Pledge Callout & Consultation Action */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-xs text-neutral-400">
            <ShieldCheck className="w-8 h-8 text-[#FB6C00] shrink-0" />
            <div>
              <p className="font-semibold text-white">Garansi Kerahasiaan &amp; Hak Cipta Skripsi Anda</p>
              <p>Topik riset dan kode Anda aman 100%. Tidak pernah disebar atau dipublikasikan ulang.</p>
            </div>
          </div>

          <a
            href={createWhatsAppUrl(
              "Halo Nakami Studio, saya mahasiswa IT ingin bimbingan tugas akhir dengan prinsip etis anti-joki..."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FB6C00] to-[#E73F1E] text-white font-bold text-sm hover:opacity-95 shadow-lg active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Mulai Mentoring Skripsi Sekarang</span>
          </a>
        </div>

      </div>
    </div>
  );
}
