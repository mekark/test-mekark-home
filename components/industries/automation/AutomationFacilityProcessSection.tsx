"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
  width?: number;
};

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Process & Feasibility Study",
    description:
      "Understanding your production line layout, ESD/vibration control needs, and automation roadmap before design begins.",
    width: 274,
  },
  {
    number: "02",
    title: "Design & Engineering",
    description:
      "Structural layout, electrical zoning, HVAC, and MEP coordination planned into a build-ready engineering package using STAAD Pro, TEKLA, and Autodesk.",
    width: 244,
  },
  {
    number: "03",
    title: "Factory Fabrication",
    description:
      "Precision manufacturing at our Tamil Nadu plants, with structural steel, cladding, and insulated panels fabricated to exact specs.",
    width: 257,
  },
  {
    number: "04",
    title: "Civil, Structural & MEP Execution",
    description:
      "ESD flooring, steel framing, HVAC, structured cabling, and utility integration executed with precision sequencing for a production-ready base.",
    width: 266,
  },
  {
    number: "05",
    title: "Commissioning & Handover",
    description:
      "Testing, precision checks, and final commissioning completed; your automation facility handed over production-ready.",
    width: 245,
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

function ProcessArrow({ className }: { className?: string }) {
  return (
    <div
      className={`relative shrink-0 ${className ?? ""}`}
      style={{ width: 67, height: 20 }}
      aria-hidden
    >
      <Image
        src="/images/industries/automation/automation-facilities/process-arrow.svg"
        alt=""
        fill
        className="object-contain"
      />
    </div>
  );
}

function ProcessStepCard({ number, title, description, width }: ProcessStep) {
  return (
    <article
      className="flex flex-col gap-3 sm:gap-[14px]"
      style={{ maxWidth: width ? `${width}px` : undefined }}
    >
      <p className="font-[family-name:var(--font-manrope)] text-[32px] font-medium leading-none text-[#f01d23] sm:text-[40px]">
        {number}
      </p>
      <div className="flex flex-col gap-2 sm:gap-2.5">
        <h3 className="font-[family-name:var(--font-manrope)] text-base font-semibold leading-snug text-[#3c3938] sm:text-lg sm:leading-normal">
          {title}
        </h3>
        <p className="font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-[#555] sm:text-base sm:leading-[21px]">
          {description}
        </p>
      </div>
    </article>
  );
}

function MobileProcessTimeline() {
  return (
    <motion.ol
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={containerVariants}
      className="relative m-0 mx-auto w-full max-w-[640px] list-none p-0 md:hidden"
    >
      <div
        aria-hidden
        className="absolute top-5 bottom-5 left-5 w-px bg-gradient-to-b from-[#F01D23]/50 via-[#F01D23]/25 to-[#F01D23]/10"
      />

      {steps.map((step, index) => (
        <motion.li
          key={step.number}
          variants={itemVariants}
          className={`relative flex gap-4 ${index < steps.length - 1 ? "pb-5" : ""}`}
        >
          <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(240,29,35,0.15)] ring-2 ring-[#F01D23]/20">
            <span className="font-[family-name:var(--font-manrope)] text-sm font-semibold text-[#F01D23]">
              {step.number}
            </span>
          </div>

          <article className="min-w-0 flex-1 overflow-hidden rounded-[20px] border border-[#E3E4E7] bg-white p-4 shadow-[0_2px_12px_rgba(17,17,17,0.04)]">
            <span className="inline-flex rounded-full bg-[#FFEFEF] px-2.5 py-0.5 font-[family-name:var(--font-manrope)] text-xs font-bold text-[#F01D23]">
              Step {step.number}
            </span>
            <h3 className="mt-2 font-[family-name:var(--font-manrope)] text-base font-semibold leading-snug text-[#3C3938]">
              {step.title}
            </h3>
            <p className="mt-2 font-[family-name:var(--font-manrope)] text-sm font-normal leading-relaxed text-[#555]">
              {step.description}
            </p>
          </article>
        </motion.li>
      ))}
    </motion.ol>
  );
}

function TabletProcessSteps() {
  return (
    <div className="hidden flex-col gap-10 md:flex xl:hidden">
      {steps.map((step, index) => (
        <div key={step.number} className="flex flex-col items-start gap-6">
          <ProcessStepCard {...step} />
          {index < steps.length - 1 ? (
            <ProcessArrow className="rotate-90 self-center" />
          ) : null}
        </div>
      ))}
    </div>
  );
}

function DesktopProcessSteps() {
  return (
    <div className="hidden items-start gap-7 xl:flex">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center gap-7">
          <ProcessStepCard {...step} />
          {index < steps.length - 1 ? <ProcessArrow /> : null}
        </div>
      ))}
    </div>
  );
}

export default function AutomationFacilityProcessSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-12 sm:px-10 sm:py-16 lg:px-20 lg:py-24">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden opacity-[0.05]"
        style={{ height: 349 }}
        aria-hidden
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/industries/automation/automation-facilities/grid-bg.png"
          alt=""
          className="h-full w-full scale-y-[-1] object-cover"
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1757px] flex-col gap-10 sm:gap-16 lg:gap-[64px]">
        <header className="mx-auto max-w-[1232px] text-center">
          <h2 className="font-[family-name:var(--font-manrope)] text-[28px] font-bold leading-[1.22] tracking-[-0.025em] text-[#111] sm:text-[36px] lg:text-[53px]">
            Our Automation Facility Project Execution Process
          </h2>
        </header>

        <MobileProcessTimeline />
        <TabletProcessSteps />
        <DesktopProcessSteps />
      </div>
    </section>
  );
}
