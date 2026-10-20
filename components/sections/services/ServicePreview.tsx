import Image from "next/image";
import type { Service } from "@/lib/content";
import { cn } from "@/lib/cn";

interface ServiceShotProps {
  service: Service;
  sizes: string;
  className?: string;
}

/** A service screenshot wrapped in a browser window or phone frame. */
export function ServiceShot({ service, sizes, className }: ServiceShotProps) {
  const { image } = service;

  if (image.device === "phone") {
    return (
      <div className={cn("mx-auto w-[min(15rem,62%)] rounded-[2.4rem] bg-ink p-2 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] ring-1 ring-white/10", className)}>
        <div className="relative overflow-hidden rounded-[1.9rem]">
          <Image src={image.src} alt={image.alt} width={780} height={1688} sizes={sizes} className="h-auto w-full" />
          <span aria-hidden className="absolute left-1/2 top-2 h-5 w-20 -translate-x-1/2 rounded-full bg-ink" />
        </div>
      </div>
    );
  }

  return (
    <div className={cn("overflow-hidden rounded-xl bg-[#e9e7e4] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] ring-1 ring-black/10", className)}>
      <div aria-hidden className="flex h-7 items-center gap-1.5 px-3">
        <span className="size-2 rounded-full bg-[#ff5f57]" />
        <span className="size-2 rounded-full bg-[#febc2e]" />
        <span className="size-2 rounded-full bg-[#28c840]" />
      </div>
      <Image src={image.src} alt={image.alt} width={1600} height={1000} sizes={sizes} className="h-auto w-full" />
    </div>
  );
}
