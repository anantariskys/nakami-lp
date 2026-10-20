import { Coffee, Croissant, CupSoda, Heart, Home, MapPin, Plus, Receipt, Search, ShoppingBag, User } from "lucide-react";
import { cn } from "@/lib/cn";

const CATEGORIES = ["Semua", "Kopi", "Non-kopi", "Makanan", "Camilan"];

const MENU = [
  { name: "Es Kopi Susu Senja", price: "22.000", tone: "#A0703F", icon: CupSoda, tag: "Terlaris" },
  { name: "Kopi Aren Latte", price: "25.000", tone: "#8B5E3C", icon: Coffee },
  { name: "Matcha Latte", price: "27.000", tone: "#6E9A47", icon: CupSoda },
  { name: "Croissant Mentega", price: "18.000", tone: "#C98A2E", icon: Croissant },
];

/** Rendered at 390×844 — a phone screen. */
export function MobileAppMockup() {
  return (
    <div className="relative h-[844px] w-[390px] overflow-hidden bg-[#FBF8F4] font-sans text-ink">
      <div className="flex items-center justify-between px-6 pt-4 text-[13px] font-semibold">
        <span>09.41</span>
        <span className="flex items-center gap-1">
          <span className="h-2.5 w-4 rounded-sm border border-ink" />
        </span>
      </div>

      <div className="px-6 pt-6">
        <p className="flex items-center gap-1.5 text-[12px] text-muted">
          <MapPin className="size-3.5 text-orange" /> Diantar ke · Jl. Soekarno Hatta 12
        </p>
        <h1 className="mt-2 text-[24px] font-semibold leading-tight tracking-tight">Halo Rina, mau ngopi apa hari ini?</h1>
        <div className="mt-5 flex items-center gap-2 rounded-2xl bg-white px-4 py-3.5 text-[13px] text-faint shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          <Search className="size-4" /> Cari menu favoritmu
        </div>
      </div>

      <div className="mx-6 mt-5 overflow-hidden rounded-3xl p-5 text-white" style={{ background: "linear-gradient(120deg,#E73F1E,#FB6C00 60%,#F9B637)" }}>
        <p className="text-[11px] font-medium uppercase tracking-wider opacity-80">Promo minggu ini</p>
        <p className="mt-1 text-[20px] font-semibold leading-snug">Beli 2 gratis 1<br />untuk semua kopi susu</p>
        <span className="mt-3 inline-block rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-orange">Pakai promo</span>
      </div>

      <div className="mt-5 flex gap-2 overflow-hidden px-6">
        {CATEGORIES.map((c, i) => (
          <span
            key={c}
            className={cn(
              "shrink-0 rounded-full px-4 py-2 text-[12px] font-medium",
              i === 1 ? "bg-ink text-white" : "bg-white text-muted",
            )}
          >
            {c}
          </span>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 px-6">
        {MENU.map((m) => (
          <div key={m.name} className="rounded-3xl bg-white p-3 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
            <div className="relative grid h-24 place-items-center rounded-2xl" style={{ background: `${m.tone}1f`, color: m.tone }}>
              <m.icon className="size-10" strokeWidth={1.6} />
              <Heart className="absolute right-2.5 top-2.5 size-4 text-faint" />
              {m.tag && (
                <span className="absolute left-2.5 top-2.5 rounded-full bg-white px-2 py-0.5 text-[9px] font-semibold text-orange">{m.tag}</span>
              )}
            </div>
            <p className="mt-2.5 text-[13px] font-medium leading-tight">{m.name}</p>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-[13px] font-semibold">Rp {m.price}</span>
              <span className="grid size-7 place-items-center rounded-full bg-orange text-white">
                <Plus className="size-4" />
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-x-4 bottom-24 flex items-center justify-between rounded-2xl bg-ink px-5 py-3.5 text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)]">
        <span className="flex items-center gap-3">
          <ShoppingBag className="size-5 text-amber" />
          <span>
            <span className="block text-[11px] opacity-60">3 item</span>
            <span className="block text-[14px] font-semibold">Rp 69.000</span>
          </span>
        </span>
        <span className="rounded-xl bg-orange px-4 py-2 text-[13px] font-semibold">Pesan sekarang</span>
      </div>

      <nav className="absolute inset-x-0 bottom-0 flex justify-around border-t border-black/[0.05] bg-white pb-7 pt-3 text-[10px] text-faint">
        {[
          [Home, "Beranda", true],
          [Receipt, "Pesanan", false],
          [Heart, "Favorit", false],
          [User, "Akun", false],
        ].map(([Icon, label, active]) => {
          const I = Icon as typeof Home;
          return (
            <span key={label as string} className={cn("flex flex-col items-center gap-1", active ? "text-orange" : undefined)}>
              <I className="size-5" />
              {label as string}
            </span>
          );
        })}
      </nav>
    </div>
  );
}
