"use client";

import React, { useState, useEffect } from "react";
import { createWhatsAppUrl } from "@/lib/constants";
import {
  Store,
  GraduationCap,
  Calculator,
  MessageCircle,
  Clock,
  Coins,
  ShieldCheck,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

interface ServiceOption {
  id: string;
  name: string;
  category: "biz" | "edu";
  code: string;
  baseTimeline: string;
  basePrice: string;
  summary: string;
}

const SERVICE_OPTIONS: ServiceOption[] = [
  {
    id: "web-biz",
    name: "Website Profil Bisnis & Landing Page",
    category: "biz",
    code: "BIZ-01",
    baseTimeline: "7-14 hari kerja",
    basePrice: "Mulai Rp 2.500.000",
    summary: "Website kustom Next.js/Tailwind responsif, SEO siap saing, domain & integrasi WhatsApp.",
  },
  {
    id: "pos-biz",
    name: "Aplikasi Kasir (POS) & Stok Multi-Outlet",
    category: "biz",
    code: "BIZ-02",
    baseTimeline: "14-25 hari kerja",
    basePrice: "Mulai Rp 4.500.000",
    summary: "Sistem kasir web/cloud tanpa biaya langganan bulanan per device, print struk & scan barcode.",
  },
  {
    id: "booking-biz",
    name: "Sistem Booking Jadwal & Reservasi",
    category: "biz",
    code: "BIZ-03",
    baseTimeline: "10-18 hari kerja",
    basePrice: "Mulai Rp 3.500.000",
    summary: "Portal booking mandiri cegah jadwal bentrok, kalender interaktif & notifikasi otomatis.",
  },
  {
    id: "custom-biz",
    name: "Software Internal Kustom / ERP Mini",
    category: "biz",
    code: "BIZ-04",
    baseTimeline: "Mulai 3 minggu",
    basePrice: "Sesuai lingkup kerja",
    summary: "Software operasional tim disesuaikan persis dengan SOP unik bisnis Anda tanpa kompromi.",
  },
  {
    id: "debug-edu",
    name: "Live Debugging 1-on-1 & Code Review",
    category: "edu",
    code: "EDU-01",
    baseTimeline: "1-2 jam per sesi",
    basePrice: "Mulai Rp 150.000 / jam",
    summary: "Sesi investigasi error sistematis via Google Meet + rekaman video sesi untuk dipelajari lagi.",
  },
  {
    id: "db-edu",
    name: "Mentoring Arsitektur Database & API",
    category: "edu",
    code: "EDU-02",
    baseTimeline: "3 sesi terarah",
    basePrice: "Mulai Rp 400.000 / paket",
    summary: "Bimbingan perancangan ERD, normalisasi, dan REST API terstandar industri untuk fondasi skripsi.",
  },
  {
    id: "defense-edu",
    name: "Simulasi Sidang Skripsi IT & Bedah Kode",
    category: "edu",
    code: "EDU-03",
    baseTimeline: "Paket intensif 2 sesi",
    basePrice: "Mulai Rp 550.000 / paket",
    summary: "Simulasi pertanyaan dosen penguji, bedah alur algoritma, dan persiapan mental hingga siap 100%.",
  },
];

export function DiscoveryAuditForm() {
  const [targetCategory, setTargetCategory] = useState<"biz" | "edu">("biz");
  const [selectedServiceId, setSelectedServiceId] = useState<string>("web-biz");
  const [name, setName] = useState<string>("");
  const [projectNote, setProjectNote] = useState<string>("");

  const handleCategorySwitch = (cat: "biz" | "edu") => {
    setTargetCategory(cat);
    const firstMatch = SERVICE_OPTIONS.find((s) => s.category === cat);
    if (firstMatch) {
      setSelectedServiceId(firstMatch.id);
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash;
      if (currentHash === "#mentoring-it" || currentHash === "#manifesto-etis") {
        handleCategorySwitch("edu");
      } else if (currentHash === "#layanan-bisnis") {
        handleCategorySwitch("biz");
      }
    };

    const handleCustomTrackSwitch = (e: Event) => {
      const customEvent = e as CustomEvent<{ track: "biz" | "edu" }>;
      if (customEvent.detail?.track) {
        handleCategorySwitch(customEvent.detail.track);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("nakami:switch-track", handleCustomTrackSwitch);

    // Initial sync
    const timer = setTimeout(() => {
      handleHashChange();
    }, 0);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("nakami:switch-track", handleCustomTrackSwitch);
    };
  }, []);

  const filteredServices = SERVICE_OPTIONS.filter(
    (item) => item.category === targetCategory
  );

  const activeService =
    SERVICE_OPTIONS.find((s) => s.id === selectedServiceId) ||
    filteredServices[0];

  const generateWhatsAppMessage = (): string => {
    const sender = name.trim() ? name.trim() : "Calon Klien";
    const noteText = projectNote.trim()
      ? `\nCatatan kebutuhan: ${projectNote.trim()}`
      : "";

    return `Halo Nakami Studio, saya ${sender}. Saya ingin konsultasi paket ${activeService.code} (${activeService.name}).${noteText}\nMohon info jadwal diskusi awal 15 menit.`;
  };

  return (
    <section id="kalkulator-estimasi" className="scroll-mt-28 py-20 sm:py-24 bg-[#121316] border-b border-[#2E323B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1C1E24] border border-[#2E323B] text-xs font-mono font-medium text-[#F9B637] mb-4 shadow-sm">
            <Calculator className="w-3.5 h-3.5 text-[#FB6C00]" />
            <span>KALKULATOR ESTIMASI LINGKUP &amp; BIAYA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-[var(--font-display)] mb-4">
            Hitung estimasi proyek dalam hitungan detik.
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed">
            Dapatkan gambaran durasi pengerjaan, kisaran biaya, dan format kolaborasi sebelum memulai sesi diskusi awal.
          </p>
        </div>

        {/* Estimator Container */}
        <div className="rounded-[32px] sm:rounded-[40px] bg-[#1C1E24] border border-[#2E323B] p-6 sm:p-10 lg:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Interactive Inputs */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* Category Segment Selector */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#94A3B8] mb-3">
                  1. Pilih Kategori Kebutuhan
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handleCategorySwitch("biz")}
                    className={`flex items-center justify-center gap-2 py-3 px-4 rounded-2xl border text-sm font-bold transition-all cursor-pointer ${
                      targetCategory === "biz"
                        ? "bg-gradient-to-r from-[#FB6C00] to-[#E73F1E] text-[#121316] border-[#FB6C00] shadow-glow-warm"
                        : "bg-[#17181C] text-[#94A3B8] border-[#2E323B] hover:text-white hover:border-[#3F4450]"
                    }`}
                  >
                    <Store className="w-4 h-4 shrink-0" />
                    <span>Sistem Bisnis UMKM</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCategorySwitch("edu")}
                    className={`flex items-center justify-center gap-2 py-3 px-4 rounded-2xl border text-sm font-bold transition-all cursor-pointer ${
                      targetCategory === "edu"
                        ? "bg-gradient-to-r from-[#FB6C00] to-[#E73F1E] text-[#121316] border-[#FB6C00] shadow-glow-warm"
                        : "bg-[#17181C] text-[#94A3B8] border-[#2E323B] hover:text-white hover:border-[#3F4450]"
                    }`}
                  >
                    <GraduationCap className="w-4 h-4 shrink-0" />
                    <span>Mentoring Coding IT</span>
                  </button>
                </div>
              </div>

              {/* Specific Service Package Radio Group */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#94A3B8] mb-3">
                  2. Pilih Modul Layanan
                </label>
                <div className="space-y-2.5">
                  {filteredServices.map((srv) => (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setSelectedServiceId(srv.id)}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all flex items-center justify-between gap-4 cursor-pointer ${
                        selectedServiceId === srv.id
                          ? "bg-[#242730] border-[#FB6C00] shadow-sm ring-1 ring-[#FB6C00]"
                          : "bg-[#17181C] border-[#2E323B] hover:bg-[#202228] hover:border-[#3F4450]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                            selectedServiceId === srv.id
                              ? "bg-[#FB6C00]/20 text-[#F9B637]"
                              : "bg-[#242730] text-[#94A3B8]"
                          }`}
                        >
                          {srv.code}
                        </span>
                        <span className="text-sm font-bold text-white">
                          {srv.name}
                        </span>
                      </div>
                      <span className="font-mono text-xs font-semibold text-[#F9B637] shrink-0">
                        {srv.basePrice}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional Name & Context Note */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="client-name"
                    className="block text-xs font-mono font-bold uppercase tracking-wider text-[#94A3B8] mb-2"
                  >
                    Nama Anda / Usaha (Opsional)
                  </label>
                  <input
                    id="client-name"
                    type="text"
                    placeholder="Contoh: Budi / Toko Maju"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#17181C] border border-[#2E323B] text-white placeholder-[#6B7280] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#FB6C00]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="project-note"
                    className="block text-xs font-mono font-bold uppercase tracking-wider text-[#94A3B8] mb-2"
                  >
                    Catatan Khusus (Opsional)
                  </label>
                  <input
                    id="project-note"
                    type="text"
                    placeholder="Contoh: Butuh integrasi barcode"
                    value={projectNote}
                    onChange={(e) => setProjectNote(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#17181C] border border-[#2E323B] text-white placeholder-[#6B7280] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#FB6C00]"
                  />
                </div>
              </div>

            </div>

            {/* Right Column: Live Summary & Direct WhatsApp Action */}
            <div className="lg:col-span-5 rounded-3xl bg-[#17181C] border border-[#2E323B] p-6 sm:p-7 shadow-sm">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#94A3B8] mb-4 pb-3 border-t border-transparent border-b border-[#2E323B] flex items-center justify-between">
                <span>RINGKASAN ESTIMASI</span>
                <span className="text-[#FB6C00]">{activeService.code}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 font-[var(--font-display)]">
                {activeService.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                {activeService.summary}
              </p>

              {/* Metrics Box */}
              <div className="space-y-3.5 mb-7 p-4 rounded-2xl bg-[#242730] border border-[#2E323B]">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-[#94A3B8]">
                    <Clock className="w-4 h-4 text-[#94A3B8]" />
                    <span>Estimasi Durasi</span>
                  </div>
                  <span className="font-bold text-white font-mono">
                    {activeService.baseTimeline}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-[#94A3B8]">
                    <Coins className="w-4 h-4 text-[#94A3B8]" />
                    <span>Kisaran Investasi</span>
                  </div>
                  <span className="font-bold text-[#F9B637] font-mono text-sm">
                    {activeService.basePrice}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-[#94A3B8]">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Jaminan Garansi</span>
                  </div>
                  <span className="font-semibold text-emerald-400">
                    30 Hari Bebas Bug &amp; Source Code
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <a
                href={createWhatsAppUrl(generateWhatsAppMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-gradient-to-r from-[#FB6C00] to-[#E73F1E] text-[#121316] font-bold text-sm shadow-glow-warm hover:brightness-110 transition-all"
              >
                <MessageCircle className="w-4 h-4 shrink-0 text-[#121316]" />
                <span>Konsultasikan Rincian via WA</span>
                <ArrowRight className="w-4 h-4 shrink-0 text-[#121316]" />
              </a>

              <p className="text-center text-[11px] text-[#6B7280] mt-3">
                Diskusi 15 menit awal bebas biaya dan tanpa kewajiban apa pun.
              </p>
            </div>

          </div>
        </div>

        {/* Forward Bridge to FAQ */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 px-5 py-3 rounded-2xl bg-[#1C1E24] border border-[#2E323B] text-xs text-[#94A3B8] shadow-sm">
            <span className="font-medium">
              Masih memiliki pertanyaan seputar garansi 30 hari, hak milik kode, atau alur kerja?
            </span>
            <a
              href="#faq"
              className="inline-flex items-center gap-1 font-bold text-[#FB6C00] hover:text-[#FFDD9C] transition-colors underline-offset-4 hover:underline"
            >
              <span>Pelajari Tanya Jawab (FAQ)</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
