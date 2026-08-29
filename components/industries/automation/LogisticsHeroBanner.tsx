"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function LogisticsHeroBanner() {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden lg:min-h-[720px] xl:min-h-[923px]">
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
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(105.99deg, rgb(6, 6, 6) 8.58%, rgba(6, 6, 6, 0.8) 44.21%, rgba(6, 6, 6, 0) 76.38%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 flex min-h-[600px] items-center px-6 py-16 sm:px-10 lg:min-h-[720px] lg:px-16 xl:min-h-[923px] xl:px-[100px]">
        <div className="flex max-w-[1070px] flex-col gap-6">
          <motion.h1
            className="font-[family-name:var(--font-manrope)] text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight text-white"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <span className="whitespace-nowrap">
              Leading Automation Manufacturing Facility
            </span>
            <br />
            Construction Company in South India
          </motion.h1>

          <motion.div
            className="self-start max-w-[820px] border-l-[10px] border-[#c4161c] bg-white px-4 py-3 sm:px-5 sm:py-4"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: easeOut }}
          >
            <p className="break-words font-[family-name:var(--font-manrope)] text-[clamp(1.25rem,2.5vw,36px)] font-bold leading-normal text-[#c4161c]">
              Smart Factories, Robotics Plants & Industry 4.0-Ready Infrastructure by Mekark
            </p>
          </motion.div>

          <motion.p
            className="font-[family-name:var(--font-manrope)] text-[clamp(1rem,1.5vw,1.5rem)] leading-[1.4] text-[#f3f3f3]"
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
            className="inline-flex w-fit items-center gap-3 rounded-[10.667px] bg-[#c4161c] px-10 py-5 text-lg font-semibold text-white shadow-[0_10.667px_21.333px_rgba(196,22,28,0.3)] transition-colors hover:bg-[#a81218]"
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
