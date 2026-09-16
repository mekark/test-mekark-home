"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SECTION_CONTAINER_CLASS } from "@/lib/sectionLayout";
import {
  aboutBadgeDot,
  aboutBadgeReveal,
  aboutHeadlineChunk,
  aboutHeadlineStagger,
  drawVertical,
  fadeUp,
  scaleIn,
  staggerContainer,
} from "@/lib/motion-variants";

const VIEWPORT = { once: true, margin: "0px 0px -40px 0px" as const };

const CARD_SHADOW = "0px 24px 60px 0px rgba(0,0,0,0.09)";

const INDUSTRIES = [
  {
    number: "01",
    title: "Manufacturing Industry",
    description:
      "Scalable infrastructure for high-volume production and assembly.",
    image: "/images/industries/01-manufacturing-v4.webp",
  },
  {
    number: "02",
    title: "Logistics & Warehousing",
    description:
      "High-capacity facilities for storage and distribution networks.",
    image: "/images/industries/02-logistics-v3.webp",
  },
  {
    number: "03",
    title: "Food Processing Industry",
    description: "Hygienic and temperature-controlled building solutions.",
    image: "/images/industries/03-food-processing-v3.webp",
  },
  {
    number: "04",
    title: "Road & Infra Solutions",
    description:
      "Integrated civil and structural works for roads, bridges, and large-scale ground infrastructure.",
    image: "/images/industries/04-road-civil-v3.webp",
  },
  {
    number: "05",
    title: "Pharmaceutical Industry",
    description:
      "Compliance-driven infrastructure for controlled environments.",
    image: "/images/industries/05-pharmaceutical-v3.webp",
  },
  {
    number: "06",
    title: "Textile",
    description: "Resilient infrastructure for continuous textile production.",
    image: "/images/industries/06-textile-v3.webp",
  },
  {
    number: "07",
    title: "Electronics",
    description:
      "Precision infrastructure for high-tech manufacturing environments.",
    image: "/images/industries/07-electronics-v3.webp",
  },
  {
    number: "08",
    title: "Data Centers",
    description:
      "Mission-critical infrastructure designed for high uptime and secure operations.",
    image: "/images/industries/08-data-centers-v3.webp",
  },
  {
    number: "09",
    title: "Energy & Renewables",
    description:
      "Sustainable industrial solutions for solar, wind, battery storage, and clean energy facilities.",
    image: "/images/industries/09-energy-renewables-v3.webp",
  },
  {
    number: "10",
    title: "Institutions",
    description: "Durable infrastructure for everyday academic life.",
    image: "/images/industries/10-school-university-v3.webp",
  },
  {
    number: "11",
    title: "Hospitals",
    description:
      "Precision infrastructure for critical healthcare operations.",
    image: "/images/industries/11-hospitals-v3.webp",
    imageClassName:
      "object-cover scale-[1.25] object-[36%_24%]",
  },
  {
    number: "12",
    title: "Auditoriums",
    description: "Large-span infrastructure for acoustics and capacity.",
    image: "/images/industries/12-auditoriums-v3.webp",
  },
] as const;

function SectionBadge() {
  return (
    <motion.div
      variants={aboutBadgeReveal}
      className="relative box-border flex w-fit items-center gap-1.5 rounded-full border border-solid border-[1.175px] border-[rgba(219,28,34,0.2)] bg-[rgba(219,28,34,0.05)] px-2.5 py-1.5 text-left font-inter text-[#e9000e] sm:gap-[9.4px] sm:px-[15.3px] sm:py-[8.2px]"
    >
      <motion.div
        variants={aboutBadgeDot}
        className="relative size-1.5 shrink-0 rounded-full bg-[#e40015] sm:size-[9.4px]"
        aria-hidden
      />
      <span className="text-[clamp(0.625rem,2.8vw,0.75rem)] font-medium leading-none tracking-[0.5px] sm:text-[clamp(0.75rem,1.2vw,1rem)] sm:leading-[18.8px] sm:tracking-[0.7px]">
        What We Do
      </span>
    </motion.div>
  );
}

