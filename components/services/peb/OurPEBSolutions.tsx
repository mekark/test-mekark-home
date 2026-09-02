"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HowWeDeliverSteps from "@/components/services/HowWeDeliverSteps";
import ServiceSolutionsMobileGrid from "@/components/services/ServiceSolutionsMobileGrid";
import {
  SERVICE_CARD_BODY_CLASS_SCALED,
  SERVICE_CARD_TITLE_CLASS_SCALED,
} from "@/components/services/serviceTypography";
import { ServiceMidCtaTitle } from "@/components/services/ServiceMidCtaTitle";
import {
  ServiceMidCtaCopy,
  ServiceMidCtaLine,
} from "@/components/services/ServiceMidCtaLine";

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

const processSteps = [
  {
    title: "Consultation & Requirement Study",
    body: "Understanding your site, load requirements, and timeline",
    icon: "/images/services/peb/peb-solutions/consultation.svg",
  },
  {
    title: "Structural Design & Approval",
    body: "Detailed engineering using STAAD.Pro/ETABS/Tekla, shared for your sign-off",
    icon: "/images/services/peb/peb-solutions/structural-design.svg",
  },
  {
    title: "In-House Fabrication",
    body: "Manufactured at our X lakh sq. ft. facility under quality checks",
    icon: "/images/services/peb/peb-solutions/fabrication.svg",
  },
  {
    title: "Site Erection & Installation",
    body: "Fast, safety-compliant on-site assembly",
    icon: "/images/services/peb/peb-solutions/installation.svg",
  },
  {
    title: "Handover & Support",
    body: "Final inspection, documentation, and after-project support",
    icon: "/images/services/peb/peb-solutions/handover.svg",
  },
] as const;

function SolutionCard({ solution }: { solution: Solution }) {
  const zoom = solution.zoom ?? 1.15;
  const fetchPx = Math.ceil(520 * zoom * (solution.rotate ? 1.25 : 1));

  return (
    <motion.article
      className="flex w-full flex-col"
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
      <h3 className={`mt-[clamp(1.25rem,1.8vw,2.167rem)] ${SERVICE_CARD_TITLE_CLASS_SCALED}`}>
        {solution.title}
      </h3>
      <p className={`mt-2 ${SERVICE_CARD_BODY_CLASS_SCALED}`}>
        {solution.description}
      </p>
    </motion.article>
  );
}

