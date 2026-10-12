import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { SegmentSection } from "@/components/SegmentSection";
import { DiscoveryAuditForm } from "@/components/DiscoveryAuditForm";
import { NonJokiManifesto } from "@/components/NonJokiManifesto";
import { PricingPhilosophySection } from "@/components/PricingPhilosophySection";
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
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#FB6C00] text-white font-bold rounded-lg shadow-lg focus:outline-none"
      >
        Lewati ke Konten Utama
      </a>

      <Navbar />

      <main id="main-content" className="relative flex flex-col min-h-screen">
        <HeroSection />
        <SegmentSection />
        <DiscoveryAuditForm />
        <NonJokiManifesto />
        <PricingPhilosophySection />
        <FAQAccordion />
        <FinalBanner />
      </main>

      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
