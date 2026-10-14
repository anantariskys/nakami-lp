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
          ? "bg-[#121316]/95 backdrop-blur-md border-b border-[#2E323B] shadow-lg py-3 sm:py-3.5"
          : "bg-transparent border-b border-[#2E323B]/50 py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo — docs/06 §5.1: monogram 36px desktop / 32px mobile */}
        <Link
          href="/"
          className="group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FB6C00] rounded-lg shrink-0"
          aria-label="Nakami Studio Homepage"
        >
          <div className="sm:hidden">
            <MonogramLogo size={32} useAppIcon={false} variant="dark" />
          </div>
          <div className="hidden sm:block">
            <MonogramLogo size={36} useAppIcon={false} variant="dark" />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-[#94A3B8]">
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
            className="hover:text-[#F9B637] text-[#F9B637] font-semibold transition-colors"
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
            className="text-sm font-medium text-[#94A3B8] hover:text-white transition-colors"
          >
            Hitung Estimasi
          </a>

          <a
            href={createWhatsAppUrl(
              "Halo Nakami Studio, saya ingin konsultasi kebutuhan sistem bisnis / mentoring IT..."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FB6C00] to-[#E73F1E] hover:shadow-glow-warm text-[#121316] text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95"
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
            className="p-2 rounded-lg text-[#94A3B8] hover:text-white hover:bg-[#1C1E24] focus:outline-hidden focus:ring-2 focus:ring-[#FB6C00]"
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

      {/* Mobile Menu Drawer - Docs Spec: bg-[#17181C]/95 */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] sm:top-[68px] z-40 bg-[#17181C]/95 backdrop-blur-xl px-6 py-8 flex flex-col justify-between pointer-events-auto lg:hidden overflow-y-auto border-t border-[#2E323B]">
          <nav className="flex flex-col text-sm font-semibold text-[#94A3B8]">
            <a
              href="#layanan-bisnis"
              onClick={() => handleNavClick("biz", "layanan-bisnis")}
              className="py-3.5 border-b border-[#2E323B] flex items-center justify-between hover:text-white transition-colors"
            >
              <span>Solusi Bisnis & UMKM</span>
              <ArrowUpRight className="w-4 h-4 text-[#3F4450]" />
            </a>
            <a
              href="#mentoring-it"
              onClick={() => handleNavClick("edu", "mentoring-it")}
              className="py-3.5 border-b border-[#2E323B] flex items-center justify-between hover:text-white transition-colors"
            >
              <span>Mentoring IT & Skripsi</span>
              <ArrowUpRight className="w-4 h-4 text-[#3F4450]" />
            </a>
            <a
              href="#standar-kualitas"
              onClick={closeMenu}
              className="py-3.5 border-b border-[#2E323B] flex items-center justify-between hover:text-white transition-colors"
            >
              <span>Standar Kualitas Rekayasa</span>
              <ArrowUpRight className="w-4 h-4 text-[#3F4450]" />
            </a>
            <a
              href="#transparansi-biaya"
              onClick={closeMenu}
              className="py-3.5 border-b border-[#2E323B] flex items-center justify-between hover:text-white transition-colors"
            >
              <span>Skema Biaya & 3 Termin</span>
              <ArrowUpRight className="w-4 h-4 text-[#3F4450]" />
            </a>
            <a
              href="#kalkulator-estimasi"
              onClick={closeMenu}
              className="py-3.5 border-b border-[#2E323B] flex items-center justify-between hover:text-white transition-colors"
            >
              <span>Kalkulator Estimasi Proyek</span>
              <ArrowUpRight className="w-4 h-4 text-[#3F4450]" />
            </a>
            <a
              href="#manifesto-etis"
              onClick={() => handleNavClick("edu", "manifesto-etis")}
              className="py-3.5 border-b border-[#2E323B] flex items-center justify-between text-[#F9B637] hover:text-[#FFDD9C] transition-colors"
            >
              <span>Manifesto Anti-Joki (Etis)</span>
              <ArrowUpRight className="w-4 h-4 text-[#F9B637]" />
            </a>
            <a
              href="#faq"
              onClick={closeMenu}
              className="py-3.5 border-b border-[#2E323B] flex items-center justify-between hover:text-white transition-colors"
            >
              <span>Tanya Jawab (FAQ)</span>
              <ArrowUpRight className="w-4 h-4 text-[#3F4450]" />
            </a>
          </nav>

          <div className="pt-6 border-t border-[#2E323B]">
            <a
              href={createWhatsAppUrl(
                "Halo Nakami Studio, saya ingin konsultasi kebutuhan sistem bisnis / mentoring IT..."
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#FB6C00] to-[#E73F1E] text-[#121316] font-bold text-sm shadow-glow-warm"
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
