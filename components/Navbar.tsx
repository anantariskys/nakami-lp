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
          ? "bg-[#070628]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3 sm:py-3.5"
          : "bg-transparent border-b border-white/10 py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link
          href="/"
          className="group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white rounded-full shrink-0"
          aria-label="Nakami Studio Homepage"
        >
          <MonogramLogo size={36} variant="dark" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-white/80">
          <a
            href="#layanan-bisnis"
            onClick={() => handleNavClick("biz", "layanan-bisnis")}
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <span>Solusi Bisnis</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-60" />
          </a>
          <a
            href="#mentoring-it"
            onClick={() => handleNavClick("edu", "mentoring-it")}
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <span>Mentoring IT</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-60" />
          </a>
          <a
            href="#standar-kualitas"
            className="hover:text-white transition-colors"
          >
            Standar Kualitas
          </a>
          <a
            href="#transparansi-biaya"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <span>Alur Biaya</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-60" />
          </a>
          <a
            href="#manifesto-etis"
            onClick={() => handleNavClick("edu", "manifesto-etis")}
            className="hover:text-[#FB6C00] text-orange-300 font-semibold transition-colors"
          >
            Anti-Joki
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
        </nav>

        {/* Right Actions: Utility Link + Solid Pill CTA Button */}
        <div className="hidden sm:flex items-center gap-5">
          <a
            href="#kalkulator-estimasi"
            className="text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            Hitung Estimasi
          </a>

          <a
            href={createWhatsAppUrl(
              "Halo Nakami Studio, saya ingin konsultasi kebutuhan sistem bisnis / mentoring IT..."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5B5CFB] hover:bg-[#4F46E5] text-white text-xs sm:text-sm font-semibold transition-all shadow-md active:scale-95"
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
            className="p-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 focus:outline-hidden focus:ring-2 focus:ring-white"
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
        <div className="fixed inset-0 top-[60px] sm:top-[68px] z-40 bg-[#070628]/98 backdrop-blur-md px-6 py-8 flex flex-col justify-between pointer-events-auto lg:hidden overflow-y-auto border-t border-white/10">
          <nav className="flex flex-col text-sm font-semibold text-white/90">
            <a
              href="#layanan-bisnis"
              onClick={() => handleNavClick("biz", "layanan-bisnis")}
              className="py-3.5 border-b border-white/10 flex items-center justify-between"
            >
              <span>Solusi Bisnis &amp; UMKM</span>
              <ArrowUpRight className="w-4 h-4 text-white/40" />
            </a>
            <a
              href="#mentoring-it"
              onClick={() => handleNavClick("edu", "mentoring-it")}
              className="py-3.5 border-b border-white/10 flex items-center justify-between"
            >
              <span>Mentoring IT &amp; Skripsi</span>
              <ArrowUpRight className="w-4 h-4 text-white/40" />
            </a>
            <a
              href="#standar-kualitas"
              onClick={closeMenu}
              className="py-3.5 border-b border-white/10 flex items-center justify-between"
            >
              <span>Standar Kualitas Rekayasa</span>
              <ArrowUpRight className="w-4 h-4 text-white/40" />
            </a>
            <a
              href="#transparansi-biaya"
              onClick={closeMenu}
              className="py-3.5 border-b border-white/10 flex items-center justify-between"
            >
              <span>Skema Biaya &amp; 3 Termin</span>
              <ArrowUpRight className="w-4 h-4 text-white/40" />
            </a>
            <a
              href="#kalkulator-estimasi"
              onClick={closeMenu}
              className="py-3.5 border-b border-white/10 flex items-center justify-between"
            >
              <span>Kalkulator Estimasi Proyek</span>
              <ArrowUpRight className="w-4 h-4 text-white/40" />
            </a>
            <a
              href="#manifesto-etis"
              onClick={() => handleNavClick("edu", "manifesto-etis")}
              className="py-3.5 border-b border-white/10 flex items-center justify-between text-orange-300"
            >
              <span>Manifesto Anti-Joki (Etis)</span>
              <ArrowUpRight className="w-4 h-4 text-orange-300" />
            </a>
            <a
              href="#faq"
              onClick={closeMenu}
              className="py-3.5 border-b border-white/10 flex items-center justify-between"
            >
              <span>Tanya Jawab (FAQ)</span>
              <ArrowUpRight className="w-4 h-4 text-white/40" />
            </a>
          </nav>

          <div className="pt-6 border-t border-white/10">
            <a
              href={createWhatsAppUrl(
                "Halo Nakami Studio, saya ingin konsultasi kebutuhan sistem bisnis / mentoring IT..."
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#5B5CFB] text-white font-bold text-sm shadow-md"
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
