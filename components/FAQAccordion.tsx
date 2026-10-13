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
    <section id="faq" className="scroll-mt-28 py-20 sm:py-24 bg-slate-50/50 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono font-medium text-slate-700 mb-4 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#FB6C00]" />
            <span>TANYA JAWAB UMUM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-[var(--font-display)] mb-4">
            Hal penting seputar layanan kami.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
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
                className={`rounded-2xl border transition-all duration-200 bg-white ${
                  isOpen
                    ? "border-orange-300 shadow-xs"
                    : "border-slate-200/90 hover:border-slate-300"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    id={headerId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FB6C00]"
                  >
                    <span className="text-base font-bold text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-200 ${
                        isOpen
                          ? "bg-orange-50 text-[#FB6C00] border-orange-200 rotate-180"
                          : "bg-slate-50 text-slate-400 border-slate-200"
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
                    className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100"
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
          <p className="text-sm text-slate-600 mb-4">
            Punya skenario teknis spesifik yang belum terjawab di atas?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={createWhatsAppUrl(
                "Halo Nakami Studio, saya membaca FAQ dan ingin bertanya lebih lanjut seputar kebutuhan proyek saya..."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FB6C00] hover:bg-[#E73F1E] text-white font-bold text-xs sm:text-sm shadow-2xs hover:shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Tanyakan Langsung via WhatsApp</span>
            </a>
            <a
              href="#konsultasi-akhir"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 font-semibold text-xs sm:text-sm shadow-2xs transition-colors"
            >
              <span>Lanjut ke Konsultasi Bebas Biaya</span>
              <ArrowDown className="w-4 h-4 text-slate-400" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
