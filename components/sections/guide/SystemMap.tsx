"use client";

import { useRef, useState } from "react";
import {
  ArrowUpRight,
  Boxes,
  Building2,
  CalendarCheck,
  CircleAlert,
  ReceiptText,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { PROBLEMS, SCALE_LABELS, SYSTEMS, type BusinessScale, type SystemId } from "@/lib/content";
import { whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/cn";

const ICONS: Record<SystemId, LucideIcon> = {
  pos: ReceiptText,
  inventory: Boxes,
  booking: CalendarCheck,
  crm: Users,
  erp: Building2,
  integration: Workflow,
};

const SCALES: BusinessScale[] = ["kecil", "menengah", "perusahaan"];

/**
 * "Which system solves my problem?" — pick a system directly, or start from
 * an everyday problem and get pointed at the system that handles it.
 */
export function SystemMap() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<SystemId>("inventory");
  const [problem, setProblem] = useState<string | null>(null);
  const system = SYSTEMS.find((s) => s.id === active)!;
  const Icon = ICONS[active];

  useGSAP(
    () => {
      if (!window.matchMedia(MOTION_OK).matches) return;
      gsap.fromTo(
        "[data-system-detail] [data-anim]",
        { autoAlpha: 0, y: 14 },
        { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.05, overwrite: true },
      );
      gsap.fromTo("[data-system-icon]", { scale: 0.7, rotate: -12 }, { scale: 1, rotate: 0, duration: 0.7, ease: "back.out(2)" });
    },
    { scope: root, dependencies: [active] },
  );

  const pickSystem = (id: SystemId) => {
    setActive(id);
    setProblem(null);
  };

  const pickProblem = (label: string, id: SystemId) => {
    setActive(id);
    setProblem(label);
    // Stacked layout: bring the answer into view so the tap visibly does something.
    if (!window.matchMedia("(min-width: 1024px)").matches) {
      document.getElementById("system-detail")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div ref={root}>
      {/* System tabs */}
      <div
        role="tablist"
        aria-label="Jenis sistem"
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:mx-0 md:flex-wrap md:px-0"
      >
        {SYSTEMS.map((s) => {
          const TabIcon = ICONS[s.id];
          const selected = s.id === active;
          return (
            <button
              key={s.id}
              role="tab"
              type="button"
              id={`system-tab-${s.id}`}
              aria-selected={selected}
              aria-controls="system-detail"
              onClick={() => pickSystem(s.id)}
              className={cn(
                "flex shrink-0 items-center gap-2.5 rounded-full py-2.5 pl-2.5 pr-4 text-sm font-medium transition-all duration-300",
                selected ? "bg-ink text-paper" : "bg-paper text-ink ring-1 ring-inset ring-line hover:ring-ink/40",
              )}
            >
              <span
                className={cn(
                  "grid size-7 place-items-center rounded-full transition-colors duration-300",
                  selected ? "bg-orange text-paper" : "bg-paper-3 text-ink",
                )}
              >
                <TabIcon className="size-3.5" aria-hidden />
              </span>
              {s.short}
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
        {/* Problems → system */}
        <div className="min-w-0 overflow-hidden rounded-[1.75rem] border border-line bg-paper p-6 md:p-7">
          <p className="text-sm font-medium">Mulai dari kendala Anda</p>
          <p className="mt-1 text-xs text-faint">Pilih yang paling sering terjadi di bisnis Anda.</p>
          <ul className="-mx-6 mt-5 flex gap-2 overflow-x-auto px-6 pb-1 [scrollbar-width:none] md:-mx-7 md:px-7 lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0 lg:pb-0">
            {PROBLEMS.map((p) => {
              const selected = problem === p.label;
              const related = p.system === active;
              return (
                <li key={p.label} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => pickProblem(p.label, p.system)}
                    aria-pressed={selected}
                    className={cn(
                      "group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors duration-300",
                      "max-lg:whitespace-nowrap max-lg:rounded-full max-lg:ring-1 max-lg:ring-inset",
                      selected
                        ? "bg-orange/10 text-ink max-lg:ring-orange/40"
                        : related
                          ? "text-ink max-lg:ring-line hover:bg-paper-2"
                          : "text-muted max-lg:ring-line hover:bg-paper-2 hover:text-ink",
                    )}
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "size-1.5 shrink-0 rounded-full transition-colors duration-300",
                        selected || related ? "bg-orange" : "bg-line-strong",
                      )}
                    />
                    <span className="flex-1">{p.label}</span>
                    <ArrowUpRight
                      aria-hidden
                      className="hidden size-3.5 shrink-0 text-faint opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:block"
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Detail */}
        <article
          id="system-detail"
          role="tabpanel"
          aria-labelledby={`system-tab-${active}`}
          aria-live="polite"
          data-system-detail
          className="grain relative isolate overflow-hidden rounded-[1.75rem] bg-night p-7 text-paper md:p-10"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 -z-10 size-[28rem] bg-[radial-gradient(closest-side,rgba(251,108,0,0.25),transparent)]"
          />

          {problem && (
            <p data-anim className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1.5 text-xs text-white/70 ring-1 ring-white/10">
              <CircleAlert className="size-3.5 text-amber" aria-hidden />
              Untuk kendala “{problem}”, sistem yang tepat:
            </p>
          )}

          <div className="flex items-start gap-5">
            <span data-system-icon className="grid size-14 shrink-0 place-items-center rounded-2xl bg-sunset text-paper shadow-[0_12px_30px_-10px_rgba(251,108,0,0.6)]">
              <Icon className="size-6" aria-hidden />
            </span>
            <div data-anim>
              <h4 className="font-display text-[clamp(1.6rem,3vw,2.25rem)] font-semibold leading-tight tracking-tight">
                {system.name}
              </h4>
              <p className="mt-2 max-w-xl leading-relaxed text-white/65">{system.what}</p>
            </div>
          </div>

          <div className="mt-9 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-2">
            <div data-anim>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">Menyelesaikan</p>
              <ul className="mt-4 space-y-3">
                {system.solves.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.95rem] leading-snug">
                    <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-orange" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div data-anim>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">Fitur utama</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {system.features.map((f) => (
                  <li key={f} className="rounded-full bg-white/[0.06] px-3 py-1.5 text-sm text-white/85 ring-1 ring-white/10">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-2">
            <div data-anim>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">Umum digunakan oleh</p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-white/85">{system.fits.join(" · ")}</p>
            </div>
            <div data-anim>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">Skala bisnis</p>
              <ol className="mt-3 grid grid-cols-3 gap-1.5" aria-label="Skala bisnis yang sesuai">
                {SCALES.map((scale) => {
                  const on = system.scale.includes(scale);
                  return (
                    <li key={scale}>
                      <span
                        aria-hidden
                        className={cn("block h-1.5 rounded-full transition-colors duration-500", on ? "bg-sunset" : "bg-white/10")}
                      />
                      <span className={cn("mt-2 block text-xs", on ? "text-white/85" : "text-white/40")}>
                        {SCALE_LABELS[scale]}
                        <span className="sr-only">{on ? ": sesuai" : ": kurang sesuai"}</span>
                      </span>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          <a
            data-anim
            href={whatsappUrl(`Halo Nakami Studio, saya ingin berkonsultasi mengenai ${system.name} untuk bisnis saya.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="group/cta mt-10 inline-flex items-center gap-2 text-sm font-medium text-amber"
          >
            Konsultasikan sistem ini untuk bisnis Anda
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" aria-hidden />
          </a>
        </article>
      </div>
    </div>
  );
}
