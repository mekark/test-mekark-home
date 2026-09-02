"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IndustryMobileCtaBanner } from "@/components/industries/shared/IndustryMobileCtaBanner";
import { logisticsCtaWorkerAssets } from "@/components/industries/shared/logisticsCtaWorkerAssets";
import {
  industryMobileFeatureCardClass,
  industryMobileFeatureDescriptionClass,
  industryMobileFeatureIconGradientClass,
  industryMobileFeatureIconWrapClass,
  industryMobileFeatureTextWrapClass,
  industryMobileFeatureTitleClass,
} from "@/components/industries/shared/industryMobileFeatureCard";

type Feature = {
  icon: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: "/images/industries/electronics/cta/icons/pen-tool.svg",
    title: "In-House Engineering-Led Design",
    description:
      "Every facility is designed using STAAD Pro, TEKLA, and Autodesk by our in-house structural engineers, MEP teams, and clean room specialists.",
  },
  {
    icon: "/images/industries/electronics/cta/icons/factory.svg",
    title: "Large-Scale In-House Fabrication Capacity",
    description:
      "Mekark fabricates over 3,000 MT of precision steel per month across four manufacturing plants in Tamil Nadu, with zero third-party dependency.",
  },
  {
    icon: "/images/industries/electronics/cta/icons/map-pinned.svg",
    title: "Regional Project Execution Across South India",
    description:
      "From Chennai and Sriperumbudur to Hosur, Oragadam, Coimbatore, Bengaluru, and Hyderabad, our teams deliver electronics factory construction backed by an integrated design-to-commissioning process.",
  },
  {
    icon: "/images/industries/electronics/cta/icons/clock.svg",
    title: "30–40% Faster Delivery Than Conventional Construction",
    description:
      "Factory-controlled fabrication and pre-engineered methods mean your production line starts generating revenue sooner.",
  },
  {
    icon: "/images/industries/electronics/cta/icons/repeat.svg",
    title: "True Turnkey, Zero Fragmentation",
    description:
      "Structural steel, civil works, MEP, HVAC, clean rooms, and utilities, one team, one contract, no blame-shifting between trades.",
  },
  {
    icon: "/images/industries/electronics/cta/icons/shield-check.svg",
    title: "ISO-Certified Quality & Safety Standards",
    description:
      "Every facility is delivered to certified quality benchmarks, with documented engineering before a single beam is cut.",
  },
];

