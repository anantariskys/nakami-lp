"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { ProjectImage } from "@/lib/content";
import { cn } from "@/lib/cn";

/** Horizontally scrolling screenshot strip with snap, arrows and progress. */
export function CaseGallery({ images, label }: { images: ProjectImage[]; label: string }) {
  const track = useRef<HTMLUListElement>(null);
  const [progress, setProgress] = useState(0);
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? el.scrollLeft / max : 0);
      setEdges({ start: el.scrollLeft < 8, end: el.scrollLeft > max - 8 });
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const step = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    el.scrollBy({ left: dir * ((card?.clientWidth ?? 400) + 16), behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex items-end justify-between gap-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">{label}</p>
        <div className="flex items-center gap-4">
          <div aria-hidden className="hidden h-px w-32 bg-line sm:block">
            <div className="h-px origin-left bg-ink transition-transform duration-300" style={{ transform: `scaleX(${Math.max(progress, 0.08)})` }} />
          </div>
          <div className="flex gap-2">
            {([-1, 1] as const).map((dir) => (
              <button
                key={dir}
                type="button"
                onClick={() => step(dir)}
                disabled={dir === -1 ? edges.start : edges.end}
                aria-label={dir === -1 ? "Gambar sebelumnya" : "Gambar berikutnya"}
                className="grid size-11 place-items-center rounded-full bg-paper text-ink ring-1 ring-inset ring-line transition-colors duration-300 hover:bg-ink hover:text-paper disabled:pointer-events-none disabled:opacity-35"
              >
                {dir === -1 ? <ArrowLeft className="size-4" aria-hidden /> : <ArrowRight className="size-4" aria-hidden />}
              </button>
            ))}
          </div>
        </div>
      </div>

      <ul
        ref={track}
        aria-label={label}
        className="-mx-5 mt-6 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto scroll-smooth px-5 pb-4 [scrollbar-width:none] md:mx-0 md:scroll-px-0 md:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {images.map((img, i) => (
          <li key={img.src} className="w-[85%] shrink-0 snap-start sm:w-[60%] lg:w-[46%]">
            <figure className="group">
              <div className="overflow-hidden rounded-2xl bg-paper-3 ring-1 ring-line transition-[box-shadow,translate] duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]">
                <div aria-hidden className="flex h-7 items-center gap-1.5 border-b border-line bg-paper px-3">
                  <span className="size-2 rounded-full bg-line-strong" />
                  <span className="size-2 rounded-full bg-line-strong" />
                  <span className="size-2 rounded-full bg-line-strong" />
                </div>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1600}
                  height={1000}
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 60vw, 85vw"
                  className="h-auto w-full"
                />
              </div>
              {img.caption && (
                <figcaption className="mt-3 flex items-baseline gap-3 text-sm">
                  <span className="font-mono text-xs text-faint">{String(i + 1).padStart(2, "0")}</span>
                  <span className={cn("font-medium")}>{img.caption}</span>
                </figcaption>
              )}
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}
