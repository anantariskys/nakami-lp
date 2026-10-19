"use client";

import { gsap, ScrollTrigger, SplitText, useGSAP, MOTION_OK, FINE_POINTER } from "@/lib/gsap";

/**
 * One controller for every declarative scroll effect on the page, so section
 * components can stay Server Components and only opt in via data attributes:
 *
 * - `data-reveal`            fade + rise when entering the viewport (`data-delay`)
 * - `data-reveal-group`      staggers its `data-reveal` children together
 * - `data-split`             masked line-by-line heading reveal
 * - `data-scrub-words`       words light up as the paragraph scrolls past
 * - `data-count="30"`        number counts up from 0
 * - `data-grow`              scaleX from 0 (bars, rules)
 * - `data-speed="-0.15"`     scroll parallax (yPercent per viewport)
 * - `data-spotlight`         sets --mx/--my for a cursor-follow glow
 */
export function ScrollEffects() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(
      { motion: MOTION_OK, reduce: "(prefers-reduced-motion: reduce)" },
      (ctx) => {
        const { reduce } = ctx.conditions as { motion: boolean; reduce: boolean };

        if (reduce) {
          gsap.set("[data-reveal], [data-split]", { autoAlpha: 1 });
          return;
        }

        // Grouped reveals share one trigger and stagger.
        gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
          const items = group.querySelectorAll<HTMLElement>("[data-reveal]");
          gsap.fromTo(
            items,
            { autoAlpha: 0, y: 40 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 1.1,
              stagger: 0.09,
              scrollTrigger: { trigger: group, start: "top 85%", once: true },
            },
          );
        });

        gsap.utils
          .toArray<HTMLElement>("[data-reveal]")
          .filter((el) => !el.closest("[data-reveal-group]"))
          .forEach((el) => {
            gsap.fromTo(
              el,
              { autoAlpha: 0, y: 32 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 1.1,
                delay: Number(el.dataset.delay ?? 0),
                scrollTrigger: { trigger: el, start: "top 88%", once: true },
              },
            );
          });

        gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
          SplitText.create(el, {
            type: "lines",
            mask: "lines",
            autoSplit: true,
            onSplit(self) {
              gsap.set(el, { autoAlpha: 1 });
              return gsap.from(self.lines, {
                yPercent: 110,
                duration: 1.2,
                stagger: 0.08,
                scrollTrigger: { trigger: el, start: "top 85%", once: true },
              });
            },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-scrub-words]").forEach((el) => {
          const split = SplitText.create(el, { type: "words" });
          gsap.fromTo(
            split.words,
            { opacity: 0.16 },
            {
              opacity: 1,
              ease: "none",
              stagger: 0.1,
              scrollTrigger: { trigger: el, start: "top 75%", end: "bottom 45%", scrub: 0.6 },
            },
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
          const target = Number(el.dataset.count);
          const counter = { value: 0 };
          gsap.to(counter, {
            value: target,
            duration: 1.8,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
            onUpdate: () => {
              el.textContent = Math.round(counter.value).toString();
            },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-grow]").forEach((el) => {
          gsap.from(el, {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 1.4,
            ease: "expo.inOut",
            delay: Number(el.dataset.delay ?? 0),
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-speed]").forEach((el) => {
          gsap.to(el, {
            yPercent: Number(el.dataset.speed) * 100,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement ?? el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });
      },
    );

    mm.add(FINE_POINTER, () => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-spotlight]");
      const onMove = (e: PointerEvent) => {
        const card = e.currentTarget as HTMLElement;
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        card.style.setProperty("--my", `${e.clientY - rect.top}px`);
      };
      cards.forEach((card) => card.addEventListener("pointermove", onMove));
      return () => cards.forEach((card) => card.removeEventListener("pointermove", onMove));
    });

    // Late layout shifts (web fonts, images) move trigger positions.
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
  });

  return null;
}
