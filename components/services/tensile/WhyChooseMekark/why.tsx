'use client';

import type { NextPage } from 'next';
import Image from "next/image";
import {
  MOBILE_FEATURE_BODY_CLASS,
  MOBILE_FEATURE_NUMBER_CLASS,
  MOBILE_FEATURE_TITLE_CLASS,
  PEB_WHY_CHOOSE_BENEFIT_ROW_CLASS,
  PEB_WHY_CHOOSE_DESCRIPTION_CLASS,
} from "@/components/services/serviceMobileCivilTemplate";
import styles from './index.module.css';

const TENSILE_WHY_CHOOSE_MOBILE_BG =
  "linear-gradient(269.82deg, rgb(255, 255, 255) 35.03%, rgba(255, 255, 255, 0) 99.35%), linear-gradient(90deg, rgb(230, 230, 230), rgb(230, 230, 230))";

const TENSILE_WHY_CHOOSE_HERO_FADE =
  "linear-gradient(180.23deg, rgba(220, 220, 220, 0) 0.54%, rgba(240, 240, 240, 0.762) 50.05%, rgb(248, 248, 248) 84.11%)";

const TENSILE_WHY_CHOOSE_PORTRAIT_FADE =
  "linear-gradient(180deg, rgba(248,248,248,0) 0%, rgba(248,248,248,0.45) 42%, #f8f8f8 100%)";

function MobilePortrait() {
	return (
		<div className="relative -mb-[48px] mx-auto h-[340px] w-full max-w-[358px] overflow-hidden">
			<div
				className="pointer-events-none absolute inset-x-0 top-[6px] z-0 flex justify-center"
				aria-hidden
			>
				<Image
					src="/images/arrow.webp"
					alt=""
					width={587}
					height={534}
					className="h-[min(300px,80vw)] w-auto max-w-none object-contain opacity-95"
					sizes="320px"
					priority
				/>
			</div>

			<div className="pointer-events-none absolute inset-x-0 bottom-0 top-[24px] z-[1] flex items-end justify-center">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src="/images/services/tensile/why/product.webp"
					alt="Mekark tensile structures engineer"
					className="h-[min(320px,105%)] w-auto max-w-[122%] object-contain object-bottom"
				/>
			</div>

			<div
				className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[38%]"
				style={{ backgroundImage: TENSILE_WHY_CHOOSE_PORTRAIT_FADE }}
				aria-hidden
			/>
		</div>
	);
}

const features = [
	{
		num: "01",
		title: "Turnkey Execution:",
		body: "From membrane design to fabrication to installation, a single point of accountability for your entire tensile structure project.",
	},
	{
		num: "02",
		title: "Premium Fabric Sourcing:",
		body: "PTFE and ETFE membranes selected for UV resistance, fire retardancy, and long-term weatherproofing.",
	},
	{
		num: "03",
		title: "In-House Engineering Team:",
		body: "175+ engineers using ETABS, AutoCAD, and STAAD.Pro for wind-load and tension analysis on every tensile canopy and dome design.",
	},
	{
		num: "04",
		title: "ISO & Green Certified:",
		body: "Consistent quality, safety, and sustainability compliance across every tensile fabric project.",
	},
	{
		num: "05",
		title: "18+ Years of Industry Experience:",
		body: "A proven track record across tensile car parking sheds, event canopies, sports facility roofing, and architectural entrance structures.",
	},
	{
		num: "06",
		title: "Faster, Lightweight Builds:",
		body: "Tensile structures typically install faster than conventional roofing, with less structural steel and lower foundation loads.",
	},
] as const;

const FeatureItem = ({
	num,
	title,
	body,
}: {
	num: string;
	title: string;
	body: string;
}) => (
	<div className={styles.feature}>
		<span className={styles.featureNum}>{num}</span>
		<span className={styles.featureDivider} aria-hidden />
		<div className={styles.featureText}>
			<b className={styles.featureTitle}>{title}</b>
			<p className={styles.featureBody}>{body}</p>
		</div>
	</div>
);

