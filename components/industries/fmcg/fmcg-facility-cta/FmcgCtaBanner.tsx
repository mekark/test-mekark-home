import Image from "next/image";
import styles from "./FmcgCtaBanner.module.css";

export function FmcgCtaBanner() {
  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <div className={styles.planningAWarehouseOrLogistParent}>
          <p className={styles.planningAWarehouse}>
            Planning an FMCG Manufacturing Facility in South India?
          </p>
          <p className={styles.mekarksProjectCalendar}>
            Every week your production line isn&apos;t running is lost market share
            and a delayed product launch. Mekark&apos;s team will assess your process
            requirements, hygiene class, warehousing needs, and utility load, and
            deliver a transparent budgetary estimate within 24 hours. No obligation,
            just honest expert advice.
          </p>
        </div>
        <div className={styles.sectionChild} />
        <a href="/#enquiry" className={styles.cta2}>
          <b className={styles.talkToOur}>Talk to Our Expert</b>
          <div className={styles.component4}>
            <Image
              className={styles.vectorIcon}
              src="/images/industries/fmcg/fmcg-facility-cta/arrow-icon.svg"
              width={27}
              height={27}
              sizes="100vw"
              alt="Arrow icon"
            />
          </div>
        </a>
        <div className={styles.workerVisual}>
          <Image
            className={styles.sectionItem}
            src="/images/industries/fmcg/fmcg-facility-cta/banner-accent-1.svg"
            width={180}
            height={180}
            sizes="100vw"
            alt="Decorative badge frame"
          />
          <Image
            className={styles.sectionInner}
            src="/images/industries/fmcg/fmcg-facility-cta/banner-accent-2.svg"
            width={317}
            height={213}
            sizes="100vw"
            alt="Decorative section frame"
          />
          <div className={styles.eotCta1}>
            <Image
              className={styles.eotCta1Img}
              src="/images/industries/fmcg/fmcg-facility-cta/engineer.webp"
              width={491}
              height={467}
              sizes="(max-width: 768px) 96vw, (max-width: 1200px) 92vw, 491px"
              alt="Mekark engineer reviewing facility plans"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
