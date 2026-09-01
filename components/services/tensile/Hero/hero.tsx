"use client";

import Image from "next/image";
import Link from "next/link";
import { SERVICE_BODY_TEXT_SIZES } from "@/components/services/serviceTypography";
import styles from "./index.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <div className={styles.imageChild} />
        <Image
          className={styles.chatgptImageAug20202603}
          src="/images/services/tensile/hero/hero-bg.png"
          width={1920}
          height={1081}
          sizes="100vw"
          alt=""
          priority
        />
        <div className={styles.imageItem} />
      </div>

      <div className={styles.content}>
        <div className={styles.text}>
          <h1 className={styles.southIndiasTrusted}>
            South India&apos;s Trusted Tensile Structure Contractor &amp; Fabric
            Roofing
            <br />
            Manufacturer
          </h1>
          <p className={`${styles.mekarkDesignsFabricates} ${SERVICE_BODY_TEXT_SIZES} text-[rgba(5,7,12,0.55)]`}>
            Mekark designs, fabricates, and installs high-strength PTFE and ETFE
            tensile fabric structures for stadiums, car parks, industrial sheds,
            and commercial
            <br />
            spaces across Tamil Nadu, Karnataka, Telangana, Andhra Pradesh, and
            Kerala, engineered for durability and built to withstand South
            India&apos;s climate.
          </p>
          <div className={styles.cta}>
            <a href="/#enquiry" className={styles.component5}>
              <span className={styles.text2}>Get a Free Quote</span>
            </a>
            <Link href="/projects/completed-projects" className={styles.exploreSolutions}>
              <span className={styles.viewOurProjects}>View Our Projects</span>
              <span className={styles.component42}>
                <Image
                  className={styles.vectorIcon}
                  src="/images/services/tensile/hero/arrow.svg"
                  width={9}
                  height={7}
                  alt=""
                />
              </span>
            </Link>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.stat}>
            <div className={styles.div}>
              <span className={styles.span}>18</span>
              <span className={styles.span2}>+</span>
            </div>
            <div className={styles.statLabel}>Years of Tensile Structure Experience</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.div}>
              <span className={styles.span}>200</span>
              <span className={styles.span2}>+</span>
            </div>
            <div className={styles.statLabel}>
              Tensile Projects Delivered Across South India
            </div>
          </div>
          <div className={styles.stat}>
            <div className={styles.div}>
              <span className={styles.span}>{`PTFE `}</span>
              <span className={styles.ton}>{`&`}</span>
              <span className={styles.span}> ETFE</span>
            </div>
            <div className={styles.statLabel}>Certified Fabric Suppliers</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.div}>
              <span className={styles.span}>{`X - `}</span>
              <span className={styles.ton}>Ton</span>
            </div>
            <div className={styles.statLabel}>In-House Fabrication Capacity</div>
          </div>
          <div className={`${styles.stat} ${styles.statWide}`}>
            <div className={styles.iso90012015Container}>
              <span className={styles.iso90012015}>{`ISO 9001:2015 `}</span>
              <span className={styles.span6}>{`& `}</span>
              <span className={styles.green}>{`Green `}</span>
              <span className={styles.certified}>Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
