"use client";

import Image from "next/image";
import { useServiceEnquiry } from "@/components/services/ServiceEnquiryProvider";
import styles from "./index.module.css";

const PharmaceuticalHeroBanner = () => {
  const { openEnquiry } = useServiceEnquiry();

  return (
    <div className={styles.logisticsHeroBanner}>
      <div className={styles.heroBgWrapper}>
        {/* Native img so transform/position CSS applies reliably */}
        <img
          className={styles.warehouseWithManRedHatIsIcon}
          src="/images/industries/pharma/hero/hero.webp"
          alt="Pharmaceutical manufacturing facility"
          fetchPriority="high"
        />
      </div>
      <div className={styles.divabsolute} />
      <div className={styles.div}>
        <div className={styles.heroDesktop}>
          <h1 className={styles.leadingPreEngineeredWarehou}>
            <span className={styles.titleLine}>
              Leading Pharmaceutical Manufacturing
            </span>
            <span className={styles.titleLine}>
              Facility Construction Company in South India
            </span>
          </h1>
          <div className={styles.logisticsIndustrialStructuWrapper}>
            <h2 className={styles.logisticsIndustrial}>
              <span className={styles.subLine}>
                GMP Cleanrooms, Sterile Plants &amp; Cold Chain
              </span>
              <span className={styles.subLine}>Infrastructure by Mekark</span>
            </h2>
          </div>
          <div className={styles.mekarkIsATrustedPreEngineWrapper}>
            <div className={styles.mekarkIsA}>
              <span className={styles.descLine}>
                Mekark builds turnkey pharmaceutical manufacturing plants,
                cleanroom facilities, API
              </span>
              <span className={styles.descLine}>
                production units, and cold storage infrastructure across Tamil
                Nadu, Karnataka, Andhra
              </span>
              <span className={styles.descLine}>
                Pradesh, Telangana, and Kerala. Engineered for regulatory
                compliance and delivered on time.
              </span>
            </div>
          </div>
        </div>

        <div className={styles.heroMobile}>
          <h1 className={styles.leadingPreEngineeredWarehou}>
            <span className={styles.titleLine}>Leading Pharmaceutical</span>
            <span className={styles.titleLine}>Manufacturing Facility</span>
            <span className={styles.titleLine}>Construction Company</span>
            <span className={styles.titleLine}>in South India</span>
          </h1>
          <div className={styles.logisticsIndustrialStructuWrapper}>
            <h2 className={styles.logisticsIndustrial}>
              GMP Cleanrooms, Sterile Plants &amp; Cold Chain Infrastructure by
              Mekark
            </h2>
          </div>
          <div className={styles.mekarkIsATrustedPreEngineWrapper}>
            <div className={styles.mekarkIsA}>
              Mekark builds turnkey pharmaceutical manufacturing plants, cleanroom
              facilities, API production units, and cold storage infrastructure
              across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala.
              Engineered for regulatory compliance and delivered on time.
            </div>
          </div>
        </div>

        <button type="button" onClick={openEnquiry} className={styles.component5}>
          <div className={styles.text}>Get a Free Quote</div>
          <div className={styles.component4}>
            <Image
              className={styles.vectorIcon}
              src="/images/industries/pharma/hero/arrow-icon.svg"
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
};

export default PharmaceuticalHeroBanner;
