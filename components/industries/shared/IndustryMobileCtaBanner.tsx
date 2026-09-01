import type { ReactNode } from "react";
import Image from "next/image";
import styles from "./industryMobileCtaBanner.module.css";

export type IndustryCtaBannerAssets = {
	badgeFrame: string;
	sectionInner: string;
	worker: string;
	arrow: string;
};

export type IndustryMobileCtaBannerProps = {
	title: ReactNode;
	subtitle: ReactNode;
	buttonText: string;
	buttonHref?: string;
	workerAlt?: string;
	assets: IndustryCtaBannerAssets;
	className?: string;
	/** Shorter worker crop — head through notebook, hide overflow below */
	compactWorker?: boolean;
};

export function IndustryMobileCtaBanner({
	title,
	subtitle,
	buttonText,
	buttonHref = "/#enquiry",
	workerAlt = "Mekark industry expert",
	assets,
	className,
	compactWorker = false,
}: IndustryMobileCtaBannerProps) {
	return (
		<div
			className={[
				styles.root,
				compactWorker && styles.compactWorker,
				className,
			]
				.filter(Boolean)
				.join(" ")}
		>
			<div className={styles.textBlock}>
				<div className={styles.title}>{title}</div>
				<div className={styles.subtitle}>{subtitle}</div>
			</div>
			<a href={buttonHref} className={styles.button}>
				<b className={styles.buttonText}>{buttonText}</b>
				<span className={styles.buttonIcon}>
					<Image
						className={styles.buttonIconImg}
						src={assets.arrow}
						width={16.7}
						height={13.3}
						sizes="16px"
						alt=""
					/>
				</span>
			</a>
			<div className={styles.workerVisual}>
				<Image
					className={styles.badgeFrame}
					src={assets.badgeFrame}
					width={180}
					height={180}
					sizes="(max-width: 768px) 125px, 145px"
					alt=""
				/>
				<Image
					className={styles.sectionInner}
					src={assets.sectionInner}
					width={317}
					height={213}
					sizes="88vw"
					alt=""
				/>
				<Image
					className={styles.worker}
					src={assets.worker}
					width={491}
					height={323}
					sizes="(max-width: 768px) 96vw, 92vw"
					alt={workerAlt}
				/>
			</div>
		</div>
	);
}

/** Helper for multi-line subtitle matching logistics layout */
export function IndustryCtaSubtitleLines({ lines }: { lines: string[] }) {
	return (
		<>
			{lines.map((line) => (
				<span key={line} className={styles.subtitleLine}>{line}</span>
			))}
		</>
	);
}
