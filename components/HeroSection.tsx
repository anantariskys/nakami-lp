"use client";

import React, { useState } from "react";
import { createWhatsAppUrl } from "@/lib/constants";
import {
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Code2,
  Store,
  GraduationCap,
} from "lucide-react";

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<"biz" | "edu">("biz");

  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Value Proposition & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Studio Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FB6C00]" />
              <span>STUDIO REKAYASA SISTEM WEB & MENTORING IT</span>
            </div>

            {/* Semantic Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.12] mb-6 font-[var(--font-display)]">
              Sistem web presisi untuk bisnis,{" "}
              <span className="text-[#FB6C00]">mentoring etis</span> untuk mahasiswa.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl">
              Kami merancang website profil dan aplikasi kasir operasional kustom untuk UMKM tanpa biaya langganan membengkak, serta mendampingi mahasiswa IT memahami logika arsitektur dan kode secara mandiri hingga lulus sidang.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href={createWhatsAppUrl(
                  "Halo Nakami Studio, saya ingin konsultasi kebutuhan sistem bisnis / mentoring IT..."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#FB6C00] hover:bg-[#E73F1E] text-white font-bold text-sm sm:text-base shadow-xs transition-colors active:translate-y-px"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span>Konsultasi via WhatsApp</span>
              </a>

              <a
                href="#kalkulator-estimasi"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 font-semibold text-sm sm:text-base transition-colors"
              >
                <span>Hitung Estimasi Proyek</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </a>
            </div>

            {/* Trust & Guarantee Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100 w-full text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium">100% Kepemilikan Source Code</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium">Garansi 30 Hari Bebas Bug</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium">Bimbingan Etis Tanpa Joki</span>
              </div>
            </div>
          </div>

          {/* Right Column: Crafted Studio Interactive Dual-Showcase */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-2 sm:p-3 shadow-md">
              
              {/* Showcase Mode Switcher */}
              <div className="flex items-center gap-2 mb-3 bg-white p-1 rounded-xl border border-slate-200">
                <button
                  type="button"
                  onClick={() => setActiveTab("biz")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                    activeTab === "biz"
                      ? "bg-[#FB6C00] text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <Store className="w-4 h-4" />
                  <span>Sistem Bisnis (POS)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("edu")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                    activeTab === "edu"
                      ? "bg-slate-900 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <Code2 className="w-4 h-4" />
                  <span>Mentoring IT (Code)</span>
                </button>
              </div>

              {/* Showcase Body 1: Sistem Bisnis (POS Kasir & Stok) */}
              {activeTab === "biz" ? (
                <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 text-slate-800 space-y-4">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div>
                      <div className="text-xs font-mono text-slate-400">NAKAMI POS & INVENTARIS</div>
                      <div className="text-sm font-bold text-slate-900">Outlet Kopi & Roastery - Kasir 01</div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Online Sync
                    </span>
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                      <div className="text-[11px] text-slate-500">Omzet Hari Ini</div>
                      <div className="text-base sm:text-lg font-bold text-slate-900">Rp 3.420.000</div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                      <div className="text-[11px] text-slate-500">Transaksi Berhasil</div>
                      <div className="text-base sm:text-lg font-bold text-slate-900">68 Struk</div>
                    </div>
                  </div>

                  {/* Active Order Cart Snippet */}
                  <div className="rounded-lg border border-slate-100 p-3 bg-slate-50/50 space-y-2">
                    <div className="text-xs font-semibold text-slate-700 flex justify-between">
                      <span>Pesanan Aktif (Meja 04)</span>
                      <span className="text-[#FB6C00]">Total: Rp 64.000</span>
                    </div>
                    <div className="text-xs text-slate-600 flex justify-between">
                      <span>2x Arabica Gayo Filter</span>
                      <span>Rp 44.000</span>
                    </div>
                    <div className="text-xs text-slate-600 flex justify-between">
                      <span>1x Cold Brew Oatmilk</span>
                      <span>Rp 20.000</span>
                    </div>
                  </div>

                  {/* Feature Benefit Callout */}
                  <div className="pt-1 text-xs text-slate-500 flex items-center justify-between border-t border-slate-100">
                    <span className="font-mono text-[11px]">No monthly fees per device</span>
                    <span className="text-slate-700 font-semibold">100% Milik Anda</span>
                  </div>
                </div>
              ) : (
                /* Showcase Body 2: Mentoring IT & Code Review */
                <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 sm:p-5 text-slate-200 space-y-4 font-mono text-xs">
                  {/* IDE Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      <span className="text-slate-400 text-[11px] ml-2">server/api/transaksi.ts</span>
                    </div>
                    <span className="text-slate-400 text-[11px]">1-on-1 Mentoring</span>
                  </div>

                  {/* Code Snippet */}
                  <div className="space-y-1 text-[11px] leading-relaxed text-slate-300">
                    <div>
                      <span className="text-purple-400">export async function</span>{" "}
                      <span className="text-blue-400">handleCheckout</span>
                      <span className="text-slate-400">(req: Request)</span> &#123;
                    </div>
                    <div className="pl-4 text-slate-400">
                      <span className="text-emerald-400">{"// Database transaction with row-level lock"}</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">const</span> stock ={" "}
                      <span className="text-yellow-400">await</span> db.inventory.checkAvailable(itemId);
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">if</span> (!stock) &#123;{" "}
                      <span className="text-purple-400">return</span> response.error(400); &#125;
                    </div>
                    <div>&#125;</div>
                  </div>

                  {/* Mentor Review Annotation */}
                  <div className="rounded-lg bg-slate-900 border border-amber-500/30 p-3 text-slate-300 space-y-1">
                    <div className="flex items-center gap-1.5 text-amber-400 font-bold text-[11px]">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>Catatan Mentor Nakami:</span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-slate-300 font-sans">
                      &quot;Struktur transaksi database sudah rapi. Besok saat simulasi sidang, kita latih bagaimana kamu menjelaskan penanganan race condition saat 2 pembeli checkout bersamaan.&quot;
                    </p>
                  </div>

                  <div className="pt-1 text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800 font-sans">
                    <span>Live Screen-Share & Code Review</span>
                    <span className="text-emerald-400 font-semibold font-mono">Siap Hadapi Sidang</span>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
