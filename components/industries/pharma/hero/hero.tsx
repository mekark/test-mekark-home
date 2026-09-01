import Image from "next/image";
import styles from "./index.module.css";

const PharmaceuticalHeroBanner = () => {
  return (
    <div className={styles.logisticsHeroBanner}>
      <div className={styles.heroBgWrapper}>
        {/* Native img so transform/position CSS applies reliably */}
        <img
          className={styles.warehouseWithManRedHatIsIcon}
          src="/images/industries/pharma/hero/hero.png"
          alt="Pharmaceutical manufacturing facility"
          fetchPriority="high"
        />
      </div>
      <div className={styles.divabsolute} />
      <div className={styles.div}>
        <b className={styles.leadingPreEngineeredWarehou}>
          <span className={styles.titleLine}>
            Leading Pharmaceutical Manufacturing
          </span>
          <span className={styles.titleLine}>
            Facility Construction Company in South India
          </span>
        </b>
        <div className={styles.logisticsIndustrialStructuWrapper}>
          <b className={styles.logisticsIndustrial}>
            <span className={styles.subLine}>
              GMP Cleanrooms, Sterile Plants &amp; Cold Chain
            </span>
            <span className={styles.subLine}>Infrastructure by Mekark</span>
          </b>
        </div>
        <div className={styles.mekarkIsATrustedPreEngineWrapper}>
          <div className={styles.mekarkIsA}>
            Mekark builds turnkey pharmaceutical manufacturing plants,
            cleanroom facilities, API production units, and cold storage
            infrastructure across Tamil Nadu, Karnataka, Andhra Pradesh,
            Telangana, and Kerala. Engineered for regulatory compliance and
            delivered on time.
          </div>
        </div>
        <a href="/#enquiry" className={styles.component5}>
          <div className={styles.text}>Get a Free Consultation</div>
          <div className={styles.component4}>
            <Image
              className={styles.vectorIcon}
              src="/images/industries/pharma/hero/arrow-icon.svg"
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

export default PharmaceuticalHeroBanner;
