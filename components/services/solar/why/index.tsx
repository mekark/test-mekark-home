import type { NextPage } from 'next';
import Image from "next/image";
import styles from './index.module.css';

const WhyChooseMekark: NextPage = () => {
	return (
		<div className={styles.whyChooseMekark}>
			<div className={styles.copy1Parent}>
				<Image className={styles.copy1Icon} width={1920} height={1032} sizes="100vw" src="/images/services/solar/why/copy-1.png" alt="" />
				<div className={styles.whyIndustrialClientsChooseParent}>
					<b className={styles.whyIndustrialClientsContainer}>
						<span className={styles.whyIndustrialClientsContainer2}>
							<span>{`Why Industrial Clients `}</span>
							<span className={styles.chooseMekarkFor}>Choose Mekark for Solar</span>
						</span>
					</b>
					<div className={styles.asATrusted}>
						As a trusted industrial construction company and commercial solar contractor, Mekark brings
						<br />
						manufacturing capacity and engineering depth that most solar vendors don&apos;t have in-house.
					</div>
				</div>
				<div className={styles.frameParent}>
					<div className={styles.leftColumnParent}>
						<div className={styles.leftColumn}>
							<div className={styles.div}>
								<div className={styles.container}>
									<div className={styles.div2}>01</div>
								</div>
								<div className={styles.marginalignStretch}>
									<div className={styles.margin}>
										<div className={styles.verticalDivider} />
									</div>
								</div>
								<div className={styles.turnkeySolarEpcParent}>
									<b className={styles.turnkeySolarEpc}>Turnkey Solar EPC</b>
									<div className={styles.weHandleDesign}>We handle design, supply, installation, and commissioning one contract, one accountable team, zero vendor coordination.</div>
								</div>
							</div>
							<div className={styles.div3}>
								<div className={styles.div2}>03</div>
								<div className={styles.marginalignStretch2}>
									<div className={styles.margin}>
										<div className={styles.verticalDivider} />
									</div>
								</div>
								<div className={styles.container2}>
									<div className={styles.southIndiaRegionalExpertiseParent}>
										<b className={styles.southIndiaRegional}>South India Regional Expertise</b>
										<div className={styles.weHandleDesign}>Active project experience across Tamil Nadu, Chennai, Bangalore, Hyderabad, Karnataka, and Andhra Pradesh.</div>
									</div>
								</div>
							</div>
							<div className={styles.div3}>
								<div className={styles.div6}>05</div>
								<div className={styles.marginalignStretch3}>
									<div className={styles.margin}>
										<div className={styles.verticalDivider} />
									</div>
								</div>
								<div className={styles.container3}>
									<div className={styles.longTermSupportAndAmcParent}>
										<b className={styles.longTermSupportAnd}>Long-Term Support and AMC</b>
										<div className={styles.weHandleDesign}>We stay with you after commissioning, offering Annual Maintenance Contracts, performance monitoring, and preventive servicing to protect your investment and keep your system running at peak output.</div>
									</div>
								</div>
							</div>
						</div>
						<div className={styles.rightColumn}>
							<div className={styles.div}>
								<div className={styles.container4}>
									<div className={styles.div2}>02</div>
								</div>
								<div className={styles.marginalignStretch4}>
									<div className={styles.margin}>
										<div className={styles.verticalDivider} />
									</div>
								</div>
								<div className={styles.container5}>
									<div className={styles.inHouseEngineeringTeamParent}>
										<b className={styles.longTermSupportAnd}>In-House Engineering Team</b>
										<div className={styles.xEngineersDesign}>{`X+ engineers design every system for structural compatibility, load requirements, and maximum energy output.`}</div>
									</div>
								</div>
							</div>
							<div className={styles.div3}>
								<div className={styles.div6}>04</div>
								<div className={styles.marginalignStretch5}>
									<div className={styles.margin2}>
										<div className={styles.verticalDivider} />
									</div>
								</div>
								<div className={styles.container6}>
									<div className={styles.isoCertifiedProcessesParent}>
										<b className={styles.turnkeySolarEpc}>ISO-Certified Processes</b>
										<div className={styles.weHandleDesign}>Consistent quality, safety compliance, and documentation across every commercial solar project.</div>
									</div>
								</div>
							</div>
							<div className={styles.div3}>
								<div className={styles.div2}>06</div>
								<div className={styles.marginalignStretch2}>
									<div className={styles.margin2}>
										<div className={styles.verticalDivider} />
									</div>
								</div>
								<div className={styles.container7}>
									<div className={styles.xYearsOfExperienceParent}>
										<b className={styles.turnkeySolarEpc}>{`18+ Years of Experience:`}</b>
										<div className={styles.weHandleDesign}>From factories and warehouses to multi-storey commercial and institutional buildings, we turn every rooftop into a source of clean, cost-saving power.</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.image25Parent}>
						<Image className={styles.image25Icon} width={597} height={388} sizes="(max-width: 1199px) 55vw, 31vw" src="/images/services/solar/why/image-25.png" alt="" />
						<Image className={styles.chatgptImageAug3202604} width={673} height={669} sizes="(max-width: 1199px) 100vw, 70vw" src="/images/services/solar/why/engineers.png" alt="Mekark engineering team on site" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyChooseMekark;
