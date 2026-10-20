import { Bell, Boxes, CalendarCheck, ChartNoAxesColumn, CircleCheck, LayoutGrid, ReceiptText, Users } from "lucide-react";
import { cn } from "@/lib/cn";

const SIDEBAR = [
  { icon: LayoutGrid, label: "Ringkasan", active: true },
  { icon: ReceiptText, label: "Pesanan" },
  { icon: Boxes, label: "Inventori" },
  { icon: Users, label: "Pelanggan" },
  { icon: ChartNoAxesColumn, label: "Laporan" },
];

const KPIS = [
  { label: "Penjualan hari ini", value: "12,4", unit: "jt", delta: "+18%" },
  { label: "Pesanan", value: "248", unit: "", delta: "+32" },
  { label: "Stok hampir habis", value: "6", unit: "barang", delta: "3 cabang" },
];

const ORDERS = [
  { id: "#1042", outlet: "Cabang Dinoyo", total: "Rp 186.000", status: "Lunas" },
  { id: "#1041", outlet: "Cabang Sudirman", total: "Rp 92.500", status: "Diproses" },
  { id: "#1040", outlet: "Online", total: "Rp 1.240.000", status: "Lunas" },
];

const CHART_LINE =
  "M0 92 C 40 86, 60 70, 96 72 S 160 40, 200 48 S 260 70, 300 52 S 370 18, 420 26 S 500 10, 560 6";

