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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#121316]/90 backdrop-blur-md border-b border-[#2E323B] shadow-lg shadow-black/30 py-3"
          : "bg-[#121316]/70 backdrop-blur-sm border-b border-[#2E323B]/60 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FB6C00] rounded-lg p-1"
            aria-label="Nakami Studio Homepage"
          >
            <MonogramLogo size={34} />
          </Link>

          {/* System Availability Status Pill (Desktop & Tablet) */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[#17181C] border border-[#2E323B] text-xs font-mono text-[#94A3B8]">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.5)]"></span>
            <span className="text-white font-medium">Slot Proyek Q4:</span>
            <span className="text-emerald-400">Siap Mulai</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#94A3B8]">
            <a
              href="#segment-overview"
              className="hover:text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#FB6C00] rounded px-1"
            >
              Solusi
            </a>
            <a
              href="#problem-solution"
              className="hover:text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#FB6C00] rounded px-1"
            >
              Komparasi
            </a>
            <a
              href="#pricing"
              className="hover:text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#FB6C00] rounded px-1"
            >
              Skema Harga
            </a>
            <a
              href="#non-joki"
              className="hover:text-amber-400 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#FB6C00] rounded px-1 text-xs uppercase tracking-wider font-semibold border border-amber-500/30 px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300"
            >
              Manifesto Etis
            </a>
            <a
              href="#faq"
              className="hover:text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#FB6C00] rounded px-1"
            >
              FAQ
            </a>
          </nav>

          {/* Desktop Direct CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={createWhatsAppUrl(
                "Halo Nakami Studio, saya ingin konsultasi kebutuhan sistem/mentoring..."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-cta-gradient text-white font-semibold text-sm hover:opacity-95 transition-all duration-200 shadow-glow-warm hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-amber-300"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Konsultasi WA</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={createWhatsAppUrl(
                "Halo Nakami Studio, saya ingin konsultasi kilat..."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#FB6C00] text-white hover:bg-[#E73F1E] transition-colors"
              aria-label="Chat WhatsApp Langsung"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#1C1E24] border border-[#2E323B] text-white hover:bg-[#242730] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FB6C00]"
              aria-label={mobileMenuOpen ? "Tutup Menu" : "Buka Menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu Navigasi Mobile"
          className="fixed inset-x-0 top-[65px] bottom-0 bg-[#121316]/98 backdrop-blur-xl z-40 p-6 flex flex-col justify-between border-t border-[#2E323B] md:hidden animate-in fade-in duration-200"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 p-3 rounded-lg bg-[#1C1E24] border border-[#2E323B] text-xs font-mono text-[#94A3B8]">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-white font-medium">Slot Proyek Q4:</span>
              <span className="text-emerald-400">Aktif & Siap Diskusi</span>
            </div>

            <nav className="flex flex-col gap-2 text-base font-semibold">
              <a
                href="#segment-overview"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg hover:bg-[#1C1E24] text-white border border-transparent hover:border-[#2E323B] transition-all"
              >
                Solusi Bisnis & Mahasiswa
              </a>
              <a
                href="#problem-solution"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg hover:bg-[#1C1E24] text-white border border-transparent hover:border-[#2E323B] transition-all"
              >
                Sebelum vs Sesudah
              </a>
              <a
                href="#pricing"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg hover:bg-[#1C1E24] text-white border border-transparent hover:border-[#2E323B] transition-all"
              >
                Skema Biaya & Termin
              </a>
              <a
                href="#non-joki"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/30 font-medium"
              >
                🛡️ Kebijakan Anti-Joki (Etika Riset)
              </a>
              <a
                href="#faq"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg hover:bg-[#1C1E24] text-white border border-transparent hover:border-[#2E323B] transition-all"
              >
                Pertanyaan Umum (FAQ)
              </a>
            </nav>
          </div>

          <div className="pt-6 border-t border-[#2E323B] flex flex-col gap-3">
            <a
              href={createWhatsAppUrl(
                "Halo Nakami Studio, saya ingin konsultasi via WhatsApp..."
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full py-3.5 px-4 rounded-xl bg-cta-gradient text-white font-bold text-center flex items-center justify-center gap-2 shadow-glow-warm text-sm"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Mulai Konsultasi WhatsApp (Gratis)</span>
            </a>
            <p className="text-center text-xs text-[#64748B]">
              Respon cepat setiap Senin - Sabtu | 09:00 - 21:00 WIB
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
