import type { ServiceVisual } from "@/lib/content";
import { cn } from "@/lib/cn";

/** Small illustrative UI per service. Pure markup; animated by the parent. */
export function ServicePreview({ visual }: { visual: ServiceVisual }) {
  switch (visual) {
    case "web":
      return (
        <Frame>
          <div className="flex items-center gap-1.5 border-b border-white/5 px-3 py-2">
            {[0, 1, 2].map((i) => (
              <span key={i} className="size-2 rounded-full bg-white/15" />
            ))}
          </div>
          <div className="grid grid-cols-[3.5rem_1fr] gap-3 p-4">
            <div className="space-y-2">
              {[0, 1, 2, 3].map((i) => (
                <span key={i} className={cn("block h-2 rounded", i === 0 ? "bg-orange" : "bg-white/10")} />
              ))}
            </div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-2">
                {[0, 1, 2].map((i) => (
                  <span key={i} className="h-10 rounded-lg bg-white/[0.06]" />
                ))}
              </div>
              <div className="flex h-24 items-end gap-1.5 rounded-lg bg-white/[0.04] p-3">
                {[40, 65, 50, 80, 58, 92, 74].map((h, i) => (
                  <span key={i} data-bar className="flex-1 rounded-sm bg-sunset" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        </Frame>
      );
    case "mobile":
      return (
        <div className="flex items-end justify-center gap-4">
          {[0, 1].map((p) => (
            <div
              key={p}
              className={cn(
                "w-36 rounded-[1.6rem] bg-ink p-1.5 ring-1 ring-white/10",
                p === 1 && "mb-8 hidden sm:block",
              )}
            >
              <div className="space-y-2 rounded-[1.3rem] bg-night-3 p-3">
                <span className="mx-auto block h-1 w-8 rounded-full bg-white/20" />
                <span className={cn("block h-16 rounded-xl", p === 0 ? "bg-sunset" : "bg-white/10")} />
                {[0, 1, 2].map((i) => (
                  <span key={i} className="flex items-center gap-2">
                    <span className="size-6 rounded-lg bg-white/10" />
                    <span className="h-1.5 flex-1 rounded bg-white/10" />
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    case "pos":
      return (
        <Frame className="grid grid-cols-[1fr_8rem] gap-3 p-4">
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className={cn("aspect-square rounded-lg", i === 4 ? "bg-orange/80" : "bg-white/[0.06]")} />
            ))}
          </div>
          <div className="flex flex-col rounded-lg bg-paper p-3 text-ink">
            <span className="text-[10px] font-semibold">Struk #0912</span>
            {["Kopi susu", "Croissant", "Air mineral"].map((item) => (
              <span key={item} className="mt-1.5 flex justify-between text-[9px] text-muted">
                {item} <span>×1</span>
              </span>
            ))}
            <span className="mt-auto border-t border-dashed border-line pt-2 text-[10px] font-semibold">
              Rp 64.000
            </span>
          </div>
        </Frame>
      );
    case "booking":
      return (
        <Frame className="p-4">
          <div className="mb-3 flex justify-between text-[10px] text-white/50">
            <span>Oktober 2026</span>
            <span>6 slot tersisa</span>
          </div>
          <div className="grid grid-cols-7 gap-1.5">
            {Array.from({ length: 28 }).map((_, i) => (
              <span
                key={i}
                className={cn(
                  "grid aspect-square place-items-center rounded-md text-[9px]",
                  [9, 10, 17].includes(i)
                    ? "bg-orange text-paper"
                    : [3, 12, 22].includes(i)
                      ? "bg-white/[0.03] text-white/20 line-through"
                      : "bg-white/[0.06] text-white/50",
                )}
              >
                {i + 1}
              </span>
            ))}
          </div>
        </Frame>
      );
    case "erp":
      return (
        <Frame className="grid grid-cols-3 gap-2 p-4">
          {["Diajukan", "Ditinjau", "Disetujui"].map((col, c) => (
            <div key={col} className="space-y-2 rounded-lg bg-white/[0.03] p-2">
              <span className="block text-[9px] uppercase tracking-wider text-white/40">{col}</span>
              {Array.from({ length: 3 - c }).map((_, i) => (
                <span key={i} className="block space-y-1.5 rounded-md bg-white/[0.07] p-2">
                  <span className="block h-1.5 w-3/4 rounded bg-white/25" />
                  <span className={cn("block h-1.5 w-1/2 rounded", c === 2 ? "bg-success/70" : "bg-white/10")} />
                </span>
              ))}
            </div>
          ))}
        </Frame>
      );
    case "integration":
      return (
        <Frame className="relative h-56">
          <svg viewBox="0 0 320 220" className="absolute inset-0 size-full" aria-hidden>
            {[
              [160, 110, 60, 50],
              [160, 110, 260, 50],
              [160, 110, 60, 170],
              [160, 110, 260, 170],
            ].map(([x1, y1, x2, y2], i) => (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#FB6C00"
                strokeOpacity="0.6"
                strokeDasharray="4 6"
                className="animate-[dash_1.2s_linear_infinite]"
              />
            ))}
          </svg>
          {[
            ["left-[10%] top-[14%]", "Payment"],
            ["right-[10%] top-[14%]", "Akuntansi"],
            ["left-[10%] bottom-[14%]", "WhatsApp"],
            ["right-[10%] bottom-[14%]", "Marketplace"],
          ].map(([pos, label]) => (
            <span key={label} className={cn("absolute rounded-lg bg-white/10 px-2.5 py-1.5 text-[10px] text-paper", pos)}>
              {label}
            </span>
          ))}
          <span className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl bg-sunset font-display text-sm font-bold text-paper shadow-[0_0_40px_rgba(251,108,0,0.5)]">
            API
          </span>
        </Frame>
      );
  }
}

function Frame({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("w-full overflow-hidden rounded-2xl bg-night-2 ring-1 ring-white/10", className)}>{children}</div>
  );
}
