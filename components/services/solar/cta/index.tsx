import type { NextPage } from 'next';
import Image from "next/image";
import styles from './index.module.css';

const Cta: NextPage = () => {
	return (
		<div className={styles.frameParent}>
			<div className={styles.grid1Parent}>
				<Image className={styles.grid1Icon} width={1918} height={391} sizes="100vw" src="/images/services/solar/CTA/grid-1-1.png" alt="" />
				<div className={styles.ourCommercialSolarSolutionsWrapper}>
					<b className={styles.ourCommercialSolar}>Our Commercial Solar Solutions</b>
				</div>
				<div className={styles.frameContainer}>
					<div className={styles.frameParent2}>
						<div className={styles.rectangleParent5}>
							<Image className={styles.rectangleIcon} width={473} height={277} sizes="100vw" src="/images/services/solar/CTA/rectangle-15.png" alt="Rooftop solar for factories and warehouses" />
							<div className={styles.rooftopSolarForFactoriesAnParent}>
								<div className={styles.rooftopSolarFor}>Rooftop Solar for Factories and Warehouses</div>
								<div className={styles.highCapacitySystemsEngineer}>High-capacity systems engineered for industrial roof structures</div>
							</div>
						</div>
						<div className={styles.rectangleParent5}>
							<div className={styles.rectangleImageWrap}>
								<Image className={styles.rectangleIconOffGrid} width={473} height={277} sizes="100vw" src="/images/services/solar/CTA/rectangle-16.png" alt="Off-grid solar systems" />
							</div>
							<div className={styles.rooftopSolarForFactoriesAnParent}>
								<div className={styles.rooftopSolarFor}>Off-Grid Solar Systems</div>
								<div className={styles.fullyIndependentPower}>Fully independent power supply for remote industrial facilities</div>
							</div>
						</div>
					</div>
					<div className={styles.frameParent2}>
						<div className={styles.rectangleParent7}>
							<Image className={styles.rectangleIcon} width={473} height={277} sizes="100vw" src="/images/services/solar/CTA/rectangle-16-1.png" alt="Ground-mounted solar power plants" />
							<div className={styles.rooftopSolarForFactoriesAnParent}>
								<div className={styles.rooftopSolarFor}>Ground-Mounted Solar Power Plants</div>
								<div className={styles.optimizedForBusinesses}>Optimized for businesses with available open land</div>
							</div>
						</div>
						<div className={styles.rectangleParent5}>
							<div className={styles.rectangleImageWrap}>
								<Image className={styles.rectangleIconAudit} width={473} height={277} sizes="100vw" src="/images/services/solar/CTA/commercial-solar-energy-audit.png" alt="Commercial solar energy audit" />
							</div>
							<div className={styles.rooftopSolarForFactoriesAnParent}>
								<div className={styles.rooftopSolarFor}>Commercial Solar Energy Audit</div>
								<div className={styles.detailedAssessmentOf}>{` Detailed assessment of your current consumption and savings potential `}</div>
							</div>
						</div>
					</div>
					<div className={styles.frameParent2}>
						<div className={styles.rectangleParent5}>
							<Image className={styles.rectangleIcon} width={473} height={277} sizes="100vw" src="/images/services/solar/CTA/rectangle-16-2.png" alt="Solar and battery storage systems" />
							<div className={styles.rooftopSolarForFactoriesAnParent}>
								<div className={styles.rooftopSolarFor}>Solar and Battery Storage Systems</div>
								<div className={styles.uninterruptedPowerSupply}>Uninterrupted power supply for manufacturing and cold storage units</div>
							</div>
						</div>
						<div className={styles.rectangleParent5}>
							<div className={styles.rectangleImageWrap}>
								<Image className={styles.rectangleIconOnGrid} width={473} height={277} sizes="100vw" src="/images/services/solar/CTA/on-grid-net-metering.png" alt="On-grid solar with net metering" />
							</div>
							<div className={styles.rooftopSolarForFactoriesAnParent}>
								<div className={styles.rooftopSolarFor}>On-Grid Solar with Net Metering</div>
								<div className={styles.fullyIndependentPower}>{`Stay connected to the grid and reduce your electricity bill `}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.sectionContainer}>
				<div className={styles.section2}>
					<div className={styles.frameParent6}>
						<div className={styles.planningASolarPowerPlantFParent}>
							<div className={styles.planningASolarContainer}>
								<span className={styles.trustedAcrossIndustrialContainer2}>
									<span className={styles.planningASolar}>Planning a Solar Power Plant for</span>
									<br />
									<span className={styles.yourFactoryOr}>Your Factory or Warehouse?</span>
								</span>
							</div>
							<div className={styles.getAFree}>
								Get a free consultation and system estimate from
								<br /> Mekark&apos;s commercial solar engineering team.
							</div>
						</div>
						<a href="/#enquiry" className={styles.cta}>
							<b className={styles.requestAFree}>Request a Free Quote</b>
							<div className={styles.component4}>
								<Image className={styles.vectorIcon} width={12} height={9} sizes="100vw" src="/images/services/solar/CTA/component-4.svg" alt="" />
							</div>
						</a>
					</div>
					<div className={styles.sectionInner} />
					<div className={styles.layer2CopyCta1} />
					<div className={styles.sectionChild2} />
					<Image className={styles.solarCta1} width={786} height={415} sizes="100vw" src="/images/services/solar/CTA/solar-cta-1.png" alt="" />
				</div>
			</div>
			<div className={styles.grid1Group}>
				<Image className={styles.grid1Icon2} width={1918} height={391} sizes="100vw" src="/images/services/solar/CTA/grid-1-2.png" alt="" />
				<Image className={styles.grid1Icon3} width={1918} height={349} sizes="100vw" src="/images/services/solar/CTA/grid-1-3.png" alt="" />
				<div className={styles.grid1Container}>
					<b className={styles.howWeDeliver}>How We Deliver Your Solar Project</b>
					<div className={styles.frameParent5}>
						<div className={`${styles.parent} ${styles.stepItem}`} data-step="1">
							<div className={styles.div}>01</div>
							<div className={styles.siteAssessmentParent}>
								<div className={styles.siteAssessment}>Site Assessment</div>
								<div className={styles.ourEngineersVisit}>
									Our engineers visit your facility, review electricity bills, and
									<br />
									assess roof or land area.
								</div>
							</div>
						</div>
						<Image className={styles.lineIcon} width={37} height={20} sizes="100vw" src="/images/services/solar/CTA/line-2.svg" alt="" />
						<div className={`${styles.group} ${styles.stepItem}`} data-step="2">
							<div className={styles.div}>02</div>
							<div className={styles.systemDesignAndApprovalParent}>
								<div className={styles.rooftopSolarFor}>System Design and Approval</div>
								<div className={styles.customSolarDesign}>
									Custom solar design shared for your review and
									<br />
									sign-off before work begins.
								</div>
							</div>
						</div>
						<Image className={styles.lineIcon} width={37} height={20} sizes="100vw" src="/images/services/solar/CTA/line-3.svg" alt="" />
						<div className={`${styles.group} ${styles.stepItem}`} data-step="3">
							<div className={styles.div}>03</div>
							<div className={styles.siteAssessmentParent}>
								<div className={styles.rooftopSolarFor}>Supply and Procurement</div>
								<div className={styles.highQualityPanelsInverters}>
									High-quality panels, inverters, and mounting structures sourced and delivered.
								</div>
							</div>
						</div>
						<Image className={styles.lineIcon} width={37} height={20} sizes="100vw" src="/images/services/solar/CTA/line-4.svg" alt="" />
						<div className={`${styles.rooftopSolarForFactoriesAnParent} ${styles.stepItem}`} data-step="4">
							<div className={styles.div}>04</div>
							<div className={styles.siteAssessmentParent}>
								<div className={styles.rooftopSolarFor}>Installation and Commissioning</div>
								<div className={styles.onSiteInstallationWith}>On-site installation with full testing and  performance verification.</div>
							</div>
						</div>
						<Image className={styles.lineIcon} width={37} height={20} sizes="100vw" src="/images/services/solar/CTA/line-2.svg" alt="" />
						<div className={`${styles.rooftopSolarForFactoriesAnParent} ${styles.stepItem}`} data-step="5">
							<div className={styles.div}>05</div>
							<div className={styles.siteAssessmentParent}>
								<div className={styles.rooftopSolarFor}>Handover and AMC Support</div>
								<div className={styles.finalDocumentationHandover}>
									Final documentation, handover, and optional
									<br />
									Annual Maintenance Contract.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cta;
