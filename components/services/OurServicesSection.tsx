"use client";

import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { HOME_SERVICES, type HomeService } from "@/components/navbar/nav-data";
import { SECTION_CONTAINER_CLASS } from "@/lib/sectionLayout";
import {
  aboutHeadlineChunk,
  aboutHeadlineStagger,
  scaleIn,
  staggerContainer,
} from "@/lib/motion-variants";

const VIEWPORT = { once: true, margin: "0px 0px -40px 0px" as const };

type SolutionVisual = {
  src: string;
  alt: string;
  title: string;
  description: string;
  objectPosition?: string;
};

const SOLUTION_CARDS: Record<string, SolutionVisual> = {
  civil: {
    src: "/images/services/civil.png",
    alt: "Civil construction and site development on an industrial plot",
    title: "Civil Construction",
    description:
      "Foundation, RCC, and site development works engineered for industrial loads and soil conditions.",
    objectPosition: "center 38%",
  },
  peb: {
    src: "/images/services/peb.png",
    alt: "Pre-engineered steel warehouse at dusk",
    title: "PEB",
    description:
      "Column-free steel structures for warehouses, factories, and distribution centres.",
    objectPosition: "30% center",
  },
  "multi-storey": {
    src: "/images/services/multi-storey.png",
    alt: "Multi-storey steel building with glass facade",
    title: "Multi-Storey Buildings",
    description:
      "Vertical steel structures maximising land use with heavy floor loading.",
  },
  mep: {
    src: "/images/services/mep.png",
    alt: "Industrial building with visible MEP piping and HVAC systems",
    title: "MEP Services",
    description:
      "Electrical, HVAC, firefighting, and plumbing systems for industrial facilities.",
    objectPosition: "35% center",
  },
  solar: {
    src: "/images/services/solar.png",
    alt: "Ground-mounted solar arrays at sunset",
    title: "Solar Solutions",
    description:
      "Rooftop and structural solar systems integrated with industrial buildings.",
    objectPosition: "40% center",
  },
  tensile: {
    src: "/images/services/tensile.png",
    alt: "Illuminated tensile fabric canopy at dusk",
    title: "Tensile & Fabric Structures",
    description:
      "Lightweight tensile roofing and canopy structures for open and semi-open spaces.",
  },
  eot: {
    src: "/images/services/eot.png",
    alt: "Electric overhead travelling crane inside a PEB facility",
    title: "EOT",
    description: "Heavy-duty infrastructure for precision material handling.",
    objectPosition: "center bottom",
  },
  racking: {
    src: "/images/services/racking.png",
    alt: "Heavy-duty industrial pallet racking in a warehouse aisle",
    title: "Heavy Duty Racking",
    description:
      "Optimised infrastructure for high-density industrial storage.",
    objectPosition: "40% center",
  },
  "clean-room": {
    src: "/images/services/clean-room.png",
    alt: "Modular contamination-controlled clean room",
    title: "Clean Room",
    description:
      "Contamination-controlled infrastructure for precision manufacturing.",
  },
  "cold-storage": {
    src: "/images/ext.png",
    alt: "Temperature-controlled cold storage warehouse interior",
    title: "Cold Storage",
    description:
      "Precision-engineered facilities for reliable, temperature-sensitive storage.",
    objectPosition: "center",
  },
};

function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

const EXTERNAL_LINK_PROPS = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

