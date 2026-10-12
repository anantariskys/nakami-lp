"use client";

import React, { useState, useEffect } from "react";
import { createWhatsAppUrl } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button after user scrolls past hero section
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Kontak Cepat WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <a
        href={createWhatsAppUrl(
          "Halo Nakami Studio, saya ingin bertanya tentang layanan software/mentoring..."
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Konsultasi Langsung via WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-cta-gradient text-white shadow-[0_4px_24px_rgba(251,108,0,0.5)] hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#FB6C00]/40"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="sr-only">Konsultasi WhatsApp</span>

        {/* Desktop Hover Tooltip */}
        <span
          className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md"
          aria-hidden="true"
        >
          Chat WhatsApp Langsung →
        </span>
      </a>
    </aside>
  );
}
