import { SectionLabel } from "@/components/ui/SectionLabel";
import { AppCompare } from "./AppCompare";
import { SystemMap } from "./SystemMap";

export function Guide() {
  return (
    <section id="panduan" aria-labelledby="panduan-title" className="bg-paper py-28 md:py-40">
      <div className="container-x">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <SectionLabel>Panduan</SectionLabel>
            <h2
              id="panduan-title"
              data-split
              className="mt-6 max-w-[18ch] font-display text-[clamp(2.25rem,5vw,4.25rem)] font-semibold leading-[1] tracking-[-0.04em]"
            >
              Website, aplikasi web, atau aplikasi mobile?
            </h2>
          </div>
          <p data-reveal className="max-w-sm text-muted">
            Ketiganya kerap dianggap sama, padahal fungsinya berbeda. Ringkasan berikut membantu Anda menentukan
            solusi yang paling tepat sebelum berdiskusi dengan kami.
          </p>
        </div>

        <div data-reveal className="mt-16 md:mt-20">
          <AppCompare />
        </div>

        <div className="mt-28 md:mt-40">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p data-reveal className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                Mengenal jenis sistem
              </p>
              <h3
                data-split
                className="mt-5 max-w-[18ch] font-display text-[clamp(2rem,4.2vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.04em]"
              >
                Sistem apa yang dibutuhkan bisnis Anda?
              </h3>
            </div>
            <p data-reveal className="max-w-sm text-muted">
              Kasir, inventori, CRM, hingga ERP memiliki fungsi yang berbeda. Pilih kendala yang Anda hadapi untuk
              melihat sistem yang paling relevan.
            </p>
          </div>

          <div data-reveal className="mt-10 md:mt-14">
            <SystemMap />
          </div>
        </div>
      </div>
    </section>
  );
}