function ServiceAnchor({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) {
  if (isExternalHref(href)) {
    return (
      <a href={href} className={className} {...EXTERNAL_LINK_PROPS}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function SolutionCard({
  service,
  overlay,
}: {
  service: HomeService;
  overlay: "core" | "extended";
}) {
  const visual = SOLUTION_CARDS[service.id];

  if (!visual) return null;

  // Same height for every card at each breakpoint (core + extended)
  const cardHeightClass =
    "h-[200px] sm:h-[240px] xl:h-[250px] 2xl:h-[333px]";

  return (
    <motion.article
      variants={scaleIn}
      whileHover={{
        y: -4,
        transition: { type: "spring", stiffness: 340, damping: 22 },
      }}
    >
      <ServiceAnchor
        href={service.href}
        className={`group relative block overflow-hidden rounded-[21px] ${cardHeightClass}`}
      >
        <Image
          src={visual.src}
          alt={visual.alt}
          fill
          className="object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
          style={{ objectPosition: visual.objectPosition ?? "center" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 480px"
        />

        <div
          className={
            overlay === "extended"
              ? "absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.88)] via-[rgba(0,0,0,0.35)] to-[rgba(0,0,0,0.08)] sm:from-[rgba(0,0,0,0.92)] sm:via-[rgba(0,0,0,0.5)] sm:to-[rgba(0,0,0,0.15)]"
              : "absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.45)] to-transparent sm:h-[53%] sm:from-[rgba(0,0,0,0.92)] sm:via-[rgba(0,0,0,0.5)]"
          }
          aria-hidden
        />

        <div className="absolute inset-x-4 bottom-4 flex flex-col items-start gap-1 text-left sm:inset-x-[28px] sm:bottom-[28px] sm:gap-[7px] xl:inset-x-[21px] xl:bottom-[21px] xl:gap-1.5 2xl:inset-x-[28px] 2xl:bottom-[28px] 2xl:gap-[7px]">
          <h3 className="w-full text-[15px] font-bold leading-snug text-white sm:text-xl sm:leading-[29px] md:text-2xl xl:text-[22px] xl:leading-[22px] 2xl:text-2xl 2xl:leading-[29px]">
            {visual.title}
          </h3>
          <p className="line-clamp-2 min-h-[calc(2*1.4em)] w-full max-w-[433px] text-[11px] leading-[1.4] text-[#c8c8c8] sm:min-h-[44px] sm:text-sm sm:leading-[22px] sm:text-[#aaa] md:min-h-[50px] md:text-base md:leading-[25px] xl:min-h-[36px] xl:max-w-[318px] xl:text-sm xl:leading-[18px] 2xl:min-h-[50px] 2xl:max-w-[433px] 2xl:text-base 2xl:leading-[25px]">
            {visual.description}
          </p>
        </div>
      </ServiceAnchor>
    </motion.article>
  );
}

function SolutionGrid({
  services,
  overlay,
}: {
  services: HomeService[];
  overlay: "core" | "extended";
}) {
  const gridClass =
    overlay === "extended"
      ? "grid w-full grid-cols-1 gap-[17px] md:grid-cols-2 lg:grid-cols-4 xl:gap-[15px] 2xl:gap-[23px]"
      : "grid w-full grid-cols-1 gap-[17px] md:grid-cols-2 lg:grid-cols-3 xl:gap-[17px] 2xl:gap-[23px]";

  return (
    <motion.div
      className={gridClass}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {services.map((service) => (
        <SolutionCard key={service.id} service={service} overlay={overlay} />
      ))}
    </motion.div>
  );
}

export function OurServicesSection() {
  const coreServices = HOME_SERVICES.filter(
    (service) => service.group === "core" && SOLUTION_CARDS[service.id],
  );
  const extendedServices = HOME_SERVICES.filter(
    (service) => service.group === "extended" && SOLUTION_CARDS[service.id],
  );

  if (!coreServices.length && !extendedServices.length) return null;

  return (
    <section
      id="our-solutions"
      className="relative w-full bg-[#0a0a0a] font-[family-name:var(--font-manrope)] text-white"
    >
      {/* iMac Figma 6700:7065 · large 1920 canvas */}
      <div className={`${SECTION_CONTAINER_CLASS} flex flex-col items-center gap-6 py-14 sm:gap-12 lg:gap-[120px] lg:py-[93px] xl:gap-[53px] xl:py-[70px] 2xl:gap-[120px] 2xl:py-[93px]`}>
        {coreServices.length > 0 ? (
          <div className="flex w-full max-w-[1481px] flex-col items-center gap-12 lg:gap-[70px] xl:max-w-[1110px] xl:gap-[53px] 2xl:max-w-[1481px] 2xl:gap-[70px]">
            <motion.h2
              variants={aboutHeadlineStagger}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="flex w-full max-w-full flex-wrap justify-center gap-x-[0.3em] text-center text-[clamp(1.75rem,3.5vw,3.33rem)] font-bold leading-[1.5] tracking-[-1.33px] xl:text-[40px] xl:leading-[60px] 2xl:leading-[80px]"
            >
              <motion.span
                className="inline-block text-[#e50818]"
                variants={aboutHeadlineChunk}
              >
                Our  
              </motion.span>
              <motion.span className="inline-block" variants={aboutHeadlineChunk}>
                Solutions
              </motion.span>
            </motion.h2>

            <SolutionGrid services={coreServices} overlay="core" />
          </div>
        ) : null}

        {extendedServices.length > 0 ? (
          <div className="-mt-1 flex w-full max-w-[1481px] flex-col items-center gap-8 sm:mt-0 sm:gap-12 lg:gap-[70px] xl:max-w-[1110px] xl:gap-[53px] 2xl:max-w-[1481px] 2xl:gap-[70px]">
            <motion.h2
              variants={aboutHeadlineStagger}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="flex w-full max-w-full flex-wrap justify-center gap-x-[0.3em] text-center text-[clamp(1.75rem,3.5vw,3.33rem)] font-bold leading-[1.35] tracking-[-1.33px] sm:leading-[1.5] xl:text-[40px] xl:leading-[60px] 2xl:leading-[80px]"
            >
              <motion.span
                className="inline-block text-[#ed1c24]"
                variants={aboutHeadlineChunk}
              >
                Extended
              </motion.span>
              <motion.span className="inline-block" variants={aboutHeadlineChunk}>
                Infrastructure Solutions
              </motion.span>
            </motion.h2>

            <SolutionGrid services={extendedServices} overlay="extended" />
          </div>
        ) : null}
      </div>
    </section>
  );
}
