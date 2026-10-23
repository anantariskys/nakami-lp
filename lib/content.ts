/* ------------------------------------------------------------------ */
/* Portfolio                                                           */
/* ------------------------------------------------------------------ */

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  /** Unique slug, e.g. "rekaruang". */
  id: string;
  /** Product or business name, as approved for publication. */
  client: string;
  sector: string;
  year: number;
  /** One-line positioning of what was built. */
  title: string;
  /** Situation before, one or two sentences. */
  problem: string;
  /** What changed after, one or two sentences. */
  result: string;
  tags: string[];
  /** Public link to the live product or website. */
  url?: string;
  /** Square brand mark in /public/portfolio. */
  logo?: string;
  /** Brand accent used to tint the showcase. */
  brandColor?: string;
  /** Hero composition: a desktop screen plus an optional phone screen. */
  hero: { desktop: ProjectImage; phone?: ProjectImage };
  /** Facts about the build (not client outcome claims). */
  facts?: Array<{ value: string; label: string }>;
  /** What we delivered, as separate pieces of the system. */
  components?: Array<{ title: string; body: string; tech: string[] }>;
  gallery?: ProjectImage[];
  scope?: string[];
  testimonial?: { quote: string; name: string; role: string };
}

/**
 * Real projects only, in display order. The first one is shown as the
 * featured case study. The section and its nav link are hidden while empty.
 */
export const PROJECTS: Project[] = [
  {
    id: "rekaruang",
    client: "RekaRuang",
    sector: "Photobooth & hiburan",
    year: 2026,
    title: "Platform bisnis photobox multi-outlet",
    problem:
      "Pemilik photobox harus menunggui booth seharian, mencatat omzet secara manual, dan baru mengetahui kertas habis atau printer bermasalah setelah pelanggan mengeluh.",
    result:
      "Kiosk kini melayani pelanggan secara mandiri dengan pembayaran QRIS otomatis, sementara pemilik memantau omzet, stok kertas, dan kondisi setiap booth dari satu dashboard.",
    tags: ["Aplikasi kiosk", "Dashboard multi-outlet", "Pembayaran QRIS", "Integrasi kamera & printer"],
    url: "https://www.rekaruang.my.id",
    logo: "/portfolio/rekaruang/icon.svg",
    brandColor: "#DF301C",
    hero: {
      desktop: {
        src: "/portfolio/rekaruang/dashboard.webp",
        alt: "Dashboard RekaRuang: pendapatan hari ini, sesi, grafik pendapatan, dan status kiosk tiap outlet",
      },
      phone: {
        src: "/portfolio/rekaruang/m-dashboard.webp",
        alt: "Dashboard RekaRuang di ponsel dengan peringatan stok kertas menipis",
      },
    },
    facts: [
      { value: "4", label: "aplikasi dalam satu ekosistem" },
      { value: "QRIS", label: "pembayaran otomatis di kiosk" },
      { value: "Real-time", label: "status kamera, printer & kertas" },
    ],
    components: [
      {
        title: "Aplikasi kiosk layar sentuh",
        body: "Alur pelanggan dari pilih paket, bayar, berpose, memilih frame, hingga cetak, tanpa perlu dibantu petugas.",
        tech: ["Flutter", "Windows"],
      },
      {
        title: "Layanan perangkat keras",
        body: "Menghubungkan kiosk dengan kamera DSLR dan printer foto, termasuk pemantauan kondisi perangkat.",
        tech: [".NET 8", "Canon EDSDK"],
      },
      {
        title: "Backend & pembayaran",
        body: "Mengelola sesi, paket, dan transaksi QRIS, lalu mengirim pembaruan ke kiosk dan dashboard secara instan.",
        tech: ["Laravel 11", "Midtrans", "WebSocket"],
      },
      {
        title: "Dashboard pemilik & portal unduh",
        body: "Pemilik mengatur paket, frame, dan outlet dari mana saja. Pelanggan mengunduh softcopy cukup dengan memindai QR.",
        tech: ["Next.js", "Cloudflare R2"],
      },
    ],
    gallery: [
      { src: "/portfolio/rekaruang/website.webp", alt: "Halaman utama website RekaRuang", caption: "Website produk" },
      { src: "/portfolio/rekaruang/reports.webp", alt: "Laporan penjualan RekaRuang per outlet dan paket", caption: "Laporan penjualan" },
      { src: "/portfolio/rekaruang/sessions.webp", alt: "Riwayat sesi foto pelanggan RekaRuang", caption: "Riwayat sesi" },
      { src: "/portfolio/rekaruang/outlets.webp", alt: "Pengelolaan outlet dan kiosk RekaRuang", caption: "Outlet & kiosk" },
      { src: "/portfolio/rekaruang/templates.webp", alt: "Katalog template frame foto RekaRuang", caption: "Template frame" },
    ],
    scope: ["Riset kebutuhan", "Desain UI/UX", "Aplikasi kiosk", "Integrasi perangkat keras", "Backend & pembayaran", "Dashboard web"],
  },
];

