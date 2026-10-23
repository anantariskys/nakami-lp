"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, CircleCheck, Printer, QrCode } from "lucide-react";
import { gsap, useGSAP, FINE_POINTER, MOTION_OK } from "@/lib/gsap";
import type { Project } from "@/lib/content";

/**
 * The featured case study's opening "stage": brand-tinted backdrop, story
 * on the left, layered desktop + phone screenshots on the right. Devices
 * drift with the cursor and settle in as the stage scrolls into view.
 */
export function CaseStage({ project: p }: { project: Project }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          "[data-device='desktop']",
          { yPercent: 12, rotateX: 14, rotateY: -10 },
          {
            yPercent: 0,
            rotateX: 6,
            rotateY: -6,
            ease: "none",
            scrollTrigger: { trigger: root.current, start: "top 85%", end: "center 55%", scrub: 0.8 },
          },
        );
        gsap.fromTo(
          "[data-device='phone']",
          { yPercent: 30 },
          {
            yPercent: 0,
            ease: "none",
            scrollTrigger: { trigger: root.current, start: "top 85%", end: "center 50%", scrub: 0.8 },
          },
        );
        gsap.from("[data-chip]", {
          autoAlpha: 0,
          scale: 0.8,
          y: 16,
          stagger: 0.12,
          duration: 0.9,
          ease: "back.out(1.7)",
          scrollTrigger: { trigger: root.current, start: "top 55%", once: true },
        });
      });

      mm.add(`${FINE_POINTER} and ${MOTION_OK}`, () => {
        const el = root.current!;
        const layers = gsap.utils.toArray<HTMLElement>("[data-depth]", el).map((node) => ({
          depth: Number(node.dataset.depth),
          x: gsap.quickTo(node, "x", { duration: 1.1, ease: "power3.out" }),
          y: gsap.quickTo(node, "y", { duration: 1.1, ease: "power3.out" }),
        }));
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          const nx = (e.clientX - r.left) / r.width - 0.5;
          const ny = (e.clientY - r.top) / r.height - 0.5;
          layers.forEach((l) => {
            l.x(nx * 22 * l.depth);
            l.y(ny * 16 * l.depth);
          });
        };
        const leave = () => layers.forEach((l) => (l.x(0), l.y(0)));
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        return () => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", leave);
        };
      });
    },
    { scope: root },
  );

  const brand = p.brandColor ?? "#FB6C00";

  return (
    <div
      ref={root}
      className="grain relative isolate overflow-hidden rounded-[2rem] bg-[#1A1412] text-paper md:rounded-[2.5rem]"
    >
      {/* Brand-tinted light */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(60rem 40rem at 85% 0%, ${brand}66, transparent 60%), radial-gradient(40rem 30rem at 0% 100%, #FF910033, transparent 60%)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 60% 70% at 70% 40%, black, transparent 75%)",
        }}
      />

      <div className="grid items-center gap-12 p-7 md:p-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-6 lg:p-16">
        {/* Story */}
        <div className="relative z-10">
          <div className="flex items-center gap-3">
            {p.logo && (
              <Image src={p.logo} alt="" width={48} height={48} className="size-12 rounded-xl shadow-lg" unoptimized />
            )}
            <div>
              <p className="font-display text-lg font-semibold tracking-tight">{p.client}</p>
              <p className="text-xs text-white/55">
                {p.sector} · {p.year}
              </p>
            </div>
          </div>

          <h3 className="mt-8 max-w-[14ch] font-display text-[clamp(2.25rem,4.4vw,3.75rem)] font-semibold leading-[1] tracking-[-0.04em]">
            {p.title}
          </h3>
          <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-white/70">{p.result}</p>

          {p.facts && (
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-6">
              {p.facts.map((f) => (
                <div key={f.label}>
                  <dt className="sr-only">{f.label}</dt>
                  <dd className="whitespace-nowrap font-display text-lg font-semibold tracking-tight sm:text-2xl md:text-[1.7rem]">{f.value}</dd>
                  <dd className="mt-1 text-xs leading-snug text-white/55">{f.label}</dd>
                </div>
              ))}
            </dl>
          )}

          <div className="mt-10 flex flex-wrap items-center gap-3">
            {p.url && (
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/cta inline-flex h-12 items-center gap-2.5 rounded-full bg-paper pl-5 pr-2 text-sm font-medium text-ink transition-colors duration-300 hover:bg-peach"
              >
                Kunjungi {p.client}
                <span className="grid size-8 place-items-center rounded-full text-paper" style={{ background: brand }}>
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/cta:rotate-45" aria-hidden />
                </span>
              </a>
            )}
            <a
              href={`#${p.id}-detail`}
              className="inline-flex h-12 items-center gap-2 rounded-full px-5 text-sm font-medium text-paper ring-1 ring-inset ring-white/20 transition-colors duration-300 hover:bg-white/10"
            >
              Lihat studi kasus
              <ArrowDown className="size-4" aria-hidden />
            </a>
          </div>
        </div>

        {/* Devices */}
        <div className="relative mb-10 [perspective:1800px] md:mb-12 lg:mb-0">
          <div data-depth="0.6" className="relative">
            <div
              data-device="desktop"
              className="relative ml-auto w-full max-w-[44rem] overflow-hidden rounded-xl bg-[#2a221f] shadow-[0_50px_100px_-30px_rgba(0,0,0,0.8)] ring-1 ring-white/10 [transform-style:preserve-3d] md:rounded-2xl"
            >
              <div aria-hidden className="flex h-7 items-center gap-1.5 px-3 md:h-8">
                <span className="size-2 rounded-full bg-white/20" />
                <span className="size-2 rounded-full bg-white/20" />
                <span className="size-2 rounded-full bg-white/20" />
                <span className="mx-auto rounded bg-white/[0.06] px-3 py-0.5 font-mono text-[10px] text-white/45">
                  app.rekaruang.my.id
                </span>
              </div>
              <Image
                src={p.hero.desktop.src}
                alt={p.hero.desktop.alt}
                width={1600}
                height={1000}
                sizes="(min-width: 1024px) 44rem, 92vw"
                className="h-auto w-full"
              />
            </div>
          </div>

          {p.hero.phone && (
            <div data-depth="1.4" className="absolute -bottom-10 -left-2 w-[30%] max-w-[11rem] md:-bottom-14 md:left-2">
              <div
                data-device="phone"
                className="rounded-[1.8rem] bg-[#0f0c0b] p-1.5 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.85)] ring-1 ring-white/15 md:rounded-[2.2rem] md:p-2"
              >
                <div className="relative overflow-hidden rounded-[1.4rem] md:rounded-[1.7rem]">
                  <Image
                    src={p.hero.phone.src}
                    alt={p.hero.phone.alt}
                    width={780}
                    height={1688}
                    sizes="(min-width: 768px) 11rem, 30vw"
                    className="h-auto w-full"
                  />
                  <span aria-hidden className="absolute left-1/2 top-1.5 h-3.5 w-14 -translate-x-1/2 rounded-full bg-[#0f0c0b]" />
                </div>
              </div>
            </div>
          )}

          {/* Floating facts, drawn from what the dashboard actually shows */}
          <div data-depth="2.2" className="absolute -top-5 right-2 md:-top-6 md:right-6">
            <span data-chip className="flex items-center gap-2 rounded-full bg-paper px-3.5 py-2 text-xs font-medium text-ink shadow-xl">
              <CircleCheck className="size-4 text-emerald-600" aria-hidden /> 3 / 3 kiosk online
            </span>
          </div>
          <div data-depth="1.8" className="absolute bottom-[18%] right-0 hidden sm:block md:-right-4">
            <span data-chip className="flex items-center gap-2 rounded-full bg-paper px-3.5 py-2 text-xs font-medium text-ink shadow-xl">
              <QrCode className="size-4" style={{ color: brand }} aria-hidden /> Pembayaran QRIS diterima
            </span>
          </div>
          <div data-depth="2.6" className="absolute bottom-[-1.5rem] right-[22%] hidden md:block">
            <span data-chip className="flex items-center gap-2 rounded-full bg-[#2a221f] px-3.5 py-2 text-xs font-medium text-paper shadow-xl ring-1 ring-white/10">
              <Printer className="size-4 text-amber" aria-hidden /> Kertas tinggal 58 lembar
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
