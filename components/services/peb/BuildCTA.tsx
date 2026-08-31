"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PHONE_HREF } from "@/lib/contact";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function BuildCTA() {
  return (
    <section
      id="contact"
      className="relative h-auto w-full overflow-hidden px-5 py-10 text-left font-manrope text-white sm:px-8 sm:py-12 lg:h-[206.7px] lg:px-0 lg:py-0"
      style={{
        backgroundImage: "linear-gradient(96.33deg, #8B0C11, #ED1D23)",
      }}
      aria-labelledby="build-cta-title"
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
                src="/images/services/peb/final-cta/phone-red.svg"
                alt=""
                width={30}
                height={30}
                className="size-full object-contain"
              />
            </div>
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-1 sm:gap-2">
            <h2
              id="build-cta-title"
              className="font-extrabold text-[22px] leading-[1.15] text-white sm:text-[30px] sm:leading-[36px]"
            >
              Ready to{" "}
              <span className="uppercase">Build Faster, Smarter, Better</span>
            </h2>
            <p className="font-medium tracking-[1.42px] text-[#CCC6C6] text-[16px] leading-[22px] sm:text-[22px]">
              Talk to Mekark&apos;s PEB expert today
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
              src="/images/services/peb/final-cta/arrow.svg"
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
              src="/images/services/peb/final-cta/phone-white.svg"
              alt=""
              width={19}
              height={19}
              className="size-[18.7px]"
            />
          </a>
        </div>
      </div>

      {/* Desktop */}
      <div className="relative mx-auto hidden h-full w-full max-w-[1920px] lg:block">
        <motion.div
          className="mx-auto flex h-full min-h-[clamp(8.5rem,9.72vw,11.667rem)] w-full items-center gap-[clamp(1.5rem,2.66vw,3.188rem)] px-[5.556%] py-[clamp(2rem,2.17vw,2.604rem)]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOut }}
        >
          <div className="relative size-[clamp(4.5rem,4.792vw,5.75rem)] shrink-0 rounded-full bg-white shadow-[0_0_12.13px_9.33px_rgba(0,0,0,0.10)]">
            <span className="absolute left-1/2 top-1/2 size-[clamp(1.75rem,2vw,2.4rem)] -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/images/services/peb/final-cta/phone-red.svg"
                alt=""
                fill
                className="object-contain"
                sizes="39px"
              />
            </span>
          </div>

          <div className="flex flex-1 flex-col text-left">
            <h2 className="text-balance text-[clamp(1.75rem,2.361vw,2.833rem)] font-extrabold leading-[clamp(2rem,2.631vw,3.158rem)] text-white">
              Ready to{" "}
              <span className="uppercase">Build Faster, Smarter, Better</span>
            </h2>
            <p className="mt-[clamp(0.25rem,0.14vw,0.167rem)] text-[clamp(1rem,1.528vw,1.833rem)] font-medium leading-[clamp(1.25rem,1.183vw,1.42rem)] tracking-[0.089rem] text-[#CCC6C6]">
              Talk to Mekark&apos;s PEB expert today
            </p>
          </div>

          <div className="flex w-[243px] shrink-0 flex-col gap-[0.833rem]">
            <a
              href="/#enquiry"
              className="flex h-[clamp(2.75rem,2.882vw,3.458rem)] items-center justify-center gap-[0.601rem] rounded-full bg-white px-[1.504rem] text-base font-bold leading-[1.504rem] text-[#E5091F] transition-transform hover:scale-[1.03]"
            >
              Get a Free Quote
              <span className="relative size-[1.172rem] shrink-0">
                <Image
                  src="/images/services/peb/final-cta/arrow.svg"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="19px"
                />
              </span>
            </a>
            <a
              href={PHONE_HREF}
              className="flex h-[clamp(2.75rem,2.882vw,3.458rem)] items-center justify-center gap-[0.601rem] rounded-full bg-[#111111] px-[1.504rem] text-base font-bold leading-[1.504rem] text-white transition-transform hover:scale-[1.03]"
            >
              Call us
              <span className="relative size-[1.167rem] shrink-0">
                <Image
                  src="/images/services/peb/final-cta/phone-white.svg"
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