export const SHOW_PORTFOLIO = PROJECTS.length > 0;

export const NAV_LINKS: ReadonlyArray<{ href: string; label: string }> = [
  { href: "#layanan", label: "Layanan" },
  { href: "#panduan", label: "Panduan" },
  { href: "#proses", label: "Proses" },
  ...(SHOW_PORTFOLIO ? [{ href: "#portfolio", label: "Portfolio" }] : []),
  { href: "#investasi", label: "Investasi" },
  { href: "#faq", label: "FAQ" },
];

/* ------------------------------------------------------------------ */
/* Guide: website vs web app vs mobile app                             */
/* ------------------------------------------------------------------ */

export type AppKind = "website" | "webapp" | "mobile";

export const APP_KINDS: Array<{ id: AppKind; name: string; analogy: string; example: string }> = [
  {
    id: "website",
    name: "Website",
    analogy:
      "Berfungsi sebagai etalase digital: memperkenalkan bisnis Anda dan mengarahkan calon pelanggan untuk menghubungi Anda.",
    example: "Profil perusahaan, katalog produk, halaman promosi",
  },
  {
    id: "webapp",
    name: "Aplikasi Web",
    analogy:
      "Berfungsi sebagai kantor digital yang dapat diakses dari browser mana pun, tempat tim mengelola pekerjaan sehari-hari.",
    example: "Kasir, inventori, reservasi, pengajuan dana, laporan",
  },
  {
    id: "mobile",
    name: "Aplikasi Mobile",
    analogy:
      "Berfungsi seperti kartu anggota di ponsel pelanggan: selalu tersedia dan dapat mengirimkan notifikasi secara langsung.",
    example: "Pemesanan & pengantaran, program loyalitas, aplikasi kurir",
  },
];

/** level: 1–3 drives the dot meter; text is what's shown. */
export const APP_COMPARISON: Array<{
  label: string;
  hint?: string;
  values: Record<AppKind, { text: string; level?: 1 | 2 | 3; ok?: boolean }>;
}> = [
  {
    label: "Cara mengakses",
    values: {
      website: { text: "Melalui browser" },
      webapp: { text: "Melalui browser, dengan login" },
      mobile: { text: "Diunduh dari Play Store & App Store" },
    },
  },
  {
    label: "Perlu instalasi",
    values: {
      website: { text: "Tidak", ok: true },
      webapp: { text: "Tidak", ok: true },
      mobile: { text: "Ya", ok: false },
    },
  },
  {
    label: "Dapat digunakan offline",
    values: {
      website: { text: "Tidak", ok: false },
      webapp: { text: "Sebagian fitur", ok: true },
      mobile: { text: "Ya", ok: true },
    },
  },
  {
    label: "Notifikasi ke ponsel",
    values: {
      website: { text: "Tidak tersedia", ok: false },
      webapp: { text: "Melalui WhatsApp atau email", ok: true },
      mobile: { text: "Ya, notifikasi langsung", ok: true },
    },
  },
  {
    label: "Biaya pengembangan",
    hint: "Perbandingan relatif",
    values: {
      website: { text: "Paling efisien", level: 1 },
      webapp: { text: "Menengah", level: 2 },
      mobile: { text: "Paling tinggi", level: 3 },
    },
  },
  {
    label: "Waktu pengerjaan",
    hint: "Estimasi umum",
    values: {
      website: { text: "1–2 minggu", level: 1 },
      webapp: { text: "3–6 minggu", level: 2 },
      mobile: { text: "6–12 minggu", level: 3 },
    },
  },
];

/* ------------------------------------------------------------------ */
/* Guide: system map (which system solves which problem)               */
/* ------------------------------------------------------------------ */

export type SystemId = "pos" | "inventory" | "booking" | "crm" | "erp" | "integration";
export type BusinessScale = "kecil" | "menengah" | "perusahaan";

