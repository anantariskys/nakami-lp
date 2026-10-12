import React from "react";
import Link from "next/link";
import { MonogramLogo } from "./MonogramLogo";
import { OFFICIAL_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, GITHUB_URL } from "@/lib/constants";
import { Mail, Clock, ShieldAlert } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#F8FAFC] border-t border-slate-200 text-slate-600 text-sm pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block" aria-label="Nakami Studio Homepage">
              <MonogramLogo size={36} variant="light" />
            </Link>
            <p className="text-slate-600 text-sm max-w-sm leading-relaxed">
              Solusi web dan software kasir untuk efisiensi bisnis, serta mentoring coding 1-on-1 etis untuk mahasiswa IT.
            </p>

            <div className="space-y-2 text-xs font-mono text-slate-600 pt-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FB6C00]" />
                <a href={`mailto:${OFFICIAL_EMAIL}`} className="hover:text-[#C2410C] transition-colors font-medium">
                  {OFFICIAL_EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>Senin - Sabtu | 09:00 - 21:00 WIB</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-[#FB6C00] hover:border-[#FB6C00] shadow-sm transition-colors"
                aria-label={`Kunjungi Instagram ${INSTAGRAM_HANDLE}`}
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-[#FB6C00] hover:border-[#FB6C00] shadow-sm transition-colors"
                aria-label="Kunjungi Profil GitHub Nakami Studio"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav: Solusi Bisnis */}
          <div>
            <h4 className="text-[#0F172A] font-bold text-sm uppercase tracking-wider font-mono mb-4">
              Solusi UMKM
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#services-biz" className="hover:text-[#C2410C] transition-colors">
                  BIZ-01 Web Profil & Landing Page
                </a>
              </li>
              <li>
                <a href="#services-biz" className="hover:text-[#C2410C] transition-colors">
                  BIZ-02 Aplikasi Kasir & Stok Multi-Outlet
                </a>
              </li>
              <li>
                <a href="#services-biz" className="hover:text-[#C2410C] transition-colors">
                  BIZ-03 Sistem Booking & Reservasi
                </a>
              </li>
              <li>
                <a href="#services-biz" className="hover:text-[#C2410C] transition-colors">
                  BIZ-04 Otomasi SOP & Sistem Kustom
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#C2410C] transition-colors">
                  Skema 3 Termin (DP 50-30-20)
                </a>
              </li>
            </ul>
          </div>

          {/* Nav: Mentoring Mahasiswa */}
          <div>
            <h4 className="text-[#0F172A] font-bold text-sm uppercase tracking-wider font-mono mb-4">
              Mentoring IT
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#services-edu" className="hover:text-[#C2410C] transition-colors">
                  EDU-01 Live Debugging 1-on-1
                </a>
              </li>
              <li>
                <a href="#services-edu" className="hover:text-[#C2410C] transition-colors">
                  EDU-02 Mentoring Database & API
                </a>
              </li>
              <li>
                <a href="#services-edu" className="hover:text-[#C2410C] transition-colors">
                  EDU-03 Simulasi Sidang Skripsi
                </a>
              </li>
              <li>
                <a href="#non-joki" className="text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 hover:bg-amber-100 font-semibold transition-colors flex items-center gap-1 w-fit">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-700" />
                  <span>Kebijakan Anti-Joki</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Nav: Transparansi & Prinsip */}
          <div>
            <h4 className="text-[#0F172A] font-bold text-sm uppercase tracking-wider font-mono mb-4">
              Transparansi
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#pricing" className="hover:text-[#C2410C] transition-colors">
                  Fixed-Scope Agreement
                </a>
              </li>
              <li>
                <a href="#problem-solution" className="hover:text-[#C2410C] transition-colors">
                  Diagnostik Operasional
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#C2410C] transition-colors">
                  Garansi Perbaikan Bug 30 Hari
                </a>
              </li>
              <li>
                <a href="#audit-intake" className="hover:text-[#C2410C] transition-colors">
                  Cek Estimasi Kebutuhan
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Ethics Disclaimer */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© 2026 Nakami Studio. Hak Cipta Dilindungi.</p>
          <p className="text-center md:text-right">
            Menjunjung etika rekayasa perangkat lunak dan integritas akademis mahasiswa.
          </p>
        </div>
      </div>
    </footer>
  );
}
