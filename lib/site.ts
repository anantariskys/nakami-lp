export const SITE = {
  name: "Nakami Studio",
  url: "https://nakamistudio.com",
  locale: "id_ID",
  title: "Nakami Studio — Jasa Pembuatan Aplikasi untuk Bisnis",
  description:
    "Jasa pembuatan aplikasi untuk bisnis: kasir & stok, booking online, aplikasi HP, dan aplikasi kantor yang dibuat sesuai cara kerja Anda. Harga disepakati di awal, aplikasinya milik Anda, perbaikan gratis 30 hari.",
  email: "nakamistudio.id@gmail.com",
  whatsapp: "6281234567890",
  instagram: "https://instagram.com/nakamistudio",
  github: "https://github.com/nakamistudio",
} as const;

export function whatsappUrl(message: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WA_MESSAGE =
  "Halo Nakami Studio, saya ingin konsultasi soal pembuatan aplikasi untuk usaha saya.";
