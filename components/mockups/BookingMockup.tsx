import { CalendarCheck, Check, ChevronLeft, ChevronRight, Clock, ShieldCheck, Star } from "lucide-react";
import { cn } from "@/lib/cn";
import { Avatar } from "./shared";

const SERVICES = [
  { name: "Pemeriksaan & konsultasi", time: "30 menit", price: "Rp 150.000" },
  { name: "Pembersihan karang gigi", time: "45 menit", price: "Rp 350.000", active: true },
  { name: "Tambal gigi", time: "60 menit", price: "Rp 400.000" },
];

const FULL = [3, 4, 10, 11, 17, 18, 25];
const SLOTS = [
  { t: "09.00", state: "taken" },
  { t: "09.45", state: "open" },
  { t: "10.30", state: "open" },
  { t: "11.15", state: "taken" },
  { t: "13.00", state: "selected" },
  { t: "13.45", state: "open" },
  { t: "14.30", state: "open" },
  { t: "15.15", state: "taken" },
  { t: "16.00", state: "open" },
];

/** Rendered at 1280×800 — the customer-facing booking page. */
export function BookingMockup() {
  return (
    <div className="h-[800px] w-[1280px] overflow-hidden bg-[#F4F7F6] font-sans text-ink">
      <header className="flex h-16 items-center border-b border-black/[0.06] bg-white px-10">
        <span className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-lg bg-[#0E9F8E] text-sm font-bold text-white">S</span>
          <span className="text-[15px] font-semibold">Klinik Gigi Senyum</span>
        </span>
        <span className="ml-auto flex items-center gap-1.5 text-[12px] text-muted">
          <Star className="size-3.5 fill-amber text-amber" /> 4,9 · Jl. Ijen No. 8, Malang
        </span>
      </header>

      <div className="grid grid-cols-[1fr_360px] gap-6 px-10 py-7">
        <div className="space-y-5">
          <div>
            <p className="text-[12px] font-medium text-[#0E9F8E]">Langkah 2 dari 3</p>
            <h1 className="mt-1 text-[24px] font-semibold tracking-tight">Pilih tanggal dan jam kunjungan</h1>
          </div>

          <div className="grid grid-cols-[1fr_300px] gap-5">
            <div className="rounded-2xl bg-white p-5 ring-1 ring-black/[0.06]">
              <div className="flex items-center justify-between">
                <p className="text-[15px] font-semibold">Oktober 2026</p>
                <span className="flex gap-1.5">
                  <span className="grid size-8 place-items-center rounded-lg ring-1 ring-black/[0.08]">
                    <ChevronLeft className="size-4" />
                  </span>
                  <span className="grid size-8 place-items-center rounded-lg ring-1 ring-black/[0.08]">
                    <ChevronRight className="size-4" />
                  </span>
                </span>
              </div>
              <div className="mt-4 grid grid-cols-7 gap-2 text-center text-[11px] text-faint">
                {["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"].map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>
              <div className="mt-2 grid grid-cols-7 gap-2 text-center text-[13px]">
                {Array.from({ length: 3 }).map((_, i) => (
                  <span key={`e${i}`} />
                ))}
                {Array.from({ length: 31 }).map((_, i) => {
                  const day = i + 1;
                  const past = day < 19;
                  const full = FULL.includes(day) || day === 26;
                  const selected = day === 24;
                  return (
                    <span
                      key={day}
                      className={cn(
                        "grid h-11 place-items-center rounded-xl",
                        selected && "bg-[#0E9F8E] font-semibold text-white",
                        !selected && past && "text-black/20",
                        !selected && !past && full && "text-black/25 line-through",
                        !selected && !past && !full && "bg-[#0E9F8E]/[0.07] font-medium text-[#0B7B6E]",
                      )}
                    >
                      {day}
                    </span>
                  );
                })}
              </div>
              <div className="mt-4 flex gap-5 text-[11px] text-muted">
                <span className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded bg-[#0E9F8E]/20" /> Tersedia
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded bg-black/10" /> Penuh
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-5 ring-1 ring-black/[0.06]">
              <p className="text-[15px] font-semibold">Sabtu, 24 Oktober</p>
              <p className="mt-1 text-[12px] text-muted">Dokter yang bertugas</p>
              <div className="mt-3 flex items-center gap-3 rounded-xl bg-paper-2 p-3">
                <Avatar name="Anisa Putri" size={36} />
                <div>
                  <p className="text-[13px] font-medium">drg. Anisa Putri</p>
                  <p className="text-[11px] text-muted">Dokter gigi umum</p>
                </div>
              </div>
              <p className="mt-5 text-[12px] text-muted">Jam yang tersedia</p>
              <div className="mt-2.5 grid grid-cols-3 gap-2">
                {SLOTS.map((s) => (
                  <span
                    key={s.t}
                    className={cn(
                      "rounded-lg py-2.5 text-center text-[13px]",
                      s.state === "selected" && "bg-[#0E9F8E] font-semibold text-white",
                      s.state === "open" && "ring-1 ring-black/[0.1]",
                      s.state === "taken" && "bg-paper-3 text-black/25 line-through",
                    )}
                  >
                    {s.t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 ring-1 ring-black/[0.06]">
            <p className="text-[13px] font-semibold">Layanan yang dipilih</p>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {SERVICES.map((s) => (
                <div
                  key={s.name}
                  className={cn(
                    "relative rounded-xl p-3.5 ring-1",
                    s.active ? "bg-[#0E9F8E]/[0.06] ring-2 ring-[#0E9F8E]" : "ring-black/[0.08]",
                  )}
                >
                  {s.active && (
                    <span className="absolute right-3 top-3 grid size-5 place-items-center rounded-full bg-[#0E9F8E] text-white">
                      <Check className="size-3" />
                    </span>
                  )}
                  <p className="text-[13px] font-medium">{s.name}</p>
                  <p className="mt-1 flex items-center gap-1 text-[11px] text-muted">
                    <Clock className="size-3" /> {s.time} · {s.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="flex h-fit flex-col rounded-2xl bg-white p-6 ring-1 ring-black/[0.06]">
          <p className="text-[15px] font-semibold">Ringkasan janji temu</p>
          <dl className="mt-4 space-y-3 text-[13px]">
            {[
              ["Layanan", "Pembersihan karang gigi"],
              ["Dokter", "drg. Anisa Putri"],
              ["Tanggal", "Sabtu, 24 Oktober 2026"],
              ["Jam", "13.00 – 13.45 WIB"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4">
                <dt className="text-muted">{k}</dt>
                <dd className="text-right font-medium">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-5 space-y-2 border-t border-dashed border-black/10 pt-4 text-[13px]">
            <div className="flex justify-between text-muted">
              <span>Biaya layanan</span>
              <span>Rp 350.000</span>
            </div>
            <div className="flex justify-between text-[16px] font-semibold">
              <span>Bayar DP sekarang</span>
              <span>Rp 50.000</span>
            </div>
          </div>
          <span className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#0E9F8E] py-3.5 text-[14px] font-semibold text-white">
            <CalendarCheck className="size-4" /> Konfirmasi & bayar DP
          </span>
          <p className="mt-4 flex items-start gap-2 text-[11px] leading-relaxed text-muted">
            <ShieldCheck className="mt-0.5 size-3.5 shrink-0 text-[#0E9F8E]" />
            Pengingat akan dikirim lewat WhatsApp sehari sebelum jadwal. Bisa ganti jadwal gratis sampai H-1.
          </p>
        </aside>
      </div>
    </div>
  );
}
