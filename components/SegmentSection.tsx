"use client";

import React, { useState } from "react";
import {
  BIZ_SERVICES,
  EDU_SERVICES,
  PROBLEM_SOLUTION_DATA,
  createWhatsAppUrl,
  type ServicePackage,
} from "@/lib/constants";
import {
  Building2,
  GraduationCap,
  XCircle,
  CheckCircle2,
  Clock,
  Laptop,
  ArrowRight,
  Sparkles,
  Layers,
} from "lucide-react";

export function SegmentSection() {
  const [activeSegment, setActiveSegment] = useState<"biz" | "edu">("biz");

  const currentProblemSolution =
    activeSegment === "biz" ? PROBLEM_SOLUTION_DATA.biz : PROBLEM_SOLUTION_DATA.edu;

  const currentServices = activeSegment === "biz" ? BIZ_SERVICES : EDU_SERVICES;

  return (
    <section id="segment-overview" className="py-20 md:py-28 bg-[#17181C] relative">
      {/* Decorative background glow */}
      <div
        className="absolute bottom-10 right-10 w-96 h-96 bg-[#FB6C00]/5 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1E24] border border-[#2E323B] text-xs font-mono text-[#F9B637] mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>LAYANAN KAMI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-[var(--font-display)] mb-4">
            Layanan Terarah untuk Pelaku Usaha{" "}
            <span className="text-sunset-gradient">
              dan Mahasiswa IT.
            </span>
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg">
            Pilih kategori di bawah untuk melihat rincian masalah yang kami selesaikan dan estimasi biaya pengerjaannya.
          </p>
        </div>

        {/* Segment Switcher Tab Controls */}
        <div className="flex justify-center mb-16">
          <div
            role="tablist"
            aria-label="Pilihan Kategori Layanan"
            className="inline-flex p-1.5 rounded-2xl bg-[#121316] border border-[#2E323B] shadow-lg max-w-xl w-full"
          >
            <button
              role="tab"
              id="tab-biz"
              aria-selected={activeSegment === "biz"}
              aria-controls="panel-biz-content"
              onClick={() => setActiveSegment("biz")}
              className={`flex-1 flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-sm sm:text-base font-bold transition-all duration-200 ${
                activeSegment === "biz"
                  ? "bg-cta-gradient text-white shadow-glow-warm scale-[1.01]"
                  : "text-[#94A3B8] hover:text-white hover:bg-[#1C1E24]/60"
              }`}
            >
              <Building2 className="w-5 h-5 shrink-0" />
              <span>Solusi Bisnis & UMKM</span>
            </button>

            <button
              role="tab"
              id="tab-edu"
              aria-selected={activeSegment === "edu"}
              aria-controls="panel-edu-content"
              onClick={() => setActiveSegment("edu")}
              className={`flex-1 flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-sm sm:text-base font-bold transition-all duration-200 ${
                activeSegment === "edu"
                  ? "bg-cta-gradient text-white shadow-glow-warm scale-[1.01]"
                  : "text-[#94A3B8] hover:text-white hover:bg-[#1C1E24]/60"
              }`}
            >
              <GraduationCap className="w-5 h-5 shrink-0" />
              <span>Mentoring & Riset IT</span>
            </button>
          </div>
        </div>

        {/* SECTION: PROBLEM VS SOLUTION (Before vs After) */}
        <div id="problem-solution" className="mb-24 scroll-mt-28">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#94A3B8]">
              {activeSegment === "biz"
                ? "TRANSFORMASI OPERASIONAL BISNIS"
                : "TRANSFORMASI AKADEMIS & SKILL CODING"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Komparasi Sebelum & Sesudah Nakami Studio
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* BEFORE Card (Red Dashed Border) */}
            <div className="rounded-2xl bg-[#1C1E24]/70 border-2 border-dashed border-[#C33736]/60 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#C33736]/15 border border-[#C33736]/30 text-xs font-bold font-mono text-[#EF4444] mb-4">
                  <XCircle className="w-4 h-4" />
                  <span>{currentProblemSolution.problemTag}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-4 leading-snug">
                  {currentProblemSolution.problemTitle}
                </h4>
                <ul className="space-y-3.5 mb-6">
                  {currentProblemSolution.problemPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#94A3B8]">
                      <XCircle className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-[#2E323B] text-xs text-[#64748B] font-mono">
                Dampak: Waktu dan energi terbuang sia-sia setiap hari.
              </div>
            </div>

            {/* AFTER Card (Warm Tech Glow + 6px Orange Accent Strip) */}
            <div className="rounded-2xl bg-[#1C1E24] border border-[#FB6C00]/40 p-6 sm:p-8 flex flex-col justify-between shadow-glow-card relative overflow-hidden pl-8 sm:pl-10">
              {/* 6px Orange Gradient Accent Strip on the left edge */}
              <div
                className="absolute left-0 top-0 bottom-0 w-2 sm:w-2.5 bg-strip-gradient"
                aria-hidden="true"
              />

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-xs font-bold font-mono text-emerald-400 mb-4">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{currentProblemSolution.solutionTag}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-4 leading-snug">
                  {currentProblemSolution.solutionTitle}
                </h4>
                <ul className="space-y-3.5 mb-6">
                  {currentProblemSolution.solutionPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-[#2E323B] text-xs text-[#F9B637] font-mono font-medium flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Hasil: Alur kerja rapi dan data tercatat otomatis.</span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION: SERVICES CATALOG GRID */}
        <div
          id={activeSegment === "biz" ? "services-biz" : "services-edu"}
          role="tabpanel"
          id-panel={activeSegment === "biz" ? "panel-biz-content" : "panel-edu-content"}
          className="scroll-mt-28"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#2E323B]">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#FB6C00]">
                {activeSegment === "biz" ? "KATALOG RESMI BIZ-01 S/D BIZ-04" : "KATALOG RESMI EDU-01 S/D EDU-03"}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {activeSegment === "biz"
                  ? "Paket Rekayasa Perangkat Lunak UMKM"
                  : "Program Mentoring & Edukasi Riset IT"}
              </h3>
            </div>
            <p className="text-xs text-[#94A3B8] font-mono mt-2 md:mt-0">
              *Ruang lingkup terdefinisi jelas, tanpa biaya tersembunyi
            </p>
          </div>

          <div
            className={`grid grid-cols-1 ${
              activeSegment === "biz" ? "lg:grid-cols-2" : "lg:grid-cols-3"
            } gap-6`}
          >
            {currentServices.map((service: ServicePackage) => (
              <div
                key={service.id}
                className="rounded-2xl bg-[#1C1E24] border border-[#2E323B] hover:border-[#FB6C00]/60 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-glow-card group"
              >
                <div>
                  {/* Top Bar: Code & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#121316] text-[#94A3B8] border border-[#2E323B]">
                      {service.code}
                    </span>
                    {service.badge && (
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FB6C00]/15 text-[#FB6C00] border border-[#FB6C00]/30">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-sm font-medium text-[#F9B637] mb-4">
                    {service.subtitle}
                  </p>

                  {/* Pain Point Callout */}
                  <div className="p-3 rounded-xl bg-[#121316] border-l-4 border-l-[#EF4444] border-t border-r border-b border-[#2E323B] mb-5 text-xs text-[#94A3B8]">
                    <span className="font-semibold text-white block mb-0.5">Kendala Sering Terjadi:</span>
                    {service.painPointCallout}
                  </div>

                  {/* Solution Summary */}
                  <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                    {service.solutionSummary}
                  </p>

                  {/* Bullet Benefits */}
                  <div className="mb-6">
                    <p className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-3">
                      Cakupan & Keunggulan:
                    </p>
                    <ul className="space-y-2.5">
                      {service.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer: Timeline, Price, Action */}
                <div className="pt-5 border-t border-[#2E323B] mt-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#94A3B8] mb-4">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#FB6C00]" />
                      <span>{service.timeline}</span>
                    </div>
                    {service.format && (
                      <div className="flex items-center gap-1.5">
                        <Laptop className="w-3.5 h-3.5 text-[#F9B637]" />
                        <span>{service.format}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span className="block text-[11px] text-[#64748B] font-mono">Estimasi Investasi:</span>
                      <span className="text-base font-bold text-white">{service.startingPrice}</span>
                    </div>

                    <a
                      href={createWhatsAppUrl(service.waTemplate)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#242730] hover:bg-cta-gradient text-white border border-[#3F4450] hover:border-transparent text-xs sm:text-sm font-semibold transition-all duration-200 group-hover:scale-105"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