const featureColumns: { features: Feature[]; gapClass: string; widthClass: string }[] = [
  { features: [features[0], features[3]], gapClass: "xl:gap-[77px]", widthClass: "max-w-[288px]" },
  { features: [features[1], features[4]], gapClass: "xl:gap-[55px]", widthClass: "max-w-[295px]" },
  { features: [features[2], features[5]], gapClass: "xl:gap-[36px]", widthClass: "max-w-[327px]" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

function FeatureIcon({ src }: { src: string }) {
  return (
    <div className={industryMobileFeatureIconWrapClass}>
      <div
        aria-hidden
        className={industryMobileFeatureIconGradientClass}
        style={{
          backgroundImage:
            "linear-gradient(145deg, rgba(196, 22, 28, 0.3) 0%, rgba(196, 22, 28, 0.15) 100%)",
        }}
      />
      <span className="relative size-[22px] overflow-hidden lg:size-[26px]">
        <Image src={src} alt="" fill className="object-contain" aria-hidden />
      </span>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_1.079px_0px_0px_rgba(255,255,255,0.08)]"
      />
    </div>
  );
}

function FeatureCard({ icon, title, description }: Feature) {
  return (
    <article className={industryMobileFeatureCardClass}>
      <FeatureIcon src={icon} />
      <div className={industryMobileFeatureTextWrapClass}>
        <h3 className={industryMobileFeatureTitleClass}>{title}</h3>
        <p className={industryMobileFeatureDescriptionClass}>{description}</p>
      </div>
    </article>
  );
}

export default function CtaSection() {
  return (
    <section className="w-full bg-[#f6f6f6] py-16 lg:py-24">
      <div className="mx-auto max-w-[1920px] px-6 lg:px-20">
        <div className="xl:hidden">
          <IndustryMobileCtaBanner
            title={
              <>
                <span className="whitespace-nowrap">
                  Planning an Electronics Manufacturing
                </span>
                <br />
                <span className="whitespace-nowrap">Facility in South India?</span>
              </>
            }
            subtitle={
              <>
                Every week your production line isn&apos;t running is lost revenue.
                Mekark&apos;s team will
                <br />
                assess your process requirements, cleanroom class, ESD protection,
                utility load, and deliver a transparent budgetary estimate within
                24 hours. No obligation, just honest expert advice.
              </>
            }
            buttonText="Request a Free Consultation"
            workerAlt="Mekark electronics manufacturing expert"
            assets={logisticsCtaWorkerAssets}
          />
        </div>

        <div className="relative hidden pt-[28px] xl:block">
          <motion.div
            className="relative z-[1] h-[295px] overflow-hidden rounded-[40px]"
            style={{
              backgroundImage:
                "linear-gradient(123.5deg, rgb(240, 28, 34) 6.54%, rgb(139, 12, 17) 108.89%)",
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            aria-hidden
          />

          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-[2] hidden h-[323px] overflow-hidden xl:block"
            aria-hidden
          >
            <div className="absolute left-[58px] top-[79px] h-[213px] w-[317px]">
              <Image
                src="/images/industries/electronics/cta/frame-275.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            <div className="absolute left-[154px] top-[66px] z-[2] size-[180px]">
              <Image
                src="/images/industries/electronics/cta/frame-76.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            <div className="absolute left-[66px] top-[calc(147.5px+28px-15.5px)] z-[2] flex h-[150px] w-[150px] -translate-y-1/2 rotate-90 items-center justify-center">
              <Image
                src="/images/industries/electronics/cta/decorative-line.svg"
                alt=""
                width={150}
                height={3}
                className="h-[3px] w-[150px]"
              />
            </div>

            <div className="absolute -left-[10px] top-0 z-[3] h-[323px] w-[491px] overflow-hidden">
              <div className="absolute left-[10.55%] top-0 h-[144.52%] w-[78.89%]">
                <Image
                  src="/images/industries/electronics/cta/engineer.png"
                  alt=""
                  fill
                  className="object-cover object-top"
                  sizes="387px"
                />
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 top-[28px] z-[4] hidden h-[295px] xl:block">
            <div className="relative h-full">
              <div className="pointer-events-none absolute left-[25.25%] top-1/2 flex w-[47.23%] max-w-[836px] -translate-y-1/2 flex-col gap-2.5">
                <h2 className="relative w-full max-w-[836px] text-left font-manrope text-[44px] font-bold leading-[127.1%] text-white">
                  <span className="whitespace-nowrap">
                    Planning an Electronics Manufacturing
                  </span>
                  <br />
                  <span className="whitespace-nowrap">Facility in South India?</span>
                </h2>
                <p className="relative w-full max-w-[788px] text-left font-manrope text-lg font-medium leading-normal text-[#ccc6c6]">
                  Every week your production line isn&apos;t running is lost revenue.
                  Mekark&apos;s team will
                  <br />
                  assess your process requirements, cleanroom class, ESD protection,
                  utility load, and deliver a transparent budgetary estimate within
                  24 hours. No obligation, just honest expert advice.
                </p>
              </div>

              <motion.a
                href="/#enquiry"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="pointer-events-auto absolute top-1/2 right-[6.05%] inline-flex h-[79px] w-[391px] -translate-y-1/2 items-center justify-center gap-[13.671px] rounded-full bg-white px-[34px] py-[20px]"
              >
                <span className="whitespace-nowrap font-manrope text-[22px] font-bold leading-[34px] text-[#0e0e0e]">
                  Request a Free Consultation
                </span>
                <span className="relative size-[26.648px] shrink-0 overflow-hidden">
                  <Image
                    src="/images/industries/electronics/cta/cta-arrow.svg"
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden
                  />
                </span>
              </motion.a>
            </div>
          </div>
        </div>

        <div className="mt-20 lg:mt-32">
          <motion.header
            className="mx-auto mb-12 w-full text-center lg:mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <h2 className="font-manrope text-[32px] font-bold leading-tight tracking-[-0.02em] text-[#111] sm:text-[40px] lg:text-[50px] lg:leading-[65px] 2xl:whitespace-nowrap">
              Why Electronics Facilities from Mekark Are the Better Choice
            </h2>
            <p className="relative mx-auto mt-4 w-full max-w-[1066px] text-center font-manrope text-base font-normal leading-relaxed text-black sm:text-lg sm:leading-[27px] lg:leading-[27px]">
              Mekark is one of South India&apos;s most trusted electronics manufacturing facility construction companies, offering in-house design, fabrication, and MEP integration under one roof — not a general contractor treating your plant like a generic industrial shed.
            </p>
          </motion.header>

          <motion.div
            className="relative mx-auto mb-8 h-[200px] w-full overflow-hidden rounded-2xl sm:mb-10 sm:h-[280px] xl:hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <Image
              src="/images/industries/electronics/cta/manufacturing-floor-alt.png"
              alt="Workers at an electronics manufacturing production line"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>

          <div className="flex flex-col gap-10 xl:flex-row xl:items-stretch xl:gap-12 2xl:gap-20">
            <motion.div
              className="grid min-w-0 flex-1 grid-cols-1 gap-4 xl:hidden"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {features.map((feature) => (
                <motion.div key={feature.title} variants={itemVariants}>
                  <FeatureCard {...feature} />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="hidden min-w-0 flex-1 xl:ml-10 xl:flex xl:gap-[60px] 2xl:ml-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {featureColumns.map(({ features: columnFeatures, gapClass, widthClass }) => (
                <div
                  key={columnFeatures[0].title}
                  className={`flex w-full flex-col gap-10 ${gapClass} ${widthClass}`}
                >
                  {columnFeatures.map((feature) => (
                    <motion.div key={feature.title} variants={itemVariants}>
                      <FeatureCard {...feature} />
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>

            <motion.div
              className="relative mx-auto hidden w-full max-w-[856px] shrink-0 overflow-hidden xl:mx-0 xl:-mr-20 xl:block xl:min-h-[569px] xl:w-[42%] xl:max-w-[856px] 2xl:w-[856px]"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <div className="relative min-h-[569px]">
                <Image
                  src="/images/industries/electronics/cta/manufacturing-floor-alt.png"
                  alt="Workers at an electronics manufacturing production line"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1280px) 100vw, 856px"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, rgb(246, 246, 246) 0%, rgba(246, 246, 246, 0.92) 8%, rgba(246, 246, 246, 0.55) 22%, rgba(246, 246, 246, 0.15) 38%, rgba(246, 246, 246, 0) 52%)",
                  }}
                  aria-hidden
                />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mx-auto mt-12 w-full max-w-[1422px] rounded-[40px] border border-[rgba(228,0,21,0.5)] bg-[rgba(228,0,21,0.05)] px-5 py-5 text-center sm:mt-16 sm:px-8 sm:py-6 lg:mt-20 lg:px-8 lg:py-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <p className="font-manrope text-base font-normal leading-normal text-[#4c4c4c] sm:text-lg lg:whitespace-nowrap">
            The difference isn&apos;t just how fast an electronics facility gets
            built;{" "}
            <span className="font-semibold text-[#f01d23]">
              it&apos;s whether it protects your yield from day one.
            </span>{" "}
            That&apos;s the engineering standard Mekark builds to.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
