"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { SECTION_CONTAINER_CLASS } from "@/lib/sectionLayout";
import {
  epcCapCardFromLeft,
  epcCapEpcStamp,
  epcCapHeadlineGroup,
  epcCapHeadlineWipe,
  epcCapRowStagger,
} from "@/lib/motion-variants";

const VIEWPORT = { once: true, margin: "-80px" as const };

const CAPABILITIES = [
  {
    title: "Land & Statutory Approvals",
    description:
      "End-to-end support for site feasibility studies, statutory clearances, and regulatory approvals to get your project construction-ready.",
    icon: "/images/capabilities/icon-land-approvals.svg",
  },
  {
    title: "Architectural & Site Planning",
    description:
      "Strategic architectural planning and site layout design that aligns every structure with logistical flow, scalability, and long-term industrial performance.",
    icon: "/images/capabilities/icon-architectural.svg",
  },
  {
    title: "Structural Engineering & Analysis",
    description:
      "Advanced STAAD. Pro and Tekla-driven modelling for precision load analysis and clash-free execution.",
    icon: "/images/capabilities/icon-structural-search.svg",
  },
  {
    title: "Civil & Foundation Works",
    description:
      "Complete civil construction-foundations, flooring, and site infrastructure, engineered to carry heavy industrial loads.",
    icon: "/images/capabilities/icon-civil-foundation.svg",
  },
  {
    title: "Pre-Engineered Buildings",
    description:
      "Custom-engineered PEB structures designed for speed, structural strength, and long-term scalability.",
    icon: "/images/capabilities/icon-peb-warehouse.svg",
  },
  {
    title: "MEP Services",
    description:
      "Integrated electrical, plumbing, HVAC, and fire-safety systems designed and installed for full operational readiness.",
    icon: "/images/capabilities/icon-mep-settings.svg",
  },
  {
    title: "Heavy Steel Fabrication",
    description:
      "40,000 tons annual production capacity through CNC automated, precision controlled fabrication systems.",
    icon: "/images/capabilities/icon-fabrication-wrench.svg",
  },
  {
    title: "Turnkey EPC Execution & Handover",
    description:
      "Single-point accountability from design and procurement through fabrication, civil, MEP, and site commissioning, delivered on time, ready to operate.",
    icon: "/images/capabilities/icon-turnkey-epc.svg",
  },
] as const;

