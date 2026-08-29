"use client";

import Image from "next/image";
import { useDesignScale } from "@/lib/hooks/useDesignScale";
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
              Chennai, Coimbatore, Hosur, Bengaluru, Hyderabad, and Kochi
            </b>
            <span className={styles.whereverYoureLocated}>
              {" "}
              - Mekark&apos;s food &amp; beverage facility
            </span>
          </span>
          <span className={`${styles.footerLine} ${styles.whereverYoureLocated}`}>
            engineering is customised to your production process and compliance
            requirements.
          </span>
        </div>
        <Image
          className={styles.grid1Icon}
          src="/images/industries/food-and-beverage/solutions/grid-1.png"
          width={1918}
          height={391}
          sizes="100vw"
          alt=""
        />
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.eotCraneSolutionsAcrossSouWrapper}>
              <b className={styles.eotCraneSolutions}>
                <span className={styles.titleLine}>
                  Food &amp; Beverage Manufacturing Facility Construction
                </span>
                <span className={styles.titleLine}>
                  Across South India&apos;s Growth Hubs
                </span>
              </b>
            </div>
            <div className={styles.ourEotCranesServeDiverseIWrapper}>
              <div className={styles.ourEotCranes}>
                Our hygienic facility and cold chain construction serves food
                and beverage manufacturers across Tamil Nadu, Karnataka, Andhra
                Pradesh, Telangana, and Kerala:
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.rectangleParent}>
              <Image
                className={styles.frameChild}
                src="/images/industries/food-and-beverage/solutions/1.jpg"
                width={262}
                height={262}
                sizes="100vw"
                alt="Dairy Processing Plants"
              />
              <div className={styles.container}>
                <div className={styles.container2}>
                  <b className={styles.steelMetal}>Dairy Processing Plants:</b>
                </div>
                <div className={styles.container3}>
                  <div className={styles.heavyDutyCranesFor}>
                    Hygienic, wash-down-ready facilities engineered for milk
                    processing, packaging, and cold storage.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rectangleGroup}>
              <Image
                className={styles.frameChild}
                src="/images/industries/food-and-beverage/solutions/2.png"
                width={262}
                height={262}
                sizes="100vw"
                alt="Beverage Bottling and Packaging Units"
              />
              <div className={styles.container4}>
                <div className={styles.container2}>
                  <b className={styles.automotiveManufacturing}>
                    Beverage Bottling &amp; Packaging Units:
                  </b>
                </div>
                <div className={styles.container3}>
                  <div className={styles.heavyDutyCranesFor}>
                    High-speed production plants designed for continuous,
                    automation-ready bottling and canning lines.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rectangleContainer}>
              <Image
                className={styles.frameChild}
                src="/images/industries/food-and-beverage/solutions/3.png"
                width={262}
                height={262}
                sizes="100vw"
                alt="Bakery and Confectionery Manufacturing"
              />
              <div className={styles.container7}>
                <div className={styles.container2}>
                  <b className={styles.powerPlants}>
                    Bakery &amp; Confectionery Manufacturing:
                  </b>
                </div>
                <div className={styles.container9}>
                  <div className={styles.heavyDutyCranesFor}>
                    Temperature-controlled facilities built for consistent
                    baking, proofing, and packaging environments.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <Image
                className={styles.frameChild}
                src="/images/industries/food-and-beverage/solutions/4.png"
                width={262}
                height={262}
                sizes="100vw"
                alt="Meat Poultry and Seafood Processing"
              />
              <div className={styles.container}>
                <div className={styles.container2}>
                  <b className={styles.steelMetal}>
                    Meat, Poultry &amp; Seafood Processing:
                  </b>
                </div>
                <div className={styles.container3}>
                  <div className={styles.heavyDutyCranesFor}>
                    Cold chain-integrated plants with blast freezing and
                    hygienic processing zones.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent2}>
              <Image
                className={styles.frameChild2}
                src="/images/industries/food-and-beverage/solutions/5.png"
                width={262}
                height={262}
                sizes="100vw"
                alt="Fruit Vegetable and Agro-Processing"
              />
              <div className={styles.container13}>
                <div className={styles.container14}>
                  <b className={styles.steelMetal}>
                    Fruit, Vegetable &amp; Agro-Processing:
                  </b>
                </div>
                <div className={styles.container15}>
                  <div className={styles.heavyDutyCranesFor}>
                    Facilities designed for washing, sorting, processing, and
                    cold storage of perishable produce.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent3}>
              <Image
                className={styles.frameChild}
                src="/images/industries/food-and-beverage/solutions/6.jpg"
                width={262}
                height={262}
                sizes="100vw"
                alt="Contract Food Manufacturing Co-Packing"
              />
              <div className={styles.container7}>
                <div className={styles.container2}>
                  <b className={styles.powerPlants}>
                    Contract Food Manufacturing (Co-Packing):
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
        </div>
      </div>
    </div>
  );
};

export default Solutions;
