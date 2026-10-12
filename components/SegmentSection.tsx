"use client";

import React, { useState } from "react";
import {
  BIZ_SERVICES,
  EDU_SERVICES,
  PROBLEM_SOLUTION_DATA,
  createWhatsAppUrl,
} from "@/lib/constants";
import {
  Store,
  GraduationCap,
  XCircle,
  CheckCircle2,
  Clock,
  ArrowRight,
} from "lucide-react";

export function SegmentSection() {
  const [activeTab, setActiveTab] = useState<"biz" | "edu">("biz");

  const currentServices = activeTab === "biz" ? BIZ_SERVICES : EDU_SERVICES;
  const currentProblemSolution =
    activeTab === "biz" ? PROBLEM_SOLUTION_DATA.biz : PROBLEM_SOLUTION_DATA.edu;

  return (
    <section id="segment-overview" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-mono font-medium text-slate-700 mb-4 shadow-2xs">
            <span>KATALOG LAYANAN RESMI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-[var(--font-display)] mb-4">
            Dua fokus utama, satu standar kualitas rekayasa.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Pilih kategori layanan di bawah untuk meninjau solusi operasional bisnis atau pendampingan teknis mahasiswa IT.
          </p>
        </div>

        {/* Tab Switcher Controls */}
        <div className="flex justify-center mb-14">
          <div
            role="tablist"
            aria-label="Kategori Layanan Nakami"
            className="inline-flex p-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs max-w-md w-full"
          >
            <button
              role="tab"
              id="tab-biz"
              aria-selected={activeTab === "biz"}
              aria-controls="panel-biz"
              onClick={() => setActiveTab("biz")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-bold transition-all ${
                activeTab === "biz"
                  ? "bg-[#FB6C00] text-white shadow-2xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <Store className="w-4 h-4 shrink-0" />
              <span>Solusi Bisnis & UMKM</span>
            </button>

            <button
              role="tab"
              id="tab-edu"
              aria-selected={activeTab === "edu"}
              aria-controls="panel-edu"
              onClick={() => setActiveTab("edu")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-bold transition-all ${
                activeTab === "edu"
                  ? "bg-slate-900 text-white shadow-2xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <GraduationCap className="w-4 h-4 shrink-0" />
              <span>Mentoring IT & Skripsi</span>
            </button>
          </div>
        </div>

        {/* Anchor targets for direct linking */}
        <div id="layanan-bisnis" className="relative -top-24" />
        <div id="mentoring-it" className="relative -top-24" />

        {/* Concrete Comparison: Masalah vs Solusi Nyata */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card Masalah */}
          <div className="rounded-2xl border border-rose-200 bg-rose-50/40 p-6 sm:p-8">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded text-xs font-mono font-bold text-rose-700 bg-rose-100/80 mb-4">
              <XCircle className="w-4 h-4 text-rose-600" />
              <span>{currentProblemSolution.problemTag}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              {currentProblemSolution.problemTitle}
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              {currentProblemSolution.problemPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card Solusi */}
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-6 sm:p-8">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded text-xs font-mono font-bold text-emerald-800 bg-emerald-100/80 mb-4">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{currentProblemSolution.solutionTag}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              {currentProblemSolution.solutionTitle}
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              {currentProblemSolution.solutionPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Package Grid */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <h3 className="text-xl font-bold text-slate-900">
              {activeTab === "biz" ? "Pilihan Paket Rekayasa Web & Software" : "Pilihan Modul Mentoring Teknis"}
            </h3>
            <span className="text-xs font-mono text-slate-500">
              {currentServices.length} Paket Tersedia
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {currentServices.map((pkg) => (
              <div
                key={pkg.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-colors shadow-2xs"
              >
                <div>
                  {/* Top Badge & Code */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">
                      {pkg.code}
                    </span>
                    {pkg.badge && (
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-orange-50 text-[#C2410C] border border-orange-200">
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h4 className="text-xl font-bold text-slate-950 mb-2 leading-snug">
                    {pkg.title}
                  </h4>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    {pkg.subtitle}
                  </p>

                  {/* Pain Point Callout */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 mb-6">
                    <span className="font-bold text-slate-900 block mb-1">Kendala yang dituntaskan:</span>
                    <span>{pkg.painPointCallout}</span>
                  </div>

                  {/* Key Deliverables */}
                  <div className="mb-6 space-y-2.5">
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
                      Spesifikasi & Cakupan:
                    </div>
                    {pkg.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Info & WhatsApp CTA */}
                <div className="pt-6 border-t border-slate-100 mt-6 space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{pkg.timeline}</span>
                    </div>
                    <div className="font-bold text-slate-900 text-sm">
                      {pkg.startingPrice}
                    </div>
                  </div>

                  <a
                    href={createWhatsAppUrl(pkg.waTemplate)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-slate-900 hover:bg-[#FB6C00] text-white text-xs sm:text-sm font-semibold transition-colors"
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
