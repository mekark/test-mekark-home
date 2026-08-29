"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PHONE_HREF } from "@/lib/contact";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function ReadyToBuild() {
  return (
    <section
      className="relative overflow-hidden px-5 py-10 text-white sm:px-8 lg:px-[clamp(40px,5.5vw,107px)] lg:py-[49px]"
      style={{
        backgroundImage:
          "linear-gradient(135.86deg, #8b0c11 6.54%, #ed1d23 108.89%)",
      }}
    >
      <motion.div
        className="relative mx-auto flex w-full max-w-[1707px] flex-col items-start gap-8 lg:min-h-[109px] lg:flex-row lg:items-center lg:justify-between lg:gap-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, ease: easeOut }}
      >
        <div className="flex w-full items-start gap-4 sm:items-center sm:gap-8 lg:w-auto lg:gap-[50px]">
          <div className="relative size-[56px] shrink-0 sm:size-[92px]">
            <Image
              src="/images/services/multi-storey/frame212/icons/cta-phone-ring.svg"
              alt=""
              width={135}
              height={135}
              className="pointer-events-none absolute top-1/2 left-1/2 size-[135%] max-w-none -translate-x-1/2 -translate-y-1/2"
            />
            <div className="absolute top-1/2 left-1/2 size-[28px] -translate-x-1/2 -translate-y-1/2 overflow-clip sm:size-[38.4px]">
              <Image
                src="/images/services/multi-storey/frame212/icons/cta-phone.svg"
                alt=""
                width={35}
                height={35}
                className="size-full object-contain"
              />
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="text-[24px] leading-[1.2] font-extrabold sm:text-[36px] sm:leading-[1.15] lg:text-[45.33px] lg:leading-[50.52px]">
              Ready to{" "}
              <span className="uppercase">Build Faster, Smarter, Better</span>
            </h2>
            <p className="mt-2 text-[15px] leading-[22px] font-medium tracking-[0.8px] text-silver sm:text-[20px] sm:leading-[22.72px] sm:tracking-[1.42px] lg:mt-3 lg:text-[29.33px]">
              Talk to Mekark&apos;s PEB expert today
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-[13px] sm:w-auto sm:min-w-[243px] lg:-translate-x-16">
          <a
            href="/#enquiry"
            className="inline-flex h-[55px] w-full items-center justify-center gap-[9.6px] rounded-full bg-white px-6 text-base font-bold leading-[24px] text-quote-red transition-opacity hover:opacity-90"
          >
            Get a Free Quote
            <Image
              src="/images/services/multi-storey/frame212/icons/cta-quote-arrow.svg"
              alt=""
              width={14}
              height={12}
              className="h-[12px] w-[14px]"
            />
          </a>
          <a
            href={PHONE_HREF}
            className="inline-flex h-[55px] w-full items-center justify-center gap-[9.6px] rounded-full bg-[#111] px-6 text-base font-bold leading-[24px] text-white transition-opacity hover:opacity-90"
          >
            Call us
            <Image
              src="/images/services/multi-storey/frame212/icons/cta-call-phone.svg"
              alt=""
              width={19}
              height={19}
              className="size-[19px]"
            />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
