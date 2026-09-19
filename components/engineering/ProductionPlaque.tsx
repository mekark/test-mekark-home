import { engineeringNumbers } from "@/data/engineering";

/** Static plaque — no scroll animation so it cannot delay LCP. */
export function ProductionPlaque() {
  const { plaque } = engineeringNumbers;

  return (
    <div className="relative z-10 w-full min-w-0">
      <div className="relative mx-auto w-full overflow-hidden max-xl:aspect-[765/287] max-xl:max-w-[765px] xl:aspect-[1020/383] xl:max-w-[1020px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={plaque.src}
          alt={plaque.alt}
          width={2040}
          height={1500}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          className="pointer-events-none absolute left-[-6.18%] top-[-40.42%] h-[198.95%] w-[111.96%] max-w-none"
        />
        <p className="absolute bottom-[14%] left-1/2 z-10 w-[96%] -translate-x-1/2 text-center text-[clamp(0.625rem,2.8vw,0.8125rem)] font-bold uppercase leading-none tracking-[1.4px] text-black opacity-75 sm:text-[clamp(0.7rem,1.5vw,0.95rem)] sm:tracking-[1.8px] lg:text-[clamp(0.75rem,1.2vw,0.9375rem)] xl:text-[clamp(0.8rem,1.05vw,0.9375rem)] xl:leading-[1.35] xl:tracking-[2px] 2xl:text-xl 2xl:leading-[27.73px] 2xl:tracking-[2.67px]">
          {plaque.unitLabel}
        </p>
      </div>
    </div>
  );
}
