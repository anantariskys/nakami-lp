"use client";

import React from "react";
import Link from "next/link";
import { MonogramLogo } from "./MonogramLogo";
import { OFFICIAL_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, GITHUB_URL } from "@/lib/constants";
import { Mail, Clock, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0E0F12] border-t border-[#2E323B] text-[#94A3B8] text-sm pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          
          {/* Brand Info (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block" aria-label="Nakami Studio Homepage">
              <MonogramLogo size={36} variant="dark" />
            </Link>
            <p className="text-[#94A3B8] text-sm max-w-sm leading-relaxed">
              Studio rekayasa software kustom untuk efisiensi operasional bisnis UMKM, serta pendampingan teknis 1-on-1 bagi mahasiswa IT untuk memahami kode tanpa kompromi joki.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#6B7280] pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Rekayasa Teruji · Mentoring Etis · Kode Bersih</span>
            </div>
          </div>

          {/* Quick Links: Bisnis */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-white font-bold mb-4">
              Solusi Bisnis
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#layanan-bisnis" className="hover:text-white transition-colors">
                  Website Profil &amp; SEO
                </a>
              </li>
              <li>
                <a href="#layanan-bisnis" className="hover:text-white transition-colors">
                  Aplikasi Kasir (POS) Cloud
                </a>
              </li>
              <li>
                <a href="#layanan-bisnis" className="hover:text-white transition-colors">
                  Sistem Booking &amp; Reservasi
                </a>
              </li>
              <li>
                <a href="#transparansi-biaya" className="hover:text-white transition-colors">
                  Skema 3 Termin UMKM
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links: Pendidikan IT */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-white font-bold mb-4">
              Mentoring Akademik
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#mentoring-it" className="hover:text-white transition-colors">
                  Live Debugging 1-on-1
                </a>
              </li>
              <li>
                <a href="#mentoring-it" className="hover:text-white transition-colors">
                  Arsitektur Database &amp; API
                </a>
              </li>
              <li>
                <a href="#mentoring-it" className="hover:text-white transition-colors">
                  Simulasi Sidang Skripsi
                </a>
              </li>
              <li>
                <a href="#manifesto-etis" className="hover:text-white transition-colors">
                  Manifesto Anti-Joki
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-white font-bold mb-4">
              Kontak &amp; Operasional
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#6B7280] shrink-0 mt-0.5" />
                <a href={`mailto:${OFFICIAL_EMAIL}`} className="hover:text-white transition-colors">
                  {OFFICIAL_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#6B7280] shrink-0 mt-0.5" />
                <span>Senin - Sabtu: 09:00 - 21:00 WIB</span>
              </li>
              <li className="pt-2 flex items-center gap-3">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#94A3B8] hover:text-[#FB6C00] transition-colors"
                >
                  @{INSTAGRAM_HANDLE}
                </a>
                <span className="text-[#3F4450]">·</span>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#94A3B8] hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2E323B] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
          <div>
            &copy; 2026 Nakami Studio. Seluruh hak cipta dilindungi undang-undang.
          </div>
          <div className="flex items-center gap-1 text-[#6B7280]">
            <span>Dibuat dengan dedikasi rekayasa software di Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
