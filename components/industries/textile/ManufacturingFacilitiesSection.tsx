import Image from "next/image";
import styles from "./ManufacturingFacilitiesSection.module.css";

type ImageFit = "cover" | "synthetic-fibre" | "knitting";

type Facility = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageFit?: ImageFit;
};

const facilities: Facility[] = [
  {
    title: "Cotton Spinning Mills",
    description:
      "Optimised column spacing and humidity-controlled environments for ring frame and rotor operations.",
    image:
      "/images/industries/textile/manufacturing-facilities/cotton-spinning.webp",
    imageAlt: "Cotton spinning mill with ring frame machinery",
  },
  {
    title: "Synthetic Fibre Spinning Units",
    description:
      "Engineered for high-speed synthetic yarn production with integrated dust and temperature control.",
    image:
      "/images/industries/textile/manufacturing-facilities/synthetic-fibre.webp",
    imageAlt: "Synthetic fibre spinning unit with vertical spindles",
    imageFit: "synthetic-fibre",
  },
  {
    title: "Shuttle & Shuttleless Weaving Sheds",
    description:
      "Column-free sheds with north-light roofing for consistent daylight and loom productivity.",
    image:
      "/images/industries/textile/manufacturing-facilities/weaving-sheds.webp",
    imageAlt: "Wide weaving shed with looms and north-light roofing",
  },
  {
    title: "Knitting Factory Buildings",
    description:
      "Clear-span facilities for circular and flat knitting machinery with adequate floor loading.",
    image: "/images/industries/textile/manufacturing-facilities/knitting.webp",
    imageAlt: "Knitting factory floor with circular knitting machines",
    imageFit: "knitting",
  },
  {
    title: "Garment & Apparel Factories",
    description:
      "Multi-floor sewing and finishing units built to Factory Act standards.",
    image:
      "/images/industries/textile/manufacturing-facilities/garment-apparel.webp",
    imageAlt: "Garment factory with sewing stations and workers",
  },
  {
    title: "Dyeing & Bleaching Plants",
    description:
      "Corrosion-resistant structures with ETP integration and chemical storage.",
    image:
      "/images/industries/textile/manufacturing-facilities/dyeing-bleaching.webp",
    imageAlt: "Dyeing and bleaching plant with industrial tanks",
  },
  {
    title: "Printing & Finishing Units",
    description:
      "Facilities for fabric handling, curing, and finishing with steam and utility infrastructure.",
    image:
      "/images/industries/textile/manufacturing-facilities/printing-finishing.webp",
    imageAlt: "Fabric printing and finishing production area",
  },
  {
    title: "Composite Textile Mills",
    description:
      "Turnkey campuses covering ginning, spinning, weaving, dyeing, and finishing.",
    image:
      "/images/industries/textile/manufacturing-facilities/composite-mill.webp",
    imageAlt: "Composite textile mill machinery processing fabric",
  },
  {
    title: "Yarn Texturising Plants",
    description:
      "Engineered for high-precision texturising machinery and consistent process conditions.",
    image:
      "/images/industries/textile/manufacturing-facilities/yarn-texturising.webp",
    imageAlt: "Yarn texturising plant with precision machinery",
  },
  {
    title: "Technical Textiles & Nonwoven Plants",
    description:
      "Specialised structures for nonwoven fabric production with process-specific ventilation.",
    image:
      "/images/industries/textile/manufacturing-facilities/technical-textiles.webp",
    imageAlt: "Technical textiles nonwoven production line",
  },
];

const row1 = facilities.slice(0, 5);
const row2 = facilities.slice(5);

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
      <div className={styles.frameChildWrap}>
        <Image
          className={styles.frameChildSynthetic}
          src={src}
          alt={alt}
          width={257}
          height={457}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 14vw"
        />
      </div>
    );
  }

  if (imageFit === "knitting") {
    return (
      <div className={styles.frameChildWrap}>
        <Image
          className={styles.frameChildKnitting}
          src={src}
          alt={alt}
          width={396}
          height={257}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 14vw"
        />
      </div>
    );
  }

  return (
    <div className={styles.frameChildWrap}>
      <Image
        className={styles.frameChild}
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 14vw"
      />
    </div>
  );
}

export default function ManufacturingFacilitiesSection() {
  return (
    <div id="manufacturing-facilities" className={styles.industriesWeServe}>
      <div className={styles.gridBg} aria-hidden>
        <Image
          className={styles.gridBgImg}
          src="/images/industries/textile/manufacturing-facilities/grid.webp"
          alt="Decorative grid background"
          fill
          sizes="100vw"
        />
      </div>

      <div className={styles.industrialWarehouseConstructParent}>
        <b className={styles.industrialWarehouseConstruct}>
          Textile &amp; Garment Manufacturing Facilities We Build Across South
          India
        </b>
        <div className={styles.ourPreEngineeredWarehouse}>
          Our textile factory construction expertise covers every segment of the
          textile value chain
        </div>
      </div>

      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          {row1.map((facility) => (
            <div key={facility.title} className={styles.rectangleParent}>
              <FacilityImage
                src={facility.image}
                alt={facility.imageAlt}
                imageFit={facility.imageFit}
              />
              <div className={styles.fmcgRetailParent}>
                <div className={styles.fmcgRetail}>{facility.title}</div>
                <div className={styles.distributionWarehouseBuildin}>
                  {facility.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.frameGroup}>
          {row2.map((facility) => (
            <div key={facility.title} className={styles.rectangleContainer}>
              <FacilityImage
                src={facility.image}
                alt={facility.imageAlt}
                imageFit={facility.imageFit}
              />
              <div className={styles.fmcgRetailParent}>
                <div className={styles.fmcgRetail}>{facility.title}</div>
                <div className={styles.distributionWarehouseBuildin}>
                  {facility.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.overlayborder}>
        <div className={styles.strongEveryContainer}>
          <span className={styles.strongEveryContainer2}>
            <span>
              Irrespective of your textile segment — spinning, weaving, garment,
              or processing — Mekark&apos;s factory construction expertise is
              tailored to your operations, delivered across{" "}
            </span>
            <b className={styles.southIndia}>
              Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala
            </b>
            <span>.</span>
          </span>
        </div>
      </div>
    </div>
  );
}
