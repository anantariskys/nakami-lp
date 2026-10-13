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
    const scrollToTarget = (id: string) => {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 60);
    };

    const handleHashChange = () => {
      const currentHash = window.location.hash;
      if (currentHash === "#mentoring-it") {
        setActiveTab("edu");
        scrollToTarget("mentoring-it");
      } else if (currentHash === "#manifesto-etis") {
        setActiveTab("edu");
        scrollToTarget("manifesto-etis");
      } else if (currentHash === "#layanan-bisnis") {
        setActiveTab("biz");
        scrollToTarget("layanan-bisnis");
      }
    };

    const handleCustomTrackSwitch = (e: Event) => {
      const customEvent = e as CustomEvent<{ track: "biz" | "edu"; targetId?: string }>;
      if (customEvent.detail?.track) {
        setActiveTab(customEvent.detail.track);
        if (customEvent.detail.targetId) {
          scrollToTarget(customEvent.detail.targetId);
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("nakami:switch-track", handleCustomTrackSwitch);

    // Initial check from window hash if navigated directly
    const timer = setTimeout(() => {
      handleHashChange();
    }, 50);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("nakami:switch-track", handleCustomTrackSwitch);
    };
  }, []);

  useEffect(() => {
    if (activeTab === "edu" && typeof window !== "undefined" && window.location.hash === "#manifesto-etis") {
      const timer = setTimeout(() => {
        document.getElementById("manifesto-etis")?.scrollIntoView({ behavior: "smooth" });
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [activeTab]);

  const currentServices = activeTab === "biz" ? BIZ_SERVICES : EDU_SERVICES;

  return (
    <section id="katalog-layanan" className="scroll-mt-28 py-20 sm:py-24 bg-[#121316] border-b border-[#2E323B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Anchor targets for direct navbar and gateway links */}
        <div id="layanan-bisnis" className="scroll-mt-28 relative -top-28" />
        <div id="mentoring-it" className="scroll-mt-28 relative -top-28" />

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1C1E24] border border-[#2E323B] text-xs font-mono font-medium text-[#F9B637] mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FB6C00]" />
            <span>KATALOG LAYANAN &amp; SPESIFIKASI MODUL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-[var(--font-display)] mb-4">
            Solusi terarah dengan batasan lingkup kerja pasti.
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed">
            Pilih kategori spesialisasi di bawah untuk meninjau paket modul software operasional bisnis atau bimbingan mentoring teknis mahasiswa IT.
          </p>
        </div>

        {/* Tab Switcher Controls */}
        <div className="flex justify-center mb-14">
          <div
            role="tablist"
            aria-label="Kategori Layanan Nakami Studio"
            className="inline-flex p-1.5 rounded-full bg-[#1C1E24] border border-[#2E323B] shadow-sm max-w-md w-full"
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
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "biz"
                  ? "bg-gradient-to-r from-[#FB6C00] to-[#E73F1E] text-[#121316] shadow-glow-warm"
                  : "text-[#94A3B8] hover:text-white hover:bg-[#242730]"
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
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "edu"
                  ? "bg-[#2E323B] text-white border border-[#F9B637]/40"
                  : "text-[#94A3B8] hover:text-white hover:bg-[#242730]"
              }`}
            >
              <GraduationCap className="w-4 h-4 shrink-0" />
              <span>Mentoring IT &amp; Skripsi</span>
            </button>
          </div>
        </div>

        {/* Track Context Ribbon */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-[#1C1E24] border border-[#2E323B] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#242730] border border-[#2E323B] text-white flex items-center justify-center shrink-0">
              {activeTab === "biz" ? (
                <Store className="w-5 h-5 text-[#FB6C00]" />
              ) : (
                <GraduationCap className="w-5 h-5 text-[#F9B637]" />
              )}
            </div>
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#94A3B8]">
                {activeTab === "biz"
                  ? "4 MODUL BISNIS TERSEDIA"
                  : "3 PAKET MENTORING TERSEDIA"}
              </div>
              <div className="text-sm font-bold text-white">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#242730] hover:bg-[#2C303B] border border-[#2E323B] text-xs font-semibold text-white shadow-sm transition-colors shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#10B981]" />
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
              className="rounded-3xl bg-[#1C1E24] border border-[#2E323B] hover:border-[#FB6C00]/50 p-6 sm:p-7 shadow-md hover:shadow-glow-warm/10 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top Header: Code Badge & Popularity Pill */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-[#242730] text-[#E2E8F0] border border-[#2E323B]">
                    {pkg.code}
                  </span>
                  {pkg.badge && (
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#2E201B] text-[#FB6C00] border border-[#FB6C00]/40">
                      {pkg.badge}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug font-[var(--font-display)]">
                  {pkg.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] mb-4 leading-relaxed">
                  {pkg.subtitle}
                </p>

                {/* Pain Point Callout */}
                <div className="p-3 rounded-xl bg-[#17181C] border border-[#2E323B] text-xs text-[#CBD5E1] mb-5 italic">
                  &quot;{pkg.painPointCallout}&quot;
                </div>

                {/* Benefits List */}
                <div className="space-y-2.5 mb-6 text-xs text-[#CBD5E1]">
                  {pkg.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Timeline, Price & Action CTA */}
              <div className="pt-5 border-t border-[#2E323B]">
                <div className="flex items-center justify-between text-xs text-[#94A3B8] mb-3">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#64748B]" />
                    <span>{pkg.timeline}</span>
                  </div>
                  <span className="font-bold text-white font-mono text-sm">
                    {pkg.startingPrice}
                  </span>
                </div>

                <a
                  href={createWhatsAppUrl(pkg.waTemplate)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-gradient-to-r from-[#FB6C00] to-[#E73F1E] text-[#121316] font-bold text-xs sm:text-sm shadow-glow-warm hover:brightness-110 transition-all"
                >
                  <MessageCircle className="w-4 h-4 shrink-0 text-[#121316]" />
                  <span>{pkg.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#121316]" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Tab-Specific Footer Integrity Guarantee */}
        {activeTab === "biz" ? (
          /* Business Track Reliability Guarantee Banner */
          <div className="mt-14 sm:mt-16 pt-10 border-t border-[#2E323B]">
            <div className="rounded-[32px] sm:rounded-[36px] bg-[#1C1E24] border border-[#2E323B] p-6 sm:p-10 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#242730] border border-[#FB6C00]/30 text-xs font-mono font-bold text-[#FB6C00] mb-3 shadow-sm">
                    <ShieldCheck className="w-4 h-4 text-[#FB6C00]" />
                    <span>JAMINAN REKAYASA BISNIS NAKAMI</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-[var(--font-display)] mb-2">
                    Sistem mandiri tanpa biaya langganan bulanan &amp; garansi 30 hari.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-2xl">
                    Seluruh aplikasi kasir, reservasi, dan web profil yang dibangun Nakami diserahkan 100% bersama kode sumber dan database. Anda bebas mengoperasikannya tanpa sewa lisensi per perangkat.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 text-xs font-medium text-[#CBD5E1]">
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
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#FB6C00] to-[#E73F1E] text-[#121316] font-bold text-xs sm:text-sm shadow-glow-warm hover:brightness-110 transition-all"
                  >
                    <span>Lihat Alur 3 Termin Pembayaran</span>
                    <ArrowRight className="w-4 h-4 text-[#121316]" />
                  </a>
                  <a
                    href="#kalkulator-estimasi"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#242730] hover:bg-[#2C303B] border border-[#2E323B] text-white font-semibold text-xs sm:text-sm shadow-sm transition-colors"
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
