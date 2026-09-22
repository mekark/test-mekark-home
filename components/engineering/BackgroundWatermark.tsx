import Image from "next/image";
import { engineeringNumbers } from "@/data/engineering";

/** Decorative background — lazy-loaded so the hero poster stays LCP. */
export function BackgroundWatermark() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden bg-[#f5f5f5] lg:bg-mekark-white"
      aria-hidden
    >
      <Image
        src={engineeringNumbers.watermarkSrc}
        alt=""
        fill
        loading="lazy"
        fetchPriority="low"
        sizes="100vw"
        className="object-cover opacity-40 max-lg:!left-[-72.67%] max-lg:!top-[8.34%] max-lg:!h-full max-lg:!w-[172.71%] max-lg:!max-w-none lg:object-[5.58%_top]"
      />
    </div>
  );
}
