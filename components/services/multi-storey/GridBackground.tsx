import Image from "next/image";

type GridBackgroundProps = {
  /** Figma: top of Building Solutions vs bottom of How We Deliver */
  position?: "top" | "bottom";
  className?: string;
};

/** Decorative perspective grid — Figma Grid 1 @ 15% opacity, ~390.7px tall */
export default function GridBackground({
  position = "top",
  className = "",
}: GridBackgroundProps) {
  const isBottom = position === "bottom";

  return (
    <div
      className={`pointer-events-none absolute inset-x-0 h-[390.7px] w-full overflow-hidden opacity-15 ${
        isBottom ? "bottom-[-13px]" : "top-[-13px]"
      } ${className}`}
      aria-hidden
    >
      <div className={`relative size-full ${isBottom ? "-scale-y-100" : ""}`}>
        <Image
          src="/images/services/multi-storey/frame212/solutions/grid-bg.webp"
          alt=""
          fill
          sizes="100vw"
          className="max-w-full object-cover object-top"
          priority={false}
        />
      </div>
    </div>
  );
}
