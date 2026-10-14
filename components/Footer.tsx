"use client";

import React from "react";
import Link from "next/link";
import { MonogramLogo } from "./MonogramLogo";
import { createWhatsAppUrl } from "@/lib/constants";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#FAFAFA] border-t border-neutral-200 text-[#0A0A0A] pt-16 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-neutral-200">
          
          {/* Brand & Mission Statement (Span 4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block" aria-label="Nakami Studio">
              <MonogramLogo size={36} useAppIcon={false} variant="light" />
            </Link>

            <p className="text-sm text-neutral-600 leading-relaxed max-w-sm">
              Studio rekayasa software independen. Kami membangun sistem kasir &amp; operasional mandiri untuk UMKM, serta membimbing mahasiswa IT secara etis tanpa joki.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-neutral-200 text-xs font-mono text-neutral-700 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>SISTEM PRODUKSI NORMAL // SLA 99.9%</span>
            </div>
          </div>

          {/* Column 1: Solusi Bisnis & UMKM (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-mono text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2">
              SOLUSI BISNIS &amp; UMKM
            </div>
            <ul className="space-y-2.5 text-sm text-neutral-600">
              <li>
                <a href="#layanan-bisnis" className="hover:text-black transition-colors">
                  Sistem Kasir (POS) Offline-First
                </a>
              </li>
              <li>
                <a href="#layanan-bisnis" className="hover:text-black transition-colors">
                  Manajemen Stok &amp; Multi-Outlet
                </a>
              </li>
              <li>
                <a href="#layanan-bisnis" className="hover:text-black transition-colors">
                  Website Profil Kredibilitas Tinggi
                </a>
              </li>
              <li>
                <a href="#layanan-bisnis" className="hover:text-black transition-colors">
                  Sistem Reservasi &amp; Booking
                </a>
              </li>
              <li>
                <a href="#transparansi-biaya" className="hover:text-black transition-colors">
                  Skema Pembayaran 3 Termin
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Mentoring IT & Edukasi (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-mono text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2">
              MENTORING IT &amp; SKRIPSI
            </div>
            <ul className="space-y-2.5 text-sm text-neutral-600">
              <li>
                <a href="#mentoring-it" className="hover:text-black transition-colors">
                  Live Screen-Share Debugging 1-on-1
                </a>
              </li>
              <li>
                <a href="#mentoring-it" className="hover:text-black transition-colors">
                  Arsitektur Database &amp; API
                </a>
              </li>
              <li>
                <a href="#mentoring-it" className="hover:text-black transition-colors">
                  Simulasi Ujian Sidang Skripsi
                </a>
              </li>
              <li>
                <a href="#manifesto-etis" className="text-[#E73F1E] font-semibold hover:text-[#FB6C00] transition-colors">
                  Manifesto Etis Anti-Joki
                </a>
              </li>
              <li>
                <a href="#standar-kualitas" className="hover:text-black transition-colors">
                  Standar Clean Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Kontak & Jam Operasional (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-mono text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2">
              HUBUNGI KAMI
            </div>
            <div className="space-y-2.5 text-sm text-neutral-600">
              <a
                href={createWhatsAppUrl("Halo Nakami Studio, saya ingin berdiskusi...")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#0A0A0A] font-bold hover:text-[#FB6C00] transition-colors"
              >
                <span>WhatsApp Resmi</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Senin — Sabtu: 09:00 - 21:00 WIB
              </p>
              <p className="text-xs text-neutral-500">
                Indonesia (Remote Worldwide)
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            &copy; {currentYear} NAKAMI STUDIO. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-2 text-neutral-600">
            <ShieldCheck className="w-4 h-4 text-[#FB6C00]" />
            <span>ETHICAL ENGINEERING • NO JOKI TOLERANCE</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
