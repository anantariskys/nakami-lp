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
          ? "bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm py-3"
          : "bg-white/85 backdrop-blur-sm border-b border-[#F1F5F9] py-4"
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
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-mono text-[#64748B]">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.4)]"></span>
            <span className="text-[#0F172A] font-semibold">Slot Proyek Q4:</span>
            <span className="text-emerald-600 font-medium">Siap Mulai</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#475569]">
            <a
              href="#segment-overview"
              className="hover:text-[#0F172A] transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#FB6C00] rounded px-1"
            >
              Solusi
            </a>
            <a
              href="#problem-solution"
              className="hover:text-[#0F172A] transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#FB6C00] rounded px-1"
            >
              Komparasi
            </a>
            <a
              href="#pricing"
              className="hover:text-[#0F172A] transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#FB6C00] rounded px-1"
            >
              Skema Harga
            </a>
            <a
              href="#non-joki"
              className="hover:text-[#FB6C00] transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#FB6C00] rounded text-xs uppercase tracking-wider font-semibold border border-amber-500/30 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700"
            >
              Manifesto Etis
            </a>
            <a
              href="#faq"
              className="hover:text-[#0F172A] transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#FB6C00] rounded px-1"
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
              className="p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] hover:bg-[#F1F5F9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FB6C00]"
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
          className="fixed inset-x-0 top-[65px] bottom-0 bg-white/98 backdrop-blur-xl z-40 p-6 flex flex-col justify-between border-t border-[#E2E8F0] md:hidden animate-in fade-in duration-200"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 p-3 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-mono text-[#64748B]">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[#0F172A] font-semibold">Slot Proyek Q4:</span>
              <span className="text-emerald-600 font-medium">Aktif & Siap Diskusi</span>
            </div>

            <nav className="flex flex-col gap-2 text-base font-semibold">
              <a
                href="#segment-overview"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg hover:bg-[#F8FAFC] text-[#0F172A] border border-transparent hover:border-[#E2E8F0] transition-all"
              >
                Solusi Bisnis & Mahasiswa
              </a>
              <a
                href="#problem-solution"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg hover:bg-[#F8FAFC] text-[#0F172A] border border-transparent hover:border-[#E2E8F0] transition-all"
              >
                Sebelum vs Sesudah
              </a>
              <a
                href="#pricing"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg hover:bg-[#F8FAFC] text-[#0F172A] border border-transparent hover:border-[#E2E8F0] transition-all"
              >
                Skema Biaya & Termin
              </a>
              <a
                href="#non-joki"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 font-medium"
              >
                🛡️ Kebijakan Anti-Joki (Etika Riset)
              </a>
              <a
                href="#faq"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg hover:bg-[#F8FAFC] text-[#0F172A] border border-transparent hover:border-[#E2E8F0] transition-all"
              >
                Pertanyaan Umum (FAQ)
              </a>
            </nav>
          </div>

          <div className="pt-6 border-t border-[#E2E8F0] flex flex-col gap-3">
            <a
              href={createWhatsAppUrl(
                "Halo Nakami Studio, saya ingin konsultasi via WhatsApp..."
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#FB6C00] to-[#E73F1E] text-white font-bold text-center flex items-center justify-center gap-2 shadow-sm text-sm"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Mulai Konsultasi WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <p className="text-center text-xs text-[#64748B]">
              Respon cepat: &lt; 15 menit pada jam operasional
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
