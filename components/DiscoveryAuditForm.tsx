"use client";

import React, { useState } from "react";
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

  const filteredServices = SERVICE_OPTIONS.filter(
    (item) => item.category === targetCategory
  );

  const activeService =
    SERVICE_OPTIONS.find((s) => s.id === selectedServiceId) ||
    filteredServices[0];

  const handleCategorySwitch = (cat: "biz" | "edu") => {
    setTargetCategory(cat);
    const firstMatch = SERVICE_OPTIONS.find((s) => s.category === cat);
    if (firstMatch) {
      setSelectedServiceId(firstMatch.id);
    }
  };

  const generateWhatsAppMessage = (): string => {
    const sender = name.trim() ? name.trim() : "Calon Klien";
    const noteText = projectNote.trim()
      ? `\nCatatan kebutuhan: ${projectNote.trim()}`
      : "";

    return `Halo Nakami Studio, saya ${sender}. Saya ingin konsultasi paket ${activeService.code} (${activeService.name}).${noteText}\nMohon info jadwal diskusi awal 15 menit.`;
  };

  return (
    <section id="kalkulator-estimasi" className="py-20 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-mono font-medium text-orange-950 mb-4 shadow-2xs">
            <Calculator className="w-3.5 h-3.5 text-[#FB6C00]" />
            <span>KALKULATOR ESTIMASI LINGKUP & BIAYA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-[var(--font-display)] mb-4">
            Hitung estimasi proyek dalam hitungan detik.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Dapatkan gambaran durasi pengerjaan, kisaran biaya, dan format kolaborasi sebelum memulai sesi diskusi awal.
          </p>
        </div>

        {/* Estimator Container */}
        <div className="rounded-[32px] sm:rounded-[40px] bg-gradient-to-b from-[#FFFDFB] via-[#FFFBF6] to-white border border-orange-100 p-6 sm:p-10 lg:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Interactive Inputs */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* Category Segment Selector */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-3">
                  1. Pilih Kategori Kebutuhan
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handleCategorySwitch("biz")}
                    className={`flex items-center justify-center gap-2 py-3 px-4 rounded-2xl border text-sm font-bold transition-all ${
                      targetCategory === "biz"
                        ? "bg-[#FB6C00] text-white border-[#FB6C00] shadow-2xs"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <Store className="w-4 h-4 shrink-0" />
                    <span>Sistem Bisnis UMKM</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCategorySwitch("edu")}
                    className={`flex items-center justify-center gap-2 py-3 px-4 rounded-2xl border text-sm font-bold transition-all ${
                      targetCategory === "edu"
                        ? "bg-slate-900 text-white border-slate-900 shadow-2xs"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <GraduationCap className="w-4 h-4 shrink-0" />
                    <span>Mentoring Coding IT</span>
                  </button>
                </div>
              </div>

              {/* Specific Service Package Radio Group */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-3">
                  2. Pilih Modul Layanan
                </label>
                <div className="space-y-2.5">
                  {filteredServices.map((srv) => (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setSelectedServiceId(srv.id)}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all flex items-center justify-between gap-4 ${
                        selectedServiceId === srv.id
                          ? "bg-white border-[#FB6C00] shadow-xs ring-1 ring-[#FB6C00]"
                          : "bg-white/80 border-slate-200/90 hover:bg-white hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                            selectedServiceId === srv.id
                              ? "bg-orange-100 text-[#C2410C]"
                              : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          {srv.code}
                        </span>
                        <span className="text-sm font-bold text-slate-900">
                          {srv.name}
                        </span>
                      </div>
                      <span className="font-mono text-xs font-semibold text-slate-600 shrink-0">
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
                    className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-2"
                  >
                    Nama Anda / Usaha (Opsional)
                  </label>
                  <input
                    id="client-name"
                    type="text"
                    placeholder="Contoh: Budi / Toko Maju"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#FB6C00]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="project-note"
                    className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-2"
                  >
                    Catatan Khusus (Opsional)
                  </label>
                  <input
                    id="project-note"
                    type="text"
                    placeholder="Contoh: Butuh integrasi barcode"
                    value={projectNote}
                    onChange={(e) => setProjectNote(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#FB6C00]"
                  />
                </div>
              </div>

            </div>

            {/* Right Column: Live Summary & Direct WhatsApp Action */}
            <div className="lg:col-span-5 rounded-3xl bg-white border border-slate-200 p-6 sm:p-7 shadow-2xs">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-4 pb-3 border-b border-slate-100 flex items-center justify-between">
                <span>RINGKASAN ESTIMASI</span>
                <span className="text-[#FB6C00]">{activeService.code}</span>
              </div>

              <h3 className="text-xl font-bold text-slate-950 mb-2 font-[var(--font-display)]">
                {activeService.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {activeService.summary}
              </p>

              {/* Metrics Box */}
              <div className="space-y-3.5 mb-7 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>Estimasi Durasi</span>
                  </div>
                  <span className="font-bold text-slate-900 font-mono">
                    {activeService.baseTimeline}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Coins className="w-4 h-4 text-slate-400" />
                    <span>Kisaran Investasi</span>
                  </div>
                  <span className="font-bold text-[#C2410C] font-mono text-sm">
                    {activeService.basePrice}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-600">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Jaminan Garansi</span>
                  </div>
                  <span className="font-semibold text-emerald-700">
                    30 Hari Bebas Bug &amp; Source Code
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <a
                href={createWhatsAppUrl(generateWhatsAppMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-[#FB6C00] hover:bg-[#E73F1E] text-white font-bold text-sm shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Konsultasikan Rincian via WA</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>

              <p className="text-center text-[11px] text-slate-500 mt-3">
                Diskusi 15 menit awal bebas biaya dan tanpa kewajiban apa pun.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
