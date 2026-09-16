import Image from "next/image";
import styles from "./index.module.css";

const CTA = () => {
  return (
    <div className={styles.cta}>
      <div className={styles.section}>
        <div className={styles.planningAWarehouseOrLogistParent}>
          <div className={styles.planningAWarehouse}>
            <span className={styles.line}>
              Planning a Pharmaceutical Manufacturing
            </span>
            <span className={styles.line}>Facility in South India?</span>
          </div>
          <div className={styles.mekarksProjectCalendar}>
            <span className={styles.line}>
              Every week your production line isn&apos;t running is lost revenue
              and regulatory risk. Mekark&apos;s
            </span>
            <span className={styles.line}>
              team will assess your process requirements, cleanroom
              classification, cold chain needs,
            </span>
            <span className={styles.line}>
              and utility load, and deliver a transparent budgetary estimate
              within 24 hours. No
            </span>
            <span className={styles.line}>
              obligation, just honest expert advice.
            </span>
          </div>
        </div>
        <div className={styles.sectionChild} />
        <a href="/#enquiry" className={styles.cta2}>
          <b className={styles.talkToOur}>Talk to Our Expert</b>
          <div className={styles.component4}>
            <Image
              className={styles.vectorIcon}
              src="/images/industries/pharma/cta/arrow-icon.svg"
              width={20}
              height={16}
              sizes="100vw"
              alt=""
            />
          </div>
        </a>
        <div className={styles.workerVisual}>
          <Image
            className={styles.sectionItem}
            src="/images/industries/logistics/CTA/badge-frame.svg"
            width={180}
            height={180}
            sizes="100vw"
            alt=""
          />
          <Image
            className={styles.sectionInner}
            src="/images/industries/logistics/CTA/section-inner.svg"
            width={317}
            height={213}
            sizes="100vw"
            alt=""
          />
          <Image
            className={styles.eotCta1}
            src="/images/industries/logistics/CTA/eot-cta-worker.webp"
            width={491}
            height={323}
            sizes="(max-width: 768px) 96vw, (max-width: 1200px) 92vw, 491px"
            alt="Mekark consultant"
          />
        </div>
      </div>

      <div className={styles.frameParent}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.imageIcon}
            src="/images/industries/pharma/cta/why-pharma.webp"
            width={937}
            height={636}
            sizes="100vw"
            alt="Pharmaceutical cleanroom manufacturing facility"
          />
        </div>
        <div className={styles.frameChild} />
      </div>

      <div className={styles.frameGroup}>
        <div className={styles.divsvcIconParent}>
          <div className={styles.divsvcIcon}>
            <Image
              className={styles.lucidedraftingCompassIcon}
              src="/images/industries/pharma/cta/icons/pen.svg"
              width={26}
              height={26}
              sizes="100vw"
              alt=""
            />
          </div>
          <div className={styles.inHouseDesignEngineeringParent}>
            <div className={styles.inHouseDesign}>
              In-House Engineering-Led Design
            </div>
            <div className={styles.cardDesc}>
              <span className={styles.line}>
                Every facility is designed using STAAD Pro,
              </span>
              <span className={styles.line}>
                TEKLA, and Autodesk by our in-house
              </span>
              <span className={styles.line}>
                structural engineers, MEP teams, and
              </span>
              <span className={styles.line}>cleanroom specialists.</span>
            </div>
          </div>
        </div>

        <div className={styles.divsvcIconParent}>
          <div className={styles.divsvcIcon}>
            <Image
              className={styles.lucidedraftingCompassIcon}
              src="/images/industries/pharma/cta/icons/clock.svg"
              width={26}
              height={26}
              sizes="100vw"
              alt=""
            />
          </div>
          <div className={styles.inHouseDesignEngineeringParent}>
            <div className={styles.inHouseDesign}>
              <span className={styles.line}>30–40% Faster Delivery Than</span>
              <span className={styles.line}>Conventional Construction</span>
            </div>
            <div className={styles.cardDesc}>
              <span className={styles.line}>
                Factory-controlled fabrication and pre-
              </span>
              <span className={styles.line}>engineered methods mean your</span>
              <span className={styles.line}>
                production line reaches validation sooner.
              </span>
            </div>
          </div>
        </div>

        <div className={styles.divsvcIconParent}>
          <div className={styles.divsvcIcon}>
            <Image
              className={styles.lucidedraftingCompassIcon}
              src="/images/industries/pharma/cta/icons/factory.svg"
              width={26}
              height={26}
              sizes="100vw"
              alt=""
            />
          </div>
          <div className={styles.inHouseDesignEngineeringParent}>
            <div className={styles.inHouseDesign}>
              <span className={styles.line}>
                Large-Scale In-House Fabrication
              </span>
              <span className={styles.line}>Capacity</span>
            </div>
            <div className={styles.cardDesc}>
              <span className={styles.line}>
                Mekark fabricates over 3,000 MT of precision
              </span>
              <span className={styles.line}>
                steel per month across four manufacturing
              </span>
              <span className={styles.line}>
                plants in Tamil Nadu, with zero third-party
              </span>
              <span className={styles.line}>dependency.</span>
            </div>
          </div>
        </div>

        <div className={styles.divsvcIconParent}>
          <div className={styles.divsvcIcon}>
            <Image
              className={styles.lucidedraftingCompassIcon}
              src="/images/industries/pharma/cta/icons/swap.svg"
              width={26}
              height={26}
              sizes="100vw"
              alt=""
            />
          </div>
          <div className={styles.inHouseDesignEngineeringParent}>
            <div className={styles.inHouseDesign}>
              True Turnkey, Zero Fragmentation
            </div>
            <div className={styles.cardDesc}>
              <span className={styles.line}>
                Structural steel, civil works, MEP, HVAC,
              </span>
              <span className={styles.line}>
                cleanrooms, and cold storage, one team, one
              </span>
              <span className={styles.line}>
                contract, no blame-shifting between trades.
              </span>
            </div>
          </div>
        </div>

        <div className={styles.divsvcIconParent}>
          <div className={styles.divsvcIcon}>
            <Image
              className={styles.lucidedraftingCompassIcon}
              src="/images/industries/pharma/cta/icons/map-pin.svg"
              width={26}
              height={26}
              sizes="100vw"
              alt=""
            />
          </div>
          <div className={styles.inHouseDesignEngineeringParent}>
            <div className={styles.inHouseDesign}>
              <span className={styles.line}>
                Regional Project Execution Across
              </span>
              <span className={styles.line}>South India</span>
            </div>
            <div className={styles.cardDesc}>
              <span className={styles.line}>
                From Chennai and Coimbatore to Hosur,
              </span>
              <span className={styles.line}>
                Bengaluru, Hyderabad, and Kochi, our teams
              </span>
              <span className={styles.line}>
                deliver pharma factory construction backed by an
              </span>
              <span className={styles.line}>
                integrated design-to-commissioning process.
              </span>
            </div>
          </div>
        </div>

        <div className={styles.divsvcIconParent}>
          <div className={styles.divsvcIcon}>
            <Image
              className={styles.lucidedraftingCompassIcon}
              src="/images/industries/pharma/cta/icons/shield.svg"
              width={26}
              height={26}
              sizes="100vw"
              alt=""
            />
          </div>
          <div className={styles.inHouseDesignEngineeringParent}>
            <div className={styles.inHouseDesign}>
              <span className={styles.line}>GMP, WHO-GMP &amp; USFDA-Ready</span>
              <span className={styles.line}>Construction Standards</span>
            </div>
            <div className={styles.cardDesc}>
              <span className={styles.line}>
                Every facility is delivered to certified regulatory
              </span>
              <span className={styles.line}>
                benchmarks, with documented engineering and
              </span>
              <span className={styles.line}>
                qualification support before a single beam is
              </span>
              <span className={styles.line}>cut.</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.frameParent3}>
        <div className={styles.whyWarehousesFromMekarkAreWrapper}>
          <b className={styles.whyWarehousesFrom}>
            Why Pharma Facilities from Mekark Are the Better Choice
          </b>
        </div>
        <div className={styles.mekarkIsOne}>
          <span className={styles.line}>
            Mekark is one of South India&apos;s most trusted pharmaceutical
            manufacturing facility construction companies, offering in-house
            design,
          </span>
          <span className={styles.line}>
            fabrication, and MEP integration under one roof, not a general
            contractor treating your plant like a generic industrial shed.
          </span>
        </div>
      </div>

      <div className={styles.bottomBanner}>
        <p className={styles.bottomBannerText}>
          The difference isn&apos;t just how fast a pharma plant gets built;{" "}
          <b className={styles.bottomBannerHighlight}>
            it&apos;s whether it clears audit and holds validation from day one.
          </b>{" "}
          That&apos;s the engineering standard Mekark builds to.
        </p>
      </div>
    </div>
  );
};

export default CTA;
