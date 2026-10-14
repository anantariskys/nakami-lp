"use client";

import React, { useState } from "react";
import { FAQS } from "@/lib/constants";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/constants";

export function FAQAccordion() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggleFaq = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section
      id="faq"
      className="scroll-mt-24 py-24 sm:py-32 bg-white border-b border-neutral-200 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#FB6C00] font-bold mb-3">
              <span>[ TRANSPARANSI INFORMASI // FAQ ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight font-[var(--font-display)] leading-[1.12]">
              Jawaban terbuka untuk pertanyaan kritis Anda.
            </h2>
            <p className="mt-4 text-neutral-600 text-base leading-relaxed">
              Mulai dari kepemilikan kode, batasan garansi, komitmen etis non-joki, hingga rincian termin pembayaran.
            </p>
          </div>

          <div className="font-mono text-xs text-neutral-500 self-start lg:self-auto">
            TOTAL {FAQS.length} PERTANYAAN TERDOKUMENTASI
          </div>
        </div>

        {/* Minimalist Hairline Accordion List (Awwwards Style) */}
        <div className="max-w-4xl mx-auto divide-y divide-neutral-200 border-t border-b border-neutral-200">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndexes.includes(idx);
            return (
              <div key={idx} className="py-6 sm:py-8 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-start justify-between gap-6 text-left group cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className="font-mono text-xs font-bold text-neutral-400 mt-1">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0A0A0A] group-hover:text-[#FB6C00] transition-colors leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div className="w-8 h-8 rounded-full border border-neutral-200 group-hover:border-neutral-400 flex items-center justify-center text-neutral-600 shrink-0 mt-0.5 transition-colors">
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-4 sm:pt-6 pl-8 sm:pl-12 pr-4 sm:pr-12 text-sm sm:text-base text-neutral-600 leading-relaxed animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Help Callout */}
        <div className="mt-16 text-center">
          <p className="text-sm text-neutral-600 mb-4">
            Punya pertanyaan teknis spesifik yang belum terjawab di atas?
          </p>
          <a
            href={createWhatsAppUrl(
              "Halo Nakami Studio, saya punya pertanyaan teknis yang ingin dikonsultasikan langsung..."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0A0A0A] hover:text-[#FB6C00] transition-colors font-mono"
          >
            <span>Tanyakan Langsung ke Tim Engineer di WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