export interface BusinessSystem {
  id: SystemId;
  name: string;
  short: string;
  /** One-sentence definition in plain words. */
  what: string;
  solves: string[];
  features: string[];
  fits: string[];
  scale: BusinessScale[];
}

export const SYSTEMS: BusinessSystem[] = [
  {
    id: "pos",
    name: "Sistem Kasir (POS)",
    short: "Kasir",
    what: "Mencatat setiap transaksi penjualan di titik pembayaran, mulai dari pesanan hingga struk dan rekap harian.",
    solves: ["Antrean pembayaran yang lambat", "Rekap penjualan harian dilakukan manual", "Selisih uang kas di akhir hari"],
    features: ["Pembayaran tunai, QRIS & kartu", "Cetak struk", "Diskon & promo", "Laporan penjualan harian"],
    fits: ["Kafe & restoran", "Toko retail", "Apotek"],
    scale: ["kecil", "menengah"],
  },
  {
    id: "inventory",
    name: "Sistem Inventori",
    short: "Inventori",
    what: "Memantau jumlah dan pergerakan stok di gudang maupun cabang, sehingga persediaan selalu sesuai catatan.",
    solves: ["Stok fisik tidak sesuai catatan", "Barang habis tanpa diketahui", "Sulit memantau stok antar cabang"],
    features: ["Stok terbarui otomatis", "Peringatan stok menipis", "Mutasi antar gudang", "Stock opname"],
    fits: ["Retail & distributor", "F&B dengan bahan baku", "Manufaktur skala kecil"],
    scale: ["kecil", "menengah", "perusahaan"],
  },
  {
    id: "booking",
    name: "Sistem Reservasi",
    short: "Reservasi",
    what: "Memungkinkan pelanggan memilih dan memesan jadwal secara mandiri, lengkap dengan kuota dan pembayaran uang muka.",
    solves: ["Jadwal pelanggan sering bentrok", "Admin kewalahan membalas chat reservasi", "Pelanggan batal tanpa kabar"],
    features: ["Kalender slot real-time", "Pembayaran DP online", "Pengingat via WhatsApp", "Pengaturan kuota"],
    fits: ["Klinik & dokter gigi", "Salon & barbershop", "Studio & rental"],
    scale: ["kecil", "menengah"],
  },
  {
    id: "crm",
    name: "CRM (Manajemen Pelanggan)",
    short: "CRM",
    what: "Menyimpan data dan riwayat setiap pelanggan agar tim dapat menindaklanjuti, menawarkan promo, dan menjaga loyalitas.",
    solves: ["Data pelanggan tidak tercatat rapi", "Pelanggan lama jarang kembali", "Tindak lanjut penawaran terlewat"],
    features: ["Riwayat transaksi pelanggan", "Segmentasi pelanggan", "Program poin & member", "Pengingat tindak lanjut"],
    fits: ["Bisnis jasa", "Retail dengan member", "Tim penjualan B2B"],
    scale: ["menengah", "perusahaan"],
  },
  {
    id: "erp",
    name: "ERP (Sistem Terpadu)",
    short: "ERP",
    what: "Menyatukan keuangan, pembelian, persediaan, dan operasional antar divisi dalam satu sistem dengan satu sumber data.",
    solves: ["Data antar divisi tidak sinkron", "Persetujuan dokumen berjalan lambat", "Laporan perusahaan sulit disusun"],
    features: ["Alur persetujuan bertingkat", "Pembelian & penagihan", "Akuntansi terintegrasi", "Laporan lintas divisi"],
    fits: ["Perusahaan multi-divisi", "Distributor", "Kontraktor & proyek"],
    scale: ["perusahaan"],
  },
  {
    id: "integration",
    name: "Integrasi Sistem",
    short: "Integrasi",
    what: "Menghubungkan aplikasi yang sudah Anda gunakan agar data berpindah otomatis tanpa perlu diinput ulang.",
    solves: ["Data diinput berulang di banyak aplikasi", "Pesanan marketplace dicatat manual", "Notifikasi ke pelanggan dikirim satu per satu"],
    features: ["Sinkronisasi data otomatis", "Koneksi marketplace & pembayaran", "Pencatatan ke akuntansi", "Notifikasi WhatsApp"],
    fits: ["Bisnis dengan banyak kanal penjualan", "Tim yang memakai beberapa aplikasi"],
    scale: ["kecil", "menengah", "perusahaan"],
  },
];

