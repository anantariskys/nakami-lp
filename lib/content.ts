/* ------------------------------------------------------------------ */
/* Portfolio                                                           */
/* ------------------------------------------------------------------ */

export interface Project {
  /** Unique slug, e.g. "kasir-kopi-senja". */
  id: string;
  /** Business name as the client agreed to show it. */
  client: string;
  sector: string;
  /** What was built, in plain words. */
  title: string;
  /** Situation before, one or two sentences. */
  problem: string;
  /** What changed after, one or two sentences. */
  result: string;
  /** Optional headline number, e.g. { value: "5 menit", label: "rekap harian, dari 2 jam" }. */
  highlight?: { value: string; label: string };
  /** Screenshot in /public/portfolio, ideally 1600×1000 WebP. */
  image: { src: string; alt: string };
  tags: string[];
  year: number;
  /** Optional public link to the live app or website. */
  url?: string;
  testimonial?: { quote: string; name: string; role: string };
}

/**
 * Real, client-approved projects only. The Portfolio section and its nav
 * link stay hidden in production until this list has at least one entry.
 */
export const PROJECTS: Project[] = [];

/**
 * Placeholder entries so the layout can be reviewed in `next dev`.
 * Never rendered in production builds, and visibly labelled as examples.
 */
export const SAMPLE_PROJECTS: Project[] = [
  {
    id: "contoh-kasir",
    client: "Nama usaha klien",
    sector: "Kafe & Restoran",
    title: "Aplikasi kasir & stok untuk 3 cabang",
    problem: "Ceritakan kondisi sebelum ada aplikasi, misalnya stok dicatat manual di buku tiap malam.",
    result: "Ceritakan perubahan setelahnya, misalnya laporan harian langsung jadi tanpa rekap manual.",
    highlight: { value: "00 menit", label: "contoh angka hasil" },
    image: { src: "/services/kasir-stok.webp", alt: "Contoh tampilan aplikasi kasir" },
    tags: ["Kasir", "Stok", "Multi cabang"],
    year: 2026,
  },
  {
    id: "contoh-booking",
    client: "Nama usaha klien",
    sector: "Klinik & Kesehatan",
    title: "Sistem booking online",
    problem: "Kondisi sebelum.",
    result: "Hasil setelahnya.",
    image: { src: "/services/booking-online.webp", alt: "Contoh tampilan sistem booking" },
    tags: ["Booking", "Pembayaran DP"],
    year: 2026,
  },
  {
    id: "contoh-kantor",
    client: "Nama usaha klien",
    sector: "Jasa & Konsultan",
    title: "Aplikasi pengajuan dana kantor",
    problem: "Kondisi sebelum.",
    result: "Hasil setelahnya.",
    image: { src: "/services/operasional-kantor.webp", alt: "Contoh tampilan aplikasi kantor" },
    tags: ["Aplikasi kantor", "Persetujuan"],
    year: 2026,
  },
];

export const SHOW_PORTFOLIO = PROJECTS.length > 0 || process.env.NODE_ENV !== "production";

export const NAV_LINKS: ReadonlyArray<{ href: string; label: string }> = [
  { href: "#layanan", label: "Layanan" },
  { href: "#panduan", label: "Panduan" },
  { href: "#proses", label: "Cara Kerja" },
  ...(SHOW_PORTFOLIO ? [{ href: "#portfolio", label: "Portfolio" }] : []),
  { href: "#investasi", label: "Biaya" },
  { href: "#faq", label: "Tanya Jawab" },
];

/* ------------------------------------------------------------------ */
/* Guide: website vs web app vs mobile app                             */
/* ------------------------------------------------------------------ */

export type AppKind = "website" | "webapp" | "mobile";

export const APP_KINDS: Array<{ id: AppKind; name: string; analogy: string; example: string }> = [
  {
    id: "website",
    name: "Website",
    analogy: "Ibarat etalase toko. Orang datang, melihat-lihat, lalu menghubungi Anda.",
    example: "Profil usaha, katalog produk, halaman promo",
  },
  {
    id: "webapp",
    name: "Aplikasi Web",
    analogy: "Ibarat kantor yang bisa dibuka dari browser mana saja. Tempat tim bekerja setiap hari.",
    example: "Kasir, stok, booking, pengajuan dana, laporan",
  },
  {
    id: "mobile",
    name: "Aplikasi HP",
    analogy: "Ibarat kartu member di saku pelanggan. Selalu ada di HP dan bisa menyapa lewat notifikasi.",
    example: "Pesan-antar, member & poin, aplikasi kurir",
  },
];

