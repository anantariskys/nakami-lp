export const SITE = {
  name: "Nakami Studio",
  url: "https://nakamistudio.com",
  locale: "id_ID",
  title: "Nakami Studio — Jasa Pembuatan Aplikasi & Sistem Kustom",
  description:
    "Nakami Studio membangun aplikasi web, aplikasi mobile, dan sistem internal yang dirancang mengikuti alur kerja bisnis Anda. Ruang lingkup jelas, kode milik Anda, garansi 30 hari.",
  email: "nakamistudio.id@gmail.com",
  whatsapp: "6281234567890",
  instagram: "https://instagram.com/nakamistudio",
  github: "https://github.com/nakamistudio",
} as const;

export function whatsappUrl(message: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WA_MESSAGE =
  "Halo Nakami Studio, saya ingin mendiskusikan pembuatan aplikasi untuk bisnis saya.";
