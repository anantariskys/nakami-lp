import { ArrowUpRight, Check, Clock, FileCode2, GraduationCap, ServerCog, ShieldCheck } from "lucide-react";
import { INCLUDED, PAYMENT_TERMS, PRICING } from "@/lib/content";
import { whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/cn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MagneticButton } from "@/components/ui/MagneticButton";

const INCLUDED_ICONS = [ShieldCheck, FileCode2, GraduationCap, ServerCog];
const TERM_COLORS = ["bg-crimson", "bg-orange", "bg-amber"];

export function Pricing() {
  return (
    <section id="investasi" aria-labelledby="investasi-title" className="relative border-t border-line bg-paper-2 py-28 md:py-40">
      <div className="container-x">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <SectionLabel>Biaya</SectionLabel>
            <h2
              id="investasi-title"
              data-split
              className="mt-6 max-w-[16ch] font-display text-[clamp(2.25rem,5vw,4.25rem)] font-semibold leading-[1] tracking-[-0.04em]"
            >
              Harga jelas sejak awal, tanpa biaya kejutan.
            </h2>
          </div>
          <p data-reveal className="max-w-sm text-muted">
            Harga di bawah adalah titik awal. Setelah ngobrol, Anda mendapat harga pasti secara tertulis, dan
            angka itu tidak akan naik di tengah jalan.
          </p>
        </div>

        {/* Packages */}
        <ul data-reveal-group className="mt-16 grid gap-4 md:mt-20 lg:grid-cols-3">
          {PRICING.map((pkg) => (
            <li
              key={pkg.name}
              data-reveal
              data-spotlight
              className={cn(
                "relative flex flex-col rounded-[1.75rem] p-7 transition-[translate,box-shadow] duration-500 ease-out-expo hover:-translate-y-1 md:p-8",
                pkg.featured
                  ? "bg-night text-paper shadow-[0_24px_60px_-30px_rgba(0,0,0,0.5)]"
                  : "spotlight border border-line bg-paper hover:shadow-[0_24px_50px_-30px_rgba(0,0,0,0.2)]",
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl font-semibold tracking-tight">{pkg.name}</h3>
                {pkg.featured && (
                  <span className="shrink-0 rounded-full bg-orange px-3 py-1 text-[11px] font-semibold text-ink">
                    Paling sering dipilih
                  </span>
                )}
              </div>
              <p className={cn("mt-3 min-h-12 text-[0.95rem] leading-relaxed", pkg.featured ? "text-white/60" : "text-muted")}>
                {pkg.forWho}
              </p>

              <div className={cn("mt-7 border-t pt-7", pkg.featured ? "border-white/10" : "border-line")}>
                <p className={cn("text-sm", pkg.featured ? "text-white/50" : "text-muted")}>Mulai dari</p>
                <p className="mt-1 flex items-baseline gap-1.5 font-display font-semibold tracking-[-0.04em]">
                  <span className={cn("text-xl", pkg.featured ? "text-white/60" : "text-muted")}>Rp</span>
                  <span className="text-5xl">{pkg.price}</span>
                </p>
                <p
                  className={cn(
                    "mt-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs",
                    pkg.featured ? "bg-white/10 text-white/80" : "bg-paper-3 text-muted",
                  )}
                >
                  <Clock className="size-3.5" aria-hidden /> Selesai dalam {pkg.timeline}
                </p>
              </div>

              <ul className={cn("mt-7 space-y-3 text-[0.95rem]", pkg.featured ? "text-white/80" : "text-ink/80")}>
                {pkg.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-orange" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={whatsappUrl(`Halo Nakami Studio, saya ingin tanya paket ${pkg.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group/cta mt-9 flex items-center justify-between rounded-full py-2 pl-6 pr-2 text-sm font-medium transition-colors duration-300",
                  pkg.featured ? "bg-orange text-ink hover:bg-paper" : "bg-ink text-paper hover:bg-orange-ink",
                )}
              >
                Tanya paket ini
                <span className="grid size-9 place-items-center rounded-full bg-white/15">
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/cta:rotate-45" aria-hidden />
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Custom work */}
        <div
          data-reveal
          className="mt-4 flex flex-col gap-6 rounded-[1.75rem] border border-dashed border-line-strong bg-paper p-7 md:flex-row md:items-center md:justify-between md:p-8"
        >
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl font-semibold tracking-tight">Butuh aplikasi yang lebih khusus?</h3>
            <p className="mt-2 leading-relaxed text-muted">
              Aplikasi HP, aplikasi operasional kantor, atau menyambungkan aplikasi yang sudah ada. Harganya
              kami hitung setelah obrolan gratis, sesuai yang benar-benar Anda butuhkan.
            </p>
          </div>
          <MagneticButton href={whatsappUrl("Halo Nakami Studio, saya butuh aplikasi yang lebih khusus untuk usaha saya.")}>
            Minta perkiraan harga
          </MagneticButton>
        </div>

        {/* Included + payment */}
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <div data-reveal className="rounded-[1.75rem] border border-line bg-paper p-7 md:p-8">
            <h3 className="font-display text-xl font-semibold tracking-tight">Sudah termasuk di semua paket</h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {INCLUDED.map((item, i) => {
                const Icon = INCLUDED_ICONS[i];
                return (
                  <li key={item} className="flex items-center gap-3 text-[0.95rem]">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-orange/10 text-orange">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>

          <div data-reveal data-delay="0.08" className="rounded-[1.75rem] border border-line bg-paper p-7 md:p-8">
            <h3 className="font-display text-xl font-semibold tracking-tight">Dibayar 3 kali, sesuai kemajuan</h3>
            <div className="mt-6 flex h-2.5 gap-1" aria-hidden>
              {PAYMENT_TERMS.map((t, i) => (
                <span
                  key={t.label}
                  data-grow
                  data-delay={i * 0.15}
                  className={cn("h-full rounded-full", TERM_COLORS[i])}
                  style={{ width: `${t.percent}%` }}
                />
              ))}
            </div>
            <dl className="mt-5 grid grid-cols-3 gap-4">
              {PAYMENT_TERMS.map((t, i) => (
                <div key={t.label}>
                  <dt className="flex items-center gap-2 text-xs text-muted">
                    <span className={cn("size-2 rounded-full", TERM_COLORS[i])} aria-hidden />
                    {t.label}
                  </dt>
                  <dd className="mt-1 font-display text-3xl font-semibold tracking-tight">{t.percent}%</dd>
                  <dd className="mt-1 text-xs leading-snug text-muted">{t.when}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
