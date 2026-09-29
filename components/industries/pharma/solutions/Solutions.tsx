"use client";

import Image from "next/image";
import { useDesignScale } from "@/lib/hooks/useDesignScale";
import carouselStyles from "@/components/industries/shared/industryMobileFacilityCarousel.module.css";
import styles from "./index.module.css";

const DESIGN_HEIGHT = 850;

const Solutions = () => {
  const scale = useDesignScale();

  return (
    <div
      className={styles.solutionsWrapper}
      style={{ height: DESIGN_HEIGHT * scale }}
    >
      <div
        className={styles.solutions}
        style={{ transform: `scale(${scale})` }}
      >
        <div className={styles.whereverYoureLocatedContainer}>
          <span className={styles.footerLine}>
            <span className={styles.whereverYoureLocated}>
              Wherever you&apos;re located in South India -{" "}
            </span>
            <b className={styles.mekarkEngineersEot}>
              Chennai, Coimbatore, Hosur, Bengaluru, Hyderabad, or Kochi
            </b>
            <span className={styles.whereverYoureLocated}>
              {" "}
              - Mekark&apos;s pharmaceutical facility
            </span>
          </span>
          <span
            className={`${styles.footerLine} ${styles.whereverYoureLocated}`}
          >
            engineering is customised to your production process and regulatory
            requirements.
          </span>
        </div>
        <Image
          className={styles.grid1Icon}
          src="/images/industries/pharma/solutions/grid-1.webp"
          width={1918}
          height={391}
          sizes="100vw"
          alt="Decorative grid background"
        />
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.eotCraneSolutionsAcrossSouWrapper}>
              <b className={styles.eotCraneSolutions}>
                <span className={styles.titleLine}>
                  Pharmaceutical Manufacturing Facility Construction
                </span>
                <span className={styles.titleLine}>
                  Across South India&apos;s Growth Hubs
                </span>
              </b>
            </div>
            <div className={styles.ourEotCranesServeDiverseIWrapper}>
              <div className={styles.ourEotCranes}>
                Our cleanroom and cold chain construction serves pharmaceutical
                manufacturers across Tamil Nadu, Karnataka, Andhra Pradesh,
                Telangana, and Kerala:
              </div>
            </div>
          </div>
          <div className={`${styles.frameContainer} ${carouselStyles.track}`}>
            <div className={`${styles.rectangleParent} ${carouselStyles.item}`}>
              <Image
                className={styles.frameChild}
                src="/images/industries/pharma/solutions/1.webp"
                width={262}
                height={262}
                sizes="100vw"
                alt="API and Bulk Drug Manufacturing"
              />
              <div className={styles.container}>
                <div className={styles.container2}>
                  <b className={styles.steelMetal}>
                    API &amp; Bulk Drug Manufacturing
                  </b>
                </div>
                <div className={styles.container3}>
                  <div className={styles.heavyDutyCranesFor}>
                    Solvent-handling, effluent-compliant facilities engineered
                    for active pharmaceutical ingredient production.
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.rectangleGroup} ${carouselStyles.item}`}>
              <Image
                className={styles.frameChild}
                src="/images/industries/pharma/solutions/2.webp"
                width={262}
                height={262}
                sizes="100vw"
                alt="Sterile Injectable and Ophthalmic Manufacturing"
              />
              <div className={styles.container4}>
                <div className={styles.container2}>
                  <b className={styles.automotiveManufacturing}>
                    Sterile Injectable &amp; Ophthalmic Manufacturing
                  </b>
                </div>
                <div className={styles.container3}>
                  <div className={styles.heavyDutyCranesFor}>
                    ISO-classified cleanrooms with validated air handling for
                    aseptic filling and packaging lines.
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.rectangleContainer} ${carouselStyles.item}`}>
              <Image
                className={styles.frameChild}
                src="/images/industries/pharma/solutions/3.webp"
                width={262}
                height={262}
                sizes="100vw"
                alt="Oral Solid Dosage Manufacturing"
              />
              <div className={styles.container7}>
                <div className={styles.container2}>
                  <b className={styles.powerPlants}>
                    Oral Solid Dosage (OSD) Manufacturing
                  </b>
                </div>
                <div className={styles.container9}>
                  <div className={styles.heavyDutyCranesFor}>
                    Contamination-controlled facilities designed for
                    tabletting, capsule filling, and coating operations.
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.frameDiv} ${carouselStyles.item}`}>
              <Image
                className={styles.frameChild}
                src="/images/industries/pharma/solutions/4.webp"
                width={262}
                height={262}
                sizes="100vw"
                alt="Biologics and Vaccine Manufacturing"
              />
              <div className={styles.container}>
                <div className={styles.container2}>
                  <b className={styles.steelMetal}>
                    Biologics &amp; Vaccine Manufacturing
                  </b>
                </div>
                <div className={styles.container3}>
                  <div className={styles.heavyDutyCranesFor}>
                    Cold chain-integrated plants with validated storage and
                    segregated process zones.
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.rectangleParent2} ${carouselStyles.item}`}>
              <Image
                className={styles.frameChild2}
                src="/images/industries/pharma/solutions/5.webp"
                width={262}
                height={262}
                sizes="100vw"
                alt="Nutraceutical and Herbal Formulation Manufacturing"
              />
              <div className={styles.container13}>
                <div className={styles.container14}>
                  <b className={styles.steelMetal}>
                    Nutraceutical &amp; Herbal Formulation Manufacturing
                  </b>
                </div>
                <div className={styles.container15}>
                  <div className={styles.heavyDutyCranesFor}>
                    Facilities designed for extraction, formulation, and
                    hygienic packaging.
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.rectangleParent3} ${carouselStyles.item}`}>
              <Image
                className={styles.frameChild}
                src="/images/industries/pharma/solutions/6.webp"
                width={262}
                height={262}
                sizes="100vw"
                alt="Contract Manufacturing CDMO CMO"
              />
              <div className={styles.container7}>
                <div className={styles.container2}>
                  <b className={styles.powerPlants}>
                    Contract Manufacturing (CDMO/CMO)
                  </b>
                </div>
                <div className={styles.container9}>
                  <div className={styles.heavyDutyCranesFor}>
                    Multi-tenant-ready facilities with flexible bay design for
                    scaling production.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className={carouselStyles.hint}>Swipe to explore all 6 facilities</p>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
