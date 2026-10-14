"use client";

import React, { useState, useMemo } from "react";
import {
  MessageCircle,
  Check,
  Store,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";
import { createWhatsAppUrl } from "@/lib/constants";

export function DiscoveryAuditForm() {
  const [track, setTrack] = useState<"biz" | "edu">("biz");
  const [selectedModule, setSelectedModule] = useState<string>("pos");
  const [addOns, setAddOns] = useState<string[]>([]);
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [projectNotes, setProjectNotes] = useState("");

  const bizModules = [
    {
      id: "landing",
      name: "Website Profil & Portofolio Kredibel",
      basePrice: 1500000,
      priceLabel: "Rp 1.500.000",
      timeline: "5 - 7 Hari",
      desc: "Web responsif berkecepatan tinggi, SEO Google siap tayang, dan domain resmi .com / .id.",
    },
    {
      id: "pos",
      name: "Sistem Kasir (POS) & Stok Multi-Outlet",
      basePrice: 3500000,
      priceLabel: "Rp 3.500.000",
      timeline: "10 - 14 Hari",
      desc: "Kasir offline-first, cetak struk thermal Bluetooth, rekap laba otomatis, dan 0 biaya langganan bulanan.",
    },
    {
      id: "booking",
      name: "Sistem Booking & Jadwal Otomatis",
      basePrice: 2800000,
      priceLabel: "Rp 2.800.000",
      timeline: "7 - 10 Hari",
      desc: "Reservasi online mandiri pelanggan, integrasi WhatsApp notification, dan kalender anti-bentrok.",
    },
    {
      id: "erp",
      name: "Aplikasi Manajemen Operasional Kustom",
      basePrice: 6000000,
      priceLabel: "Mulai Rp 6.000.000",
      timeline: "20 - 30 Hari",
      desc: "Sistem internal terpadu, workflow persetujuan, manajemen gudang, dan hak akses bertingkat.",
    },
  ];

  const eduModules = [
    {
      id: "debugging",
      name: "Sesi 1-on-1 Debugging & Bedah Logika",
      basePrice: 150000,
      priceLabel: "Rp 150.000 / sesi",
      timeline: "Sesi 90 Menit",
      desc: "Live Google Meet screen-share untuk memecahkan error kode spesifik dan tracing alur data.",
    },
    {
      id: "database",
      name: "Arsitektur Database (ERD) & REST API",
      basePrice: 450000,
      priceLabel: "Rp 450.000",
      timeline: "2 - 3 Hari",
      desc: "Normalisasi tabel database tugas akhir, relasi foreign-key, dan perancangan endpoint API.",
    },
    {
      id: "skripsi-full",
      name: "Pendampingan Komprehensif Skripsi IT",
      basePrice: 1200000,
      priceLabel: "Rp 1.200.000",
      timeline: "30 Hari Penuh",
      desc: "Bimbingan arsitektur sistem dari awal sampai akhir, bedah kode baris per baris, dan simulasi sidang.",
    },
  ];

  const currentModules = track === "biz" ? bizModules : eduModules;
  const currentModuleData =
    currentModules.find((m) => m.id === selectedModule) || currentModules[0];

  const bizAddOns = [
    { id: "qris", name: "Integrasi Payment Gateway QRIS Otomatis", price: 500000 },
    { id: "printer", name: "Pengadaan & Setup Printer Thermal Bluetooth", price: 650000 },
    { id: "express", name: "Prioritas Express Delivery (< 7 Hari)", price: 800000 },
  ];

  const eduAddOns = [
    { id: "simulasi-extra", name: "Simulasi Sidang Skripsi Tambahan (+90 Menit)", price: 150000 },
    { id: "diagram-uml", name: "Pendampingan Diagram UML (Use Case, Sequence)", price: 200000 },
    { id: "hosting-deploy", name: "Bimbingan Deploy ke VPS / Vercel Live", price: 150000 },
  ];

  const currentAddOns = track === "biz" ? bizAddOns : eduAddOns;

  const toggleAddOn = (id: string) => {
    setAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculatedTotal = useMemo(() => {
    let total = currentModuleData.basePrice;
    currentAddOns.forEach((addon) => {
      if (addOns.includes(addon.id)) {
        total += addon.price;
      }
    });
    return total;
  }, [currentModuleData, addOns, currentAddOns]);

  const formattedTotal = useMemo(() => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(calculatedTotal);
  }, [calculatedTotal]);

  const generateWhatsAppMessage = () => {
    const selectedAddonNames = currentAddOns
      .filter((a) => addOns.includes(a.id))
      .map((a) => a.name);

    let msg = `*HALO NAKAMI STUDIO — ESTIMASI PROYEK*\n\n`;
    msg += `*Nama Klien:* ${clientName || "-"}\n`;
    msg += `*No. Kontak:* ${clientPhone || "-"}\n`;
    msg += `*Kategori:* ${track === "biz" ? "Solusi Bisnis & UMKM" : "Mentoring Mahasiswa IT"}\n`;
    msg += `*Modul Utama:* ${currentModuleData.name}\n`;
    msg += `*Timeline Estimasi:* ${currentModuleData.timeline}\n`;
    
    if (selectedAddonNames.length > 0) {
      msg += `*Add-ons:* \n- ${selectedAddonNames.join("\n- ")}\n`;
    }
    
    msg += `*Perkiraan Investasi:* ${formattedTotal}\n`;
    if (projectNotes) {
      msg += `*Catatan Khusus:* ${projectNotes}\n`;
    }
    msg += `\nMohon informasi ketersediaan jadwal audit/konsultasi 15 menit awal. Terima kasih!`;
    return msg;
  };

  return (
    <section
      id="kalkulator-estimasi"
      className="scroll-mt-24 py-24 sm:py-32 bg-white border-b border-neutral-200 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#FB6C00] font-bold mb-3">
            <span>[ ESTIMATOR INTERAKTIF // TRANSPARAN ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight font-[var(--font-display)] leading-[1.12]">
            Hitung perkiraan lingkup &amp; biaya proyek Anda.
          </h2>
          <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed">
            Gunakan kalkulator interaktif ini untuk memetakan modul yang Anda butuhkan. Dapatkan rincian instan dan kirim langsung ke tim kami untuk audit awal 15 menit.
          </p>
        </div>

        {/* Calculator Main Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Choose Track */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAFAFA] border border-neutral-200">
              <span className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-4">
                01 // PILIH KATEGORI KEBUTUHAN
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setTrack("biz");
                    setSelectedModule("pos");
                    setAddOns([]);
                  }}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    track === "biz"
                      ? "bg-white border-[#FB6C00] shadow-sm ring-1 ring-[#FB6C00]"
                      : "bg-white/60 border-neutral-200 hover:border-neutral-300"
                  }`}
                >
                  <Store className={`w-5 h-5 mb-2 ${track === "biz" ? "text-[#FB6C00]" : "text-neutral-500"}`} />
                  <div className="font-bold text-sm text-[#0A0A0A]">Bisnis &amp; UMKM</div>
                  <div className="text-xs text-neutral-500 mt-1">Sistem kasir, POS, web profil, otomasi</div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setTrack("edu");
                    setSelectedModule("debugging");
                    setAddOns([]);
                  }}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    track === "edu"
                      ? "bg-white border-[#E73F1E] shadow-sm ring-1 ring-[#E73F1E]"
                      : "bg-white/60 border-neutral-200 hover:border-neutral-300"
                  }`}
                >
                  <GraduationCap className={`w-5 h-5 mb-2 ${track === "edu" ? "text-[#E73F1E]" : "text-neutral-500"}`} />
                  <div className="font-bold text-sm text-[#0A0A0A]">Mentoring Mahasiswa IT</div>
                  <div className="text-xs text-neutral-500 mt-1">Bimbingan logika, tugas akhir, simulasi sidang</div>
                </button>
              </div>
            </div>

            {/* Step 2: Choose Primary Module */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAFAFA] border border-neutral-200">
              <span className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-4">
                02 // PILIH SPESIFIKASI MODUL UTAMA
              </span>
              <div className="space-y-3">
                {currentModules.map((mod) => (
                  <button
                    key={mod.id}
                    type="button"
                    onClick={() => setSelectedModule(mod.id)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-start justify-between gap-4 ${
                      selectedModule === mod.id
                        ? "bg-white border-neutral-900 shadow-sm ring-1 ring-neutral-900"
                        : "bg-white/60 border-neutral-200 hover:border-neutral-300"
                    }`}
                  >
                    <div>
                      <div className="font-bold text-sm text-[#0A0A0A]">{mod.name}</div>
                      <div className="text-xs text-neutral-500 mt-1 leading-relaxed">{mod.desc}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-mono text-xs font-bold text-[#FB6C00]">{mod.priceLabel}</div>
                      <div className="font-mono text-[11px] text-neutral-400 mt-1">{mod.timeline}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Optional Add-ons */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAFAFA] border border-neutral-200">
              <span className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-4">
                03 // FITUR TAMBAHAN / ADD-ONS (OPSIONAL)
              </span>
              <div className="space-y-2.5">
                {currentAddOns.map((addon) => {
                  const isChecked = addOns.includes(addon.id);
                  return (
                    <label
                      key={addon.id}
                      onClick={() => toggleAddOn(addon.id)}
                      className={`flex items-center justify-between p-3.5 rounded-xl border text-xs cursor-pointer transition-colors ${
                        isChecked
                          ? "bg-white border-[#FB6C00] text-neutral-900 font-semibold"
                          : "bg-white/60 border-neutral-200 text-neutral-600 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                            isChecked
                              ? "bg-[#FB6C00] border-[#FB6C00] text-white"
                              : "border-neutral-300 bg-white"
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span>{addon.name}</span>
                      </div>
                      <span className="font-mono text-neutral-500">
                        +{new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(addon.price)}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Contact Information */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAFAFA] border border-neutral-200">
              <span className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-4">
                04 // INFORMASI ANDA (UNTUK DISKUSI)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Nama / Usaha Anda
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Budi (Kopi Nusantara)"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-hidden focus:border-[#FB6C00] focus:ring-1 focus:ring-[#FB6C00]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Nomor WhatsApp
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: 081234567890"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-hidden focus:border-[#FB6C00] focus:ring-1 focus:ring-[#FB6C00]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                  Catatan Kebutuhan Tambahan (Opsional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ceritakan gambaran singkat sistem atau kesulitan kodingan Anda..."
                  value={projectNotes}
                  onChange={(e) => setProjectNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-hidden focus:border-[#FB6C00] focus:ring-1 focus:ring-[#FB6C00]"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Live Summary Ledger (Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="rounded-3xl bg-neutral-900 text-white p-8 sm:p-10 border border-neutral-800 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,rgba(251,108,0,0.15)_0%,transparent_70%)] pointer-events-none blur-2xl" />

              <div className="relative z-10">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
                  <span className="font-mono text-xs font-bold text-[#F9B637] uppercase tracking-wider">
                    ESTIMASI RINGKASAN
                  </span>
                  <span className="font-mono text-xs text-neutral-400">
                    REAL-TIME SYNC
                  </span>
                </div>

                <div className="mb-6">
                  <div className="text-xs text-neutral-400 mb-1 font-mono uppercase">
                    ESTIMASI TOTAL INVESTASI
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white font-[var(--font-display)]">
                    {formattedTotal}
                  </div>
                  <div className="mt-2 text-xs text-neutral-400">
                    *Estimasi awal. Biaya final disepakati dalam kontrak fixed-scope.
                  </div>
                </div>

                <div className="space-y-3 py-6 border-y border-neutral-800 text-xs">
                  <div className="flex justify-between text-neutral-300">
                    <span className="text-neutral-400">Kategori:</span>
                    <span className="font-semibold text-white">
                      {track === "biz" ? "Solusi Bisnis & UMKM" : "Mentoring IT & Skripsi"}
                    </span>
                  </div>
                  <div className="flex justify-between text-neutral-300">
                    <span className="text-neutral-400">Modul Utama:</span>
                    <span className="font-semibold text-white text-right max-w-[200px]">
                      {currentModuleData.name}
                    </span>
                  </div>
                  <div className="flex justify-between text-neutral-300">
                    <span className="text-neutral-400">Estimasi Durasi:</span>
                    <span className="font-mono text-[#F9B637]">
                      {currentModuleData.timeline}
                    </span>
                  </div>
                  {addOns.length > 0 && (
                    <div className="flex justify-between text-neutral-300">
                      <span className="text-neutral-400">Add-ons ({addOns.length}):</span>
                      <span className="text-neutral-200">Termasuk</span>
                    </div>
                  )}
                  <div className="flex justify-between text-neutral-300">
                    <span className="text-neutral-400">Garansi:</span>
                    <span className="text-emerald-400">30 Hari Active SLA</span>
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href={createWhatsAppUrl(generateWhatsAppMessage())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-gradient-to-r from-[#FB6C00] to-[#E73F1E] text-white font-bold text-sm hover:opacity-95 shadow-md active:scale-95 transition-all"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Kirim Rincian ke WhatsApp</span>
                  </a>

                  <p className="mt-4 text-[11px] text-center text-neutral-400 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Tanpa kewajiban membeli. Diskusi awal 15 menit 100% gratis.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
