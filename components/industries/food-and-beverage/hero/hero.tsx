import Image from "next/image";
import styles from "./index.module.css";

const FoodBeverageHeroBanner = () => {
  return (
    <div className={styles.logisticsHeroBanner}>
      <div className={styles.heroBgWrapper}>
        <Image
          className={styles.warehouseWithManRedHatIsIcon}
          src="/images/industries/food-and-beverage/hero/094b340e4341865b579a5b936db8b1f86325cefd.webp"
          width={1920}
          height={900}
          sizes="100vw"
          alt="Food and beverage manufacturing facility"
          priority
        />
      </div>
      <div className={styles.divabsolute} />
      <div className={styles.div}>
        <h1 className={styles.leadingPreEngineeredWarehou}>
          <span className={styles.titleLine}>
            Leading Food &amp; Beverage Manufacturing
          </span>
          <span className={styles.titleLine}>
            Facility Construction Company in South India
          </span>
        </h1>
        <div className={styles.logisticsIndustrialStructuWrapper}>
          <h2 className={styles.logisticsIndustrial}>
            <span className={styles.subLine}>
              HACCP-Compliant Plants, Cold Storage &amp;
            </span>
            <span className={styles.subLine}>
              Hygienic Infrastructure by Mekark
            </span>
          </h2>
        </div>
        <div className={styles.mekarkIsATrustedPreEngineWrapper}>
          <div className={styles.mekarkIsA}>
            <span className={styles.descLine}>
              Mekark builds turnkey food processing plants, beverage bottling
              facilities,
            </span>
            <span className={styles.descLine}>
              dairy units, and cold storage infrastructure across Tamil Nadu,
              Karnataka, Andhra Pradesh,
            </span>
            <span className={styles.descLine}>
              Telangana, and Kerala. Engineered for hygiene and delivered on
              time.
            </span>
          </div>
        </div>
        <a href="/#enquiry" className={styles.component5}>
          <div className={styles.text}>Get a Free Quote</div>
          <div className={styles.component4}>
            <Image
              className={styles.vectorIcon}
              src="/images/industries/food-and-beverage/hero/arrow-icon.svg"
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

export default FoodBeverageHeroBanner;
