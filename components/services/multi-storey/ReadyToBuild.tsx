"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PHONE_HREF } from "@/lib/contact";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function ReadyToBuild() {
  return (
    <section
      id="contact"
      className="relative h-auto w-full overflow-hidden px-5 py-10 text-left font-manrope text-white sm:px-8 sm:py-12 lg:h-[206.7px] lg:px-[clamp(40px,5.5vw,107px)] lg:py-0"
      style={{
        backgroundImage: "linear-gradient(96.33deg, #8B0C11, #ED1D23)",
      }}
      aria-labelledby="ready-to-build-title"
    >
      {/* Mobile / tablet — matches Civil FooterCta */}
      <div className="relative mx-auto flex w-full max-w-[1707px] flex-col items-start justify-center gap-6 lg:hidden">
        <div className="flex items-start gap-4 sm:gap-5">
          <div
            className="relative flex size-[72px] shrink-0 items-center justify-center"
            aria-hidden
          >
            <div className="absolute inset-0 rounded-full bg-white shadow-[0px_0px_12.13px_9.33px_rgba(0,0,0,0.1)]" />
            <div className="relative size-[30px] overflow-hidden">
              <Image
                src="/images/services/multi-storey/frame212/icons/cta-phone.svg"
                alt=""
                width={30}
                height={30}
                className="size-full object-contain"
              />
            </div>
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-1 sm:gap-2">
            <h2
              id="ready-to-build-title"
              className="font-extrabold text-[22px] leading-[1.15] text-white sm:text-[30px] sm:leading-[36px]"
            >
              Ready to{" "}
              <span className="uppercase">Build Faster, Smarter, Better</span>
            </h2>
            <p className="font-medium tracking-[1.42px] text-[#CCC6C6] text-[16px] leading-[22px] sm:text-[22px]">
              Talk to Mekark&apos;s structural engineering expert today
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col gap-[13.3px] md:max-w-[520px] md:flex-row">
          <a
            href="/#enquiry"
            className="inline-flex h-[55.3px] w-full items-center justify-center gap-[9.6px] rounded-full bg-white px-[24.1px] text-[15px] font-bold leading-[24.06px] text-[#E5091F] sm:text-base"
          >
            Get a Free Quote
            <Image
              src="/images/services/multi-storey/frame212/icons/cta-quote-arrow.svg"
              alt=""
              width={19}
              height={19}
              className="size-[18.8px]"
            />
          </a>
          <a
            href={PHONE_HREF}
            className="inline-flex h-[55.3px] w-full items-center justify-center gap-[9.6px] rounded-full bg-[#111] px-[24.1px] text-[15px] font-bold leading-[24.06px] text-white sm:text-base"
          >
            Call us
            <Image
              src="/images/services/multi-storey/frame212/icons/cta-call-phone.svg"
              alt=""
              width={19}
              height={19}
              className="size-[18.7px]"
            />
          </a>
        </div>
      </div>

      {/* Desktop */}
      <motion.div
        className="relative mx-auto hidden w-full max-w-[1707px] lg:flex lg:min-h-[109px] lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:py-[49px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, ease: easeOut }}
      >
        <div className="flex w-auto items-center gap-[50px]">
          <div className="relative size-[92px] shrink-0">
            <Image
              src="/images/services/multi-storey/frame212/icons/cta-phone-ring.svg"
              alt=""
              width={135}
              height={135}
              className="pointer-events-none absolute top-1/2 left-1/2 size-[135%] max-w-none -translate-x-1/2 -translate-y-1/2"
            />
            <div className="absolute top-1/2 left-1/2 size-[38.4px] -translate-x-1/2 -translate-y-1/2 overflow-clip">
              <Image
                src="/images/services/multi-storey/frame212/icons/cta-phone.svg"
                alt=""
                width={35}
                height={35}
                className="size-full object-contain"
              />
            </div>
          </div>

          <div className="min-w-0">
            <h2 className="text-[45.33px] leading-[50.52px] font-extrabold">
              Ready to{" "}
              <span className="uppercase">Build Faster, Smarter, Better</span>
            </h2>
            <p className="mt-3 text-[29.33px] leading-[22.72px] font-medium tracking-[1.42px] text-silver">
              Talk to Mekark&apos;s structural engineering expert today
            </p>
          </div>
        </div>

        <div className="flex min-w-[243px] -translate-x-16 flex-col gap-[13px]">
          <a
            href="/#enquiry"
            className="inline-flex h-[55px] items-center justify-center gap-[9.6px] rounded-full bg-white px-6 text-base font-bold leading-[24px] text-quote-red transition-opacity hover:opacity-90"
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
            className="inline-flex h-[55px] items-center justify-center gap-[9.6px] rounded-full bg-[#111] px-6 text-base font-bold leading-[24px] text-white transition-opacity hover:opacity-90"
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
