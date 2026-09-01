"use client";

import Image from "next/image";
import { Fragment } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Free Consultation & Site Study",
    desc: "Our textile construction expert reviews your machinery layout and statutory requirements before any drawing is made.",
    width: "lg:w-[274px]",
  },
  {
    num: "02",
    title: "Design & Engineering",
    desc: "Structural design, architectural drawings, MEP layouts, and detailed BOQ tailored to your operation.",
    width: "lg:w-[244px]",
  },
  {
    num: "03",
    title: "Approvals & Permits",
    desc: "Precision manufacturing at our plant - columns, rafters, purlins, and secondary components fabricated to exact specs.",
    width: "lg:w-[257px]",
  },
  {
    num: "04",
    title: "Construction & Erection",
    desc: "Foundation, steel erection, roofing, flooring, and finishing executed by parallel teams for speed.",
    width: "lg:w-[249px]",
  },
  {
    num: "05",
    title: "Handover & Commissioning",
    desc: "Testing, punch-list closure, as-built drawings, and warranty documents, ready for machine installation.",
    width: "lg:w-[245px]",
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

function ProcessArrow() {
  return (
    <span className="relative hidden h-[20px] w-[66.667px] shrink-0 overflow-hidden xl:block">
      <Image
        src="/images/industries/textile/execution-process/arrow.svg"
        alt=""
        width={67}
        height={20}
        className="size-full"
      />
    </span>
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
          key={step.num}
          variants={itemVariants}
          className={`relative flex gap-4 ${index < steps.length - 1 ? "pb-5" : ""}`}
        >
          <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(240,29,35,0.15)] ring-2 ring-[#F01D23]/20">
            <span className="font-[family-name:var(--font-manrope)] text-sm font-semibold text-[#F01D23]">
              {step.num}
            </span>
          </div>

          <article className="min-w-0 flex-1 overflow-hidden rounded-[20px] border border-[#E3E4E7] bg-white p-4 shadow-[0_2px_12px_rgba(17,17,17,0.04)]">
            <h3 className="font-[family-name:var(--font-manrope)] text-base font-semibold leading-snug text-[#3C3938]">
              {step.title}
            </h3>
            <p className="mt-2 font-[family-name:var(--font-manrope)] text-sm font-normal leading-relaxed text-[#555555]">
              {step.desc}
            </p>
          </article>
        </motion.li>
      ))}
    </motion.ol>
  );
}

function DesktopProcessSteps() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="mt-10 hidden flex-col gap-10 md:flex lg:mt-[64px] lg:flex-row lg:items-center lg:gap-7"
    >
      {steps.map((step, index) => (
        <Fragment key={step.num}>
          {index > 0 && <ProcessArrow />}
          <div
            className={`flex flex-col items-start gap-2.5 lg:gap-[14px] ${step.width}`}
          >
            <p className="font-[family-name:var(--font-manrope)] text-[32px] font-medium leading-normal text-[#F01D23] lg:text-[40px]">
              {step.num}
            </p>
            <div className="flex flex-col items-start gap-2.5">
              <h3 className="font-[family-name:var(--font-manrope)] text-[18px] font-semibold leading-normal text-[#3C3938]">
                {step.title}
              </h3>
              <p className="font-[family-name:var(--font-manrope)] text-[16px] font-normal leading-[21.333px] text-[#555555]">
                {step.desc}
              </p>
            </div>
          </div>
        </Fragment>
      ))}
    </motion.div>
  );
}

export default function ExecutionProcessSection() {
  return (
    <section
      id="execution-process"
      className="relative w-full overflow-hidden bg-white text-black"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-[349px] w-full overflow-hidden"
      >
        <div className="relative -scale-y-100 h-full w-full opacity-5">
          <Image
            src="/images/industries/textile/execution-process/grid.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1920px] px-5 pb-16 pt-12 sm:px-10 lg:px-20 lg:pb-[37px] lg:pt-[60px]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center font-[family-name:var(--font-manrope)] text-[28px] font-bold leading-normal tracking-[-1.333px] text-[#111111] sm:text-[36px] lg:text-[53.333px] lg:leading-[65.333px]"
        >
          Our Textile Factory Execution Process
        </motion.h2>

        <div className="mt-10 lg:mt-[64px]">
          <MobileProcessTimeline />
          <DesktopProcessSteps />
        </div>
      </div>
    </section>
  );
}
