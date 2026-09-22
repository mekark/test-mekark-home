import { engineeringNumbers } from "@/data/engineering";

/** Static plaque — no scroll animation so it cannot delay LCP. */
export function ProductionPlaque() {
  const { plaque } = engineeringNumbers;

  return (
    <div className="relative z-10 w-full min-w-0">
      <div className="relative mx-auto h-[114px] w-full max-w-[338px] overflow-hidden max-lg:h-[114px] max-lg:max-w-[338px] lg:aspect-[765/287] lg:h-auto lg:max-w-[765px] xl:aspect-[1020/383] xl:max-w-[1020px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={plaque.src}
          alt={plaque.alt}
          width={2040}
          height={1500}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          className="pointer-events-none absolute left-[-6.34%] top-[-50.83%] h-[214.21%] w-[114.89%] max-w-none lg:left-[-6.18%] lg:top-[-40.42%] lg:h-[198.95%] lg:w-[111.96%]"
        />
        <p className="absolute bottom-[14px] left-1/2 z-10 w-[353px] max-w-[96%] -translate-x-1/2 text-center text-[10px] font-bold uppercase leading-5 tracking-[2.667px] text-black opacity-75 lg:bottom-[14%] lg:w-[96%] lg:text-[clamp(0.625rem,2.8vw,0.8125rem)] lg:leading-none lg:tracking-[1.4px] xl:text-[clamp(0.8rem,1.05vw,0.9375rem)] xl:leading-[1.35] xl:tracking-[2px] 2xl:text-xl 2xl:leading-[27.73px] 2xl:tracking-[2.67px]">
          {plaque.unitLabel}
        </p>
      </div>
    </div>
  );
}
