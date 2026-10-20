import { cn } from "@/lib/cn";

interface SectionLabelProps {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}

export function SectionLabel({ children, tone = "light", className }: SectionLabelProps) {
  return (
    <p
      data-reveal
      className={cn(
        "flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em]",
        tone === "light" ? "text-muted" : "text-white/60",
        className,
      )}
    >
      {/* Numbered by a CSS counter on <main>, so hidden sections never leave gaps. */}
      <span aria-hidden className={cn("section-index", tone === "light" ? "text-orange-ink" : "text-orange")} />
      <span aria-hidden className={cn("h-px w-8", tone === "light" ? "bg-line-strong" : "bg-white/20")} />
      {children}
    </p>
  );
}
