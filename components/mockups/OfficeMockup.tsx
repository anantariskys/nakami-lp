import { Check, ClipboardList, FileText, FolderKanban, LayoutDashboard, Plus, Receipt, Users, Wallet } from "lucide-react";
import { cn } from "@/lib/cn";
import { AppShell, Avatar, Badge, Card, PrimaryButton } from "./shared";

const STAGES = ["Staf", "Manajer", "Keuangan"];

const REQUESTS = [
  { who: "Budi Hartono", dept: "Gudang", need: "Pembelian rak penyimpanan", amount: "Rp 4.800.000", stage: 1, status: ["amber", "Menunggu manajer"], active: true },
  { who: "Lina Marlina", dept: "Pemasaran", need: "Biaya cetak brosur", amount: "Rp 1.250.000", stage: 2, status: ["blue", "Di keuangan"] },
  { who: "Rudi Setiawan", dept: "Operasional", need: "Servis mobil boks", amount: "Rp 2.100.000", stage: 3, status: ["green", "Disetujui"] },
  { who: "Fitri Handayani", dept: "Kantor", need: "Langganan internet", amount: "Rp 950.000", stage: 3, status: ["green", "Disetujui"] },
  { who: "Agus Salim", dept: "Gudang", need: "Seragam karyawan baru", amount: "Rp 3.300.000", stage: 1, status: ["red", "Perlu revisi"] },
  { who: "Nina Oktavia", dept: "Pemasaran", need: "Sewa booth pameran", amount: "Rp 6.500.000", stage: 2, status: ["blue", "Di keuangan"] },
] as const;

const HISTORY = [
  { who: "Budi Hartono", what: "mengajukan pembelian rak", when: "Hari ini, 09.12", done: true },
  { who: "Sistem", what: "melampirkan 3 penawaran harga", when: "Hari ini, 09.13", done: true },
  { who: "Sari Dewi (Manajer)", what: "sedang meninjau", when: "Menunggu", done: false },
  { who: "Tim Keuangan", what: "mencairkan dana", when: "Belum", done: false },
];

export function OfficeMockup() {
  return (
    <AppShell
      brand="PT Maju Bersama"
      brandColor="#2563EB"
      user={{ name: "Sari Dewi", role: "Manajer Operasional" }}
      nav={[
        { icon: LayoutDashboard, label: "Beranda" },
        { icon: Wallet, label: "Pengajuan dana", active: true, badge: "4" },
        { icon: ClipboardList, label: "Surat perintah kerja" },
        { icon: Receipt, label: "Tagihan" },
        { icon: FolderKanban, label: "Proyek" },
        { icon: Users, label: "Karyawan" },
        { icon: FileText, label: "Dokumen" },
      ]}
      title="Pengajuan dana"
      subtitle="4 pengajuan menunggu persetujuan Anda"
      actions={
        <PrimaryButton>
          <Plus className="size-4" /> Buat pengajuan
        </PrimaryButton>
      }
    >
      <div className="grid grid-cols-[1fr_330px] gap-4">
        <Card>
          <div className="flex gap-1 border-b border-black/[0.05] px-5 pt-4 text-[13px]">
            {["Semua (24)", "Menunggu (4)", "Disetujui (17)", "Perlu revisi (3)"].map((t, i) => (
              <span key={t} className={cn("px-3 pb-3", i === 1 ? "border-b-2 border-ink font-medium" : "text-muted")}>
                {t}
              </span>
            ))}
          </div>
          <table className="w-full text-left text-[12px]">
            <thead className="text-[11px] text-faint">
              <tr>
                <th className="px-5 py-3 font-normal">Pemohon</th>
                <th className="font-normal">Keperluan</th>
                <th className="font-normal">Nominal</th>
                <th className="font-normal">Tahap</th>
                <th className="px-5 text-right font-normal">Status</th>
              </tr>
            </thead>
            <tbody>
              {REQUESTS.map((r) => (
                <tr key={r.need} className={cn("border-t border-black/[0.05]", "active" in r && "bg-orange/[0.04]")}>
                  <td className="px-5 py-3.5">
                    <span className="flex items-center gap-3">
                      <Avatar name={r.who} size={28} />
                      <span>
                        <span className="block whitespace-nowrap font-medium">{r.who}</span>
                        <span className="block text-[11px] text-faint">{r.dept}</span>
                      </span>
                    </span>
                  </td>
                  <td className="pr-4">{r.need}</td>
                  <td className="whitespace-nowrap pr-4 font-medium">{r.amount}</td>
                  <td>
                    <span className="flex items-center gap-1">
                      {STAGES.map((s, i) => (
                        <span
                          key={s}
                          className={cn("h-1.5 w-6 rounded-full", i < r.stage ? "bg-emerald-500" : "bg-paper-3")}
                        />
                      ))}
                    </span>
                  </td>
                  <td className="px-5 text-right">
                    <span className="whitespace-nowrap"><Badge tone={r.status[0]}>{r.status[1]}</Badge></span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <Card className="p-5">
          <p className="text-[11px] text-faint">Pengajuan #PD-2026-0142</p>
          <p className="mt-1 text-[16px] font-semibold">Pembelian rak penyimpanan</p>
          <p className="mt-1 text-[22px] font-semibold tracking-tight">Rp 4.800.000</p>

          <p className="mt-5 text-[12px] font-medium text-muted">Riwayat</p>
          <ol className="mt-3 space-y-4">
            {HISTORY.map((h, i) => (
              <li key={i} className="flex gap-3">
                <span
                  className={cn(
                    "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full",
                    h.done ? "bg-emerald-500 text-white" : "ring-2 ring-black/10",
                  )}
                >
                  {h.done && <Check className="size-3" />}
                </span>
                <span className="text-[12px] leading-snug">
                  <span className="font-medium">{h.who}</span> <span className="text-muted">{h.what}</span>
                  <span className="mt-0.5 block text-[11px] text-faint">{h.when}</span>
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-6 grid grid-cols-2 gap-2 text-[13px] font-medium">
            <span className="rounded-lg py-2.5 text-center ring-1 ring-black/10">Minta revisi</span>
            <span className="rounded-lg bg-emerald-600 py-2.5 text-center text-white">Setujui</span>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
