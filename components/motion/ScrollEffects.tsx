"use client";

import { gsap, ScrollTrigger, SplitText, useGSAP, MOTION_OK, FINE_POINTER } from "@/lib/gsap";
import { afterIdle } from "@/lib/idle";

/**
 * One controller for every declarative scroll effect on the page, so section
 * components can stay Server Components and only opt in via data attributes:
 *
 * - `data-reveal`            fade + rise when entering the viewport (`data-delay`)
 * - `data-reveal-group`      staggers its `data-reveal` children together
 * - `data-split`             masked line-by-line heading reveal
 * - `data-scrub-words`       words darken as the paragraph scrolls past
 * - `data-count="30"`        number counts up from 0
 * - `data-grow`              scaleX from 0 (bars, rules)
 * - `data-speed="-0.15"`     scroll parallax (yPercent per viewport)
 * - `data-spotlight`         sets --mx/--my for a cursor-follow glow
 *
 * Content is never hidden by CSS: it renders visible for crawlers, no-JS and
 * reduced-motion visitors. With motion enabled, each element is prepared
 * (hidden, split into lines) shortly before it scrolls into view, and its
 * paused animation plays once it is actually on screen. Both steps use
 * IntersectionObserver, so nothing measures layout on scroll.
 */
export function ScrollEffects() {
  useGSAP((_, contextSafe) => {
    const safe = contextSafe!;
    return afterIdle(safe(setup));

    function setup() {
      const mm = gsap.matchMedia();

      mm.add(MOTION_OK, () => {
        const pending = new Map<Element, gsap.core.Animation[]>();

        const prepare = safe((el: HTMLElement) => {
          const anims: gsap.core.Animation[] = [];

          if (el.hasAttribute("data-reveal-group")) {
            anims.push(
              gsap.fromTo(
                el.querySelectorAll("[data-reveal]"),
                { autoAlpha: 0, y: 40 },
                { autoAlpha: 1, y: 0, duration: 1.1, stagger: 0.09, paused: true },
              ),
            );
          } else if (el.hasAttribute("data-reveal")) {
            anims.push(
              gsap.fromTo(
                el,
                { autoAlpha: 0, y: 32 },
                { autoAlpha: 1, y: 0, duration: 1.1, delay: Number(el.dataset.delay ?? 0), paused: true },
              ),
            );
          }

          if (el.hasAttribute("data-split")) {
            const split = SplitText.create(el, { type: "lines", mask: "lines" });
            anims.push(
              gsap.from(split.lines, {
                yPercent: 110,
                duration: 1.2,
                stagger: 0.08,
                paused: true,
                // Restore the original markup so later resizes re-wrap naturally.
                onComplete: () => split.revert(),
              }),
            );
          }

          if (el.dataset.count) {
            const counter = { value: 0 };
            const target = Number(el.dataset.count);
            el.textContent = "0";
            anims.push(
              gsap.to(counter, {
                value: target,
                duration: 1.8,
                ease: "power3.out",
                paused: true,
                onUpdate: () => {
                  el.textContent = Math.round(counter.value).toString();
                },
              }),
            );
          }

          if (el.hasAttribute("data-grow")) {
            anims.push(
              gsap.from(el, {
                scaleX: 0,
                transformOrigin: "left center",
                duration: 1.4,
                ease: "expo.inOut",
                delay: Number(el.dataset.delay ?? 0),
                paused: true,
              }),
            );
          }

          pending.set(el, anims);
        });

        const play = (el: Element) => {
          pending.get(el)?.forEach((a) => a.play());
          pending.delete(el);
        };

        const playObserver = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (!entry.isIntersecting) continue;
              playObserver.unobserve(entry.target);
              play(entry.target);
            }
          },
          { rootMargin: "0px 0px -10% 0px" },
        );

        // Prepare a little ahead of the viewport so nothing visibly pops out and back in.
        const prepObserver = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (!entry.isIntersecting) continue;
              prepObserver.unobserve(entry.target);
              prepare(entry.target as HTMLElement);
              playObserver.observe(entry.target);
            }
          },
          { rootMargin: "0px 0px 35% 0px" },
        );

        gsap.utils
          .toArray<HTMLElement>("[data-reveal-group], [data-reveal], [data-split], [data-count], [data-grow]")
          // A group animates its own [data-reveal] children.
          .filter((el) => !(el.hasAttribute("data-reveal") && el.parentElement?.closest("[data-reveal-group]")))
          .forEach((el) => prepObserver.observe(el));

        // Scrubbed effects: build the ScrollTrigger one viewport before it's needed.
        const arm = safe((el: HTMLElement) => {
          if (el.hasAttribute("data-scrub-words")) {
            const split = SplitText.create(el, { type: "words", aria: "none" });
            gsap.fromTo(
              split.words,
              { color: "#8f8f8f" },
              {
                color: "#0a0a0a",
                ease: "none",
                stagger: 0.1,
                scrollTrigger: { trigger: el, start: "top 75%", end: "bottom 45%", scrub: 0.6 },
              },
            );
          }
          if (el.dataset.speed) {
            gsap.to(el, {
              yPercent: Number(el.dataset.speed) * 100,
              ease: "none",
              scrollTrigger: { trigger: el.parentElement ?? el, start: "top bottom", end: "bottom top", scrub: true },
            });
          }
          ScrollTrigger.sort();
        });

        const armObserver = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (!entry.isIntersecting) continue;
              armObserver.unobserve(entry.target);
              arm(entry.target as HTMLElement);
            }
          },
          { rootMargin: "100% 0px" },
        );
        gsap.utils.toArray<HTMLElement>("[data-scrub-words], [data-speed]").forEach((el) => armObserver.observe(el));

        return () => {
          prepObserver.disconnect();
          playObserver.disconnect();
          armObserver.disconnect();
        };
      });

      // Infinite marquees only animate while on screen.
      const marqueeObserver = new IntersectionObserver((entries) => {
        for (const entry of entries) entry.target.toggleAttribute("data-running", entry.isIntersecting);
      });
      gsap.utils.toArray<HTMLElement>("[data-marquee]").forEach((el) => marqueeObserver.observe(el));
      mm.add("all", () => () => marqueeObserver.disconnect());

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
    }
  });

  return null;
}
