"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ServiceMidCtaTitle } from "@/components/services/ServiceMidCtaTitle";
import { ServiceMidCtaLine } from "@/components/services/ServiceMidCtaLine";
import { useServiceEnquiry } from "@/components/services/ServiceEnquiryProvider";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function ProjectDelivery() {
  const { openEnquiry } = useServiceEnquiry();

  return (
    <section
      id="quote"
      className="relative mx-auto w-full max-w-[1920px] overflow-visible bg-white text-gray-100 lg:px-[clamp(40px,5.5vw,107px)] lg:pt-[calc(4rem+68px)] lg:pb-16"
    >
      <motion.div
        className="relative mx-auto w-full max-w-[1707px] overflow-visible"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        {/* Mobile — MEP/Tensile CtaBanner pattern: 358×530, r=20 */}
        <motion.div
          className="box-border w-full px-[16px] py-[32px] lg:hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <div className="relative mx-auto flex h-[530px] w-full max-w-[358px] flex-col overflow-hidden rounded-[20px] bg-[linear-gradient(94.66deg,#8B0C11_6.54%,#ED1D23_108.89%)]">
            <div className="relative z-10 flex flex-col items-start gap-[18px] px-6 pt-6 text-left">
              <h2 className="w-full font-manrope text-[28px] font-extrabold leading-[0] text-white [word-break:break-word]">
                <span className="leading-[32px]">
                  Planning a Multi-Storey Factory, Office, or{" "}
                </span>
                <span className="leading-[32px] text-black">
                  Commercial Building?
                </span>
              </h2>

              <p className="w-full font-manrope text-sm font-medium leading-normal text-[#ccc6c6] [word-break:break-word]">
                Get a free consultation and project blueprint from Mekark&apos;s
                structural engineering team.
              </p>

              <button
                type="button"
                onClick={openEnquiry}
                className="flex w-full cursor-pointer items-center justify-center gap-[9.623px] rounded-full border-0 bg-white px-[24px] py-[14.435px] text-sm font-bold leading-5 text-[#E5091F] transition-transform active:scale-[0.98]"
              >
                Request a Free Quote
                <span className="relative size-[18.758px] shrink-0">
                  <Image
                    src="/images/services/multi-storey/frame212/icons/quote-arrow.svg"
                    alt="Arrow icon"
                    fill
                    className="object-contain"
                    sizes="19px"
                  />
                </span>
              </button>
            </div>

            <div aria-hidden className="min-h-5 flex-1" />

            <div className="pointer-events-none relative z-[1] h-[300px] shrink-0 overflow-hidden rounded-bl-[20px] rounded-br-[20px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/services/multi-storey/frame212/cta/building-mobile.webp"
                alt="Multi-storey building under construction"
                className="absolute bottom-0 left-[-25%] h-[108%] w-[130%] max-w-none object-cover object-[center_35%]"
              />
            </div>
          </div>
        </motion.div>

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

              <button
                type="button"
                onClick={openEnquiry}
                className="mt-8 inline-flex w-fit cursor-pointer items-center gap-[9.6px] rounded-full border-0 bg-white px-6 py-[14px] text-base font-bold leading-[24px] text-quote-red transition-opacity hover:opacity-90"
              >
                Request a Free Quote
                <Image
                  src="/images/services/multi-storey/frame212/icons/quote-arrow.svg"
                  alt="Arrow icon"
                  width={12}
                  height={9}
                  className="h-[9px] w-3"
                />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
