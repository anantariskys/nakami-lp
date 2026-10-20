import { NAV_LINKS, SERVICES } from "@/lib/content";
import { DEFAULT_WA_MESSAGE, SITE, whatsappUrl } from "@/lib/site";
import { LogoMark } from "@/components/brand/Logo";
import { CurrentYear } from "./CurrentYear";

export function Footer() {
  const columns = [
    {
      title: "Navigasi",
      links: NAV_LINKS.map((l) => ({ href: l.href, label: l.label })),
    },
    {
      title: "Layanan",
      links: SERVICES.map((s) => ({ href: "#layanan", label: s.title })),
    },
    {
      title: "Kontak",
      links: [
        { href: whatsappUrl(DEFAULT_WA_MESSAGE), label: "WhatsApp" },
        { href: `mailto:${SITE.email}`, label: "Email" },
        { href: SITE.instagram, label: "Instagram" },
        { href: SITE.github, label: "GitHub" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-ink pt-20 text-paper">
      <div className="container-x grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="max-w-xs">
          <div className="flex items-center gap-3">
            <LogoMark id="footer-logo" className="h-8 w-auto" />
            <span className="font-display text-lg font-semibold tracking-tight">{SITE.name}</span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/50">
            Jasa pembuatan aplikasi untuk bisnis di Indonesia, dibuat sesuai cara kerja Anda.
          </p>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/55">{col.title}</p>
            <ul className="mt-5 space-y-3">
              {col.links.map((link) => {
                const external = link.href.startsWith("http");
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group inline-flex items-center gap-2 text-sm text-white/70 transition-colors duration-300 hover:text-paper"
                    >
                      <span className="h-px w-0 bg-orange transition-all duration-500 ease-out-expo group-hover:w-3" />
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        ))}
      </div>

      <div className="container-x mt-20 flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-white/55 sm:flex-row sm:justify-between">
        <p>
          © <CurrentYear /> {SITE.name}. Seluruh hak dilindungi.
        </p>
        <p>Dibuat di Indonesia.</p>
      </div>

      <p
        aria-hidden
        data-speed="-0.12"
        className="pointer-events-none select-none text-center font-display text-[25vw] font-bold leading-[0.72] tracking-[-0.07em] text-white/[0.04]"
      >
        nakami
      </p>
    </footer>
  );
}