/** Everyday problems, each pointing at the system that solves it. */
export const PROBLEMS: Array<{ label: string; system: SystemId }> = [
  { label: "Stok sering selisih", system: "inventory" },
  { label: "Rekap penjualan masih manual", system: "pos" },
  { label: "Jadwal pelanggan bentrok", system: "booking" },
  { label: "Pelanggan lama jarang kembali", system: "crm" },
  { label: "Data antar divisi tidak sinkron", system: "erp" },
  { label: "Input data berulang di banyak aplikasi", system: "integration" },
  { label: "Admin kewalahan membalas chat reservasi", system: "booking" },
  { label: "Persetujuan dokumen lambat", system: "erp" },
];

export const SCALE_LABELS: Record<BusinessScale, string> = {
  kecil: "Usaha kecil",
  menengah: "Usaha menengah",
  perusahaan: "Perusahaan",
};

export interface Service {
  id: string;
  title: string;
  summary: string;
  points: string[];
  /** Concrete use cases, so non-technical readers can picture it. */
  examples: string[];
  /** Screenshot of a real mockup page, captured from /mockups/[id]. */
  image: { src: string; alt: string; device: "desktop" | "phone" };
}

export const SERVICES: Service[] = [
  {
    id: "aplikasi-web",
    title: "Website & Aplikasi Web",
    summary:
      "Aplikasi berbasis browser yang dapat diakses dari laptop maupun ponsel tanpa instalasi. Ideal untuk mengelola pesanan, data pelanggan, dan laporan penjualan.",
    points: [
      "Hak akses terpisah untuk pemilik, admin, dan staf",
      "Laporan dan grafik penjualan otomatis",
      "Dioptimalkan agar mudah ditemukan di Google",
    ],
    examples: ["Portal pelanggan", "Dashboard penjualan", "Website perusahaan"],
    image: {
      src: "/services/aplikasi-web.webp",
      alt: "Contoh aplikasi web: halaman ringkasan penjualan toko dengan grafik dan daftar pesanan",
      device: "desktop",
    },
  },
  {
    id: "aplikasi-mobile",
    title: "Aplikasi Mobile (Android & iOS)",
    summary:
      "Aplikasi yang dapat diunduh pelanggan maupun tim Anda melalui Play Store dan App Store, untuk pemesanan, pembayaran, dan pemantauan status secara langsung.",
    points: [
      "Satu aplikasi untuk Android dan iOS",
      "Notifikasi langsung ke ponsel pengguna",
      "Tetap berfungsi saat koneksi terbatas",
    ],
    examples: ["Aplikasi pemesanan", "Program loyalitas", "Aplikasi tim lapangan"],
    image: {
      src: "/services/aplikasi-mobile.webp",
      alt: "Contoh aplikasi mobile: aplikasi pemesanan kopi dengan menu dan keranjang",
      device: "phone",
    },
  },
  {
    id: "kasir-stok",
    title: "Sistem Kasir & Inventori",
    summary:
      "Sistem kasir untuk satu gerai maupun banyak cabang. Stok diperbarui otomatis di setiap transaksi, dan laporan harian tersedia tanpa rekap manual.",
    points: [
      "Pemindai barcode dan cetak struk",
      "Stok seluruh cabang dalam satu tampilan",
      "Laporan laba-rugi otomatis",
    ],
    examples: ["Kafe & restoran", "Toko retail", "Apotek"],
    image: {
      src: "/services/kasir-stok.webp",
      alt: "Contoh sistem kasir: daftar menu, keranjang belanja, dan total pembayaran",
      device: "desktop",
    },
  },
  {
    id: "booking-online",
    title: "Sistem Reservasi Online",
    summary:
      "Pelanggan memilih jadwal secara mandiri, jadwal tidak pernah bentrok, dan uang muka dapat dibayarkan langsung saat pemesanan.",
    points: [
      "Mencegah pemesanan ganda secara otomatis",
      "Pembayaran DP via transfer, QRIS, atau e-wallet",
      "Pengingat otomatis melalui WhatsApp",
    ],
    examples: ["Klinik & dokter gigi", "Salon & barbershop", "Studio & rental"],
    image: {
      src: "/services/booking-online.webp",
      alt: "Contoh sistem reservasi: kalender dengan pilihan jam yang tersedia",
      device: "desktop",
    },
  },
  {
    id: "operasional-kantor",
    title: "Aplikasi Operasional",
    summary:
      "Pengajuan, persetujuan berjenjang, surat perintah kerja, hingga penagihan dikelola dalam satu sistem yang mengikuti alur kerja perusahaan Anda.",
    points: [
      "Alur persetujuan bertingkat",
      "Riwayat perubahan tercatat lengkap",
      "Dokumen dan tagihan dibuat otomatis",
    ],
    examples: ["Pengajuan dana", "Surat perintah kerja", "Absensi & cuti"],
    image: {
      src: "/services/operasional-kantor.webp",
      alt: "Contoh aplikasi operasional: daftar pengajuan dengan status menunggu, ditinjau, dan disetujui",
      device: "desktop",
    },
  },
  {
    id: "sambungkan-aplikasi",
    title: "Integrasi Sistem",
    summary:
      "Menghubungkan aplikasi yang sudah Anda gunakan, seperti pembayaran, akuntansi, marketplace, dan WhatsApp, agar data mengalir otomatis tanpa input ulang.",
    points: [
      "Sinkronisasi data antar aplikasi",
      "Menghilangkan input data berulang",
      "Notifikasi terkirim secara otomatis",
    ],
    examples: ["Pesanan marketplace", "Pencatatan akuntansi", "Notifikasi WhatsApp"],
    image: {
      src: "/services/sambungkan-aplikasi.webp",
      alt: "Contoh halaman integrasi yang menghubungkan pembayaran, akuntansi, marketplace, dan WhatsApp",
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
    title: "Konsultasi & analisis kebutuhan",
    when: "Gratis · 30 menit",
    body: "Kami mempelajari proses bisnis Anda, mengidentifikasi pekerjaan yang paling menyita waktu, dan menentukan prioritas yang perlu dibenahi.",
    youGet: "Ringkasan kebutuhan, estimasi biaya, dan jadwal pengerjaan tertulis",
  },
  {
    title: "Perancangan & prototipe",
    when: "1–2 minggu",
    body: "Sebelum pengembangan dimulai, Anda dapat melihat dan mencoba rancangan tampilannya. Seluruh penyesuaian dilakukan pada tahap ini.",
    youGet: "Prototipe interaktif yang dapat Anda uji langsung",
  },
  {
    title: "Pengembangan bertahap",
    when: "Laporan setiap 2 minggu",
    body: "Setiap dua minggu kami mempresentasikan progres yang dapat langsung Anda coba, sehingga perkembangan proyek selalu transparan.",
    youGet: "Akses ke versi uji coba yang terus diperbarui",
  },
  {
    title: "Pengujian, peluncuran & pelatihan",
    when: "± 1 minggu",
    body: "Aplikasi diuji secara menyeluruh, data lama dimigrasikan, dan tim Anda kami latih hingga siap menggunakannya secara mandiri.",
    youGet: "Aplikasi siap digunakan beserta panduan penggunaan",
  },
  {
    title: "Pendampingan purnajual",
    when: "30 hari & selanjutnya",
    body: "Selama 30 hari pertama, setiap kendala kami perbaiki tanpa biaya. Setelahnya tersedia layanan pemeliharaan bulanan.",
    youGet: "Kode sumber lengkap dan dukungan berkelanjutan",
  },
];

export const PRINCIPLES = [
  {
    value: 100,
    suffix: "%",
    label: "Kepemilikan penuh",
    body: "Kode sumber, akses server, dan dokumentasi diserahkan sepenuhnya. Anda bebas melanjutkan pengembangan bersama pihak mana pun.",
  },
  {
    value: 30,
    suffix: " hari",
    label: "Garansi perbaikan",
    body: "Setiap kendala yang muncul dalam 30 hari setelah peluncuran kami perbaiki tanpa biaya tambahan.",
  },
  {
    value: 2,
    suffix: " minggu",
    label: "Laporan progres berkala",
    body: "Hasil pekerjaan dapat Anda tinjau dan uji setiap dua minggu, bukan hanya di akhir proyek.",
  },
] as const;

export const INDUSTRIES = [
  "Kafe & Restoran",
  "Retail",
  "Klinik & Kesehatan",
  "Salon & Kecantikan",
  "Pendidikan & Kursus",
  "Logistik & Ekspedisi",
  "Jasa Profesional",
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
    name: "Website Bisnis",
    forWho: "Membangun kredibilitas usaha dan memudahkan calon pelanggan menemukan Anda di Google.",
    price: "2,5 jt",
    timeline: "1–2 minggu",
    highlights: ["Desain eksklusif sesuai identitas bisnis", "Terhubung langsung ke WhatsApp", "Optimasi mesin pencari (SEO)"],
  },
  {
    name: "Sistem Reservasi",
    forWho: "Untuk bisnis berbasis jadwal yang ingin mengotomatiskan proses reservasi pelanggan.",
    price: "3,5 jt",
    timeline: "2–3 minggu",
    highlights: ["Pemesanan jadwal secara mandiri", "Pembayaran DP online", "Pengingat otomatis via WhatsApp"],
  },
  {
    name: "Kasir & Inventori",
    forWho: "Untuk toko dan restoran yang membutuhkan pencatatan stok dan laporan penjualan yang akurat.",
    price: "4,5 jt",
    timeline: "3–5 minggu",
    highlights: ["Mendukung banyak cabang", "Stok terbarui otomatis", "Laporan harian dan bulanan"],
    featured: true,
  },
];

