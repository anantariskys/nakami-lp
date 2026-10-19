import { PRINCIPLES, STACK } from "@/lib/content";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Principles() {
  return (
    <section aria-labelledby="prinsip-title" className="relative overflow-hidden bg-paper py-28 md:py-40">
      <div className="container-x">
        <SectionLabel index="03">Komitmen</SectionLabel>
        <h2
          id="prinsip-title"
          data-split
          className="mt-6 max-w-[20ch] font-display text-[clamp(2.25rem,5vw,4.25rem)] font-semibold leading-[1] tracking-[-0.04em]"
        >
          Hal-hal yang kami tulis di kontrak, bukan di brosur.
        </h2>

        <div data-reveal-group className="mt-16 grid gap-4 md:mt-20 md:grid-cols-3">
          {PRINCIPLES.map((p) => (
            <article
              key={p.label}
              data-reveal
              data-spotlight
              className="spotlight group relative flex min-h-80 flex-col justify-between overflow-hidden rounded-[1.75rem] border border-line bg-paper-2 p-7 transition-[border-color,translate] duration-500 ease-out-expo hover:-translate-y-1 hover:border-orange/40 md:p-9"
            >
              <p className="font-display text-[clamp(3.75rem,7vw,5.75rem)] font-semibold leading-none tracking-[-0.06em]">
                <span data-count={p.value}>{p.value}</span>
                <span className="text-sunset text-[0.45em] tracking-[-0.03em]">{p.suffix}</span>
              </p>
              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight">{p.label}</h3>
                <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-24 md:mt-32" aria-label="Teknologi yang kami gunakan">
        <p data-reveal className="container-x mb-8 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
          Teknologi yang kami gunakan
        </p>
        <Marquee items={STACK} />
        <Marquee items={[...STACK].reverse()} reverse />
      </div>
    </section>
  );
}

function Marquee({ items, reverse = false }: { items: readonly string[]; reverse?: boolean }) {
  return (
    <div className="group relative flex overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      {[0, 1].map((copy) => (
        <ul
          key={copy}
          aria-hidden={copy === 1 || undefined}
          className="flex shrink-0 animate-marquee items-center gap-3 pr-3 [--marquee-duration:55s] group-hover:[animation-play-state:paused]"
          style={reverse ? { animationDirection: "reverse" } : undefined}
        >
          {items.map((item) => (
            <li
              key={item}
              className="whitespace-nowrap rounded-full border border-line px-5 py-2.5 font-display text-lg font-medium tracking-tight text-ink/70 transition-colors duration-300 hover:border-ink hover:text-ink md:text-xl"
            >
              {item}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
