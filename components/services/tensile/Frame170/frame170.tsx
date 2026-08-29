'use client';

import type { NextPage } from 'next';
import Image from "next/image";
import styles from './index.module.css';

const solutions = [
	{
		src: "/images/services/tensile/frame170/car-parking-sheds.png",
		title: "Tensile Roofing and Canopies",
		body: "Column-free fabric roofing suitable for commercial and industrial applications",
	},
	{
		src: "/images/services/tensile/frame170/roofing-canopies.png",
		title: "Tensile Car Parking Sheds",
		body: "Weather-resistant, UV-resistant car parking sheds suitable for office buildings, factories, residential buildings, etc.",
	},
	{
		src: "/images/services/tensile/frame170/dome-structures.png",
		title: "Tensile Dome Structures",
		body: "Dome and hypar-shaped fabric structures suitable for architectural purposes",
	},
	{
		src: "/images/services/tensile/frame170/stadium-roofing.png",
		title: "Stadiums and Sports Facilities Roofing",
		body: "Large span tensile membrane roof suitable for stadiums and sports facilities",
	},
	{
		src: "/images/services/tensile/frame170/event-canopies.png",
		title: "Event and Entrances Canopies",
		body: "Custom-made tensile canopies suitable for malls, hotels and events",
	},
	{
		src: "/images/services/tensile/frame170/maintenance-repairs.png",
		title: "Maintenance and Repairs",
		body: "Maintenance and repair of structures periodically",
	},
] as const;

const Frame170: NextPage = () => {
	return (
		<section className={styles.section}>
			<div className={styles.bg} aria-hidden>
				<Image
					className={styles.bgImage}
					src="/images/services/tensile/frame170/grid-bg.png"
					width={1918}
					height={391}
					sizes="100vw"
					alt=""
				/>
			</div>

			<div className={styles.inner}>
				<h2 className={styles.title}>Our Tensile Fabric Structure Solutions</h2>

				<div className={styles.grid}>
					{solutions.map((item) => (
						<article key={item.title} className={styles.card}>
							<Image
								className={styles.cardImage}
								src={item.src}
								width={259}
								height={257}
								sizes="(max-width: 640px) 100vw, (max-width: 1100px) 33vw, 16vw"
								alt={item.title}
							/>
							<div className={styles.cardText}>
								<h3 className={styles.cardTitle}>{item.title}</h3>
								<p className={styles.cardBody}>{item.body}</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default Frame170;
