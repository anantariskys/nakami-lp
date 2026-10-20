import type { LucideIcon } from "lucide-react";
import { Bell, Search } from "lucide-react";
import { cn } from "@/lib/cn";

/*
 * Building blocks for the service mockups. These pages exist only to be
 * screenshotted into /public/services (see scripts/capture-mockups.mjs).
 */

export interface NavItem {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  badge?: string;
}

interface AppShellProps {
  brand: string;
  brandColor: string;
  nav: NavItem[];
  user: { name: string; role: string };
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}

export function AppShell({ brand, brandColor, nav, user, title, subtitle, actions, children }: AppShellProps) {
  return (
    <div className="flex h-[800px] w-[1280px] overflow-hidden bg-[#F6F6F4] font-sans text-ink">
      <aside className="flex w-60 shrink-0 flex-col border-r border-black/[0.06] bg-white px-4 py-5">
        <div className="flex items-center gap-2.5 px-2">
          <span
            className="grid size-8 place-items-center rounded-lg text-sm font-bold text-white"
            style={{ background: brandColor }}
          >
            {brand.charAt(0)}
          </span>
          <span className="text-[15px] font-semibold tracking-tight">{brand}</span>
        </div>
        <nav className="mt-8 space-y-0.5">
          {nav.map(({ icon: Icon, label, active, badge }) => (
            <span
              key={label}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px]",
                active ? "bg-ink text-white" : "text-muted",
              )}
            >
              <Icon className="size-4" />
              {label}
              {badge && (
                <span
                  className={cn(
                    "ml-auto rounded-full px-1.5 text-[10px] font-medium",
                    active ? "bg-white/20" : "bg-orange/10 text-orange",
                  )}
                >
                  {badge}
                </span>
              )}
            </span>
          ))}
        </nav>
        <div className="mt-auto flex items-center gap-3 rounded-xl bg-paper-3 p-3">
          <Avatar name={user.name} />
          <div className="min-w-0">
            <p className="truncate text-[13px] font-medium">{user.name}</p>
            <p className="text-[11px] text-faint">{user.role}</p>
          </div>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 shrink-0 items-center gap-4 border-b border-black/[0.06] bg-white px-8">
          <div className="flex w-80 items-center gap-2 rounded-lg bg-paper-3 px-3 py-2 text-[13px] text-faint">
            <Search className="size-4" /> Cari apa saja…
          </div>
          <div className="ml-auto flex items-center gap-3">
            <span className="relative grid size-9 place-items-center rounded-lg border border-black/[0.06] text-muted">
              <Bell className="size-4" />
              <span className="absolute right-2 top-2 size-1.5 rounded-full bg-orange" />
            </span>
            <Avatar name={user.name} />
          </div>
        </header>
        <main className="min-h-0 flex-1 overflow-hidden px-8 py-6">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h1 className="text-[22px] font-semibold tracking-tight">{title}</h1>
              {subtitle && <p className="mt-1 text-[13px] text-muted">{subtitle}</p>}
            </div>
            {actions}
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}

const AVATAR_COLORS = ["#FB6C00", "#E73F1E", "#0EA5E9", "#10B981", "#8B5CF6", "#F59E0B"];

export function Avatar({ name, size = 32 }: { name: string; size?: number }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
  const color = AVATAR_COLORS[name.length % AVATAR_COLORS.length];
  return (
    <span
      className="grid shrink-0 place-items-center rounded-full text-[11px] font-semibold text-white"
      style={{ width: size, height: size, background: color }}
    >
      {initials}
    </span>
  );
}

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("rounded-2xl border border-black/[0.06] bg-white", className)}>{children}</div>;
}

const BADGE_TONES = {
  green: "bg-emerald-50 text-emerald-700",
  amber: "bg-amber-50 text-amber-700",
  red: "bg-red-50 text-red-600",
  blue: "bg-sky-50 text-sky-700",
  gray: "bg-paper-3 text-muted",
} as const;

export function Badge({ tone, children }: { tone: keyof typeof BADGE_TONES; children: React.ReactNode }) {
  return (
    <span className={cn("inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium", BADGE_TONES[tone])}>
      {children}
    </span>
  );
}

export function PrimaryButton({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-[13px] font-medium text-white", className)}>
      {children}
    </span>
  );
}
