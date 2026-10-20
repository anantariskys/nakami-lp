import { INDUSTRIES } from "@/lib/content";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Statement() {
  return (
    <section aria-labelledby="statement-title" className="relative bg-paper py-28 md:py-44">
      <div className="container-x">
        <SectionLabel>Kenapa perlu aplikasi sendiri</SectionLabel>

        <h2 id="statement-title" className="sr-only">
          Masalah sehari-hari yang kami bantu selesaikan
        </h2>

        <p
          data-scrub-words
          className="mt-10 max-w-[22ch] text-balance font-display text-[clamp(2rem,5.2vw,4.6rem)] font-medium leading-[1.04] tracking-[-0.035em] text-ink md:mt-14"
        >
          Stok dicatat di buku. Pesanan tercecer di chat. Laporan baru selesai jam sebelas malam. Usaha
          Anda makin ramai, tapi cara kerjanya masih serba manual.
        </p>

        <div className="mt-16 grid gap-10 border-t border-line pt-10 md:mt-24 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <p data-reveal className="max-w-md text-lg leading-relaxed text-muted">
            Aplikasi jadi yang dijual umum sering memaksa Anda menyesuaikan diri. Kami sebaliknya: kami
            pelajari dulu cara kerja Anda, lalu buatkan aplikasi yang pas dengannya.
          </p>
          <div data-reveal data-delay="0.1">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">Cocok untuk usaha seperti</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {INDUSTRIES.map((industry) => (
                <li
                  key={industry}
                  className="rounded-full border border-line px-4 py-2 text-sm text-ink transition-colors duration-300 hover:border-orange hover:text-orange"
                >
                  {industry}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
