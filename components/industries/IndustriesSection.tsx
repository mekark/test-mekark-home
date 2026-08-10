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

const VIEWPORT = { once: true, margin: "-80px" as const };

const CARD_SHADOW = "0px 18px 45px 0px rgba(0,0,0,0.09)";

const INDUSTRIES = [
  {
    number: "01",
    title: "Manufacturing Industry",
    description:
      "Scalable infrastructure for high-volume production and assembly.",
    image: "/images/industries/01-manufacturing-v2.png",
  },
  {
    number: "02",
    title: "Logistics & Warehousing",
    description:
      "High-capacity facilities for storage and distribution networks.",
    image: "/images/industries/02-logistics-v2.png",
  },
  {
    number: "03",
    title: "Food Processing Industry",
    description: "Hygienic and temperature-controlled building solutions.",
    image: "/images/industries/03-food-processing-v2.png",
  },
  {
    number: "04",
    title: "Road & Civil Construction",
    description:
      "Integrated civil and structural works for roads, bridges, and large-scale ground infrastructure.",
    image: "/images/industries/04-road-civil-v2.png",
  },
  {
    number: "05",
    title: "Pharmaceutical Industry",
    description:
      "Compliance-driven infrastructure for controlled environments.",
    image: "/images/industries/05-pharmaceutical-v2.png",
  },
  {
    number: "06",
    title: "Industrial & Infrastructure",
    description:
      "Large-scale steel solutions for major infrastructure projects.",
    image: "/images/industries/06-industrial-v2.png",
  },
  {
    number: "07",
    title: "Clean Rooms",
    description:
      "Contamination-controlled environments engineered for critical industries.",
    image: "/images/industries/07-clean-rooms-v2.png",
  },
  {
    number: "08",
    title: "Data Centers",
    description:
      "Mission-critical infrastructure designed for high uptime and secure operations.",
    image: "/images/industries/08-data-centers-v2.png",
  },
  {
    number: "09",
    title: "Energy & Renewables",
    description:
      "Sustainable industrial solutions for solar, wind, battery storage, and clean energy facilities.",
    image: "/images/industries/09-energy-renewables-v2.png",
    wide: true,
    imageHeight: 220,
  },
  {
    number: "10",
    title: "Pipeline Infrastructure",
    description:
      "Structural solutions for pipeline networks, process piping, and industrial fluid transport.",
    image: "/images/industries/10-pipeline-v2.png",
    wide: true,
  },
] as const;

type IndustryItem = (typeof INDUSTRIES)[number];
type IndustryCardProps = IndustryItem & { wide?: boolean; imageHeight?: number };

function SectionBadge() {
  return (
    <motion.div
      variants={aboutBadgeReveal}
      className="relative box-border flex w-fit items-center gap-[7px] rounded-full border border-solid border-[0.88px] border-crimson-100 bg-crimson-200 px-[11.5px] py-[6px] text-left font-inter text-xs text-red-100"
    >
      <motion.div
        variants={aboutBadgeDot}
        className="relative size-[7px] rounded-full bg-red-200"
        aria-hidden
      />
      <span className="font-medium leading-[14.1px] tracking-[0.53px]">
        What We Do
      </span>
    </motion.div>
  );
}

function IndustryCard({ card }: { card: IndustryCardProps }) {
  const imageHeight = card.imageHeight ?? 205;

  return (
    <motion.article
      variants={scaleIn}
      whileHover={{
        y: -6,
        boxShadow: "0px 24px 52px 0px rgba(0,0,0,0.12)",
        transition: { type: "spring", stiffness: 340, damping: 22 },
      }}
      style={{ boxShadow: CARD_SHADOW }}
      className={`flex flex-col overflow-hidden rounded-[18px] border border-[#eee] bg-white ${
        card.wide ? "xl:col-span-2" : ""
      }`}
    >
      <div
        className="relative w-full shrink-0 overflow-hidden"
        style={{ height: imageHeight }}
      >
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover"
          sizes={
            card.wide
              ? "(max-width: 1280px) 100vw, 626px"
              : "(max-width: 1280px) 50vw, 299px"
          }
        />
        <div className="absolute left-0 top-0 overflow-hidden rounded-br-[14px] bg-[#ed2024] px-[18px] py-3">
          <span className="text-[15px] font-extrabold leading-normal text-white">
            {card.number}
          </span>
        </div>
      </div>

      <div className="flex flex-col px-[26px] pb-7 pt-[26px]">
        <h3 className="text-lg font-extrabold leading-[1.25] tracking-[-0.3px] text-[#111]">
          {card.title}
        </h3>
        <p className="mt-3 text-xs leading-[19px] text-[#4f4f4f]">
          {card.description}
        </p>
      </div>
    </motion.article>
  );
}

export function IndustriesSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-black/10 bg-white text-[#111]">
      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-20 lg:py-20">
        <motion.div
          className="mb-[50px] flex flex-col gap-10 lg:mb-[50px] lg:flex-row lg:items-center lg:justify-between lg:gap-16 xl:gap-[153px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <div className="flex shrink-0 flex-col gap-[22px]">
            <SectionBadge />

            <motion.h2
              variants={aboutHeadlineStagger}
              className="max-w-[640px] text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-[0.95] tracking-[-0.84px] lg:text-[40px]"
            >
              <motion.span variants={aboutHeadlineChunk}>
                Industries We{" "}
              </motion.span>
              <motion.span
                className="text-[#ed2024]"
                variants={aboutHeadlineChunk}
              >
                Build For
              </motion.span>
            </motion.h2>
          </div>

          <div className="flex items-start gap-8 lg:gap-[46px]">
            <motion.div
              variants={drawVertical}
              className="hidden h-[140px] w-px shrink-0 origin-top bg-[#dedede] lg:block"
              aria-hidden
            />
            <motion.p
              variants={fadeUp}
              className="max-w-[440px] text-[17px] leading-[1.7] text-[#4f4f4f] sm:text-[19px]"
            >
              From heavy industrial plants to high-precision manufacturing
              facilities, Mekark delivers engineering-led EPC solutions across
              diverse industrial sectors, built for performance, scale, and long
              term reliability.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {INDUSTRIES.map((card) => (
            <IndustryCard key={card.number} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
