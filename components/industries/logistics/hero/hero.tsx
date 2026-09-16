import Image from "next/image";
import styles from "./index.module.css";

export default function LogisticsHero() {
  return (
    <div className={styles.logisticsHeroBanner}>
      <Image
        className={styles.warehouseWithManRedHatIsIcon}
        src="/images/industries/logistics/hero/warehouse-with-man-red-hat.webp"
        width={1920}
        height={900}
        sizes="100vw"
        alt="Warehouse worker in red hard hat inside a logistics facility"
        priority
      />
      <div className={styles.wrapperAerialViewOfAModer}>
        <Image
          className={styles.aerialViewOfAModernPreEn}
          src="/images/industries/logistics/hero/aerial-view-warehouse-facility.webp"
          width={1488}
          height={1013.3}
          sizes="100vw"
          alt="Aerial view of a modern pre-engineered warehouse facility"
        />
      </div>
      <div className={styles.divabsolute} />
      <div className={styles.div}>
        <h1 className={styles.leadingPreEngineeredWarehou}>
          Leading Pre-Engineered Warehouse Building Manufacturer in South India
        </h1>
        <div className={styles.logisticsIndustrialStructuWrapper}>
          <h2 className={styles.logisticsIndustrial}>
            Logistics &amp; Industrial Structures by Mekark
          </h2>
        </div>
        <div className={styles.mekarkIsATrustedPreEngineWrapper}>
          <div className={styles.mekarkIsA}>
            Mekark is a trusted pre-engineered warehouse building manufacturer in
            South India, delivering PEB warehouse sheds, distribution centres,
            cold storage structures, and turnkey logistics facility construction
            across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala.
            IS-compliant, precision-engineered, and built for the speed of modern
            supply chains.
          </div>
        </div>
        <a href="/#enquiry" className={styles.component5}>
          <div className={styles.text}>Get a Free Quote</div>
          <div className={styles.component4}>
            <Image
              className={styles.vectorIcon}
              src="/images/industries/logistics/hero/arrow-icon.svg"
              width={20}
              height={16}
              alt=""
            />
          </div>
        </a>
      </div>
    </div>
  );
}
