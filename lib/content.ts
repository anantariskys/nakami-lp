export const NAV_LINKS = [
  { href: "#layanan", label: "Layanan" },
  { href: "#proses", label: "Proses" },
  { href: "#investasi", label: "Investasi" },
  { href: "#faq", label: "FAQ" },
] as const;

export type ServiceVisual = "web" | "mobile" | "pos" | "booking" | "erp" | "integration";

export interface Service {
  id: string;
  visual: ServiceVisual;
  title: string;
  summary: string;
  points: string[];
  stack: string[];
}

export const SERVICES: Service[] = [
  {
    id: "aplikasi-web",
    visual: "web",
    title: "Aplikasi Web Kustom",
    summary:
      "Portal pelanggan, dashboard operasional, sampai produk SaaS. Dibangun dari nol sesuai cara tim Anda bekerja, bukan sebaliknya.",
    points: ["Multi-role & hak akses", "Dashboard & laporan", "SEO & performa tinggi"],
    stack: ["Next.js", "React", "Node.js", "PostgreSQL"],
  },
  {
    id: "aplikasi-mobile",
    visual: "mobile",
    title: "Aplikasi Mobile",
    summary:
      "Aplikasi Android dan iOS dari satu basis kode. Untuk pelanggan, kurir, atau tim lapangan yang butuh akses di mana saja.",
    points: ["Android & iOS", "Notifikasi push", "Mode offline"],
    stack: ["React Native", "Flutter", "Firebase"],
  },
  {
    id: "kasir-inventori",
    visual: "pos",
    title: "Kasir & Inventori",
    summary:
      "Sistem POS multi-outlet dengan stok yang sinkron real-time. Tanpa biaya langganan per perangkat, tanpa rekap manual tiap malam.",
    points: ["Scan barcode & struk", "Stok antar gudang", "Laporan laba-rugi"],
    stack: ["Web & Tablet", "Thermal Printer", "Excel Export"],
  },
  {
    id: "reservasi",
    visual: "booking",
    title: "Reservasi & Booking",
    summary:
      "Pelanggan memilih jadwal sendiri, sistem yang mengatur kuota. Cocok untuk klinik, salon, studio, rental, dan jasa berbasis jadwal.",
    points: ["Kalender slot otomatis", "DP via payment gateway", "Pengingat WhatsApp"],
    stack: ["Midtrans", "Xendit", "WhatsApp API"],
  },
  {
    id: "sistem-internal",
    visual: "erp",
    title: "Sistem Internal & ERP",
    summary:
      "SPK, approval berjenjang, invoice, dan pelacakan pekerjaan dalam satu tempat. Dirancang mengikuti SOP Anda, lengkap dengan audit trail.",
    points: ["Workflow approval", "Audit trail", "Integrasi dokumen"],
    stack: ["NestJS", "Laravel", "MySQL", "Redis"],
  },
  {
    id: "integrasi",
    visual: "integration",
    title: "Integrasi & Otomasi",
    summary:
      "Hubungkan aplikasi yang sudah Anda pakai. Pembayaran, akuntansi, marketplace, dan notifikasi berjalan otomatis tanpa input ulang.",
    points: ["REST & Webhook", "Sinkronisasi data", "Otomasi notifikasi"],
    stack: ["REST API", "Webhook", "Cron Jobs"],
  },
];

export interface ProcessStep {
  title: string;
  duration: string;
  body: string;
  output: string;
}

export const PROCESS: ProcessStep[] = [
  {
    title: "Discovery",
    duration: "1–3 hari · gratis",
    body: "Kami duduk bersama Anda, memetakan alur kerja yang sekarang, dan menemukan bagian yang paling menghabiskan waktu.",
    output: "Dokumen ruang lingkup & estimasi biaya",
  },
  {
    title: "Desain & Prototipe",
    duration: "1–2 minggu",
    body: "Alur dan tampilan dirancang lebih dulu dalam prototipe yang bisa diklik. Anda menyetujui sebelum satu baris kode ditulis.",
    output: "Prototipe interaktif & desain UI",
  },
  {
    title: "Development",
    duration: "Sprint 2 mingguan",
    body: "Fitur dibangun bertahap. Setiap akhir sprint ada demo dan akses staging, jadi Anda melihat progres, bukan hanya mendengar kabar.",
    output: "Demo rutin & akses staging",
  },
  {
    title: "Uji & Rilis",
    duration: "1 minggu",
    body: "Pengujian menyeluruh, migrasi data lama, lalu peluncuran. Tim Anda dilatih sampai benar-benar lancar memakai sistemnya.",
    output: "Aplikasi live & sesi pelatihan",
  },
  {
    title: "Pendampingan",
    duration: "30 hari +",
    body: "Garansi perbaikan bug selama 30 hari. Setelahnya, tersedia paket pemeliharaan bulanan bila dibutuhkan.",
    output: "Source code, dokumentasi & dukungan",
  },
];

export const PRINCIPLES = [
  {
    value: 100,
    suffix: "%",
    label: "Kepemilikan source code",
    body: "Repositori, akses server, dan dokumentasi diserahkan penuh. Tidak ada vendor lock-in.",
  },
  {
    value: 30,
    suffix: " hari",
    label: "Garansi setelah rilis",
    body: "Bug yang muncul dalam 30 hari setelah peluncuran kami perbaiki tanpa biaya tambahan.",
  },
  {
    value: 2,
    suffix: " minggu",
    label: "Siklus demo progres",
    body: "Anda melihat aplikasi tumbuh setiap sprint, dan bisa mengoreksi arah sejak awal.",
  },
] as const;

