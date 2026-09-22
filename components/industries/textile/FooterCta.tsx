"use client";

import Image from "next/image";
import { useServiceEnquiry } from "@/components/services/ServiceEnquiryProvider";
import styles from "./FooterCta.module.css";

export default function FooterCta() {
  const { openEnquiry } = useServiceEnquiry();

  return (
    <div className={styles.frameParent}>
      <Image
        className={styles.backgroundImage}
        src="/images/footer/footer-bg.webp"
        fill
        sizes="100vw"
        alt="Textile factory floor"
        priority
      />
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.readyToStartYourLogisticsWrapper}>
              <b className={`${styles.readyToStart} ${styles.footerDesktop}`}>
                Ready to Build Your Textile Factory?
              </b>
              <b className={`${styles.readyToStart} ${styles.footerMobile}`}>
                <span className={styles.footerTitleLine}>Ready to Build Your </span>
                <span className={styles.footerTitleLine}>Textile Factory?</span>
              </b>
            </div>
            <div className={styles.tellUsYourRequirementsSpaWrapper}>
              <div className={`${styles.tellUsYour} ${styles.footerDesktop}`}>
                <span className={styles.descLine}>
                  Only a limited number of new textile construction projects are
                  onboarded each quarter. Tell
                </span>
                <span className={styles.descLine}>
                  us your requirements and our specialist will prepare a project
                  estimate.
                </span>
              </div>
              <div className={`${styles.tellUsYour} ${styles.footerMobile}`}>
                Only a limited number of new textile construction projects are
                onboarded each quarter. Tell us your requirements and our
                specialist will prepare a project estimate.
              </div>
            </div>
          </div>
          <button type="button" onClick={openEnquiry} className={styles.cta}>
            <b className={styles.requestAQuote}>
              Request Free Project Estimate
            </b>
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
}
