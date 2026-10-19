"use client";

import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { SERVICES } from "@/lib/content";
import { whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/cn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ServicePreview } from "./ServicePreview";

export function Services() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const service = SERVICES[active];

  // Cross-fade the preview panel whenever the active service changes.
  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.fromTo(
          "[data-preview]",
          { autoAlpha: 0, y: 24, scale: 0.97, filter: "blur(6px)" },
          { autoAlpha: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 0.8 },
        );
        gsap.from("[data-preview-meta] > *", { autoAlpha: 0, y: 10, stagger: 0.05, duration: 0.6, delay: 0.1 });
        gsap.from("[data-bar]", { scaleY: 0, transformOrigin: "bottom", stagger: 0.04, duration: 0.8, delay: 0.15 });
      });
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
              className="mt-6 max-w-[16ch] font-display text-[clamp(2.25rem,5vw,4.25rem)] font-semibold leading-[1] tracking-[-0.04em]"
            >
              Satu tim untuk seluruh siklus aplikasi Anda.
            </h2>
          </div>
          <p data-reveal className="max-w-sm text-muted">
            Dari ide di kertas sampai aplikasi yang dipakai tim setiap hari. Pilih titik awalnya, kami
            susun sisanya.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,27rem)] lg:gap-16">
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
                    className="group relative grid w-full grid-cols-[2.5rem_1fr_auto] items-start gap-x-4 py-7 text-left md:grid-cols-[3.5rem_1fr_auto] md:py-9"
                  >
                    <span
                      className={cn(
                        "pt-2 font-mono text-xs transition-colors duration-300",
                        isActive ? "text-orange" : "text-faint",
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0">
                      <span
                        className={cn(
                          "block font-display text-[clamp(1.6rem,3.2vw,2.6rem)] font-semibold leading-tight tracking-[-0.03em] transition-[color,translate] duration-500 ease-out-expo",
                          isActive ? "translate-x-2 text-ink" : "text-ink/35 group-hover:text-ink/70",
                        )}
                      >
                        {s.title}
                      </span>
                      <span
                        className={cn(
                          "mt-3 block max-w-xl text-[0.95rem] leading-relaxed transition-colors duration-500",
                          isActive ? "text-muted" : "text-muted/70 lg:text-faint",
                        )}
                      >
                        {s.summary}
                      </span>
                      <span className="mt-4 flex flex-wrap gap-1.5 lg:hidden">
                        {s.stack.map((t) => (
                          <span key={t} className="rounded-full bg-paper px-2.5 py-1 font-mono text-[10px] text-muted ring-1 ring-line">
                            {t}
                          </span>
                        ))}
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className={cn(
                        "mt-1.5 grid size-10 place-items-center rounded-full transition-all duration-500 ease-out-expo",
                        isActive ? "rotate-0 bg-ink text-paper" : "-rotate-45 bg-transparent text-faint ring-1 ring-line",
                      )}
                    >
                      <ArrowUpRight className="size-4" />
                    </span>
                    <span
                      aria-hidden
                      className={cn(
                        "absolute -bottom-px left-0 h-px origin-left bg-orange transition-transform duration-700 ease-out-expo",
                        isActive ? "w-full scale-x-100" : "w-full scale-x-0",
                      )}
                    />
                  </button>
                </li>
              );
            })}
          </ol>

          <aside
            id="service-preview"
            aria-live="polite"
            className="hidden lg:block"
          >
            <div className="sticky top-28 overflow-hidden rounded-[1.75rem] bg-night p-6 text-paper grain">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-orange/30 blur-[90px]"
              />
              <div data-preview className="relative grid min-h-64 place-items-center">
                <ServicePreview visual={service.visual} />
              </div>
              <div data-preview-meta className="relative mt-6 border-t border-white/10 pt-6">
                <p className="font-display text-xl font-semibold tracking-tight">{service.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {service.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm text-white/70">
                      <span className="size-1.5 rounded-full bg-orange" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {service.stack.map((t) => (
                    <span key={t} className="rounded-full bg-white/[0.06] px-2.5 py-1 font-mono text-[10px] text-white/60">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={whatsappUrl(`Halo Nakami Studio, saya tertarik dengan layanan ${service.title}. Kebutuhan saya:`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link mt-6 inline-flex items-center gap-2 text-sm font-medium text-orange"
                >
                  Diskusikan {service.title.toLowerCase()}
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
