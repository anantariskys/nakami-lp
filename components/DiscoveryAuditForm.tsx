"use client";

import React, { useState } from "react";
import { createWhatsAppUrl } from "@/lib/constants";
import {
  Sparkles,
  MessageCircle,
  Building2,
  GraduationCap,
  RotateCcw,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

interface ProblemOption {
  id: string;
  label: string;
  recommendedCode: string;
  recommendedTitle: string;
  recommendationNote: string;
}

const BIZ_OPTIONS: ProblemOption[] = [
  {
    id: "biz_cashier",
    label: "Rekap Kasir & Stok Manual Sering Selisih",
    recommendedCode: "BIZ-02",
    recommendedTitle: "Aplikasi Kasir (POS) & Manajemen Stok Multi-Outlet",
    recommendationNote:
      "Sistem kasir cloud terintegrasi barcode scan dan kalkulasi otomatis tanpa langganan bulanan.",
  },
  {
    id: "biz_web",
    label: "Belum Punya Web Profil Kredibel di Google",
    recommendedCode: "BIZ-01",
    recommendedTitle: "Web Profil Bisnis & Landing Page Konversi Tinggi",
    recommendationNote:
      "Website kustom berkecepatan tinggi dengan skor Lighthouse 95+, SEO lokal, dan tombol kontak langsung.",
  },
  {
    id: "biz_booking",
    label: "Chat Booking & Jadwal Bertumpuk / Sering Bentrok",
    recommendedCode: "BIZ-03",
    recommendedTitle: "Sistem Reservasi & Booking Jadwal Otomatis",
    recommendationNote:
      "Portal reservasi mandiri 24/7 dengan kalender slot kosong dan konfirmasi WhatsApp otomatis.",
  },
  {
    id: "biz_custom",
    label: "Alur Kerja Internal Kaku & Butuh Software Kustom",
    recommendedCode: "BIZ-04",
    recommendedTitle: "Otomasi Alur Kerja & Software Kustom Perusahaan",
    recommendationNote:
      "Perancangan sistem internal tailor-made yang disesuaikan persis dengan alur SOP divisi Anda.",
  },
  {
    id: "biz_other",
    label: "Konsultasi Kebutuhan Sistem Bisnis Lainnya",
    recommendedCode: "BIZ-AUDIT",
    recommendedTitle: "Sesi Audit & Discovery Arsitektur Bisnis",
    recommendationNote:
      "Diskusi 1-on-1 bersama engineer untuk membedah problem operasional dan opsi teknologi terbaik.",
  },
];

const EDU_OPTIONS: ProblemOption[] = [
  {
    id: "edu_debug",
    label: "Stuck Error Debugging Berhari-hari",
    recommendedCode: "EDU-01",
    recommendedTitle: "Live Debugging 1-on-1 & Code Review Intensif",
    recommendationNote:
      "Sesi live screen-share mencari akar error bersama mentor dan pemahaman logika pencegahannya.",
  },
  {
    id: "edu_db",
    label: "Bingung Arsitektur Database / Relasi ERD & API",
    recommendedCode: "EDU-02",
    recommendedTitle: "Mentoring Arsitektur Database & Backend API",
    recommendationNote:
      "Perancangan relasi database terstruktur normalisasi dan standarisasi REST API siap sidang.",
  },
  {
    id: "edu_exam",
    label: "Cemas Menghadapi Sidang Skripsi & Pertanyaan Dosen",
    recommendedCode: "EDU-03",
    recommendedTitle: "Simulasi Sidang Skripsi IT & Bedah Kode Menyeluruh",
    recommendationNote:
      "Latihan tanya-jawab teknis khas penguji skripsi dan bedah alur kode baris demi baris.",
  },
  {
    id: "edu_logic",
    label: "Butuh Pemahaman Logika Kode Baris demi Baris",
    recommendedCode: "EDU-01",
    recommendedTitle: "Live Code Walkthrough & Mentoring Logika 1-on-1",
    recommendationNote:
      "Eksplorasi setiap baris algoritma agar Anda menguasai penuh karya ciptaan Anda sendiri.",
  },
  {
    id: "edu_other",
    label: "Konsultasi Topik Riset / Tugas Akhir Lainnya",
    recommendedCode: "EDU-AUDIT",
    recommendedTitle: "Konsultasi Arah Riset Perangkat Lunak Etis",
    recommendationNote:
      "Validasi metodologi software engineering dan kepatuhan integritas akademik tanpa joki.",
  },
];

export function DiscoveryAuditForm() {
  const [segment, setSegment] = useState<"biz" | "edu">("biz");
  const [selectedProblemId, setSelectedProblemId] = useState<string>("biz_cashier");
  const [clientName, setClientName] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const currentOptions = segment === "biz" ? BIZ_OPTIONS : EDU_OPTIONS;
  const currentSelectedOption =
    currentOptions.find((opt) => opt.id === selectedProblemId) || currentOptions[0];

  const handleSegmentChange = (newSegment: "biz" | "edu") => {
    setSegment(newSegment);
    setSelectedProblemId(newSegment === "biz" ? "biz_cashier" : "edu_debug");
    setErrorMsg("");
  };

  const handleReset = () => {
    setClientName("");
    setNotes("");
    setSelectedProblemId(segment === "biz" ? "biz_cashier" : "edu_debug");
    setErrorMsg("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim()) {
      setErrorMsg("Mohon isi Nama Lengkap atau Nama Usaha Anda terlebih dahulu.");
      return;
    }
    setErrorMsg("");

    const segmentLabel = segment === "biz" ? "Bisnis/UMKM" : "Mahasiswa/Riset IT";
    const waText = `Halo Nakami Studio!

Saya ingin konsultasi kebutuhan sistem/mentoring:
• Kategori: ${segmentLabel}
• Nama / Usaha: ${clientName.trim()}
• Kendala Utama: ${currentSelectedOption.label}
• Rekomendasi Awal: [${currentSelectedOption.recommendedCode}] ${currentSelectedOption.recommendedTitle}
${notes.trim() ? `• Catatan Tambahan: ${notes.trim()}\n` : ""}
Mohon info jadwal sesi diskusi 15 menit. Terima kasih!`;

    const url = createWhatsAppUrl(waText);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="audit-intake" className="py-20 md:py-28 bg-[#121316] relative scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1E24] border border-[#2E323B] text-xs font-mono text-[#FB6C00] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SIMULASI KEBUTUHAN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-[var(--font-display)] mb-4">
            Cek Solusi yang Sesuai{" "}
            <span className="text-sunset-gradient">
              dengan Kebutuhan Anda
            </span>
          </h2>
          <p className="text-[#94A3B8] text-base leading-relaxed">
            Pilih kendala yang sedang Anda hadapi untuk melihat estimasi modul dan rekomendasi solusi sebelum berdiskusi di WhatsApp.
          </p>
        </div>

        {/* Card Form */}
        <div className="rounded-3xl bg-[#1C1E24] border border-[#2E323B] p-6 sm:p-10 shadow-glow-card relative">
          <form onSubmit={handleSubmit} noValidate>
            {/* Step 1: Segment Toggle */}
            <div className="mb-8">
              <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-3">
                1. Pilih Kategori Kebutuhan Anda:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleSegmentChange("biz")}
                  className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl border text-sm font-bold transition-all ${
                    segment === "biz"
                      ? "bg-cta-gradient text-white border-transparent shadow-glow-warm"
                      : "bg-[#121316] text-[#94A3B8] border-[#2E323B] hover:text-white hover:border-[#3F4450]"
                  }`}
                >
                  <Building2 className="w-4 h-4 shrink-0" />
                  <span>Bisnis / UMKM</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleSegmentChange("edu")}
                  className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl border text-sm font-bold transition-all ${
                    segment === "edu"
                      ? "bg-cta-gradient text-white border-transparent shadow-glow-warm"
                      : "bg-[#121316] text-[#94A3B8] border-[#2E323B] hover:text-white hover:border-[#3F4450]"
                  }`}
                >
                  <GraduationCap className="w-4 h-4 shrink-0" />
                  <span>Mahasiswa IT / Riset</span>
                </button>
              </div>
            </div>

            {/* Step 2: Problem Chips */}
            <div className="mb-8">
              <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-3">
                2. Kendala yang Paling Sering Menghambat Anda Saat Ini:
              </label>
              <div className="flex flex-wrap gap-2.5">
                {currentOptions.map((opt) => {
                  const isSelected = selectedProblemId === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedProblemId(opt.id)}
                      className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium border text-left transition-all ${
                        isSelected
                          ? "bg-[#FB6C00]/15 text-white border-[#FB6C00] shadow-[0_0_12px_rgba(251,108,0,0.25)] font-semibold"
                          : "bg-[#121316] text-[#94A3B8] border-[#2E323B] hover:text-white hover:border-[#3F4450]"
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Text Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label
                  htmlFor="clientName"
                  className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-2"
                >
                  3. Nama Lengkap / Nama Bisnis <span className="text-[#EF4444]">*</span>
                </label>
                <input
                  id="clientName"
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => {
                    setClientName(e.target.value);
                    if (errorMsg) setErrorMsg("");
                  }}
                  placeholder={
                    segment === "biz"
                      ? "Contoh: Budi Santoso (Kopi Seduh Nusantara)"
                      : "Contoh: Dimas Aditya (Teknik Informatika)"
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#121316] border border-[#2E323B] text-white placeholder-[#64748B] text-sm focus:outline-none focus:border-[#FB6C00] focus:ring-1 focus:ring-[#FB6C00] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="notes"
                  className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-2"
                >
                  4. Catatan Tambahan (Opsional)
                </label>
                <input
                  id="notes"
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Contoh: Deadline 2 minggu, error di backend Node.js, dll."
                  className="w-full px-4 py-3 rounded-xl bg-[#121316] border border-[#2E323B] text-white placeholder-[#64748B] text-sm focus:outline-none focus:border-[#FB6C00] focus:ring-1 focus:ring-[#FB6C00] transition-colors"
                />
              </div>
            </div>

            {errorMsg && (
              <div className="mb-6 p-3 rounded-xl bg-[#EF4444]/10 border border-[#EF4444]/30 flex items-center gap-2 text-xs text-[#EF4444]">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Live Recommendation Preview Box */}
            <div className="mb-8 p-5 rounded-2xl bg-[#121316] border border-[#FB6C00]/40 relative overflow-hidden">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono text-[#F9B637] font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Rekomendasi Paket Sistem Otomatis:</span>
                </span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#1C1E24] text-[#FB6C00] border border-[#FB6C00]/30">
                  {currentSelectedOption.recommendedCode}
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1">
                {currentSelectedOption.recommendedTitle}
              </h4>
              <p className="text-xs sm:text-sm text-[#94A3B8]">
                {currentSelectedOption.recommendationNote}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#2E323B]">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono text-[#94A3B8] hover:text-white hover:bg-[#121316] transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Pilihan</span>
              </button>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-cta-gradient text-white font-bold text-sm sm:text-base hover:opacity-95 shadow-glow-warm transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Kirim & Mulai Konsultasi WhatsApp</span>
                <ArrowRight className="w-4 h-4 opacity-80" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
