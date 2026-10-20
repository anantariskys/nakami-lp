"use client";

import { useId, useMemo, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { ChevronDown, Minus, Plus } from "lucide-react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { cn } from "@/lib/cn";

// Two-series palette for the dark panel, validated with the dataviz checks
// (lightness band, chroma, CVD separation, contrast) against #17181c.
const COLOR_OWN = "#ea580c";
const COLOR_SUB = "#4f8df7";

const MONTHS = 36;
const W = 640;
const H = 320;
const PAD = { top: 20, right: 12, bottom: 30, left: 52 };

interface Inputs {
  subscription: number; // per branch / device, per month
  branches: number;
  build: number; // one-off
  upkeep: number; // per month
}

const DEFAULTS: Inputs = { subscription: 300_000, branches: 3, build: 15_000_000, upkeep: 300_000 };

function rupiah(n: number, short = false): string {
  const prefix = short ? "" : "Rp ";
  if (n >= 1_000_000) return `${prefix}${(n / 1_000_000).toLocaleString("id-ID", { maximumFractionDigits: 1 })} jt`;
  if (n === 0) return `${prefix}0`;
  return `${prefix}${Math.round(n / 1000).toLocaleString("id-ID")} rb`;
}

function series(i: Inputs) {
  const sub: number[] = [];
  const own: number[] = [];
  for (let m = 0; m <= MONTHS; m++) {
    sub.push(i.subscription * i.branches * m);
    own.push(i.build + i.upkeep * m);
  }
  const breakEven = sub.findIndex((v, m) => m > 0 && v >= own[m]);
  return { sub, own, breakEven: breakEven === -1 ? null : breakEven };
}

function niceMax(v: number): number {
  const step = 10_000_000;
  return Math.max(step, Math.ceil(v / step) * step);
}

/**
 * "Subscribe or build?" — one headline number (the break-even month), one
 * primary control (branches), and the remaining assumptions behind a
 * disclosure. The chart morphs instead of jumping when inputs change.
 */
export function CostCalculator() {
  const [inputs, setInputs] = useState<Inputs>(DEFAULTS);
  const [hover, setHover] = useState<number | null>(null);
  const root = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const shownNumber = useRef<number>(0);
  const gradId = useId().replace(/:/g, "");

  const { sub, own, breakEven } = useMemo(() => series(inputs), [inputs]);
  const yMax = niceMax(Math.max(sub[MONTHS], own[MONTHS]));

  const x = (m: number) => PAD.left + (m / MONTHS) * (W - PAD.left - PAD.right);
  const y = (v: number) => PAD.top + (1 - v / yMax) * (H - PAD.top - PAD.bottom);
  const line = (values: number[]) => values.map((v, m) => `${m ? "L" : "M"}${x(m).toFixed(1)} ${y(v).toFixed(1)}`).join(" ");
  const area = (values: number[]) => `${line(values)} L${x(MONTHS).toFixed(1)} ${y(0).toFixed(1)} L${x(0).toFixed(1)} ${y(0).toFixed(1)} Z`;

  const shapes = { subLine: line(sub), ownLine: line(own), subArea: area(sub), ownArea: area(own) };
  // React renders the first shapes only; GSAP owns `d` afterwards so it can morph.
  const [initial] = useState(shapes);
  // Same for the headline number: GSAP counts it to each new value.
  const [initialBreakEven] = useState(breakEven ?? 0);

  useGSAP(
    () => {
      const duration = window.matchMedia(MOTION_OK).matches ? 0.7 : 0;
      const ease = "power3.out";
      gsap.to("[data-shape='sub-line']", { attr: { d: shapes.subLine }, duration, ease, overwrite: true });
      gsap.to("[data-shape='own-line']", { attr: { d: shapes.ownLine }, duration, ease, overwrite: true });
      gsap.to("[data-shape='sub-area']", { attr: { d: shapes.subArea }, duration, ease, overwrite: true });
      gsap.to("[data-shape='own-area']", { attr: { d: shapes.ownArea }, duration, ease, overwrite: true });

      // Count the headline number to its new value.
      if (breakEven !== null && numberRef.current) {
        const counter = { v: shownNumber.current || breakEven };
        gsap.to(counter, {
          v: breakEven,
          duration,
          ease,
          overwrite: true,
          onUpdate: () => {
            if (numberRef.current) numberRef.current.textContent = String(Math.round(counter.v));
          },
        });
        shownNumber.current = breakEven;
      }
    },
    { scope: root, dependencies: [shapes.subLine, shapes.ownLine, breakEven] },
  );

  const set = <K extends keyof Inputs>(key: K, value: number) =>
    setInputs((prev) => ({ ...prev, [key]: Math.min(Math.max(value, LIMITS[key].min), LIMITS[key].max) }));

  const onPointer = (e: PointerEvent<SVGSVGElement>) => {
    const rect = svgRef.current!.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * W;
    const m = Math.round(((px - PAD.left) / (W - PAD.left - PAD.right)) * MONTHS);
    setHover(Math.min(MONTHS, Math.max(0, m)));
  };

  const onKey = (e: KeyboardEvent<SVGSVGElement>) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    setHover((h) => Math.min(MONTHS, Math.max(0, (h ?? breakEven ?? 12) + (e.key === "ArrowRight" ? 1 : -1))));
  };

  const yTicks = [0, 0.5, 1].map((t) => t * yMax);
  const years = [12, 24, 36].map((m, i) => ({
    label: `Tahun ${i + 1}`,
    sub: sub[m],
    own: own[m],
    cheaper: own[m] < sub[m] ? ("own" as const) : ("sub" as const),
    gap: Math.abs(sub[m] - own[m]),
  }));

  return (
    <div ref={root} className="grain relative isolate overflow-hidden rounded-[2rem] bg-night-2 text-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 -z-10 size-[36rem] bg-[radial-gradient(closest-side,rgba(234,88,12,0.22),transparent)]"
      />

      <div className="grid lg:grid-cols-[minmax(0,25rem)_1fr]">
        {/* Headline + controls */}
        <div className="flex flex-col border-b border-white/10 p-7 md:p-10 lg:border-b-0 lg:border-r">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/55">Simulasi biaya 3 tahun</p>

          <div className="mt-8" aria-live="polite">
            {breakEven !== null ? (
              <>
                <p className="text-sm text-white/60">Titik impas</p>
                <p className="mt-1 flex items-baseline gap-3 font-display font-semibold tracking-[-0.05em]">
                  <span ref={numberRef} className="text-[clamp(4.5rem,9vw,6.5rem)] leading-none tabular-nums">
                    {initialBreakEven}
                  </span>
                  <span className="text-2xl tracking-tight text-white/70">bulan</span>
                </p>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
                  Setelah bulan ke-{breakEven}, membangun aplikasi sendiri lebih ekonomis dibanding berlangganan.
                </p>
              </>
            ) : (
              <>
                <p className="text-sm text-white/60">Titik impas</p>
                <p className="mt-1 font-display text-[clamp(3rem,6vw,4.5rem)] font-semibold leading-none tracking-[-0.05em]">
                  &gt; 36 <span className="text-2xl tracking-tight text-white/70">bulan</span>
                </p>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
                  Pada skala ini, berlangganan lebih ekonomis. Aplikasi sendiri tetap layak bila proses Anda tidak
                  terakomodasi aplikasi jadi.
                </p>
              </>
            )}
          </div>

          <div className="mt-10 space-y-7">
            <Stepper
              label="Jumlah cabang atau perangkat"
              value={inputs.branches}
              onChange={(v) => set("branches", v)}
              {...LIMITS.branches}
            />
            <Range
              label="Biaya langganan aplikasi jadi"
              hint="per bulan, per cabang"
              value={inputs.subscription}
              onChange={(v) => set("subscription", v)}
              {...LIMITS.subscription}
            />
          </div>

          <details className="group mt-7 border-t border-white/10 pt-5">
            <summary className="flex cursor-pointer list-none items-center justify-between text-sm text-white/70 transition-colors hover:text-paper [&::-webkit-details-marker]:hidden">
              <span>
                Asumsi aplikasi sendiri
                <span className="ml-2 hidden text-white/45 sm:inline">
                  {rupiah(inputs.build)} · {rupiah(inputs.upkeep)}/bln
                </span>
              </span>
              <ChevronDown className="size-4 transition-transform duration-300 group-open:rotate-180" aria-hidden />
            </summary>
            <div className="mt-6 space-y-7">
              <Range
                label="Biaya pengembangan"
                hint="sekali bayar"
                value={inputs.build}
                onChange={(v) => set("build", v)}
                {...LIMITS.build}
              />
              <Range
                label="Biaya pemeliharaan"
                hint="per bulan"
                value={inputs.upkeep}
                onChange={(v) => set("upkeep", v)}
                {...LIMITS.upkeep}
              />
              <button
                type="button"
                onClick={() => setInputs(DEFAULTS)}
                className="text-xs text-white/55 underline decoration-white/25 underline-offset-4 hover:text-paper"
              >
                Kembalikan ke nilai awal
              </button>
            </div>
          </details>
        </div>

        {/* Chart */}
        <figure className="flex flex-col p-7 md:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <figcaption className="text-sm text-white/70">Total biaya kumulatif</figcaption>
            <ul className="flex flex-wrap gap-4 text-xs text-white/70" aria-label="Keterangan grafik">
              <li className="flex items-center gap-2">
                <span className="h-0.5 w-4 rounded-full" style={{ background: COLOR_SUB }} aria-hidden />
                Berlangganan
              </li>
              <li className="flex items-center gap-2">
                <span className="h-0.5 w-4 rounded-full" style={{ background: COLOR_OWN }} aria-hidden />
                Membangun sendiri
              </li>
            </ul>
          </div>

          <div className="relative mt-6">
            <svg
              ref={svgRef}
              viewBox={`0 0 ${W} ${H}`}
              className="h-auto w-full touch-pan-y overflow-visible rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-orange"
              role="img"
              aria-label={`Grafik biaya kumulatif selama 36 bulan. Berlangganan ${rupiah(sub[MONTHS])}, membangun sendiri ${rupiah(own[MONTHS])}. Gunakan tombol panah kiri dan kanan untuk melihat nilai per bulan.`}
              tabIndex={0}
              onPointerMove={onPointer}
              onPointerLeave={() => setHover(null)}
              onKeyDown={onKey}
              onBlur={() => setHover(null)}
            >
              <defs>
                <linearGradient id={`${gradId}-own`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor={COLOR_OWN} stopOpacity="0.28" />
                  <stop offset="1" stopColor={COLOR_OWN} stopOpacity="0" />
                </linearGradient>
                <linearGradient id={`${gradId}-sub`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor={COLOR_SUB} stopOpacity="0.18" />
                  <stop offset="1" stopColor={COLOR_SUB} stopOpacity="0" />
                </linearGradient>
              </defs>

              {yTicks.map((t) => (
                <g key={t}>
                  <line
                    x1={PAD.left}
                    x2={W - PAD.right}
                    y1={y(t)}
                    y2={y(t)}
                    stroke="white"
                    strokeOpacity={t ? 0.08 : 0.2}
                    strokeDasharray={t ? "2 5" : undefined}
                  />
                  <text x={PAD.left - 10} y={y(t)} dy="0.32em" textAnchor="end" fill="white" fillOpacity="0.5" className="text-[11px] max-sm:text-[22px]">
                    {rupiah(t, true)}
                  </text>
                </g>
              ))}
              {[0, 12, 24, 36].map((m) => (
                <text key={m} x={x(m)} y={H - 6} textAnchor="middle" fill="white" fillOpacity="0.5" className="text-[11px] max-sm:text-[22px]">
                  {m === 0 ? "Mulai" : `Bulan ${m}`}
                </text>
              ))}

              <path data-shape="sub-area" d={initial.subArea} fill={`url(#${gradId}-sub)`} />
              <path data-shape="own-area" d={initial.ownArea} fill={`url(#${gradId}-own)`} />
              <path data-shape="sub-line" d={initial.subLine} fill="none" stroke={COLOR_SUB} strokeWidth="2.5" strokeLinecap="round" />
              <path data-shape="own-line" d={initial.ownLine} fill="none" stroke={COLOR_OWN} strokeWidth="2.5" strokeLinecap="round" />

              {breakEven !== null && (
                <g>
                  <line
                    x1={x(breakEven)}
                    x2={x(breakEven)}
                    y1={y(own[breakEven]) + 10}
                    y2={y(0)}
                    stroke="white"
                    strokeOpacity="0.3"
                    strokeDasharray="3 4"
                  />
                  <circle cx={x(breakEven)} cy={y(own[breakEven])} r="11" fill={COLOR_OWN} fillOpacity="0.2" />
                  <circle cx={x(breakEven)} cy={y(own[breakEven])} r="5" fill="#fff" stroke={COLOR_OWN} strokeWidth="2.5" />
                  <g className="max-sm:hidden" transform={`translate(${Math.min(x(breakEven), W - 120)} ${Math.max(y(own[breakEven]) - 44, 4)})`}>
                    <rect x="-48" y="0" width="96" height="24" rx="12" fill="white" />
                    <text x="0" y="16" textAnchor="middle" fill="#0a0a0a" className="text-[11px] font-semibold">
                      Titik impas
                    </text>
                  </g>
                </g>
              )}

              {hover !== null && (
                <g pointerEvents="none">
                  <line x1={x(hover)} x2={x(hover)} y1={PAD.top} y2={y(0)} stroke="white" strokeOpacity="0.45" />
                  <circle cx={x(hover)} cy={y(sub[hover])} r="4.5" fill={COLOR_SUB} stroke="#17181c" strokeWidth="2" />
                  <circle cx={x(hover)} cy={y(own[hover])} r="4.5" fill={COLOR_OWN} stroke="#17181c" strokeWidth="2" />
                </g>
              )}
            </svg>

            {hover !== null && (
              <div
                className="pointer-events-none absolute top-0 z-10 w-60 rounded-xl bg-paper p-3 text-ink shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)]"
                style={{
                  left: `${(x(hover) / W) * 100}%`,
                  transform: `translateX(${hover > MONTHS / 2 ? "calc(-100% - 14px)" : "14px"})`,
                }}
              >
                <p className="text-[11px] text-muted">Bulan ke-{hover}</p>
                <TooltipRow color={COLOR_SUB} value={rupiah(sub[hover])} label="Berlangganan" />
                <TooltipRow color={COLOR_OWN} value={rupiah(own[hover])} label="Membangun sendiri" />
              </div>
            )}
          </div>

          {/* Year-by-year summary doubles as the chart's table view. */}
          <dl className="mt-8 grid gap-3 sm:grid-cols-3">
            {years.map((yr) => (
              <div key={yr.label} className="rounded-2xl bg-white/[0.04] p-4 ring-1 ring-white/[0.08]">
                <dt className="flex items-center justify-between text-xs text-white/55">
                  {yr.label}
                  <span
                    className="rounded-full px-2 py-0.5 text-[10px] font-medium"
                    style={{
                      background: `${yr.cheaper === "own" ? COLOR_OWN : COLOR_SUB}26`,
                      color: "#fff",
                    }}
                  >
                    {yr.cheaper === "own" ? "Sendiri lebih hemat" : "Langganan lebih hemat"}
                  </span>
                </dt>
                <dd className="mt-3 space-y-1.5 text-sm">
                  <span className="flex items-center justify-between gap-2">
                    <span className="flex items-center gap-2 text-white/60">
                      <span className="h-0.5 w-3 rounded-full" style={{ background: COLOR_SUB }} aria-hidden />
                      Berlangganan
                    </span>
                    <span className="font-medium tabular-nums">{rupiah(yr.sub)}</span>
                  </span>
                  <span className="flex items-center justify-between gap-2">
                    <span className="flex items-center gap-2 text-white/60">
                      <span className="h-0.5 w-3 rounded-full" style={{ background: COLOR_OWN }} aria-hidden />
                      Sendiri
                    </span>
                    <span className="font-medium tabular-nums">{rupiah(yr.own)}</span>
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 text-xs leading-relaxed text-white/45">
            Angka bersifat ilustratif sebagai bahan pertimbangan, belum termasuk faktor nonfinansial seperti kepemilikan
            data dan kesesuaian fitur.
          </p>
        </figure>
      </div>
    </div>
  );
}

const LIMITS = {
  subscription: { min: 100_000, max: 1_000_000, step: 50_000 },
  branches: { min: 1, max: 10, step: 1 },
  build: { min: 3_000_000, max: 50_000_000, step: 500_000 },
  upkeep: { min: 0, max: 2_000_000, step: 50_000 },
} as const;

function TooltipRow({ color, value, label }: { color: string; value: string; label: string }) {
  return (
    <p className="mt-1.5 flex items-center gap-2 text-sm">
      <span className="h-0.5 w-3 rounded-full" style={{ background: color }} aria-hidden />
      <span className="whitespace-nowrap font-semibold">{value}</span>
      <span className="whitespace-nowrap text-xs text-muted">{label}</span>
    </p>
  );
}

interface ControlProps {
  label: string;
  hint?: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}

function Stepper({ label, value, min, max, step, onChange }: ControlProps) {
  const id = useId();
  const button =
    "grid size-11 place-items-center rounded-full bg-white/[0.06] text-paper ring-1 ring-white/10 transition-colors hover:bg-white/[0.12] disabled:opacity-30 disabled:hover:bg-white/[0.06]";
  return (
    <div role="group" aria-labelledby={id}>
      <p id={id} className="text-sm text-white/70">
        {label}
      </p>
      <div className="mt-3 flex items-center gap-4">
        <button type="button" className={button} onClick={() => onChange(value - step)} disabled={value <= min} aria-label="Kurangi">
          <Minus className="size-4" aria-hidden />
        </button>
        <output aria-live="polite" className="w-10 text-center font-display text-3xl font-semibold tabular-nums">
          {value}
        </output>
        <button type="button" className={button} onClick={() => onChange(value + step)} disabled={value >= max} aria-label="Tambah">
          <Plus className="size-4" aria-hidden />
        </button>
      </div>
    </div>
  );
}

function Range({ label, hint, value, min, max, step, onChange }: ControlProps) {
  const id = useId();
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-sm text-white/70">
          {label}
          {hint && <span className="mt-0.5 block text-xs text-white/45">{hint}</span>}
        </label>
        <output htmlFor={id} className="shrink-0 text-sm font-semibold tabular-nums">
          {rupiah(value)}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={cn(
          "mt-3 h-1 w-full cursor-pointer appearance-none rounded-full",
          "[&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-paper [&::-webkit-slider-thumb]:shadow-[0_0_0_5px_rgba(234,88,12,0.35)] [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-200 hover:[&::-webkit-slider-thumb]:scale-110",
          "[&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-paper",
        )}
        style={{ background: `linear-gradient(to right, ${COLOR_OWN} ${pct}%, rgba(255,255,255,0.12) ${pct}%)` }}
      />
    </div>
  );
}
