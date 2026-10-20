"use client";

import { useRef, type AnchorHTMLAttributes, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap, useGSAP, FINE_POINTER, MOTION_OK } from "@/lib/gsap";
import { cn } from "@/lib/cn";

type Variant = "primary" | "light" | "ghost-dark" | "ghost-light";

interface MagneticButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: "md" | "lg";
  icon?: boolean;
}

const VARIANTS: Record<Variant, string> = {
  primary: "bg-ink text-paper [--fill:var(--color-orange)]",
  light: "bg-paper text-ink [--fill:var(--color-orange)] hover:text-paper",
  "ghost-dark": "text-paper ring-1 ring-inset ring-white/20 [--fill:var(--color-paper)] hover:text-ink",
  "ghost-light": "text-ink ring-1 ring-inset ring-line-strong [--fill:var(--color-ink)] hover:text-paper",
};

/**
 * Pill CTA with a magnetic pull toward the cursor and a liquid fill on hover.
 * Magnetism only runs for fine pointers with motion allowed.
 */
export function MagneticButton({
  href,
  children,
  variant = "primary",
  size = "md",
  icon = true,
  className,
  ...rest
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add(`${FINE_POINTER} and ${MOTION_OK}`, () => {
        const label = el.querySelector("[data-label]");
        const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "elastic.out(1, 0.4)" });
        const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "elastic.out(1, 0.4)" });
        const lxTo = gsap.quickTo(label, "x", { duration: 0.6, ease: "elastic.out(1, 0.4)" });
        const lyTo = gsap.quickTo(label, "y", { duration: 0.6, ease: "elastic.out(1, 0.4)" });

        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          const dx = e.clientX - (r.left + r.width / 2);
          const dy = e.clientY - (r.top + r.height / 2);
          xTo(dx * 0.28);
          yTo(dy * 0.38);
          lxTo(dx * 0.12);
          lyTo(dy * 0.16);
        };
        const leave = () => {
          xTo(0);
          yTo(0);
          lxTo(0);
          lyTo(0);
        };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        return () => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", leave);
        };
      });
    },
    { scope: ref },
  );

  const isExternal = href.startsWith("http");

  return (
    <a
      ref={ref}
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
      className={cn(
        "group/btn relative isolate inline-flex shrink-0 items-center whitespace-nowrap justify-center overflow-hidden rounded-full font-medium tracking-[-0.01em] transition-colors duration-500 ease-out-expo",
        size === "lg" ? "h-14 gap-3 pl-7 pr-2.5 text-[0.95rem]" : "h-12 gap-2.5 pl-5 pr-2 text-sm",
        !icon && (size === "lg" ? "pr-7" : "pr-5"),
        VARIANTS[variant],
        className,
      )}
    >
      {/* liquid fill */}
      <span
        aria-hidden
        className="absolute inset-0 -z-10 translate-y-full rounded-[50%_50%_0_0/100%_100%_0_0] bg-(--fill) transition-[translate,border-radius] duration-700 ease-out-expo group-hover/btn:translate-y-0 group-hover/btn:rounded-none"
      />
      <span data-label className="relative inline-flex items-center">
        {children}
      </span>
      {icon && (
        <span
          aria-hidden
          className={cn(
            "relative grid place-items-center overflow-hidden rounded-full bg-orange text-paper transition-colors duration-500",
            size === "lg" ? "size-10" : "size-8",
            variant === "primary" && "group-hover/btn:bg-ink",
            variant === "light" && "group-hover/btn:bg-ink",
            variant === "ghost-dark" && "group-hover/btn:bg-ink",
          )}
        >
          <ArrowUpRight className="size-4 transition-transform duration-500 ease-out-expo group-hover/btn:-translate-y-6 group-hover/btn:translate-x-6" />
          <ArrowUpRight className="absolute size-4 -translate-x-6 translate-y-6 transition-transform duration-500 ease-out-expo group-hover/btn:translate-x-0 group-hover/btn:translate-y-0" />
        </span>
      )}
    </a>
  );
}
