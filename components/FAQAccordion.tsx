"use client";

import React, { useState } from "react";
import { FAQS } from "@/lib/constants";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FAQAccordion() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAFAF9] relative scroll-mt-24 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 border border-orange-200 text-xs font-mono font-bold text-[#C2410C] mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#FB6C00]" />
            <span>TANYA JAWAB UMUM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-[var(--font-display)] mb-4">
            Hal Penting Seputar{" "}
            <span className="text-sunset-gradient">
              Layanan & Mentoring Kami
            </span>
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Pertanyaan umum seputar alur kerja, garansi perbaikan bug, skema pembayaran bertahap, dan etika mentoring di Nakami Studio.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            const headerId = `faq-header-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#FFFDFB] border-2 border-[#FB6C00]/40 shadow-[0_8px_24px_-6px_rgba(251,108,0,0.08)]"
                    : "bg-white border-slate-200/90 hover:border-slate-300 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.03)]"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    id={headerId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FB6C00]"
                  >
                    <span className="text-base font-bold text-[#0F172A] leading-snug">
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-200 ${
                        isOpen
                          ? "bg-[#FFF7ED] text-[#C2410C] border-[#FED7AA] rotate-180"
                          : "bg-slate-100 text-slate-500 border-slate-200"
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
      </div>
    </section>
  );
}
