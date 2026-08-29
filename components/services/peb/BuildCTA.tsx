"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PHONE_HREF } from "@/lib/contact";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function BuildCTA() {
  return (
    <section
      className="w-full overflow-hidden bg-[linear-gradient(166deg,#8B0C11_0%,#ED1D23_100%)] px-5 py-8 text-white sm:px-10 lg:px-[5.556%] lg:py-[clamp(2rem,2.17vw,2.604rem)]"
      aria-labelledby="build-cta-title"
    >
      <div className="mx-auto flex h-full w-full max-w-[1920px] flex-col items-center gap-5 lg:min-h-[clamp(8.5rem,9.72vw,11.667rem)] lg:flex-row lg:items-center lg:gap-[clamp(1.5rem,2.66vw,3.188rem)]">
        <motion.div
          className="relative size-[clamp(4rem,12vw,5.75rem)] shrink-0 rounded-full bg-white shadow-[0_0_12.13px_9.33px_rgba(0,0,0,0.10)] sm:size-[clamp(4.5rem,4.792vw,5.75rem)]"
          initial={{ opacity: 0, scale: 0.75 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.65, ease: easeOut }}
        >
          <span className="absolute left-1/2 top-1/2 size-[clamp(1.75rem,2vw,2.4rem)] -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/images/services/peb/final-cta/phone-red.svg"
              alt=""
              fill
              className="object-contain"
              sizes="39px"
            />
          </span>
        </motion.div>

        <motion.div
          className="flex flex-1 flex-col text-center lg:text-left"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.08 }}
        >
          <h2
            id="build-cta-title"
            className="text-balance font-[family-name:var(--font-manrope)] text-[clamp(1.5rem,6vw,2.833rem)] font-extrabold leading-[1.15] text-white sm:text-[clamp(1.75rem,2.361vw,2.833rem)] sm:leading-[clamp(2rem,2.631vw,3.158rem)]"
          >
            Ready to{" "}
            <span className="uppercase">Build Faster, Smarter, Better</span>
          </h2>
          <p className="mt-2 font-[family-name:var(--font-manrope)] text-[clamp(0.9375rem,4vw,1.833rem)] font-medium leading-[1.35] tracking-[0.04em] text-[#CCC6C6] sm:mt-[clamp(0.25rem,0.14vw,0.167rem)] sm:text-[clamp(1rem,1.528vw,1.833rem)] sm:leading-[clamp(1.25rem,1.183vw,1.42rem)] sm:tracking-[0.089rem]">
            Talk to Mekark&apos;s PEB expert today
          </p>
        </motion.div>

        <motion.div
          className="mx-auto flex w-full max-w-[280px] shrink-0 flex-col gap-3 sm:max-w-[243px] sm:gap-[0.833rem] lg:mx-0"
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.16 }}
        >
          <motion.a
            href="#enquiry"
            className="flex h-[clamp(2.75rem,2.882vw,3.458rem)] items-center justify-center gap-[0.601rem] rounded-full bg-white px-[1.504rem] font-[family-name:var(--font-manrope)] text-[16px] font-bold leading-[1.504rem] text-[#E5091F]"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
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
          </motion.a>

          <motion.a
            href={PHONE_HREF}
            className="flex h-[clamp(2.75rem,2.882vw,3.458rem)] items-center justify-center gap-[0.601rem] rounded-full bg-[#111111] px-[1.504rem] font-[family-name:var(--font-manrope)] text-[16px] font-bold leading-[1.504rem] text-white"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
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
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
