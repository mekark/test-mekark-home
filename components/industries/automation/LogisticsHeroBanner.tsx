"use client";

import Image from "next/image";
import { useServiceEnquiry } from "@/components/services/ServiceEnquiryProvider";
import styles from "./hero/index.module.css";

export default function LogisticsHeroBanner() {
  const { openEnquiry } = useServiceEnquiry();

  return (
    <div className={styles.automationHeroBanner}>
      <Image
        className={styles.heroBackgroundIcon}
        src="/images/industries/automation/hero-background.webp"
        width={1920}
        height={900}
        sizes="100vw"
        alt="Automation manufacturing facility with robotic assembly line"
        priority
      />
      <Image
        className={styles.mobileHeroImage}
        src="/images/mobile/automation-mv.png"
        width={941}
        height={1672}
        sizes="100vw"
        alt="Automation manufacturing facility with robotic assembly line"
        priority
      />
      <div className={styles.divabsolute} />
      <div className={styles.div}>
        <h1 className={styles.leadingTitle}>
          Leading Automation Manufacturing Facility
          <br />
          Construction Company in South India
        </h1>
        <div className={styles.highlightWrapper}>
          <h2 className={styles.highlight}>
            Smart Factories, Robotics Plants &amp; Industry 4.0-Ready
            Infrastructure by Mekark
          </h2>
        </div>
        <div className={styles.descriptionWrapper}>
          <div className={styles.description}>
            Mekark builds turnkey automation and robotics manufacturing
            plants, control panel assembly units, and Industry 4.0-ready
            smart factories across Tamil Nadu, Karnataka, Andhra Pradesh,
            Telangana, and Kerala. Engineered for precision, uptime, and
            future scalability.
          </div>
        </div>
        <button type="button" onClick={openEnquiry} className={styles.cta}>
          <div className={styles.ctaText}>Get a Free Quote</div>
          <div className={styles.ctaIcon}>
            <Image
              src="/images/industries/automation/arrow-right.svg"
              alt=""
              fill
              className={styles.ctaIconImg}
              sizes="20px"
              aria-hidden="true"
            />
            <Image
              className={styles.mobileArrowIcon}
              src="/images/mobile/component-4.png"
              width={24}
              height={24}
              alt=""
              aria-hidden="true"
            />
          </div>
        </button>
      </div>
    </div>
  );
}
