import Image from "next/image";
import styles from "./index.module.css";

const DataCenterHeroBanner = () => {
  return (
    <div className={styles.logisticsHeroBanner}>
      <div className={styles.heroBgWrapper}>
        {/* Native img so transform/position CSS applies reliably */}
        <img
          className={styles.warehouseWithManRedHatIsIcon}
          src="/images/industries/data-center/hero/hero.webp"
          alt="Data centre server hall"
          fetchPriority="high"
        />
      </div>
      <div className={styles.divabsolute} />
      <div className={styles.div}>
        <h1 className={styles.leadingPreEngineeredWarehou}>
          <span className={styles.titleLine}>
            Leading Data Centre Construction
          </span>
          <span className={styles.titleLine}>
            Company in South India
          </span>
        </h1>
        <div className={styles.logisticsIndustrialStructuWrapper}>
          <h2 className={styles.logisticsIndustrial}>
            <span className={styles.subLine}>
              Tier III/IV Compliant Facilities, Precision Cooling &amp; MEP
            </span>
            <span className={styles.subLine}>Infrastructure by Mekark</span>
          </h2>
        </div>
        <div className={styles.mekarkIsATrustedPreEngineWrapper}>
          <div className={styles.mekarkIsA}>
            <span className={styles.descLine}>
              Mekark builds turnkey hyperscale, colocation, and modular data
              centres across Tamil Nadu,
            </span>
            <span className={styles.descLine}>
              Karnataka, Andhra Pradesh, Telangana, and Kerala. Engineered for
              uptime,
            </span>
            <span className={styles.descLine}>
              redundancy, and rapid go-live.
            </span>
          </div>
        </div>
        <a href="/#enquiry" className={styles.component5}>
          <div className={styles.text}>Get a Free Quote</div>
          <div className={styles.component4}>
            <Image
              className={styles.vectorIcon}
              src="/images/industries/data-center/hero/arrow-icon.svg"
              width={22}
              height={22}
              sizes="100vw"
              alt="Arrow icon"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default DataCenterHeroBanner;
