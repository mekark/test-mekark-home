"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import GridBackground from "@/components/services/multi-storey/GridBackground";

const deliverySteps = [
  {
    title: "Site Analysis & Soil Testing",
    body: "Feasibility studies for your project.",
    icon: "/images/services/multi-storey/frame212/icons/site-analysis.svg",
  },
  {
    title: "Project Planning & Design",
    body: "Structural design, floor planning & cost estimate for approval.",
    icon: "/images/services/multi-storey/frame212/icons/planning.svg",
  },
  {
    title: "Permitting & Approvals",
    body: "Obtaining permits & approvals for you.",
    icon: "/images/services/multi-storey/frame212/icons/permits.svg",
  },
  {
    title: "Steel Fabrication & Erection",
    body: "Factory-fabricated steel erected on site, inspected at every floor.",
    icon: "/images/services/multi-storey/frame212/icons/fabrication.svg",
  },
  {
    title: "MEP & Finishes",
    body: "Mechanical, electrical & plumbing systems, with high-quality finishes.",
    icon: "/images/services/multi-storey/frame212/icons/wrench.svg",
  },
  {
    title: "Handover & Support",
    body: "Inspections, documentation & after-project support.",
    icon: "/images/services/multi-storey/frame212/icons/handover.svg",
  },
] as const;

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function HowWeDeliver() {
  return (
    <section className="relative overflow-visible bg-white px-5 pt-14 pb-14 text-gray-100 sm:px-8 sm:pt-20 sm:pb-16 lg:px-10 lg:pt-[107px] lg:pb-[80px]">
      <GridBackground position="bottom" />

      <div className="relative z-10 mx-auto max-w-[1732px]">
        <motion.h2
          className="mx-auto mb-10 text-center text-[28px] leading-[1.2] font-bold tracking-[-1px] sm:mb-12 sm:text-[42px] sm:tracking-[-1.33px] lg:mb-[53px] lg:text-[53.33px] lg:leading-[65.33px]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          How We Deliver Your Project
        </motion.h2>

        {/* ─── Mobile — vertical process timeline ─── */}
        <ol className="relative mx-auto max-w-[420px] list-none sm:hidden">
          {/* Continuous rail */}
          <span
            className="pointer-events-none absolute top-5 bottom-5 left-[27px] w-px bg-[#f0c8cb]"
            aria-hidden
          />

          {deliverySteps.map((step, index) => {
            const num = String(index + 1).padStart(2, "0");
            return (
              <motion.li
                key={step.title}
                className="relative grid grid-cols-[56px_1fr] gap-x-3 pb-8 last:pb-0"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.45,
                  ease: easeOut,
                  delay: 0.04 * index,
                }}
              >
                <div className="relative z-[1] flex flex-col items-center">
                  <div className="flex size-[56px] items-center justify-center rounded-[16px] bg-lavenderblush ring-4 ring-white">
                    <div className="relative size-7">
                      <Image
                        src={step.icon}
                        alt=""
                        fill
                        sizes="28px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="min-w-0 pt-1">
                  <div className="mb-1.5 flex items-center gap-2">
                    <span className="font-montserrat text-[12px] font-bold tracking-[1.5px] text-red">
                      STEP {num}
                    </span>
                  </div>
                  <h3 className="font-montserrat text-[16px] leading-[21px] font-bold text-darkslategray">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 font-montserrat text-[14px] leading-[20px] text-dimgray">
                    {step.body}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ol>

        {/* ─── Tablet + desktop grid (unchanged) ─── */}
        <div className="hidden gap-8 sm:grid sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 xl:grid-cols-6 xl:gap-8">
          {deliverySteps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                ease: easeOut,
                delay: 0.05 * index,
              }}
            >
              <div className="relative mb-9 h-[107px] w-[107px] rounded-[21.33px] bg-lavenderblush">
                <div className="absolute top-1/2 left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2">
                  <Image
                    src={step.icon}
                    alt=""
                    fill
                    sizes="40px"
                    className="object-contain"
                  />
                </div>
                {index < deliverySteps.length - 1 ? (
                  <Image
                    src="/images/services/multi-storey/frame212/icons/arrow-step.svg"
                    alt=""
                    width={67}
                    height={20}
                    className="absolute top-[60px] left-[145px] hidden h-5 w-[67px] xl:block"
                  />
                ) : null}
              </div>
              <h3 className="font-montserrat text-[17px] leading-[21.33px] font-bold text-darkslategray sm:text-[18.67px]">
                {step.title}
              </h3>
              <p className="mt-3 font-montserrat text-base leading-[21.33px] text-dimgray">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
