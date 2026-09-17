"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ServiceMidCtaTitle } from "@/components/services/ServiceMidCtaTitle";
import {
  ServiceMidCtaCopy,
  ServiceMidCtaLine,
} from "@/components/services/ServiceMidCtaLine";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function ProjectDelivery() {
  return (
    <section
      id="quote"
      className="relative overflow-visible bg-white px-5 py-8 text-gray-100 sm:px-8 sm:py-10 lg:px-[clamp(40px,5.5vw,107px)] lg:pt-[calc(4rem+68px)] lg:pb-16"
    >
      <motion.div
        className="relative mx-auto w-full max-w-[1707px] overflow-visible"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        {/* Mobile — matches Civil PlanningCta (image in flow at bottom) */}
        <div className="relative mx-auto flex w-full flex-col overflow-hidden rounded-[28px] bg-[linear-gradient(118.73deg,#8B0C11_6.54%,#ED1D23_108.89%)] sm:rounded-[32px] lg:hidden">
          <div className="relative z-10 flex flex-col px-5 pt-8 pb-6 sm:px-8 sm:pt-10 sm:pb-8">
            <ServiceMidCtaCopy>
              <ServiceMidCtaTitle
                line1="Planning a Multi-Storey Factory, Office,"
                line2="or Commercial Building?"
                size="long"
                scaledCanvas
              />
              <p className="mt-3 max-w-[28rem] text-[13px] font-medium leading-[18px] tracking-[1.1px] text-[#CCC6C6] sm:text-[14px] sm:leading-[20px]">
                Get a free consultation and project blueprint from Mekark&apos;s
                structural engineering team.
              </p>
            </ServiceMidCtaCopy>

            <a
              href="/#enquiry"
              className="relative z-10 mt-6 inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-full bg-white px-5 py-3.5 text-[14px] font-bold text-[#E5091F] transition-transform active:scale-[0.98] sm:mt-7 sm:w-fit sm:px-6"
            >
              Request a Free Quote
              <Image
                src="/images/services/multi-storey/frame212/icons/quote-arrow.svg"
                alt="Arrow icon"
                width={16}
                height={12}
                className="h-3 w-4"
              />
            </a>
          </div>

          <div className="relative mt-auto h-[200px] w-full shrink-0 overflow-hidden sm:h-[260px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/services/multi-storey/frame212/cta/building-mobile.webp"
              alt="Multi-storey building under construction"
              className="absolute left-1/2 bottom-0 h-[115%] w-[150%] max-w-none -translate-x-1/2 object-cover object-bottom sm:w-[135%]"
            />
          </div>
        </div>

        {/* Desktop */}
        <div className="relative hidden overflow-visible lg:block">
          <div
            className="pointer-events-none absolute top-[-67.33px] right-0 z-0 h-[67.33px] w-[966px] overflow-hidden"
            aria-hidden
          >
            <div className="absolute top-0 right-0 h-[481px] w-[966px]">
              <Image
                src="/images/services/multi-storey/frame212/cta/building.webp"
                alt="Multi-storey steel building project by Mekark"
                width={966}
                height={481}
                sizes="966px"
                className="h-[481px] w-[966px] max-w-none object-cover object-left"
                priority
              />
            </div>
          </div>

          <div
            className="relative h-[345px] w-full overflow-hidden rounded-[40px]"
            style={{
              backgroundImage:
                "linear-gradient(118.73deg, #8b0c11 6.54%, #ed1d23 108.89%)",
            }}
          >
            <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
              <div className="absolute top-[-67.33px] right-0 h-[481px] w-[966px]">
                <Image
                  src="/images/services/multi-storey/frame212/cta/building.webp"
                  alt="Multi-storey steel building project by Mekark"
                  width={966}
                  height={481}
                  sizes="966px"
                  className="h-[481px] w-[966px] max-w-none object-cover object-left"
                  priority
                />
              </div>
            </div>

            <ServiceMidCtaLine className="absolute left-[clamp(20px,6.2vw,119px)] top-1/2 z-[2] -translate-y-1/2" />

            <div className="absolute inset-y-0 left-[clamp(36px,7.6vw,147px)] z-10 flex w-[min(553px,40%)] flex-col justify-center py-[41px]">
              <ServiceMidCtaTitle
                line1="Planning a Multi-Storey Factory, Office,"
                line2="or Commercial Building?"
                size="long"
                scaledCanvas
              />
              <p className="mt-4 max-w-[520px] text-[18.67px] leading-[22.72px] font-medium tracking-[1.42px] text-silver">
                Get a free consultation and project blueprint from Mekark&apos;s
                structural engineering team.
              </p>

              <a
                href="/#enquiry"
                className="mt-8 inline-flex w-fit items-center gap-[9.6px] rounded-full bg-white px-6 py-[14px] text-base font-bold leading-[24px] text-quote-red transition-opacity hover:opacity-90"
              >
                Request a Free Quote
                <Image
                  src="/images/services/multi-storey/frame212/icons/quote-arrow.svg"
                  alt="Arrow icon"
                  width={12}
                  height={9}
                  className="h-[9px] w-3"
                />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
