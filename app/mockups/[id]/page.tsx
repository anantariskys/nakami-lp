import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/content";
import { WebAppMockup } from "@/components/mockups/WebAppMockup";
import { MobileAppMockup } from "@/components/mockups/MobileAppMockup";
import { PosMockup } from "@/components/mockups/PosMockup";
import { BookingMockup } from "@/components/mockups/BookingMockup";
import { OfficeMockup } from "@/components/mockups/OfficeMockup";
import { IntegrationMockup } from "@/components/mockups/IntegrationMockup";

/*
 * Dev-only canvas for the service screenshots in /public/services.
 * Regenerate with `npm run capture:mockups` while `next dev` is running.
 * Production builds return 404 for every id.
 */

const MOCKUPS: Record<string, () => React.ReactNode> = {
  "aplikasi-web": WebAppMockup,
  "aplikasi-mobile": MobileAppMockup,
  "kasir-stok": PosMockup,
  "booking-online": BookingMockup,
  "operasional-kantor": OfficeMockup,
  "sambungkan-aplikasi": IntegrationMockup,
};

export const metadata: Metadata = { robots: { index: false, follow: false } };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ id: s.id }));
}

export default async function MockupPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const Mockup = MOCKUPS[id];
  if (process.env.NODE_ENV === "production" || !Mockup) notFound();

  return (
    <>
      {/* Keep the Next.js dev indicator out of the screenshots. */}
      <style>{"nextjs-portal{display:none!important}"}</style>
      <Mockup />
    </>
  );
}
