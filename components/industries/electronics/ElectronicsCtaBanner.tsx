import Image from "next/image";
import styles from "./ElectronicsCtaBanner.module.css";

export default function ElectronicsCtaBanner() {
  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <div className={styles.planningAWarehouseOrLogistParent}>
          <p className={styles.planningAWarehouse}>
            <span className={styles.titleLineFirst}>
              Planning an Electronics Manufacturing
            </span>
            <span className={styles.titleLineSecond}>Facility in South India?</span>
          </p>
          <p className={styles.mekarksProjectCalendar}>
            Every week your production line isn&apos;t running is lost revenue.
            Mekark&apos;s team will assess your process requirements, cleanroom
            class, ESD protection, utility load, and deliver a transparent
            budgetary estimate within 24 hours. No obligation, just honest expert
            advice.
          </p>
        </div>
        <div className={styles.sectionChild} />
        <a href="/#enquiry" className={styles.cta2}>
          <b className={styles.talkToOur}>Request a Free Consultation</b>
          <div className={styles.component4}>
            <Image
              className={styles.vectorIcon}
              src="/images/industries/electronics/cta/cta-arrow.svg"
              width={16.7}
              height={13.3}
              sizes="100vw"
              alt=""
            />
          </div>
        </a>
        <div className={styles.workerVisual}>
          <Image
            className={styles.sectionItem}
            src="/images/industries/electronics/cta/frame-76.svg"
            width={180}
            height={180}
            sizes="100vw"
            alt=""
          />
          <Image
            className={styles.sectionInner}
            src="/images/industries/electronics/cta/frame-275.svg"
            width={317}
            height={213}
            sizes="100vw"
            alt=""
          />
          <div className={styles.eotCta1}>
            <Image
              className={styles.eotCta1Img}
              src="/images/industries/electronics/cta/engineer.png"
              width={491}
              height={323}
              sizes="(max-width: 768px) 96vw, (max-width: 1200px) 92vw, 491px"
              alt="Mekark electronics manufacturing expert"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
