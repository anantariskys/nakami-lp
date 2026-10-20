import { SectionLabel } from "@/components/ui/SectionLabel";
import { AppCompare } from "./AppCompare";
import { CostCalculator } from "./CostCalculator";

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

        <div className="mt-24 grid gap-6 md:mt-32 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h3 data-split className="max-w-[20ch] font-display text-[clamp(1.75rem,3.6vw,3rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
              Berlangganan aplikasi jadi, atau membangun sendiri?
            </h3>
          </div>
          <p data-reveal className="max-w-sm text-muted">
            Aplikasi jadi lebih ringan di awal namun berbiaya rutin. Aplikasi sendiri membutuhkan investasi di
            depan dan sepenuhnya menjadi aset Anda. Sesuaikan angkanya untuk melihat titik impasnya.
          </p>
        </div>

        <div data-reveal className="mt-10">
          <CostCalculator />
        </div>
      </div>
    </section>
  );
}
