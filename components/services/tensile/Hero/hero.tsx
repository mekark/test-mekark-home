"use client";

import Image from "next/image";
import Link from "next/link";
import ServiceMobileHero from "@/components/services/ServiceMobileHero";
import { SERVICE_BODY_TEXT_SIZES_SCALED } from "@/components/services/serviceTypography";
import styles from "./index.module.css";

const heroDescription =
  "Mekark designs, fabricates, and installs high-strength PTFE and ETFE tensile fabric structures for stadiums, car parks, industrial sheds, and commercial spaces across Tamil Nadu, Karnataka, Telangana, Andhra Pradesh, and Kerala, engineered for durability and built to withstand South India's climate.";

const mobileStats = [
  {
    key: "years",
    value: (
      <>
        18<span className="text-[#ed2024]">+</span>
      </>
    ),
    mobileLabel: "Years Experience",
  },
  {
    key: "projects",
    value: (
      <>
        200<span className="text-[#ed2024]">+</span>
      </>
    ),
    mobileLabel: "Tensile Projects",
  },
  {
    key: "fabric",
    value: (
      <>
        PTFE <span className="text-[#ed2024]">&amp;</span> ETFE
      </>
    ),
    mobileLabel: "Fabric Suppliers",
  },
  {
    key: "capacity",
    value: (
      <>
        X-<span className="text-[#ed2024]">Ton</span>
      </>
    ),
    mobileLabel: "Fabrication Capacity",
  },
] as const;

function MobileHero() {
  return (
    <ServiceMobileHero
      title={
        <>
          South India&apos;s Trusted Tensile Structure Contractor &amp; Fabric
          Roofing
          <br />
          Manufacturer
        </>
      }
      description={heroDescription}
      heroImage={{
        src: "/images/services/tensile/hero/hero-bg.png",
        alt: "Mekark tensile structure project",
        objectPosition: "center 10%",
      }}
      arrowIcon="/images/services/tensile/hero/arrow.svg"
      stats={mobileStats.map((stat) => ({
        key: stat.key,
        value: stat.value,
        mobileLabel: stat.mobileLabel,
      }))}
      certification={
        <>
          <span className="text-white">ISO 9001:2015 </span>
          <span className="text-[#ed2024]">&amp;</span>
          <span className="text-white"> </span>
          <span className="text-[#18a34a]">Green </span>
          <span className="text-[#ed2024]">Certified</span>
        </>
      }
      hideFrom="lg"
    />
  );
}

export default function Hero() {
  return (
    <>
      <MobileHero />

      <div className="hidden lg:block">
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
            <p className={`${styles.mekarkDesignsFabricates} ${SERVICE_BODY_TEXT_SIZES_SCALED} text-[rgba(5,7,12,0.55)]`}>
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
      </div>
    </>
  );
}
