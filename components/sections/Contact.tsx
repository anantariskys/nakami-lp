"use client";

import { useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { afterIdle } from "@/lib/idle";
import { BRIEF_BUDGETS, BRIEF_NEEDS } from "@/lib/content";
import { SITE, whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/cn";
import { LogoMark } from "@/components/brand/Logo";
import { SectionLabel } from "@/components/ui/SectionLabel";

type Status = "idle" | "error" | "sent";

export function Contact() {
  const root = useRef<HTMLElement>(null);
  const [needs, setNeeds] = useState<string[]>([]);
  const [budget, setBudget] = useState<string>(BRIEF_BUDGETS[4]);
  const [status, setStatus] = useState<Status>("idle");

  useGSAP(
    (_, contextSafe) =>
      afterIdle(
        contextSafe!(() => {
          gsap.matchMedia().add(MOTION_OK, () => {
            // Logo assembles itself as the section scrolls in.
            const tl = gsap.timeline({
              scrollTrigger: { trigger: root.current, start: "top 70%", end: "top 10%", scrub: 1 },
            });
            tl.from('[data-logo-part="left"]', { yPercent: 40, autoAlpha: 0 }, 0)
              .from('[data-logo-part="right"]', { yPercent: -40, autoAlpha: 0 }, 0)
              .from(
                '[data-logo-part="band"]',
                { scale: 0.6, rotate: -12, autoAlpha: 0, transformOrigin: "50% 50%" },
                0.1,
              );
          });
        }),
      ),
    { scope: root },
  );

  const toggleNeed = (need: string) =>
    setNeeds((prev) => (prev.includes(need) ? prev.filter((n) => n !== need) : [...prev, need]));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setStatus("error");
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    const message = [
      "Halo Nakami Studio, saya ingin konsultasi soal aplikasi untuk usaha saya.",
      "",
      `Nama: ${data.get("name")}`,
      data.get("company") ? `Bisnis: ${data.get("company")}` : null,
      needs.length ? `Kebutuhan: ${needs.join(", ")}` : null,
      `Perkiraan dana: ${budget}`,
      "",
      `Kendala: ${data.get("message")}`,
    ]
      .filter((line) => line !== null)
      .join("\n");

    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
    setStatus("sent");
  };

  return (
    <section
      ref={root}
      id="kontak"
      aria-labelledby="kontak-title"
      className="grain relative isolate overflow-hidden bg-night py-28 text-paper md:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-60 -top-20 -z-10 size-[56rem] bg-[radial-gradient(closest-side,rgba(251,108,0,0.2),transparent)]"
      />

      <div className="container-x grid gap-16 lg:grid-cols-[1fr_minmax(0,34rem)] lg:gap-20">
        <div className="flex flex-col">
          <SectionLabel index="06" tone="dark">
            Mulai dari obrolan
          </SectionLabel>
          <h2
            id="kontak-title"
            data-split
            className="mt-6 max-w-[14ch] font-display text-[clamp(2.5rem,6vw,5.25rem)] font-semibold leading-[0.98] tracking-[-0.045em]"
          >
            Ceritakan kendalanya. Kami carikan jalan keluarnya.
          </h2>
          <p data-reveal className="mt-8 max-w-md text-lg leading-relaxed text-white/60">
            Tidak perlu istilah teknis. Ceritakan saja dengan bahasa Anda sendiri, lalu kita lanjutkan obrolannya di
            WhatsApp.
          </p>

          <div className="mt-auto hidden pt-16 lg:block" aria-hidden>
            <LogoMark id="contact-logo" className="h-44 w-auto" />
          </div>

          <dl data-reveal className="mt-12 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-2 lg:mt-12">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/55">Email</dt>
              <dd className="mt-2">
                <a href={`mailto:${SITE.email}`} className="text-white/85 transition-colors hover:text-orange">
                  {SITE.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/55">Jam kerja</dt>
              <dd className="mt-2 text-white/85">Senin–Sabtu, 09.00–21.00 WIB</dd>
            </div>
          </dl>
        </div>

        <form
          data-reveal
          noValidate
          onSubmit={onSubmit}
          className="relative rounded-[1.75rem] bg-paper p-6 text-ink shadow-[0_40px_120px_-40px_rgba(251,108,0,0.5)] md:p-9"
          aria-describedby="brief-hint"
        >
          <fieldset>
            <legend className="text-sm font-medium">Apa yang Anda butuhkan? (boleh pilih lebih dari satu)</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {BRIEF_NEEDS.map((need) => {
                const checked = needs.includes(need);
                return (
                  <label
                    key={need}
                    className={cn(
                      "relative cursor-pointer select-none rounded-full px-3.5 py-2 text-sm ring-1 ring-inset transition-all duration-300 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-orange",
                      checked ? "bg-ink text-paper ring-ink" : "text-muted ring-line hover:text-ink hover:ring-ink/40",
                    )}
                  >
                    <input type="checkbox" className="sr-only" checked={checked} onChange={() => toggleNeed(need)} />
                    <span className="inline-flex items-center gap-1.5">
                      {checked && <Check className="size-3.5 text-orange" aria-hidden />}
                      {need}
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <fieldset className="mt-7">
            <legend className="text-sm font-medium">Perkiraan dana</legend>
            <div className="mt-3 grid grid-cols-2 gap-1 rounded-2xl bg-paper-3 p-1 sm:grid-cols-5">
              {BRIEF_BUDGETS.map((b) => (
                <label
                  key={b}
                  className={cn(
                    "cursor-pointer rounded-xl px-2 py-2.5 text-center text-xs transition-all duration-300 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-orange",
                    budget === b ? "bg-paper font-medium text-ink shadow-sm" : "text-muted hover:text-ink",
                  )}
                >
                  <input
                    type="radio"
                    name="budget"
                    value={b}
                    className="sr-only"
                    checked={budget === b}
                    onChange={() => setBudget(b)}
                  />
                  {b}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <Field label="Nama" name="name" autoComplete="name" required />
            <Field label="Nama bisnis" name="company" autoComplete="organization" optional />
          </div>
          <div className="mt-4">
            <Field label="Ceritakan kendala yang ingin dibenahi" name="message" textarea required />
          </div>

          <p id="brief-hint" className={cn("mt-4 text-xs", status === "error" ? "text-crimson" : "text-faint")}>
            {status === "error"
              ? "Mohon isi nama dan ceritakan sedikit kendalanya dulu."
              : status === "sent"
                ? "Pesan sudah disiapkan di WhatsApp. Tinggal tekan kirim."
                : "Data Anda tidak kami simpan di sini. Pesan akan terbuka di WhatsApp, tinggal tekan kirim."}
          </p>

          <button
            type="submit"
            className="group/submit relative mt-6 flex h-14 w-full items-center justify-between overflow-hidden rounded-full bg-ink pl-7 pr-2 text-sm font-medium text-paper"
          >
            <span
              aria-hidden
              className="absolute inset-0 origin-left scale-x-0 bg-sunset transition-transform duration-700 ease-out-expo group-hover/submit:scale-x-100"
            />
            <span className="relative">Lanjutkan di WhatsApp</span>
            <span className="relative grid size-10 place-items-center rounded-full bg-orange transition-colors duration-500 group-hover/submit:bg-ink">
              <ArrowUpRight
                className="size-4 transition-transform duration-500 ease-out-expo group-hover/submit:rotate-45"
                aria-hidden
              />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  name: string;
  autoComplete?: string;
  required?: boolean;
  optional?: boolean;
  textarea?: boolean;
}

function Field({ label, name, autoComplete, required, optional, textarea }: FieldProps) {
  const shared =
    "peer w-full rounded-2xl border border-line bg-paper-2 px-4 pb-2.5 pt-6 text-[0.95rem] text-ink outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-transparent focus:border-orange focus:bg-paper focus:shadow-[0_0_0_4px_rgba(251,108,0,0.12)] user-invalid:border-crimson";
  return (
    <label className="relative block">
      {textarea ? (
        <textarea name={name} required={required} rows={4} placeholder={label} className={cn(shared, "resize-none")} />
      ) : (
        <input
          name={name}
          type="text"
          required={required}
          autoComplete={autoComplete}
          placeholder={label}
          className={shared}
        />
      )}
      <span className="pointer-events-none absolute left-4 top-4 origin-left text-[0.95rem] text-faint transition-all duration-300 ease-out-expo peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-orange peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[11px]">
        {label}
        {optional && <span className="ml-1 text-faint">(opsional)</span>}
      </span>
    </label>
  );
}
