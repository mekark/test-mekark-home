"use client";

import Image from "next/image";
import { useServiceEnquiry } from "@/components/services/ServiceEnquiryProvider";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const { openEnquiry } = useServiceEnquiry();

  return (
    <div className={styles.logisticsHeroBanner}>
      <div className={styles.heroBgWrapper}>
        <div className={styles.heroBgInner}>
          <Image
            className={styles.warehouseWithManRedHatIsIcon}
            src="/images/industries/electronics/hero/hero-background.webp"
            width={1920}
            height={900}
            sizes="100vw"
            alt="Electronics manufacturing facility with technician assembling circuit boards"
            priority
          />
        </div>
      </div>
      <div className={styles.divabsolute} />
      <div className={styles.div}>
        <div className={styles.heroDesktop}>
          <h1 className={styles.leadingPreEngineeredWarehou}>
            Leading Electronics Manufacturing Facility Construction Company in
            South India
          </h1>
          <div className={styles.logisticsIndustrialStructuWrapper}>
            <h2 className={styles.logisticsIndustrial}>
              <span className={styles.subLine}>
                Clean Rooms, ESD-Safe Plants &amp; Precision
              </span>
              <span className={styles.subLine}>Infrastructure by Mekark</span>
            </h2>
          </div>
          <div className={styles.mekarkIsATrustedPreEngineWrapper}>
            <div className={styles.mekarkIsA}>
              <span className={styles.descLine}>
                Mekark builds turnkey clean rooms, ESD-safe assembly plants, and
                precision
              </span>
              <span className={styles.descLine}>
                electronics manufacturing facilities across Tamil Nadu, Karnataka,
                Andhra Pradesh, Telangana, and Kerala.
              </span>
              <span className={styles.descLine}>
                Engineered for precision. Delivered on time.
              </span>
            </div>
          </div>
        </div>

        <div className={styles.heroMobile}>
          <h1 className={styles.leadingPreEngineeredWarehou}>
            <span className={styles.titleLine}>Leading Electronics </span>
            <span className={styles.titleLine}>Manufacturing Facility </span>
            <span className={styles.titleLine}>Construction Company </span>
            <span className={styles.titleLine}>in South India</span>
          </h1>
          <div className={styles.logisticsIndustrialStructuWrapper}>
            <h2 className={styles.logisticsIndustrial}>
              Electronics Facility Structures by Mekark
            </h2>
          </div>
          <div className={styles.mekarkIsATrustedPreEngineWrapper}>
            <div className={styles.mekarkIsA}>
              Mekark builds turnkey clean rooms, ESD-safe assembly plants, and
              precision electronics manufacturing facilities across Tamil Nadu,
              Karnataka, Andhra Pradesh, Telangana, and Kerala. Engineered for
              precision. Delivered on time.
            </div>
          </div>
        </div>

        <button type="button" onClick={openEnquiry} className={styles.component5}>
          <div className={styles.text}>Get a Free Quote</div>
          <div className={styles.component4}>
            <Image
              className={styles.vectorIcon}
              src="/images/industries/electronics/hero/cta-arrow.svg"
              width={22}
              height={22}
              sizes="100vw"
              alt=""
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
