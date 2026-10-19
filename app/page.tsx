import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/hero/Hero";
import { Statement } from "@/components/sections/Statement";
import { Services } from "@/components/sections/services/Services";
import { Process } from "@/components/sections/Process";
import { Principles } from "@/components/sections/Principles";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { ScrollEffects } from "@/components/motion/ScrollEffects";
import { StructuredData } from "@/components/seo/StructuredData";

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <a
        href="#konten"
        className="sr-only z-[60] rounded-full bg-orange px-5 py-3 font-medium text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Lewati ke konten utama
      </a>

      <Navbar />
      <main id="konten">
        <Hero />
        <Statement />
        <Services />
        <Process />
        <Principles />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />

      <SmoothScroll />
      <ScrollEffects />
    </>
  );
}
