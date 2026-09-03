"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeSlideUp } from "./motion";
import macStyles from "./quoteRequestMac.module.css";

export function QuoteRequestBanner() {
  return (
    <section
      className="relative w-full overflow-hidden"
      aria-label="Request a quote for FMCG facility construction"
    >
      <motion.div
        className={`relative min-h-[388px] w-full ${macStyles.banner}`}
        custom={0}
        variants={fadeSlideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <Image
            src="/images/industries/fmcg/fmcg-facility-cta/quote-request-banner-bg.png"
            alt=""
            width={2400}
            height={1350}
            className="absolute left-[0.01%] top-[-105.28%] h-[277.68%] w-full max-w-none object-cover"
            sizes="100vw"
            priority={false}
          />
        </div>

        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[#020202] to-[rgba(2,2,2,0.52)]"
        />

        <div className={`relative z-10 mx-auto flex min-h-[388px] w-full max-w-[1730px] flex-col items-center justify-center gap-10 px-6 text-center sm:px-10 lg:px-12 ${macStyles.inner}`}>
          <motion.div
            className="flex w-full flex-col items-center gap-4"
            custom={0.1}
            variants={fadeSlideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className={`max-w-[1477px] text-[28px] font-bold leading-[1.06] tracking-[-1px] text-white sm:text-[40px] lg:text-[50px] lg:leading-[53px] ${macStyles.title}`}>
              Ready to Start Your FMCG Manufacturing Facility Construction?
            </h2>
            <p className={`max-w-[1228px] text-base leading-[25px] text-[#e6e6e6] sm:text-lg ${macStyles.desc}`}>
              Let us know your process requirements: hygiene classification,
              production size, location, and timeline. As a leading FMCG
              manufacturing facility construction company and trusted warehousing
              builder in South India, Mekark will have a preliminary design and
              estimate ready within 24 hours.
            </p>
          </motion.div>

          <motion.a
            href="/#enquiry"
            className={`inline-flex items-center justify-center gap-3 rounded-[30px] bg-[#ed2024] px-10 py-4 sm:px-[90px] sm:py-4 ${macStyles.cta}`}
            custom={0.2}
            variants={fadeSlideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="whitespace-nowrap text-lg font-bold text-white sm:text-[20px] sm:leading-[31px]">
              Get a Free Quote
            </span>
            <span className="relative size-[25px] shrink-0 overflow-hidden">
              <Image
                src="/images/industries/fmcg/fmcg-facility-cta/quote-request-arrow.svg"
                alt=""
                width={25}
                height={25}
                className="size-full"
              />
            </span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
