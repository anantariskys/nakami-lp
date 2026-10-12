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
} from "lucide-react";

export function SegmentSection() {
  const [activeSegment, setActiveSegment] = useState<"biz" | "edu">("biz");

  const currentProblemSolution =
    activeSegment === "biz" ? PROBLEM_SOLUTION_DATA.biz : PROBLEM_SOLUTION_DATA.edu;

  const currentServices = activeSegment === "biz" ? BIZ_SERVICES : EDU_SERVICES;

  return (
    <section id="segment-overview" className="py-20 md:py-28 bg-[#FAFAF9] relative border-b border-slate-200/80">
      {/* Subtle Warm Background Ambient */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-orange-100/40 to-transparent rounded-full blur-3xl opacity-70" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-amber-100/40 to-transparent rounded-full blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight font-[var(--font-display)] mb-4">
            Layanan Terarah untuk Pelaku Usaha{" "}
            <span className="text-sunset-gradient">
              dan Mahasiswa IT.
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Pilih kategori di bawah untuk meninjau kendala operasional yang kami tuntaskan dan rincian spesifikasi teknisnya.
          </p>
        </div>

        {/* Segment Switcher Tab Controls */}
        <div className="flex justify-center mb-16">
          <div
            role="tablist"
            aria-label="Pilihan Kategori Layanan"
            className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm max-w-xl w-full"
          >
            <button
              role="tab"
              id="tab-biz"
              aria-selected={activeSegment === "biz"}
              aria-controls="panel-biz-content"
              onClick={() => setActiveSegment("biz")}
              className={`flex-1 flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-sm sm:text-base font-bold transition-all duration-200 ${
                activeSegment === "biz"
                  ? "bg-cta-gradient text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
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
                  ? "bg-cta-gradient text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <GraduationCap className="w-5 h-5 shrink-0" />
              <span>Mentoring & Riset IT</span>
            </button>
          </div>
        </div>

        {/* SECTION: PROBLEM VS SOLUTION (Diagnostic Comparison) */}
        <div id="problem-solution" className="mb-24 scroll-mt-28">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C2410C] font-bold">
              {activeSegment === "biz"
                ? "DIAGNOSTIK OPERASIONAL BISNIS"
                : "DIAGNOSTIK AKADEMIS & SKILL CODING"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mt-1">
              Komparasi Sebelum & Sesudah Nakami Studio
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* BEFORE Card (Diagnostic Pain Points) */}
            <div className="rounded-2xl bg-white border border-rose-200/80 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-sm">
              <div className="absolute top-0 left-0 right-0 h-1 bg-rose-400" />
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-50 border border-rose-200 text-xs font-bold font-mono text-rose-700 mb-4">
                  <XCircle className="w-4 h-4 text-rose-600" />
                  <span>{currentProblemSolution.problemTag}</span>
                </div>
                <h4 className="text-xl font-bold text-[#0F172A] mb-4 leading-snug">
                  {currentProblemSolution.problemTitle}
                </h4>
                <ul className="space-y-3.5 mb-6">
                  {currentProblemSolution.problemPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 font-mono">
                Dampak: Waktu dan energi terbuang sia-sia setiap hari.
              </div>
            </div>

            {/* AFTER Card (Refined Solution) */}
            <div className="rounded-2xl bg-white border-2 border-[#FB6C00]/30 p-6 sm:p-8 flex flex-col justify-between shadow-[0_12px_36px_-8px_rgba(251,108,0,0.12)] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FB6C00] to-[#E73F1E]" />
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-xs font-bold font-mono text-emerald-700 mb-4">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{currentProblemSolution.solutionTag}</span>
                </div>
                <h4 className="text-xl font-bold text-[#0F172A] mb-4 leading-snug">
                  {currentProblemSolution.solutionTitle}
                </h4>
                <ul className="space-y-3.5 mb-6">
                  {currentProblemSolution.solutionPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-800 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs text-[#C2410C] font-mono font-medium flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FB6C00]" />
                <span>Hasil: Alur kerja rapi dan data tercatat otomatis.</span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION: SERVICES CATALOG GRID */}
        <div
          id={activeSegment === "biz" ? "services-biz" : "services-edu"}
          role="tabpanel"
          aria-labelledby={activeSegment === "biz" ? "tab-biz" : "tab-edu"}
          className="scroll-mt-28"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#C2410C] font-bold">
                {activeSegment === "biz" ? "KATALOG RESMI BIZ-01 S/D BIZ-04" : "KATALOG RESMI EDU-01 S/D EDU-03"}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-1">
                {activeSegment === "biz"
                  ? "Paket Rekayasa Perangkat Lunak UMKM"
                  : "Program Mentoring & Edukasi Riset IT"}
              </h3>
            </div>
            <p className="text-xs text-slate-500 font-mono mt-2 md:mt-0">
              *Ruang lingkup terdefinisi jelas, tanpa biaya tersembunyi
            </p>
          </div>

          <div
            className={`grid grid-cols-1 ${
              activeSegment === "biz" ? "lg:grid-cols-2" : "lg:grid-cols-3"
            } gap-6 lg:gap-8`}
          >
            {currentServices.map((service: ServicePackage) => (
              <div
                key={service.id}
                className="rounded-2xl bg-white border border-slate-200/90 hover:border-[#FB6C00]/60 p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_-12px_rgba(251,108,0,0.12)] transition-all group"
              >
                <div>
                  {/* Top Bar: Code & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">
                      {service.code}
                    </span>
                    {service.badge && (
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-50 text-[#C2410C] border border-orange-200">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h4 className="text-xl font-bold text-[#0F172A] mb-2 group-hover:text-[#C2410C] transition-colors leading-snug">
                    {service.title}
                  </h4>
                  <p className="text-sm font-semibold text-[#EA580C] mb-4">
                    {service.subtitle}
                  </p>

                  {/* Pain Point Callout */}
                  <div className="p-3 rounded-xl bg-slate-50 border-l-4 border-l-rose-500 border-t border-r border-b border-slate-200 mb-5 text-xs text-slate-700">
                    <span className="font-bold text-[#0F172A] block mb-0.5">Kendala Sering Terjadi:</span>
                    {service.painPointCallout}
                  </div>

                  {/* Solution Summary */}
                  <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                    {service.solutionSummary}
                  </p>

                  {/* Bullet Benefits */}
                  <div className="mb-6">
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3 font-semibold">
                      Cakupan & Keunggulan:
                    </p>
                    <ul className="space-y-2.5">
                      {service.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer: Timeline, Price, Action */}
                <div className="pt-5 border-t border-slate-100 mt-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-600 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#FB6C00]" />
                      <span>{service.timeline}</span>
                    </div>
                    {service.format && (
                      <div className="flex items-center gap-1.5">
                        <Laptop className="w-3.5 h-3.5 text-amber-600" />
                        <span>{service.format}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span className="block text-[11px] text-slate-500 font-mono">Estimasi Investasi:</span>
                      <span className="text-base sm:text-lg font-extrabold text-[#0F172A]">{service.startingPrice}</span>
                    </div>

                    <a
                      href={createWhatsAppUrl(service.waTemplate)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-cta-gradient text-white text-xs sm:text-sm font-semibold transition-all active:translate-y-px shadow-sm hover:shadow"
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
