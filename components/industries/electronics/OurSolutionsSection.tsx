import Image from "next/image";
import styles from "./OurSolutionsSection.module.css";

export default function OurSolutionsSection() {
  return (
    <div className={styles.completeEotCraneSolutionsWrapper}>
      <div className={styles.completeEotCraneSolutions}>
        <div className={styles.leftStickyOuter}>
          <div className={styles.leftSticky}>
            <h2 className={styles.ourSolutionsHeading}>Our Solutions</h2>
            <h3 className={styles.completeEotCrane}>
              <span className={styles.subtitleLine}>
                Complete Electronics Manufacturing Facility Solutions,
              </span>
              <span className={styles.subtitleLine}>Engineered End-to-End</span>
            </h3>
            <p className={styles.asALeading}>
              As a full-service, turnkey EPC electronics facility construction
              company in South India, Mekark designs, fabricates, and builds
              precision production environments tailored to your process,
              cleanliness classification, and utility requirements.
            </p>
          </div>
        </div>
        <div className={styles.rightScrollable}>
          <div className={styles.frameParentScale}>
            <div className={styles.frameParent}>
              <Image
                className={styles.timelineLine}
                src="/images/industries/electronics/solutions/timeline.svg"
                width={397}
                height={1321}
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
                  src="/images/industries/electronics/solutions/turnkey-factory.webp"
                  width={323}
                  height={194}
                  sizes="100vw"
                  alt="Workers assembling electronics in a manufacturing facility"
                />
                <div className={styles.frameDiv}>
                  <b className={styles.overheadSingleGirder}>
                    Turnkey Electronics Factory Construction:
                  </b>
                  <div className={styles.economicalOverheadCrane}>
                    Full-scope design, civil works, structural steel, and MEP
                    delivered under one contract.
                  </div>
                </div>
              </div>
              <div className={styles.rectangleContainer}>
                <Image
                  className={styles.rectangleIcon}
                  src="/images/industries/electronics/solutions/clean-room.webp"
                  width={323}
                  height={194}
                  sizes="100vw"
                  alt="Sterile clean room environment for electronics manufacturing"
                />
                <div className={styles.frameDiv}>
                  <b className={styles.overheadSingleGirder}>
                    Clean Room Construction:
                  </b>
                  <div className={styles.economicalOverheadCrane}>
                    Controlled-environment build-outs for electronics assembly,
                    component manufacturing, and semiconductor-grade processes.
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent}>
                <Image
                  className={styles.rectangleIcon}
                  src="/images/industries/electronics/solutions/esd-flooring.webp"
                  width={323}
                  height={194}
                  sizes="100vw"
                  alt="ESD-safe electronics laboratory with controlled interiors"
                />
                <div className={styles.frameDiv}>
                  <b className={styles.overheadSingleGirder}>
                    ESD-Safe Flooring &amp; Interiors:
                  </b>
                  <div className={styles.economicalOverheadCrane}>
                    Anti-static flooring, partition systems, and controlled
                    interiors engineered to protect sensitive components.
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent2}>
                <Image
                  className={styles.rectangleIcon}
                  src="/images/industries/electronics/solutions/hvac-systems.webp"
                  width={323}
                  height={194}
                  sizes="100vw"
                  alt="Technician working at an electronics manufacturing workstation"
                />
                <div className={styles.frameDiv}>
                  <b className={styles.overheadSingleGirder}>
                    HVAC &amp; Air Handling Systems:
                  </b>
                  <div className={styles.economicalOverheadCrane}>
                    Temperature and humidity control engineered specifically for
                    electronics manufacturing environments.
                  </div>
                </div>
              </div>
              <div className={styles.rectangleGroup}>
                <Image
                  className={styles.rectangleIcon}
                  src="/images/industries/electronics/solutions/mep-infrastructure.webp"
                  width={323}
                  height={194}
                  sizes="100vw"
                  alt="Industrial MEP piping and utility infrastructure"
                />
                <div className={styles.frameDiv}>
                  <b className={styles.overheadSingleGirder}>
                    MEP &amp; Utility Infrastructure:
                  </b>
                  <div className={styles.economicalOverheadCrane}>
                    Electrical, mechanical, and plumbing systems built for
                    uninterrupted, high-reliability plant operations.
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent3}>
                <Image
                  className={styles.rectangleIcon}
                  src="/images/industries/electronics/solutions/eot-crane.webp"
                  width={323}
                  height={194}
                  sizes="100vw"
                  alt="Industrial warehouse with overhead EOT crane systems"
                />
                <div className={styles.frameDiv}>
                  <b className={styles.overheadSingleGirder}>
                    EOT Crane &amp; Material Handling Systems:
                  </b>
                  <div className={styles.economicalOverheadCrane}>
                    Overhead crane and internal logistics infrastructure for
                    high-volume production lines.
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
            Every electronics manufacturing facility is custom-engineered around
            your production line, cleanliness classification,
          </span>
          <span className={styles.bannerLine}>
            and utility load, ensuring consistent yield and long-term operational
            reliability for{" "}
            <b className={styles.everyEotCrane}>
              electronics manufacturers across South India.
            </b>
          </span>
        </div>
      </div>
    </div>
  );
}
