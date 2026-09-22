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
import { SERVICE_WHY_CHOOSE_FEATURE_BODY_CLASS_SCALED } from "@/components/services/serviceTypography";

/** Figma — base rgba(230,230,230,1) + white→transparent gradient overlay */
const MULTI_STOREY_WHY_CHOOSE_SECTION_BG =
  "linear-gradient(269.78deg, rgba(255, 255, 255, 1) 35.028%, rgba(255, 255, 255, 0) 99.353%), linear-gradient(90deg, rgba(230, 230, 230, 1), rgba(230, 230, 230, 1))";

const MULTI_STOREY_WHY_CHOOSE_HERO_FADE =
  "linear-gradient(180.23deg, rgba(220, 220, 220, 0) 0.54%, rgba(240, 240, 240, 0.762) 50.05%, rgb(248, 248, 248) 84.11%)";

const leftItems = [
  {
    num: "01",
    title: "Turnkey Implementation",
    body: "Single point of responsibility from design to erection.",
  },
  {
    num: "03",
    title: "Structural Engineers In-House",
    body: "BIM-based analysis ensures your building is precisely designed and ready for fabrication.",
  },
  {
    num: "05",
    title: "Quality & Safe Construction",
    body: "Independent QA, certification testing, engineered erection sequencing, and rigorous safety checks ensure reliable project delivery.",
  },
] as const;

const rightItems = [
  {
    num: "02",
    title: "Established Credentials",
    body: "Over 15 multi-storey and industrial projects completed, with a 4.7/5 customer rating.",
  },
  {
    num: "04",
    title: "Faster Construction",
    body: "Pre-engineered steel technology cuts timelines versus conventional RCC.",
  },
  {
    num: "06",
    title: "18+ Years of Experience",
    body: "From factories and warehouses to multi-storey commercial and institutional buildings.",
  },
] as const;

/** Chronological order for mobile */
const mobileItems = [
  leftItems[0],
  rightItems[0],
  leftItems[1],
  rightItems[1],
  leftItems[2],
  rightItems[2],
] as const;

const easeOut = [0.22, 1, 0.36, 1] as const;

/** Desktop-only feature row — Figma layout */
function FeatureItem({
  num,
  title,
  body,
}: {
  num: string;
  title: string;
  body: string;
}) {
  return (
    <div className="relative flex min-h-[164px] w-full items-start">
      <span className="shrink-0 pr-1 font-montserrat text-[80px] leading-[97.33px] font-black tracking-[-4px] text-[#cc1020]">
        {num}
      </span>
      <div className="flex h-[92px] shrink-0 flex-col items-start justify-center pt-1 pr-[18.67px] pl-0.5">
        <div className="min-h-[80px] w-[1.33px] flex-1 bg-[rgba(204,16,32,0.4)]" />
      </div>
      <div className="min-w-0 flex-1 pt-0 lg:max-w-[328px]">
        <b className="block font-manrope text-[18.67px] leading-[24px] font-bold text-darkslategray">
          {title}
        </b>
        <p className={`mt-[10px] ${SERVICE_WHY_CHOOSE_FEATURE_BODY_CLASS_SCALED}`}>
          {body}
        </p>
      </div>
    </div>
  );
}

function MobileFeature({
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
      className={PEB_WHY_CHOOSE_BENEFIT_ROW_CLASS}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: easeOut, delay: 0.04 * index }}
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
        <h3 className={`${MOBILE_FEATURE_TITLE_CLASS} leading-[20px]`}>
          {title}
        </h3>
        <p className={MOBILE_FEATURE_BODY_CLASS}>{body}</p>
      </div>
    </motion.article>
  );
}

