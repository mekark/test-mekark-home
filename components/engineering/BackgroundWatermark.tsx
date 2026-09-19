import Image from "next/image";
import { engineeringNumbers } from "@/data/engineering";

/** Decorative background — lazy-loaded so the hero poster stays LCP. */
export function BackgroundWatermark() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden bg-mekark-white"
      aria-hidden
    >
      <Image
        src={engineeringNumbers.watermarkSrc}
        alt=""
        fill
        loading="lazy"
        fetchPriority="low"
        sizes="100vw"
        className="object-cover object-[5.58%_top] opacity-40"
      />
    </div>
  );
}
