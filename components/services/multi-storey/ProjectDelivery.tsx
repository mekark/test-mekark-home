"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function ProjectDelivery() {
  return (
    <section className="relative overflow-visible bg-white px-5 py-8 text-gray-100 sm:px-8 sm:py-10 lg:px-[clamp(40px,5.5vw,107px)] lg:pt-[calc(4rem+68px)] lg:pb-16">
      <motion.div
        className="relative mx-auto w-full max-w-[1707px] overflow-visible"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        {/* ─── Mobile — image-led CTA ─── */}
        <div className="relative overflow-hidden rounded-[24px] lg:hidden">
          {/* Building as full-bleed visual plane */}
          <div className="relative min-h-[480px] w-full sm:min-h-[520px]">
            <Image
              src="/images/services/multi-storey/frame212/cta/building.webp"
              alt="Multi-storey building under construction"
              fill
              sizes="(max-width: 1023px) 100vw, 0px"
              className="object-cover object-[center_25%]"
              priority
            />

            {/* Red wash from bottom for copy legibility */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(139,12,17,0.15) 0%, rgba(139,12,17,0.35) 35%, rgba(139,12,17,0.88) 68%, #8b0c11 100%)",
              }}
            />

            {/* Copy + CTA anchored to bottom */}
            <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col px-5 pb-7 pt-16">
              <div className="mb-2.5 flex items-center gap-2 text-white/80">
                <Image
                  src="/images/services/multi-storey/frame212/icons/planning-mark.svg"
                  alt=""
                  width={24}
                  height={19}
                  className="h-[18px] w-5 shrink-0 brightness-0 invert opacity-80"
                />
                <b className="text-[13px] font-semibold tracking-[1.4px] uppercase">
                  Planning a
                </b>
              </div>

              <h2 className="text-[28px] leading-[1.18] font-extrabold tracking-[-0.4px] text-white">
                Multi-Storey Factory, Office, or{" "}
                <span className="text-white/95 underline decoration-white/35 decoration-2 underline-offset-4">
                  Commercial Building?
                </span>
              </h2>

              <p className="mt-3 max-w-[320px] text-[14px] leading-[21px] font-medium text-white/75">
                Get a free consultation and project blueprint from Mekark&apos;s
                structural engineering team.
              </p>

              <a
                href="/#enquiry"
                className="mt-5 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-white px-6 py-[15px] text-[15px] font-bold leading-none text-quote-red shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-transform active:scale-[0.98]"
              >
                Request a Free Quote
                <Image
                  src="/images/services/multi-storey/frame212/icons/quote-arrow.svg"
                  alt=""
                  width={12}
                  height={9}
                  className="h-[9px] w-3"
                />
              </a>
            </div>
          </div>
        </div>

        {/* ─── Desktop (unchanged) ─── */}
        <div className="relative hidden overflow-visible lg:block">
          {/* Peek strip sits above the plate so overflow-hidden can round plate corners */}
          <div
            className="pointer-events-none absolute top-[-67.33px] right-0 z-0 h-[67.33px] w-[966px] overflow-hidden"
            aria-hidden
          >
            <div className="absolute top-0 right-0 h-[481px] w-[966px]">
              <Image
                src="/images/services/multi-storey/frame212/cta/building.webp"
                alt=""
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
            <div
              className="pointer-events-none absolute inset-0 z-0"
              aria-hidden
            >
              <div className="absolute top-[-67.33px] right-0 h-[481px] w-[966px]">
                <Image
                  src="/images/services/multi-storey/frame212/cta/building.webp"
                  alt=""
                  width={966}
                  height={481}
                  sizes="966px"
                  className="h-[481px] w-[966px] max-w-none object-cover object-left"
                  priority
                />
              </div>
            </div>

            <div className="pointer-events-none absolute top-[44px] bottom-[40px] left-[clamp(20px,6.2vw,119px)] z-[2] w-[2.7px] bg-white" />

            <div className="absolute inset-y-0 left-[clamp(36px,7.6vw,147px)] z-10 flex w-[min(553px,40%)] flex-col justify-center py-[41px]">
              <div className="mb-3 flex items-center gap-2 text-silver">
                <Image
                  src="/images/services/multi-storey/frame212/icons/planning-mark.svg"
                  alt=""
                  width={24}
                  height={19}
                  className="h-[19px] w-6 shrink-0"
                />
                <b className="text-base tracking-[1.2px]">
                  <span className="capitalize">Planning </span>
                  <span className="lowercase">a</span>
                </b>
              </div>

              <h2 className="text-[48px] leading-[50.52px] font-extrabold text-white">
                Multi-Storey Factory, Office, or{" "}
                <span className="text-black">Commercial Building?</span>
              </h2>

              <p className="mt-4 max-w-[520px] text-[18.67px] leading-[22.72px] font-medium tracking-[1.42px] text-silver">
                Get a free consultation and project blueprint from Mekark&apos;s
                structural engineering team.
              </p>

              <a
                href="/#enquiry"
                className="mt-6 inline-flex w-fit items-center gap-[9.6px] rounded-full bg-white px-6 py-[14px] text-base font-bold leading-[24px] text-quote-red transition-opacity hover:opacity-90"
              >
                Request a Free Quote
                <Image
                  src="/images/services/multi-storey/frame212/icons/quote-arrow.svg"
                  alt=""
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
