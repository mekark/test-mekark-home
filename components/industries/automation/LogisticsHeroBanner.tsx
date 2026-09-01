"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  industryHeroMobileBgWrapperClass,
  industryHeroMobileButtonClass,
  industryHeroMobileButtonIconClass,
  industryHeroMobileButtonTextClass,
  industryHeroMobileContentPadClass,
  industryHeroMobileContentWrapperClass,
  industryHeroMobileDescriptionClass,
  industryHeroMobileGradientStyle,
  industryHeroMobileHighlightClass,
  industryHeroMobileImageClass,
  industryHeroMobileSectionClass,
  industryHeroMobileStackClass,
  industryHeroMobileTitleClass,
} from "@/components/industries/shared/industryHeroMobile";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function LogisticsHeroBanner() {
  return (
    <section
      className={`relative min-h-[640px] w-full overflow-hidden lg:min-h-[720px] xl:min-h-[923px] ${industryHeroMobileSectionClass}`}
    >
      <motion.div
        className={`absolute inset-0 ${industryHeroMobileBgWrapperClass}`}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "easeOut" }}
      >
        <Image
          src="/images/industries/automation/hero-background.png"
          alt="Automation manufacturing facility with robotic assembly line"
          fill
          priority
          className={`object-cover object-center ${industryHeroMobileImageClass}`}
          sizes="100vw"
        />
      </motion.div>

      <div
        className="absolute inset-0 md:hidden"
        style={industryHeroMobileGradientStyle}
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

      <div
        className={`relative z-10 mx-auto flex min-h-[640px] w-full max-w-[1920px] items-start px-5 py-16 sm:px-10 lg:min-h-[720px] lg:items-center lg:px-16 xl:min-h-[923px] xl:px-[100px] ${industryHeroMobileContentPadClass} ${industryHeroMobileContentWrapperClass}`}
      >
        <div
          className={`flex w-full max-w-[1070px] flex-col gap-4 sm:gap-6 ${industryHeroMobileStackClass}`}
        >
          <motion.h1
            className={`max-w-[342px] font-[family-name:var(--font-manrope)] text-[25px] font-bold leading-[100%] text-white sm:max-w-none sm:text-[36px] sm:leading-tight lg:text-[56px] ${industryHeroMobileTitleClass}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            Leading Automation Manufacturing Facility Construction Company in
            South India
          </motion.h1>

          <motion.div
            className={`max-w-[820px] border-l-4 border-[#c4161c] bg-white px-3 py-2.5 sm:border-l-[6px] sm:px-4 sm:py-3 md:px-5 md:py-4 lg:border-l-[10px] ${industryHeroMobileHighlightClass}`}
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
            className={`font-[family-name:var(--font-manrope)] text-[#f3f3f3] sm:text-base sm:leading-relaxed md:text-lg lg:text-2xl lg:leading-[1.4] ${industryHeroMobileDescriptionClass}`}
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
            className={`inline-flex items-center justify-center gap-[7.1px] rounded-[5.65px] bg-[#c4161c] px-5 py-2.5 shadow-[0px_5.652px_22.61px_rgba(196,22,28,0.3)] transition-colors hover:bg-[#a81218] sm:w-fit sm:rounded-[8px] sm:px-10 sm:py-5 ${industryHeroMobileButtonClass}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: easeOut }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className={industryHeroMobileButtonTextClass}>
              Get a Free Consultation
            </span>
            <span
              className={`relative shrink-0 overflow-clip sm:size-[21px] ${industryHeroMobileButtonIconClass}`}
            >
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
