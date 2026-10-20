"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { afterIdle } from "@/lib/idle";
import { NAV_LINKS } from "@/lib/content";
import { DEFAULT_WA_MESSAGE, SITE, whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/cn";
import { LogoMark, Wordmark } from "@/components/brand/Logo";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { scrollToHash } from "@/components/motion/SmoothScroll";

export function Navbar() {
  const root = useRef<HTMLElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const indicator = useRef<HTMLSpanElement>(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  // Hide on scroll down, reveal on scroll up; track the section in view.
  useGSAP(
    (_, contextSafe) => {
      const bar = root.current!;

      // Scroll tracking isn't needed for first paint; set it up when idle.
      return afterIdle(
        contextSafe!(() => {
          const show = gsap.quickTo(bar, "yPercent", { duration: 0.5, ease: "power3.out" });

          ScrollTrigger.create({
            start: 0,
            end: "max",
            onUpdate: (self) => {
              if (self.scroll() < 120) show(0);
              else show(self.direction === 1 ? -130 : 0);
            },
          });

          NAV_LINKS.forEach(({ href }) => {
            const section = document.querySelector(href);
            if (!section) return;
            ScrollTrigger.create({
              trigger: section,
              start: "top 45%",
              end: "bottom 45%",
              refreshPriority: -1, // measure after the pinned process section
              onToggle: (self) => self.isActive && setActive(href),
              onLeaveBack: () => href === NAV_LINKS[0].href && setActive(null),
            });
          });
        }),
      );
    },
    { scope: root },
  );

  // Plain listener (not ScrollTrigger) so programmatic jumps and deep links count too.
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  // Hover pill that glides between links.
  const moveIndicator = (e: MouseEvent<HTMLAnchorElement>) => {
    const link = e.currentTarget;
    gsap.to(indicator.current, {
      x: link.offsetLeft,
      width: link.offsetWidth,
      opacity: 1,
      duration: 0.5,
      ease: "expo.out",
    });
  };
  const hideIndicator = () => gsap.to(indicator.current, { opacity: 0, duration: 0.3 });

  // Mobile menu open/close timeline.
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({ paused: true })
        .set(menu.current, { autoAlpha: 1 })
        .fromTo(
          menu.current,
          { clipPath: "inset(0 0 100% 0 round 0 0 2rem 2rem)" },
          { clipPath: "inset(0 0 0% 0 round 0 0 0rem 0rem)", duration: 0.8, ease: "expo.inOut" },
        )
        .from("[data-menu-item]", { yPercent: 120, duration: 0.8, stagger: 0.06 }, "-=0.35");
    },
    { scope: menu },
  );

  // The timeline follows `open`; lock page scroll and listen for Escape while open.
  useEffect(() => {
    if (open) tl.current?.timeScale(1).play();
    else tl.current?.timeScale(1.6).reverse();
    if (!open) return;
    window.__lenis?.stop();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.__lenis?.start();
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const go = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    scrollToHash(href);
    history.replaceState(null, "", href);
  };

  return (
    <>
      <header ref={root} className="nav-drop fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
        <nav
          aria-label="Navigasi utama"
          className={cn(
            "mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full pl-4 pr-2 transition-[background-color,box-shadow,backdrop-filter] duration-500",
            scrolled || open
              ? "bg-night/90 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)] ring-1 ring-white/10 backdrop-blur-md"
              : "bg-transparent",
          )}
        >
          <a
            href="#top"
            onClick={(e) => go(e, "#top")}
            className="group flex items-center gap-2.5 text-paper"
            aria-label={`${SITE.name} — kembali ke atas`}
          >
            <LogoMark
              id="nav-logo"
              className="h-7 w-auto transition-transform duration-500 ease-out-expo group-hover:-rotate-6 group-hover:scale-110"
            />
            <Wordmark />
          </a>

          <div className="relative hidden items-center md:flex" onMouseLeave={hideIndicator}>
            <span
              ref={indicator}
              aria-hidden
              className="absolute left-0 top-1/2 h-9 -translate-y-1/2 rounded-full bg-white/10 opacity-0"
            />
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => go(e, href)}
                onMouseEnter={moveIndicator}
                aria-current={active === href ? "true" : undefined}
                className={cn(
                  "relative px-4 py-2 text-sm transition-colors duration-300",
                  active === href ? "text-paper" : "text-white/60 hover:text-paper",
                )}
              >
                {label}
                <span
                  aria-hidden
                  className={cn(
                    "absolute bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-orange transition-transform duration-500 ease-out-expo",
                    active === href ? "scale-100" : "scale-0",
                  )}
                />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <MagneticButton href={whatsappUrl(DEFAULT_WA_MESSAGE)} variant="light">
                Konsultasi gratis
              </MagneticButton>
            </div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Tutup menu" : "Buka menu"}
              className="relative grid size-11 place-items-center rounded-full bg-white/10 text-paper md:hidden"
            >
              <span
                aria-hidden
                className={cn(
                  "absolute h-0.5 w-4.5 rounded bg-current transition-transform duration-500 ease-out-expo",
                  open ? "rotate-45" : "-translate-y-1",
                )}
              />
              <span
                aria-hidden
                className={cn(
                  "absolute h-0.5 w-4.5 rounded bg-current transition-transform duration-500 ease-out-expo",
                  open ? "-rotate-45" : "translate-y-1",
                )}
              />
            </button>
          </div>
        </nav>
      </header>

      <div
        ref={menu}
        id="mobile-menu"
        inert={!open}
        className="invisible fixed inset-0 z-40 flex flex-col justify-between bg-night px-6 pb-10 pt-28 text-paper md:hidden"
      >
        <ul className="space-y-1">
          {NAV_LINKS.map(({ href, label }, i) => (
            <li key={href} className="overflow-hidden">
              <a
                data-menu-item
                href={href}
                onClick={(e) => go(e, href)}
                className="flex items-baseline gap-4 py-2 font-display text-5xl font-semibold tracking-tight"
              >
                <span className="font-mono text-xs text-orange">0{i + 1}</span>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="overflow-hidden">
          <div data-menu-item className="space-y-4">
            <p className="text-sm text-white/50">Punya kendala yang ingin dibenahi?</p>
            <MagneticButton href={whatsappUrl(DEFAULT_WA_MESSAGE)} variant="light" size="lg">
              Konsultasi gratis via WhatsApp
            </MagneticButton>
          </div>
        </div>
      </div>
    </>
  );
}
