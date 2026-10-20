"use client";

import { useId, useMemo, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { cn } from "@/lib/cn";

// Two-series palette, validated with the dataviz checks (contrast, CVD, chroma) on white.
const COLOR_OWN = "#c2410c"; // brand orange, darker step
const COLOR_SUB = "#2563eb";

const MONTHS = 36;
const W = 640;
const H = 300;
const PAD = { top: 16, right: 16, bottom: 32, left: 64 };

interface Inputs {
  subscription: number; // per branch / device, per month
  branches: number;
  build: number; // one-off
  upkeep: number; // per month
}

const DEFAULTS: Inputs = { subscription: 300_000, branches: 3, build: 15_000_000, upkeep: 300_000 };

function rupiah(n: number): string {
  if (n >= 1_000_000) return `Rp ${(n / 1_000_000).toLocaleString("id-ID", { maximumFractionDigits: 1 })} jt`;
  return `Rp ${Math.round(n / 1000).toLocaleString("id-ID")} rb`;
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

export function CostCalculator() {
  const [inputs, setInputs] = useState<Inputs>(DEFAULTS);
  const [hover, setHover] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const root = useRef<HTMLDivElement>(null);
  const titleId = useId();

  const { sub, own, breakEven } = useMemo(() => series(inputs), [inputs]);
  const yMax = niceMax(Math.max(sub[MONTHS], own[MONTHS]));

  const x = (m: number) => PAD.left + (m / MONTHS) * (W - PAD.left - PAD.right);
  const y = (v: number) => PAD.top + (1 - v / yMax) * (H - PAD.top - PAD.bottom);
  const path = (values: number[]) => values.map((v, m) => `${m ? "L" : "M"}${x(m).toFixed(1)} ${y(v).toFixed(1)}`).join(" ");

  const subPath = path(sub);
  const ownPath = path(own);
  // React renders the first shape only; GSAP owns `d` afterwards so it can morph.
  const [initialPaths] = useState(() => ({ sub: subPath, own: ownPath }));

  // Lines morph to their new shape instead of jumping when a slider moves.
  useGSAP(
    () => {
      const reduce = !window.matchMedia(MOTION_OK).matches;
      gsap.to("[data-line='sub']", { attr: { d: subPath }, duration: reduce ? 0 : 0.6, ease: "power3.out", overwrite: true });
      gsap.to("[data-line='own']", { attr: { d: ownPath }, duration: reduce ? 0 : 0.6, ease: "power3.out", overwrite: true });
    },
    { scope: root, dependencies: [subPath, ownPath] },
  );

  const set = (key: keyof Inputs) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputs((prev) => ({ ...prev, [key]: Number(e.target.value) }));

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

  const yTicks = [0, 0.25, 0.5, 0.75, 1].map((t) => t * yMax);
  const savings = own[MONTHS] < sub[MONTHS] ? sub[MONTHS] - own[MONTHS] : 0;

  return (
    <div ref={root} className="grid gap-4 lg:grid-cols-[22rem_1fr]">
      {/* Inputs */}
      <div className="rounded-[1.5rem] border border-line bg-paper p-6 md:p-7">
        <p className="text-sm font-medium">Ubah angkanya sesuai usaha Anda</p>
        <div className="mt-6 space-y-6">
          <Slider
            label="Biaya langganan aplikasi jadi"
            suffix="/ bulan per cabang"
            value={inputs.subscription}
            min={100_000}
            max={1_000_000}
            step={50_000}
            onChange={set("subscription")}
          />
          <Slider
            label="Jumlah cabang atau perangkat"
            value={inputs.branches}
            min={1}
            max={10}
            step={1}
            onChange={set("branches")}
            format={(v) => `${v}`}
          />
          <Slider
            label="Biaya buat aplikasi sendiri"
            suffix="sekali bayar"
            value={inputs.build}
            min={3_000_000}
            max={50_000_000}
            step={500_000}
            onChange={set("build")}
          />
          <Slider
            label="Biaya perawatan aplikasi sendiri"
            suffix="/ bulan"
            value={inputs.upkeep}
            min={0}
            max={2_000_000}
            step={50_000}
            onChange={set("upkeep")}
          />
        </div>
        <button
          type="button"
          onClick={() => setInputs(DEFAULTS)}
          className="mt-6 text-xs text-muted underline decoration-line-strong underline-offset-4 hover:text-ink"
        >
          Kembalikan ke contoh awal
        </button>
      </div>

      {/* Result + chart */}
      <figure className="rounded-[1.5rem] border border-line bg-paper p-6 md:p-7" aria-labelledby={titleId}>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p id={titleId} className="text-sm text-muted">
              Total biaya selama 3 tahun
            </p>
            <p className="mt-1 font-display text-3xl font-semibold tracking-tight md:text-4xl" aria-live="polite">
              {breakEven !== null ? (
                <>
                  Balik modal di <span className="text-orange-ink">bulan ke-{breakEven}</span>
                </>
              ) : (
                <>Dalam 3 tahun, berlangganan masih lebih hemat</>
              )}
            </p>
            <p className="mt-1 text-sm text-muted">
              {breakEven !== null
                ? `Setelah itu, aplikasi sendiri lebih hemat. Selisih di bulan ke-36: ${rupiah(savings)}.`
                : "Dan itu tidak apa-apa. Aplikasi sendiri lebih cocok saat cara kerja Anda tidak terlayani aplikasi jadi."}
            </p>
          </div>
          <ul className="flex gap-4 text-xs text-muted" aria-label="Keterangan grafik">
            <li className="flex items-center gap-2">
              <span className="h-0.5 w-4 rounded-full" style={{ background: COLOR_SUB }} aria-hidden />
              Langganan aplikasi jadi
            </li>
            <li className="flex items-center gap-2">
              <span className="h-0.5 w-4 rounded-full" style={{ background: COLOR_OWN }} aria-hidden />
              Buat aplikasi sendiri
            </li>
          </ul>
        </div>

        <div className="relative mt-6">
          <svg
            ref={svgRef}
            viewBox={`0 0 ${W} ${H}`}
            className="h-auto w-full touch-pan-y overflow-visible outline-none focus-visible:ring-2 focus-visible:ring-orange"
            role="img"
            aria-label={`Grafik biaya kumulatif 36 bulan. Langganan ${rupiah(sub[MONTHS])}, aplikasi sendiri ${rupiah(own[MONTHS])}. Gunakan panah kiri dan kanan untuk melihat per bulan.`}
            tabIndex={0}
            onPointerMove={onPointer}
            onPointerLeave={() => setHover(null)}
            onKeyDown={onKey}
            onBlur={() => setHover(null)}
          >
            {yTicks.map((t) => (
              <g key={t}>
                <line x1={PAD.left} x2={W - PAD.right} y1={y(t)} y2={y(t)} stroke="#e5e5e5" strokeDasharray={t ? "2 4" : undefined} />
                <text x={PAD.left - 10} y={y(t)} dy="0.32em" textAnchor="end" className="fill-faint text-[11px]">
                  {t === 0 ? "0" : rupiah(t).replace("Rp ", "")}
                </text>
              </g>
            ))}
            {[0, 6, 12, 18, 24, 30, 36].map((m) => (
              <text key={m} x={x(m)} y={H - 8} textAnchor="middle" className="fill-faint text-[11px]">
                {m === 0 ? "Bulan 0" : m}
              </text>
            ))}

            {breakEven !== null && (
              <g>
                <line
                  x1={x(breakEven)}
                  x2={x(breakEven)}
                  y1={PAD.top}
                  y2={H - PAD.bottom}
                  stroke="#0a0a0a"
                  strokeOpacity="0.25"
                  strokeDasharray="3 3"
                />
                <text x={x(breakEven) + 6} y={PAD.top + 10} className="fill-ink text-[11px] font-medium">
                  Balik modal
                </text>
              </g>
            )}

            <path data-line="sub" d={initialPaths.sub} fill="none" stroke={COLOR_SUB} strokeWidth="2" strokeLinecap="round" />
            <path data-line="own" d={initialPaths.own} fill="none" stroke={COLOR_OWN} strokeWidth="2" strokeLinecap="round" />

            {breakEven !== null && (
              <circle cx={x(breakEven)} cy={y(own[breakEven])} r="5" fill={COLOR_OWN} stroke="#fff" strokeWidth="2" />
            )}

            {hover !== null && (
              <g pointerEvents="none">
                <line x1={x(hover)} x2={x(hover)} y1={PAD.top} y2={H - PAD.bottom} stroke="#0a0a0a" strokeOpacity="0.4" />
                <circle cx={x(hover)} cy={y(sub[hover])} r="4.5" fill={COLOR_SUB} stroke="#fff" strokeWidth="2" />
                <circle cx={x(hover)} cy={y(own[hover])} r="4.5" fill={COLOR_OWN} stroke="#fff" strokeWidth="2" />
              </g>
            )}
          </svg>

          {hover !== null && (
            <div
              className="pointer-events-none absolute top-2 z-10 w-48 rounded-xl bg-ink p-3 text-paper shadow-lg"
              style={{
                left: `${(x(hover) / W) * 100}%`,
                transform: `translateX(${hover > MONTHS / 2 ? "calc(-100% - 12px)" : "12px"})`,
              }}
            >
              <p className="text-[11px] text-white/60">Bulan ke-{hover}</p>
              <TooltipRow color={COLOR_SUB} value={rupiah(sub[hover])} label="Langganan" />
              <TooltipRow color={COLOR_OWN} value={rupiah(own[hover])} label="Buat sendiri" />
            </div>
          )}
        </div>

        <figcaption className="mt-4 text-xs leading-relaxed text-faint">
          Angka hanya ilustrasi untuk membantu menimbang. Belum termasuk hal yang sulit dihitung, seperti fitur yang
          tidak tersedia di aplikasi jadi atau data yang tersimpan di pihak lain.
        </figcaption>

        <details className="mt-3 text-sm">
          <summary className="cursor-pointer text-xs text-muted underline decoration-line-strong underline-offset-4 hover:text-ink">
            Lihat angkanya dalam tabel
          </summary>
          <table className="mt-3 w-full text-left text-xs">
            <thead className="text-faint">
              <tr>
                <th className="py-1.5 font-normal">Bulan</th>
                <th className="py-1.5 font-normal">Langganan</th>
                <th className="py-1.5 font-normal">Buat sendiri</th>
              </tr>
            </thead>
            <tbody>
              {[6, 12, 18, 24, 30, 36].map((m) => (
                <tr key={m} className="border-t border-line">
                  <td className="py-1.5">{m}</td>
                  <td className="py-1.5">{rupiah(sub[m])}</td>
                  <td className="py-1.5">{rupiah(own[m])}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </details>
      </figure>
    </div>
  );
}

function TooltipRow({ color, value, label }: { color: string; value: string; label: string }) {
  return (
    <p className="mt-1.5 flex items-center gap-2 text-sm">
      <span className="h-0.5 w-3 rounded-full" style={{ background: color }} aria-hidden />
      <span className="font-semibold">{value}</span>
      <span className="text-xs text-white/60">{label}</span>
    </p>
  );
}

interface SliderProps {
  label: string;
  suffix?: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  format?: (v: number) => string;
}

function Slider({ label, suffix, value, min, max, step, onChange, format = rupiah }: SliderProps) {
  const id = useId();
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-sm text-muted">
          {label}
        </label>
        <output htmlFor={id} className="shrink-0 text-sm font-semibold tabular-nums">
          {format(value)}
        </output>
      </div>
      {suffix && <p className="text-xs text-faint">{suffix}</p>}
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className={cn(
          "mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-paper-3",
          "[&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-ink [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_white] [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-200 hover:[&::-webkit-slider-thumb]:scale-110",
          "[&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-ink",
        )}
        style={{ background: `linear-gradient(to right, var(--color-orange) ${pct}%, var(--color-paper-3) ${pct}%)` }}
      />
    </div>
  );
}