export default function OurPEBSolutions() {
  return (
    <div className="w-full bg-white text-[#111111]">
      {/* Solutions — Figma 1920×754.67 */}
      <section
        className="relative isolate overflow-hidden overflow-x-hidden"
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

        <ServiceSolutionsMobileGrid
          title="Our Pre-Engineered Building (PEB) Solutions"
          solutions={solutions.map((solution) => ({
            title: solution.title,
            description: solution.description,
            image: solution.image,
            imageStyle: {
              objectPosition: solution.objectPosition ?? "50% 50%",
              transform: `scale(${solution.zoom ?? 1.15}) rotate(${solution.rotate ?? 0}deg)`,
            },
          }))}
        />

        <div className="relative z-[1] mx-auto hidden max-w-[1920px] flex-col items-center gap-10 px-5 py-14 sm:px-8 md:gap-[66px] md:px-16 lg:flex lg:px-[107px] lg:py-[107px] lg:gap-[66px]">
          <motion.h2
            id="peb-solutions-title"
            className="max-w-[1147px] text-center font-manrope text-[32px] font-bold leading-[1.15] tracking-[-1.33px] text-[#111111] sm:text-[42px] lg:text-[53.33px] lg:leading-[65.33px]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
          >
            Our Pre-Engineered Building (PEB) Solutions
          </motion.h2>

          <motion.div
            className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6"
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

      {/* Mid CTA — matches Civil PlanningCta mobile pattern */}
      <section
        id="quote"
        className="relative mx-auto w-full max-w-[1920px] overflow-visible bg-white px-5 py-8 sm:px-8 sm:py-10 lg:px-[80px] lg:pt-[72px] lg:pb-12"
        aria-labelledby="peb-quote-title"
      >
        <motion.div
          className="relative mx-auto w-full overflow-hidden rounded-[28px] bg-[linear-gradient(118.73deg,#8B0C11_6.54%,#ED1D23_108.89%)] sm:rounded-[32px] lg:hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <div className="relative z-10 flex flex-col px-5 pt-8 pb-[215px] sm:px-8 sm:pt-10 sm:pb-[275px]">
            <ServiceMidCtaCopy>
              <ServiceMidCtaTitle
                id="peb-quote-title"
                line1="Planning a Factory, Warehouse,"
                line2="or Industrial Building?"
                size="short"
                scaledCanvas
              />

              <p className="mt-3 max-w-[28rem] text-[13px] font-medium leading-[18px] tracking-[1.1px] text-[#CCC6C6] sm:text-[14px] sm:leading-[20px]">
                Get a free consultation and project estimate from Mekark&apos;s
                PEB engineering team.
              </p>

              <a
                href="/#enquiry"
                className="relative z-10 mt-6 inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-full bg-white px-5 py-3.5 text-[14px] font-bold text-[#E5091F] transition-transform active:scale-[0.98] sm:mt-7 sm:w-fit sm:px-6"
              >
                Request a Free Quote
                <span className="relative size-[16px] shrink-0">
                  <Image
                    src="/images/services/peb/peb-solutions/cta-arrow.svg"
                    alt=""
                    fill
                    className="object-contain"
                    sizes="16px"
                  />
                </span>
              </a>
            </ServiceMidCtaCopy>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[185px] sm:h-[235px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/services/peb/peb-solutions/Mid CTA 1.png"
              alt="Pre-engineered building under construction"
              className="absolute left-1/2 bottom-[18px] h-[96%] w-[132%] max-w-none -translate-x-[46%] object-cover object-[center_28%] sm:bottom-[24px] sm:w-[110%] sm:-translate-x-[48%]"
            />
          </div>
        </motion.div>

        <div className="relative mx-auto hidden overflow-hidden rounded-[40px] bg-[linear-gradient(118.73deg,#8B0C11_6.54%,#ED1D23_108.89%)] lg:block lg:min-h-[345px] lg:overflow-visible">
          <ServiceMidCtaLine className="absolute left-[8.6%] top-[42.67px] z-[2]" />

          <motion.div
            className="pointer-events-none absolute right-0 top-[-14%] hidden h-[125%] w-[56.6%] lg:block"
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
              className="object-cover object-[left_25%]"
              sizes="(max-width: 1920px) 57vw, 967px"
            />
          </motion.div>

          <motion.div
            className="relative z-10 flex min-h-[264px] max-w-[580px] flex-col py-[clamp(2rem,2.14vw,2.56rem)] pl-7 lg:ml-[8.6%]"
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, ease: easeOut }}
          >
            <ServiceMidCtaTitle
              line1="Planning a Factory, Warehouse,"
              line2="or Industrial Building?"
              size="short"
              scaledCanvas
            />

            <p className="mt-4 max-w-[520px] text-[clamp(0.875rem,0.972vw,1.167rem)] font-medium leading-[1.217] tracking-[1.42px] text-[#CCC6C6]">
              Get a free consultation and project estimate from Mekark&apos;s
              PEB engineering team.
            </p>

            <a
              href="/#enquiry"
              className="mt-8 inline-flex w-fit items-center justify-center gap-[9.62px] rounded-full bg-white px-6 py-[14px] text-base font-bold leading-[24px] text-[#E5091F] transition-transform hover:scale-[1.03]"
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
        aria-label="How we deliver your PEB project"
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

        <div className="relative mx-auto flex w-full max-w-[1920px] flex-col items-center overflow-visible px-5 py-12 sm:px-10 sm:py-14 lg:px-[5.556%] lg:py-[5.556%]">
          <HowWeDeliverSteps
            title="How We Deliver Your PEB Project"
            steps={processSteps}
            arrowSrc="/images/services/peb/peb-solutions/process-arrow.svg"
            iconBoxClassName="bg-[#FDEBEB]"
            scaledCanvas
          />
        </div>
      </section>
    </div>
  );
}