export const INCLUDED = [
  "Garansi perbaikan 30 hari",
  "Kepemilikan penuh kode sumber",
  "Pelatihan untuk tim Anda",
  "Pendampingan instalasi server",
] as const;

export const PAYMENT_TERMS = [
  { percent: 50, label: "Termin 1", when: "Saat penandatanganan kontrak" },
  { percent: 30, label: "Termin 2", when: "Setelah fitur utama selesai dan disetujui" },
  { percent: 20, label: "Termin 3", when: "Setelah aplikasi resmi digunakan" },
] as const;

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: "Berapa biaya pembuatan aplikasi?",
    answer:
      "Biaya bergantung pada lingkup kebutuhan. Website bisnis mulai Rp 2,5 juta, sistem reservasi mulai Rp 3,5 juta, serta kasir dan inventori mulai Rp 4,5 juta. Untuk kebutuhan khusus, kami menyampaikan penawaran tertulis setelah sesi konsultasi gratis. Nilai yang telah disepakati tidak akan berubah selama pengerjaan.",
  },
  {
    question: "Apakah saya perlu memahami hal teknis?",
    answer:
      "Tidak perlu. Cukup sampaikan bagaimana bisnis Anda berjalan dan kendala yang ingin diselesaikan. Seluruh aspek teknis kami tangani, dan setiap keputusan penting kami jelaskan dengan bahasa yang mudah dipahami.",
  },
  {
    question: "Berapa lama proses pengerjaannya?",
    answer:
      "Website bisnis umumnya 1–2 minggu, sistem kasir 3–5 minggu, dan aplikasi khusus mulai 3 minggu. Jadwal lengkap beserta target setiap tahap tercantum dalam kontrak.",
  },
  {
    question: "Siapa pemilik aplikasi setelah selesai?",
    answer:
      "Sepenuhnya milik Anda. Setelah pelunasan, kode sumber, akses server, dan domain kami serahkan. Anda bebas melanjutkan pengembangan bersama pihak mana pun.",
  },
  {
    question: "Apakah bisa diintegrasikan dengan sistem yang sudah ada?",
    answer:
      "Bisa. Kami mengevaluasi sistem yang sedang Anda gunakan, lalu merekomendasikan opsi yang paling efisien: integrasi, pengembangan lanjutan, atau migrasi ke sistem baru beserta datanya.",
  },
  {
    question: "Bagaimana skema pembayarannya?",
    answer:
      "Pembayaran dilakukan dalam tiga termin sesuai progres: 50% saat penandatanganan kontrak, 30% setelah fitur utama selesai dan disetujui, serta 20% setelah aplikasi resmi digunakan.",
  },
  {
    question: "Bagaimana jika terjadi kendala setelah aplikasi digunakan?",
    answer:
      "Selama 30 hari pertama, perbaikan kami lakukan tanpa biaya. Setelahnya tersedia layanan pemeliharaan bulanan yang mencakup pembaruan keamanan, pencadangan data, dan pengembangan fitur minor.",
  },
];

export const BRIEF_NEEDS = [
  "Website bisnis",
  "Aplikasi web",
  "Aplikasi mobile",
  "Kasir & inventori",
  "Reservasi online",
  "Aplikasi operasional",
  "Integrasi sistem",
] as const;

export const BRIEF_BUDGETS = [
  "< Rp 5 jt",
  "Rp 5–15 jt",
  "Rp 15–50 jt",
  "> Rp 50 jt",
  "Belum pasti",
] as const;
