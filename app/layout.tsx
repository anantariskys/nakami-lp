import type { Metadata, Viewport } from "next";
import { Montserrat, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const viewport: Viewport = {
  themeColor: "#121316",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nakamistudio.com"),
  title: {
    default: "Nakami Studio | Solusi Web Bisnis & Mentoring Coding 1-on-1",
    template: "%s | Nakami Studio",
  },
  description:
    "Solusi website dan aplikasi kasir untuk UMKM, serta live mentoring coding 1-on-1 etis untuk mahasiswa IT.",
  applicationName: "Nakami Studio",
  authors: [{ name: "Nanta & Kamilia", url: "https://nakamistudio.com" }],
  generator: "Next.js 16",
  keywords: [
    "jasa pembuatan website umkm",
    "software kasir kustom",
    "otomasi sistem bisnis",
    "aplikasi web custom indonesia",
    "mentoring coding 1 on 1",
    "bimbingan arsitektur software",
    "belajar debugging pemula",
    "bimbingan kode tugas akhir etis",
    "code review 1 on 1",
    "nakami studio",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Nakami Studio",
  publisher: "Nakami Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nakami Studio | Solusi Web Bisnis & Mentoring Coding 1-on-1",
    description:
      "Layanan web kustom dan software kasir untuk bisnis, serta mentoring coding 1-on-1 etis tanpa joki.",
    url: "https://nakamistudio.com",
    siteName: "Nakami Studio",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nakami Studio | Solusi Web Bisnis & Mentoring Coding 1-on-1",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nakami Studio | Solusi Web Bisnis & Mentoring Coding 1-on-1",
    description:
      "Layanan web kustom dan software kasir untuk bisnis, serta mentoring coding 1-on-1 etis tanpa joki.",
    creator: "@nakamistudio",
    site: "@nakamistudio",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${montserrat.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#121316] text-[#FFFFFF] font-sans selection:bg-[#FB6C00] selection:text-[#121316]">
        {children}
      </body>
    </html>
  );
}
