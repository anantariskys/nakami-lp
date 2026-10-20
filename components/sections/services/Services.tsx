"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { SERVICES } from "@/lib/content";
import { whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/cn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ServiceShot } from "./ServicePreview";

const PANEL_SIZES = "(min-width: 1024px) 34rem, 1px";
const INLINE_SIZES = "(min-width: 1024px) 1px, 92vw";

export function Services() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const service = SERVICES[active];

  // All screenshots stay mounted (already decoded); switching only cross-fades.
  useGSAP(
    () => {
      const shots = gsap.utils.toArray<HTMLElement>("[data-shot]");
      const current = shots[active];
      const reduce = !window.matchMedia(MOTION_OK).matches;

      gsap.to(
        shots.filter((s) => s !== current),
        { autoAlpha: 0, duration: reduce ? 0 : 0.35, overwrite: true },
      );
      gsap.fromTo(
        current,
        { autoAlpha: 0, y: reduce ? 0 : 18, scale: reduce ? 1 : 0.98 },
        { autoAlpha: 1, y: 0, scale: 1, duration: reduce ? 0 : 0.7, overwrite: true },
      );
      if (!reduce) {
        gsap.from("[data-preview-meta] > *", { autoAlpha: 0, y: 8, stagger: 0.04, duration: 0.5 });
      }
    },
    { scope: root, dependencies: [active] },
  );

  return (
    <section
      ref={root}
      id="layanan"
      aria-labelledby="layanan-title"
      className="relative border-t border-line bg-paper-2 py-28 md:py-40"
    >
      <div className="container-x">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <SectionLabel index="01">Layanan</SectionLabel>
            <h2
              id="layanan-title"
              data-split
              className="mt-6 max-w-[17ch] font-display text-[clamp(2.25rem,5vw,4.25rem)] font-semibold leading-[1] tracking-[-0.04em]"
            >
              Aplikasi apa yang bisa kami buatkan?
            </h2>
          </div>
          <p data-reveal className="max-w-sm text-muted">
            <span className="hidden lg:inline">Arahkan kursor ke tiap layanan untuk melihat contoh tampilannya.</span>
            <span className="lg:hidden">Setiap layanan dilengkapi contoh tampilan aplikasinya.</span> Semua bisa
            disesuaikan dengan cara kerja usaha Anda.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,34rem)] lg:gap-14">
          <ol className="border-t border-line" data-reveal-group>
            {SERVICES.map((s, i) => {
              const isActive = i === active;
              return (
                <li key={s.id} data-reveal className="border-b border-line">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    aria-controls="service-preview"
                    className="group relative grid w-full grid-cols-[2.25rem_1fr_auto] items-start gap-x-3 py-7 text-left md:grid-cols-[3rem_1fr_auto] md:py-8"
                  >
                    <span
                      className={cn(
                        "pt-2 font-mono text-xs transition-colors duration-300",
                        isActive ? "text-orange-ink" : "text-faint",
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0">
                      <span
                        className={cn(
                          "block font-display text-[clamp(1.5rem,2.8vw,2.3rem)] font-semibold leading-tight tracking-[-0.03em] transition-[color,translate] duration-500 ease-out-expo",
                          isActive ? "text-ink lg:translate-x-2" : "text-ink lg:text-ink/35 lg:group-hover:text-ink/70",
                        )}
                      >
                        {s.title}
                      </span>
                      <span
                        className={cn(
                          "mt-3 block max-w-xl text-[0.95rem] leading-relaxed transition-colors duration-500",
                          isActive ? "text-muted" : "text-muted lg:text-faint",
                        )}
                      >
                        {s.summary}
                      </span>
                      <span className="mt-4 flex flex-wrap gap-1.5">
                        {s.examples.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-paper px-3 py-1 text-[11px] text-muted ring-1 ring-line"
                          >
                            {t}
                          </span>
                        ))}
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className={cn(
                        "mt-1.5 hidden size-10 place-items-center rounded-full transition-all duration-500 ease-out-expo sm:grid",
                        isActive ? "rotate-0 bg-ink text-paper" : "-rotate-45 text-faint ring-1 ring-line",
                      )}
                    >
                      <ArrowUpRight className="size-4" />
                    </span>
                    <span
                      aria-hidden
                      className={cn(
                        "absolute -bottom-px left-0 h-px w-full origin-left bg-orange transition-transform duration-700 ease-out-expo",
                        isActive ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </button>
                  {/* Small screens: show the example inline under each service. */}
                  <div className="pb-8 lg:hidden">
                    <ServiceShot service={s} sizes={INLINE_SIZES} />
                  </div>
                </li>
              );
            })}
          </ol>

          <aside id="service-preview" aria-live="polite" className="hidden lg:block">
            <div className="sticky top-24 overflow-hidden rounded-[1.75rem] bg-night p-6 text-paper">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-32 -top-32 size-96 bg-[radial-gradient(closest-side,rgba(251,108,0,0.28),transparent)]"
              />
              <div className="relative grid min-h-[22rem] place-items-center">
                {SERVICES.map((s, i) => (
                  <div
                    key={s.id}
                    data-shot
                    aria-hidden={i !== active}
                    className={cn("col-start-1 row-start-1 w-full", i !== 0 && "invisible opacity-0")}
                  >
                    <ServiceShot service={s} sizes={PANEL_SIZES} />
                  </div>
                ))}
              </div>
              <div data-preview-meta className="relative mt-6 border-t border-white/10 pt-6">
                <p className="text-xs text-white/45">Contoh tampilan</p>
                <p className="mt-1 font-display text-xl font-semibold tracking-tight">{service.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {service.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-white/75">
                      <Check className="mt-0.5 size-4 shrink-0 text-orange" aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappUrl(
                    `Halo Nakami Studio, saya tertarik dibuatkan ${service.title.toLowerCase()}. Usaha saya:`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link mt-6 inline-flex items-center gap-2 text-sm font-medium text-orange"
                >
                  Tanya soal {service.title.toLowerCase()}
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
