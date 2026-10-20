"use client";

import { Fragment, useRef } from "react";
import { cn } from "@/lib/cn";
import { gsap, useGSAP, FINE_POINTER, MOTION_OK } from "@/lib/gsap";
import { DEFAULT_WA_MESSAGE, whatsappUrl } from "@/lib/site";
import { afterIdle } from "@/lib/idle";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { HeroVisual } from "./HeroVisual";

const CAPABILITIES = ["Kasir & stok", "Booking online", "Aplikasi HP", "Aplikasi kantor"];

const HEADLINE: Array<{ text: string; accent?: boolean }> = [
  { text: "Kami" },
  { text: "buatkan" },
  { text: "aplikasi" },
  { text: "yang" },
  { text: "meringankan", accent: true },
  { text: "kerja" },
  { text: "bisnis" },
  { text: "Anda." },
];

export function Hero() {
  const root = useRef<HTMLElement>(null);

  // Headline + copy enter with CSS (see .hero-word / .hero-fade) so they paint
  // immediately without waiting for JS. GSAP only drives the product visual.
  useGSAP(
    (_, contextSafe) => {
      const mm = gsap.matchMedia();

      // The visual sits below the headline, so its setup can wait for idle time.
      const cancel = afterIdle(
        contextSafe!(() =>
          mm.add(MOTION_OK, () => {
            const q = gsap.utils.selector(root);
            const line = q<SVGPathElement>('[data-hv="line"]')[0];
            const length = line.getTotalLength();

            // Plays once the window is actually on screen (immediately on desktop,
            // later on phones where it starts below the fold).
            const tl = gsap.timeline({
              defaults: { ease: "expo.out" },
              delay: 0.35,
              scrollTrigger: { trigger: q('[data-hero="visual"]')[0], start: "top 85%", once: true },
            });
            tl.from(q('[data-hv="kpi"]'), { autoAlpha: 0, y: 16, stagger: 0.07, duration: 0.9 }, 0.55)
              .fromTo(
                line,
                { strokeDasharray: length, strokeDashoffset: length },
                { strokeDashoffset: 0, duration: 2, ease: "power2.inOut" },
                0.55,
              )
              .from(q('[data-hv="area"]'), { autoAlpha: 0, duration: 1.4 }, 1.35)
              .from(q('[data-hv="row"]'), { autoAlpha: 0, x: -12, stagger: 0.08, duration: 0.8 }, 0.85)
              .from(
                q('[data-hv="float"]'),
                { autoAlpha: 0, scale: 0.8, y: 30, stagger: 0.15, duration: 1.2, ease: "back.out(1.6)" },
                0.95,
              )
              .from(q('[data-hv="sync"]'), { scaleX: 0, duration: 1.6, ease: "power2.inOut" }, 1.45);

            // The app window settles from a tilted perspective into place as you scroll.
            // Tablet and up only: on phones the 3D layer costs more than it adds.
            if (window.matchMedia("(min-width: 768px)").matches) {
              gsap.fromTo(
                q('[data-hero="tilt"]'),
                { rotateX: 16, scale: 0.94 },
                {
                  rotateX: 0,
                  scale: 1,
                  ease: "none",
                  scrollTrigger: { trigger: q('[data-hero="visual"]')[0], start: "top 95%", end: "top 25%", scrub: 0.8 },
                },
              );
            }

            gsap.to(q("[data-headline]"), {
              yPercent: -18,
              autoAlpha: 0.2,
              ease: "none",
              scrollTrigger: { trigger: root.current, start: "top top", end: "45% top", scrub: true },
            });
          }),
        ),
        300,
      );

      mm.add(`${FINE_POINTER} and ${MOTION_OK}`, () => {
        const el = root.current!;
        const floats = gsap.utils.toArray<HTMLElement>("[data-depth]", el).map((node) => ({
          depth: Number(node.dataset.depth),
          x: gsap.quickTo(node, "x", { duration: 1.2, ease: "power3.out" }),
          y: gsap.quickTo(node, "y", { duration: 1.2, ease: "power3.out" }),
        }));
        const glow = el.querySelector("[data-glow]");
        const gx = gsap.quickTo(glow, "x", { duration: 2.5, ease: "power3.out" });
        const gy = gsap.quickTo(glow, "y", { duration: 2.5, ease: "power3.out" });

        const onMove = (e: PointerEvent) => {
          const nx = e.clientX / window.innerWidth - 0.5;
          const ny = e.clientY / window.innerHeight - 0.5;
          floats.forEach((f) => {
            f.x(nx * 24 * f.depth);
            f.y(ny * 18 * f.depth);
          });
          gx(nx * 160);
          gy(ny * 100);
        };
        el.addEventListener("pointermove", onMove);
        return () => el.removeEventListener("pointermove", onMove);
      });

      return cancel;
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="top"
      aria-labelledby="hero-title"
      className="grain relative isolate overflow-hidden bg-night pb-24 pt-32 text-paper md:pb-36 md:pt-40"
    >
      {/* Ambient light + grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          data-glow
          className="hero-fade absolute left-1/2 top-[30%] h-[44rem] w-[64rem] -translate-x-1/2"
          style={{
            background: "radial-gradient(closest-side, rgba(251,108,0,0.26), rgba(231,63,30,0.1) 45%, transparent 75%)",
            animationDelay: "0s",
            animationDuration: "2.4s",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 70% 55% at 50% 30%, black, transparent 75%)",
          }}
        />
      </div>

      <div className="container-x">
        <div data-headline>
          <p
            style={{ animationDelay: "0s" }}
            className="hero-fade mb-7 inline-flex items-center gap-2.5 rounded-full bg-white/[0.06] py-1.5 pl-2 pr-3.5 text-xs text-white/70 ring-1 ring-white/10 md:mb-9"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
            Jasa pembuatan aplikasi · Indonesia
          </p>

          <h1
            id="hero-title"
            className="max-w-[17ch] font-display text-[clamp(2.75rem,7vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.045em]"
          >
            {HEADLINE.map((word, i) => (
              <Fragment key={word.text}>
                <span className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em] align-bottom">
                  <span
                    className={cn("hero-word inline-block", word.accent && "text-sunset")}
                    style={{ animationDelay: `${0.12 + i * 0.05}s` }}
                  >
                    {word.text}
                  </span>
                </span>{" "}
              </Fragment>
            ))}
          </h1>

          <div className="hero-fade mt-10 grid gap-8 md:mt-12 md:grid-cols-[minmax(0,34rem)_1fr] md:items-end">
            <p className="text-pretty text-base leading-relaxed text-white/65 md:text-lg">
              Pencatatan stok, kasir, jadwal pelanggan, sampai laporan harian. Kami buatkan aplikasinya sesuai cara
              kerja Anda, dengan harga yang disepakati di awal. Setelah jadi, aplikasinya sepenuhnya milik Anda.
            </p>
            <div className="flex flex-wrap items-center gap-3 md:justify-end">
              <MagneticButton href={whatsappUrl(DEFAULT_WA_MESSAGE)} variant="light" size="lg">
                Konsultasi gratis
              </MagneticButton>
              <MagneticButton href="#layanan" variant="ghost-dark" size="lg" icon={false}>
                Lihat contoh aplikasi
              </MagneticButton>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/55 md:col-span-2">
              {CAPABILITIES.map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <span className="size-1 rounded-full bg-orange" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          data-hero="visual"
          style={{ animationDelay: "0.7s", animationDuration: "1.6s" }}
          className="hero-fade mt-16 md:mt-20 md:[perspective:1600px]"
        >
          <div data-hero="tilt" className="origin-top md:[transform-style:preserve-3d]">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
