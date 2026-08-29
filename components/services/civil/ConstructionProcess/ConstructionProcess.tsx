"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    icon: "/images/services/civil/process/compass.svg",
    title: "Site Analysis, Planning & Design",
    description:
      "Conducting feasibility studies, soil testing, structural design, and cost estimation for project approval.",
    titleLeading: "leading-[21.33px]",
    descTop: "mt-[28px]",
    showArrow: true,
  },
  {
    icon: "/images/services/civil/process/file-check.svg",
    title: "Permitting & Approvals",
    description: "Obtaining permits & approvals for you.",
    titleLeading: "leading-[26.87px]",
    descTop: "mt-[11.36px]",
    showArrow: true,
  },
  {
    icon: "/images/services/civil/process/building.svg",
    title: "Foundation & Structure Construction",
    description: "Construction using RCC with quality inspections throughout.",
    titleLeading: "leading-[21.33px]",
    descTop: "mt-[32px]",
    showArrow: true,
  },
  {
    icon: "/images/services/civil/process/wrench.svg",
    title: "MEP & Finishes",
    description:
      "Installation of mechanical, electrical & plumbing systems with high-quality finishes.",
    titleLeading: "leading-[21.33px]",
    descTop: "mt-[16px]",
    showArrow: true,
  },
  {
    icon: "/images/services/civil/process/clipboard.svg",
    title: "Handover & Support",
    description: "Inspections, documentation & after-project support.",
    titleLeading: "leading-[21.33px]",
    descTop: "mt-[16px]",
    showArrow: false,
  },
] as const;

export default function ConstructionProcess() {
  return (
    <section
      id="process"
      className="relative h-auto w-full shrink-0 overflow-hidden bg-white px-5 py-16 text-left font-manrope text-[53.33px] text-gray sm:px-8 sm:py-20 lg:h-[590.7px] lg:px-0 lg:py-0"
      aria-label="How we deliver your civil construction project"
    >
      {/* Background grid — visible along section bottom */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[200px] opacity-[0.15] sm:h-[280px] lg:h-[390.7px]"
        aria-hidden
      >
        <div className="relative h-full w-full -scale-y-100">
          <Image
            src="/images/services/civil/process/grid.png"
            alt=""
            fill
            className="object-cover object-top"
            sizes="100vw"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1706px] flex-col items-center gap-10 lg:absolute lg:inset-x-[107px] lg:top-[107px] lg:h-[399px] lg:max-w-none lg:gap-[53.3px]">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55 }}
          className="relative w-full max-w-[1147px] text-center text-[26px] font-bold tracking-[-1.33px] leading-[1.2] text-gray sm:text-[36px] sm:leading-[44px] lg:h-[65px] lg:w-[1146px] lg:max-w-none lg:text-[53.33px] lg:leading-[65.33px]"
        >
          How We Deliver Your Civil Construction Project
        </motion.h2>

        {/* Mobile / tablet grid — centered cards */}
        <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:hidden">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative flex flex-col items-center text-center ${
                index === steps.length - 1 ? "sm:col-span-2 sm:mx-auto sm:max-w-[280px]" : ""
              }`}
            >
              <div className="relative mb-8 size-[106.7px]">
                <div className="absolute inset-0 rounded-[21.33px] bg-[#FDEBEB]" />
                <div className="absolute left-[33.33px] top-[33.33px] size-10 overflow-hidden">
                  <Image
                    src={step.icon}
                    alt=""
                    width={40}
                    height={40}
                    className="size-full object-contain"
                  />
                </div>
              </div>
              <h3 className="mb-2.5 font-montserrat text-[18.67px] font-bold leading-[21.33px] text-darkslategray">
                {step.title}
              </h3>
              <p className="mx-auto max-w-[271px] font-montserrat text-num-16 font-normal leading-[21.33px] text-dimgray">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Desktop row — Figma 1413.3px, centered under heading */}
        <div className="mx-auto hidden w-[1413.3px] items-start justify-center gap-8 font-montserrat text-num-18_67 text-darkslategray lg:flex">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative h-[274.7px] w-[257.3px] shrink-0 last:w-[258.7px] [&:nth-last-child(2)]:w-[258.7px]"
            >
              <div className="absolute left-0 top-0 size-[106.7px] rounded-[21.33px] bg-[#FDEBEB]" />
              <div className="absolute left-[33.33px] top-[33.33px] size-10 overflow-hidden">
                <Image
                  src={step.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="size-full object-contain"
                />
              </div>
              {step.showArrow && (
                <Image
                  src="/images/services/civil/process/arrow.svg"
                  alt=""
                  width={67}
                  height={20}
                  className="pointer-events-none absolute left-[144px] top-[60px] z-10 max-h-full w-[66.7px]"
                  style={{ width: 66.7, height: "auto" }}
                />
              )}
              <div className="absolute left-0 top-[145.33px] w-full text-left">
                <h3
                  className={`relative w-full font-bold text-num-18_67 text-darkslategray ${step.titleLeading}`}
                >
                  {step.title}
                </h3>
                <p
                  className={`relative w-full max-w-[270.7px] font-normal text-num-16 leading-[21.33px] text-dimgray ${step.descTop}`}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
