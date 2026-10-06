"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  MOBILE_FEATURE_BODY_CLASS,
  MOBILE_FEATURE_NUMBER_CLASS,
  MOBILE_FEATURE_TITLE_CLASS,
  PEB_WHY_CHOOSE_BENEFIT_ROW_CLASS,
  PEB_WHY_CHOOSE_DESCRIPTION_CLASS,
} from "@/components/services/serviceMobileCivilTemplate";

const MEP_WHY_CHOOSE_MOBILE_BG =
  "linear-gradient(269.82deg, rgb(255, 255, 255) 35.03%, rgba(255, 255, 255, 0) 99.35%), linear-gradient(90deg, rgb(230, 230, 230), rgb(230, 230, 230))";

const MEP_WHY_CHOOSE_HERO_FADE =
  "linear-gradient(180.23deg, rgba(220, 220, 220, 0) 0.54%, rgba(240, 240, 240, 0.762) 50.05%, rgb(248, 248, 248) 84.11%)";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const staggerBenefits = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const benefitReveal = {
  hidden: (direction: number) => ({
    opacity: 0,
    x: direction * 36,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const features = [
  {
    num: "01",
    title: "Turnkey Project Implementation",
    body: "Single point of responsibility from design to commissioning, so you're never stuck mediating between separate HVAC, electrical, plumbing, or fire-fighting vendors when schedules slip or scopes overlap.",
  },
  {
    num: "02",
    title: "Established Credentials",
    body: "Over 300+ industrial MEP projects completed, with a 4.7 out of 5 customer rating across factory, warehouse, and manufacturing plant clients.",
  },
  {
    num: "03",
    title: "In-House MEP Engineers",
    body: "System designs built around real plant loads, not generic templates — every drawing reflects your actual equipment, layout, and process demands.",
  },
  {
    num: "04",
    title: "Exceptional Quality",
    body: "Independent testing, commissioning checks, and system documentation handed over at project close, so there's a verifiable record of what was built and how it performs.",
  },
  {
    num: "05",
    title: "Safe Execution",
    body: "Trained crews, documented safety checks, and clear scope-based pricing with no hidden variation orders mid-project.",
  },
  {
    num: "06",
    title: "18+ Years of Experience",
    body: "From standalone factory HVAC and electrical works to full manufacturing plant MEP contracts spanning multiple systems and phased handovers.",
  },
] as const;

const leftFeatures = [features[0], features[2], features[4]];
const rightFeatures = [features[1], features[3], features[5]];

function WhyChooseMekarkMobileHeader() {
  return (
    <motion.header
      className="flex w-full flex-col gap-3.5 text-center"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.7 }}
    >
      <h2
        id="why-choose-mekark-title"
        className="font-manrope text-[28px] font-bold leading-normal text-[#111]"
      >
        <span className="block text-[#111111]">Why Industrial Clients</span>
        <span className="block text-[#E50818]">Choose Mekark</span>
      </h2>
      <p className={PEB_WHY_CHOOSE_DESCRIPTION_CLASS}>
        Mekark pairs in-house design-build capability with the execution
        discipline many generic contractors lack.
      </p>
    </motion.header>
  );
}

function WhyChooseMekarkMobilePortrait() {
  return (
    <motion.div
      className="relative -mb-[40px] h-[460px] w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-[6px] z-0 flex justify-center"
        aria-hidden
      >
        <Image
          src="/images/arrow.webp"
          alt=""
          width={587}
          height={534}
          className="h-[min(320px,82vw)] w-auto max-w-none object-contain opacity-95"
          sizes="320px"
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[28px] z-[1] flex items-end justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/services/mep/why-choose/worker.webp"
          alt="Mekark industrial MEP professional"
          className="h-[min(420px,105%)] w-auto max-w-[122%] object-contain object-bottom"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[32%]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(248,248,248,0) 0%, rgba(248,248,248,0.45) 42%, #f8f8f8 100%)",
        }}
        aria-hidden
      />
    </motion.div>
  );
}

function MobileFeatureItem({
  num,
  title,
  body,
  index,
}: {
  num: string;
  title: string;
  body: string;
  index: number;
}) {
  return (
    <motion.article
      className={`${PEB_WHY_CHOOSE_BENEFIT_ROW_CLASS} drop-shadow-none`}
      variants={benefitReveal}
      custom={index % 2 === 0 ? -1 : 1}
    >
      <span
        className={`w-[50px] shrink-0 pt-1 whitespace-nowrap ${MOBILE_FEATURE_NUMBER_CLASS}`}
      >
        {num}
      </span>
      <span
        className="min-h-[92px] w-px shrink-0 self-stretch bg-[rgba(204,16,32,0.4)]"
        aria-hidden
      />
      <div className="flex min-w-0 flex-1 flex-col gap-2 pt-1 text-left">
        <h3 className={MOBILE_FEATURE_TITLE_CLASS}>{title}</h3>
        <p className={MOBILE_FEATURE_BODY_CLASS}>{body}</p>
      </div>
    </motion.article>
  );
}

