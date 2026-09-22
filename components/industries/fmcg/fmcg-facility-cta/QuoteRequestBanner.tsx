"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useServiceEnquiry } from "@/components/services/ServiceEnquiryProvider";
import { fadeSlideUp } from "./motion";
import macStyles from "./quoteRequestMac.module.css";

export function QuoteRequestBanner() {
  const { openEnquiry } = useServiceEnquiry();

  return (
    <section
      className={macStyles.section}
      aria-label="Request a quote for FMCG facility construction"
    >
      <motion.div
        className={macStyles.banner}
        custom={0}
        variants={fadeSlideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={macStyles.bgWrap}>
          <Image
            src="/images/industries/fmcg/fmcg-facility-cta/quote-request-banner-bg.webp"
            alt="FMCG facility quote request banner background"
            fill
            className={macStyles.bgImage}
            sizes="100vw"
            priority={false}
          />
        </div>

        <div className={macStyles.overlay} aria-hidden />

        <div className={macStyles.inner}>
          <motion.div
            className={macStyles.textBlock}
            custom={0.1}
            variants={fadeSlideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className={`${macStyles.title} ${macStyles.footerDesktop}`}>
              Ready to Start Your FMCG Manufacturing Facility Construction?
            </h2>
            <h2 className={`${macStyles.title} ${macStyles.footerMobile}`}>
              <span className={macStyles.footerTitleLine}>
                Ready to Start Your{" "}
              </span>
              <span className={macStyles.footerTitleLine}>
                FMCG Manufacturing Facility
              </span>
              <span className={macStyles.footerTitleLine}>Construction?</span>
            </h2>
            <p className={macStyles.desc}>
              Let us know your process requirements: hygiene classification,
              production size, location, and timeline. As a leading FMCG
              manufacturing facility construction company and trusted warehousing
              builder in South India, Mekark will have a preliminary design and
              estimate ready within 24 hours.
            </p>
          </motion.div>

          <motion.button
            type="button"
            onClick={openEnquiry}
            className={macStyles.cta}
            custom={0.2}
            variants={fadeSlideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className={macStyles.ctaText}>Get a Free Quote</span>
            <span className={macStyles.ctaIcon}>
              <Image
                src="/images/industries/fmcg/fmcg-facility-cta/quote-request-arrow.svg"
                alt=""
                width={25}
                height={25}
                aria-hidden="true"
              />
            </span>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
