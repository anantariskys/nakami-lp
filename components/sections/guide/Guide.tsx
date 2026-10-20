import { SectionLabel } from "@/components/ui/SectionLabel";
import { AppCompare } from "./AppCompare";
import { CostCalculator } from "./CostCalculator";

export function Guide() {
  return (
    <section id="panduan" aria-labelledby="panduan-title" className="bg-paper py-28 md:py-40">
      <div className="container-x">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <SectionLabel>Panduan singkat</SectionLabel>
            <h2
              id="panduan-title"
              data-split
              className="mt-6 max-w-[18ch] font-display text-[clamp(2.25rem,5vw,4.25rem)] font-semibold leading-[1] tracking-[-0.04em]"
            >
              Website, aplikasi web, atau aplikasi HP?
            </h2>
          </div>
          <p data-reveal className="max-w-sm text-muted">
            Tiga istilah ini sering tertukar. Ini bedanya dalam bahasa sehari-hari, supaya Anda bisa menimbang
            sebelum ngobrol dengan kami.
          </p>
        </div>

        <div data-reveal className="mt-16 md:mt-20">
          <AppCompare />
        </div>

        <div className="mt-24 grid gap-6 md:mt-32 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h3 data-split className="max-w-[20ch] font-display text-[clamp(1.75rem,3.6vw,3rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
              Pakai aplikasi jadi, atau buat sendiri?
            </h3>
          </div>
          <p data-reveal className="max-w-sm text-muted">
            Aplikasi jadi murah di awal tapi dibayar terus. Aplikasi sendiri butuh biaya di depan, lalu jadi milik
            Anda. Geser angkanya untuk melihat kapan masing-masing lebih hemat.
          </p>
        </div>

        <div data-reveal className="mt-10">
          <CostCalculator />
        </div>
      </div>
    </section>
  );
}
