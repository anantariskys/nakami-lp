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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-3.5"
          : "bg-white/90 backdrop-blur-xs border-b border-slate-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FB6C00] rounded-lg"
            aria-label="Nakami Studio Homepage"
          >
            <MonogramLogo size={34} variant="light" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
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
              Kalkulator Proyek
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
              Skema Biaya
            </a>
            <a
              href="#faq"
              className="hover:text-slate-900 transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* Right Action: Direct WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={createWhatsAppUrl(
                "Halo Nakami Studio, saya ingin konsultasi kebutuhan sistem/mentoring..."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#FB6C00] hover:bg-[#E73F1E] text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs active:translate-y-px"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>Konsultasi WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex sm:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden focus:ring-2 focus:ring-[#FB6C00]"
              aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu navigasi"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-40 bg-white border-t border-slate-200 px-6 py-8 flex flex-col justify-between sm:hidden overflow-y-auto">
          <nav className="flex flex-col space-y-5 text-base font-semibold text-slate-800">
            <a
              href="#layanan-bisnis"
              onClick={closeMenu}
              className="py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Solusi Bisnis & UMKM</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#mentoring-it"
              onClick={closeMenu}
              className="py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Mentoring IT & Skripsi</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#kalkulator-estimasi"
              onClick={closeMenu}
              className="py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Kalkulator Estimasi</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#manifesto-etis"
              onClick={closeMenu}
              className="py-2 border-b border-slate-100 flex items-center justify-between text-[#FB6C00]"
            >
              <span>Manifesto Anti-Joki</span>
              <ArrowUpRight className="w-4 h-4 text-[#FB6C00]" />
            </a>
            <a
              href="#transparansi-biaya"
              onClick={closeMenu}
              className="py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Skema Biaya & Termin</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#faq"
              onClick={closeMenu}
              className="py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Tanya Jawab (FAQ)</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </a>
          </nav>

          <div className="pt-6 border-t border-slate-200">
            <a
              href={createWhatsAppUrl(
                "Halo Nakami Studio, saya ingin konsultasi kebutuhan sistem/mentoring..."
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-[#FB6C00] text-white font-bold text-sm shadow-sm"
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
