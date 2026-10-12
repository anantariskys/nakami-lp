"use client";

import React from "react";
import { createWhatsAppUrl } from "@/lib/constants";
import { ShieldCheck, ArrowRight, BookOpen, UserCheck, Award } from "lucide-react";

export function NonJokiManifesto() {
  return (
    <section id="manifesto-etis" className="py-20 sm:py-24 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800 border border-slate-700 text-xs font-mono font-medium text-amber-400 mb-6">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
          <span>PRINSIP INTEGRITAS & MENTORING ETIS</span>
        </div>

        {/* Main Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-14">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-[var(--font-display)] leading-[1.15] mb-6">
              Lulus sidang dengan menguasai setiap baris kode,{" "}
              <span className="text-[#FB6C00]">bukan menanggung risiko</span> hasil joki.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Jasa joki menawarkan kode siap pakai, namun meninggalkan Anda sendirian saat berhadapan dengan dosen penguji. Di Nakami Studio, kami melatih logika, membedah struktur arsitektur, dan mempersiapkan mental Anda agar mampu mempertahankan karya sendiri dengan percaya diri.
            </p>
          </div>

          <div className="lg:col-span-4 bg-slate-800/80 rounded-2xl border border-slate-700 p-6 space-y-4">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              KOMITMEN NAKAMI STUDIO
            </div>
            <p className="text-sm text-slate-200 leading-relaxed">
              &quot;Kami tidak menjual kode instan untuk diserahkan ke dosen. Kami mendampingi Anda sampai paham logika pemrogramannya dan siap menjawab pertanyaan teknis penguji.&quot;
            </p>
            <div className="pt-2 border-t border-slate-700/80 text-xs text-amber-400 font-mono">
              Nanta & Team Engineer Nakami
            </div>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="rounded-2xl border border-slate-800 bg-slate-800/50 p-6 sm:p-7">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-5">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Pemahaman Logika Penuh
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Anda memahami setiap fungsi, alur autentikasi, relasi database, dan alasan pemilihan algoritma. Tidak ada baris kode misterius yang tidak Anda ketahui fungsinya.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-800/50 p-6 sm:p-7">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Simulasi Sidang Realistis
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Kami melatih Anda dengan bank pertanyaan kritis yang sering ditanyakan dosen penguji IT, mulai dari normalisasi skema data hingga kompleksitas query.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-800/50 p-6 sm:p-7">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-5">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Portofolio Karier Mandiri
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Aplikasi tugas akhir yang Anda bangun menjadi bukti nyata kemampuan engineering saat wawancara kerja, bukan rahasia yang harus disembunyikan karena hasil joki.
            </p>
          </div>

        </div>

        {/* Action Button */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 font-mono text-center sm:text-left">
            Sesi mentoring dilakukan secara 1-on-1 melalui Google Meet & screen-share interaktif.
          </div>
          <a
            href={createWhatsAppUrl(
              "Halo Nakami Studio, saya mahasiswa IT yang sedang mengerjakan skripsi/proyek dan ingin bimbingan mentoring etis..."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#FB6C00] hover:bg-[#E73F1E] text-white text-sm font-bold transition-colors shadow-xs"
          >
            <span>Konsultasi Skripsi via WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
