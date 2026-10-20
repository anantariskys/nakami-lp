import Image from "next/image";
import { ArrowUpRight, Quote } from "lucide-react";
import { PROJECTS, SAMPLE_PROJECTS, type Project } from "@/lib/content";
import { cn } from "@/lib/cn";
import { SectionLabel } from "@/components/ui/SectionLabel";

/**
 * Real projects from PROJECTS. In development, while the list is empty,
 * labelled SAMPLE_PROJECTS fill the layout; production renders nothing
 * (see SHOW_PORTFOLIO in lib/content).
 */
export function Portfolio() {
  const isSample = PROJECTS.length === 0;
  const projects = isSample ? SAMPLE_PROJECTS : PROJECTS;
  const [featured, ...rest] = projects;

  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="border-t border-line bg-paper-2 py-28 md:py-40">
      <div className="container-x">
        {isSample && (
          <p className="mb-10 rounded-2xl border border-dashed border-orange/50 bg-orange/[0.06] px-5 py-4 text-sm text-orange-ink">
            Mode development: ini contoh tata letak. Isi <code className="font-mono">PROJECTS</code> di{" "}
            <code className="font-mono">lib/content.ts</code> dengan proyek asli. Section ini tidak tampil di
            production sampai ada isinya.
          </p>
        )}

        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <SectionLabel>Portfolio</SectionLabel>
            <h2
              id="portfolio-title"
              data-split
              className="mt-6 max-w-[16ch] font-display text-[clamp(2.25rem,5vw,4.25rem)] font-semibold leading-[1] tracking-[-0.04em]"
            >
              Aplikasi yang sudah dipakai setiap hari.
            </h2>
          </div>
          <p data-reveal className="max-w-sm text-muted">
            Beberapa usaha yang sudah kami bantu, beserta apa yang berubah setelah aplikasinya dipakai.
          </p>
        </div>

        {featured && (
          <div data-reveal className="mt-16 md:mt-20">
            <ProjectCard project={featured} featured sample={isSample} />
          </div>
        )}

        {rest.length > 0 && (
          <ul data-reveal-group className="mt-4 grid gap-4 md:grid-cols-2">
            {rest.map((p) => (
              <li key={p.id} data-reveal>
                <ProjectCard project={p} sample={isSample} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project: p, featured = false, sample }: { project: Project; featured?: boolean; sample: boolean }) {
  const Wrapper = p.url ? "a" : "article";
  const linkProps = p.url ? { href: p.url, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Wrapper
      {...linkProps}
      className={cn(
        "group relative grid h-full overflow-hidden rounded-[1.75rem] border border-line bg-paper transition-[translate,box-shadow] duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]",
        featured && "lg:grid-cols-[1.2fr_1fr]",
      )}
    >
      <div className={cn("relative overflow-hidden bg-paper-3", featured ? "aspect-[16/10] lg:aspect-auto" : "aspect-[16/10]")}>
        <Image
          src={p.image.src}
          alt={p.image.alt}
          fill
          sizes={featured ? "(min-width: 1024px) 55vw, 100vw" : "(min-width: 768px) 45vw, 100vw"}
          className="object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
        />
        {sample && (
          <span className="absolute left-4 top-4 rounded-full bg-ink px-3 py-1 text-[11px] font-medium text-paper">
            Contoh
          </span>
        )}
      </div>

      <div className={cn("flex flex-col p-7", featured && "md:p-10")}>
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-faint">
          <span>{p.sector}</span>
          <span aria-hidden>·</span>
          <span>{p.year}</span>
        </p>
        <h3 className={cn("mt-3 font-display font-semibold tracking-tight", featured ? "text-3xl" : "text-2xl")}>
          {p.title}
        </h3>
        <p className="mt-1 text-sm text-muted">{p.client}</p>

        <dl className="mt-6 grid gap-4 text-[0.95rem] leading-relaxed">
          <div>
            <dt className="text-xs font-medium uppercase tracking-wider text-faint">Sebelumnya</dt>
            <dd className="mt-1 text-muted">{p.problem}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wider text-orange-ink">Sesudahnya</dt>
            <dd className="mt-1 text-ink">{p.result}</dd>
          </div>
        </dl>

        {p.highlight && (
          <p className="mt-6 flex items-baseline gap-3 border-t border-line pt-6">
            <span className="font-display text-4xl font-semibold tracking-[-0.04em]">{p.highlight.value}</span>
            <span className="text-sm text-muted">{p.highlight.label}</span>
          </p>
        )}

        {featured && p.testimonial && (
          <blockquote className="mt-6 rounded-2xl bg-paper-2 p-5">
            <Quote className="size-5 text-orange" aria-hidden />
            <p className="mt-2 text-[0.95rem] leading-relaxed">{p.testimonial.quote}</p>
            <footer className="mt-3 text-xs text-muted">
              {p.testimonial.name} · {p.testimonial.role}
            </footer>
          </blockquote>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-6">
          {p.tags.map((t) => (
            <span key={t} className="rounded-full bg-paper-2 px-3 py-1 text-[11px] text-muted ring-1 ring-line">
              {t}
            </span>
          ))}
          {p.url && (
            <ArrowUpRight
              className="ml-auto size-5 text-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
              aria-hidden
            />
          )}
        </div>
      </div>
    </Wrapper>
  );
}
