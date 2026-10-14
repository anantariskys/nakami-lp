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
        /* Pure warm-gradient monogram with ambient glow per docs/06 §5.1 */
        <div
          className="relative shrink-0 transition-transform duration-300 group-hover:scale-105"
          style={{
            width: size,
            height: Math.round(size * (850 / 750)),
            filter: "drop-shadow(0 0 8px rgba(251,108,0,0.4))",
          }}
        >
          <Image
            src="/brand/nakami-monogram-512.png"
            alt="Nakami Monogram"
            width={512}
            height={Math.round(512 * (850 / 750))}
            className="w-full h-full object-contain"
            priority
          />
        </div>
      )}

      {showText && (
        <div className="flex flex-col text-left">
          {/* docs/06 §5.1 line 165: "NAKAMI" ExtraBold #FFFFFF + "STUDIO" SemiBold #FB6C00
             docs/02 §3: wide tracking for brand lockup */}
          <span
            className={`tracking-wide text-lg leading-tight uppercase font-[var(--font-display)] ${
              variant === "dark" ? "text-white" : "text-[#0F172A]"
            }`}
          >
            <span className="font-extrabold">NAKAMI</span>
            <span className="font-semibold text-[#FB6C00] ml-1.5">
              STUDIO
            </span>
          </span>
        </div>
      )}
    </div>
  );
}
