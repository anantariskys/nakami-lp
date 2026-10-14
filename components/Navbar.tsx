"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MonogramLogo } from "./MonogramLogo";
import { createWhatsAppUrl } from "@/lib/constants";
import { MessageCircle, Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";

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

  const handleNavClick = (track?: "biz" | "edu", targetId?: string) => {
    if (track && typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("nakami:switch-track", { detail: { track, targetId } })
      );
    }
    closeMenu();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/92 backdrop-blur-md border-b border-neutral-200/80 shadow-xs py-3 sm:py-3.5"
          : "bg-white/60 backdrop-blur-xs border-b border-neutral-200/50 py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link
          href="/"
          className="group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FB6C00] rounded-lg shrink-0"
          aria-label="Nakami Studio Homepage"
        >
          <div className="sm:hidden">
            <MonogramLogo size={32} useAppIcon={false} variant="light" />
          </div>
          <div className="hidden sm:block">
            <MonogramLogo size={36} useAppIcon={false} variant="light" />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8 text-sm font-medium text-neutral-600">
          <a
            href="#layanan-bisnis"
            onClick={() => handleNavClick("biz", "layanan-bisnis")}
            className="hover:text-neutral-900 transition-colors flex items-center gap-1"
          >
            <span>Solusi Bisnis</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-50" />
          </a>
          <a
            href="#mentoring-it"
            onClick={() => handleNavClick("edu", "mentoring-it")}
            className="hover:text-neutral-900 transition-colors flex items-center gap-1"
          >
            <span>Mentoring IT</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-50" />
          </a>
          <a
            href="#standar-kualitas"
            className="hover:text-neutral-900 transition-colors"
          >
            Standar Kualitas
          </a>
          <a
            href="#transparansi-biaya"
            className="hover:text-neutral-900 transition-colors flex items-center gap-1"
          >
            <span>Alur Biaya</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-50" />
          </a>
          <a
            href="#manifesto-etis"
            onClick={() => handleNavClick("edu", "manifesto-etis")}
            className="text-[#E73F1E] font-semibold hover:text-[#FB6C00] transition-colors"
          >
            Anti-Joki
          </a>
          <a href="#faq" className="hover:text-neutral-900 transition-colors">
            FAQ
          </a>
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-5">
          <a
            href="#kalkulator-estimasi"
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            Hitung Estimasi
          </a>

          <a
            href={createWhatsAppUrl(
              "Halo Nakami Studio, saya ingin konsultasi kebutuhan sistem bisnis / mentoring IT..."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FB6C00] to-[#E73F1E] hover:opacity-95 text-white text-xs sm:text-sm font-bold transition-all shadow-sm active:scale-95"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>Konsultasi WA</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex lg:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 focus:outline-hidden focus:ring-2 focus:ring-[#FB6C00]"
            aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu navigasi"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] sm:top-[68px] z-40 bg-white/98 backdrop-blur-xl px-6 py-8 flex flex-col justify-between pointer-events-auto lg:hidden overflow-y-auto border-t border-neutral-200">
          <nav className="flex flex-col text-sm font-semibold text-neutral-700">
            <a
              href="#layanan-bisnis"
              onClick={() => handleNavClick("biz", "layanan-bisnis")}
              className="py-3.5 border-b border-neutral-200 flex items-center justify-between hover:text-neutral-950 transition-colors"
            >
              <span>Solusi Bisnis & UMKM</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-400" />
            </a>
            <a
              href="#mentoring-it"
              onClick={() => handleNavClick("edu", "mentoring-it")}
              className="py-3.5 border-b border-neutral-200 flex items-center justify-between hover:text-neutral-950 transition-colors"
            >
              <span>Mentoring IT & Skripsi</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-400" />
            </a>
            <a
              href="#standar-kualitas"
              onClick={closeMenu}
              className="py-3.5 border-b border-neutral-200 flex items-center justify-between hover:text-neutral-950 transition-colors"
            >
              <span>Standar Kualitas Rekayasa</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-400" />
            </a>
            <a
              href="#transparansi-biaya"
              onClick={closeMenu}
              className="py-3.5 border-b border-neutral-200 flex items-center justify-between hover:text-neutral-950 transition-colors"
            >
              <span>Skema Biaya & 3 Termin</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-400" />
            </a>
            <a
              href="#kalkulator-estimasi"
              onClick={closeMenu}
              className="py-3.5 border-b border-neutral-200 flex items-center justify-between hover:text-neutral-950 transition-colors"
            >
              <span>Kalkulator Estimasi Proyek</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-400" />
            </a>
            <a
              href="#manifesto-etis"
              onClick={() => handleNavClick("edu", "manifesto-etis")}
              className="py-3.5 border-b border-neutral-200 flex items-center justify-between text-[#E73F1E] hover:text-[#FB6C00] transition-colors"
            >
              <span>Manifesto Anti-Joki (Etis)</span>
              <ArrowUpRight className="w-4 h-4 text-[#E73F1E]" />
            </a>
            <a
              href="#faq"
              onClick={closeMenu}
              className="py-3.5 border-b border-neutral-200 flex items-center justify-between hover:text-neutral-950 transition-colors"
            >
              <span>Tanya Jawab (FAQ)</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-400" />
            </a>
          </nav>

          <div className="pt-6 border-t border-neutral-200">
            <a
              href={createWhatsAppUrl(
                "Halo Nakami Studio, saya ingin konsultasi kebutuhan sistem bisnis / mentoring IT..."
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#FB6C00] to-[#E73F1E] text-white font-bold text-sm shadow-md"
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
