import { Check } from "lucide-react";
import { PAYMENT_TERMS, PRICING } from "@/lib/content";
import { whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/cn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Pricing() {
  return (
    <section
      id="investasi"
      aria-labelledby="investasi-title"
      className="relative border-t border-line bg-paper-2 py-28 md:py-40"
    >
      <div className="container-x">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <SectionLabel index="04">Investasi</SectionLabel>
            <h2
              id="investasi-title"
              data-split
              className="mt-6 max-w-[17ch] font-display text-[clamp(2.25rem,5vw,4.25rem)] font-semibold leading-[1] tracking-[-0.04em]"
            >
              Harga jelas sebelum satu baris kode ditulis.
            </h2>
          </div>
          <p data-reveal className="max-w-sm text-muted">
            Setiap proyek dihitung dari ruang lingkup yang disepakati bersama. Angka di kontrak adalah
            angka akhir.
          </p>
        </div>

        <ul data-reveal-group className="mt-16 grid gap-4 sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
          {PRICING.map((tier) => (
            <li
              key={tier.name}
              data-reveal
              data-spotlight
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-[1.75rem] p-7 transition-[translate,box-shadow] duration-500 ease-out-expo hover:-translate-y-1.5",
                tier.featured
                  ? "grain bg-night text-paper shadow-[0_30px_60px_-30px_rgba(251,108,0,0.35)]"
                  : "spotlight border border-line bg-paper hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.25)]",
              )}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold tracking-tight">{tier.name}</h3>
                {tier.featured && (
                  <span className="rounded-full bg-orange px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-paper">
                    Populer
                  </span>
                )}
              </div>
              <p className={cn("mt-10 text-xs", tier.featured ? "text-white/50" : "text-faint")}>{tier.note}</p>
              <p className="mt-1 font-display text-[2.1rem] font-semibold leading-none tracking-[-0.04em]">{tier.price}</p>
              <p className={cn("mt-3 font-mono text-[11px] uppercase tracking-wider", tier.featured ? "text-amber" : "text-orange")}>
                {tier.timeline}
              </p>
              <ul className={cn("mt-8 space-y-3 border-t pt-6 text-sm", tier.featured ? "border-white/10 text-white/75" : "border-line text-muted")}>
                {tier.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-orange" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <div aria-hidden className="min-h-8 flex-1" />
              <a
                href={whatsappUrl(`Halo Nakami Studio, saya ingin konsultasi paket ${tier.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-between rounded-full px-5 py-3 text-sm font-medium transition-colors duration-300",
                  tier.featured ? "bg-paper text-ink hover:bg-orange hover:text-paper" : "bg-ink/[0.04] text-ink hover:bg-ink hover:text-paper",
                )}
              >
                Konsultasi paket
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Payment terms */}
        <div className="mt-6 grid gap-8 rounded-[1.75rem] border border-line bg-paper p-7 md:grid-cols-[16rem_1fr] md:items-center md:p-9">
          <div data-reveal>
            <h3 className="font-display text-xl font-semibold tracking-tight">Pembayaran 3 termin</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">Setiap pembayaran terikat pada hasil kerja yang bisa Anda lihat.</p>
          </div>
          <div>
            <div className="flex h-3 gap-1 overflow-hidden rounded-full" aria-hidden>
              {PAYMENT_TERMS.map((t, i) => (
                <span
                  key={t.label}
                  data-grow
                  data-delay={i * 0.15}
                  className={cn("h-full rounded-full", i === 0 ? "bg-crimson" : i === 1 ? "bg-orange" : "bg-amber")}
                  style={{ width: `${t.percent}%` }}
                />
              ))}
            </div>
            <dl className="mt-5 grid grid-cols-3 gap-4">
              {PAYMENT_TERMS.map((t) => (
                <div key={t.label} data-reveal>
                  <dt className="text-xs text-muted">{t.label}</dt>
                  <dd className="mt-1 font-display text-2xl font-semibold tracking-tight md:text-3xl">{t.percent}%</dd>
                  <dd className="mt-1 text-xs leading-snug text-faint">{t.when}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div data-reveal className="mt-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="max-w-lg text-muted">
            Belum yakin kebutuhan Anda masuk kategori mana? Sesi discovery 30 menit pertama gratis, tanpa
            kewajiban.
          </p>
          <MagneticButton href={whatsappUrl("Halo Nakami Studio, saya ingin menjadwalkan sesi discovery gratis.")} size="lg">
            Jadwalkan discovery gratis
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
