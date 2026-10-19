"use client";

import { useRef } from "react";
import { gsap, SplitText, useGSAP, FINE_POINTER, MOTION_OK } from "@/lib/gsap";
import { DEFAULT_WA_MESSAGE, whatsappUrl } from "@/lib/site";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { HeroVisual } from "./HeroVisual";

const CAPABILITIES = ["Aplikasi Web", "Aplikasi Mobile", "Sistem Internal", "Integrasi API"];

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(MOTION_OK, () => {
        const q = gsap.utils.selector(root);
        const split = SplitText.create(q("h1")[0], { type: "lines", mask: "lines", linesClass: "pb-[0.06em]" });
        const line = q<SVGPathElement>('[data-hv="line"]')[0];
        const length = line.getTotalLength();

        gsap.set(q("[data-hero]"), { autoAlpha: 1 });

        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
        tl.from(q('[data-hero="glow"]'), { autoAlpha: 0, scale: 0.6, duration: 2.4 }, 0)
          .from(q('[data-hero="eyebrow"]'), { autoAlpha: 0, y: 16, duration: 1 }, 0.15)
          .from(split.lines, { yPercent: 115, duration: 1.4, stagger: 0.1 }, 0.2)
          .from(q('[data-hero="copy"] > *'), { autoAlpha: 0, y: 24, duration: 1.1, stagger: 0.08 }, 0.65)
          .from(q('[data-hero="visual"]'), { autoAlpha: 0, y: 140, duration: 1.8 }, 0.55)
          .from(q('[data-hv="kpi"]'), { autoAlpha: 0, y: 16, stagger: 0.07, duration: 0.9 }, 1.1)
          .fromTo(line, { strokeDasharray: length, strokeDashoffset: length }, { strokeDashoffset: 0, duration: 2, ease: "power2.inOut" }, 1.1)
          .from(q('[data-hv="area"]'), { autoAlpha: 0, duration: 1.4 }, 1.9)
          .from(q('[data-hv="row"]'), { autoAlpha: 0, x: -12, stagger: 0.08, duration: 0.8 }, 1.4)
          .from(q('[data-hv="float"]'), { autoAlpha: 0, scale: 0.8, y: 30, stagger: 0.15, duration: 1.2, ease: "back.out(1.6)" }, 1.5)
          .from(q('[data-hv="sync"]'), { scaleX: 0, duration: 1.6, ease: "power2.inOut" }, 2);

        // The app window settles from a tilted perspective into place as you scroll.
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

        gsap.to(q('[data-hero="headline"]'), {
          yPercent: -18,
          autoAlpha: 0.2,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "45% top", scrub: true },
        });

        return () => split.revert();
      });

      mm.add(`${FINE_POINTER} and ${MOTION_OK}`, () => {
        const el = root.current!;
        const floats = gsap.utils.toArray<HTMLElement>("[data-depth]", el).map((node) => ({
          depth: Number(node.dataset.depth),
          x: gsap.quickTo(node, "x", { duration: 1.2, ease: "power3.out" }),
          y: gsap.quickTo(node, "y", { duration: 1.2, ease: "power3.out" }),
        }));
        const glow = el.querySelector('[data-hero="glow"]');
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
          data-hero="glow"
          className="absolute left-1/2 top-[38%] h-[44rem] w-[64rem] -translate-x-1/2 rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(closest-side, rgba(251,108,0,0.34), rgba(231,63,30,0.15) 55%, transparent)",
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
        <div data-hero="headline">
          <p
            data-hero="eyebrow"
            className="mb-7 inline-flex items-center gap-2.5 rounded-full bg-white/[0.06] py-1.5 pl-2 pr-3.5 text-xs text-white/70 ring-1 ring-white/10 md:mb-9"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
            Studio pengembangan aplikasi · Indonesia
          </p>

          <h1
            id="hero-title"
            data-hero
            className="max-w-[17ch] font-display text-[clamp(2.75rem,7vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.045em]"
          >
            Kami membangun aplikasi yang <span className="text-sunset">menjalankan</span> bisnis Anda.
          </h1>

          <div
            data-hero="copy"
            className="mt-10 grid gap-8 md:mt-12 md:grid-cols-[minmax(0,34rem)_1fr] md:items-end"
          >
            <p className="text-pretty text-base leading-relaxed text-white/65 md:text-lg">
              Nakami Studio merancang, membangun, dan merawat aplikasi web, mobile, dan sistem internal
              yang mengikuti alur kerja Anda. Harga jelas sejak awal, source code sepenuhnya milik Anda.
            </p>
            <div className="flex flex-wrap items-center gap-3 md:justify-end">
              <MagneticButton href={whatsappUrl(DEFAULT_WA_MESSAGE)} variant="light" size="lg">
                Diskusikan proyek
              </MagneticButton>
              <MagneticButton href="#layanan" variant="ghost-dark" size="lg" icon={false}>
                Lihat layanan
              </MagneticButton>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/40 md:col-span-2">
              {CAPABILITIES.map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <span className="size-1 rounded-full bg-orange" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div data-hero="visual" className="mt-16 [perspective:1600px] md:mt-20">
          <div data-hero="tilt" className="origin-top [transform-style:preserve-3d]">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
