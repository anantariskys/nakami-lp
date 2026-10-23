import { CreditCard, Cpu, LayoutDashboard, TabletSmartphone, type LucideIcon } from "lucide-react";
import { PROJECTS, type Project } from "@/lib/content";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CaseStage } from "./portfolio/CaseStage";
import { CaseGallery } from "./portfolio/CaseGallery";

const COMPONENT_ICONS: LucideIcon[] = [TabletSmartphone, Cpu, CreditCard, LayoutDashboard];

export function Portfolio() {
  const [featured, ...rest] = PROJECTS;
  if (!featured) return null;

  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="bg-paper-2 py-28 md:py-40">
      <div className="container-x">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <SectionLabel>Portfolio</SectionLabel>
            <h2
              id="portfolio-title"
              data-split
              className="mt-6 max-w-[16ch] font-display text-[clamp(2.25rem,5vw,4.25rem)] font-semibold leading-[1] tracking-[-0.04em]"
            >
              Hasil kerja kami.
            </h2>
          </div>
          <p data-reveal className="max-w-sm text-muted">
            Sistem yang sudah berjalan dan digunakan setiap hari, dari perangkat di lokasi hingga dashboard di ponsel
            pemiliknya.
          </p>
        </div>

        <div data-reveal className="mt-16 md:mt-20">
          <CaseStage project={featured} />
        </div>

        <CaseDetail project={featured} />

        {rest.length > 0 && (
          <ul data-reveal-group className="mt-24 grid gap-4 md:grid-cols-2">
            {rest.map((p) => (
              <li key={p.id} data-reveal>
                <CaseStage project={p} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function CaseDetail({ project: p }: { project: Project }) {
  return (
    <div id={`${p.id}-detail`} className="mt-20 md:mt-28">
      {/* Challenge → solution → scope */}
      <div data-reveal-group className="grid gap-10 md:grid-cols-3 md:gap-8">
        <div data-reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">Tantangan</p>
          <p className="mt-4 text-lg leading-relaxed text-muted">{p.problem}</p>
        </div>
        <div data-reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-orange-ink">Solusi</p>
          <p className="mt-4 text-lg leading-relaxed text-ink">{p.result}</p>
        </div>
        {p.scope && (
          <div data-reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">Ruang lingkup</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.scope.map((s) => (
                <li key={s} className="rounded-full bg-paper px-3.5 py-1.5 text-sm ring-1 ring-line">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* What we built */}
      {p.components && (
        <div className="mt-20 md:mt-24">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h3
              data-split
              className="max-w-[20ch] font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.035em]"
            >
              Empat aplikasi yang bekerja sebagai satu sistem.
            </h3>
            <p data-reveal className="max-w-sm text-sm text-muted">
              Setiap bagian dibangun terpisah agar mudah dirawat, lalu disatukan sehingga data mengalir otomatis dari
              booth ke dashboard.
            </p>
          </div>

          <ol data-reveal-group className="relative mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Connector line behind the step icons on wide screens */}
            <span
              aria-hidden
              data-grow
              className="pointer-events-none absolute left-[12%] right-[12%] top-[3.25rem] hidden h-px bg-gradient-to-r from-orange/0 via-orange/50 to-orange/0 lg:block"
            />
            {p.components.map((c, i) => {
              const Icon = COMPONENT_ICONS[i % COMPONENT_ICONS.length];
              return (
                <li
                  key={c.title}
                  data-reveal
                  data-spotlight
                  className="spotlight group relative flex flex-col rounded-[1.75rem] border border-line bg-paper p-7 transition-[translate,border-color] duration-500 ease-out-expo hover:-translate-y-1 hover:border-orange/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="relative z-10 grid size-12 place-items-center rounded-2xl bg-ink text-paper transition-colors duration-500 group-hover:bg-orange">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="font-mono text-xs text-faint">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h4 className="mt-8 font-display text-xl font-semibold leading-snug tracking-tight">{c.title}</h4>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{c.body}</p>
                  <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
                    {c.tech.map((t) => (
                      <li key={t} className="rounded-full bg-paper-2 px-2.5 py-1 font-mono text-[11px] text-muted ring-1 ring-line">
                        {t}
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ol>
        </div>
      )}

      {p.gallery && p.gallery.length > 0 && (
        <div data-reveal className="mt-20 md:mt-24">
          <CaseGallery images={p.gallery} label={`Tampilan ${p.client}`} />
        </div>
      )}

      {p.testimonial && (
        <blockquote data-reveal className="mt-20 max-w-3xl">
          <p className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-snug tracking-tight">
            “{p.testimonial.quote}”
          </p>
          <footer className="mt-5 text-sm text-muted">
            {p.testimonial.name} · {p.testimonial.role}
          </footer>
        </blockquote>
      )}
    </div>
  );
}
