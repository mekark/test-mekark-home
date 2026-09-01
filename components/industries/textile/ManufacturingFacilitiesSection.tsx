"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  MOBILE_FACILITY_CAROUSEL_DESKTOP,
  MOBILE_FACILITY_CAROUSEL_HINT,
  MOBILE_FACILITY_CAROUSEL_ITEM,
  MOBILE_FACILITY_CAROUSEL_TRACK,
} from "@/components/industries/shared/industryMobileFacilityCarousel";

type ImageFit = "cover" | "synthetic-fibre" | "knitting";

type Facility = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageFit?: ImageFit;
};

const IMAGE_SIZE = 257.333;

const facilities: Facility[] = [
  {
    title: "Cotton Spinning Mills",
    description:
      "Optimised column spacing and humidity-controlled environments for ring frame and rotor operations.",
    image:
      "/images/industries/textile/manufacturing-facilities/cotton-spinning.png",
    imageAlt: "Cotton spinning mill with ring frame machinery",
  },
  {
    title: "Synthetic Fibre Spinning Units",
    description:
      "Engineered for high-speed synthetic yarn production with integrated dust and temperature control.",
    image:
      "/images/industries/textile/manufacturing-facilities/synthetic-fibre.png",
    imageAlt: "Synthetic fibre spinning unit with vertical spindles",
    imageFit: "synthetic-fibre",
  },
  {
    title: "Shuttle & Shuttleless Weaving Sheds",
    description:
      "Column-free sheds with north-light roofing for consistent daylight and loom productivity.",
    image:
      "/images/industries/textile/manufacturing-facilities/weaving-sheds.png",
    imageAlt: "Wide weaving shed with looms and north-light roofing",
  },
  {
    title: "Knitting Factory Buildings",
    description:
      "Clear-span facilities for circular and flat knitting machinery with adequate floor loading.",
    image: "/images/industries/textile/manufacturing-facilities/knitting.png",
    imageAlt: "Knitting factory floor with circular knitting machines",
    imageFit: "knitting",
  },
  {
    title: "Garment & Apparel Factories",
    description:
      "Multi-floor sewing and finishing units built to Factory Act standards.",
    image:
      "/images/industries/textile/manufacturing-facilities/garment-apparel.png",
    imageAlt: "Garment factory with sewing stations and workers",
  },
  {
    title: "Dyeing & Bleaching Plants",
    description:
      "Corrosion-resistant structures with ETP integration and chemical storage.",
    image:
      "/images/industries/textile/manufacturing-facilities/dyeing-bleaching.png",
    imageAlt: "Dyeing and bleaching plant with industrial tanks",
  },
  {
    title: "Printing & Finishing Units",
    description:
      "Facilities for fabric handling, curing, and finishing with steam and utility infrastructure.",
    image:
      "/images/industries/textile/manufacturing-facilities/printing-finishing.png",
    imageAlt: "Fabric printing and finishing production area",
  },
  {
    title: "Composite Textile Mills",
    description:
      "Turnkey campuses covering ginning, spinning, weaving, dyeing, and finishing.",
    image:
      "/images/industries/textile/manufacturing-facilities/composite-mill.png",
    imageAlt: "Composite textile mill machinery processing fabric",
  },
  {
    title: "Yarn Texturising Plants",
    description:
      "Engineered for high-precision texturising machinery and consistent process conditions.",
    image:
      "/images/industries/textile/manufacturing-facilities/yarn-texturising.png",
    imageAlt: "Yarn texturising plant with precision machinery",
  },
  {
    title: "Technical Textiles & Nonwoven Plants",
    description:
      "Specialised structures for nonwoven fabric production with process-specific ventilation.",
    image:
      "/images/industries/textile/manufacturing-facilities/technical-textiles.png",
    imageAlt: "Technical textiles nonwoven production line",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function FacilityImage({
  src,
  alt,
  imageFit = "cover",
}: {
  src: string;
  alt: string;
  imageFit?: ImageFit;
}) {
  if (imageFit === "synthetic-fibre") {
    return (
      <div className="relative aspect-square w-full overflow-hidden rounded-[21.333px]">
        <Image
          src={src}
          alt={alt}
          width={IMAGE_SIZE}
          height={IMAGE_SIZE * 1.7778}
          className="absolute max-w-none object-cover"
          style={{
            width: "100%",
            height: "177.78%",
            left: "-0.09%",
            top: "-0.08%",
          }}
          sizes="(max-width: 640px) 100vw, 257px"
        />
      </div>
    );
  }

  if (imageFit === "knitting") {
    return (
      <div className="relative aspect-square w-full overflow-hidden rounded-[21.333px]">
        <Image
          src={src}
          alt={alt}
          width={396}
          height={IMAGE_SIZE}
          className="absolute max-w-none object-cover"
          style={{
            width: "153.87%",
            height: "100%",
            left: "-27.2%",
            top: "0.32%",
          }}
          sizes="(max-width: 640px) 100vw, 257px"
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-[21.333px]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 257px"
      />
    </div>
  );
}

function FacilityCard({ title, description, image, imageAlt, imageFit }: Facility) {
  return (
    <article className="flex w-full flex-col xl:max-w-[257.333px]">
      <FacilityImage src={image} alt={imageAlt} imageFit={imageFit} />
      <div className="mt-6 flex flex-col gap-[11px] sm:mt-[33px]">
        <h3 className="font-[family-name:var(--font-montserrat)] text-[18px] font-bold leading-normal text-[#3C3938] sm:text-[18.667px] sm:leading-[21.333px]">
          {title}
        </h3>
        <p className="font-[family-name:var(--font-montserrat)] text-[16px] font-normal leading-normal text-[#555555] sm:leading-[21.333px]">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function ManufacturingFacilitiesSection() {
  return (
    <section
      id="manufacturing-facilities"
      className="relative w-full bg-white text-black"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[391px] overflow-hidden opacity-15"
      >
        <Image
          src="/images/industries/textile/manufacturing-facilities/grid.png"
          alt=""
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1920px] px-5 pb-16 pt-12 sm:px-10 lg:px-20 lg:pb-20 lg:pt-[87px]">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-[1713px] flex-col items-center gap-4 text-center"
        >
          <h2 className="font-[family-name:var(--font-manrope)] text-[28px] font-bold leading-normal text-[#111111] sm:text-[36px] lg:text-[50px]">
            Textile &amp; Garment Manufacturing Facilities We Build Across South
            India
          </h2>
          <p className="max-w-[982px] font-[family-name:var(--font-manrope)] text-base font-normal leading-normal text-[#6E6E6E] lg:text-[18px]">
            Our textile factory construction expertise covers every segment of
            the textile value chain
          </p>
        </motion.header>

        <div className="relative mt-10 lg:mt-[69px] xl:mt-[69px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
            className={`${MOBILE_FACILITY_CAROUSEL_TRACK} ${MOBILE_FACILITY_CAROUSEL_DESKTOP} xl:grid xl:max-w-[1470px] xl:grid-cols-5 xl:gap-x-[46px] xl:gap-y-[66px]`}
          >
            {facilities.map((facility) => (
              <motion.div
                key={facility.title}
                variants={itemVariants}
                className={`${MOBILE_FACILITY_CAROUSEL_ITEM} xl:w-auto`}
              >
                <FacilityCard {...facility} />
              </motion.div>
            ))}
          </motion.div>
          <p className={MOBILE_FACILITY_CAROUSEL_HINT}>
            Swipe to explore all {facilities.length} facilities
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-12 max-w-[1760px] rounded-[24px] border border-[rgba(228,0,21,0.5)] bg-[rgba(228,0,21,0.05)] px-6 py-6 text-center sm:mt-16 sm:rounded-[40px] sm:px-8 sm:py-[24.5px] lg:mt-[72px]"
        >
          <p className="font-[family-name:var(--font-manrope)] text-base font-normal leading-normal text-[#6E6E6E] lg:text-[18px]">
            Irrespective of your textile segment — spinning, weaving, garment,
            or processing — Mekark&apos;s factory construction expertise is
            tailored to your operations, delivered across{" "}
            <span className="font-medium text-[#E50818]">
              Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala
            </span>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
