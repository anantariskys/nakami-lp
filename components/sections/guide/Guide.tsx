import { Check } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AppCompare } from "./AppCompare";
import { CostCalculator } from "./CostCalculator";

const CHOICES = [
  {
    kicker: "Berlangganan aplikasi jadi",
    title: "Tepat bila kebutuhan Anda masih standar",
    color: "#2563eb",
    when: [
      "Proses bisnis umum dan dapat mengikuti alur aplikasi",
      "Ingin mulai secepatnya dengan anggaran awal terbatas",
      "Jumlah cabang dan pengguna masih sedikit",
    ],
    note: "biaya berjalan selama digunakan, serta fitur dan data bergantung pada penyedia.",
  },
  {
    kicker: "Membangun aplikasi sendiri",
    title: "Tepat bila bisnis Anda punya cara kerja khas",
    color: "#c2410c",
    when: [
      "Alur kerja khusus yang tidak terakomodasi aplikasi jadi",
      "Cabang dan pengguna terus bertambah",
      "Data dan sistem ingin sepenuhnya menjadi milik sendiri",
      "Perlu terhubung dengan sistem lain yang sudah berjalan",
    ],
    note: "membutuhkan investasi awal dan waktu pengembangan sebelum dapat digunakan.",
  },
];

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
                Berlangganan atau membangun sendiri
              </p>
              <h3
                data-split
                className="mt-5 max-w-[16ch] font-display text-[clamp(2rem,4.2vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.04em]"
              >
                Mana yang lebih ekonomis untuk bisnis Anda?
              </h3>
            </div>
            <p data-reveal className="max-w-sm text-muted">
              Aplikasi jadi ringan di awal namun berbiaya rutin. Aplikasi sendiri membutuhkan investasi di depan,
              lalu menjadi aset Anda. Simulasikan kapan titik impasnya tercapai.
            </p>
          </div>

          <div data-reveal className="mt-10 md:mt-14">
            <CostCalculator />
          </div>

          <ul data-reveal-group className="mt-4 grid gap-4 md:grid-cols-2">
            {CHOICES.map((choice) => (
              <li
                key={choice.title}
                data-reveal
                className="rounded-[1.75rem] border border-line bg-paper p-7 md:p-9"
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: choice.color }}
                  />
                  <p className="text-sm font-medium text-muted">{choice.kicker}</p>
                </div>
                <h4 className="mt-4 font-display text-2xl font-semibold tracking-tight">{choice.title}</h4>
                <ul className="mt-6 space-y-3">
                  {choice.when.map((item) => (
                    <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed">
                      <Check className="mt-1 size-4 shrink-0 text-orange-ink" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-line pt-5 text-sm leading-relaxed text-muted">
                  <span className="font-medium text-ink">Perlu diperhatikan: </span>
                  {choice.note}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
