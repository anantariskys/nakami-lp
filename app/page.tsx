import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { DualGateway } from "@/components/DualGateway";
import { EngineeringStandardsSection } from "@/components/EngineeringStandardsSection";
import { SegmentSection } from "@/components/SegmentSection";
import { PricingPhilosophySection } from "@/components/PricingPhilosophySection";
import { DiscoveryAuditForm } from "@/components/DiscoveryAuditForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalBanner } from "@/components/FinalBanner";
import { Footer } from "@/components/Footer";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { JsonLd } from "@/components/JsonLd";

export default function HomePage() {
  return (
    <>
      <JsonLd />
      
      {/* Skip to Main Content Link for Keyboard Accessibility (WCAG 2.1) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-gradient-to-r from-[#FB6C00] to-[#E73F1E] text-white font-bold rounded-lg shadow-lg focus:outline-none"
      >
        Lewati ke Konten Utama
      </a>

      <Navbar />

      <main id="main-content" className="relative flex flex-col min-h-screen bg-white text-[#0A0A0A]">
        {/* Section 1: Hero & Realitas Masalah (Value Proposition & Interactive Visual) */}
        <HeroSection />

        {/* Section 2: Dual Gateway / Segmentasi Audiens (Bisnis & UMKM vs Mentoring Mahasiswa IT) */}
        <DualGateway />

        {/* Section 3: Standar Rekayasa & Keandalan Teknis (4 Pilar Studio Kualitas) */}
        <EngineeringStandardsSection />

        {/* Section 4: Katalog Layanan & Spesifikasi Modul (Modul Bisnis & Mentoring Edukasi + Manifesto Etis) */}
        <SegmentSection />

        {/* Section 5: Transparansi Kontrak & Tata Kelola Biaya (Fixed-Scope, 3 Termin, Transparansi Mentoring) */}
        <PricingPhilosophySection />

        {/* Section 6: Estimator Kebutuhan Interaktif (Kalkulator Estimasi Cepat & Direct WhatsApp Dispatch) */}
        <DiscoveryAuditForm />

        {/* Section 7: Tanya Jawab Terstruktur (FAQ Kategori Bisnis, Mentoring, Teknis & Legalitas) */}
        <FAQAccordion />

        {/* Section 8: Final Action Banner & WhatsApp Fast-Track */}
        <FinalBanner />
      </main>

      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
