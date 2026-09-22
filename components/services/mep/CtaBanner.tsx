"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ServiceMidCtaTitle } from "@/components/services/ServiceMidCtaTitle";
import {
  ServiceMidCtaCopy,
  ServiceMidCtaLine,
} from "@/components/services/ServiceMidCtaLine";
import { useServiceEnquiry } from "@/components/services/ServiceEnquiryProvider";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function CtaBanner() {
  const { openEnquiry } = useServiceEnquiry();

  return (
    <section className="relative mx-auto w-full max-w-[1920px] overflow-visible bg-white px-4 py-8 sm:px-8 sm:py-10 lg:px-[80px] lg:pt-[72px] lg:pb-12">
      {/* Mobile — civil PlanningCta pattern */}
      <motion.div
        className="relative mx-auto flex h-[530px] w-full max-w-[358px] flex-col overflow-hidden rounded-[20px] bg-[linear-gradient(94.75deg,#8B0C11_6.54%,#ED1D23_108.89%)] lg:hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <div className="relative z-10 flex flex-col gap-3 px-6 pt-5">
          <h2 className="w-full max-w-[320px] font-manrope text-[28px] font-extrabold leading-[32px] text-white">
            <span className="block">Planning a Factory, Warehouse,</span>
            <span className="block">
              <span>or </span>
              <span className="text-black">Manufacturing Plant?</span>
            </span>
          </h2>

          <p className="font-manrope text-sm font-medium leading-normal text-[#ccc6c6]">
            Get a free consultation and MEP system layout from Mekark&apos;s
            design-build team.
          </p>

          <button
            type="button"
            onClick={openEnquiry}
            className="flex w-full cursor-pointer items-center justify-center gap-[9.623px] rounded-full border-0 bg-white px-6 py-[14.435px] text-sm font-bold leading-5 text-[#E5091F] transition-transform active:scale-[0.98]"
          >
            Request a Free Quote
            <span className="relative size-[18.758px] shrink-0">
              <Image
                src="/images/services/mep/cta-banner/arrow.svg"
                alt="Arrow icon"
                fill
                className="object-contain"
                sizes="19px"
              />
            </span>
          </button>
        </div>

        <div aria-hidden className="min-h-5 flex-1" />

        <div className="pointer-events-none relative z-[1] h-[250px] shrink-0 overflow-hidden rounded-bl-[20px] rounded-br-[20px]">
          <Image
            src="/images/services/mep/cta-banner/engineer.webp"
            alt="MEP engineer reviewing plant layout drawings"
            fill
            className="object-cover object-[center_20%]"
            sizes="358px"
            priority
          />
        </div>
      </motion.div>

      {/* Desktop */}
      <div className="relative hidden h-[346px] w-full text-left font-manrope text-base text-silver lg:block">
        <div
          className="absolute top-0 left-1/2 h-[345.3px] w-[1706.7px] max-w-[calc(100%-48px)] -translate-x-1/2 rounded-[40px]"
          style={{
            background: "linear-gradient(96.33deg, #8b0c11, #ed1d23)",
          }}
        >
          <ServiceMidCtaLine className="absolute left-[117.33px] top-[42.67px] z-[2]" />

          <div className="absolute top-[50px] left-[146.67px] z-10 flex min-h-[264px] w-[553.3px] flex-col">
            <ServiceMidCtaTitle
              line1="Planning a Factory, Warehouse,"
              line2="or Manufacturing Plant?"
              size="short"
              className="lg:max-w-none"
              scaledCanvas
            />

            <p className="mt-4 max-w-[520px] text-[18.67px] leading-[22.72px] font-medium tracking-[1.42px]">
              Get a free consultation and MEP system layout from Mekark&apos;s
              design-build team.
            </p>

            <button
              type="button"
              onClick={openEnquiry}
              className="mt-8 inline-flex w-fit cursor-pointer items-center justify-center gap-[9.6px] rounded-full border-0 bg-white px-[24.1px] py-[14.4px] text-red-ribbon"
            >
              <b className="relative leading-[24.06px]">Request a Free Quote</b>
              <span className="relative size-[18.8px] shrink-0 overflow-hidden">
                <Image
                  src="/images/services/mep/cta-banner/arrow.svg"
                  alt="Arrow icon"
                  fill
                  className="object-contain"
                  sizes="19px"
                />
              </span>
            </button>
          </div>

          <Image
            className="absolute top-[-0.33px] left-[757.33px] h-[345.3px] w-[949px] object-cover shrink-0"
            src="/images/services/mep/cta-banner/engineer.webp"
            width={949}
            height={345}
            sizes="949px"
            alt="MEP engineer reviewing plant layout drawings"
            priority
          />
        </div>
      </div>
    </section>
  );
}
