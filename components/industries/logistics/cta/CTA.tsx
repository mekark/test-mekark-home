import type { NextPage } from 'next';
import Image from "next/image";
import styles from './index.module.css';


const CTA: NextPage = () => {
  	return (
    		<div className={styles.cta}>
      			<div className={styles.section}>
        				<div className={styles.planningAWarehouseOrLogistParent}>
          					<div className={styles.planningAWarehouse}>Planning a Warehouse or Logistics Facility in South India?<br />Your Slot Won&apos;t Stay Open Long. </div>
          					<div className={styles.mekarksProjectCalendar}>{`Mekark's project calendar fills up fast. Our team will assess your requirements, recommend the right pre-engineered warehouse solution, and deliver a transparent budgetary estimate within 48 hours - no obligation, just honest expert advice. `}</div>
        				</div>
        				<div className={styles.sectionChild} />
        				<a href="#enquiry" className={styles.cta2}>
          					<b className={styles.talkToOur}>Talk to Our Expert</b>
          					<div className={styles.component4}>
            						<Image className={styles.vectorIcon} src="/images/industries/logistics/CTA/arrow-icon.svg" width={16.7} height={13.3} sizes="100vw" alt="" />
          					</div>
        				</a>
        				<Image className={styles.sectionItem} src="/images/industries/logistics/CTA/badge-frame.svg" width={180} height={180} sizes="100vw" alt="" />
        				<Image className={styles.sectionInner} src="/images/industries/logistics/CTA/section-inner.svg" width={317} height={213} sizes="100vw" alt="" />
        				<Image className={styles.eotCta1} src="/images/industries/logistics/CTA/eot-cta-worker.png" width={491} height={323} sizes="100vw" alt="" />
      			</div>
      			<div className={styles.frameParent}>
        				<div className={styles.imageWrapper}>
          					<Image className={styles.imageIcon} src="/images/industries/logistics/CTA/warehouse-forklift.png" width={937} height={636} sizes="100vw" alt="" />
        				</div>
        				<div className={styles.frameChild} />
      			</div>
      			<div className={styles.frameGroup}>
        				<div className={styles.divsvcIconParent}>
          					<div className={styles.divsvcIcon}>
            						<Image className={styles.lucidedraftingCompassIcon} src="/images/industries/logistics/CTA/drafting-compass-icon.svg" width={25.9} height={25.9} sizes="100vw" alt="" />
          					</div>
          					<div className={styles.inHouseDesignEngineeringParent}>
            						<div className={styles.inHouseDesign}>{`In-House Design & Engineering`}</div>
            						<div className={styles.everyPreEngineeredWarehouse}>Every pre-engineered warehouse structure is precision-engineered by our in-house structural engineers, architects, and MEP teams under one roof.</div>
          					</div>
        				</div>
        				<div className={styles.divsvcIconParent}>
          					<div className={styles.divsvcIcon}>
            						<Image className={styles.lucidedraftingCompassIcon} src="/images/industries/logistics/CTA/drafting-compass-icon.svg" width={25.9} height={25.9} sizes="100vw" alt="" />
          					</div>
          					<div className={styles.inHouseDesignEngineeringParent}>
            						<div className={styles.inHouseDesign}>On-Time, On-Budget Delivery</div>
            						<div className={styles.factoryControlledFabrication}>Factory-controlled fabrication means predictable timelines and no cost surprises, making Mekark a reliable distribution centre builder.</div>
          					</div>
        				</div>
        				<div className={styles.divsvcIconParent}>
          					<div className={styles.divsvcIcon}>
            						<Image className={styles.lucidedraftingCompassIcon} src="/images/industries/logistics/CTA/drafting-compass-icon.svg" width={25.9} height={25.9} sizes="100vw" alt="" />
          					</div>
          					<div className={styles.inHouseDesignEngineeringParent}>
            						<div className={styles.inHouseDesign}>Large-Scale Manufacturing Capacity</div>
            						<div className={styles.everyPreEngineeredWarehouse}>As a leading PEB warehouse producer in South India, Mekark manufactures up to 3,000 MT per month at a 6,00,000 sq.ft. fully automatic facility, with no third-party intervention.</div>
          					</div>
        				</div>
        				<div className={styles.divsvcIconParent}>
          					<div className={styles.divsvcIcon}>
            						<Image className={styles.lucidedraftingCompassIcon} src="/images/industries/logistics/CTA/drafting-compass-icon.svg" width={25.9} height={25.9} sizes="100vw" alt="" />
          					</div>
          					<div className={styles.inHouseDesignEngineeringParent}>
            						<div className={styles.inHouseDesign}>Regulatory Compliant Engineering</div>
            						<div className={styles.everyPreEngineeredWarehouse}>All structures meet IS 800:2007, IS 875 (wind loads), and IS 1893 (seismic zones II-V), with fire ratings per NBC or client requirement.</div>
          					</div>
        				</div>
        				<div className={styles.divsvcIconParent}>
          					<div className={styles.divsvcIcon}>
            						<Image className={styles.lucidedraftingCompassIcon} src="/images/industries/logistics/CTA/drafting-compass-icon.svg" width={25.9} height={25.9} sizes="100vw" alt="" />
          					</div>
          					<div className={styles.inHouseDesignEngineeringParent}>
            						<div className={styles.inHouseDesign}>Regional Project Execution Across South India</div>
            						<div className={styles.asATrusted}>As a trusted warehouse shed manufacturer that South India businesses rely on, our teams deliver industrial warehouse construction across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala, backed by an integrated design-to-erection process.</div>
          					</div>
        				</div>
        				<div className={styles.divsvcIconParent}>
          					<div className={styles.divsvcIcon}>
            						<Image className={styles.lucidedraftingCompassIcon} src="/images/industries/logistics/CTA/drafting-compass-icon.svg" width={25.9} height={25.9} sizes="100vw" alt="" />
          					</div>
          					<div className={styles.inHouseDesignEngineeringParent}>
            						<div className={styles.inHouseDesign}>Long-Lasting Structural Performance</div>
            						<div className={styles.preEngineeredWarehouseBuild}>Pre-engineered warehouse buildings are built for a 50+ year service life, with Zincalume/Galvalume cladding backed by a 25-year coating guarantee.</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.frameParent3}>
        				<div className={styles.whyWarehousesFromMekarkAreWrapper}>
          					<b className={styles.whyWarehousesFrom}>Why Warehouses from Mekark Are the Better Choice</b>
        				</div>
        				<div className={styles.mekarkIsOne}>Mekark is one of South India&apos;s most trusted pre-engineered warehouse building manufacturers, offering in-house design, manufacturing, and erection capability.</div>
      			</div>
    		</div>);
};

export default CTA;