export const STACK = [
  "Next.js",
  "React",
  "React Native",
  "Flutter",
  "TypeScript",
  "Node.js",
  "NestJS",
  "Laravel",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "Docker",
  "Google Cloud",
  "AWS",
  "Midtrans",
  "Xendit",
  "WhatsApp Cloud API",
] as const;

export const INDUSTRIES = [
  "Retail & F&B",
  "Klinik & Kesehatan",
  "Pendidikan",
  "Logistik",
  "Jasa Profesional",
  "Properti",
  "Manufaktur",
] as const;

export interface PricingTier {
  name: string;
  price: string;
  note: string;
  timeline: string;
  includes: string[];
  featured?: boolean;
}

export const PRICING: PricingTier[] = [
  {
    name: "Website Bisnis",
    price: "Rp 2,5 jt",
    note: "mulai dari",
    timeline: "7–14 hari kerja",
    includes: ["Desain kustom, bukan template", "SEO teknis & analytics", "Integrasi WhatsApp"],
  },
  {
    name: "Sistem Booking",
    price: "Rp 3,5 jt",
    note: "mulai dari",
    timeline: "10–18 hari kerja",
    includes: ["Kalender & kuota slot", "Dashboard admin", "Notifikasi otomatis"],
  },
  {
    name: "Kasir & Inventori",
    price: "Rp 4,5 jt",
    note: "mulai dari",
    timeline: "14–25 hari kerja",
    includes: ["POS multi-outlet", "Stok real-time", "Laporan & export Excel"],
    featured: true,
  },
  {
    name: "Aplikasi Kustom",
    price: "Sesuai lingkup",
    note: "estimasi tetap",
    timeline: "mulai 3 minggu",
    includes: ["Web, mobile, atau keduanya", "Sistem internal & ERP", "Integrasi pihak ketiga"],
  },
];

export const PAYMENT_TERMS = [
  { percent: 50, label: "Uang muka", when: "Saat kontrak disepakati" },
  { percent: 30, label: "Milestone", when: "Fitur inti selesai & didemokan" },
  { percent: 20, label: "Pelunasan", when: "Serah terima & aplikasi live" },
] as const;

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: "Berapa biaya membuat aplikasi di Nakami Studio?",
    answer:
      "Tergantung ruang lingkup. Website bisnis mulai Rp 2,5 juta, sistem booking mulai Rp 3,5 juta, dan kasir & inventori mulai Rp 4,5 juta. Untuk aplikasi kustom, kami memberikan estimasi tetap setelah sesi discovery gratis, sehingga angka yang disepakati di kontrak tidak berubah di tengah jalan.",
  },
  {
    question: "Berapa lama proses pembuatannya?",
    answer:
      "Website bisnis umumnya 7–14 hari kerja, sistem kasir 14–25 hari kerja, dan aplikasi kustom mulai 3 minggu tergantung kompleksitas. Jadwal per milestone dituliskan di kontrak sebelum pengerjaan dimulai.",
  },
  {
    question: "Siapa pemilik source code aplikasinya?",
    answer:
      "Anda. Setelah pelunasan, seluruh source code, akses server, domain, dan dokumentasi teknis diserahkan sepenuhnya. Anda bebas melanjutkan pengembangan dengan tim mana pun.",
  },
  {
    question: "Saya sudah punya sistem lama. Bisa dilanjutkan atau diintegrasikan?",
    answer:
      "Bisa. Kami akan mengaudit sistem yang ada terlebih dahulu, lalu merekomendasikan apakah lebih efisien dikembangkan, diintegrasikan lewat API, atau dimigrasikan ke sistem baru beserta datanya.",
  },
  {
    question: "Bagaimana skema pembayarannya?",
    answer:
      "Tiga termin yang terikat pada hasil kerja: 50% saat kontrak disepakati, 30% setelah fitur inti selesai dan didemokan, serta 20% setelah serah terima dan aplikasi live.",
  },
  {
    question: "Apa yang terjadi setelah aplikasi diluncurkan?",
    answer:
      "Setiap proyek mendapat garansi perbaikan bug selama 30 hari. Setelah itu tersedia paket pemeliharaan bulanan untuk pembaruan keamanan, backup, monitoring, dan pengembangan fitur kecil.",
  },
  {
    question: "Saya tidak paham teknis. Apakah tetap bisa?",
    answer:
      "Tentu. Anda cukup menceritakan masalah dan cara kerja bisnis Anda. Kami yang menerjemahkannya menjadi rancangan sistem, dan semua keputusan teknis dijelaskan dalam bahasa yang mudah dipahami.",
  },
];

export const BRIEF_NEEDS = [
  "Aplikasi web",
  "Aplikasi mobile",
  "Kasir & inventori",
  "Booking",
  "Sistem internal",
  "Integrasi",
  "Website bisnis",
] as const;

export const BRIEF_BUDGETS = [
  "< Rp 5 jt",
  "Rp 5–15 jt",
  "Rp 15–50 jt",
  "> Rp 50 jt",
  "Belum tahu",
] as const;
