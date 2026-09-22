"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ManufacturingSolutionCard } from "./ManufacturingSolutionCard";
import { manufacturingSolutions } from "./data";
import { fadeSlideUp } from "./motion";
import macStyles from "./manufacturingSolutionsMac.module.css";

export function ManufacturingSolutionsSection() {
  return (
    <section
      className={`relative bg-[#ffefef] px-5 pb-12 pt-6 sm:px-10 sm:pb-16 sm:pt-8 lg:px-12 lg:pb-24 lg:pt-12 xl:px-16 2xl:px-20 ${macStyles.section}`}
      aria-label="FMCG manufacturing facility construction across South India"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[391px] overflow-hidden opacity-15"
      >
        <Image
          src="/images/industries/fmcg/fmcg-facility-cta/solutions-grid.webp"
          alt="Decorative grid background"
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>

      <div
        className={`relative mx-auto flex w-full max-w-[1720px] flex-col gap-8 sm:gap-12 lg:gap-16 ${macStyles.sectionInner}`}
      >
        <div
          className={`mx-auto flex w-full max-w-[1452px] flex-col items-start gap-3 text-left sm:items-center sm:gap-4 sm:text-center ${macStyles.headerBlock}`}
        >
          <motion.h2
            className={`max-w-[1356px] text-[26px] font-bold leading-tight tracking-[-0.8px] text-[#111] sm:text-[40px] sm:tracking-[-1.33px] lg:text-[50px] lg:leading-[60px] ${macStyles.title}`}
            custom={0}
            variants={fadeSlideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className={macStyles.titleLineFirst}>
              FMCG Manufacturing Facility Construction Across South{" "}
            </span>
            <span className={macStyles.titleLineSecond}>
              India&apos;s Growth Hubs
            </span>
          </motion.h2>
          <motion.p
            className={`max-w-[1273px] text-sm leading-relaxed text-black sm:text-base sm:leading-[27px] lg:text-lg ${macStyles.subtitle}`}
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

        <div className={macStyles.mobileStack}>
          {manufacturingSolutions.map((solution, index) => (
            <ManufacturingSolutionCard
              key={solution.title}
              solution={solution}
              index={index}
              mobile
            />
          ))}
        </div>

        <div className={`hidden grid-cols-2 gap-x-8 gap-y-12 min-[769px]:grid lg:grid-cols-3 2xl:grid-cols-6 ${macStyles.grid}`}>
          {manufacturingSolutions.map((solution, index) => (
            <ManufacturingSolutionCard
              key={solution.title}
              solution={solution}
              index={index}
            />
          ))}
        </div>

        <motion.p
          className={`mx-auto max-w-[1212px] text-left text-sm leading-relaxed text-[#8b91a0] sm:text-center sm:text-base sm:leading-[23px] lg:text-lg ${macStyles.footer}`}
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
          – Mekark&apos;s FMCG facility engineering is{" "}
          <br className="hidden lg:block" />
          customised to your production process and compliance requirements.
        </motion.p>
      </div>
    </section>
  );
}
