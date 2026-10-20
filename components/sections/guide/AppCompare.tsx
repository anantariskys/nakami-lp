"use client";

import { useRef, useState } from "react";
import { Check, Globe, LayoutDashboard, Minus, Smartphone, type LucideIcon } from "lucide-react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { APP_COMPARISON, APP_KINDS, type AppKind } from "@/lib/content";
import { cn } from "@/lib/cn";

const ICONS: Record<AppKind, LucideIcon> = {
  website: Globe,
  webapp: LayoutDashboard,
  mobile: Smartphone,
};

/**
 * Website vs web app vs mobile app. Desktop shows the full table with a
 * hover-highlighted column; small screens switch between kinds with tabs.
 */
export function AppCompare() {
  const root = useRef<HTMLDivElement>(null);
  const [focus, setFocus] = useState<AppKind | null>(null);
  const [tab, setTab] = useState<AppKind>("webapp");

  useGSAP(
    () => {
      if (!window.matchMedia(MOTION_OK).matches) return;
      gsap.fromTo("[data-tab-panel] > *", { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, stagger: 0.04, duration: 0.5 });
    },
    { scope: root, dependencies: [tab] },
  );

  return (
    <div ref={root}>
      {/* Desktop: full comparison table */}
      <div
        role="table"
        aria-label="Perbandingan website, aplikasi web, dan aplikasi mobile"
        className="hidden md:block"
        onMouseLeave={() => setFocus(null)}
      >
        <div role="row" className="grid grid-cols-[minmax(10rem,1fr)_repeat(3,minmax(0,1.25fr))] gap-3">
          <span role="columnheader" className="sr-only">
            Aspek
          </span>
          <p aria-hidden className="self-end pb-2 text-xs leading-relaxed text-faint">
            Arahkan kursor pada kolom untuk menyorotnya.
          </p>
          {APP_KINDS.map((kind) => {
            const Icon = ICONS[kind.id];
            const active = focus === kind.id;
            return (
              <div
                key={kind.id}
                role="columnheader"
                onMouseEnter={() => setFocus(kind.id)}
                className={cn(
                  "rounded-[1.5rem] border p-6 transition-[background-color,border-color,translate] duration-500 ease-out-expo",
                  active ? "-translate-y-1 border-ink bg-ink text-paper" : "border-line bg-paper",
                )}
              >
                <span
                  className={cn(
                    "grid size-11 place-items-center rounded-xl transition-colors duration-500",
                    active ? "bg-orange text-paper" : "bg-orange/10 text-orange-ink",
                  )}
                >
                  <Icon className="size-5" aria-hidden />
                </span>
                <p className="mt-5 font-display text-2xl font-semibold tracking-tight">{kind.name}</p>
                <p className={cn("mt-2 text-sm leading-relaxed", active ? "text-white/70" : "text-muted")}>
                  {kind.analogy}
                </p>
                <p className={cn("mt-4 text-xs", active ? "text-amber" : "text-orange-ink")}>{kind.example}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-3 overflow-hidden rounded-[1.5rem] border border-line bg-paper">
          {APP_COMPARISON.map((row, r) => (
            <div
              key={row.label}
              role="row"
              className={cn(
                "grid grid-cols-[minmax(10rem,1fr)_repeat(3,minmax(0,1.25fr))] gap-3 px-6",
                r > 0 && "border-t border-line",
              )}
            >
              <div role="rowheader" className="py-5">
                <p className="text-sm font-medium">{row.label}</p>
                {row.hint && <p className="mt-0.5 text-xs text-faint">{row.hint}</p>}
              </div>
              {APP_KINDS.map((kind) => (
                <div
                  key={kind.id}
                  role="cell"
                  onMouseEnter={() => setFocus(kind.id)}
                  className={cn(
                    "-my-px flex items-center px-6 py-5 transition-colors duration-300",
                    focus === kind.id && "bg-orange/[0.06]",
                  )}
                >
                  <Value value={row.values[kind.id]} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Small screens: tabs */}
      <div className="md:hidden">
        <div role="tablist" aria-label="Pilih jenis aplikasi" className="grid grid-cols-3 gap-1 rounded-2xl bg-paper-3 p-1">
          {APP_KINDS.map((kind) => (
            <button
              key={kind.id}
              role="tab"
              type="button"
              id={`tab-${kind.id}`}
              aria-selected={tab === kind.id}
              aria-controls="app-kind-panel"
              onClick={() => setTab(kind.id)}
              className={cn(
                "rounded-xl px-2 py-2.5 text-sm transition-all duration-300",
                tab === kind.id ? "bg-paper font-medium text-ink shadow-sm" : "text-muted",
              )}
            >
              {kind.name}
            </button>
          ))}
        </div>

        <div
          id="app-kind-panel"
          role="tabpanel"
          aria-labelledby={`tab-${tab}`}
          data-tab-panel
          className="mt-4 rounded-[1.5rem] border border-line bg-paper p-6"
        >
          {APP_KINDS.filter((k) => k.id === tab).map((kind) => {
            const Icon = ICONS[kind.id];
            return (
              <div key={kind.id}>
                <span className="grid size-11 place-items-center rounded-xl bg-orange/10 text-orange-ink">
                  <Icon className="size-5" aria-hidden />
                </span>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">{kind.analogy}</p>
                <p className="mt-3 text-xs text-orange-ink">{kind.example}</p>
              </div>
            );
          })}
          <dl className="mt-6 divide-y divide-line border-t border-line">
            {APP_COMPARISON.map((row) => (
              <div key={row.label} className="flex items-center justify-between gap-4 py-3.5">
                <dt className="text-sm text-muted">{row.label}</dt>
                <dd className="text-right">
                  <Value value={row.values[tab]} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

function Value({ value }: { value: { text: string; level?: 1 | 2 | 3; ok?: boolean } }) {
  return (
    <span className="inline-flex items-center gap-2.5 text-sm">
      {value.ok !== undefined && (
        <span
          aria-hidden
          className={cn(
            "grid size-5 shrink-0 place-items-center rounded-full",
            value.ok ? "bg-success/15 text-emerald-700" : "bg-paper-3 text-faint",
          )}
        >
          {value.ok ? <Check className="size-3" /> : <Minus className="size-3" />}
        </span>
      )}
      {value.level !== undefined && (
        <span aria-hidden className="flex gap-1">
          {[1, 2, 3].map((n) => (
            <span key={n} className={cn("h-1.5 w-4 rounded-full", n <= value.level! ? "bg-orange" : "bg-paper-3")} />
          ))}
        </span>
      )}
      {value.text}
    </span>
  );
}
