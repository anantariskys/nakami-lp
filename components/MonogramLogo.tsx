import React from "react";
import Image from "next/image";

interface MonogramLogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
  variant?: "light" | "dark";
  useAppIcon?: boolean;
}

export function MonogramLogo({
  size = 36,
  className = "",
  showText = true,
  variant = "dark",
  useAppIcon = true,
}: MonogramLogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {useAppIcon ? (
        <div
          className="relative shrink-0 rounded-[22%] overflow-hidden shadow-md shadow-[#FB6C00]/15 ring-1 ring-[#FB6C00]/30 transition-transform duration-300 group-hover:scale-105"
          style={{ width: size, height: size }}
        >
          <Image
            src="/brand/nakami-app-icon-192.png"
            alt="Nakami Studio Icon"
            width={size}
            height={size}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      ) : (
        <div
          className="relative shrink-0 transition-transform duration-300 group-hover:scale-105"
          style={{ width: size, height: Math.round(size * 1.13) }}
        >
          <Image
            src="/brand/nakami-monogram.png"
            alt="Nakami Monogram"
            width={size}
            height={Math.round(size * 1.13)}
            className="w-full h-full object-contain"
            priority
          />
        </div>
      )}

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
