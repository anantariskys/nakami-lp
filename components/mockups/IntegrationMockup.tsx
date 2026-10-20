import { ArrowRight, BookOpenCheck, Boxes, CreditCard, LayoutDashboard, MessageCircle, Plug, ReceiptText, RefreshCw, Settings, Sheet, Store, Truck, Users } from "lucide-react";
import { cn } from "@/lib/cn";
import { AppShell, Badge, Card } from "./shared";

const APPS = [
  { name: "Pembayaran Online", desc: "QRIS, transfer bank, e-wallet", icon: CreditCard, color: "#0EA5E9", on: true, stat: "312 transaksi hari ini" },
  { name: "Pembukuan", desc: "Jurnal penjualan & pembelian", icon: BookOpenCheck, color: "#8B5CF6", on: true, stat: "Tercatat otomatis" },
  { name: "Marketplace", desc: "Pesanan & stok toko online", icon: Store, color: "#10B981", on: true, stat: "48 pesanan masuk" },
  { name: "WhatsApp", desc: "Notifikasi ke pelanggan", icon: MessageCircle, color: "#22C55E", on: true, stat: "126 pesan terkirim" },
  { name: "Ekspedisi", desc: "Cek ongkir & nomor resi", icon: Truck, color: "#F59E0B", on: false, stat: "Belum disambungkan" },
  { name: "Google Sheets", desc: "Kirim laporan harian", icon: Sheet, color: "#16A34A", on: false, stat: "Belum disambungkan" },
];

const LOG = [
  { time: "10.42", from: "Marketplace", to: "Stok", text: "Pesanan #MP-2231 masuk, stok Kain Batik dikurangi 2" },
  { time: "10.42", from: "Stok", to: "Pembukuan", text: "Penjualan Rp 780.000 dicatat ke jurnal" },
  { time: "10.43", from: "Sistem", to: "WhatsApp", text: "Konfirmasi pesanan dikirim ke Dewi Lestari" },
  { time: "10.51", from: "Pembayaran", to: "Pesanan", text: "Pembayaran QRIS #0913 diterima, status jadi Lunas" },
];

export function IntegrationMockup() {
  return (
    <AppShell
      brand="Toko Kain Sari"
      brandColor="#E73F1E"
      user={{ name: "Sari Wulandari", role: "Pemilik" }}
      nav={[
        { icon: LayoutDashboard, label: "Ringkasan" },
        { icon: ReceiptText, label: "Pesanan" },
        { icon: Boxes, label: "Produk" },
        { icon: Users, label: "Pelanggan" },
        { icon: Plug, label: "Sambungan", active: true },
        { icon: Settings, label: "Pengaturan" },
      ]}
      title="Sambungan aplikasi"
      subtitle="Aplikasi yang tersambung akan bertukar data sendiri, tanpa perlu diketik ulang."
      actions={
        <span className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-[12px] font-medium text-emerald-700">
          <RefreshCw className="size-3.5" /> Terakhir sinkron 1 menit lalu
        </span>
      }
    >
      <div className="grid grid-cols-3 gap-4">
        {APPS.map((a) => (
          <Card key={a.name} className="p-5">
            <div className="flex items-start justify-between">
              <span className="grid size-10 place-items-center rounded-xl text-white" style={{ background: a.color }}>
                <a.icon className="size-5" />
              </span>
              <span className={cn("flex h-6 w-11 items-center rounded-full p-0.5", a.on ? "justify-end bg-emerald-500" : "bg-black/10")}>
                <span className="size-5 rounded-full bg-white shadow" />
              </span>
            </div>
            <p className="mt-4 text-[14px] font-semibold">{a.name}</p>
            <p className="mt-0.5 text-[12px] text-muted">{a.desc}</p>
            <div className="mt-4 flex items-center justify-between border-t border-black/[0.05] pt-3">
              <span className="text-[11px] text-faint">{a.stat}</span>
              {a.on ? <Badge tone="green">Tersambung</Badge> : <Badge tone="gray">Mati</Badge>}
            </div>
          </Card>
        ))}
      </div>

      <Card className="mt-4">
        <div className="flex items-center justify-between px-5 py-4">
          <p className="text-[14px] font-semibold">Aktivitas otomatis hari ini</p>
          <span className="text-[12px] text-muted">1.284 data berpindah sendiri</span>
        </div>
        <ul>
          {LOG.map((l, i) => (
            <li key={i} className="flex items-center gap-4 border-t border-black/[0.05] px-5 py-3 text-[12px]">
              <span className="w-10 font-mono text-faint">{l.time}</span>
              <span className="flex w-52 items-center gap-2 text-muted">
                <span className="rounded-md bg-paper-3 px-2 py-0.5">{l.from}</span>
                <ArrowRight className="size-3.5" />
                <span className="rounded-md bg-orange/10 px-2 py-0.5 text-orange">{l.to}</span>
              </span>
              <span>{l.text}</span>
            </li>
          ))}
        </ul>
      </Card>
    </AppShell>
  );
}
