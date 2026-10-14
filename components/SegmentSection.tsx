"use client";

import React, { useState, useEffect } from "react";
import {
  BIZ_SERVICES,
  EDU_SERVICES,
  createWhatsAppUrl,
} from "@/lib/constants";
import {
  Store,
  GraduationCap,
  Check,
  ArrowUpRight,
  Clock,
  MessageCircle,
} from "lucide-react";
import { NonJokiManifesto } from "./NonJokiManifesto";

export function SegmentSection() {
  const [activeTab, setActiveTab] = useState<"biz" | "edu">("biz");

  useEffect(() => {
    const handleSwitchTrack = (e: Event) => {
      const customEvent = e as CustomEvent<{ track: "biz" | "edu"; targetId?: string }>;
      if (customEvent.detail && customEvent.detail.track) {
        setActiveTab(customEvent.detail.track);
      }
    };

    window.addEventListener("nakami:switch-track", handleSwitchTrack);
    return () => {
      window.removeEventListener("nakami:switch-track", handleSwitchTrack);
    };
  }, []);

  return (
    <section
      id="layanan"
      className="scroll-mt-24 py-24 sm:py-32 bg-white border-b border-neutral-200 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Swiss Architectural Discipline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#FB6C00] font-bold mb-3">
              <span>[ SPESIFIKASI LAYANAN // TRANSPARAN ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight font-[var(--font-display)] leading-[1.12]">
              Katalog modul &amp; paket rekayasa.
            </h2>
            <p className="mt-4 text-neutral-600 text-base leading-relaxed">
              Pilih spesifikasi yang sesuai dengan skala Anda. Tanpa biaya tersembunyi, tanpa jebakan termin, dengan deliverable yang jelas sejak hari pertama.
            </p>
          </div>

          {/* Interactive Architectural Segment Switcher */}
          <div className="inline-flex p-1.5 rounded-full bg-neutral-100 border border-neutral-200 shrink-0 self-start md:self-auto">
            <button
              type="button"
              id="layanan-bisnis"
              onClick={() => setActiveTab("biz")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "biz"
                  ? "bg-[#0A0A0A] text-white shadow-sm"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              <Store className="w-4 h-4 text-[#FB6C00]" />
              <span>Solusi Bisnis &amp; UMKM</span>
            </button>

            <button
              type="button"
              id="mentoring-it"
              onClick={() => setActiveTab("edu")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "edu"
                  ? "bg-[#0A0A0A] text-white shadow-sm"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              <GraduationCap className="w-4 h-4 text-[#E73F1E]" />
              <span>Mentoring IT &amp; Skripsi</span>
            </button>
          </div>
        </div>

        {/* TAB 1: MODUL BISNIS & UMKM */}
        {activeTab === "biz" && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* Featured Flagship Card: BIZ-02 Sistem Kasir (POS) */}
            {(() => {
              const posTier = BIZ_SERVICES.find((t) => t.code === "BIZ-02") || BIZ_SERVICES[1];
              return (
                <div className="rounded-3xl bg-neutral-900 text-white p-8 sm:p-12 border border-neutral-800 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,rgba(251,108,0,0.18)_0%,transparent_70%)] pointer-events-none blur-2xl" />
                  
                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-2.5 mb-4">
                        <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-[#FB6C00] text-black uppercase tracking-wider">
                          FLAGSHIP RECOMMENDATION
                        </span>
                        <span className="font-mono text-xs text-neutral-400">
                          KODE: {posTier.code}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-[var(--font-display)] text-white mb-3">
                        {posTier.title}
                      </h3>

                      <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                        {posTier.subtitle}. {posTier.solutionSummary}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {posTier.benefits.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                            <Check className="w-4 h-4 text-[#FB6C00] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 text-xs font-mono text-neutral-400">
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#FB6C00]" />
                          Estimasi: {posTier.timeline}
                        </span>
                        <span>•</span>
                        <span>Garansi Bug 30 Hari</span>
                      </div>
                    </div>

                    <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-neutral-950/80 border border-neutral-800">
                      <div>
                        <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1">
                          INVESTASI TRANSPARAN
                        </div>
                        <div className="text-3xl sm:text-4xl font-extrabold text-white font-[var(--font-display)] mb-2">
                          {posTier.startingPrice}
                        </div>
                        <div className="inline-block px-2.5 py-1 rounded bg-emerald-950/70 border border-emerald-600/50 text-emerald-400 text-xs font-mono mb-6">
                          0 BIAYA BULANAN WAJIB
                        </div>
                        <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                          Termasuk instalasi server lokal / cloud, setup printer thermal Bluetooth, pelatihan staf kasir, dan source code penuh.
                        </p>
                      </div>

                      <a
                        href={createWhatsAppUrl(posTier.waTemplate)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#FB6C00] to-[#E73F1E] text-white font-bold text-sm hover:opacity-95 shadow-md active:scale-95 transition-all"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Konsultasi Paket POS Kasir</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Other Modular Packages Grid (BIZ-01, BIZ-03, BIZ-04) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {BIZ_SERVICES
                .filter((t) => t.code !== "BIZ-02")
                .map((tier) => (
                  <div
                    key={tier.id}
                    className="rounded-3xl bg-[#FAFAFA] border border-neutral-200 hover:border-neutral-400 p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:shadow-md"
                  >
                    <div>
                      <div className="flex items-center justify-between border-b border-neutral-200 pb-4 mb-5">
                        <span className="font-mono text-xs font-bold text-[#FB6C00]">
                          KODE: {tier.code}
                        </span>
                        <span className="font-mono text-xs text-neutral-500">
                          {tier.timeline}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-[#0A0A0A] font-[var(--font-display)] mb-2">
                        {tier.title}
                      </h3>
                      <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                        {tier.subtitle}
                      </p>

                      <div className="mb-6 pb-6 border-b border-neutral-200">
                        <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                          INVESTASI
                        </div>
                        <div className="text-2xl font-extrabold text-[#0A0A0A] font-[var(--font-display)]">
                          {tier.startingPrice}
                        </div>
                      </div>

                      <div className="space-y-2.5 mb-8">
                        <div className="text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-wider mb-2">
                          DELIVERABLE LENGKAP:
                        </div>
                        {tier.benefits.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2 text-xs text-neutral-700">
                            <Check className="w-3.5 h-3.5 text-[#FB6C00] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <a
                      href={createWhatsAppUrl(tier.waTemplate)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-neutral-100 border border-neutral-300 text-neutral-800 font-bold text-xs transition-colors"
                    >
                      <span>Diskusi via WhatsApp</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                    </a>
                  </div>
                ))}
            </div>

          </div>
        )}

        {/* TAB 2: MENTORING IT & SKRIPSI */}
        {activeTab === "edu" && (
          <div className="space-y-12 animate-fadeIn">
            
            {/* Mentoring Tiers Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {EDU_SERVICES.map((tier) => {
                const isHighlight = tier.code === "EDU-03";
                return (
                  <div
                    key={tier.id}
                    className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 ${
                      isHighlight
                        ? "bg-neutral-900 text-white border border-neutral-800 shadow-xl relative"
                        : "bg-[#FAFAFA] border border-neutral-200 hover:border-neutral-400 text-neutral-900"
                    }`}
                  >
                    <div>
                      <div
                        className={`flex items-center justify-between border-b pb-4 mb-5 ${
                          isHighlight ? "border-neutral-800" : "border-neutral-200"
                        }`}
                      >
                        <span
                          className={`font-mono text-xs font-bold ${
                            isHighlight ? "text-[#F9B637]" : "text-[#E73F1E]"
                          }`}
                        >
                          KODE: {tier.code}
                        </span>
                        <span
                          className={`font-mono text-xs ${
                            isHighlight ? "text-neutral-400" : "text-neutral-500"
                          }`}
                        >
                          {tier.timeline}
                        </span>
                      </div>

                      <h3
                        className={`text-xl sm:text-2xl font-bold font-[var(--font-display)] mb-2 ${
                          isHighlight ? "text-white" : "text-[#0A0A0A]"
                        }`}
                      >
                        {tier.title}
                      </h3>
                      <p
                        className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                          isHighlight ? "text-neutral-300" : "text-neutral-600"
                        }`}
                      >
                        {tier.subtitle}
                      </p>

                      <div
                        className={`mb-6 pb-6 border-b ${
                          isHighlight ? "border-neutral-800" : "border-neutral-200"
                        }`}
                      >
                        <div
                          className={`text-[11px] font-mono uppercase tracking-wider mb-1 ${
                            isHighlight ? "text-neutral-400" : "text-neutral-400"
                          }`}
                        >
                          INVESTASI BIMBINGAN
                        </div>
                        <div
                          className={`text-2xl sm:text-3xl font-extrabold font-[var(--font-display)] ${
                            isHighlight ? "text-[#F9B637]" : "text-[#0A0A0A]"
                          }`}
                        >
                          {tier.startingPrice}
                        </div>
                      </div>

                      <div className="space-y-2.5 mb-8">
                        <div
                          className={`text-[11px] font-mono font-bold uppercase tracking-wider mb-2 ${
                            isHighlight ? "text-neutral-400" : "text-neutral-400"
                          }`}
                        >
                          YANG ANDA DAPATKAN:
                        </div>
                        {tier.benefits.map((item, dIdx) => (
                          <div
                            key={dIdx}
                            className={`flex items-start gap-2 text-xs ${
                              isHighlight ? "text-neutral-300" : "text-neutral-700"
                            }`}
                          >
                            <Check
                              className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                                isHighlight ? "text-[#F9B637]" : "text-[#E73F1E]"
                              }`}
                            />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <a
                      href={createWhatsAppUrl(tier.waTemplate)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-bold text-xs transition-all shadow-sm ${
                        isHighlight
                          ? "bg-gradient-to-r from-[#FB6C00] to-[#E73F1E] text-white hover:opacity-95"
                          : "bg-white hover:bg-neutral-100 border border-neutral-300 text-neutral-800"
                      }`}
                    >
                      <span>Mulai Mentoring Sekarang</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Embedded Non-Joki Manifesto with High Conviction */}
            <NonJokiManifesto />

          </div>
        )}

      </div>
    </section>
  );
}
