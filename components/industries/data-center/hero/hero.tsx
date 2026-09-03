import Image from "next/image";
import styles from "./index.module.css";

const DataCenterHeroBanner = () => {
  return (
    <div className={styles.logisticsHeroBanner}>
      <div className={styles.heroBgWrapper}>
        {/* Native img so transform/position CSS applies reliably */}
        <img
          className={styles.warehouseWithManRedHatIsIcon}
          src="/images/industries/data-center/hero/hero.png"
          alt="Data centre server hall"
          fetchPriority="high"
        />
      </div>
      <div className={styles.divabsolute} />
      <div className={styles.div}>
        <b className={styles.leadingPreEngineeredWarehou}>
          <span className={styles.titleLine}>
            Leading Data Centre Construction
          </span>
          <span className={styles.titleLine}>
            Company in South India
          </span>
        </b>
        <div className={styles.logisticsIndustrialStructuWrapper}>
          <b className={styles.logisticsIndustrial}>
            <span className={styles.subLine}>
              Tier III/IV Compliant Facilities, Precision Cooling &amp; MEP
            </span>
            <span className={styles.subLine}>Infrastructure by Mekark</span>
          </b>
        </div>
        <div className={styles.mekarkIsATrustedPreEngineWrapper}>
          <div className={styles.mekarkIsA}>
            Mekark builds turnkey hyperscale, colocation, and modular data
            centres across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana,
            and Kerala. Engineered for uptime, redundancy, and rapid go-live.
          </div>
        </div>
        <a href="/#enquiry" className={styles.component5}>
          <div className={styles.text}>Get a Free Consultation</div>
          <div className={styles.component4}>
            <Image
              className={styles.vectorIcon}
              src="/images/industries/data-center/hero/arrow-icon.svg"
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
};

export default DataCenterHeroBanner;