export default function WhyChooseMekark() {
  return (
    <section
      className="relative w-full overflow-hidden font-sans text-gray-100"
      style={{ backgroundImage: MULTI_STOREY_WHY_CHOOSE_SECTION_BG }}
    >
      {/* Full-bleed site background — desktop only */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[min(1032px,100%)] w-full lg:block">
        <Image
          src="/images/services/multi-storey/why-choose/site-bg.webp"
          alt="Multi-storey steel construction site background"
          fill
          sizes="100vw"
          className="object-contain object-bottom"
          priority={false}
        />
      </div>

      {/* ─── Mobile — Figma 7385:1321 ─── */}
      <div className="relative z-10 lg:hidden">
        <div className="relative px-5 pt-[26px] pb-0">
          <div className="relative mx-auto flex w-full max-w-[350px] flex-col gap-[14px]">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: easeOut }}
            >
              <h2 className="font-manrope text-[28px] font-bold leading-[35px] text-[#111]">
                <span className="block leading-[35px]">Why Industrial Clients</span>
                <span className="block leading-[35px] text-[#e50818]">Choose Mekark</span>
              </h2>
              <p
                className={`${PEB_WHY_CHOOSE_DESCRIPTION_CLASS} mt-[14px] !leading-normal`}
              >
                <span>
                  As a trusted steel building contractor and industrial construction
                  company,
                </span>
                <span>
                  Mekark brings manufacturing capacity and engineering depth that
                  most contractors don&apos;t have in-house.
                </span>
              </p>
            </motion.div>

            {/* Figma 7385:1326 — portrait with civil-style bottom blend */}
            <motion.div
              className="relative -mb-[88px] h-[356px] w-full overflow-hidden rounded-[24px] shadow-[0px_12px_16px_rgba(0,0,0,0.08)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: easeOut }}
              style={{
                WebkitMaskImage:
                  "linear-gradient(180deg, #000 0%, #000 52%, rgba(0,0,0,0.65) 72%, transparent 92%)",
                maskImage:
                  "linear-gradient(180deg, #000 0%, #000 52%, rgba(0,0,0,0.65) 72%, transparent 92%)",
              }}
            >
              {/* 7385:1327 — blurred steel frame */}
              <div
                className="pointer-events-none absolute top-[-13px] left-[25px] h-[199px] w-[289px] overflow-hidden blur-[1.5px] opacity-80"
                aria-hidden
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/services/multi-storey/why-choose/building-blur.webp"
                  alt=""
                  className="absolute top-[7.38%] left-[2.99%] h-[92.66%] w-[95.87%] max-w-none object-cover"
                />
              </div>
              {/* 7385:1328 — engineer (soft mask + lighten removes black plate) */}
              <div
                className="pointer-events-none absolute top-1/2 left-1/2 h-[314px] w-[350px] -translate-x-1/2 -translate-y-[calc(50%+19px)] overflow-hidden drop-shadow-[0_10px_24px_rgba(0,0,0,0.12)]"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(180deg, #000 0%, #000 62%, rgba(0,0,0,0.4) 82%, transparent 100%)",
                  maskImage:
                    "linear-gradient(180deg, #000 0%, #000 62%, rgba(0,0,0,0.4) 82%, transparent 100%)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/services/multi-storey/why-choose/worker.webp"
                  alt="Mekark engineer with structural blueprints"
                  className="absolute top-[-8%] left-[-18%] h-[118%] w-[136%] max-w-none object-cover mix-blend-lighten"
                />
              </div>
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[55%]"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(248,248,248,0) 0%, rgba(248,248,248,0.55) 38%, #f8f8f8 100%)",
                }}
                aria-hidden
              />
            </motion.div>
          </div>
        </div>

        {/* Benefits — overlaps portrait blend (civil pattern) */}
        <div className="relative z-20">
          <div className="relative overflow-hidden bg-[#f8f8f8] px-5 pt-2 pb-16">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-[100px] -translate-y-[58px]"
              style={{ backgroundImage: MULTI_STOREY_WHY_CHOOSE_HERO_FADE }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-0 left-[-56px] h-[270px] w-[503px] max-w-none"
              aria-hidden
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/services/multi-storey/why-choose/site-bg.webp"
                alt=""
                className="size-full object-cover object-bottom"
              />
              <div
                className="absolute inset-x-0 top-0 h-[55%]"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, #f8f8f8 0%, rgba(248,248,248,0.75) 32%, rgba(248,248,248,0) 100%)",
                }}
                aria-hidden
              />
            </div>

            <div className="relative z-10 mx-auto flex w-full max-w-[350px] flex-col">
              {mobileItems.map((item, index) => (
                <MobileFeature key={item.num} {...item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── Desktop layout (unchanged) ─── */}
      <div className="relative z-10 mx-auto hidden w-full max-w-[1920px] lg:block lg:min-h-[1014px] lg:px-10 lg:pt-9 lg:pb-0">
        <motion.div
          className="mx-auto max-w-[1260px] text-center lg:mb-0"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          <h2 className="text-[53.33px] leading-[81.6px] font-bold tracking-[-1.33px] text-gray-100">
            Why Industrial Clients{" "}
            <span className="text-red">Choose Mekark</span>
          </h2>
          <p className="service-section-description mt-2">
            <span>
              As a trusted steel building contractor and industrial construction
              company,
            </span>
            <span>
              Mekark brings manufacturing capacity and engineering depth that most
              contractors don&apos;t have in-house.
            </span>
          </p>
        </motion.div>

        <div className="relative mx-auto mt-[34px] w-full max-w-[1488px] lg:h-[804px]">
          <motion.div
            className="pointer-events-none absolute top-0 left-[10%] z-20 h-[804px] w-[80%]"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
            aria-hidden
          >
            {/* Blurred building — hard left / right cut with just a ~2px
                feathered edge so it isn't a jagged clip. */}
            <div className="absolute bottom-[320px] left-[calc(50%-48px)] h-[min(850px,106%)] w-[min(820px,69%)] -translate-x-1/2 blur-[2.67px] [mask-image:linear-gradient(to_right,transparent_0,transparent_calc(16%-3px),#000_16%,#000_calc(100%-2px),transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0,transparent_calc(16%-3px),#000_16%,#000_calc(100%-2px),transparent_100%)]">
              <Image
                src="/images/services/multi-storey/why-choose/building-blur.webp"
                alt="Multi-storey steel building under construction"
                fill
                sizes="524px"
                className="object-contain object-bottom"
              />
            </div>
            <div className="absolute bottom-0 left-[45%] h-[88%] w-[95%] max-w-none -translate-x-1/2">
              <Image
                src="/images/services/multi-storey/why-choose/worker.webp"
                alt="Construction worker at multi-storey steel project"
                fill
                sizes="(min-width: 1280px) 960px, 60vw"
                className="object-contain object-bottom"
                priority
              />
            </div>
          </motion.div>

          <div className="relative z-10 grid grid-cols-[minmax(240px,1fr)_minmax(180px,1.15fr)_minmax(240px,1fr)] gap-0 pt-[67px]">
            <motion.div
              className="flex flex-col gap-[60.67px]"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: easeOut }}
            >
              {leftItems.map((item) => (
                <FeatureItem key={item.num} {...item} />
              ))}
            </motion.div>

            <div aria-hidden />

            <motion.div
              className="flex flex-col gap-[60.67px]"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: easeOut }}
            >
              {rightItems.map((item) => (
                <FeatureItem key={item.num} {...item} />
              ))}
            </motion.div>
          </div>

          <span className="sr-only">
            Mekark engineer with structural blueprints
          </span>
        </div>
      </div>
    </section>
  );
}
