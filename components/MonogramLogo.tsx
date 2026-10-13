import React from "react";

interface MonogramLogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
  variant?: "light" | "dark";
}

export function MonogramLogo({
  size = 36,
  className = "",
  showText = true,
  variant = "dark",
}: MonogramLogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="nakami-left-pill-nav" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E73F1E" />
            <stop offset="100%" stopColor="#FB6C00" />
          </linearGradient>
          <linearGradient id="nakami-diag-nav" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FB6C00" />
            <stop offset="100%" stopColor="#E73F1E" />
          </linearGradient>
          <linearGradient id="nakami-right-pill-nav" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFDD9C" />
            <stop offset="100%" stopColor="#F9B637" />
          </linearGradient>
          <filter id="nakami-glow-filter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer pill capsule geometry forming 'N' with glow */}
        <g filter="url(#nakami-glow-filter)">
          {/* Left Vertical Pillar */}
          <rect x="20" y="24" width="14" height="52" rx="7" fill="url(#nakami-left-pill-nav)" />
          {/* Diagonal connecting blade */}
          <polygon points="24,28 34,22 76,68 66,74" fill="url(#nakami-diag-nav)" />
          {/* Right Vertical Pillar (Elevated height & warm peach highlight) */}
          <rect x="64" y="16" width="14" height="66" rx="7" fill="url(#nakami-right-pill-nav)" />
        </g>
      </svg>

      {showText && (
        <div className="flex flex-col text-left">
          <span
            className={`font-extrabold tracking-tight text-lg leading-tight uppercase font-[var(--font-display)] ${
              variant === "dark" ? "text-white" : "text-[#0F172A]"
            }`}
          >
            NAKAMI<span className="text-[#FB6C00] ml-1">STUDIO</span>
          </span>
          <span
            className={`text-[10px] tracking-widest font-mono uppercase ${
              variant === "dark" ? "text-[#94A3B8]" : "text-[#64748B]"
            }`}
          >
            SOFTWARE &amp; MENTORING
          </span>
        </div>
      )}
    </div>
  );
}
