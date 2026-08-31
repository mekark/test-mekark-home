import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

export default function Hero() {
  return (
    <div className={`${styles.hero} flex flex-col`}>
      <div className={styles.image}>
        <Image
          className={styles.removeTheBuilding1}
          width={1921}
          height={1049}
          sizes="100vw"
          src="/images/services/solar/hero/remove-the-building-1.png"
          alt=""
        />
        <div className={styles.imageChild} />
        <Image
          className={styles.removeTheBuilding2}
          width={1921}
          height={1049}
          sizes="100vw"
          src="/images/services/solar/hero/remove-the-building-2.png"
          alt=""
        />
        <div className={styles.multiStoreyLayer11} />
        <div className={styles.imageItem} />
        <div className={styles.trustBar}>
          <div className={styles.verticalborder}>
            <div className={styles.container}>
              <div className={styles.div}>
                <span className={styles.span}>18</span>
                <span className={styles.span2}>+</span>
              </div>
            </div>
            <div className={styles.container2}>
              <div className={styles.yearsExperience}>Years Experience</div>
            </div>
          </div>
          <div className={styles.verticalborder2}>
            <div className={styles.container3}>
              <div className={styles.x}>
                <span className={styles.span}>{`175 `}</span>
                <span className={styles.span2}>+</span>
              </div>
            </div>
            <div className={styles.container4}>
              <div className={styles.inHouseEngineers}>in-House Engineers</div>
            </div>
          </div>
          <div className={styles.verticalborder3}>
            <div className={styles.container5}>
              <div className={styles.turnkey}>Turnkey</div>
            </div>
            <div className={styles.container6}>
              <div className={styles.solarEpc}>Solar EPC</div>
            </div>
          </div>
          <div className={styles.container7}>
            <div className={styles.container8}>
              <div className={styles.iso90012015}>ISO 9001:2015</div>
            </div>
            <div className={styles.certified}>Certified</div>
          </div>
        </div>
      </div>
      <div className={styles.text}>
        <b className={styles.southIndiasTrusted}>
          South India&apos;s Trusted Commercial Solar Installation Contractor
        </b>
        <div className={styles.mekarkDeliversEndToEnd}>
          Mekark delivers end-to-end solar power solutions for factories,
          warehouses, and industrial facilities across Tamil Nadu, Chennai,
          Bangalore, Hyderabad, Karnataka, and Andhra Pradesh, from design to
          commissioning, under one roof.
        </div>
        <div className={styles.cta}>
          <a href="/#enquiry" className={styles.component5}>
            <div className={styles.text2}>Get a Free Quote</div>
            <div className={styles.component4} />
          </a>
          <Link href="/projects/completed-projects" className={styles.exploreSolutions}>
            <div className={styles.viewOurProjects}>View Our Projects</div>
            <div className={styles.component42}>
              <Image
                className={styles.vectorIcon}
                width={8.7}
                height={6.9}
                sizes="100vw"
                src="/images/services/solar/hero/component-4.svg"
                alt=""
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
