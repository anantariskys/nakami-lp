export const WHATSAPP_NUMBER = "6285608675771";
export const OFFICIAL_EMAIL = "nakamistudio.id@gmail.com";
export const INSTAGRAM_HANDLE = "@nakamistudio";
export const INSTAGRAM_URL = "https://instagram.com/nakamistudio";
export const GITHUB_URL = "https://github.com/nakamistudio";

export function createWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export interface ServicePackage {
  id: string;
  code: string;
  segment: "biz" | "edu";
  title: string;
  badge?: string;
  subtitle: string;
  painPointCallout: string;
  solutionSummary: string;
  benefits: string[];
  timeline: string;
  format?: string;
  startingPrice: string;
  ctaText: string;
  waTemplate: string;
}

export const BIZ_SERVICES: ServicePackage[] = [
  {
    id: "biz-01",
    code: "BIZ-01",
    segment: "biz",
    title: "Web Profil Bisnis & Landing Page Konversi Tinggi",
    badge: "Paling Populer",
    subtitle: "Tingkatkan Kredibilitas Usaha dan Raih Calon Pembeli Otomatis",
    painPointCallout: "Calon pembeli ragu karena bisnis Anda belum punya website resmi berdomain profesional.",
    solutionSummary:
      "Website kustom cepat, responsif, dan teroptimasi SEO lokal agar bisnis Anda mudah ditemukan di Google.",
    benefits: [
      "100% Kode Kustom Modern (Next.js / Tailwind CSS, bukan template pasaran)",
      "Skor Google Lighthouse 95+ (Cepat diakses di jaringan mobile)",
      "Desain responsif mobile-first disesuaikan dengan identitas brand",
      "Setup SEO teknis, Google Analytics & integrasi tombol pesan WhatsApp langsung",
      "Garansi bug gratis 30 hari pascapeluncuran",
    ],
    timeline: "Est. 7-14 Hari Kerja",
    startingPrice: "Mulai Rp 2.500.000",
    ctaText: "Konsultasi Website Bisnis",
    waTemplate:
      "Halo Nakami Studio, saya tertarik konsultasi paket BIZ-01 (Website Profil Bisnis & Landing Page). Bisnis saya bergerak di bidang...",
  },
  {
    id: "biz-02",
    code: "BIZ-02",
    segment: "biz",
    title: "Aplikasi Kasir (POS) & Manajemen Stok Multi-Outlet",
    badge: "Efisiensi Operasional",
    subtitle: "Hentikan Selisih Stok dan Kerumitan Rekap Manual Tiap Malam",
    painPointCallout: "Stok sering selisih, kasir bingung rekap manual di buku/Excel saat toko sedang ramai.",
    solutionSummary:
      "Sistem kasir web/cloud kustom tanpa biaya langganan bulanan mahal per device.",
    benefits: [
      "Transaksi kasir kilat dengan dukungan scan barcode & print struk thermal",
      "Sinkronisasi inventaris stok real-time antar gudang dan toko",
      "Rekap omzet harian otomatis & export laporan laba-rugi ke Excel",
      "Role-based access: kasir tidak bisa ubah harga atau hapus transaksi tanpa PIN manajer",
      "Akses dari tablet, laptop, atau smartphone",
    ],
    timeline: "Est. 14-25 Hari Kerja",
    startingPrice: "Mulai Rp 4.500.000",
    ctaText: "Konsultasi Sistem Kasir",
    waTemplate:
      "Halo Nakami Studio, saya mau tanya paket BIZ-02 (Aplikasi Kasir & Manajemen Stok) untuk toko/usaha saya...",
  },
  {
    id: "biz-03",
    code: "BIZ-03",
    segment: "biz",
    title: "Sistem Reservasi & Booking Jadwal Otomatis",
    badge: "Otomasi Reservasi",
    subtitle: "Jadwal Reservasi Masuk Otomatis Tanpa Perlu Balas Chat Berulang",
    painPointCallout: "Admin lelah membalas chat jadwal berulang-ulang dan sering terjadi jadwal bentrok.",
    solutionSummary:
      "Portal booking mandiri untuk klinik, salon, studio foto, atau rental dengan kalender otomatis.",
    benefits: [
      "Kalender interaktif: pelanggan memilih slot tanggal & jam yang masih kosong secara mandiri",
      "Konfirmasi otomatis via integrasi WhatsApp / Email notifikasi",
      "Dashboard admin untuk kontrol kuota harian & pembatalan jadwal",
      "Opsi integrasi uang muka / payment gateway",
      "Mencegah double-booking 100%",
    ],
    timeline: "Est. 10-18 Hari Kerja",
    startingPrice: "Mulai Rp 3.500.000",
    ctaText: "Konsultasi Sistem Booking",
    waTemplate:
      "Halo Nakami Studio, saya butuh sistem reservasi jadwal (BIZ-03) untuk bisnis saya...",
  },
  {
    id: "biz-04",
    code: "BIZ-04",
    segment: "biz",
    title: "Otomasi Alur Kerja & Software Kustom Perusahaan",
    badge: "Sistem Kustom",
    subtitle: "Aplikasi Internal yang Dirancang Pas Mengikuti SOP Tim Anda",
    painPointCallout: "Software generik di pasaran terlalu kaku, tidak cocok dengan SOP unik internal Anda.",
    solutionSummary:
      "Software internal kustom (ERP mini, portal klien, manajemen SPK/invoice) yang dirancang pas dengan SOP Anda.",
    benefits: [
      "Analisis SOP mendalam bersama engineer Nakami Studio sebelum penulisan kode",
      "Dashboard metrik operasional terintegrasi & pelacakan status pekerjaan real-time",
      "Audit trail lengkap: setiap tindakan pengguna tercatat rapi untuk keamanan data",
      "Kepemilikan kode sumber penuh (full source-code ownership tanpa vendor lock-in)",
      "Pendampingan onboarding dan pelatihan tim hingga lancar",
    ],
    timeline: "Sesuai Kompleksitas SOP (Mulai 3 Minggu)",
    startingPrice: "Berdasarkan Spesifikasi",
    ctaText: "Diskusikan Kebutuhan SOP",
    waTemplate:
      "Halo Nakami Studio, saya ingin mendiskusikan sistem internal kustom (BIZ-04) untuk operasional perusahaan kami...",
  },
];

