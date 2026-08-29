"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
};

const stepReveal = {
  hidden: { opacity: 0, x: -18 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

type Solution = {
  title: string;
  description: string;
  image: string;
  objectPosition?: string;
  zoom?: number;
  rotate?: number;
};

const solutions: Solution[] = [
  {
    title: "PEB Design & Engineering",
    description:
      "Structural design and analysis using ETABS, AutoCAD, and STAAD. Pro, Tekla.",
    image: "/images/services/peb/peb-solutions/peb-design-engineering.jpg",
    objectPosition: "38% 25%",
    zoom: 1.15,
  },
  {
    title: "PEB Manufacturing",
    description: "Custom-engineered steel components fabricated in-house",
    image: "/images/services/peb/peb-solutions/peb-manufacturing.jpg",
    objectPosition: "65% 55%",
    zoom: 1.15,
  },
  {
    title: "PEB Erection & Installation",
    description:
      "On-site assembly with safety-compliant, quality-checked execution",
    image: "/images/services/peb/peb-solutions/peb-erection-installation.jpg",
    objectPosition: "45% 42%",
    zoom: 1.1,
  },
  {
    title: "Industrial Sheds & Warehouses",
    description: "PEB structures for storage, logistics, and manufacturing use",
    image: "/images/services/peb/peb-solutions/industrial-sheds-warehouse.png",
    objectPosition: "48% 58%",
    zoom: 1.08,
  },
  {
    title: "Multi-Storey PEB Structures",
    description: "Space-frame and multi-level pre-engineered buildings",
    image: "/images/services/peb/peb-solutions/multi-storey-peb.png",
    objectPosition: "50% 35%",
    zoom: 1.15,
  },
  {
    title: "Pre-Engineered Roofing Systems",
    description: "Durable, weather-resistant PEB roofing solutions",
    image: "/images/services/peb/peb-solutions/pre-engineered-roofing-systems.jpg",
    objectPosition: "50% 45%",
    zoom: 1.1,
    rotate: 90,
  },
];

type ProcessStep = {
  title: string;
  description: string;
  icon: string;
};

const processSteps: ProcessStep[] = [
  {
    title: "Consultation & Requirement Study",
    description: "Understanding your site, load requirements, and timeline",
    icon: "/images/services/peb/peb-solutions/consultation.svg",
  },
  {
    title: "Structural Design & Approval",
    description:
      "Detailed engineering using STAAD.Pro/ETABS/Tekla, shared for your sign-off",
    icon: "/images/services/peb/peb-solutions/structural-design.svg",
  },
  {
    title: "In-House Fabrication",
    description:
      "Manufactured at our X lakh sq. ft. facility under quality checks",
    icon: "/images/services/peb/peb-solutions/fabrication.svg",
  },
  {
    title: "Site Erection & Installation",
    description: "Fast, safety-compliant on-site assembly",
    icon: "/images/services/peb/peb-solutions/installation.svg",
  },
  {
    title: "Handover & Support",
    description:
      "Final inspection, documentation, and after-project support",
    icon: "/images/services/peb/peb-solutions/handover.svg",
  },
];

function SolutionCard({
  solution,
  mobile,
}: {
  solution: Solution;
  mobile?: boolean;
}) {
  const zoom = solution.zoom ?? 1.15;
  const fetchPx = Math.ceil(520 * zoom * (solution.rotate ? 1.25 : 1));

  if (mobile) {
    return (
      <motion.article
        className="flex w-[78vw] max-w-[280px] shrink-0 snap-center flex-col"
        variants={cardReveal}
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[18px]">
          <Image
            src={solution.image}
            alt=""
            fill
            quality={100}
            className="object-cover"
            style={{
              objectPosition: solution.objectPosition ?? "50% 50%",
              transform: `scale(${zoom}) rotate(${solution.rotate ?? 0}deg)`,
            }}
            sizes="280px"
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 to-transparent"
            aria-hidden="true"
          />
          <h3 className="absolute inset-x-0 bottom-0 p-4 font-[family-name:var(--font-montserrat)] text-[0.9375rem] font-bold leading-[1.3] text-white">
            {solution.title}
          </h3>
        </div>
        <p className="mt-3 font-[family-name:var(--font-montserrat)] text-[0.8125rem] font-normal leading-[1.4] text-[#555555]">
          {solution.description}
        </p>
      </motion.article>
    );
  }

  return (
    <motion.article
      className="flex w-full max-w-[22rem] flex-col sm:max-w-[258px]"
      variants={cardReveal}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-[21.33px]">
        <Image
          src={solution.image}
          alt=""
          fill
          quality={100}
          className="object-cover"
          style={{
            objectPosition: solution.objectPosition ?? "50% 50%",
            transform: `scale(${zoom}) rotate(${solution.rotate ?? 0}deg)`,
          }}
          sizes={`(max-width: 767px) ${Math.min(100, Math.ceil(70 * zoom))}vw, ${fetchPx}px`}
        />
      </div>
      <h3 className="mt-[clamp(1.25rem,1.8vw,2.167rem)] font-[family-name:var(--font-montserrat)] text-[clamp(0.9375rem,0.972vw,1.167rem)] font-bold leading-[1.44] text-[#3C3938]">
        {solution.title}
      </h3>
      <p className="mt-2 font-[family-name:var(--font-montserrat)] text-[clamp(0.8125rem,0.833vw,1rem)] font-normal leading-[1.333] text-[#555555]">
        {solution.description}
      </p>
    </motion.article>
  );
}

function ProcessStepItem({
  step,
  showArrow,
  index,
}: {
  step: ProcessStep;
  showArrow: boolean;
  index: number;
}) {
  return (
    <>
      {/* Mobile timeline row */}
      <motion.article
        className="relative flex gap-4 sm:hidden"
        variants={stepReveal}
      >
        <div className="relative flex w-14 shrink-0 flex-col items-center">
          <div className="relative z-10 flex size-14 items-center justify-center rounded-2xl bg-[#FDEBEB]">
            <span className="relative size-7 overflow-hidden">
              <Image
                src={step.icon}
                alt=""
                fill
                className="object-contain"
                sizes="28px"
              />
            </span>
          </div>
          {showArrow ? (
            <span
              className="absolute top-14 bottom-[-1.5rem] w-px bg-[linear-gradient(180deg,#ED1D23_0%,rgba(237,29,35,0.15)_100%)]"
              aria-hidden="true"
            />
          ) : null}
        </div>

        <div className="min-w-0 flex-1 pb-8">
          <p className="font-[family-name:var(--font-manrope)] text-[11px] font-bold tracking-[0.14em] text-[#ED1D23]">
            STEP {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-1.5 font-[family-name:var(--font-montserrat)] text-[0.9375rem] font-bold leading-[1.25] text-[#3C3938]">
            {step.title}
          </h3>
          <p className="mt-1.5 font-[family-name:var(--font-montserrat)] text-[0.8125rem] font-normal leading-[1.45] text-[#555555]">
            {step.description}
          </p>
        </div>
      </motion.article>

      {/* Desktop / tablet card */}
      <motion.article
        className="relative hidden w-full max-w-[22rem] flex-col sm:flex sm:max-w-[258px]"
        variants={stepReveal}
      >
        <div className="relative flex items-center gap-3">
          <div className="relative flex size-[clamp(5.5rem,5.556vw,6.667rem)] shrink-0 items-center justify-center rounded-[21.33px] bg-[#FDEBEB]">
            <span className="relative size-10 overflow-hidden">
              <Image
                src={step.icon}
                alt=""
                fill
                className="object-contain"
                sizes="40px"
              />
            </span>
          </div>
          {showArrow ? (
            <span
              className="pointer-events-none absolute left-[7.5rem] top-1/2 hidden h-[15px] w-[50px] -translate-y-1/2 xl:block"
              aria-hidden="true"
            >
              <Image
                src="/images/services/peb/peb-solutions/process-arrow.svg"
                alt=""
                fill
                className="object-contain"
                sizes="50px"
              />
            </span>
          ) : null}
        </div>
        <h3 className="mt-[clamp(1.75rem,2vw,2.417rem)] font-[family-name:var(--font-montserrat)] text-[clamp(0.9375rem,0.972vw,1.167rem)] font-bold leading-[1.14] text-[#3C3938]">
          {step.title}
        </h3>
        <p className="mt-2 font-[family-name:var(--font-montserrat)] text-[clamp(0.8125rem,0.833vw,1rem)] font-normal leading-[1.333] text-[#555555]">
          {step.description}
        </p>
      </motion.article>
    </>
  );
}

export default function OurPEBSolutions() {
  return (
    <div className="w-full bg-white text-[#111111]">
      {/* Solutions — Figma 1920×754.67 */}
      <section
        className="relative isolate overflow-hidden"
        aria-labelledby="peb-solutions-title"
      >
        <div
          className="pointer-events-none absolute left-0 top-[-13px] h-[clamp(240px,20.35vw,391px)] w-full opacity-15"
          aria-hidden="true"
        >
          <Image
            src="/images/services/peb/peb-solutions/grid.png"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="relative mx-auto flex w-full max-w-[1920px] flex-col items-center px-0 py-12 sm:px-10 sm:py-14 lg:px-[5.556%] lg:py-[5.556%]">
          <motion.h2
            id="peb-solutions-title"
            className="max-w-[18ch] px-5 text-balance text-left font-[family-name:var(--font-manrope)] text-[clamp(1.625rem,7vw,2.25rem)] font-bold leading-[1.15] text-[#111111] sm:max-w-[20ch] sm:px-0 sm:text-center sm:text-[clamp(1.75rem,2.778vw,3.333rem)] sm:leading-[clamp(2rem,3.403vw,4.083rem)]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
          >
            Our Pre-Engineered Building (PEB) Solutions
          </motion.h2>

          <p className="mt-3 max-w-[34ch] px-5 font-[family-name:var(--font-manrope)] text-[0.875rem] font-medium leading-[1.45] text-[#555555] sm:hidden">
            Design, fabricate, and erect — six capabilities under one roof.
          </p>

          {/* Mobile: horizontal snap carousel */}
          <motion.div
            className="mt-8 flex w-full gap-4 overflow-x-auto px-5 pb-3 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory sm:hidden [&::-webkit-scrollbar]:hidden"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {solutions.map((solution) => (
              <SolutionCard
                key={solution.title}
                solution={solution}
                mobile
              />
            ))}
          </motion.div>

          {/* Desktop / tablet grid */}
          <motion.div
            className="mt-[clamp(2.5rem,3.47vw,4.167rem)] hidden w-full grid-cols-1 justify-items-center gap-x-6 gap-y-10 sm:grid sm:grid-cols-2 sm:gap-x-8 md:grid-cols-3 xl:grid-cols-6 xl:justify-items-stretch"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {solutions.map((solution) => (
              <SolutionCard key={solution.title} solution={solution} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mid CTA — Figma 1920×345.33, banner 1706.67, radius 40 */}
      <section
        className="relative mx-auto w-full max-w-[1920px] px-4 py-4 sm:px-10 sm:py-6 lg:px-[5.556%] lg:py-0"
        aria-labelledby="peb-quote-title"
      >
        <div className="relative overflow-hidden rounded-[20px] bg-[linear-gradient(166deg,#8B0C11_0%,#ED1D23_100%)] sm:rounded-[40px] lg:min-h-[345px] lg:overflow-visible">
          {/* Mobile CTA image */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] sm:hidden"
            aria-hidden="true"
          >
            <Image
              src="/images/services/peb/peb-solutions/Mid CTA 1.png"
              alt=""
              fill
              className="object-cover object-[20%_40%] opacity-40"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#8B0C11]/80 via-[#ED1D23]/40 to-transparent" />
          </div>

          <motion.div
            className="pointer-events-none absolute right-[-0%] top-[-10%] hidden h-[140%] w-[56.6%] lg:block"
            aria-hidden="true"
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease: easeOut }}
          >
            <Image
              src="/images/services/peb/peb-solutions/Mid CTA 1.png"
              alt=""
              fill
              className="object-cover object-left"
              sizes="(max-width: 1920px) 57vw, 967px"
            />
          </motion.div>

          <motion.div
            className="relative z-10 flex max-w-[580px] flex-col px-5 py-7 sm:px-12 sm:py-10 lg:ml-[8.6%] lg:px-0 lg:py-[clamp(2rem,2.14vw,2.56rem)]"
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, ease: easeOut }}
          >
            <div className="relative pl-4 sm:pl-7">
              <span
                className="pointer-events-none absolute bottom-0 left-0 top-0 w-[2.67px] bg-white"
                aria-hidden="true"
              />

              <div className="mb-4 flex items-center gap-[10px] sm:mb-5">
                <span className="relative h-[19px] w-[24px] shrink-0">
                  <Image
                    src="/images/services/peb/peb-solutions/planning-mark.svg"
                    alt=""
                    fill
                    className="object-contain"
                    sizes="24px"
                  />
                </span>
                <p className="font-[family-name:var(--font-manrope)] text-[13px] font-bold capitalize leading-none tracking-[1.2px] text-[#CCC6C6] sm:text-[16px]">
                  Planning <span className="lowercase">a</span>
                </p>
              </div>

              <h2
                id="peb-quote-title"
                className="max-w-[579px] font-[family-name:var(--font-manrope)] text-[clamp(1.625rem,7vw,2.25rem)] font-extrabold leading-[1.12] text-white sm:text-[clamp(2rem,2.5vw,3rem)] sm:leading-[1.0525]"
              >
                Factory, Warehouse, or{" "}
                <span className="text-black">Industrial Building?</span>
              </h2>

              <p className="mt-3 max-w-[520px] font-[family-name:var(--font-manrope)] text-[0.875rem] font-medium leading-[1.4] tracking-[0.02em] text-[#CCC6C6] sm:mt-4 sm:text-[clamp(0.875rem,0.972vw,1.167rem)] sm:leading-[1.217] sm:tracking-[1.42px]">
                Get a free consultation and project estimate from Mekark&apos;s
                PEB engineering team.
              </p>
            </div>

            <a
              href="/#enquiry"
              className="mt-5 ml-4 inline-flex w-[calc(100%-1rem)] max-w-[280px] items-center justify-center gap-[9.62px] rounded-full bg-white px-6 py-[13px] font-[family-name:var(--font-manrope)] text-[15px] font-bold leading-[24px] text-[#E5091F] transition-transform hover:scale-[1.03] sm:mt-6 sm:ml-7 sm:w-fit sm:max-w-none sm:py-[14px] sm:text-[16px]"
            >
              Request a Free Quote
              <span className="relative size-[19px] shrink-0 overflow-hidden">
                <Image
                  src="/images/services/peb/peb-solutions/cta-arrow.svg"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="19px"
                />
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Process — Figma 1920×590.67 */}
      <section
        className="relative isolate overflow-hidden"
        aria-labelledby="peb-process-title"
      >
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-[clamp(240px,20.35vw,391px)] w-full opacity-15"
          aria-hidden="true"
        >
          <Image
            src="/images/services/peb/peb-solutions/grid.png"
            alt=""
            fill
            className="object-cover object-top -scale-y-100"
            sizes="100vw"
          />
        </div>

        <div className="relative mx-auto flex w-full max-w-[1920px] flex-col items-center px-5 py-12 sm:px-10 sm:py-14 lg:px-[5.556%] lg:py-[5.556%]">
          <motion.h2
            id="peb-process-title"
            className="w-full max-w-[18ch] text-balance text-left font-[family-name:var(--font-manrope)] text-[clamp(1.625rem,7vw,2.25rem)] font-bold leading-[1.15] text-[#111111] sm:max-w-none sm:text-center sm:text-[clamp(2rem,2.778vw,3.333rem)] sm:leading-[clamp(2.5rem,3.403vw,4.083rem)]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
          >
            How We Deliver Your PEB Project
          </motion.h2>

          <motion.div
            className="mt-8 w-full max-w-[1413px] sm:mt-[clamp(2.5rem,2.78vw,3.333rem)] sm:grid sm:grid-cols-2 sm:justify-items-center sm:gap-x-8 sm:gap-y-10 md:grid-cols-3 lg:flex lg:justify-between lg:justify-items-stretch"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {processSteps.map((step, index) => (
              <ProcessStepItem
                key={step.title}
                step={step}
                index={index}
                showArrow={index < processSteps.length - 1}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
