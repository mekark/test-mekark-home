"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[560px] w-full overflow-hidden md:min-h-[720px] lg:h-[900px]">
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <div className="absolute -top-[0.01%] -left-[0.01%] h-full w-[117.22%]">
          <Image
            src="/images/industries/electronics/hero/hero-background.png"
            alt="Electronics manufacturing facility with technician assembling circuit boards"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </motion.div>

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(106deg, rgb(6, 6, 6) 8.58%, rgba(6, 6, 6, 0.8) 44.21%, rgba(6, 6, 6, 0) 76.38%)",
        }}
      />

      <div className="relative z-10 flex min-h-[560px] items-center px-6 py-16 md:min-h-[720px] lg:absolute lg:inset-0 lg:min-h-0 lg:px-0 lg:py-0">
        <motion.div
          className="flex w-full max-w-[1258px] flex-col items-start gap-6 lg:absolute lg:top-1/2 lg:left-[calc(37.5%-10px)] lg:-translate-x-1/2 lg:-translate-y-1/2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex w-full flex-col items-start gap-4 lg:gap-[18px]"
            variants={itemVariants}
          >
            <h1 className="w-full font-manrope text-[28px] font-bold leading-tight text-white sm:text-[36px] lg:w-[1258px] lg:text-[60px] lg:leading-[normal]">
              Leading Electronics Manufacturing Facility Construction Company
              in South India
            </h1>

            <div className="flex h-auto min-h-[72px] w-full max-w-[1090px] items-center border-l-[10px] border-[#c4161c] bg-white px-4 py-3 sm:min-h-[88px] sm:pl-5 lg:h-[133px]">
              <p className="font-manrope text-lg font-bold leading-snug text-[#c4161c] sm:text-[22px] sm:leading-[normal] md:text-[30px] lg:text-[46px]">
                Clean Rooms, ESD-Safe Plants &amp; Precision Infrastructure by
                Mekark
              </p>
            </div>

            <p className="w-full font-manrope text-base font-normal leading-relaxed text-[#f3f3f3] sm:text-lg lg:w-[1258px] lg:text-[24px] lg:leading-[33.333px]">
              Mekark builds turnkey clean rooms, ESD-safe assembly plants, and
              precision electronics manufacturing facilities across Tamil Nadu,
              Karnataka, Andhra Pradesh, Telangana, and Kerala. Engineered for
              precision. Delivered on time.
            </p>
          </motion.div>

          <motion.a
            href="/#enquiry"
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-[13.333px] rounded-[10.667px] bg-[#c4161c] px-8 py-4 shadow-[0_10.667px_21.333px_rgba(196,22,28,0.3)] transition-colors hover:bg-[#a81217] lg:px-12 lg:py-6"
          >
            <span className="font-[family-name:var(--font-inter)] text-lg font-semibold leading-8 text-white lg:text-[21.333px]">
              Get a Free Consultation
            </span>
            <span className="relative size-5 shrink-0 overflow-hidden lg:size-[21.333px]">
              <Image
                src="/images/industries/electronics/hero/cta-arrow.svg"
                alt=""
                fill
                className="object-contain"
                aria-hidden
              />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
