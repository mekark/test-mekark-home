"use client";

import Image from "next/image";
import { useServiceEnquiry } from "@/components/services/ServiceEnquiryProvider";
import styles from "./AutomationQuoteCtaSection.module.css";

export default function AutomationQuoteCtaSection() {
  const { openEnquiry } = useServiceEnquiry();

  return (
    <section className={styles.section} aria-labelledby="automation-quote-title">
      <Image
        className={styles.backgroundImage}
        src="/images/industries/automation/automation-quote-cta/factory-background.webp"
        alt="Automation manufacturing facility by Mekark"
        fill
        sizes="100vw"
        aria-hidden
      />
      <div className={styles.overlay} aria-hidden />

      <div className={styles.content}>
        <div className={styles.copy}>
          <h2 id="automation-quote-title" className={styles.heading}>
            <span className={styles.headingDesktop}>
              Ready to Start Your Automation Manufacturing Facility Construction?
            </span>
            <span className={styles.headingMobile}>
              <span className={styles.headingLine}>Ready to Start Your</span>
              <span className={styles.headingLine}>Automation Manufacturing</span>
              <span className={styles.headingLine}>Facility Construction?</span>
            </span>
          </h2>
          <p className={styles.description}>
            Tell us your process requirements: precision tolerances, production
            size, location, and timeline. As a leading automation manufacturing
            facility construction company and trusted smart factory builder in
            South India, Mekark will have a preliminary design and estimate
            ready within 24 hours.
          </p>
        </div>

        <button type="button" onClick={openEnquiry} className={styles.button}>
          <span className={styles.buttonText}>Get a Free Quote</span>
          <Image
            className={styles.buttonIcon}
            src="/images/industries/automation/automation-quote-cta/arrow-right.svg"
            alt=""
            width={25}
            height={25}
            aria-hidden
          />
        </button>
      </div>
    </section>
  );
}
