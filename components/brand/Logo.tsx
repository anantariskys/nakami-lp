import { cn } from "@/lib/cn";

interface LogoMarkProps {
  /** Unique per instance — scopes the SVG gradient and mask ids. */
  id: string;
  className?: string;
  title?: string;
}

/**
 * Vector rebuild of the Nakami "N" monogram. Each stroke is its own element
 * (`data-logo-part`) so it can be animated independently.
 */
export function LogoMark({ id, className, title }: LogoMarkProps) {
  const ref = (name: string) => `${id}-${name}`;

  return (
    <svg
      viewBox="0 0 750 850"
      className={cn("shrink-0", className)}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <defs>
        <linearGradient id={ref("band")} gradientUnits="userSpaceOnUse" x1="60" y1="40" x2="720" y2="820">
          <stop offset="0" stopColor="#F9952A" />
          <stop offset="0.55" stopColor="#FB6C00" />
          <stop offset="1" stopColor="#F2552B" />
        </linearGradient>
        <linearGradient id={ref("left")} x1="0.2" y1="0" x2="0.5" y2="1">
          <stop offset="0" stopColor="#F4552C" />
          <stop offset="0.6" stopColor="#E73F1E" />
          <stop offset="1" stopColor="#B42A3C" />
        </linearGradient>
        <linearGradient id={ref("right")} x1="0.7" y1="0" x2="0.3" y2="1">
          <stop offset="0" stopColor="#FFC1A0" />
          <stop offset="0.5" stopColor="#F9B637" />
          <stop offset="1" stopColor="#E7832A" />
        </linearGradient>

        {/* Pills are cut by the band plus a gap */}
        <mask id={ref("pill-cut")} maskUnits="userSpaceOnUse" x="0" y="0" width="750" height="850">
          <rect width="750" height="850" fill="#fff" />
          <line x1="121" y1="119" x2="631" y2="731" stroke="#000" strokeWidth="234" strokeLinecap="round" />
        </mask>
        {/* Band extensions are cut by the pills plus a gap */}
        <mask id={ref("band-cut")} maskUnits="userSpaceOnUse" x="0" y="0" width="750" height="850">
          <rect width="750" height="850" fill="#fff" />
          <rect x="4" y="292" width="234" height="560" rx="117" fill="#000" />
          <rect x="515" y="2" width="234" height="604" rx="117" fill="#000" />
        </mask>
      </defs>

      <g data-logo-part="left" mask={`url(#${ref("pill-cut")})`}>
        <rect x="32" y="320" width="178" height="500" rx="89" fill={`url(#${ref("left")})`} />
      </g>
      <g data-logo-part="right" mask={`url(#${ref("pill-cut")})`}>
        <rect x="543" y="30" width="178" height="576" rx="89" fill={`url(#${ref("right")})`} />
      </g>
      <g data-logo-part="band" fill={`url(#${ref("band")})`}>
        <line
          x1="121"
          y1="119"
          x2="631"
          y2="731"
          stroke={`url(#${ref("band")})`}
          strokeWidth="178"
          strokeLinecap="round"
        />
        <g mask={`url(#${ref("band-cut")})`}>
          <rect x="32" y="119" width="178" height="230" />
          <rect x="543" y="500" width="178" height="231" />
        </g>
      </g>
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("font-display text-[1.05rem] font-bold tracking-[-0.02em]", className)}>
      nakami<span className="text-orange">.</span>
    </span>
  );
}
