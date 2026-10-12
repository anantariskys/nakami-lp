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
    <section id="faq" className="py-20 md:py-28 bg-[#17181C] relative scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1E24] border border-[#2E323B] text-xs font-mono text-[#F9B637] mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>PERTANYAAN UMUM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-[var(--font-display)] mb-4">
            Hal Penting Seputar{" "}
            <span className="text-sunset-gradient">
              Layanan & Mentoring Kami
            </span>
          </h2>
          <p className="text-[#94A3B8] text-base leading-relaxed">
            Jawaban seputar proses kerja, garansi, skema pembayaran, dan etika mentoring di Nakami Studio.
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
                    ? "bg-[#1C1E24] border-[#FB6C00]/50 shadow-glow-warm"
                    : "bg-[#1C1E24]/60 border-[#2E323B] hover:border-[#3F4450]"
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
                    <span className="text-base sm:text-lg font-bold text-white leading-snug">
                      {faq.question}
                    </span>
                    <span
                      className={`p-2 rounded-xl bg-[#121316] text-[#FB6C00] transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 bg-[#FB6C00]/20" : ""
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
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-gray-300 leading-relaxed border-t border-[#2E323B]/60 animate-in fade-in duration-200"
                  >
                    {faq.answer}
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
