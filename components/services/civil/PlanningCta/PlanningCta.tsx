"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SERVICE_MID_CTA_TITLE_SIZE_CLASS_SCALED } from "@/components/services/serviceTypography";
import {
  ServiceMidCtaCopy,
  ServiceMidCtaLine,
} from "@/components/services/ServiceMidCtaLine";
import { useServiceEnquiry } from "@/components/services/ServiceEnquiryProvider";

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
  const { openEnquiry } = useServiceEnquiry();

  return (
    <section
      id="quote"
      className="relative mx-auto w-full max-w-[1920px] overflow-visible bg-white px-4 py-8 sm:px-8 sm:py-10 lg:px-[80px] lg:pt-[72px] lg:pb-12"
      aria-labelledby="civil-quote-title"
    >
      {/* Mobile — Figma 7385:1162 */}
      <motion.div
        className="relative mx-auto h-[478px] w-full max-w-[358px] overflow-hidden rounded-[20px] bg-[linear-gradient(94.75deg,#8B0C11_6.54%,#ED1D23_108.89%)] lg:hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <div className="absolute inset-x-6 top-6 z-10 flex flex-col gap-[18px]">
          <h2
            id="civil-quote-title"
            className="w-full max-w-[320px] font-manrope text-[28px] font-extrabold leading-[32px] text-white"
          >
            <span className="block">Planning a Factory, Commercial Building,</span>
            <span className="block">
              <span>or </span>
              <span className="text-black">Industrial Building?</span>
            </span>
          </h2>

          <p className="font-manrope text-sm font-medium leading-normal text-[#ccc6c6]">
            Get a free consultation and project blueprint from Mekark&apos;s
            civil construction and structural engineering team.
          </p>

          <button
            type="button"
            onClick={openEnquiry}
            className="flex w-full cursor-pointer items-center justify-center gap-[9.623px] rounded-full border-0 bg-white px-6 py-[14.435px] text-sm font-bold leading-5 text-[#E5091F] transition-transform active:scale-[0.98]"
          >
            Request a Free Quote
            <span className="relative size-[18.758px] shrink-0">
              <Image
                src="/images/services/civil/cta/arrow.svg"
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
            src="/images/services/civil/cta/MidCTA.webp"
            alt="Modern commercial building under construction"
            className="absolute top-[8.98%] left-[-17.06%] h-[107.72%] w-[117.09%] max-w-none object-cover"
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
            src="/images/services/civil/cta/MidCTA.webp"
            alt="Civil construction project by Mekark"
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

            <button
              type="button"
              onClick={openEnquiry}
              className="mt-auto inline-flex w-fit cursor-pointer items-center justify-center gap-[9.6px] rounded-full border-0 bg-white px-[24.1px] py-[14.4px] text-base font-bold leading-[24.06px] text-[#E5091F] transition-transform hover:scale-[1.03]"
            >
              Request a Free Quote
              <span className="relative size-[18.8px] shrink-0 overflow-hidden">
                <Image
                  src="/images/services/civil/cta/arrow.svg"
                  alt="Arrow icon"
                  fill
                  className="object-contain"
                  sizes="19px"
                />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
