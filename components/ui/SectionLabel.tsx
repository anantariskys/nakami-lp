import { cn } from "@/lib/cn";

interface SectionLabelProps {
  index: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}

export function SectionLabel({ index, children, tone = "light", className }: SectionLabelProps) {
  return (
    <p
      data-reveal
      className={cn(
        "flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em]",
        tone === "light" ? "text-muted" : "text-white/60",
        className,
      )}
    >
      <span className={tone === "light" ? "text-orange-ink" : "text-orange"}>{index}</span>
      <span aria-hidden className={cn("h-px w-8", tone === "light" ? "bg-line-strong" : "bg-white/20")} />
      {children}
    </p>
  );
}
