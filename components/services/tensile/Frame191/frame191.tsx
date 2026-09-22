'use client';

import type { NextPage } from 'next';
import Image from "next/image";
import { motion } from "framer-motion";
import { ServiceMidCtaTitle } from "@/components/services/ServiceMidCtaTitle";
import { ServiceMidCtaLine } from "@/components/services/ServiceMidCtaLine";
import { useTensileEnquiry } from "@/components/services/tensile/TensileEnquiryProvider";
import styles from './index.module.css';

const easeOut = [0.22, 1, 0.36, 1] as const;

const Frame191: NextPage = () => {
	const { openEnquiry } = useTensileEnquiry();

	return (
		<section className="relative mx-auto w-full max-w-[1920px] overflow-visible bg-white px-4 py-8 sm:px-8 sm:py-10 lg:px-[80px] lg:pt-[72px] lg:pb-12">
			{/* Mobile — MEP CtaBanner pattern */}
			<motion.div
				className="relative mx-auto flex h-[530px] w-full max-w-[358px] flex-col overflow-hidden rounded-[20px] bg-[linear-gradient(94.75deg,#8B0C11_6.54%,#ED1D23_108.89%)] lg:hidden"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.25 }}
				transition={{ duration: 0.6, ease: easeOut }}
			>
				<div className="relative z-10 flex flex-col gap-3 px-6 pt-5">
					<h2 className="w-full max-w-[320px] font-manrope text-[28px] font-extrabold leading-[32px] text-white">
						<span className="block">Planning a Tensile</span>
						<span className="block">
							<span>Roofing or </span>
							<span className="text-black">Canopy Project?</span>
						</span>
					</h2>

					<p className="font-manrope text-sm font-medium leading-normal text-[#ccc6c6]">
						Get a free consultation and project estimate from Mekark&apos;s tensile
						structure engineering team.
					</p>

					<button
						type="button"
						onClick={openEnquiry}
						className="flex w-full cursor-pointer items-center justify-center gap-[9.623px] rounded-full border-0 bg-white px-6 py-[14.435px] text-sm font-bold leading-5 text-[#E5091F] transition-transform active:scale-[0.98]"
					>
						Request a Free Quote
						<span className="relative size-[18.758px] shrink-0">
							<Image
								src="/images/services/tensile/frame191/arrow.svg"
								alt="Arrow icon"
								fill
								className="object-contain"
								sizes="19px"
							/>
						</span>
					</button>
				</div>

				<div aria-hidden className="min-h-5 flex-1" />

				<div className="pointer-events-none relative z-[1] h-[250px] shrink-0 overflow-hidden rounded-bl-[20px] rounded-br-[20px]">
					<Image
						src="/images/services/tensile/frame191/hero-photo.webp"
						alt="Tensile structure project consultation"
						fill
						className="object-cover object-[center_20%]"
						sizes="358px"
						priority
					/>
				</div>
			</motion.div>

			{/* Desktop */}
			<div className={`${styles.wrap} !hidden lg:!block`}>
				<div className={styles.banner}>
					<div className={styles.copy}>
						<ServiceMidCtaLine
							stretch
							className="hidden left-[104px] lg:block lg:inset-y-auto lg:top-1/2 lg:h-[264px] lg:-translate-y-1/2"
						/>
						<ServiceMidCtaTitle
							line1="Planning a Tensile"
							line2="Roofing or Canopy Project?"
							size="medium"
							className="!max-w-full"
							scaledCanvas
						/>

						<p className={styles.subtitle}>
							Get a free consultation and project estimate from Mekark&apos;s tensile structure engineering team.
						</p>

						<button
							type="button"
							onClick={openEnquiry}
							className={styles.cta}
						>
							<span className={styles.ctaLabel}>Request a Free Quote</span>
							<span className={styles.ctaIcon} aria-hidden>
								<Image
									src="/images/services/tensile/frame191/arrow.svg"
									alt="Arrow icon"
									fill
									className={styles.ctaIconImg}
									sizes="19px"
								/>
							</span>
						</button>
					</div>

					<div className={styles.media}>
						<Image
							className={styles.heroPhoto}
							src="/images/services/tensile/frame191/hero-photo.webp"
							width={779}
							height={345}
							sizes="(max-width: 900px) 100vw, 45vw"
							alt="Tensile structure project consultation"
						/>
						<Image
							className={styles.illustration}
							src="/images/services/tensile/frame191/illustration.webp"
							width={397}
							height={414}
							sizes="(max-width: 900px) 50vw, 25vw"
							alt="Tensile structure engineering illustration"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Frame191;