/**
 * Illustrative product UI built in HTML/SVG (crisp at any size, no image
 * weight). Parts tagged with `data-hv` are choreographed by Hero.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-5xl">
      {/* App window */}
      <div
        data-hv="window"
        className="relative overflow-hidden rounded-2xl bg-night-2 shadow-[0_40px_120px_-30px_rgba(251,108,0,0.35),0_0_0_1px_rgba(255,255,255,0.08)] md:rounded-[1.4rem]"
      >
        <div className="flex h-9 items-center gap-2 border-b border-white/5 px-4 md:h-11">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="mx-auto rounded-md bg-white/5 px-3 py-1 font-mono text-[10px] text-white/40 md:text-[11px]">
            app.bisnisanda.id/ringkasan
          </span>
        </div>

        <div className="grid grid-cols-[auto_1fr]">
          <aside className="hidden w-44 flex-col gap-1 border-r border-white/5 p-3 sm:flex">
            {SIDEBAR.map(({ icon: Icon, label, active }) => (
              <span
                key={label}
                className={cn(
                  "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs",
                  active ? "bg-white/8 text-paper" : "text-white/40",
                )}
              >
                <Icon className={cn("size-3.5", active && "text-orange")} />
                {label}
              </span>
            ))}
          </aside>

          <div className="min-w-0 space-y-3 p-3 md:space-y-4 md:p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-paper">Ringkasan</p>
              <span className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] text-white/50">Hari ini</span>
            </div>

            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {KPIS.map((kpi) => (
                <div key={kpi.label} data-hv="kpi" className="rounded-xl bg-white/[0.04] p-2.5 ring-1 ring-white/5 md:p-3.5">
                  <p className="truncate text-[10px] text-white/45 md:text-[11px]">{kpi.label}</p>
                  <p className="mt-1 font-display text-lg font-semibold tracking-tight text-paper md:text-2xl">
                    {kpi.value}
                    {kpi.unit && <span className="ml-1 text-xs font-normal text-white/40">{kpi.unit}</span>}
                  </p>
                  <p className="mt-0.5 text-[10px] text-success">{kpi.delta}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-white/[0.03] p-3 ring-1 ring-white/5 md:p-4">
              <div className="mb-2 flex items-center justify-between text-[10px] text-white/45 md:text-[11px]">
                <span>Penjualan 7 hari</span>
                <span className="flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-orange" /> Semua cabang
                </span>
              </div>
              <svg viewBox="0 0 560 100" className="h-20 w-full md:h-28" preserveAspectRatio="none" aria-hidden>
                <defs>
                  <linearGradient id="hv-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#FB6C00" stopOpacity="0.35" />
                    <stop offset="1" stopColor="#FB6C00" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="hv-line" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#E73F1E" />
                    <stop offset="1" stopColor="#F9B637" />
                  </linearGradient>
                </defs>
                {[25, 50, 75].map((y) => (
                  <line key={y} x1="0" x2="560" y1={y} y2={y} stroke="white" strokeOpacity="0.05" />
                ))}
                <path data-hv="area" d={`${CHART_LINE} L560 100 L0 100 Z`} fill="url(#hv-area)" />
                <path
                  data-hv="line"
                  d={CHART_LINE}
                  fill="none"
                  stroke="url(#hv-line)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>

            <div className="hidden divide-y divide-white/5 rounded-xl ring-1 ring-white/5 md:block">
              {ORDERS.map((o) => (
                <div key={o.id} data-hv="row" className="grid grid-cols-[4rem_1fr_auto_5rem] items-center gap-3 px-4 py-2.5 text-[11px]">
                  <span className="font-mono text-white/40">{o.id}</span>
                  <span className="text-white/70">{o.outlet}</span>
                  <span className="text-paper">{o.total}</span>
                  <span
                    className={cn(
                      "justify-self-end rounded-full px-2 py-0.5 text-[10px]",
                      o.status === "Lunas" ? "bg-success/15 text-success" : "bg-amber/15 text-amber",
                    )}
                  >
                    {o.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating: new order notification */}
      <div data-hv="float" data-depth="1.4" className="absolute -left-4 top-[18%] hidden md:block lg:-left-16">
        <div className="flex w-64 items-start gap-3 rounded-2xl bg-paper p-3.5 text-ink shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)]">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-orange/10 text-orange">
            <Bell className="size-4" />
          </span>
          <div className="min-w-0">
            <p className="text-xs font-semibold">Pesanan baru #1043</p>
            <p className="mt-0.5 text-[11px] text-muted">Cabang Dinoyo · Rp 214.000</p>
          </div>
          <span className="ml-auto text-[10px] text-faint">baru</span>
        </div>
      </div>

      {/* Floating: stock sync */}
      <div data-hv="float" data-depth="0.8" className="absolute -bottom-6 left-[8%] md:-bottom-8">
        <div className="w-56 rounded-2xl bg-night-3 p-3.5 text-paper shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/10 md:w-64">
          <div className="flex items-center gap-2 text-xs">
            <CircleCheck className="size-4 text-success" />
            <span className="font-medium">Stok semua cabang cocok</span>
            <span className="ml-auto font-mono text-[10px] text-white/40">3 cabang</span>
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div data-hv="sync" className="h-full w-full origin-left rounded-full bg-sunset" />
          </div>
        </div>
      </div>

      {/* Floating: phone booking */}
      <div data-hv="float" data-depth="2" className="absolute -right-3 top-[30%] hidden sm:block lg:-right-14">
        <div className="w-40 rounded-[1.6rem] bg-ink p-1.5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] ring-1 ring-white/10 md:w-48">
          <div className="rounded-[1.25rem] bg-paper p-3 text-ink">
            <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-line" />
            <p className="flex items-center gap-1.5 text-[11px] font-semibold">
              <CalendarCheck className="size-3.5 text-orange" /> Pilih jadwal
            </p>
            <p className="text-[10px] text-muted">Sabtu, 24 Okt</p>
            <div className="mt-2.5 grid grid-cols-3 gap-1.5">
              {["09:00", "10:30", "13:00", "14:30", "16:00", "19:00"].map((t, i) => (
                <span
                  key={t}
                  className={cn(
                    "rounded-md py-1.5 text-center text-[10px]",
                    i === 2 ? "bg-orange font-semibold text-paper" : i === 4 ? "bg-paper-3 text-faint line-through" : "bg-paper-3",
                  )}
                >
                  {t}
                </span>
              ))}
            </div>
            <span className="mt-3 block rounded-lg bg-ink py-2 text-center text-[10px] font-medium text-paper">
              Konfirmasi & bayar DP
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
