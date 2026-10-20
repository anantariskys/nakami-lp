export const SITE = {
  name: "Nakami Studio",
  url: "https://nakamistudio.com",
  locale: "id_ID",
  title: "Nakami Studio — Jasa Pembuatan Aplikasi Bisnis",
  description:
    "Jasa pembuatan aplikasi bisnis: sistem kasir & inventori, reservasi online, aplikasi mobile, dan aplikasi operasional yang dirancang sesuai proses kerja Anda. Biaya transparan, kepemilikan penuh, dan garansi 30 hari.",
  email: "nakamistudio.id@gmail.com",
  whatsapp: "6285608675771",
  instagram: "https://instagram.com/nakamistudio",
  github: "https://github.com/nakamistudio",
} as const;

export function whatsappUrl(message: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WA_MESSAGE =
  "Halo Nakami Studio, saya ingin berkonsultasi mengenai pembuatan aplikasi untuk bisnis saya.";
