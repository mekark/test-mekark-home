"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SERVICE_WHY_CHOOSE_FEATURE_BODY_CLASS } from "@/components/services/serviceTypography";

const leftItems = [
  {
    num: "01",
    title: "Turnkey Implementation:",
    body: "Single point of responsibility from design to erection.",
  },
  {
    num: "03",
    title: "Structural Engineers In-House:",
    body: "BIM-based analysis ensures your building is precisely designed and ready for fabrication.",
  },
  {
    num: "05",
    title: "Quality & Safe Construction:",
    body: "Independent QA, certification testing, engineered erection sequencing, and rigorous safety checks ensure reliable project delivery.",
  },
] as const;

const rightItems = [
  {
    num: "02",
    title: "Established Credentials:",
    body: "Over 200+ multi-storey and industrial projects completed, with a 4.7/5 customer rating.",
  },
  {
    num: "04",
    title: "Faster Construction:",
    body: "Pre-engineered steel technology cuts timelines versus conventional RCC.",
  },
  {
    num: "06",
    title: "18+ Years of Experience:",
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
      <div className="flex min-w-[128px] shrink-0 flex-col items-start pr-[9.85px]">
        <span className="font-montserrat text-[80px] leading-[97.33px] font-black tracking-[-4px] text-[#cc1020]">
          {num}
        </span>
      </div>
      <div className="flex h-[92px] shrink-0 flex-col items-start justify-center pt-1 pr-[18.67px] pl-[5.33px]">
        <div className="min-h-[80px] w-[1.33px] flex-1 bg-[rgba(204,16,32,0.4)]" />
      </div>
      <div className="min-w-0 flex-1 pt-0 lg:max-w-[328px]">
        <b className="block font-montserrat text-[18.67px] leading-[24px] font-bold text-darkslategray">
          {title}
        </b>
        <p className={`mt-[10px] ${SERVICE_WHY_CHOOSE_FEATURE_BODY_CLASS}`}>
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
      className="relative grid grid-cols-[52px_1fr] gap-x-3 border-b border-black/10 py-5 last:border-b-0"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: easeOut, delay: 0.04 * index }}
    >
      <div className="relative flex flex-col items-center">
        <span className="font-montserrat text-[28px] leading-none font-black tracking-[-1.5px] text-[#cc1020]">
          {num}
        </span>
        {index < mobileItems.length - 1 ? (
          <span
            className="mt-3 w-px flex-1 bg-[rgba(204,16,32,0.4)]"
            aria-hidden
          />
        ) : null}
      </div>
      <div className="min-w-0 pb-1">
        <h3 className="font-montserrat text-[16px] leading-[22px] font-bold text-darkslategray">
          {title.replace(/:$/, "")}
        </h3>
        <p className={`mt-1.5 ${SERVICE_WHY_CHOOSE_FEATURE_BODY_CLASS}`}>
          {body}
        </p>
      </div>
    </motion.article>
  );
}

export default function WhyChooseMekark() {
  return (
    <section
      className="relative w-full overflow-hidden font-sans text-gray-100"
      style={{
        backgroundImage:
          "linear-gradient(269.25deg, #fff 35.028%, rgba(255,255,255,0) 99.353%), linear-gradient(#e6e6e6, #e6e6e6)",
      }}
    >
      {/* Full-bleed site background — Figma: bottom-anchored */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[min(1032px,100%)] w-full">
        <Image
          src="/images/services/multi-storey/why-choose/site-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom"
          priority={false}
        />
      </div>

      {/* ─── Mobile layout ─── */}
      <div className="relative z-10 lg:hidden">
        <div className="px-5 pt-12 pb-4 sm:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            <h2 className="text-[28px] leading-[1.2] font-bold tracking-[-0.8px] text-gray-100">
              Why Industrial Clients{" "}
              <span className="text-red">Choose Mekark</span>
            </h2>
            <p className="service-section-description mt-3">
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
        </div>

        {/* Visual band */}
        <motion.div
          className="relative mx-auto mt-2 h-[280px] w-full max-w-[420px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: easeOut }}
        >
          <div className="pointer-events-none absolute top-[8%] left-1/2 h-[58%] w-[72%] -translate-x-1/2 blur-[2px]">
            <Image
              src="/images/services/multi-storey/why-choose/building-blur.png"
              alt=""
              fill
              sizes="280px"
              className="object-cover object-center opacity-80"
            />
          </div>
          <div className="absolute inset-0">
            <Image
              src="/images/services/multi-storey/why-choose/worker.png"
              alt="Mekark engineer with structural blueprints"
              fill
              sizes="420px"
              className="object-contain object-bottom"
              priority
            />
          </div>
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(230,230,230,0) 0%, #e6e6e6 100%)",
            }}
          />
        </motion.div>

        {/* Timeline features */}
        <div className="relative mx-5 mb-14 sm:mx-8">
          {mobileItems.map((item, index) => (
            <MobileFeature key={item.num} {...item} index={index} />
          ))}
        </div>
      </div>

      {/* ─── Desktop layout (unchanged) ─── */}
      <div className="relative z-10 mx-auto hidden w-full max-w-[1920px] lg:block lg:min-h-[1014px] lg:px-10 lg:pt-9 lg:pb-0 xl:px-6">
        <motion.div
          className="mx-auto max-w-[1260px] text-center lg:mb-0"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          <h2 className="text-[53.33px] leading-[81.6px] font-bold tracking-[-1.33px] text-gray-100 xl:text-[40px] xl:leading-[60px] 2xl:text-[53.33px] 2xl:leading-[81.6px]">
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
            className="pointer-events-none absolute top-0 left-[10%] z-0 h-[804px] w-[80%] xl:left-[312px] xl:w-[846.67px]"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
            aria-hidden
          >
            <div className="absolute top-[-7.67px] left-[calc(50%-16px)] h-[min(556px,70%)] w-[min(524px,62%)] -translate-x-1/2 blur-[2.67px]">
              <Image
                src="/images/services/multi-storey/why-choose/building-blur.png"
                alt=""
                fill
                sizes="524px"
                className="object-cover object-center"
              />
            </div>
            <div className="absolute bottom-0 left-1/2 h-[88%] w-[95%] max-w-none -translate-x-1/2 xl:h-[820px] xl:w-[960px]">
              <Image
                src="/images/services/multi-storey/why-choose/worker.png"
                alt=""
                fill
                sizes="(min-width: 1280px) 960px, 60vw"
                className="object-contain object-bottom"
                priority
              />
            </div>
          </motion.div>

          <div className="relative z-10 grid grid-cols-[minmax(240px,1fr)_minmax(180px,1.15fr)_minmax(240px,1fr)] gap-0 pt-[67px] xl:grid-cols-[456px_1fr_456px]">
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