/** level: 1–3 drives the dot meter; text is what's shown. */
export const APP_COMPARISON: Array<{
  label: string;
  hint?: string;
  values: Record<AppKind, { text: string; level?: 1 | 2 | 3; ok?: boolean }>;
}> = [
  {
    label: "Cara membuka",
    values: {
      website: { text: "Lewat browser" },
      webapp: { text: "Lewat browser, perlu login" },
      mobile: { text: "Diunduh dari Play Store / App Store" },
    },
  },
  {
    label: "Perlu install?",
    values: {
      website: { text: "Tidak", ok: true },
      webapp: { text: "Tidak", ok: true },
      mobile: { text: "Ya", ok: false },
    },
  },
  {
    label: "Bisa dipakai tanpa internet",
    values: {
      website: { text: "Tidak", ok: false },
      webapp: { text: "Sebagian fitur", ok: true },
      mobile: { text: "Ya", ok: true },
    },
  },
  {
    label: "Kirim notifikasi ke HP",
    values: {
      website: { text: "Tidak", ok: false },
      webapp: { text: "Lewat WhatsApp / email", ok: true },
      mobile: { text: "Ya, langsung muncul di HP", ok: true },
    },
  },
  {
    label: "Biaya pembuatan",
    hint: "Perbandingan kasar, bukan harga pasti",
    values: {
      website: { text: "Paling hemat", level: 1 },
      webapp: { text: "Menengah", level: 2 },
      mobile: { text: "Paling besar", level: 3 },
    },
  },
  {
    label: "Lama pembuatan",
    hint: "Perkiraan umum",
    values: {
      website: { text: "1–2 minggu", level: 1 },
      webapp: { text: "3–6 minggu", level: 2 },
      mobile: { text: "6–12 minggu", level: 3 },
    },
  },
];

export interface Service {
  id: string;
  title: string;
  summary: string;
  points: string[];
  /** Everyday examples, so non-technical readers can picture it. */
  examples: string[];
  /** Screenshot of a real mockup page, captured from /mockups/[id]. */
  image: { src: string; alt: string; device: "desktop" | "phone" };
}

export const SERVICES: Service[] = [
  {
    id: "aplikasi-web",
    title: "Website & Aplikasi Web",
    summary:
      "Aplikasi yang dibuka lewat browser di laptop atau HP, tanpa perlu install. Cocok untuk mengelola pesanan, data pelanggan, dan laporan penjualan.",
    points: [
      "Akses berbeda untuk pemilik, admin, dan karyawan",
      "Laporan dan grafik penjualan langsung jadi",
      "Mudah ditemukan pelanggan di Google",
    ],
    examples: ["Halaman pesanan pelanggan", "Laporan penjualan", "Website usaha"],
    image: {
      src: "/services/aplikasi-web.webp",
      alt: "Contoh aplikasi web: halaman ringkasan penjualan toko dengan grafik dan daftar pesanan",
      device: "desktop",
    },
  },
  {
    id: "aplikasi-mobile",
    title: "Aplikasi HP (Android & iPhone)",
    summary:
      "Aplikasi yang bisa diunduh pelanggan atau tim Anda dari Play Store dan App Store. Pesan, bayar, dan pantau status langsung dari genggaman.",
    points: [
      "Satu aplikasi untuk Android dan iPhone",
      "Pemberitahuan langsung muncul di HP",
      "Tetap bisa dipakai saat sinyal lemah",
    ],
    examples: ["Aplikasi pesan-antar", "Aplikasi member", "Aplikasi tim lapangan"],
    image: {
      src: "/services/aplikasi-mobile.webp",
      alt: "Contoh aplikasi HP: aplikasi pemesanan kopi dengan menu dan keranjang",
      device: "phone",
    },
  },
  {
    id: "kasir-stok",
    title: "Aplikasi Kasir & Stok",
    summary:
      "Kasir untuk satu toko atau banyak cabang. Stok berkurang sendiri setiap ada penjualan, dan laporan harian langsung jadi tanpa rekap manual.",
    points: [
      "Scan barcode dan cetak struk",
      "Stok semua cabang terlihat di satu layar",
      "Laporan untung-rugi otomatis",
    ],
    examples: ["Kafe & resto", "Toko retail", "Apotek"],
    image: {
      src: "/services/kasir-stok.webp",
      alt: "Contoh aplikasi kasir: daftar menu, keranjang belanja, dan total pembayaran",
      device: "desktop",
    },
  },
  {
    id: "booking-online",
    title: "Sistem Booking Online",
    summary:
      "Pelanggan memilih jadwal sendiri lewat HP, jadwal tidak pernah bentrok, dan uang muka bisa dibayar saat itu juga.",
    points: [
      "Jadwal tidak bisa dipesan dua kali",
      "Bayar DP lewat transfer, QRIS, atau e-wallet",
      "Pengingat otomatis lewat WhatsApp",
    ],
    examples: ["Klinik & dokter gigi", "Salon & barbershop", "Studio & rental"],
    image: {
      src: "/services/booking-online.webp",
      alt: "Contoh sistem booking: kalender dengan pilihan jam yang tersedia",
      device: "desktop",
    },
  },
  {
    id: "operasional-kantor",
    title: "Aplikasi Operasional Kantor",
    summary:
      "Pengajuan, persetujuan atasan, surat perintah kerja, sampai tagihan tersimpan rapi di satu tempat dan mengikuti alur kerja kantor Anda.",
    points: [
      "Persetujuan bertahap dari staf ke atasan",
      "Tercatat siapa mengubah apa, dan kapan",
      "Dokumen dan tagihan dibuat otomatis",
    ],
    examples: ["Pengajuan dana", "Surat perintah kerja", "Absensi & cuti"],
    image: {
      src: "/services/operasional-kantor.webp",
      alt: "Contoh aplikasi kantor: daftar pengajuan dengan status menunggu, ditinjau, dan disetujui",
      device: "desktop",
    },
  },
  {
    id: "sambungkan-aplikasi",
    title: "Menyambungkan Aplikasi",
    summary:
      "Sudah memakai aplikasi lain? Kami sambungkan supaya data mengalir sendiri dan tidak perlu diketik ulang: pembayaran, pembukuan, marketplace, sampai WhatsApp.",
    points: [
      "Data pindah otomatis antar aplikasi",
      "Tidak ada lagi input data dua kali",
      "Pemberitahuan terkirim sendiri",
    ],
    examples: ["Pesanan marketplace", "Pembukuan otomatis", "Notifikasi WhatsApp"],
    image: {
      src: "/services/sambungkan-aplikasi.webp",
      alt: "Contoh halaman pengaturan yang menyambungkan pembayaran, pembukuan, marketplace, dan WhatsApp",
      device: "desktop",
    },
  },
];

