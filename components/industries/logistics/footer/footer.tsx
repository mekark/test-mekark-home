"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { useServiceEnquiry } from "@/components/services/ServiceEnquiryProvider";
import styles from "./index.module.css";

const Footer: NextPage = () => {
  const { openEnquiry } = useServiceEnquiry();

  return (
    <div className={styles.frameParent}>
      <Image
        className={styles.backgroundImage}
        src="/images/industries/logistics/footer/footer-background.webp"
        fill
        sizes="100vw"
        alt="Logistics warehouse facility by Mekark"
      />
      <Image
        className={styles.backgroundImageMobile}
        src="/images/mobile/footer-image.webp"
        fill
        sizes="100vw"
        alt="Aerial view of logistics warehouse facility at sunset"
        priority={false}
      />
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.readyToStartYourLogisticsWrapper}>
              <b className={`${styles.readyToStart} ${styles.footerDesktop}`}>
                Ready to Start Your Logistics Facility Construction?
              </b>
              <b className={`${styles.readyToStart} ${styles.footerMobile}`}>
                <span className={styles.footerTitleLine}>Ready to Start Your </span>
                <span className={styles.footerTitleLine}>Logistics Facility </span>
                <span className={styles.footerTitleLine}>Construction?</span>
              </b>
            </div>
            <div className={styles.tellUsYourRequirementsSpaWrapper}>
              <div className={styles.tellUsYour}>
                Tell us your requirements: span, height, location, and timeline.
                As a leading pre-engineered warehouse manufacturer and trusted
                distribution centre builder in South India, Mekark will have a
                preliminary design and estimate ready within 48 hours.
              </div>
            </div>
          </div>
          <button type="button" onClick={openEnquiry} className={styles.cta}>
            <b className={styles.requestAQuote}>Request a Quote</b>
            <div className={styles.component4} aria-hidden="true">
              <svg
                className={styles.vectorIcon}
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.60156 12.2723H19.9417M13.8056 18.4083L19.9417 12.2723L13.8056 6.13623"
                  stroke="white"
                  strokeWidth="3.06802"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
