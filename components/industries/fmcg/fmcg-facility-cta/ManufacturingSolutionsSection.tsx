"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ManufacturingSolutionCard } from "./ManufacturingSolutionCard";
import { manufacturingSolutions } from "./data";
import { fadeSlideUp } from "./motion";
import {
  MOBILE_FACILITY_CAROUSEL_HINT,
  MOBILE_FACILITY_CAROUSEL_ITEM,
  MOBILE_FACILITY_CAROUSEL_TRACK,
} from "@/components/industries/shared/industryMobileFacilityCarousel";

export function ManufacturingSolutionsSection() {
  return (
    <section
      className="relative bg-[#ffefef] px-5 pb-12 pt-6 sm:px-10 sm:pb-16 sm:pt-8 lg:px-12 lg:pb-24 lg:pt-12 xl:px-16 2xl:px-20"
      aria-label="FMCG manufacturing facility construction across South India"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[391px] overflow-hidden opacity-15"
      >
        <Image
          src="/images/industries/fmcg/fmcg-facility-cta/solutions-grid.png"
          alt=""
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1720px] flex-col gap-8 sm:gap-12 lg:gap-16">
        <div className="mx-auto flex w-full max-w-[1452px] flex-col items-start gap-3 text-left sm:items-center sm:gap-4 sm:text-center">
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.14em] text-[#e50818] sm:hidden"
            custom={0}
            variants={fadeSlideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            South India coverage
          </motion.p>
          <motion.h2
            className="max-w-[1356px] text-[26px] font-bold leading-tight tracking-[-0.8px] text-[#111] sm:text-[40px] sm:tracking-[-1.33px] lg:text-[50px] lg:leading-[60px]"
            custom={0}
            variants={fadeSlideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            FMCG Manufacturing Facility Construction Across South India&apos;s
            Growth Hubs
          </motion.h2>
          <motion.p
            className="max-w-[1273px] text-sm leading-relaxed text-black sm:text-base sm:leading-[27px] lg:text-lg"
            custom={0.1}
            variants={fadeSlideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Our hygienic facility and warehousing construction serves FMCG
            manufacturers across Tamil Nadu, Karnataka, Andhra Pradesh,
            Telangana, and Kerala
          </motion.p>
        </div>

        <div className="sm:hidden">
          <div className={MOBILE_FACILITY_CAROUSEL_TRACK}>
            {manufacturingSolutions.map((solution, index) => (
              <div key={solution.title} className={MOBILE_FACILITY_CAROUSEL_ITEM}>
                <ManufacturingSolutionCard
                  solution={solution}
                  index={index}
                  mobile
                />
              </div>
            ))}
          </div>
          <p className={`${MOBILE_FACILITY_CAROUSEL_HINT} sm:!hidden`}>
            Swipe to explore all {manufacturingSolutions.length} solutions
          </p>
        </div>

        <div className="hidden grid-cols-2 gap-x-8 gap-y-12 sm:grid lg:grid-cols-3 2xl:grid-cols-6">
          {manufacturingSolutions.map((solution, index) => (
            <ManufacturingSolutionCard
              key={solution.title}
              solution={solution}
              index={index}
            />
          ))}
        </div>

        <motion.p
          className="mx-auto max-w-[1212px] text-left text-sm leading-relaxed text-[#8b91a0] sm:text-center sm:text-base sm:leading-[23px] lg:text-lg"
          custom={0.2}
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Wherever you&apos;re located in South India{" "}
          <span className="font-semibold text-[#e50818]">
            Chennai, Coimbatore, Hosur, Bengaluru, Hyderabad, or Kochi
          </span>{" "}
          – Mekark&apos;s FMCG facility engineering is customised to your
          production process and compliance requirements.
        </motion.p>
      </div>
    </section>
  );
}
