"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import CountUp from "@/components/services/civil/CountUp";
import ServiceMobileHero from "@/components/services/ServiceMobileHero";
import {
  civilMobileHeroImageDefaults,
  civilMobileHeroLayout,
  greyMobileHeroBottomGradient,
} from "@/components/services/serviceMobileHeroCivilLayout";
import {
  MOBILE_HERO_DESCRIPTION_CLASS,
  SERVICE_MOBILE_HERO_TITLE_FIGMA_CLASS,
} from "@/components/services/serviceMobileCivilTemplate";
import {
  TensileEnquiryTrigger,
  useTensileEnquiry,
} from "@/components/services/tensile/TensileEnquiryProvider";
import styles from "./index.module.css";

const heroDescription =
  "Mekark designs, fabricates, and installs high-strength PTFE and ETFE tensile fabric structures for stadiums, car parks, industrial sheds, and commercial spaces across Tamil Nadu, Karnataka, Telangana, Andhra Pradesh, and Kerala, engineered for durability and built to withstand South India's climate.";

const heroStats: {
  key: string;
  value: ReactNode;
  mobileLabel: string;
}[] = [
  {
    key: "years",
    value: (
      <CountUp end={18} delay={0.65}>
        {(n) => (
          <>
            {n}
            <span className="text-[#ed2024]">+</span>
          </>
        )}
      </CountUp>
    ),
    mobileLabel: "Years Experience",
  },
  {
    key: "projects",
    value: (
      <CountUp end={200} delay={0.75}>
        {(n) => (
          <>
            {n}
            <span className="text-[#ed2024]">+</span>
          </>
        )}
      </CountUp>
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
];

function MobileHero() {
  const { openEnquiry } = useTensileEnquiry();

  return (
    <ServiceMobileHero
      {...civilMobileHeroLayout}
      title={
        <>
          <span className="block">
            South India&apos;s Trusted Tensile Structure Contractor &amp;
          </span>
          <span className="block">Fabric Roofing Manufacturer</span>
        </>
      }
      titleClassName={SERVICE_MOBILE_HERO_TITLE_FIGMA_CLASS}
      descriptionClassName={MOBILE_HERO_DESCRIPTION_CLASS}
      description={heroDescription}
      heroImage={{
        ...civilMobileHeroImageDefaults,
        src: "/images/tensile-hero-mv.webp",
        alt: "Mekark tensile structure project",
        objectPosition: "center bottom",
        scale: 1.2,
        translateX: "-10px",
        translateY: "-8px",
        bottomGradient: greyMobileHeroBottomGradient,
        bottomGradientOverlayHeight: "98%",
        bottomColor: "#252525",
      }}
      arrowIcon="/images/services/tensile/hero/arrow.svg"
      onEnquiryClick={openEnquiry}
      stats={heroStats.map((stat) => ({
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
      certificationInline
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
            src="/images/services/tensile/hero/hero-bg.webp"
            width={1920}
            height={1081}
            sizes="100vw"
            alt="Tensile fabric structure canopy by Mekark"
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
            <p className={`${styles.mekarkDesignsFabricates} relative flex max-w-[1278px] items-center font-manrope text-[18.67px] font-medium leading-[26.67px] text-gray-300`}>
              Mekark designs, fabricates, and installs high-strength PTFE and ETFE
              tensile fabric structures for stadiums, car parks, industrial sheds,
              and commercial
              <br />
              spaces across Tamil Nadu, Karnataka, Telangana, Andhra Pradesh, and
              Kerala, engineered for durability and built to withstand South
              India&apos;s climate.
            </p>
            <div className={styles.cta}>
              <TensileEnquiryTrigger className={styles.component5}>
                <span className={styles.text2}>Get a Free Quote</span>
              </TensileEnquiryTrigger>
              <Link href="/projects/completed-projects" className={styles.exploreSolutions}>
                <span className={styles.viewOurProjects}>View Our Projects</span>
                <span className={styles.component42}>
                  <Image
                    className={styles.vectorIcon}
                    src="/images/services/tensile/hero/arrow.svg"
                    width={9}
                    height={7}
                    alt="Arrow icon"
                  />
                </span>
              </Link>
            </div>
          </div>

          <div className={styles.container}>
            <div className={styles.stat}>
              <div className={styles.div}>
                <CountUp end={18} delay={0.65}>
                  {(n) => (
                    <>
                      <span className={styles.span}>{n}</span>
                      <span className={styles.span2}>+</span>
                    </>
                  )}
                </CountUp>
              </div>
              <div className={styles.statLabel}>Years of Tensile Structure Experience</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.div}>
                <CountUp end={200} delay={0.75}>
                  {(n) => (
                    <>
                      <span className={styles.span}>{n}</span>
                      <span className={styles.span2}>+</span>
                    </>
                  )}
                </CountUp>
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