function IndustryCard({
  card,
}: {
  card: (typeof INDUSTRIES)[number];
}) {
  const imageClassName =
    "imageClassName" in card && card.imageClassName
      ? card.imageClassName
      : "object-cover";

  return (
    <motion.article
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      whileHover={{
        y: -6,
        boxShadow: "0px 28px 64px 0px rgba(0,0,0,0.12)",
        transition: { type: "spring", stiffness: 340, damping: 22 },
      }}
      style={{ boxShadow: CARD_SHADOW }}
      className="flex flex-col overflow-hidden rounded-2xl border border-[#eee] bg-white sm:rounded-3xl"
    >
      <div className="relative h-[120px] w-full shrink-0 overflow-hidden sm:h-[220px] xl:h-[205px] 2xl:h-[273px]">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className={imageClassName}
          sizes="(max-width: 640px) 50vw, (max-width: 1280px) 50vw, 399px"
        />
        <div className="absolute left-0 top-0 overflow-hidden rounded-br-xl bg-[#ed2024] px-3 py-1.5 sm:rounded-br-[19px] sm:px-6 sm:py-4">
          <span className="text-xs font-extrabold leading-normal text-white sm:text-xl">
            {card.number}
          </span>
        </div>
      </div>

      <div className="flex flex-col px-3 pb-4 pt-3 sm:px-[35px] sm:pb-[37px] sm:pt-[35px]">
        <h3 className="text-sm font-extrabold leading-[1.25] tracking-[-0.3px] text-[#111] sm:text-2xl sm:tracking-[-0.4px] xl:text-xl xl:tracking-[-0.3px] 2xl:text-2xl 2xl:tracking-[-0.4px]">
          {card.title}
        </h3>
        <p className="mt-2 text-[11px] leading-[16px] text-[#4f4f4f] sm:mt-4 sm:text-base sm:leading-[25px] xl:mt-3 xl:text-sm xl:leading-[19px] 2xl:mt-4 2xl:text-base 2xl:leading-[25px]">
          {card.description}
        </p>
      </div>
    </motion.article>
  );
}

export function IndustriesSection() {
  return (
    <section className="relative w-full border-b border-black/10 bg-white font-[family-name:var(--font-manrope)] text-[#111]">
      <div className={`${SECTION_CONTAINER_CLASS} py-14 lg:py-[107px] xl:py-20 2xl:py-[107px]`}>
        <motion.div
          className="mb-12 lg:mb-[67px] xl:mb-12 2xl:mb-[67px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <div className="grid grid-cols-1 gap-x-0 gap-y-4 sm:gap-y-6 lg:grid-cols-[auto_minmax(0,1fr)] lg:grid-rows-[auto_auto] lg:items-start lg:gap-x-10 lg:gap-y-[22px] xl:gap-x-12">
            <div className="lg:col-start-1 lg:row-start-1">
              <SectionBadge />
            </div>

            <motion.h2
              variants={aboutHeadlineStagger}
              className="max-w-none overflow-visible whitespace-nowrap text-[clamp(1.375rem,5.8vw,1.875rem)] font-extrabold leading-[1.15] tracking-[-0.6px] text-[#111] sm:text-[clamp(1.75rem,4vw,2.5rem)] sm:tracking-[-1px] lg:col-start-1 lg:row-start-2 lg:-mt-5 lg:text-[clamp(2rem,3.5vw,3.33rem)] lg:leading-[1.05] lg:tracking-[-1.12px] xl:text-[43px] xl:leading-[43px] 2xl:text-[53.33px] 2xl:leading-[56px]"
            >
              <motion.span variants={aboutHeadlineChunk} className="inline whitespace-nowrap">
                Engineered For Every Sector
              </motion.span>
            </motion.h2>

            <div className="flex min-w-0 max-w-[980px] items-start gap-10 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:justify-self-end">
              <motion.div
                variants={drawVertical}
                style={{ originY: 0 }}
                className="hidden h-[186.7px] w-[1.3px] shrink-0 origin-top bg-[#dedede] lg:block"
                aria-hidden
              />
              <motion.p
                variants={fadeUp}
                className="min-w-0 w-full max-w-[938.7px] pt-0 text-left text-[clamp(0.875rem,3.6vw,1rem)] leading-[1.55] text-[#4f4f4f] sm:text-[clamp(1rem,2vw,1.125rem)] sm:leading-[1.6] lg:pt-[calc(186.7px/2-62.68px)] lg:text-[clamp(1.05rem,1.6vw,1.5rem)] lg:leading-[1.65] xl:max-w-[704px] xl:pt-[calc(140px/2-47px)] xl:text-xl xl:leading-[170%] 2xl:max-w-[938.7px] 2xl:pt-[calc(186.7px/2-62.68px)] 2xl:text-2xl"
              >
                From heavy industrial plants to high-precision manufacturing
                facilities, Mekark delivers engineering-led EPC solutions across
                diverse industrial sectors, built for performance, scale, and long
                term reliability
              </motion.p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:gap-7 xl:grid-cols-4 xl:gap-[28px] 2xl:gap-[37px]">
          {INDUSTRIES.map((card) => (
            <IndustryCard key={card.number} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
