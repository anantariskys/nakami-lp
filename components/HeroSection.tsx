"use client";

import React from "react";
import Image from "next/image";
import { createWhatsAppUrl } from "@/lib/constants";
import {
  MessageCircle,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Code2,
  Zap,
  Sparkles,
  Lock,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Framed Hero Showcase Container */}
        <div className="relative rounded-[32px] sm:rounded-[44px] bg-gradient-to-b from-[#FFFDFB] via-[#FFFBF6] to-white border border-orange-100 p-6 sm:p-10 lg:p-14 shadow-xs overflow-hidden">
          
          {/* Subtle Technical Grid / Ambient Glow */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#FB6C00_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_70%,transparent_100%)]"
            aria-hidden="true"
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Value Proposition & Action Button Group */}
            <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
              
              {/* Studio Eyebrow Tag with Live Pulse Dot */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/70 text-xs font-mono font-medium text-orange-950 mb-6 shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FB6C00] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FB6C00]" />
                </span>
                <span>NAKAMI STUDIO · REKAYASA WEB BISNIS & MENTORING IT ETIS</span>
              </div>

              {/* Main Headline with Organic Hand-Drawn Highlight */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.12] mb-6 font-[var(--font-display)]">
                Bangun Sistem Bisnis{" "}
                <span className="relative inline-block whitespace-nowrap text-[#FB6C00]">
                  Teruji
                  {/* Organic hand-drawn SVG loop */}
                  <svg
                    className="absolute -inset-x-3 -inset-y-2 w-[calc(100%+1.5rem)] h-[calc(100%+1rem)] pointer-events-none text-[#FB6C00]"
                    viewBox="0 0 160 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M 12 32 C 18 12, 142 10, 148 28 C 152 44, 22 54, 16 36 C 14 26, 45 18, 85 18"
                      stroke="currentColor"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                , Kuasai Logika Kodemu Sendiri.
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl">
                Solusi rekayasa website profil dan aplikasi kasir operasional kustom untuk UMKM tanpa biaya langganan bulanan, serta bimbingan 1-on-1 bagi mahasiswa IT untuk memahami arsitektur dan menuntaskan kode tanpa jalan pintas joki.
              </p>

              {/* Action Button Group */}
              <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
                {/* Primary Button Group: WhatsApp Pill + Separate Circular Arrow Button */}
                <div className="inline-flex items-center gap-2">
                  <a
                    href={createWhatsAppUrl(
                      "Halo Nakami Studio, saya ingin konsultasi kebutuhan sistem bisnis / mentoring IT..."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-[#FB6C00] hover:bg-[#E73F1E] text-white font-bold text-sm sm:text-base shadow-xs hover:shadow-sm transition-all active:translate-y-px"
                  >
                    <MessageCircle className="w-5 h-5 shrink-0" />
                    <span>Mulai Konsultasi WhatsApp</span>
                  </a>

                  <a
                    href={createWhatsAppUrl(
                      "Halo Nakami Studio, saya ingin konsultasi langsung dengan engineer..."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition-colors shadow-2xs hover:shadow-xs shrink-0"
                    aria-label="Konsultasi langsung via tautan WhatsApp"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>

                {/* Secondary Pill Button */}
                <a
                  href="#kalkulator-estimasi"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-semibold text-sm sm:text-base transition-colors shadow-2xs"
                >
                  <span>Hitung Estimasi Proyek</span>
                </a>
              </div>

              {/* Trust Points Strip with Green Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-6 border-t border-orange-100/80 w-full text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium">100% Hak Milik Source Code</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium">Garansi 30 Hari Bebas Bug</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium">Mentoring Etis Bebas Joki</span>
                </div>
              </div>
            </div>

            {/* Right Column: Art-Directed Talent Showcase & Proof Cards */}
            <div className="lg:col-span-5 relative flex items-center justify-center w-full">
              
              {/* Organic Shape Backplate */}
              <div className="relative w-full max-w-[420px] aspect-4/5 sm:aspect-square flex items-center justify-center">
                
                {/* Radiant Halo Backplate with Subtle Blueprint Ring */}
                <div
                  className="absolute inset-4 rounded-[40px] sm:rounded-[52px] bg-gradient-to-tr from-amber-400/25 via-orange-500/20 to-rose-400/20 transform rotate-1 scale-105"
                  aria-hidden="true"
                />
                
                {/* Concentric Technical Dashed Blueprint Ring */}
                <div
                  className="absolute inset-2 rounded-full border border-dashed border-orange-300/60 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Main Subject Cutout Photo with Smooth Bottom Mask */}
                <div className="relative z-10 w-full h-full flex items-end justify-center overflow-hidden">
                  <Image
                    src="/images/female-coder-cutout.png"
                    alt="Talenta rekayasa software dan mentoring coding Nakami Studio"
                    width={460}
                    height={520}
                    priority
                    className="object-contain max-h-[92%] drop-shadow-md select-none"
                    style={{
                      maskImage:
                        "linear-gradient(to bottom, black 82%, transparent 100%)",
                      WebkitMaskImage:
                        "linear-gradient(to bottom, black 82%, transparent 100%)",
                    }}
                  />
                </div>

                {/* Floating Stat Card: 489+ Clients & Students */}
                <div className="absolute -top-3 sm:top-2 -right-2 sm:-right-4 z-20 rounded-2xl bg-white/95 backdrop-blur-md p-4 shadow-lg border border-orange-100 flex flex-col gap-2.5 max-w-[210px] transition-transform hover:-translate-y-1">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-3xl font-extrabold text-slate-950 font-[var(--font-display)] leading-none">
                      489+
                    </span>
                    <span className="w-7 h-7 rounded-full bg-orange-50 text-[#FB6C00] flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="text-[11px] font-semibold text-slate-600 leading-snug">
                    Pelaku Usaha &amp; Mahasiswa IT Terbantu
                  </div>

                  {/* Avatar Stack + Verified Indicator */}
                  <div className="flex items-center gap-2 pt-1 border-t border-slate-100">
                    <div className="flex -space-x-2 overflow-hidden">
                      <Image
                        src="/images/avatar-1.jpg"
                        alt="Klien Nakami"
                        width={24}
                        height={24}
                        className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover"
                      />
                      <Image
                        src="/images/avatar-2.jpg"
                        alt="Mahasiswa bimbingan Nakami"
                        width={24}
                        height={24}
                        className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover"
                      />
                      <Image
                        src="/images/avatar-3.jpg"
                        alt="Alumni mentoring Nakami"
                        width={24}
                        height={24}
                        className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover"
                      />
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      ✓ Teruji
                    </span>
                  </div>
                </div>

                {/* Floating Assurance Badge (Bottom Left) */}
                <div className="absolute -bottom-3 sm:bottom-3 -left-2 sm:-left-4 z-20 rounded-xl bg-white/95 backdrop-blur-md px-3.5 py-2.5 shadow-md border border-slate-200/80 flex items-center gap-2.5 max-w-[240px]">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold text-slate-900 leading-tight">
                      Garansi 30 Hari Bebas Bug
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      Full Source Code Terjamin
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* 4 Value Pillars Footer at the base of Hero */}
          <div className="mt-12 pt-8 border-t border-orange-100/80 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-orange-50 border border-orange-200 text-[#FB6C00] flex items-center justify-center shrink-0">
                <Code2 className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-slate-900">
                  100% Kustom
                </span>
                <span className="text-[11px] sm:text-xs text-slate-500">
                  Bukan template pasaran
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-slate-900">
                  Lighthouse 95+
                </span>
                <span className="text-[11px] sm:text-xs text-slate-500">
                  Optimasi kecepatan &amp; SEO
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-rose-50 border border-rose-200 text-[#E73F1E] flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-slate-900">
                  Mentoring Etis 1-on-1
                </span>
                <span className="text-[11px] sm:text-xs text-slate-500">
                  Bimbingan logika privat
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
                <Lock className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-slate-900">
                  Full Source Code
                </span>
                <span className="text-[11px] sm:text-xs text-slate-500">
                  Tanpa biaya langganan kaku
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
