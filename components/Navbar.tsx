"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MonogramLogo } from "./MonogramLogo";
import { createWhatsAppUrl } from "@/lib/constants";
import { MessageCircle, Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none transition-all duration-300">
      <div
        className={`w-full max-w-6xl pointer-events-auto rounded-full transition-all duration-300 flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm"
            : "bg-white/90 backdrop-blur-sm border border-slate-200/80 shadow-2xs"
        }`}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FB6C00] rounded-full shrink-0"
          aria-label="Nakami Studio Homepage"
        >
          <MonogramLogo size={34} variant="light" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-600">
          <a
            href="#layanan-bisnis"
            className="hover:text-slate-900 transition-colors"
          >
            Solusi Bisnis
          </a>
          <a
            href="#mentoring-it"
            className="hover:text-slate-900 transition-colors"
          >
            Mentoring IT
          </a>
          <a
            href="#kalkulator-estimasi"
            className="hover:text-slate-900 transition-colors"
          >
            Kalkulator
          </a>
          <a
            href="#manifesto-etis"
            className="hover:text-[#FB6C00] transition-colors font-semibold"
          >
            Manifesto Anti-Joki
          </a>
          <a
            href="#transparansi-biaya"
            className="hover:text-slate-900 transition-colors"
          >
            Alur Biaya
          </a>
          <a href="#faq" className="hover:text-slate-900 transition-colors">
            FAQ
          </a>
        </nav>

        {/* Right Action: Direct WhatsApp CTA Pill */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href={createWhatsAppUrl(
              "Halo Nakami Studio, saya ingin konsultasi kebutuhan sistem bisnis / mentoring IT..."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FB6C00] hover:bg-[#E73F1E] text-white text-xs sm:text-sm font-semibold transition-all shadow-2xs hover:shadow-sm active:translate-y-px"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>Konsultasi WA</span>
            <ArrowUpRight className="w-3.5 h-3.5 shrink-0 opacity-80" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex lg:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden focus:ring-2 focus:ring-[#FB6C00]"
            aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu navigasi"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] z-40 bg-white/98 backdrop-blur-md px-6 py-8 flex flex-col justify-between pointer-events-auto lg:hidden overflow-y-auto">
          <nav className="flex flex-col space-y-4 text-base font-semibold text-slate-800">
            <a
              href="#layanan-bisnis"
              onClick={closeMenu}
              className="py-3 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Solusi Bisnis & UMKM</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#mentoring-it"
              onClick={closeMenu}
              className="py-3 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Mentoring IT & Skripsi</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#kalkulator-estimasi"
              onClick={closeMenu}
              className="py-3 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Kalkulator Estimasi Proyek</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#manifesto-etis"
              onClick={closeMenu}
              className="py-3 border-b border-slate-100 flex items-center justify-between text-[#FB6C00]"
            >
              <span>Manifesto Anti-Joki (Etis)</span>
              <ArrowUpRight className="w-4 h-4 text-[#FB6C00]" />
            </a>
            <a
              href="#transparansi-biaya"
              onClick={closeMenu}
              className="py-3 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Skema Biaya & 3 Termin</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#faq"
              onClick={closeMenu}
              className="py-3 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Tanya Jawab (FAQ)</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </a>
          </nav>

          <div className="pt-6 border-t border-slate-200">
            <a
              href={createWhatsAppUrl(
                "Halo Nakami Studio, saya ingin konsultasi kebutuhan sistem bisnis / mentoring IT..."
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#FB6C00] text-white font-bold text-sm shadow-sm"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Hubungi via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
