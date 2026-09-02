"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { processSteps } from "./data";
import { fadeSlideUp } from "./motion";
import { ProcessConnector } from "./ProcessConnector";
import { ProcessStep } from "./ProcessStep";
import macStyles from "./processMac.module.css";

export function ProjectExecutionProcessSection() {
  return (
    <section
      className={`relative overflow-hidden bg-white px-5 pb-12 pt-6 sm:px-10 sm:pb-16 sm:pt-8 lg:px-12 lg:pb-24 lg:pt-12 xl:px-16 2xl:px-20 ${macStyles.section}`}
      aria-label="Our FMCG facility project execution process"
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-[349px] opacity-5 ${macStyles.gridBg}`}
      >
        <Image
          src="/images/industries/fmcg/project-execution-process/grid-bg.png"
          alt=""
          fill
          className="scale-y-[-1] object-cover object-top"
          sizes="100vw"
        />
      </div>

      <div className={`relative mx-auto flex w-full max-w-[1720px] flex-col gap-8 sm:gap-12 lg:gap-16 ${macStyles.sectionInner}`}>
        <div className={`mx-auto flex w-full max-w-[1086px] flex-col items-start gap-3 text-left sm:items-center sm:gap-4 sm:text-center ${macStyles.headerBlock}`}>
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.14em] text-[#f01d23] sm:hidden"
            custom={0}
            variants={fadeSlideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            How we deliver
          </motion.p>
          <motion.h2
            className={`max-w-[1086px] text-[26px] font-bold leading-tight tracking-[-0.8px] text-[#111] sm:text-[40px] sm:tracking-[-1.33px] lg:text-[53px] lg:leading-[65px] ${macStyles.title}`}
            custom={0}
            variants={fadeSlideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Our FMCG Facility Project Execution Process
          </motion.h2>
        </div>

        <div className="relative flex flex-col min-[1201px]:hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-6 left-[15px] top-6 w-px bg-gradient-to-b from-[#f01d23] via-[#f01d23]/35 to-[#f01d23]/10"
          />

          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className={`relative pl-11 ${index < processSteps.length - 1 ? "pb-7" : ""}`}
            >
              <div
                aria-hidden
                className="absolute left-0 top-5 flex size-[30px] items-center justify-center rounded-full border-2 border-[#f01d23] bg-white shadow-[0_2px_8px_rgba(240,29,35,0.15)]"
              >
                <span className="text-[11px] font-bold tabular-nums text-[#f01d23]">
                  {step.number}
                </span>
              </div>

              <ProcessStep step={step} index={index} mobile />
            </div>
          ))}
        </div>

        <div className={`hidden min-w-0 items-stretch gap-5 min-[1201px]:flex 2xl:gap-7 ${macStyles.stepsRow}`}>
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className={`flex min-w-0 flex-1 items-center gap-5 2xl:gap-7 ${macStyles.stepGroup}`}
            >
              <ProcessStep step={step} index={index} />
              {index < processSteps.length - 1 && <ProcessConnector />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
