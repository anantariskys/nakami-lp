import { Banknote, Coffee, Cookie, CreditCard, Croissant, CupSoda, GlassWater, Milk, Minus, Plus, QrCode, Sandwich, ScanBarcode, Search, Trash2, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import { Avatar } from "./shared";

const CATEGORIES = ["Semua", "Kopi", "Non-kopi", "Makanan", "Camilan"];

const PRODUCTS = [
  { name: "Es Kopi Susu", price: "22.000", stock: 48, tone: "#A0703F", icon: CupSoda },
  { name: "Americano", price: "18.000", stock: 60, tone: "#5B3A29", icon: Coffee },
  { name: "Kopi Aren Latte", price: "25.000", stock: 32, tone: "#8B5E3C", icon: CupSoda },
  { name: "Cappuccino", price: "24.000", stock: 41, tone: "#9C6B43", icon: Coffee },
  { name: "Matcha Latte", price: "27.000", stock: 6, tone: "#6E9A47", icon: CupSoda, low: true },
  { name: "Cokelat Panas", price: "23.000", stock: 25, tone: "#6D4C3D", icon: Milk },
  { name: "Croissant", price: "18.000", stock: 14, tone: "#C98A2E", icon: Croissant },
  { name: "Roti Bakar Keju", price: "20.000", stock: 22, tone: "#C48A2A", icon: Sandwich },
  { name: "Kentang Goreng", price: "17.000", stock: 3, tone: "#D19A1E", icon: Cookie, low: true },
  { name: "Pisang Goreng", price: "15.000", stock: 30, tone: "#B7832F", icon: Cookie },
  { name: "Teh Tarik", price: "16.000", stock: 37, tone: "#A86B3C", icon: Milk },
  { name: "Air Mineral", price: "6.000", stock: 96, tone: "#3B8FC4", icon: GlassWater },
];

const CART = [
  { name: "Es Kopi Susu", qty: 2, price: "44.000" },
  { name: "Croissant", qty: 1, price: "18.000" },
  { name: "Matcha Latte", qty: 1, price: "27.000" },
];

function ProductIcon({ icon: Icon }: { icon: LucideIcon }) {
  return <Icon className="size-9" strokeWidth={1.6} />;
}

/** Rendered at 1280×800 — a cashier screen on a tablet or laptop. */
export function PosMockup() {
  return (
    <div className="flex h-[800px] w-[1280px] overflow-hidden bg-[#F6F6F4] font-sans text-ink">
      <section className="flex min-w-0 flex-1 flex-col px-7 py-6">
        <header className="flex items-center gap-4">
          <div>
            <p className="text-[12px] text-muted">Kopi Senja · Cabang Dinoyo</p>
            <h1 className="text-[22px] font-semibold tracking-tight">Kasir</h1>
          </div>
          <div className="ml-auto flex w-96 items-center gap-2 rounded-xl bg-white px-4 py-3 text-[13px] text-faint ring-1 ring-black/[0.06]">
            <Search className="size-4" /> Cari menu atau scan barcode
            <ScanBarcode className="ml-auto size-4 text-ink" />
          </div>
        </header>

        <div className="mt-5 flex gap-2">
          {CATEGORIES.map((c, i) => (
            <span
              key={c}
              className={cn(
                "rounded-xl px-4 py-2.5 text-[13px] font-medium",
                i === 0 ? "bg-ink text-white" : "bg-white text-muted ring-1 ring-black/[0.06]",
              )}
            >
              {c}
            </span>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-4 gap-4">
          {PRODUCTS.map((p) => (
            <div
              key={p.name}
              className={cn(
                "rounded-2xl bg-white p-3 ring-1",
                p.name === "Es Kopi Susu" ? "ring-2 ring-orange" : "ring-black/[0.06]",
              )}
            >
              <div className="grid h-20 place-items-center rounded-xl" style={{ background: `${p.tone}1f`, color: p.tone }}>
                <ProductIcon icon={p.icon} />
              </div>
              <p className="mt-2.5 text-[13px] font-medium">{p.name}</p>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-[13px] font-semibold">Rp {p.price}</span>
                <span className={cn("text-[11px]", p.low ? "font-medium text-red-500" : "text-faint")}>
                  {p.low ? `Sisa ${p.stock}` : `Stok ${p.stock}`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <aside className="flex w-[380px] shrink-0 flex-col border-l border-black/[0.06] bg-white px-6 py-6">
        <div className="flex items-center justify-between">
          <p className="text-[16px] font-semibold">Pesanan #0912</p>
          <span className="flex items-center gap-2 text-[12px] text-muted">
            <Avatar name="Rina Amelia" size={26} /> Kasir: Rina
          </span>
        </div>
        <div className="mt-3 flex gap-2 text-[12px]">
          <span className="rounded-lg bg-ink px-3 py-1.5 font-medium text-white">Makan di sini</span>
          <span className="rounded-lg bg-paper-3 px-3 py-1.5 text-muted">Bawa pulang</span>
          <span className="rounded-lg bg-paper-3 px-3 py-1.5 text-muted">Meja 7</span>
        </div>

        <div className="mt-5 space-y-3">
          {CART.map((c) => (
            <div key={c.name} className="flex items-center gap-3 rounded-xl bg-paper-2 p-3">
              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-medium">{c.name}</p>
                <p className="text-[12px] text-muted">Rp {c.price}</p>
              </div>
              <span className="flex items-center gap-2.5">
                <span className="grid size-7 place-items-center rounded-lg bg-white ring-1 ring-black/[0.08]">
                  <Minus className="size-3.5" />
                </span>
                <span className="w-3 text-center text-[13px] font-semibold">{c.qty}</span>
                <span className="grid size-7 place-items-center rounded-lg bg-ink text-white">
                  <Plus className="size-3.5" />
                </span>
              </span>
              <Trash2 className="size-4 text-faint" />
            </div>
          ))}
        </div>

        <div className="mt-auto space-y-2.5 border-t border-dashed border-black/10 pt-5 text-[13px]">
          <div className="flex justify-between text-muted">
            <span>Subtotal</span>
            <span>Rp 89.000</span>
          </div>
          <div className="flex justify-between text-muted">
            <span>Diskon member</span>
            <span className="text-emerald-600">− Rp 8.900</span>
          </div>
          <div className="flex justify-between text-muted">
            <span>Pajak (10%)</span>
            <span>Rp 8.010</span>
          </div>
          <div className="flex justify-between pt-2 text-[18px] font-semibold">
            <span>Total</span>
            <span>Rp 88.110</span>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2 text-[12px]">
          {[
            [Banknote, "Tunai", false],
            [QrCode, "QRIS", true],
            [CreditCard, "Kartu", false],
          ].map(([Icon, label, active]) => {
            const I = Icon as typeof Banknote;
            return (
              <span
                key={label as string}
                className={cn(
                  "flex flex-col items-center gap-1.5 rounded-xl py-3 font-medium",
                  active ? "bg-orange/10 text-orange ring-2 ring-orange" : "bg-paper-3 text-muted",
                )}
              >
                <I className="size-5" />
                {label as string}
              </span>
            );
          })}
        </div>
        <span className="mt-4 rounded-xl bg-ink py-4 text-center text-[14px] font-semibold text-white">
          Bayar Rp 88.110
        </span>
      </aside>
    </div>
  );
}