export const EDU_SERVICES: ServicePackage[] = [
  {
    id: "edu-01",
    code: "EDU-01",
    segment: "edu",
    title: "Live Debugging 1-on-1 & Code Review Intensif",
    badge: "Penyelamat Deadline",
    subtitle: "Selesaikan Error Buntu Bersama Senior Engineer dalam Hitungan Jam",
    painPointCallout: "Stuck error berhari-hari, deadline mendekat, tanya forum tidak ada yang menjawab tuntas.",
    solutionSummary:
      "Sesi live screen-share 1-on-1: kami tidak sekadar membetulkan bug, tapi mengajarkan cara menemukan akar masalahnya.",
    benefits: [
      "Live screen-share interaktif: investigasi error secara sistematis bersama mentor",
      "Code review baris demi baris: perbaiki struktur, efisiensi, dan keamanan kode Anda",
      "Penjelasan logika di balik error (agar tidak terulang saat demo dosen)",
      "Rekaman video sesi mentoring dikirimkan setelah sesi selesai",
      "Garansi follow-up chat 3 hari untuk error yang sama",
    ],
    timeline: "Sesi Fleksibel (1-2 Jam via Google Meet)",
    format: "1-on-1 Screen-Share Interaktif",
    startingPrice: "Mulai Rp 150.000 / Jam",
    ctaText: "Jadwalkan Live Debugging",
    waTemplate:
      "Halo Nakami Studio, saya stuck error koding di proyek saya dan butuh sesi Live Debugging 1-on-1 (EDU-01)...",
  },
  {
    id: "edu-02",
    code: "EDU-02",
    segment: "edu",
    title: "Mentoring Arsitektur Database & Backend API",
    badge: "Fondasi Skripsi Kuat",
    subtitle: "Rancang Relasi Database dan API yang Kokoh Sebelum Terlanjur Salah Arah",
    painPointCallout: "Bingung menentukan relasi tabel (ERD), normalisasi, atau struktur REST API untuk tugas akhir.",
    solutionSummary:
      "Bimbingan desain database relasional / non-relasional dan perancangan endpoint API yang bersih dan terstandar industri.",
    benefits: [
      "Review dan validasi ERD: eliminasi redundansi data dan desain relasi yang tepat",
      "Standarisasi perancangan REST API (HTTP verbs, response status, handling error)",
      "Simulasi pengujian query database untuk performa maksimal",
      "Tips mempersiapkan diagram arsitektur untuk dokumen laporan tugas akhir",
      "Checklist kesiapan backend sebelum tahap integrasi frontend",
    ],
    timeline: "Paket 3 Sesi Terarah",
    format: "Konsultasi Terstruktur + Dokumentasi Diagram",
    startingPrice: "Mulai Rp 400.000 / Paket",
    ctaText: "Amankan Arsitektur Database",
    waTemplate:
      "Halo Nakami Studio, saya butuh bimbingan mentoring arsitektur database & API (EDU-02) untuk proyek/skripsi saya...",
  },
  {
    id: "edu-03",
    code: "EDU-03",
    segment: "edu",
    title: "Simulasi Sidang Skripsi IT & Bedah Kode Menyeluruh",
    badge: "Siap Hadapi Penguji",
    subtitle: "Pahami Logika Kodemu dan Jawab Pertanyaan Dosen Penguji dengan Jelas",
    painPointCallout: "Takut blank saat dosen penguji bertanya: 'Kenapa pakai algoritma ini?' atau 'Jelaskan fungsi baris 142!'.",
    solutionSummary:
      "Simulasi sidang realistis bersama mentor: kami mengajukan pertanyaan kritis khas dosen penguji dan melatih cara menjawab Anda secara ilmiah dan percaya diri.",
    benefits: [
      "Bedah tuntas alur kode aplikasi dari awal hingga akhir",
      "Simulasi tanya-jawab dengan bank pertanyaan kritis dosen penguji IT",
      "Latihan teknik presentasi teknis & demo aplikasi yang bebas kendala teknis saat sidang",
      "Feedback detail mengenai kelemahan logika yang rawan diserang dosen",
      "Dokumen rangkuman FAQ teknis spesifik untuk aplikasi Anda",
    ],
    timeline: "Paket Intensif (2 Sesi Simulasi + 1 Q&A Darurat)",
    format: "Simulasi Sidang + Tanya Jawab Interaktif",
    startingPrice: "Mulai Rp 550.000 / Paket",
    ctaText: "Daftar Simulasi Sidang",
    waTemplate:
      "Halo Nakami Studio, saya mau daftar simulasi sidang skripsi IT (EDU-03) agar siap menghadapi dosen penguji...",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: "Apakah Nakami Studio menerima pengerjaan joki tugas akhir / skripsi mahasiswa?",
    answer:
      "TIDAK, kami menolak tegas segala bentuk joki. Nakami Studio bergerak di jalur mentoring dan edukasi teknis 1-on-1. Kami membimbing Anda memahami alur logika, membedah error, mengoptimasi arsitektur database, dan melatih simulasi sidang agar Anda mampu menulis dan mempertanggungjawabkan karya Anda sendiri dengan bangga di depan dosen penguji.",
  },
  {
    question: "Berapa lama estimasi waktu pengerjaan proyek website atau software kasir untuk UMKM?",
    answer:
      "Estimasi waktu bergantung pada kompleksitas modul yang disepakati. Landing page konversi tinggi umumnya selesai dalam 7-14 hari kerja. Aplikasi kasir (POS) dan manajemen inventaris membutuhkan 14-25 hari kerja. Software kustom alur kerja internal diperkirakan mulai 3 minggu setelah tahap requirement gathering selesai. Timeline fixed akan tertuang jelas di kontrak sebelum pengerjaan dimulai.",
  },
  {
    question: "Bagaimana skema pembayaran di Nakami Studio?",
    answer:
      "Untuk proyek UMKM/Bisnis, kami menggunakan skema transparan 3 termin: 50% Uang Muka (DP) saat kontrak disepakati, 30% setelah progres milestone inti rampung dan didemokan, serta 20% pelunasan setelah serah terima penuh (handover kode, domain/hosting live, dan training). Untuk sesi mentoring mahasiswa, pembayaran dilakukan per sesi atau paket sebelum jadwal mentoring dimulai.",
  },
  {
    question: "Apakah ada garansi jika terjadi error atau bug setelah website bisnis selesai diluncurkan?",
    answer:
      "Ya. Setiap proyek software dan website UMKM di Nakami Studio mendapatkan garansi perbaikan bug gratis selama 30 hari pascapeluncuran. Kami memastikan sistem Anda beroperasi stabil dalam aktivitas harian bisnis Anda.",
  },
  {
    question: "Bagaimana cara memulai konsultasi pertama saya?",
    answer:
      "Klik tombol WhatsApp di website ini atau isi formulir Quick Intake Audit di bawah. Kita jadwalkan sesi diskusi 15 menit untuk memetakan kendala sistem Anda, tanpa biaya dan tanpa kewajiban memesan paket apa pun.",
  },
];

