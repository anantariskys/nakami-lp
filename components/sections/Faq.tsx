"use client";

import { useId, useRef, useState } from "react";
import { Plus } from "lucide-react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { FAQS } from "@/lib/content";
import { SITE, whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/cn";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-paper py-28 md:py-40">
      <div className="container-x grid gap-14 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionLabel index="05">Tanya jawab</SectionLabel>
          <h2
            id="faq-title"
            data-split
            className="mt-6 font-display text-[clamp(2.25rem,5vw,4.25rem)] font-semibold leading-[1] tracking-[-0.04em]"
          >
            Yang sering ditanyakan.
          </h2>
          <p data-reveal className="mt-6 max-w-sm text-muted">
            Masih ada yang ingin ditanyakan?{" "}
            <a
              href={whatsappUrl("Halo Nakami Studio, saya punya pertanyaan:")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline decoration-orange decoration-2 underline-offset-4 transition-colors hover:text-orange"
            >
              Tanya langsung lewat WhatsApp
            </a>{" "}
            atau email ke{" "}
            <a href={`mailto:${SITE.email}`} className="text-ink underline decoration-line-strong underline-offset-4 hover:text-orange">
              {SITE.email}
            </a>
            .
          </p>
        </div>

        <ul data-reveal-group className="border-t border-line">
          {FAQS.map((faq, i) => (
            <FaqRow
              key={faq.question}
              index={i}
              question={faq.question}
              answer={faq.answer}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

interface FaqRowProps {
  index: number;
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}

function FaqRow({ index, question, answer, open, onToggle }: FaqRowProps) {
  const panel = useRef<HTMLDivElement>(null);
  const id = useId();
  const first = useRef(true);
  // Height is owned by GSAP after mount; React only sets the initial value.
  const [initialHeight] = useState(() => (open ? "auto" : 0));

  useGSAP(
    () => {
      const el = panel.current!;
      // Initial state is rendered by CSS; only animate real toggles.
      if (first.current) {
        first.current = false;
        return;
      }
      const reduce = !window.matchMedia(MOTION_OK).matches;
      gsap.to(el, {
        height: open ? "auto" : 0,
        duration: reduce ? 0 : 0.7,
        ease: "expo.inOut",
      });
      if (open && !reduce) {
        gsap.fromTo(el.firstElementChild, { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, delay: 0.15 });
      }
    },
    { dependencies: [open] },
  );

  return (
    <li data-reveal className="border-b border-line">
      <h3>
        <button
          type="button"
          id={`${id}-trigger`}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={onToggle}
          className="group flex w-full items-start gap-5 py-7 text-left md:py-8"
        >
          <span className="pt-1.5 font-mono text-xs text-faint">{String(index + 1).padStart(2, "0")}</span>
          <span
            className={cn(
              "flex-1 font-display text-lg font-medium leading-snug tracking-tight transition-colors duration-300 md:text-[1.4rem]",
              open ? "text-ink" : "text-ink/80 group-hover:text-ink",
            )}
          >
            {question}
          </span>
          <span
            aria-hidden
            className={cn(
              "grid size-9 shrink-0 place-items-center rounded-full transition-all duration-500 ease-out-expo",
              open ? "rotate-45 bg-orange text-paper" : "bg-paper-3 text-ink group-hover:bg-ink group-hover:text-paper",
            )}
          >
            <Plus className="size-4" />
          </span>
        </button>
      </h3>
      <div
        ref={panel}
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        inert={!open}
        className="overflow-hidden"
        style={{ height: initialHeight }}
      >
        <p className="max-w-2xl pb-8 pl-10 pr-12 leading-relaxed text-muted">{answer}</p>
      </div>
    </li>
  );
}
