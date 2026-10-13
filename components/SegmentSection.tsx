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
  MessageCircle,
} from "lucide-react";

export function SegmentSection() {
  const [activeTab, setActiveTab] = useState<"biz" | "edu">("biz");

  const currentServices = activeTab === "biz" ? BIZ_SERVICES : EDU_SERVICES;
  const currentProblemSolution =
    activeTab === "biz" ? PROBLEM_SOLUTION_DATA.biz : PROBLEM_SOLUTION_DATA.edu;

  return (
    <section id="segment-overview" className="py-20 sm:py-24 bg-slate-50/50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono font-medium text-slate-700 mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#FB6C00]" />
            <span>KATALOG LAYANAN & SPESIFIKASI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-[var(--font-display)] mb-4">
            Dua fokus utama, satu standar rekayasa presisi.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Pilih kategori layanan di bawah untuk melihat solusi sistem bisnis operasional atau pendampingan logika kode bagi mahasiswa IT.
          </p>
        </div>

        {/* Tab Switcher Controls */}
        <div className="flex justify-center mb-14">
          <div
            role="tablist"
            aria-label="Kategori Layanan Nakami Studio"
            className="inline-flex p-1.5 rounded-full bg-white border border-slate-200 shadow-2xs max-w-md w-full"
          >
            <button
              role="tab"
              id="tab-biz"
              aria-selected={activeTab === "biz"}
              aria-controls="panel-biz"
              onClick={() => setActiveTab("biz")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-full text-sm font-bold transition-all ${
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
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-full text-sm font-bold transition-all ${
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

        {/* Anchor targets for direct linking from nav */}
        <div id="layanan-bisnis" className="relative -top-28" />
        <div id="mentoring-it" className="relative -top-28" />

        {/* Concrete Comparison: Masalah vs Solusi Nyata */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card Masalah */}
          <div className="rounded-3xl border border-rose-200 bg-rose-50/40 p-6 sm:p-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold text-rose-700 bg-rose-100/90 mb-4">
              <XCircle className="w-4 h-4 text-rose-600" />
              <span>{currentProblemSolution.problemTag}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 font-[var(--font-display)]">
              {currentProblemSolution.problemTitle}
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              {currentProblemSolution.problemPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card Solusi */}
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50/40 p-6 sm:p-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold text-emerald-800 bg-emerald-100/90 mb-4">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{currentProblemSolution.solutionTag}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 font-[var(--font-display)]">
              {currentProblemSolution.solutionTitle}
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              {currentProblemSolution.solutionPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Service Package Cards Grid */}
        <div
          id={activeTab === "biz" ? "panel-biz" : "panel-edu"}
          role="tabpanel"
          aria-labelledby={activeTab === "biz" ? "tab-biz" : "tab-edu"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {currentServices.map((pkg) => (
            <div
              key={pkg.id}
              className="rounded-3xl bg-white border border-slate-200/90 hover:border-orange-200 p-6 sm:p-7 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top Header: Code Badge & Popularity Pill */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 border border-slate-200">
                    {pkg.code}
                  </span>
                  {pkg.badge && (
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-orange-50 text-[#FB6C00] border border-orange-200">
                      {pkg.badge}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-950 mb-2 leading-snug font-[var(--font-display)]">
                  {pkg.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                  {pkg.subtitle}
                </p>

                {/* Pain Point Callout */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 mb-5 italic">
                  &quot;{pkg.painPointCallout}&quot;
                </div>

                {/* Benefits List */}
                <div className="space-y-2.5 mb-6 text-xs text-slate-700">
                  {pkg.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Timeline, Price & Action CTA */}
              <div className="pt-5 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{pkg.timeline}</span>
                  </div>
                  <span className="font-bold text-slate-900 font-mono text-sm">
                    {pkg.startingPrice}
                  </span>
                </div>

                <a
                  href={createWhatsAppUrl(pkg.waTemplate)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#FB6C00] hover:bg-[#E73F1E] text-white font-bold text-xs sm:text-sm shadow-2xs hover:shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>{pkg.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
