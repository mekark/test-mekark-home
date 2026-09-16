import Image from "next/image";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
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
        <b className={styles.leadingPreEngineeredWarehou}>
          Leading Electronics Manufacturing Facility Construction Company in
          South India
        </b>
        <div className={styles.logisticsIndustrialStructuWrapper}>
          <b className={styles.logisticsIndustrial}>
            <span className={styles.subLine}>
              Clean Rooms, ESD-Safe Plants &amp; Precision
            </span>
            <span className={styles.subLine}>Infrastructure by Mekark</span>
          </b>
        </div>
        <div className={styles.mekarkIsATrustedPreEngineWrapper}>
          <div className={styles.mekarkIsA}>
            Mekark builds turnkey clean rooms, ESD-safe assembly plants, and
            precision electronics manufacturing facilities across Tamil Nadu,
            Karnataka, Andhra Pradesh, Telangana, and Kerala. Engineered for
            precision. Delivered on time.
          </div>
        </div>
        <a href="/#enquiry" className={styles.component5}>
          <div className={styles.text}>Get a Free Quote</div>
          <div className={styles.component4}>
            <Image
              className={styles.vectorIcon}
              src="/images/industries/electronics/hero/cta-arrow.svg"
              width={22}
              height={22}
              sizes="100vw"
              alt=""
            />
          </div>
        </a>
      </div>
    </div>
  );
}
