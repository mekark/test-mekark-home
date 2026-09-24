import Image from "next/image";
import styles from "./index.module.css";

const CompleteDC = () => {
  return (
    <div className={styles.completeEotCraneSolutionsWrapper}>
      <div className={styles.completeEotCraneSolutions}>
        <div className={styles.leftStickyOuter}>
          <div className={styles.leftSticky}>
            <h2 className={styles.ourSolutionsHeading}>Our Solutions</h2>
            <h3 className={styles.completeEotCrane}>
              <span className={styles.subtitleLine}>
                Complete Data Center Facility Solutions,
              </span>
              <span className={styles.subtitleLine}>Engineered End-to-End</span>
            </h3>
            <p className={styles.asALeading}>
              <span className={styles.descLineMobile}>
                As a full-service, turnkey EPC data center construction company
                in South India, Mekark designs, fabricates, and builds
                white-space, MEP, and shell infrastructure engineered around
                your uptime tier, power density, and redundancy requirements.
              </span>
              <span className={styles.descLineDesktop}>
                As a full-service, turnkey EPC data center construction company
                in South India,
                <br />
                Mekark designs, fabricates, and builds white-space, MEP, and
                shell
                <br />
                infrastructure engineered around your uptime tier, power
                density, and
                <br />
                redundancy requirements.
              </span>
            </p>
          </div>
        </div>
        <div className={styles.rightScrollable}>
          <div className={styles.frameParentScale}>
            <div className={styles.frameParent}>
              <Image
                className={styles.timelineLine}
                src="/images/industries/data-center/complete-dt/timeline.svg"
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
                  src="/images/industries/data-center/complete-dt/1.webp"
                  width={323}
                  height={194}
                  sizes="100vw"
                  alt="Turnkey Data Center Shell and Core Construction"
                />
                <div className={styles.frameDiv}>
                  <b className={styles.overheadSingleGirder}>
                    Turnkey Data Center Shell &amp; Core Construction:
                  </b>
                  <div className={styles.economicalOverheadCrane}>
                    Full-scope design, civil works, structural steel, and MEP
                    delivered under one contract for hyperscale and colocation
                    data centers.
                  </div>
                </div>
              </div>
              <div className={styles.rectangleContainer}>
                <Image
                  className={styles.rectangleIcon}
                  src="/images/industries/data-center/complete-dt/2.webp"
                  width={323}
                  height={194}
                  sizes="100vw"
                  alt="Raised Floor and White Space Fit-Out"
                />
                <div className={styles.frameDiv}>
                  <b className={styles.overheadSingleGirder}>
                    Raised Floor &amp; White Space Fit-Out:
                  </b>
                  <div className={styles.economicalOverheadCrane}>
                    Precision-engineered raised access flooring, containment
                    systems, and rack-ready white space built to your layout
                    density.
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent}>
                <Image
                  className={styles.rectangleIcon}
                  src="/images/industries/data-center/complete-dt/3.webp"
                  width={323}
                  height={194}
                  sizes="100vw"
                  alt="Precision Cooling and Thermal Infrastructure"
                />
                <div className={styles.frameDiv}>
                  <b className={styles.overheadSingleGirder}>
                    Precision Cooling &amp; Thermal Infrastructure:
                  </b>
                  <div className={styles.economicalOverheadCrane}>
                    CRAC/CRAH systems, hot-aisle/cold-aisle containment, and
                    chilled water infrastructure engineered for high-density
                    compute loads.
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent2}>
                <Image
                  className={styles.rectangleIcon}
                  src="/images/industries/data-center/complete-dt/4.webp"
                  width={323}
                  height={194}
                  sizes="100vw"
                  alt="Power Infrastructure and Redundancy Systems"
                />
                <div className={styles.frameDiv}>
                  <b className={styles.overheadSingleGirder}>
                    Power Infrastructure &amp; Redundancy Systems:
                  </b>
                  <div className={styles.economicalOverheadCrane}>
                    UPS rooms, DG yards, electrical switchgear, and N+1/2N
                    redundant power distribution built for Tier III and Tier IV
                    uptime standards.
                  </div>
                </div>
              </div>
              <div className={styles.rectangleGroup}>
                <Image
                  className={styles.rectangleIcon}
                  src="/images/industries/data-center/complete-dt/5.webp"
                  width={323}
                  height={194}
                  sizes="100vw"
                  alt="MEP and Fire Suppression Systems"
                />
                <div className={styles.frameDiv}>
                  <b className={styles.overheadSingleGirder}>
                    MEP &amp; Fire Suppression Systems:
                  </b>
                  <div className={styles.economicalOverheadCrane}>
                    Electrical, mechanical, plumbing, and clean-agent fire
                    suppression systems built for uninterrupted, 24x7 data
                    center operations.
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent3}>
                <Image
                  className={styles.rectangleIcon}
                  src="/images/industries/data-center/complete-dt/6.webp"
                  width={323}
                  height={194}
                  sizes="100vw"
                  alt="Modular and Prefabricated Data Center Construction"
                />
                <div className={styles.frameDiv}>
                  <b className={styles.overheadSingleGirder}>
                    Modular &amp; Prefabricated Data Center Construction:
                  </b>
                  <div className={styles.economicalOverheadCrane}>
                    Factory-fabricated modular data hall units for faster
                    deployment and phased capacity scaling.
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
            Every data center facility is custom-engineered around your uptime
            tier, power density, and redundancy architecture, ensuring reliable
          </span>
          <span className={styles.bannerLine}>
            operations and audit-ready compliance for{" "}
            <b className={styles.everyEotCrane}>
              Data center operators across South India.
            </b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CompleteDC;
