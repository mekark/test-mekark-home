"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { processSteps } from "./data";
import { fadeSlideUp } from "./motion";
import { ProcessConnector } from "./ProcessConnector";
import { ProcessStep } from "./ProcessStep";
import macStyles from "./processMac.module.css";

const MOBILE_DESC_LINES: Record<string, string[]> = {
  "01": [
    "Understanding your production line layout,",
    "hygiene classification, warehousing",
    "requirements, and expansion plans before design begins.",
  ],
  "02": [
    "Structural layout, electrical zoning, HVAC,",
    "and MEP coordination planned into a",
    "build-ready engineering package.",
  ],
  "03": [
    "Precision manufacturing at our Tamil Nadu plants,",
    "with structural steel, cladding, and cold",
    "storage panels fabricated to exact specs.",
  ],
  "04": [
    "Hygienic flooring, steel framing, HVAC,",
    "warehousing, and utility integration",
    "executed for a compliant, production-ready base.",
  ],
  "05": [
    "Testing, hygiene checks, and final",
    "commissioning completed; your facility",
    "handed over production-ready.",
  ],
};

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
          src="/images/industries/fmcg/project-execution-process/grid-bg.webp"
          alt="Decorative grid background"
          fill
          className="scale-y-[-1] object-cover object-top"
          sizes="100vw"
        />
      </div>

      <div
        className={`relative mx-auto flex w-full max-w-[1720px] flex-col gap-8 sm:gap-12 lg:gap-16 ${macStyles.sectionInner}`}
      >
        <div
          className={`mx-auto flex w-full max-w-[1086px] flex-col items-start gap-3 text-left sm:items-center sm:gap-4 sm:text-center ${macStyles.headerBlock}`}
        >
          <motion.h2
            className={`max-w-[1086px] text-[26px] font-bold leading-tight tracking-[-0.8px] text-[#111] sm:text-[40px] sm:tracking-[-1.33px] lg:text-[53px] lg:leading-[65px] ${macStyles.title}`}
            custom={0}
            variants={fadeSlideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className={macStyles.processTitleLine}>
              Our FMCG Facility Project{" "}
            </span>
            <span className={macStyles.processTitleLine}>
              Execution Process
            </span>
          </motion.h2>
        </div>

        <ol className={macStyles.mobileProcess}>
          {processSteps.map((step, index) => (
            <li key={step.number} className={macStyles.mobileStepItem}>
              <div className={macStyles.mobileStep}>
                <div className={macStyles.mobileStepNumber}>{step.number}</div>
                <div className={macStyles.mobileStepContent}>
                  <h3 className={macStyles.mobileStepTitle}>{step.title}</h3>
                  <p className={macStyles.mobileStepDescription}>
                    {(MOBILE_DESC_LINES[step.number] ?? [step.description]).map(
                      (line) => (
                        <span key={line} className={macStyles.mobileDescLine}>
                          {line}
                        </span>
                      ),
                    )}
                  </p>
                </div>
              </div>
              {index < processSteps.length - 1 ? (
                <div className={macStyles.mobileStepArrow} aria-hidden="true">
                  <svg
                    width="24"
                    height="36"
                    viewBox="0 0 24 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2V26"
                      stroke="#8E8E8E"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M5 20L12 29L19 20"
                      stroke="#8E8E8E"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              ) : null}
            </li>
          ))}
        </ol>

        <div
          className={`hidden min-w-0 items-stretch gap-3 min-[1201px]:flex 2xl:gap-4 ${macStyles.stepsRow}`}
        >
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className={`flex min-w-0 flex-1 items-start gap-3 2xl:gap-4 ${macStyles.stepGroup}`}
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
