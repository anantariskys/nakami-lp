"use client";

import React, { useState, useEffect } from "react";
import { createWhatsAppUrl } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
          "Halo Nakami Studio, saya ingin bertanya tentang layanan rekayasa software / mentoring..."
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Konsultasi Langsung via WhatsApp"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-[#FB6C00] to-[#E73F1E] text-white shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-hidden focus:ring-4 focus:ring-[#FB6C00]/40"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        <span className="sr-only">Konsultasi WhatsApp</span>

        {/* Desktop Hover Tooltip */}
        <span
          className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[#0A0A0A] border border-neutral-800 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl font-mono"
          aria-hidden="true"
        >
          Chat WhatsApp Langsung
        </span>
      </a>
    </aside>
  );
}
