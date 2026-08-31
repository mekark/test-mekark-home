"use client";

import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { HOME_SERVICES, type HomeService } from "@/components/navbar/nav-data";
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
        className="group relative block h-[250px] overflow-hidden rounded-[21px] sm:h-[280px] lg:h-[333px]"
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
              ? "absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.92)] via-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.15)]"
              : "absolute inset-x-0 bottom-0 h-[53%] bg-gradient-to-t from-[rgba(0,0,0,0.92)] via-[rgba(0,0,0,0.5)] to-transparent"
          }
          aria-hidden
        />

        <div className="absolute inset-x-[28px] bottom-[28px] flex flex-col gap-[7px]">
          <h3 className="text-xl font-bold leading-[29px] text-white sm:text-2xl">
            {visual.title}
          </h3>
          <p className="max-w-[433px] text-sm leading-[22px] text-[#aaa] sm:text-base sm:leading-[25px]">
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
      ? "grid w-full grid-cols-1 gap-[17px] md:grid-cols-2 lg:grid-cols-4 lg:gap-[23px]"
      : "grid w-full grid-cols-1 gap-[17px] md:grid-cols-2 lg:grid-cols-3 lg:gap-[23px]";

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
      <div className="relative mx-auto flex w-full max-w-[1740px] flex-col items-center gap-6 px-5 py-14 sm:gap-12 sm:px-8 lg:gap-[120px] lg:px-[107px] lg:py-[93px]">
        {coreServices.length > 0 ? (
          <div className="flex w-full max-w-[1481px] flex-col items-center gap-12 lg:gap-[70px]">
            <motion.h2
              variants={aboutHeadlineStagger}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="flex w-full max-w-full flex-wrap justify-center gap-x-[0.3em] text-center text-[clamp(1.75rem,3.5vw,3.33rem)] font-bold leading-[1.5] tracking-[-1.33px] lg:leading-[80px]"
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
          <div className="-mt-1 flex w-full max-w-[1481px] flex-col items-center gap-8 sm:mt-0 sm:gap-12 lg:gap-[70px]">
            <motion.h2
              variants={aboutHeadlineStagger}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="flex w-full max-w-full flex-wrap justify-center gap-x-[0.3em] text-center text-[clamp(1.75rem,3.5vw,3.33rem)] font-bold leading-[1.35] tracking-[-1.33px] sm:leading-[1.5] lg:leading-[80px]"
            >
              <motion.span
                className="inline-block text-[#ed1c24]"
                variants={aboutHeadlineChunk}
              >
                Extended
              </motion.span>
              <motion.span className="inline-block" variants={aboutHeadlineChunk}>
                Infrastructure Solutions.
              </motion.span>
            </motion.h2>

            <SolutionGrid services={extendedServices} overlay="extended" />
          </div>
        ) : null}
      </div>
    </section>
  );
}
