"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
    image: "/images/industries/01-manufacturing-v3.png",
  },
  {
    number: "02",
    title: "Logistics & Warehousing",
    description:
      "High-capacity facilities for storage and distribution networks.",
    image: "/images/industries/02-logistics-v3.png",
  },
  {
    number: "03",
    title: "Food Processing Industry",
    description: "Hygienic and temperature-controlled building solutions.",
    image: "/images/industries/03-food-processing-v3.png",
  },
  {
    number: "04",
    title: "Road & Civil Construction",
    description:
      "Integrated civil and structural works for roads, bridges, and large-scale ground infrastructure.",
    image: "/images/industries/04-road-civil-v3.png",
  },
  {
    number: "05",
    title: "Pharmaceutical Industry",
    description:
      "Compliance-driven infrastructure for controlled environments.",
    image: "/images/industries/05-pharmaceutical-v3.png",
  },
  {
    number: "06",
    title: "Textile",
    description: "Resilient infrastructure for continuous textile production.",
    image: "/images/industries/06-textile-v3.png",
  },
  {
    number: "07",
    title: "Electronics",
    description:
      "Precision infrastructure for high-tech manufacturing environments.",
    image: "/images/industries/07-electronics-v3.png",
  },
  {
    number: "08",
    title: "Data Centers",
    description:
      "Mission-critical infrastructure designed for high uptime and secure operations.",
    image: "/images/industries/08-data-centers-v3.png",
  },
  {
    number: "09",
    title: "Energy & Renewables",
    description:
      "Sustainable industrial solutions for solar, wind, battery storage, and clean energy facilities.",
    image: "/images/industries/09-energy-renewables-v3.jpg",
  },
  {
    number: "10",
    title: "School & University",
    description: "Durable infrastructure for everyday academic life.",
    image: "/images/industries/10-school-university-v3.png",
  },
  {
    number: "11",
    title: "Hospitals",
    description:
      "Precision infrastructure for critical healthcare operations.",
    image: "/images/industries/11-hospitals-v3.jpg",
  },
  {
    number: "12",
    title: "Auditoriums",
    description: "Large-span infrastructure for acoustics and capacity.",
    image: "/images/industries/12-auditoriums-v3.png",
  },
] as const;

function SectionBadge() {
  return (
    <motion.div
      variants={aboutBadgeReveal}
      className="relative box-border flex w-fit items-center gap-[9.4px] rounded-full border border-solid border-[1.175px] border-[rgba(219,28,34,0.2)] bg-[rgba(219,28,34,0.05)] px-[15.3px] py-[8.2px] text-left font-inter text-base text-[#e9000e]"
    >
      <motion.div
        variants={aboutBadgeDot}
        className="relative size-[9.4px] rounded-full bg-[#e40015]"
        aria-hidden
      />
      <span className="font-medium capitalize leading-[18.8px] tracking-[0.7px]">
        What we do
      </span>
    </motion.div>
  );
}

function IndustryCard({
  card,
}: {
  card: (typeof INDUSTRIES)[number];
}) {
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
      className="flex flex-col overflow-hidden rounded-3xl border border-[#eee] bg-white"
    >
      <div className="relative h-[205px] w-full shrink-0 overflow-hidden sm:h-[220px] xl:h-[273px]">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 399px"
        />
        <div className="absolute left-0 top-0 overflow-hidden rounded-br-[19px] bg-[#ed2024] px-5 py-3 sm:px-6 sm:py-4">
          <span className="text-[15px] font-extrabold leading-normal text-white sm:text-xl">
            {card.number}
          </span>
        </div>
      </div>

      <div className="flex flex-col px-6 pb-7 pt-6 sm:px-[35px] sm:pb-[37px] sm:pt-[35px]">
        <h3 className="text-lg font-extrabold leading-[1.25] tracking-[-0.4px] text-[#111] sm:text-2xl">
          {card.title}
        </h3>
        <p className="mt-3 text-sm leading-[22px] text-[#4f4f4f] sm:mt-4 sm:text-base sm:leading-[25px]">
          {card.description}
        </p>
      </div>
    </motion.article>
  );
}

export function IndustriesSection() {
  return (
    <section className="relative w-full border-b border-black/10 bg-white font-[family-name:var(--font-manrope)] text-[#111]">
      <div className="relative mx-auto w-full max-w-[1740px] px-5 py-14 sm:px-8 lg:px-[107px] lg:py-[107px]">
        <motion.div
          className="mb-12 flex flex-col gap-10 lg:mb-[67px] lg:flex-row lg:items-center lg:justify-between lg:gap-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <div className="flex shrink-0 flex-col gap-[29px]">
            <SectionBadge />

            <motion.h2
              variants={aboutHeadlineStagger}
              className="whitespace-nowrap text-[clamp(1.5rem,3.5vw,3.33rem)] font-extrabold leading-[0.95] tracking-[-1.12px] text-[#111]"
            >
              <motion.span variants={aboutHeadlineChunk}>
                Engineered for Every Sector
              </motion.span>
            </motion.h2>
          </div>

          <div className="flex items-start gap-8 lg:gap-10">
            <motion.div
              variants={drawVertical}
              className="hidden h-[140px] w-[1.3px] shrink-0 origin-top bg-[#dedede] lg:block lg:h-[187px]"
              aria-hidden
            />
            <motion.p
              variants={fadeUp}
              className="max-w-[560px] text-[17px] leading-[1.7] text-[#4f4f4f] sm:text-xl lg:text-2xl"
            >
              From heavy industrial plants to high-precision manufacturing
              facilities, Mekark delivers engineering-led EPC solutions across
              diverse industrial sectors, built for performance, scale, and long
              term reliability
            </motion.p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-4 xl:gap-[37px]">
          {INDUSTRIES.map((card) => (
            <IndustryCard key={card.number} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
