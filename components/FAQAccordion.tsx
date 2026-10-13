"use client";

import React, { useState } from "react";
import { FAQS, createWhatsAppUrl } from "@/lib/constants";
import { ChevronDown, HelpCircle, MessageCircle, ArrowDown } from "lucide-react";

export function FAQAccordion() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="faq" className="scroll-mt-28 py-20 sm:py-24 bg-[#17181C] border-b border-[#2E323B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1C1E24] border border-[#2E323B] text-xs font-mono font-medium text-[#F9B637] mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-[#FB6C00]" />
            <span>TANYA JAWAB UMUM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-[var(--font-display)] mb-4">
            Hal penting seputar layanan kami.
          </h2>
          <p className="text-[#94A3B8] text-base leading-relaxed">
            Jawaban transparan seputar alur kerja, garansi perbaikan bug 30 hari, skema pembayaran, dan etika mentoring Nakami.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            const headerId = `faq-header-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 bg-[#1C1E24] ${
                  isOpen
                    ? "border-[#FB6C00]/60 shadow-md"
                    : "border-[#2E323B] hover:border-[#3F4450]"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    id={headerId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FB6C00] cursor-pointer"
                  >
                    <span className="text-base font-bold text-white leading-snug">
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-200 ${
                        isOpen
                          ? "bg-[#2A1D18] text-[#FB6C00] border-[#FB6C00]/40 rotate-180"
                          : "bg-[#242730] text-[#94A3B8] border-[#2E323B]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-6 pb-6 pt-1 text-sm text-[#CBD5E1] leading-relaxed border-t border-[#2E323B]"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Forward Bridge to Direct Consultation & Final Banner */}
        <div className="mt-14 text-center">
          <p className="text-sm text-[#94A3B8] mb-4">
            Punya skenario teknis spesifik yang belum terjawab di atas?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={createWhatsAppUrl(
                "Halo Nakami Studio, saya membaca FAQ dan ingin bertanya lebih lanjut seputar kebutuhan proyek saya..."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#FB6C00] to-[#E73F1E] text-[#121316] font-bold text-xs sm:text-sm shadow-glow-warm hover:brightness-110 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#121316]" />
              <span>Tanyakan Langsung via WhatsApp</span>
            </a>
            <a
              href="#konsultasi-akhir"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#242730] hover:bg-[#2C303B] border border-[#2E323B] text-white font-semibold text-xs sm:text-sm shadow-sm transition-colors"
            >
              <span>Lanjut ke Konsultasi Bebas Biaya</span>
              <ArrowDown className="w-4 h-4 text-[#94A3B8]" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
