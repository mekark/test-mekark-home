import Image from "next/image";
import styles from "./index.module.css";

const CTA = () => {
  return (
    <div className={styles.cta}>
      <div className={styles.section}>
        <div className={styles.planningAWarehouseOrLogistParent}>
          <div className={styles.planningAWarehouse}>
            <span className={styles.line}>Planning a Food or Beverage</span>
            <span className={styles.line}>
              Manufacturing Facility in South India?
            </span>
          </div>
          <div className={styles.mekarksProjectCalendar}>
            <span className={styles.line}>
              Every week your production line isn&apos;t running is lost revenue
              and perishable inventory at risk.
            </span>
            <span className={styles.line}>
              Mekark&apos;s team will assess your process requirements, hygiene
              class, cold chain needs,
            </span>
            <span className={styles.line}>
              and utility load, and deliver a transparent budgetary estimate
              within 24 hours. No obligation,
            </span>
            <span className={styles.line}>just honest expert advice.</span>
          </div>
        </div>
        <div className={styles.sectionChild} />
        <a href="/#enquiry" className={styles.cta2}>
          <b className={styles.talkToOur}>Talk to Our Expert</b>
          <div className={styles.component4}>
            <Image
              className={styles.vectorIcon}
              src="/images/industries/food-and-beverage/cta/arrow-icon.svg"
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
            alt="Mekark food and beverage facility construction expert"
            priority
          />
        </div>
      </div>

      <div className={styles.frameParent}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.imageIcon}
            src="/images/industries/food-and-beverage/cta/cta-right-img.webp"
            width={937}
            height={636}
            sizes="100vw"
            alt="Food and beverage manufacturing facility"
          />
        </div>
        <div className={styles.frameChild} />
      </div>

      <div className={styles.frameGroup}>
        <div className={styles.divsvcIconParent}>
          <div className={styles.divsvcIcon}>
            <Image
              className={styles.lucidedraftingCompassIcon}
              src="/images/industries/food-and-beverage/cta/icons/pen.svg"
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
                Every facility is designed using STAAD.Pro,
              </span>
              <span className={styles.line}>
                TEKLA, and Autodesk by our in-house
              </span>
              <span className={styles.line}>
                structural engineers, MEP teams, and food-
              </span>
              <span className={styles.line}>grade hygiene specialists.</span>
            </div>
          </div>
        </div>

        <div className={styles.divsvcIconParent}>
          <div className={styles.divsvcIcon}>
            <Image
              className={styles.lucidedraftingCompassIcon}
              src="/images/industries/food-and-beverage/cta/icons/clock.svg"
              width={26}
              height={26}
              sizes="100vw"
              alt=""
            />
          </div>
          <div className={styles.inHouseDesignEngineeringParent}>
            <div className={styles.inHouseDesign}>
              <span className={styles.line}>
                30-40% Faster Delivery Than
              </span>
              <span className={styles.line}>Conventional Construction</span>
            </div>
            <div className={styles.cardDesc}>
              <span className={styles.line}>
                Factory-controlled fabrication and pre-
              </span>
              <span className={styles.line}>engineered methods mean your</span>
              <span className={styles.line}>
                production line starts generating revenue
              </span>
              <span className={styles.line}>sooner.</span>
            </div>
          </div>
        </div>

        <div className={styles.divsvcIconParent}>
          <div className={styles.divsvcIcon}>
            <Image
              className={styles.lucidedraftingCompassIcon}
              src="/images/industries/food-and-beverage/cta/icons/factory.svg"
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
              src="/images/industries/food-and-beverage/cta/icons/swap.svg"
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
                Structural steel, civil works, MEP, HVAC, cold
              </span>
              <span className={styles.line}>
                storage, and food-grade interiors, one team,
              </span>
              <span className={styles.line}>
                one contract, no blame-shifting between
              </span>
              <span className={styles.line}>trades.</span>
            </div>
          </div>
        </div>

        <div className={styles.divsvcIconParent}>
          <div className={styles.divsvcIcon}>
            <Image
              className={styles.lucidedraftingCompassIcon}
              src="/images/industries/food-and-beverage/cta/icons/map-pin.svg"
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
                deliver food and beverage factory construction
              </span>
              <span className={styles.line}>
                backed by an integrated design-to-commissioning
              </span>
              <span className={styles.line}>process.</span>
            </div>
          </div>
        </div>

        <div className={styles.divsvcIconParent}>
          <div className={styles.divsvcIcon}>
            <Image
              className={styles.lucidedraftingCompassIcon}
              src="/images/industries/food-and-beverage/cta/icons/shield.svg"
              width={26}
              height={26}
              sizes="100vw"
              alt=""
            />
          </div>
          <div className={styles.inHouseDesignEngineeringParent}>
            <div className={styles.inHouseDesign}>
              <span className={styles.line}>FSSAI &amp; HACCP-Compliant</span>
              <span className={styles.line}>Construction Standards</span>
            </div>
            <div className={styles.cardDesc}>
              <span className={styles.line}>
                Every facility is delivered to certified hygiene
              </span>
              <span className={styles.line}>
                and safety benchmarks, with documented
              </span>
              <span className={styles.line}>
                engineering before a single beam is
              </span>
              <span className={styles.line}>cut.</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.frameParent3}>
        <div className={styles.whyWarehousesFromMekarkAreWrapper}>
          <b className={styles.whyWarehousesFrom}>
            Why Food &amp; Beverage Facilities from Mekark Are the Better Choice
          </b>
        </div>
        <div className={styles.mekarkIsOne}>
          <span className={styles.line}>
            Mekark is one of South India&apos;s most trusted food &amp; beverage
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
          The difference isn&apos;t just how fast a food plant gets built;{" "}
          <b className={styles.bottomBannerHighlight}>
            it&apos;s whether it protects your product quality and compliance from
            day one.
          </b>{" "}
          That&apos;s the engineering standard Mekark builds to.
        </p>
      </div>
    </div>
  );
};

export default CTA;
