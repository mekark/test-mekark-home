import Image from "next/image";
import styles from "./index.module.css";

const CompletePharma = () => {
  return (
    <div className={styles.completeEotCraneSolutionsWrapper}>
      <div className={styles.completeEotCraneSolutions}>
        <div className={styles.leftStickyOuter}>
          <div className={styles.leftSticky}>
            <h2 className={styles.ourSolutionsHeading}>Our Solutions</h2>
            <h3 className={styles.completeEotCrane}>
              <span className={styles.subtitleLine}>
                Complete Pharmaceutical Facility Solutions,
              </span>
              <span className={styles.subtitleLine}>Engineered End-to-End</span>
            </h3>
            <p className={styles.asALeading}>
              <span className={styles.descLineMobile}>
                As a full-service, turnkey EPC pharma facility construction
                company in South India, Mekark designs, fabricates, and builds
                cleanroom-classified, compliance-ready production environments
                tailored to your process, contamination control standards, and
                utility requirements.
              </span>
              <span className={styles.descLineDesktop}>
                As a full-service, turnkey EPC pharma facility construction
                company in
                <br />
                South India, Mekark designs, fabricates, and builds
                cleanroom-classified,
                <br />
                compliance-ready production environments tailored to your
                process,
                <br />
                contamination control standards, and utility requirements.
              </span>
            </p>
          </div>
        </div>
        <div className={styles.rightScrollable}>
          <div className={styles.frameParentScale}>
            <div className={styles.frameParent}>
              <Image
                className={styles.timelineLine}
                src="/images/industries/pharma/complete-pharma/timeline.svg"
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
                  src="/images/industries/pharma/complete-pharma/1.webp"
                  width={323}
                  height={194}
                  sizes="100vw"
                  alt="Turnkey Pharmaceutical Plant Construction"
                />
                <div className={styles.frameDiv}>
                  <b className={styles.overheadSingleGirder}>
                    Turnkey Pharmaceutical Plant Construction:
                  </b>
                  <div className={styles.economicalOverheadCrane}>
                    Full-scope design, civil works, structural steel, and MEP
                    delivered under one contract for pharma manufacturing units.
                  </div>
                </div>
              </div>
              <div className={styles.rectangleContainer}>
                <Image
                  className={styles.rectangleIcon}
                  src="/images/industries/pharma/complete-pharma/2.webp"
                  width={323}
                  height={194}
                  sizes="100vw"
                  alt="Cleanroom Construction and Contamination Control"
                />
                <div className={styles.frameDiv}>
                  <b className={styles.overheadSingleGirder}>
                    <span className={styles.cardTitleLine}>
                      Cleanroom Construction &amp; Contamination
                    </span>
                    <span className={styles.cardTitleLine}>Control:</span>
                  </b>
                  <div className={styles.economicalOverheadCrane}>
                    ISO-classified cleanrooms, modular wall panels, epoxy and PU
                    flooring, and pressure-cascade HVAC engineered for sterile
                    and non-sterile manufacturing.
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent}>
                <Image
                  className={styles.rectangleIcon}
                  src="/images/industries/pharma/complete-pharma/3.webp"
                  width={323}
                  height={194}
                  sizes="100vw"
                  alt="Sterile Manufacturing and API Production Facilities"
                />
                <div className={styles.frameDiv}>
                  <b className={styles.overheadSingleGirder}>
                    Sterile Manufacturing &amp; API Production Facilities:
                  </b>
                  <div className={styles.economicalOverheadCrane}>
                    Purpose-built environments for injectable, ophthalmic, and
                    API manufacturing with validated air handling and utility
                    segregation.
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent2}>
                <Image
                  className={styles.rectangleIcon}
                  src="/images/industries/pharma/complete-pharma/4.webp"
                  width={323}
                  height={194}
                  sizes="100vw"
                  alt="HVAC and Air Handling Systems"
                />
                <div className={styles.frameDiv}>
                  <b className={styles.overheadSingleGirder}>
                    HVAC &amp; Air Handling Systems:
                  </b>
                  <div className={styles.economicalOverheadCrane}>
                    Temperature, humidity, differential pressure, and particulate
                    control engineered specifically for GMP and WHO-GMP
                    pharmaceutical environments.
                  </div>
                </div>
              </div>
              <div className={styles.rectangleGroup}>
                <Image
                  className={styles.rectangleIcon}
                  src="/images/industries/pharma/complete-pharma/5.webp"
                  width={323}
                  height={194}
                  sizes="100vw"
                  alt="MEP and Utility Infrastructure"
                />
                <div className={styles.frameDiv}>
                  <b className={styles.overheadSingleGirder}>
                    MEP &amp; Utility Infrastructure:
                  </b>
                  <div className={styles.economicalOverheadCrane}>
                    Purified water systems, HVAC, electrical, mechanical,
                    plumbing, and process utility systems built for
                    uninterrupted, validation-ready plant operations.
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent3}>
                <Image
                  className={styles.rectangleIcon}
                  src="/images/industries/pharma/complete-pharma/6.webp"
                  width={323}
                  height={194}
                  sizes="100vw"
                  alt="Cold Chain and Vaccine Storage Infrastructure"
                />
                <div className={styles.frameDiv}>
                  <b className={styles.overheadSingleGirder}>
                    Cold Chain &amp; Vaccine Storage Infrastructure:
                  </b>
                  <div className={styles.economicalOverheadCrane}>
                    PUF-insulated cold rooms and multi-temperature storage for
                    vaccines, biologics, and temperature-sensitive
                    pharmaceutical products.
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
            We custom-engineer every pharmaceutical manufacturing facility
            around your production line, cleanroom classification, and
            regulatory pathway, ensuring
          </span>
          <span className={styles.bannerLine}>
            consistent product quality and audit-ready operations for{" "}
            <b className={styles.everyEotCrane}>
              Pharma manufacturers across South India.
            </b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CompletePharma;
