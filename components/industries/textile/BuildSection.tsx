import Image from "next/image";
import styles from "./BuildSection.module.css";

export default function BuildSection() {
	return (
		<section
			id="what-we-build"
			className={styles.completeEotCraneSolutionsWrapper}
		>
			<div className={styles.completeEotCraneSolutions}>
				<div className={styles.leftStickyOuter}>
					<div className={styles.leftSticky}>
						<h2 className={styles.ourSolutionsHeading}>Our Solutions</h2>
						<h3 className={styles.completeEotCrane}>
							<span className={styles.subtitleLine}>
								Complete Textile Factory Construction
							</span>
							<span className={styles.subtitleLine}>
								Solutions, Engineered End-to-End
							</span>
						</h3>
						<p className={styles.asALeading}>
							As a full-service, turnkey EPC textile factory construction
							company in South India, Mekark designs, fabricates, and erects
							pre-engineered steel structures tailored to your operational
							needs and span requirements.
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
								alt=""
							/>
							<div className={styles.frameContainer}>
								<Image
									className={styles.rectangleIcon}
									src="/images/industries/textile/solutions/spinning.png"
									width={323}
									height={194}
									sizes="100vw"
									alt="Spinning Mill Construction"
								/>
								<div className={styles.frameDiv}>
									<b className={styles.overheadSingleGirder}>
										Spinning Mill Construction:
									</b>
									<div className={styles.economicalOverheadCrane}>
										Purpose-built buildings with high clear-height spans,
										optimised column spacing for ring frames and open-end
										rotors, and integrated MEP systems for humidity and dust
										control.
									</div>
								</div>
							</div>
							<div className={styles.rectangleContainer}>
								<Image
									className={styles.rectangleIcon}
									src="/images/industries/textile/solutions/weaving.png"
									width={323}
									height={194}
									sizes="100vw"
									alt="Weaving Factory and Shed Construction"
								/>
								<div className={styles.frameDiv}>
									<b className={styles.overheadSingleGirder}>
										Weaving Factory &amp; Shed Construction:
									</b>
									<div className={styles.economicalOverheadCrane}>
										Wide-span, column-free sheds for shuttle and shuttleless
										looms, with north-light roof systems for even daylight
										diffusion critical for fabric quality.
									</div>
								</div>
							</div>
							<div className={styles.rectangleParent}>
								<Image
									className={styles.rectangleIcon}
									src="/images/industries/textile/solutions/garment.png"
									width={323}
									height={194}
									sizes="100vw"
									alt="Garment Factory and Apparel Plant"
								/>
								<div className={styles.frameDiv}>
									<b className={styles.overheadSingleGirder}>
										Garment Factory &amp; Apparel Plant:
									</b>
									<div className={styles.economicalOverheadCrane}>
										Single- and multi-floor garment units with fire suppression
										and wide sewing-floor spans, built to Factory Act and social
										compliance audit standards.
									</div>
								</div>
							</div>
							<div className={styles.rectangleParent2}>
								<Image
									className={styles.rectangleIcon}
									src="/images/industries/textile/solutions/dyeing.png"
									width={323}
									height={194}
									sizes="100vw"
									alt="Dyeing, Printing and Processing Units"
								/>
								<div className={styles.frameDiv}>
									<b className={styles.overheadSingleGirder}>
										Dyeing, Printing &amp; Processing Units:
									</b>
									<div className={styles.economicalOverheadCrane}>
										Robust wet-processing structures with corrosion-resistant
										flooring, ETP/STP integration, and steam piping for zero
										discharge compliance.
									</div>
								</div>
							</div>
							<div className={styles.rectangleGroup}>
								<Image
									className={styles.rectangleIcon}
									src="/images/industries/textile/solutions/composite.png"
									width={323}
									height={194}
									sizes="100vw"
									alt="Composite Textile Mills"
								/>
								<div className={styles.frameDiv}>
									<b className={styles.overheadSingleGirder}>
										Composite Textile Mills:
									</b>
									<div className={styles.economicalOverheadCrane}>
										Turnkey construction covering ginning, spinning, weaving,
										dyeing and finishing under one campus with power substations
										and admin blocks.
									</div>
								</div>
							</div>
							<div className={styles.rectangleParent3}>
								<Image
									className={styles.rectangleIcon}
									src="/images/industries/textile/solutions/peb.png"
									width={323}
									height={194}
									sizes="100vw"
									alt="Pre-Engineered Buildings"
								/>
								<div className={styles.frameDiv}>
									<b className={styles.overheadSingleGirder}>
										Pre-Engineered Buildings (PEB):
									</b>
									<div className={styles.economicalOverheadCrane}>
										Factory-fabricated steel structures erected 50% faster than
										conventional construction, ideal for greenfield textile units
										and brownfield plant expansions.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
