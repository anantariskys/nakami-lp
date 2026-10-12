"use client";

import React, { useState } from "react";
import { createWhatsAppUrl } from "@/lib/constants";
import {
  Store,
  GraduationCap,
  Calculator,
  MessageCircle,
} from "lucide-react";

interface ServiceOption {
  id: string;
  name: string;
  category: "biz" | "edu";
  code: string;
  baseTimeline: string;
  basePrice: string;
}

const SERVICE_OPTIONS: ServiceOption[] = [
  {
    id: "web-biz",
    name: "Website Profil Bisnis & Landing Page",
    category: "biz",
    code: "BIZ-01",
    baseTimeline: "7-14 hari kerja",
    basePrice: "Mulai Rp 2.500.000",
  },
  {
    id: "pos-biz",
    name: "Aplikasi Kasir (POS) & Manajemen Stok",
    category: "biz",
    code: "BIZ-02",
    baseTimeline: "14-25 hari kerja",
    basePrice: "Mulai Rp 4.500.000",
  },
  {
    id: "booking-biz",
    name: "Sistem Booking Jadwal & Reservasi",
    category: "biz",
    code: "BIZ-03",
    baseTimeline: "10-18 hari kerja",
    basePrice: "Mulai Rp 3.500.000",
  },
  {
    id: "custom-biz",
    name: "Software Internal Kustom / ERP Mini",
    category: "biz",
    code: "BIZ-04",
    baseTimeline: "Mulai 3 minggu",
    basePrice: "Sesuai lingkup kerja",
  },
  {
    id: "debug-edu",
    name: "Live Debugging 1-on-1 & Code Review",
    category: "edu",
    code: "EDU-01",
    baseTimeline: "1-2 jam per sesi",
    basePrice: "Mulai Rp 150.000 / jam",
  },
  {
    id: "db-edu",
    name: "Mentoring Arsitektur Database & API",
    category: "edu",
    code: "EDU-02",
    baseTimeline: "3 sesi terarah",
    basePrice: "Mulai Rp 400.000 / paket",
  },
  {
    id: "defense-edu",
    name: "Simulasi Sidang Skripsi IT & Bedah Kode",
    category: "edu",
    code: "EDU-03",
    baseTimeline: "Paket intensif 2 sesi",
    basePrice: "Mulai Rp 550.000 / paket",
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

  const generateWhatsAppMessage = () => {
    const greeting = "Halo Nakami Studio,";
    const senderName = name.trim() ? `Saya ${name.trim()},` : "Saya";
    const categoryLabel =
      targetCategory === "biz" ? "Kebutuhan Bisnis / UMKM" : "Kebutuhan Mentoring IT / Skripsi";
    const noteText = projectNote.trim()
      ? `\nCatatan tambahan: "${projectNote.trim()}"`
      : "";

    return `${greeting} ${senderName} ingin mendiskusikan ${categoryLabel}.
Paket yang dipilih: [${activeService.code}] ${activeService.name}.
Estimasi timeline: ${activeService.baseTimeline}.${noteText}
Mohon info jadwal diskusi 15 menit awal. Terima kasih!`;
  };

  return (
    <section id="kalkulator-estimasi" className="py-20 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700 mb-4">
            <Calculator className="w-3.5 h-3.5 text-[#FB6C00]" />
            <span>INTERACTIVE ESTIMATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-[var(--font-display)] mb-4">
            Hitung perkiraan kebutuhan proyek Anda.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Dapatkan rekomendasi paket, estimasi durasi pengerjaan, dan format pesan ringkasan yang siap dikonsultasikan via WhatsApp.
          </p>
        </div>

        {/* Estimator Container */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Form Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Step 1: Category Picker */}
              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Langkah 1: Siapa Anda?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handleCategorySwitch("biz")}
                    className={`flex items-center justify-center gap-2 p-3.5 rounded-xl border text-sm font-bold transition-all ${
                      targetCategory === "biz"
                        ? "bg-white border-[#FB6C00] text-slate-900 shadow-2xs ring-1 ring-[#FB6C00]"
                        : "bg-white/80 border-slate-200 text-slate-600 hover:bg-white"
                    }`}
                  >
                    <Store className="w-4 h-4 text-[#FB6C00]" />
                    <span>Pelaku Usaha / Bisnis</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCategorySwitch("edu")}
                    className={`flex items-center justify-center gap-2 p-3.5 rounded-xl border text-sm font-bold transition-all ${
                      targetCategory === "edu"
                        ? "bg-white border-slate-900 text-slate-900 shadow-2xs ring-1 ring-slate-900"
                        : "bg-white/80 border-slate-200 text-slate-600 hover:bg-white"
                    }`}
                  >
                    <GraduationCap className="w-4 h-4 text-slate-800" />
                    <span>Mahasiswa IT / Skripsi</span>
                  </button>
                </div>
              </div>

              {/* Step 2: Specific Service Picker */}
              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Langkah 2: Pilih Kebutuhan Utama
                </label>
                <div className="space-y-2">
                  {filteredServices.map((service) => {
                    const isSelected = selectedServiceId === service.id;
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => setSelectedServiceId(service.id)}
                        className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                          isSelected
                            ? "bg-white border-[#FB6C00] text-slate-900 shadow-2xs ring-1 ring-[#FB6C00]"
                            : "bg-white/80 border-slate-200 text-slate-600 hover:bg-white"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                            {service.code}
                          </span>
                          <span>{service.name}</span>
                        </div>
                        <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                          {service.baseTimeline}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Optional Name & Note */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label htmlFor="user-name" className="block text-xs font-medium text-slate-700 mb-1">
                    Nama atau Nama Bisnis (Opsional)
                  </label>
                  <input
                    id="user-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Budi (Kopi Senja)"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#FB6C00]"
                  />
                </div>

                <div>
                  <label htmlFor="project-note" className="block text-xs font-medium text-slate-700 mb-1">
                    Catatan Khusus (Opsional)
                  </label>
                  <input
                    id="project-note"
                    type="text"
                    value={projectNote}
                    onChange={(e) => setProjectNote(e.target.value)}
                    placeholder="Contoh: Butuh integrasi scan barcode"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#FB6C00]"
                  />
                </div>
              </div>

            </div>

            {/* Right Column: Live Scope & WhatsApp Action Card */}
            <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-6">
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                  RINGKASAN ESTIMASI
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {activeService.name}
                </h3>
                <span className="inline-block mt-1 font-mono text-xs font-bold text-[#FB6C00]">
                  Kode Paket: {activeService.code}
                </span>
              </div>

              <div className="space-y-3 py-4 border-y border-slate-100 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span className="text-slate-500">Estimasi Durasi:</span>
                  <span className="font-semibold text-slate-900">{activeService.baseTimeline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Kisaran Biaya:</span>
                  <span className="font-semibold text-slate-900">{activeService.basePrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Format Kerja:</span>
                  <span className="font-semibold text-slate-900">
                    {targetCategory === "biz" ? "Fixed-Scope + Garansi 30 Hari" : "1-on-1 Live Mentoring"}
                  </span>
                </div>
              </div>

              <div>
                <div className="text-xs font-mono text-slate-400 mb-2">
                  Preview Pesan WhatsApp:
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-[11px] text-slate-700 font-mono whitespace-pre-wrap leading-relaxed">
                  {generateWhatsAppMessage()}
                </div>
              </div>

              <a
                href={createWhatsAppUrl(generateWhatsAppMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-[#FB6C00] hover:bg-[#E73F1E] text-white text-sm font-bold shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Kirim Ringkasan via WhatsApp</span>
              </a>

              <p className="text-[11px] text-slate-400 text-center leading-normal">
                Diskusi 15 menit awal tidak dikenakan biaya apa pun.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
