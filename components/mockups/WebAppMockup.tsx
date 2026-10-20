import { BarChart3, Boxes, CalendarDays, Download, LayoutDashboard, ReceiptText, Settings, Users } from "lucide-react";
import { AppShell, Avatar, Badge, Card, PrimaryButton } from "./shared";

const KPIS = [
  { label: "Penjualan bulan ini", value: "Rp 84,2 jt", change: "+12% dari bulan lalu" },
  { label: "Jumlah pesanan", value: "1.248", change: "+86 pesanan" },
  { label: "Pelanggan baru", value: "214", change: "+18%" },
  { label: "Rata-rata belanja", value: "Rp 67.500", change: "+Rp 4.200" },
];

const SALES = [42, 55, 48, 61, 58, 72, 66, 80, 74, 88, 83, 95];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];

const ORDERS = [
  { name: "Dewi Lestari", item: "Kain Batik Tulis × 2", total: "Rp 780.000", status: ["green", "Selesai"] },
  { name: "Andi Pratama", item: "Kain Tenun Ikat × 1", total: "Rp 450.000", status: ["blue", "Dikirim"] },
  { name: "Rina Kurnia", item: "Kain Katun Jepang × 5", total: "Rp 325.000", status: ["amber", "Dikemas"] },
  { name: "Budi Santoso", item: "Kain Batik Cap × 3", total: "Rp 540.000", status: ["green", "Selesai"] },
  { name: "Maya Sari", item: "Kain Linen × 4", total: "Rp 360.000", status: ["amber", "Menunggu bayar"] },
] as const;

const TOP = [
  { name: "Kain Batik Tulis", sold: 182, pct: 92 },
  { name: "Kain Tenun Ikat", sold: 126, pct: 68 },
  { name: "Kain Katun Jepang", sold: 98, pct: 52 },
  { name: "Kain Linen", sold: 74, pct: 40 },
];

export function WebAppMockup() {
  return (
    <AppShell
      brand="Toko Kain Sari"
      brandColor="#E73F1E"
      user={{ name: "Sari Wulandari", role: "Pemilik" }}
      nav={[
        { icon: LayoutDashboard, label: "Ringkasan", active: true },
        { icon: ReceiptText, label: "Pesanan", badge: "12" },
        { icon: Boxes, label: "Produk" },
        { icon: Users, label: "Pelanggan" },
        { icon: BarChart3, label: "Laporan" },
        { icon: CalendarDays, label: "Promo" },
        { icon: Settings, label: "Pengaturan" },
      ]}
      title="Selamat pagi, Sari"
      subtitle="Ini ringkasan toko Anda per hari ini, Sabtu 24 Oktober."
      actions={
        <PrimaryButton>
          <Download className="size-4" /> Unduh laporan
        </PrimaryButton>
      }
    >
      <div className="grid grid-cols-4 gap-4">
        {KPIS.map((k) => (
          <Card key={k.label} className="p-5">
            <p className="text-[12px] text-muted">{k.label}</p>
            <p className="mt-2 text-[24px] font-semibold tracking-tight">{k.value}</p>
            <p className="mt-1 text-[11px] font-medium text-emerald-600">{k.change}</p>
          </Card>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-[1fr_320px] gap-4">
        <Card className="p-5">
          <div className="flex items-center justify-between">
            <p className="text-[14px] font-semibold">Penjualan per bulan</p>
            <span className="rounded-lg bg-paper-3 px-3 py-1.5 text-[11px] text-muted">Tahun 2026</span>
          </div>
          <div className="mt-5 flex h-44 items-end gap-3">
            {SALES.map((v, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-2">
                <div
                  className="w-full rounded-md"
                  style={{
                    height: `${v * 1.6}px`,
                    background: i === 9 ? "linear-gradient(180deg,#FB6C00,#E73F1E)" : "#F1EEEA",
                  }}
                />
                <span className="text-[10px] text-faint">{MONTHS[i]}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card className="p-5">
          <p className="text-[14px] font-semibold">Produk paling laku</p>
          <div className="mt-4 space-y-4">
            {TOP.map((t) => (
              <div key={t.name}>
                <div className="flex justify-between text-[12px]">
                  <span>{t.name}</span>
                  <span className="text-muted">{t.sold} terjual</span>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-paper-3">
                  <div className="h-full rounded-full bg-orange" style={{ width: `${t.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="mt-4">
        <div className="flex items-center justify-between px-5 py-4">
          <p className="text-[14px] font-semibold">Pesanan terbaru</p>
          <span className="text-[12px] font-medium text-orange">Lihat semua</span>
        </div>
        <table className="w-full text-left text-[12px]">
          <tbody>
            {ORDERS.map((o) => (
              <tr key={o.name} className="border-t border-black/[0.05]">
                <td className="px-5 py-2.5">
                  <span className="flex items-center gap-3">
                    <Avatar name={o.name} size={26} />
                    {o.name}
                  </span>
                </td>
                <td className="text-muted">{o.item}</td>
                <td className="font-medium">{o.total}</td>
                <td className="px-5 text-right">
                  <Badge tone={o.status[0]}>{o.status[1]}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </AppShell>
  );
}