function MobileFeatureItem({
	num,
	title,
	body,
}: {
	num: string;
	title: string;
	body: string;
}) {
	return (
		<article className={`${PEB_WHY_CHOOSE_BENEFIT_ROW_CLASS} drop-shadow-none`}>
			<span
				className={`w-[50px] shrink-0 pt-1 whitespace-nowrap ${MOBILE_FEATURE_NUMBER_CLASS}`}
			>
				{num}
			</span>
			<span
				className="w-px shrink-0 self-stretch bg-[rgba(204,16,32,0.4)]"
				aria-hidden
			/>
			<div className="flex min-w-0 flex-1 flex-col gap-2 pt-1 text-left">
				<h3 className={MOBILE_FEATURE_TITLE_CLASS}>{title}</h3>
				<p className={`${MOBILE_FEATURE_BODY_CLASS} text-[#555]`}>{body}</p>
			</div>
		</article>
	);
}

const WhyChooseMekark: NextPage = () => {
	const left = [features[0], features[2], features[4]];
	const right = [features[1], features[3], features[5]];

	return (
		<section className={styles.section}>
			<div className={`${styles.bg} max-lg:hidden`} aria-hidden>
				<Image
					className={styles.bgImage}
					src="/images/services/tensile/why/background.webp"
					width={1920}
					height={1032}
					sizes="100vw"
					alt="Tensile structure project site background"
				/>
			</div>

			<div
				className="relative overflow-visible px-5 pt-6 pb-0 lg:hidden"
				style={{ backgroundImage: TENSILE_WHY_CHOOSE_MOBILE_BG }}
			>
				<div className="relative mx-auto flex w-full max-w-[358px] flex-col gap-2">
					<header className={`${styles.header} !mb-0`}>
						<h2 className={styles.title}>
							<span className="block text-[#111]">
								Why Clients <span className="text-[#e50818]">Choose</span>
							</span>
							<span className="block text-[#111]">
								<span className="text-[#e50818]">Mekark</span> for Tensile
							</span>
							<span className="block text-[#111]">Structures</span>
						</h2>

						<p className={PEB_WHY_CHOOSE_DESCRIPTION_CLASS}>
							As a trusted tensile structure contractor serving South India, Mekark brings
							in-house engineering and fabrication capability that most tensile contractors
							outsource.
						</p>
					</header>

					<MobilePortrait />
				</div>

				<div className={styles.mobileFeatures}>
					<div className="relative overflow-hidden bg-[#f8f8f8] px-5 pt-8 pb-16">
						<div
							className="pointer-events-none absolute inset-x-0 top-0 h-[72px] -translate-y-[32px]"
							style={{ backgroundImage: TENSILE_WHY_CHOOSE_HERO_FADE }}
							aria-hidden
						/>
						<div
							className="pointer-events-none absolute bottom-0 left-[-56px] h-[270px] w-[503px] max-w-none"
							aria-hidden
						>
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src="/images/services/tensile/why/background.webp"
								alt=""
								className="size-full object-cover object-bottom"
							/>
						</div>
						<div className="relative z-10 mx-auto flex w-full max-w-[358px] flex-col">
							{features.map((item) => (
								<MobileFeatureItem key={`m-${item.num}`} {...item} />
							))}
						</div>
					</div>
				</div>
			</div>

			<header className={`${styles.header} !hidden lg:!block`}>
				<h2 className={styles.title}>
					<span className={styles.titleMuted}>Why Clients </span>
					<span className={styles.titleAccent}>Choose Mekark</span>
					<span className={styles.titleMuted}> for Tensile Structures</span>
				</h2>
				<p className={`${styles.subtitle} service-section-description`}>
					<span>
						As a trusted tensile structure contractor serving South India, Mekark brings
					</span>
					<span>
						in-house engineering and fabrication capability that most tensile contractors outsource.
					</span>
				</p>
			</header>

			<div className={`${styles.content} !hidden lg:!block`}>
				<div className={styles.leftColumn}>
					{left.map((item) => (
						<FeatureItem key={item.num} {...item} />
					))}
				</div>

				<div className={styles.media}>
					<Image
						className={styles.watermark}
						src="/images/services/tensile/why/logo-watermark.webp"
						width={587}
						height={534}
						sizes="(max-width: 900px) 70vw, 40vw"
						alt="Mekark logo watermark"
					/>
					<Image
						className={styles.product}
						src="/images/services/tensile/why/product.webp"
						width={795}
						height={903}
						sizes="(max-width: 900px) 80vw, 45vw"
						alt="Mekark tensile structures engineer"
						priority
					/>
				</div>

				<div className={styles.rightColumn}>
					{right.map((item) => (
						<FeatureItem key={item.num} {...item} />
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyChooseMekark;