function CapabilityCard({
  title,
  description,
  icon,
}: (typeof CAPABILITIES)[number]) {
  return (
    <article className="group flex h-full w-[min(100%,329px)] shrink-0 flex-col max-lg:min-h-[209px] max-lg:w-[343px] sm:w-[329px] xl:w-[275px] 2xl:w-[329px]">
      <div className="flex h-full flex-col rounded-[24px] px-6 pb-6 pt-5 transition-colors duration-300 ease-out group-hover:bg-[#f5f5f5] max-lg:gap-2 max-lg:rounded-[20px] max-lg:bg-[#f5f5f5] max-lg:p-[15px] sm:px-8 sm:pb-8 sm:pt-8">
        <div className="relative flex size-[56px] shrink-0 items-center justify-center overflow-clip max-lg:size-[45px] sm:size-[80px] xl:size-[72px] 2xl:size-[96px]">
          <div
            className="absolute inset-0 rounded-[12px] bg-[#fdebeb] opacity-55 transition-opacity duration-300 group-hover:opacity-100 max-lg:left-[4.57px] max-lg:top-[4.57px] max-lg:size-[35.859px] max-lg:rounded-[7px] max-lg:bg-[#ffcaca] max-lg:opacity-35 sm:rounded-[18px] sm:opacity-35 xl:rounded-[16px] 2xl:rounded-[22.67px]"
            aria-hidden
          />
          <div className="relative size-[28px] overflow-clip max-lg:size-[19px] sm:size-[42px] xl:size-[38px] 2xl:size-[52px]">
            <Image
              src={icon}
              alt={`${title} icon`}
              fill
              className="object-contain"
              sizes="(min-width: 1536px) 52px, (min-width: 1280px) 38px, (min-width: 640px) 42px, 28px"
              aria-hidden
            />
          </div>
        </div>

        <div className="mt-3 flex flex-1 flex-col items-start gap-[13.3px] text-left max-lg:mt-0 max-lg:gap-2 sm:mt-6">
          <h3 className="min-h-[4.875rem] w-full text-[20px] font-bold leading-[26px] text-[#0f0f0f] max-lg:min-h-0 max-lg:text-lg max-lg:capitalize max-lg:leading-[30px] sm:min-h-[5.625rem] sm:text-2xl sm:leading-[30px] xl:min-h-[5.625rem]">
            {title}
          </h3>
          <p className="min-h-[7.8125rem] w-full flex-1 text-base font-light leading-[25px] text-[#0f0f0f] max-lg:min-h-0 max-lg:text-sm max-lg:leading-[22px]">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

export function CoreEpcCapabilitiesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [canScrollPrev, setCanScrollPrev] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollNext(emblaApi.canScrollNext());
    setCanScrollPrev(emblaApi.canScrollPrev());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  return (
    <section className="relative w-full overflow-x-clip bg-white font-[family-name:var(--font-manrope)] text-black">
      <div className={`${SECTION_CONTAINER_CLASS} flex flex-col py-14 max-lg:gap-5 max-lg:py-8 sm:py-16 lg:gap-0 lg:py-[107px] xl:py-[65px] 2xl:py-[107px]`}>
        <motion.div
          variants={epcCapHeadlineGroup}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mb-5 overflow-visible max-lg:mb-0 sm:mb-12 lg:mb-[52px] xl:mb-8 2xl:mb-[52px]"
        >
          <motion.h2
            variants={epcCapHeadlineWipe}
            className="overflow-visible pb-1 text-[28px] font-extrabold leading-[1.2] tracking-[-0.8px] text-black max-lg:leading-[30px] max-lg:tracking-normal sm:text-[36px] sm:tracking-[-1px] lg:text-[40px] lg:tracking-[-1.12px] xl:text-[43px] 2xl:text-[53.33px]"
          >
            Core{" "}
            <motion.span
              variants={epcCapEpcStamp}
              className="inline-block text-[#ed1c24]"
            >
              EPC
            </motion.span>{" "}
            Capabilities
          </motion.h2>
        </motion.div>

        <div className="relative isolate">
          <motion.div
            variants={epcCapRowStagger}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="-ml-10 overflow-hidden max-lg:ml-0 sm:-ml-12"
            ref={emblaRef}
          >
            <div className="flex touch-pan-y gap-0 max-lg:gap-[15px]">
              {CAPABILITIES.map((capability) => (
                <motion.div
                  key={capability.title}
                  variants={epcCapCardFromLeft}
                  className="flex min-w-0 shrink-0 grow-0 basis-[min(100%,366.67px)] px-4 pb-4 pt-0 max-lg:basis-[343px] max-lg:px-0 max-lg:pb-0 max-lg:pt-0 sm:pt-[21px] xl:basis-[min(100%,275px)] 2xl:basis-[min(100%,366.67px)]"
                >
                  <CapabilityCard {...capability} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {canScrollNext ? (
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next capabilities"
              className="absolute right-0 top-1/2 z-[1] flex size-[25px] -translate-y-1/2 items-center justify-center rounded-[12.5px] bg-[#a9a9a9]/30 transition hover:bg-[#a9a9a9]/50 max-lg:top-1/2 lg:top-[125px] lg:size-16 lg:rounded-full lg:bg-[#a9a9a9]/40 lg:hover:bg-[#a9a9a9]/60 xl:-right-6"
            >
              <Image
                src="/images/capabilities/carousel-arrow.svg"
                alt="Arrow icon"
                width={21}
                height={16}
                className="h-[13px] w-[12.5px] brightness-0 lg:h-4 lg:w-[21px]"
                aria-hidden
              />
            </button>
          ) : null}

          {canScrollPrev ? (
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous capabilities"
              className="absolute left-0 top-[125px] z-[1] hidden size-16 -translate-y-1/2 items-center justify-center rounded-full bg-[#a9a9a9]/40 transition hover:bg-[#a9a9a9]/60 max-lg:hidden lg:flex xl:-left-6"
            >
              <Image
                src="/images/capabilities/carousel-arrow.svg"
                alt="Arrow icon"
                width={21}
                height={16}
                className="rotate-180 brightness-0"
                aria-hidden
              />
            </button>
          ) : null}
        </div>

        {scrollSnaps.length > 1 ? (
          <div className="mt-4 flex items-center justify-center gap-2 pb-1.5 max-lg:mt-0 max-lg:pb-[5px]">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === selectedIndex ? "true" : undefined}
                className={`rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "h-2 w-8 bg-[#e40015] max-lg:h-[7px] max-lg:w-[10px] max-lg:bg-[#555]"
                    : "size-2 bg-[#d6d6d6] hover:bg-[#b8b8b8] max-lg:h-[7px] max-lg:w-[10px]"
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