export const PROBLEM_SOLUTION_DATA = {
  biz: {
    problemTag: "SEBELUM: STRES & MANUAL",
    problemTitle: "Operasional Tersendat, Laporan Berantakan, Waktu Habis untuk Hal Berulang",
    problemPoints: [
      "Stok fisik sering tidak cocok dengan catatan pembukuan manual di buku kasir",
      "Calon pelanggan batal membeli karena ragu bisnis Anda belum punya website resmi berdomain kredibel",
      "Admin kewalahan membalas chat jadwal reservasi yang menumpuk dan sering bentrok",
      "Biaya langganan aplikasi SaaS generik terus naik tiap bulan tanpa fitur yang benar-benar pas dengan SOP Anda",
    ],
    solutionTag: "SESUDAH: SISTEM BEKERJA OTOMATIS",
    solutionTitle: "Sistem Kustom Berjalan Mulus, Anda Fokus Mengembangkan Skala Bisnis",
    solutionPoints: [
      "Stok inventaris ter-update otomatis secara real-time setiap ada transaksi kasir di kasir",
      "Website profesional berkecepatan tinggi yang meyakinkan calon pelanggan dan mudah ditemukan di Google",
      "Pelanggan memesan slot jadwal mandiri 24/7 tanpa membuat admin kerepotan",
      "Aplikasi kustom milik Anda sepenuhnya tanpa biaya langganan per perangkat yang mencekik",
    ],
  },
  edu: {
    problemTag: "SEBELUM: PANIK & BINGUNG ARAH",
    problemTitle: "Dikejar Deadline Tugas Akhir, Stuck Error Tanpa Jawaban, Dosen Penguji Galak",
    problemPoints: [
      "Tiga hari habis hanya untuk mencari satu baris bug tanpa tahu cara membaca error trace dengan benar",
      "Struktur tabel database berantakan, query lambat, dan bingung cara mendesain relasi foreign key",
      "Takut tergoda jalan pintas joki ilegal yang berisiko drop-out dan memalukan saat sidang",
      "Panik dan cemas membayangkan pertanyaan dosen penguji saat demo program aplikasi skripsi",
    ],
    solutionTag: "SESUDAH: PAHAM TUNTAS & PEDE SIDANG",
    solutionTitle: "Kuasai Logika Kodemu Sendiri, Hadapi Sidang dengan Kepala Tegak",
    solutionPoints: [
      "Paham teknik debugging sistematis bersama senior engineer: error selesai, ilmunya melekat",
      "Struktur database normal, rapi, dan siap dipertanggungjawabkan secara akademis",
      "Hasil murni pemahaman sendiri, etis, dan siap dipertanggungjawabkan di ruang sidang",
      "Lancar menjawab setiap pertanyaan penguji karena telah melalui simulasi bedah kode intensif",
    ],
  },
};