function DesktopFeatureItem({
  num,
  title,
  body,
  direction,
}: {
  num: string;
  title: string;
  body: string;
  direction: number;
}) {
  return (
    <motion.article
      className="relative flex min-h-[164px] w-full items-start"
      variants={benefitReveal}
      custom={direction}
    >
      <p className="shrink-0 whitespace-nowrap pr-1 font-[family-name:var(--font-montserrat)] text-[clamp(2.75rem,4.167vw,5rem)] font-black leading-[clamp(3.25rem,5.069vw,6.083rem)] tracking-[-0.05em] text-[#CC1020]">
        {num}
      </p>
      <div
        className="flex h-[92px] shrink-0 flex-col items-start justify-center pt-1 pr-[18.67px] pl-0.5"
        aria-hidden="true"
      >
        <div className="min-h-[80px] w-[1.33px] flex-1 bg-[rgba(204,16,32,0.4)]" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-0 pt-0 lg:max-w-[328px]">
        <h3 className="font-manrope text-[clamp(0.9375rem,0.972vw,1.167rem)] font-bold leading-[1.35] text-[#3c3938]">
          {title}
        </h3>
        <p className="mt-3 max-w-[300px] text-base leading-[25.33px] text-[#555]">
          {body}
        </p>
      </div>
    </motion.article>
  );
}

function WhyChooseMekarkMobile() {
  return (
    <div
      className="relative lg:hidden"
      style={{ backgroundImage: MEP_WHY_CHOOSE_MOBILE_BG }}
    >
      <div className="relative px-5 pt-6 pb-0">
        <div className="relative mx-auto flex w-full max-w-[350px] flex-col gap-3.5">
          <WhyChooseMekarkMobileHeader />
          <WhyChooseMekarkMobilePortrait />
        </div>
      </div>

      <motion.div
        className="relative overflow-hidden bg-[#f8f8f8] px-5 pt-8 pb-16"
        variants={staggerBenefits}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[72px] -translate-y-[32px]"
          style={{ backgroundImage: MEP_WHY_CHOOSE_HERO_FADE }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-[-56px] h-[270px] w-[503px] max-w-none"
          aria-hidden
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/services/mep/why-choose/site-bg.webp"
            alt=""
            className="size-full object-cover object-bottom"
          />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-[350px] flex-col">
          {features.map((item, index) => (
            <MobileFeatureItem key={item.num} {...item} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function WhyChooseMekark() {
  return (
    <section
      className="relative isolate w-full overflow-hidden bg-[#E6E6E6] text-[#111111]"
      aria-labelledby="why-choose-mekark-title"
    >
      <WhyChooseMekarkMobile />

      <div className="relative z-10 mx-auto hidden min-h-[1014px] w-full max-w-[1920px] lg:block">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <Image
            src="/images/services/mep/why-choose/site-bg.webp"
            alt="Industrial MEP project site background"
            fill
            className="object-cover object-bottom opacity-40"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(266deg,#fff_0%,rgba(255,255,255,0)_100%)]"
            aria-hidden
          />
        </div>

        <header className="relative z-20 mx-auto max-w-[1260px] px-8 pt-14 text-center">
          <h2 className="text-balance font-manrope text-[clamp(2rem,2.5vw,46px)] font-extrabold leading-[1.35] tracking-[-0.025em]">
            <span className="text-[#111]">Why Industrial Clients </span>
            <span className="text-[#e9000e]">Choose Mekark</span>
          </h2>
          <p className="service-section-description mx-auto mt-5 max-w-[925px]">
            <span>
              Mekark pairs in-house design-build capability with the execution
              discipline
            </span>
            <span> many generic contractors lack.</span>
          </p>
        </header>

        <div className="relative mx-auto h-[804px] w-full max-w-[1488px] px-9">
          <div className="absolute left-1/2 top-0 flex h-full w-[847px] -translate-x-1/2 items-end justify-center">
            <Image
              src="/images/arrow.webp"
              alt="Mekark logo watermark"
              width={587}
              height={534}
              className="pointer-events-none absolute top-[-5.6%] left-1/2 z-0 w-[min(587px,70%)] -translate-x-[45%] object-contain"
              sizes="587px"
            />
            <Image
              src="/images/services/mep/why-choose/worker.webp"
              alt="Mekark industrial MEP professional"
              width={795}
              height={861}
              className="relative z-[1] w-[min(895px,110%)] max-h-[1003px] translate-y-[14%] object-contain object-bottom"
              sizes="895px"
              priority
            />
          </div>

          <motion.div
            className="absolute left-[36px] top-[67px] z-10 flex w-[min(420px,28.5%)] flex-col gap-[90.67px]"
            variants={staggerBenefits}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {leftFeatures.map((item) => (
              <DesktopFeatureItem
                key={item.num}
                {...item}
                direction={-1}
              />
            ))}
          </motion.div>

          <motion.div
            className="absolute right-[36px] top-[67px] z-10 flex w-[min(420px,28.5%)] flex-col gap-[90.67px]"
            variants={staggerBenefits}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {rightFeatures.map((item) => (
              <DesktopFeatureItem
                key={item.num}
                {...item}
                direction={1}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
