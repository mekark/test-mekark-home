"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function LogisticsHeroBanner() {
  return (
    <section className="relative min-h-[640px] w-full overflow-hidden max-md:min-h-svh lg:min-h-[720px] xl:min-h-[923px]">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "easeOut" }}
      >
        <Image
          src="/images/industries/automation/hero-background.png"
          alt="Automation manufacturing facility with robotic assembly line"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      <div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(6, 6, 6, 0.88) 0%, rgba(6, 6, 6, 0.72) 55%, rgba(6, 6, 6, 0.5) 100%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage:
            "linear-gradient(105.99deg, rgb(6, 6, 6) 8.58%, rgba(6, 6, 6, 0.8) 44.21%, rgba(6, 6, 6, 0) 76.38%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[640px] w-full max-w-[1920px] items-center px-5 py-16 max-md:min-h-svh sm:px-10 lg:min-h-[720px] lg:px-16 xl:min-h-[923px] xl:px-[100px]">
        <div className="flex w-full max-w-[1070px] flex-col gap-4 sm:gap-6">
          <motion.h1
            className="font-[family-name:var(--font-manrope)] text-[26px] font-bold leading-[1.2] text-white sm:text-[36px] sm:leading-tight lg:text-[56px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            Leading Automation Manufacturing Facility Construction Company in
            South India
          </motion.h1>

          <motion.div
            className="max-w-[820px] border-l-4 border-[#c4161c] bg-white px-3 py-2.5 sm:border-l-[6px] sm:px-4 sm:py-3 md:px-5 md:py-4 lg:border-l-[10px]"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: easeOut }}
          >
            <p className="font-[family-name:var(--font-manrope)] text-[15px] font-bold leading-[1.35] text-[#c4161c] sm:text-[22px] sm:leading-normal md:text-[30px] lg:text-[36px]">
              Smart Factories, Robotics Plants & Industry 4.0-Ready
              Infrastructure by Mekark
            </p>
          </motion.div>

          <motion.p
            className="font-[family-name:var(--font-manrope)] text-sm font-normal leading-relaxed text-[#f3f3f3] sm:text-base md:text-lg lg:text-2xl lg:leading-[1.4]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: easeOut }}
          >
            Mekark builds turnkey automation and robotics manufacturing plants,
            control panel assembly units, and Industry 4.0-ready smart factories
            across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala.
            Engineered for precision, uptime, and future scalability.
          </motion.p>

          <motion.a
            href="/#enquiry"
            className="inline-flex w-full items-center justify-center gap-3 rounded-[10.667px] bg-[#c4161c] px-6 py-4 text-base font-semibold text-white shadow-[0_10.667px_21.333px_rgba(196,22,28,0.3)] transition-colors hover:bg-[#a81218] sm:w-fit sm:px-10 sm:py-5 sm:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: easeOut }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Get a Free Consultation
            <span className="relative size-[21px] shrink-0 overflow-clip">
              <Image
                src="/images/industries/automation/arrow-right.svg"
                alt=""
                fill
                className="object-contain"
                aria-hidden
              />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
