"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SERVICE_MID_CTA_TITLE_SIZE_CLASS_SCALED } from "@/components/services/serviceTypography";
import {
  ServiceMidCtaCopy,
  ServiceMidCtaLine,
} from "@/components/services/ServiceMidCtaLine";

const easeOut = [0.22, 1, 0.36, 1] as const;

function PlanningCtaTitle({ id }: { id?: string }) {
  return (
    <h2
      id={id}
      className={`w-full max-w-full font-extrabold lg:w-fit ${SERVICE_MID_CTA_TITLE_SIZE_CLASS_SCALED.medium}`}
    >
      <span className="block text-white lg:whitespace-nowrap">
        Planning a Factory, Commercial
      </span>
      <span className="block lg:whitespace-nowrap">
        <span className="text-white">Building,</span>
        <span className="text-black"> or Industrial Building?</span>
      </span>
    </h2>
  );
}

/** Figma Frame 191 — node 2488:5965 */
const CTA_WIDTH = 1706.67;
const CTA_HEIGHT = 345.33;

/**
 * Planning CTA — Civil Mid CTA
 * Red box: 1706.67 × 345.33
 */
export default function PlanningCta() {
  return (
    <section
      id="quote"
      className="relative mx-auto w-full max-w-[1920px] overflow-visible bg-white px-5 py-8 sm:px-8 sm:py-10 lg:px-[80px] lg:pt-[72px] lg:pb-12"
      aria-labelledby="civil-quote-title"
    >
      {/* Mobile — continuous red gradient; building blended at bottom */}
      <motion.div
        className="relative mx-auto w-full overflow-hidden rounded-[28px] bg-[linear-gradient(118.73deg,#8B0C11_6.54%,#ED1D23_108.89%)] sm:rounded-[32px] lg:hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <div className="relative z-10 flex flex-col px-5 pt-8 pb-[200px] sm:px-8 sm:pt-10 sm:pb-[260px]">
          <ServiceMidCtaCopy className="min-w-0 w-full">
            <PlanningCtaTitle id="civil-quote-title" />

            <p className="mt-3 max-w-[28rem] text-[13px] font-medium leading-[18px] tracking-[1.1px] text-[#CCC6C6] sm:text-[14px] sm:leading-[20px]">
              Get a free consultation and project blueprint from Mekark&apos;s
              civil construction and structural engineering team.
            </p>

            <a
              href="/#enquiry"
              className="mt-6 inline-flex min-h-[40px] w-fit max-w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-[13px] font-bold leading-[18px] text-[#E5091F] transition-transform active:scale-[0.98] sm:mt-7 sm:min-h-[44px] sm:px-5 sm:py-3 sm:text-[14px]"
            >
              Request a Free Quote
              <span className="relative size-[14px] shrink-0 sm:size-[16px]">
                <Image
                  src="/images/services/civil/cta/arrow.svg"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="18px"
                />
              </span>
            </a>
          </ServiceMidCtaCopy>
        </div>

        {/* Building on same gradient — no separate red layer */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[200px] sm:h-[260px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/services/civil/cta/MidCTA.png"
            alt="Modern commercial building under construction"
            className="absolute left-1/2 bottom-0 h-[115%] w-[170%] max-w-none -translate-x-[46%] object-cover object-[center_30%] sm:w-[145%] sm:-translate-x-[48%]"
          />
        </div>
      </motion.div>

      {/* Desktop red box — 1706.67 × 345.33 */}
      <div
        className="relative mx-auto hidden overflow-visible rounded-[40px] bg-[linear-gradient(118.73deg,#8B0C11_6.54%,#ED1D23_108.89%)] lg:block"
        style={{
          width: CTA_WIDTH,
          height: CTA_HEIGHT,
          maxWidth: "100%",
        }}
      >
        {/* Image 32 — MidCTA.png, overflows above red card */}
        <motion.div
          className="pointer-events-none absolute z-[1] overflow-visible"
          style={{
            right: 0,
            bottom: -57,
            width: 976,
            height: 614,
          }}
          aria-hidden
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <Image
            src="/images/services/civil/cta/MidCTA.png"
            alt=""
            width={976}
            height={614}
            className="h-[614px] w-full max-w-none rounded-t-none rounded-br-[34px] rounded-bl-none object-cover"
            sizes="100vw"
            priority
          />
        </motion.div>

        <motion.div
          className="relative z-10 h-full"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: easeOut }}
        >
          <ServiceMidCtaLine className="absolute left-[6.87%] top-[42.67px] z-[2]" />

          {/* Copy block — Figma 2488:5967 */}
          <div className="absolute left-[8.59%] top-[16%] flex h-[70%] w-[32.42%] min-w-0 flex-col">
            <PlanningCtaTitle />

            <p className="mt-3 w-[110%] text-[clamp(14px,1.1vw,18.67px)] font-medium leading-[1.22] tracking-[1.42px] text-[#CCC6C6]">
              Get a free consultation and project blueprint from
              <br />
              Mekark&apos;s civil construction and structural engineering team.
            </p>

            <a
              href="/#enquiry"
              className="mt-auto inline-flex w-fit items-center justify-center gap-[9.6px] rounded-full bg-white px-[24.1px] py-[14.4px] text-base font-bold leading-[24.06px] text-[#E5091F] transition-transform hover:scale-[1.03]"
            >
              Request a Free Quote
              <span className="relative size-[18.8px] shrink-0 overflow-hidden">
                <Image
                  src="/images/services/civil/cta/arrow.svg"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="19px"
                />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
