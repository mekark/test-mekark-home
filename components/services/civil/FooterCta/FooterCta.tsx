"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PHONE_HREF } from "@/lib/contact";

export default function FooterCta() {
  return (
    <section
      id="contact"
      className="relative h-auto w-full overflow-hidden px-5 py-10 text-left font-manrope text-[45.33px] text-white sm:px-8 sm:py-12 lg:h-[206.7px] lg:px-0 lg:py-0"
      style={{
        backgroundImage: "linear-gradient(96.33deg, #8B0C11, #ED1D23)",
      }}
      aria-label="Ready to start your civil construction project"
    >
      {/* Mobile / tablet */}
      <div className="relative mx-auto flex w-full max-w-[1707px] flex-col items-start justify-center gap-6 lg:hidden">
        <div className="flex items-start gap-4 sm:gap-5">
          <div
            className="relative flex size-[72px] shrink-0 items-center justify-center"
            aria-hidden
          >
            <div className="absolute inset-0 rounded-full bg-white shadow-[0px_0px_12.13px_9.33px_rgba(0,0,0,0.1)]" />
            <div className="relative size-[30px] overflow-hidden">
              <Image
                src="/images/services/civil/footer/phone-icon.svg"
                alt=""
                width={30}
                height={30}
                className="size-full object-contain"
              />
            </div>
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-1 sm:gap-2">
            <h2 className="font-extrabold text-[22px] leading-[1.15] text-white sm:text-[30px] sm:leading-[36px]">
              Ready to Start Your Civil Construction Project?
            </h2>
            <p className="font-medium tracking-[1.42px] text-[#CCC6C6] text-[16px] leading-[22px] sm:text-[22px]">
              Talk to Mekark&apos;s civil expert today
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
              src="/images/services/civil/footer/arrow.svg"
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
              src="/images/services/civil/footer/phone-white.svg"
              alt=""
              width={19}
              height={19}
              className="size-[18.7px]"
            />
          </a>
        </div>
      </div>

      {/* Desktop — Figma 206.7px absolute layout */}
      <div className="relative mx-auto hidden h-full w-full lg:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="absolute left-[106.67px] top-1/2 size-[92px] -translate-y-1/2"
          aria-hidden
        >
          <div className="absolute inset-0 rounded-full bg-white shadow-[0px_0px_12.13px_9.33px_rgba(0,0,0,0.1)]" />
          <div className="absolute left-[27.47px] top-1/2 size-[38.4px] -translate-y-1/2 overflow-hidden">
            <Image
              src="/images/services/civil/footer/phone-icon.svg"
              alt=""
              width={38}
              height={38}
              className="size-full object-contain"
            />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="absolute left-[calc(50%-711px)] top-[49.53px] flex h-16 w-[1050px] items-center font-extrabold text-[45.33px] leading-[50.52px] text-white"
        >
          Ready to Start Your Civil Construction Project?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="absolute left-[calc(50%-710.67px)] top-[116.2px] flex h-[39.7px] w-[519.7px] items-center text-[29.33px] font-medium leading-[22.72px] tracking-[1.42px] text-[#CCC6C6]"
        >
          Talk to Mekark&apos;s civil expert today
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="absolute left-[1420px] top-1/2 flex w-[243.2px] -translate-y-1/2 flex-col items-start gap-[13.3px] text-base text-[#E5091F]"
        >
          <motion.a
            href="/#enquiry"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="box-border flex h-[55.3px] w-full items-center justify-center gap-[9.6px] rounded-full bg-white px-[24.1px] py-[14.4px] font-bold leading-[24.06px] text-[#E5091F]"
          >
            Get a Free Quote
            <span className="relative size-[18.8px] shrink-0 overflow-hidden">
              <Image
                src="/images/services/civil/footer/arrow.svg"
                alt=""
                width={19}
                height={19}
                className="size-full object-contain"
              />
            </span>
          </motion.a>

          <motion.a
            href={PHONE_HREF}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="box-border flex h-[55.3px] w-full items-center justify-center gap-[9.6px] rounded-full bg-[#111] px-[24.1px] py-[14.4px] font-bold leading-[24.06px] text-white"
          >
            Call us
            <span className="relative size-[18.7px] shrink-0 overflow-hidden">
              <Image
                src="/images/services/civil/footer/phone-white.svg"
                alt=""
                width={19}
                height={19}
                className="size-full object-contain"
              />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
