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
  CheckCircle2,
  Clock,
  ArrowRight,
  MessageCircle,
  FileCode,
  ShieldCheck,
  Server,
  Users,
} from "lucide-react";
import { NonJokiManifesto } from "./NonJokiManifesto";

export function SegmentSection() {
  const [activeTab, setActiveTab] = useState<"biz" | "edu">("biz");

  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash;
      if (currentHash === "#mentoring-it" || currentHash === "#manifesto-etis") {
        setActiveTab("edu");
      } else if (currentHash === "#layanan-bisnis") {
        setActiveTab("biz");
      }
    };

    const handleCustomTrackSwitch = (e: Event) => {
      const customEvent = e as CustomEvent<{ track: "biz" | "edu" }>;
      if (customEvent.detail?.track) {
        setActiveTab(customEvent.detail.track);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("nakami:switch-track", handleCustomTrackSwitch);

    // Initial check from window hash if navigated directly
    const timer = setTimeout(() => {
      handleHashChange();
    }, 0);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("nakami:switch-track", handleCustomTrackSwitch);
    };
  }, []);

  const currentServices = activeTab === "biz" ? BIZ_SERVICES : EDU_SERVICES;

  return (
    <section id="katalog-layanan" className="py-20 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Anchor targets for direct navbar and gateway links */}
        <div id="layanan-bisnis" className="relative -top-28" />
        <div id="mentoring-it" className="relative -top-28" />

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-mono font-medium text-orange-950 mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#FB6C00]" />
            <span>KATALOG LAYANAN &amp; SPESIFIKASI MODUL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-[var(--font-display)] mb-4">
            Solusi terarah dengan batasan lingkup kerja pasti.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Pilih kategori spesialisasi di bawah untuk meninjau paket modul software operasional bisnis atau bimbingan mentoring teknis mahasiswa IT.
          </p>
        </div>

        {/* Tab Switcher Controls */}
        <div className="flex justify-center mb-14">
          <div
            role="tablist"
            aria-label="Kategori Layanan Nakami Studio"
            className="inline-flex p-1.5 rounded-full bg-slate-100 border border-slate-200/90 shadow-2xs max-w-md w-full"
          >
            <button
              role="tab"
              id="tab-biz"
              aria-selected={activeTab === "biz"}
              aria-controls="panel-biz"
              onClick={() => {
                setActiveTab("biz");
                window.location.hash = "layanan-bisnis";
              }}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === "biz"
                  ? "bg-[#FB6C00] text-white shadow-2xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
              }`}
            >
              <Store className="w-4 h-4 shrink-0" />
              <span>Solusi Bisnis &amp; UMKM</span>
            </button>

            <button
              role="tab"
              id="tab-edu"
              aria-selected={activeTab === "edu"}
              aria-controls="panel-edu"
              onClick={() => {
                setActiveTab("edu");
                window.location.hash = "mentoring-it";
              }}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === "edu"
                  ? "bg-slate-900 text-white shadow-2xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
              }`}
            >
              <GraduationCap className="w-4 h-4 shrink-0" />
              <span>Mentoring IT &amp; Skripsi</span>
            </button>
          </div>
        </div>

        {/* Track Context Ribbon */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-800 flex items-center justify-center shrink-0">
              {activeTab === "biz" ? (
                <Store className="w-5 h-5 text-[#FB6C00]" />
              ) : (
                <GraduationCap className="w-5 h-5 text-slate-900" />
              )}
            </div>
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                {activeTab === "biz"
                  ? "4 MODUL BISNIS TERSEDIA"
                  : "3 PAKET MENTORING TERSEDIA"}
              </div>
              <div className="text-sm font-bold text-slate-900">
                {activeTab === "biz"
                  ? "Aplikasi Kustom Milik Anda Penuh Tanpa Biaya Langganan Bulanan"
                  : "Bimbingan Logika 1-on-1 dengan Senior Engineer, Menolak Joki"}
              </div>
            </div>
          </div>

          <a
            href={
              activeTab === "biz"
                ? createWhatsAppUrl(
                    "Halo Nakami Studio, saya ingin konsultasi modul sistem bisnis..."
                  )
                : createWhatsAppUrl(
                    "Halo Nakami Studio, saya mahasiswa IT dan ingin konsultasi bimbingan kode..."
                  )
            }
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs transition-colors shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Diskusi Modul via WhatsApp</span>
          </a>
        </div>

        {/* Service Package Cards Grid */}
        <div
          id={activeTab === "biz" ? "panel-biz" : "panel-edu"}
          role="tabpanel"
          aria-labelledby={activeTab === "biz" ? "tab-biz" : "tab-edu"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
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

        {/* Tab-Specific Footer Integrity Guarantee */}
        {activeTab === "biz" ? (
          /* Business Track Reliability Guarantee Banner */
          <div className="mt-14 sm:mt-16 pt-10 border-t border-slate-200/80">
            <div className="rounded-[32px] sm:rounded-[36px] bg-gradient-to-r from-orange-50/50 via-white to-amber-50/40 border border-orange-200/70 p-6 sm:p-10 shadow-2xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-orange-200 text-xs font-mono font-bold text-orange-900 mb-3 shadow-2xs">
                    <ShieldCheck className="w-4 h-4 text-[#FB6C00]" />
                    <span>JAMINAN REKAYASA BISNIS NAKAMI</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-[var(--font-display)] mb-2">
                    Sistem mandiri tanpa biaya langganan bulanan &amp; garansi 30 hari.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                    Seluruh aplikasi kasir, reservasi, dan web profil yang dibangun Nakami diserahkan 100% bersama kode sumber dan database. Anda bebas mengoperasikannya tanpa sewa lisensi per perangkat.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 text-xs font-medium text-slate-700">
                    <div className="flex items-center gap-2">
                      <FileCode className="w-4 h-4 text-[#FB6C00] shrink-0" />
                      <span>Full Repositori Git</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Server className="w-4 h-4 text-[#FB6C00] shrink-0" />
                      <span>Bebas Pilih Server Hosting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#FB6C00] shrink-0" />
                      <span>Pelatihan Tim Sampai Lancar</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                  <a
                    href="#transparansi-biaya"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-2xs transition-colors"
                  >
                    <span>Lihat Alur 3 Termin Pembayaran</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#kalkulator-estimasi"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-xs sm:text-sm shadow-2xs transition-colors"
                  >
                    <span>Simulasi Biaya &amp; Durasi</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Education Track: Embedded Ethical Anti-Joki Manifesto */
          <NonJokiManifesto embedded={true} />
        )}

      </div>
    </section>
  );
}