export interface ProcessStep {
  title: string;
  when: string;
  body: string;
  youGet: string;
}

export const PROCESS: ProcessStep[] = [
  {
    title: "Kami dengarkan dulu",
    when: "Gratis · 30 menit",
    body: "Ngobrol santai tentang cara kerja bisnis Anda sehari-hari: apa yang paling menyita waktu, dan apa yang ingin dibenahi.",
    youGet: "Rangkuman kebutuhan, perkiraan biaya, dan lama pengerjaan secara tertulis",
  },
  {
    title: "Kami gambarkan aplikasinya",
    when: "1–2 minggu",
    body: "Sebelum dibuat, Anda bisa melihat dan mencoba contoh tampilannya. Ingin mengubah sesuatu? Di tahap inilah tempatnya.",
    youGet: "Contoh tampilan yang bisa Anda klik dan coba sendiri",
  },
  {
    title: "Kami kerjakan, Anda pantau",
    when: "Laporan tiap 2 minggu",
    body: "Setiap dua minggu kami tunjukkan hasilnya dan Anda bisa langsung mencobanya. Tidak ada masa menunggu tanpa kabar.",
    youGet: "Akses ke versi uji coba yang terus diperbarui",
  },
  {
    title: "Kami pasang & ajari tim Anda",
    when: "± 1 minggu",
    body: "Aplikasi diuji menyeluruh, data lama dipindahkan, lalu tim Anda kami latih sampai benar-benar lancar memakainya.",
    youGet: "Aplikasi siap pakai beserta panduan penggunaan",
  },
  {
    title: "Kami tetap ada setelahnya",
    when: "30 hari & seterusnya",
    body: "Ada kendala setelah aplikasi dipakai? Selama 30 hari kami perbaiki gratis. Setelahnya, tersedia layanan perawatan bulanan.",
    youGet: "Seluruh file aplikasi dan dukungan yang tetap berjalan",
  },
];

export const PRINCIPLES = [
  {
    value: 100,
    suffix: "%",
    label: "Aplikasinya milik Anda",
    body: "Seluruh file aplikasi dan akses server kami serahkan. Anda bebas melanjutkan dengan siapa pun, tanpa terikat dengan kami.",
  },
  {
    value: 30,
    suffix: " hari",
    label: "Perbaikan gratis",
    body: "Jika ada yang tidak berjalan semestinya dalam 30 hari setelah aplikasi dipakai, kami perbaiki tanpa biaya.",
  },
  {
    value: 2,
    suffix: " minggu",
    label: "Laporan hasil yang rutin",
    body: "Anda tidak menunggu sampai akhir. Setiap dua minggu, hasilnya bisa Anda lihat dan coba langsung.",
  },
] as const;

export const INDUSTRIES = [
  "Kafe & Restoran",
  "Toko & Retail",
  "Klinik & Kesehatan",
  "Salon & Kecantikan",
  "Sekolah & Kursus",
  "Logistik & Ekspedisi",
  "Jasa & Konsultan",
] as const;

