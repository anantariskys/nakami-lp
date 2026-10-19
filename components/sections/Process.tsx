"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { PROCESS } from "@/lib/content";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Process() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLOListElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Desktop: pin the section and scroll the steps horizontally.
      mm.add(`(min-width: 1024px) and ${MOTION_OK}`, () => {
        const el = track.current!;
        const distance = () => el.scrollWidth - window.innerWidth + 80;

        const tween = gsap.to(el, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });

        gsap.to("[data-progress]", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${distance()}`,
            scrub: true,
          },
        });

        gsap.utils.toArray<HTMLElement>("[data-step]").forEach((step) => {
          gsap.from(step.querySelectorAll("[data-step-anim]"), {
            autoAlpha: 0,
            y: 40,
            stagger: 0.06,
            duration: 0.9,
            scrollTrigger: {
              trigger: step,
              containerAnimation: tween,
              start: "left 85%",
              once: true,
            },
          });
        });
      });

      // Mobile & tablet: a simple vertical stack with reveal.
      mm.add(`(max-width: 1023px) and ${MOTION_OK}`, () => {
        gsap.utils.toArray<HTMLElement>("[data-step]").forEach((step) => {
          gsap.from(step, {
            autoAlpha: 0,
            y: 48,
            duration: 1,
            scrollTrigger: { trigger: step, start: "top 88%", once: true },
          });
        });
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="proses"
      aria-labelledby="proses-title"
      className="grain relative overflow-hidden bg-night py-28 text-paper lg:flex lg:h-svh lg:flex-col lg:justify-center lg:py-0"
    >
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel index="02" tone="dark">
              Proses
            </SectionLabel>
            <h2
              id="proses-title"
              data-split
              className="mt-6 max-w-[18ch] font-display text-[clamp(2.25rem,4.6vw,4rem)] font-semibold leading-[1] tracking-[-0.04em]"
            >
              Terukur di setiap tahap, tanpa kejutan di akhir.
            </h2>
          </div>
          <div className="hidden w-64 lg:block" aria-hidden>
            <div className="h-px w-full bg-white/10">
              <div data-progress className="h-px w-full origin-left scale-x-0 bg-sunset" />
            </div>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">Gulir untuk melihat tahapan</p>
          </div>
        </div>
      </div>

      <ol
        ref={track}
        className="mx-auto mt-14 grid max-w-[82rem] gap-4 px-5 md:px-8 lg:mx-0 lg:mt-20 lg:flex lg:w-max lg:max-w-none lg:gap-5 lg:pr-20 lg:pl-[max(2rem,calc((100vw-82rem)/2+2rem))]"
      >
        {PROCESS.map((step, i) => (
          <li
            key={step.title}
            data-step
            className="group relative flex flex-col overflow-hidden rounded-[1.75rem] bg-night-2 p-7 ring-1 ring-white/[0.07] transition-colors duration-500 hover:bg-night-3 md:p-9 lg:h-[26rem] lg:w-[26rem]"
          >
            <div className="flex items-start justify-between">
              <span
                data-step-anim
                className="font-display text-[5.5rem] font-semibold leading-none tracking-[-0.06em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.18)] transition-colors duration-500 group-hover:text-orange group-hover:[-webkit-text-stroke:1px_transparent]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span data-step-anim className="rounded-full bg-white/[0.06] px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-white/60">
                {step.duration}
              </span>
            </div>
            <h3 data-step-anim className="mt-auto pt-10 font-display text-2xl font-semibold tracking-tight md:text-3xl">
              {step.title}
            </h3>
            <p data-step-anim className="mt-3 leading-relaxed text-white/60">
              {step.body}
            </p>
            <p data-step-anim className="mt-6 flex items-center gap-2 border-t border-white/10 pt-5 text-sm text-white/80">
              <span className="size-1.5 rounded-full bg-orange" />
              {step.output}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
