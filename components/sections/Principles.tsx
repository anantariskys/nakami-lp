import { PRINCIPLES } from "@/lib/content";
import { TECH } from "@/lib/tech";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Principles() {
  return (
    <section aria-labelledby="prinsip-title" className="relative overflow-hidden bg-paper py-28 md:py-40">
      <div className="container-x">
        <SectionLabel>Komitmen kami</SectionLabel>
        <h2
          id="prinsip-title"
          data-split
          className="mt-6 max-w-[20ch] font-display text-[clamp(2.25rem,5vw,4.25rem)] font-semibold leading-[1] tracking-[-0.04em]"
        >
          Komitmen yang kami tuangkan dalam kontrak.
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

      <div className="mt-24 md:mt-32">
        <div data-reveal className="container-x mb-10 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">Teknologi yang kami gunakan</h3>
          <p className="max-w-md text-sm text-muted">
            Teknologi modern yang andal, aman, dan mudah dipelihara dalam jangka panjang.
          </p>
        </div>
        <LogoMarquee />
      </div>
    </section>
  );
}

function LogoMarquee() {
  return (
    <div
      data-marquee
      className="group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
    >
      {[0, 1].map((copy) => (
        <ul
          key={copy}
          aria-hidden={copy === 1 || undefined}
          className="flex shrink-0 animate-marquee items-center gap-3 pr-3 [--marquee-duration:60s] [animation-play-state:paused] group-data-running:[animation-play-state:running] group-hover:[animation-play-state:paused]"
        >
          {TECH.map((icon) => (
            <li
              key={icon.slug}
              style={{ "--brand": `#${icon.hex}` } as React.CSSProperties}
              className="flex items-center gap-3 whitespace-nowrap rounded-2xl border border-line bg-paper px-5 py-4 text-ink/45 transition-[color,border-color] duration-300 hover:border-(--brand)/40 hover:text-(--brand)"
            >
              <svg viewBox="0 0 24 24" className="size-7 shrink-0 fill-current" aria-hidden>
                <path d={icon.path} />
              </svg>
              <span className="text-sm font-medium text-ink/70">{icon.title}</span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
