import Image from "next/image";
import styles from "./index.module.css";

const OurSolutions = () => {
  return (
    <div className={styles.completeEotCraneSolutionsWrapper}>
      <div className={styles.completeEotCraneSolutions}>
        <div className={styles.leftStickyOuter}>
          <div className={styles.leftSticky}>
            <h2 className={styles.ourSolutionsHeading}>Our Solutions</h2>
            <h3 className={styles.completeEotCrane}>
              <span className={styles.subtitleLine}>
                Complete Food &amp; Beverage Facility Solutions,
              </span>
              <span className={styles.subtitleLine}>Engineered End-to-End</span>
            </h3>
            <p className={styles.asALeading}>
              As a full-service, turnkey EPC food &amp; beverage facility construction
              company in South India, Mekark designs, fabricates, and builds hygienic,
              compliance-ready production environments tailored to your process,
              cleanliness standards, and utility requirements.
            </p>
          </div>
        </div>
        <div className={styles.rightScrollable}>
          <div className={styles.frameParentScale}>
            <div className={styles.frameParent}>
              <Image
                className={styles.timelineLine}
                src="/images/industries/food-and-beverage/our-solutions/timeline.svg"
                width={397.4}
                height={1320.9}
                sizes="100vw"
                alt="Process timeline illustration"
              />
              <Image
                className={styles.mobileSkeleton}
                src="/images/mobile/6CARD-SKELETON.webp"
                width={48}
                height={1435}
                alt=""
                aria-hidden="true"
                unoptimized
              />
              <div className={styles.frameContainer}>
                <Image
                  className={styles.rectangleIcon}
                  src="/images/industries/food-and-beverage/our-solutions/1.webp"
                  width={323}
                  height={194}
                  sizes="100vw"
                  alt="Turnkey Food Processing Plant Construction"
                />
                <div className={styles.frameDiv}>
                  <b className={styles.overheadSingleGirder}>
                    Turnkey Food Processing Plant Construction
                  </b>
                  <div className={styles.economicalOverheadCrane}>
                    Full-scope design, civil works, structural steel, and MEP
                    delivered under one contract for food manufacturing units.
                  </div>
                </div>
              </div>
              <div className={styles.rectangleContainer}>
                <Image
                  className={styles.rectangleIcon}
                  src="/images/industries/food-and-beverage/our-solutions/2.webp"
                  width={323}
                  height={194}
                  sizes="100vw"
                  alt="Food-Grade Flooring and Hygienic Interiors"
                />
                <div className={styles.frameDiv}>
                  <b className={styles.overheadSingleGirder}>
                    Food-Grade Flooring &amp; Hygienic Interiors
                  </b>
                  <div className={styles.economicalOverheadCrane}>
                    FSSAI and HACCP-compliant epoxy and PU flooring, coved
                    skirting, and wash-down-ready wall systems engineered for
                    contamination control.
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent}>
                <Image
                  className={styles.rectangleIcon}
                  src="/images/industries/food-and-beverage/our-solutions/3.webp"
                  width={323}
                  height={194}
                  sizes="100vw"
                  alt="Cold Storage and Cold Chain Infrastructure"
                />
                <div className={styles.frameDiv}>
                  <b className={styles.overheadSingleGirder}>
                    Cold Storage &amp; Cold Chain Infrastructure
                  </b>
                  <div className={styles.economicalOverheadCrane}>
                    PUF-insulated cold rooms, blast freezers, and
                    multi-temperature storage for dairy, meat, seafood, and
                    beverage products.
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent2}>
                <Image
                  className={styles.rectangleIcon}
                  src="/images/industries/food-and-beverage/our-solutions/4.webp"
                  width={323}
                  height={194}
                  sizes="100vw"
                  alt="HVAC and Air Handling Systems"
                />
                <div className={styles.frameDiv}>
                  <b className={styles.overheadSingleGirder}>
                    HVAC &amp; Air Handling Systems
                  </b>
                  <div className={styles.economicalOverheadCrane}>
                    Temperature, humidity, and air quality control engineered
                    specifically for food processing and beverage bottling
                    environments.
                  </div>
                </div>
              </div>
              <div className={styles.rectangleGroup}>
                <Image
                  className={styles.rectangleIcon}
                  src="/images/industries/food-and-beverage/our-solutions/5.webp"
                  width={323}
                  height={194}
                  sizes="100vw"
                  alt="MEP and Utility Infrastructure"
                />
                <div className={styles.frameDiv}>
                  <b className={styles.overheadSingleGirder}>
                    MEP &amp; Utility Infrastructure
                  </b>
                  <div className={styles.economicalOverheadCrane}>
                    Electrical, mechanical, plumbing, steam, and process utility
                    systems built for uninterrupted, high-reliability plant
                    operations.
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent3}>
                <Image
                  className={styles.rectangleIcon}
                  src="/images/industries/food-and-beverage/our-solutions/6.webp"
                  width={323}
                  height={194}
                  sizes="100vw"
                  alt="EOT Crane and Material Handling Systems"
                />
                <div className={styles.frameDiv}>
                  <b className={styles.overheadSingleGirder}>
                    EOT Crane &amp; Material Handling Systems
                  </b>
                  <div className={styles.economicalOverheadCrane}>
                    Overhead crane and internal logistics infrastructure for
                    bulk ingredient handling and high-volume production lines.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.overlayborder}>
        <div className={styles.strongEveryContainer}>
          <span className={styles.bannerLine}>
            Every food &amp; beverage manufacturing facility is custom-engineered
            around your production line, hygiene classification,
          </span>
          <span className={styles.bannerLine}>
            and utility load, ensuring consistent output quality and long-term
            operational reliability for{" "}
            <b className={styles.everyEotCrane}>
              food and beverage manufacturers across South India.
            </b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default OurSolutions;
