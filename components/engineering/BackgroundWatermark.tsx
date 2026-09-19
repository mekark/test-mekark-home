import { engineeringNumbers } from "@/data/engineering";

/**
 * Decorative section background — CSS background (not <img>) so it cannot
 * become LCP. No client JS or scroll animation on the critical path.
 */
export function BackgroundWatermark() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden bg-mekark-white"
      aria-hidden
    >
      <div
        className="absolute inset-0 bg-cover bg-[position:5.58%_top] opacity-40"
        style={{
          backgroundImage: `url(${engineeringNumbers.watermarkSrc})`,
        }}
      />
    </div>
  );
}
