"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HowWeDeliverSteps from "@/components/services/HowWeDeliverSteps";
import ServiceSolutionsMobileGrid from "@/components/services/ServiceSolutionsMobileGrid";
import {
  MOBILE_CARD_BODY_CLASS,
  MOBILE_CARD_CLASS,
  MOBILE_CARD_TITLE_CLASS,
  MOBILE_MID_CTA,
  MOBILE_PROCESS_TYPOGRAPHY,
  MOBILE_SECTION_TITLE_LEFT_CLASS,
  MOBILE_SOLUTIONS_CONTAINER_CLASS,
  MOBILE_SOLUTIONS_GRID_CLASS,
  MOBILE_SOLUTIONS_IMAGE_CLASS,
} from "@/components/services/serviceMobileCivilTemplate";
import {
  SERVICE_CARD_BODY_CLASS_SCALED,
  SERVICE_CARD_TITLE_CLASS_SCALED,
} from "@/components/services/serviceTypography";
import { ServiceMidCtaTitle } from "@/components/services/ServiceMidCtaTitle";
import {
  ServiceMidCtaCopy,
  ServiceMidCtaLine,
} from "@/components/services/ServiceMidCtaLine";
import { useServiceEnquiry } from "@/components/services/ServiceEnquiryProvider";

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
    image: "/images/services/peb/peb-solutions/peb-design-engineering.webp",
    objectPosition: "38% 25%",
    zoom: 1.15,
  },
  {
    title: "PEB Manufacturing",
    description: "Custom-engineered steel components fabricated in-house",
    image: "/images/services/peb/peb-solutions/peb-manufacturing.webp",
    objectPosition: "65% 55%",
    zoom: 1.15,
  },
  {
    title: "PEB Erection & Installation",
    description:
      "On-site assembly with safety-compliant, quality-checked execution",
    image: "/images/services/peb/peb-solutions/peb-erection-installation.webp",
    objectPosition: "45% 42%",
    zoom: 1.1,
  },
  {
    title: "Industrial Sheds & Warehouses",
    description: "PEB structures for storage, logistics, and manufacturing use",
    image: "/images/services/peb/peb-solutions/industrial-sheds-warehouse.webp",
    objectPosition: "48% 58%",
    zoom: 1.08,
  },
  {
    title: "Multi-Storey PEB Structures",
    description: "Space-frame and multi-level pre-engineered buildings",
    image: "/images/services/peb/peb-solutions/multi-storey-peb.webp",
    objectPosition: "50% 35%",
    zoom: 1.15,
  },
  {
    title: "Pre-Engineered Roofing Systems",
    description: "Durable, weather-resistant PEB roofing solutions",
    image: "/images/services/peb/peb-solutions/pre-engineered-roofing-systems.webp",
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
    body: "Manufactured at our 70 lakh sq. ft. Project facility under quality checks",
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
          alt={solution.title}
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
  const { openEnquiry } = useServiceEnquiry();

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
            src="/images/services/peb/peb-solutions/grid.webp"
            alt="Decorative grid background"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <ServiceSolutionsMobileGrid
          title="Our Pre-Engineered Building (PEB) Solutions"
          className={MOBILE_SOLUTIONS_CONTAINER_CLASS}
          titleClassName={`max-w-[350px] text-left ${MOBILE_SECTION_TITLE_LEFT_CLASS}`}
          gridClassName={MOBILE_SOLUTIONS_GRID_CLASS}
          cardClassName={MOBILE_CARD_CLASS}
          cardTitleClassName={MOBILE_CARD_TITLE_CLASS}
          cardBodyClassName={MOBILE_CARD_BODY_CLASS}
          imageContainerClassName={MOBILE_SOLUTIONS_IMAGE_CLASS}
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
        className="relative mx-auto w-full max-w-[1920px] overflow-visible bg-white px-4 py-8 sm:px-8 sm:py-10 lg:px-[80px] lg:pt-[72px] lg:pb-12"
        aria-labelledby="peb-quote-title"
      >
        <motion.div
          className={MOBILE_MID_CTA.cardClass}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <div className={MOBILE_MID_CTA.contentClass}>
            <h2 id="peb-quote-title" className={MOBILE_MID_CTA.titleClass}>
              <span className="block">Planning a Factory, Warehouse,</span>
              <span className="block">
                <span>or </span>
                <span className="text-black">Industrial Building?</span>
              </span>
            </h2>

            <p className={MOBILE_MID_CTA.descriptionClass}>
              Get a free consultation and project estimate from Mekark&apos;s
              PEB engineering team.
            </p>

            <button
              type="button"
              onClick={openEnquiry}
              className={MOBILE_MID_CTA.buttonClass}
            >
              Request a Free Quote
              <span className="relative size-[18.758px] shrink-0">
                <Image
                  src="/images/services/peb/peb-solutions/cta-arrow.svg"
                  alt="Arrow icon"
                  fill
                  className="object-contain"
                  sizes="19px"
                />
              </span>
            </button>
          </div>

          <div className="pointer-events-none absolute inset-x-0 top-[255px] z-[1] h-[225px] overflow-hidden rounded-bl-[20px] rounded-br-[20px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/services/peb/peb-solutions/Mid CTA 1.webp"
              alt="Pre-engineered building under construction"
              className="absolute top-[8.98%] left-[-17.06%] h-[107.72%] w-[117.09%] max-w-none object-cover"
            />
          </div>
        </motion.div>

        <div className="relative mx-auto hidden overflow-hidden rounded-[40px] bg-[linear-gradient(118.73deg,#8B0C11_6.54%,#ED1D23_108.89%)] lg:block lg:min-h-[345px] lg:overflow-visible">
          <ServiceMidCtaLine className="absolute left-[6%] top-[42.67px] z-[2]" />

          <motion.div
            className="pointer-events-none absolute right-0 top-[-14%] hidden h-[125%] w-[56.6%] lg:block"
            aria-hidden="true"
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease: easeOut }}
          >
            <Image
              src="/images/services/peb/peb-solutions/Mid CTA 1.webp"
              alt="Pre-engineered building project by Mekark"
              fill
              className="object-cover object-[left_25%]"
              sizes="(max-width: 1920px) 57vw, 967px"
            />
          </motion.div>

          <motion.div
            className="relative z-10 flex min-h-[264px] max-w-[580px] flex-col pt-[clamp(2.75rem,2.9vw,3.3rem)] pb-[clamp(2rem,2.14vw,2.56rem)] pl-7 lg:ml-[6%]"
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

            <button
              type="button"
              onClick={openEnquiry}
              className="mt-8 inline-flex w-fit cursor-pointer items-center justify-center gap-[9.62px] rounded-full border-0 bg-white px-6 py-[14px] text-base font-bold leading-[24px] text-[#E5091F] transition-transform hover:scale-[1.03]"
            >
              Request a Free Quote
              <span className="relative size-[19px] shrink-0 overflow-hidden">
                <Image
                  src="/images/services/peb/peb-solutions/cta-arrow.svg"
                  alt="Arrow icon"
                  fill
                  className="object-contain"
                  sizes="19px"
                />
              </span>
            </button>
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
            src="/images/services/peb/peb-solutions/grid.webp"
            alt="Decorative grid background"
            fill
            className="object-cover object-top -scale-y-100"
            sizes="100vw"
          />
        </div>

        <div className="relative mx-auto flex w-full max-w-[1920px] flex-col items-center overflow-visible px-5 py-8 sm:px-8 sm:py-10 lg:px-[5.556%] lg:py-[5.556%]">
          <HowWeDeliverSteps
            title="How We Deliver Your PEB Project"
            steps={processSteps}
            arrowSrc="/images/services/peb/peb-solutions/process-arrow.svg"
            iconBoxClassName="bg-[#FDEBEB]"
            desktopFrom="lg"
            scaledCanvas
            mobileTypography={MOBILE_PROCESS_TYPOGRAPHY}
          />
        </div>
      </section>
    </div>
  );
}
