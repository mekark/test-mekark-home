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
    title: "Architectural And Site Planning",
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
    <article className="group flex w-[min(100%,329px)] shrink-0 flex-col sm:w-[329px] xl:w-[275px] 2xl:w-[329px]">
      <div className="flex h-full flex-col rounded-[24px] px-6 pb-6 pt-5 transition-colors duration-300 ease-out group-hover:bg-[#f5f5f5] sm:px-8 sm:pb-8 sm:pt-8">
        <div className="relative flex size-[72px] shrink-0 items-center justify-center overflow-clip sm:size-[113px]">
          <div
            className="absolute inset-0 rounded-[14px] bg-[#fdebeb] opacity-55 transition-opacity duration-300 group-hover:opacity-100 sm:rounded-[22.67px] sm:opacity-35"
            aria-hidden
          />
          <div className="relative size-[36px] overflow-clip sm:size-[60px]">
            <Image
              src={icon}
              alt=""
              fill
              className="object-contain"
              sizes="(max-width: 640px) 36px, 60px"
              aria-hidden
            />
          </div>
        </div>

        <div className="mt-3 flex flex-col gap-[13.3px] sm:mt-6">
          <h3 className="text-[20px] font-bold leading-[26px] text-[#0f0f0f] sm:text-2xl sm:leading-[30px]">
            {title}
          </h3>
          <p className="text-base font-light leading-[25px] text-[#0f0f0f]">
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
    <section className="relative w-full overflow-hidden bg-white font-[family-name:var(--font-manrope)] text-black">
      <div className={`${SECTION_CONTAINER_CLASS} py-14 sm:py-16 lg:py-[107px] xl:py-[65px] 2xl:py-[107px]`}>
        <motion.div
          variants={epcCapHeadlineGroup}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mb-5 sm:mb-12 lg:mb-[52px] xl:mb-8 2xl:mb-[52px]"
        >
          <motion.h2
            variants={epcCapHeadlineWipe}
            className="text-[clamp(2rem,4.5vw,53.33px)] font-extrabold leading-[1.1] tracking-[-1.12px] text-black xl:text-[45px] xl:leading-[45px] 2xl:text-[53.33px] 2xl:leading-[1.1]"
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
            className="overflow-hidden"
            ref={emblaRef}
          >
            <div className="flex touch-pan-x gap-0">
              {CAPABILITIES.map((capability) => (
                <motion.div
                  key={capability.title}
                  variants={epcCapCardFromLeft}
                  className="min-w-0 shrink-0 grow-0 basis-[min(100%,366.67px)] px-4 pb-4 pt-0 sm:pt-[21px] xl:basis-[min(100%,275px)] 2xl:basis-[min(100%,366.67px)]"
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
              className="absolute right-0 top-[125px] z-[1] hidden size-16 -translate-y-1/2 items-center justify-center rounded-full bg-[#a9a9a9]/40 transition hover:bg-[#a9a9a9]/60 lg:flex xl:-right-6"
            >
              <Image
                src="/images/capabilities/carousel-arrow.svg"
                alt=""
                width={21}
                height={16}
                className="brightness-0"
                aria-hidden
              />
            </button>
          ) : null}

          {canScrollPrev ? (
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous capabilities"
              className="absolute left-0 top-[125px] z-[1] hidden size-16 -translate-y-1/2 items-center justify-center rounded-full bg-[#a9a9a9]/40 transition hover:bg-[#a9a9a9]/60 lg:flex xl:-left-6"
            >
              <Image
                src="/images/capabilities/carousel-arrow.svg"
                alt=""
                width={21}
                height={16}
                className="rotate-180 brightness-0"
                aria-hidden
              />
            </button>
          ) : null}
        </div>

        {scrollSnaps.length > 1 ? (
          <div className="mt-4 flex items-center justify-center gap-2 pb-1.5">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === selectedIndex ? "true" : undefined}
                className={`rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "h-2 w-8 bg-[#e40015]"
                    : "size-2 bg-[#d6d6d6] hover:bg-[#b8b8b8]"
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