export interface PricingPackage {
  name: string;
  forWho: string;
  price: string;
  timeline: string;
  highlights: string[];
  featured?: boolean;
}

export const PRICING: PricingPackage[] = [
  {
    name: "Website Usaha",
    forWho: "Supaya usaha Anda terlihat terpercaya dan mudah ditemukan di Google.",
    price: "2,5 jt",
    timeline: "1–2 minggu",
    highlights: ["Desain khusus untuk usaha Anda", "Tombol langsung ke WhatsApp", "Bisa dicari di Google"],
  },
  {
    name: "Sistem Booking",
    forWho: "Untuk usaha berbasis jadwal yang lelah membalas chat reservasi.",
    price: "3,5 jt",
    timeline: "2–3 minggu",
    highlights: ["Pelanggan pilih jadwal sendiri", "Bayar DP online", "Pengingat via WhatsApp"],
  },
  {
    name: "Kasir & Stok",
    forWho: "Untuk toko atau resto yang ingin stok dan laporan rapi tanpa rekap manual.",
    price: "4,5 jt",
    timeline: "3–5 minggu",
    highlights: ["Bisa untuk banyak cabang", "Stok berkurang otomatis", "Laporan harian & bulanan"],
    featured: true,
  },
];

export const INCLUDED = [
  "Perbaikan gratis 30 hari",
  "Seluruh file aplikasi jadi milik Anda",
  "Pelatihan untuk tim Anda",
  "Bantuan pemasangan di server",
] as const;

export const PAYMENT_TERMS = [
  { percent: 50, label: "Di awal", when: "Saat kesepakatan ditandatangani" },
  { percent: 30, label: "Di tengah", when: "Setelah fitur utama selesai dan Anda coba" },
  { percent: 20, label: "Di akhir", when: "Setelah aplikasi siap dipakai" },
] as const;

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: "Berapa biaya membuat aplikasi?",
    answer:
      "Tergantung kebutuhannya. Website usaha mulai Rp 2,5 juta, sistem booking mulai Rp 3,5 juta, dan kasir & stok mulai Rp 4,5 juta. Untuk aplikasi yang lebih khusus, kami berikan harga pasti setelah obrolan pertama yang gratis. Harga yang sudah disepakati tidak akan naik di tengah jalan.",
  },
  {
    question: "Saya tidak paham teknologi. Apakah tetap bisa?",
    answer:
      "Sangat bisa. Banyak pemilik usaha juga tidak paham teknis, dan itu bukan masalah. Anda cukup menceritakan cara kerja bisnis Anda dan masalah yang ingin diselesaikan. Urusan teknisnya kami yang pikirkan, dan semuanya kami jelaskan dengan bahasa sehari-hari.",
  },
  {
    question: "Berapa lama sampai aplikasinya bisa dipakai?",
    answer:
      "Website usaha biasanya 1–2 minggu, sistem kasir 3–5 minggu, dan aplikasi yang lebih khusus mulai 3 minggu. Jadwalnya kami tuliskan sejak awal, lengkap dengan target di setiap tahap.",
  },
  {
    question: "Setelah jadi, aplikasinya milik siapa?",
    answer:
      "Milik Anda sepenuhnya. Setelah pelunasan, seluruh file aplikasi, akses server, dan nama domain kami serahkan. Anda bebas melanjutkan pengembangannya dengan siapa pun.",
  },
  {
    question: "Saya sudah punya aplikasi lain. Bisa disambungkan?",
    answer:
      "Bisa. Kami pelajari dulu aplikasi yang sedang Anda pakai, lalu sarankan pilihan paling hemat: disambungkan, dikembangkan, atau dipindahkan ke aplikasi baru beserta datanya.",
  },
  {
    question: "Bagaimana cara pembayarannya?",
    answer:
      "Dibayar tiga kali sesuai kemajuan pekerjaan: 50% saat kesepakatan ditandatangani, 30% setelah fitur utama selesai dan Anda coba, lalu 20% setelah aplikasi siap dipakai.",
  },
  {
    question: "Kalau ada masalah setelah aplikasi dipakai?",
    answer:
      "Selama 30 hari pertama, kami perbaiki gratis. Setelah itu tersedia layanan perawatan bulanan untuk pembaruan keamanan, cadangan data, dan penambahan fitur kecil.",
  },
];

export const BRIEF_NEEDS = [
  "Website usaha",
  "Aplikasi web",
  "Aplikasi HP",
  "Kasir & stok",
  "Booking online",
  "Aplikasi kantor",
  "Menyambungkan aplikasi",
] as const;

export const BRIEF_BUDGETS = [
  "< Rp 5 jt",
  "Rp 5–15 jt",
  "Rp 15–50 jt",
  "> Rp 50 jt",
  "Belum tahu",
] as const;
