"use client";

import Image from "next/image";
import { Fragment } from "react";
import { motion } from "framer-motion";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
  cardClass?: string;
  descriptionClass?: string;
  numberGapClass?: string;
  textGapClass?: string;
};

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Process & Feasibility Study",
    description:
      "Understanding your assembly line layout, cleanroom class, utility requirements, and expansion plans before design begins.",
    cardClass: "w-[274px]",
    descriptionClass: "w-[274px]",
    numberGapClass: "gap-[14px]",
    textGapClass: "gap-[10px]",
  },
  {
    number: "02",
    title: "Design & Engineering",
    description:
      "Structural layout, electrical zoning, HVAC, and MEP coordination planned into a build-ready engineering package using STAAD Pro, TEKLA, and Autodesk.",
    cardClass: "w-[226px]",
    descriptionClass: "w-[244px]",
    numberGapClass: "gap-[14px]",
    textGapClass: "gap-[10px]",
  },
  {
    number: "03",
    title: "Factory Fabrication",
    description:
      "Precision manufacturing at our Tamil Nadu plants, with structural steel, cladding, and components fabricated to exact specs.",
    descriptionClass: "w-[257px]",
    numberGapClass: "gap-[14px]",
    textGapClass: "gap-[10px]",
  },
  {
    number: "04",
    title: "Civil, Structural & MEP Execution",
    description:
      "ESD flooring, steel framing, HVAC, and utility integration executed with precision sequencing for a compliant, production-ready base.",
    cardClass: "w-[249px]",
    descriptionClass: "w-[249px]",
    numberGapClass: "gap-[10px]",
    textGapClass: "gap-[14px]",
  },
  {
    number: "05",
    title: "Commissioning & Handover",
    description:
      "Testing, safety checks, and final commissioning completed; your electronics facility handed over production-ready.",
    descriptionClass: "w-[245px]",
    numberGapClass: "gap-[10px]",
    textGapClass: "gap-[14px]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function StepArrow({ className }: { className?: string }) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden ${className ?? "h-[14px] w-[66.667px]"}`}
      aria-hidden
    >
      <Image
        src="/images/industries/electronics/execution-process/arrow.svg"
        alt=""
        fill
        className="object-contain"
      />
    </div>
  );
}

function ProcessStepCard({
  number,
  title,
  description,
  cardClass = "min-w-0",
  descriptionClass = "w-full",
  numberGapClass = "gap-[14px]",
  textGapClass = "gap-[10px]",
}: ProcessStep) {
  return (
    <article
      className={`flex shrink-0 flex-col items-start justify-center ${numberGapClass} ${cardClass}`}
    >
      <p className="whitespace-nowrap font-montserrat text-[40px] font-medium leading-normal text-red">
        {number}
      </p>
      <div className={`flex w-full flex-col items-start ${textGapClass}`}>
        <h3 className="font-montserrat text-[18px] font-semibold leading-normal text-darkslategray">
          {title}
        </h3>
        <p
          className={`font-montserrat text-base font-normal leading-[21.33px] text-dimgray ${descriptionClass}`}
        >
          {description}
        </p>
      </div>
    </article>
  );
}

function MobileProcessTimeline({ steps: timelineSteps }: { steps: ProcessStep[] }) {
  return (
    <ol className="relative mx-auto w-full max-w-[640px]">
      <div
        className="absolute top-5 bottom-5 left-5 w-px bg-gradient-to-b from-[#f01d23]/50 via-[#f01d23]/25 to-[#f01d23]/10"
        aria-hidden
      />

      {timelineSteps.map((step, index) => (
        <motion.li
          key={step.number}
          variants={itemVariants}
          className={`relative flex gap-4 ${index < timelineSteps.length - 1 ? "pb-5" : ""}`}
        >
          <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(240,29,35,0.15)] ring-2 ring-[#f01d23]/20">
            <span className="font-montserrat text-sm font-semibold text-red">
              {step.number}
            </span>
          </div>

          <article className="min-w-0 flex-1 overflow-hidden rounded-[20px] border border-[#e3e4e7] bg-white p-4 shadow-[0_2px_12px_rgba(17,17,17,0.04)] sm:p-5">
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded-full bg-[#ffefef] px-2.5 py-0.5 font-manrope text-xs font-bold text-[#f01d23]">
                Step {step.number}
              </span>
            </div>
            <h3 className="font-manrope text-base font-semibold leading-snug text-[#3c3938] sm:text-lg">
              {step.title}
            </h3>
            <p className="mt-2 font-manrope text-sm font-normal leading-relaxed text-[#555] sm:text-base sm:leading-[21.33px]">
              {step.description}
            </p>
          </article>
        </motion.li>
      ))}
    </ol>
  );
}

export default function ExecutionProcessSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 lg:py-24">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[349px] opacity-5"
        aria-hidden
      >
        <div className="relative h-full w-full -scale-y-100">
          <Image
            src="/images/industries/electronics/execution-process/grid.png"
            alt=""
            fill
            className="object-cover object-bottom"
            sizes="100vw"
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-[1920px] px-6 lg:px-20">
        <motion.header
          className="mx-auto mb-12 max-w-[1218px] text-center lg:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <h2 className="mx-auto inline-flex w-full max-w-[1218px] items-center justify-center text-center font-manrope text-[32px] font-bold leading-tight tracking-[-1.33px] text-gray sm:text-[40px] lg:h-[66px] lg:text-[53.33px] lg:leading-[65.33px] lg:whitespace-nowrap">
            Our Electronics Facility Project Execution Process
          </h2>
        </motion.header>

        <motion.div
          className="mx-auto max-w-[640px] lg:hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <MobileProcessTimeline steps={steps} />
        </motion.div>

        <motion.div
          className="mx-auto hidden max-w-[1757px] items-start gap-[28px] lg:flex"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {steps.map((step, index) => (
            <Fragment key={step.number}>
              <motion.div variants={itemVariants} className="shrink-0">
                <ProcessStepCard {...step} />
              </motion.div>
              {index < steps.length - 1 ? (
                <motion.div
                  variants={itemVariants}
                  className="flex shrink-0 self-center"
                >
                  <StepArrow />
                </motion.div>
              ) : null}
            </Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
