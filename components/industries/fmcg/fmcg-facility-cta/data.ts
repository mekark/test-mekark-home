export type FeatureItem = {
  icon: string;
  title: string;
  titleLines?: [string, string];
  titleNoWrap?: boolean;
  description: string;
  descriptionLines?: string[];
  descriptionWidth?: string;
  descriptionMaxWidth?: string;
};

export type ManufacturingSolutionItem = {
  image: string;
  title: string;
  description: string;
};

export const manufacturingSolutions: ManufacturingSolutionItem[] = [
  {
    image: "/images/industries/fmcg/fmcg-facility-cta/solution-packaged-food.png",
    title: "Packaged Food & Snacks Manufacturing:",
    description:
      "Hygienic, wash-down-ready facilities engineered for processing, packaging, and storage.",
  },
  {
    image: "/images/industries/fmcg/fmcg-facility-cta/solution-personal-care.png",
    title: "Personal Care & Cosmetics Manufacturing:",
    description:
      "Clean, contamination-controlled plants designed for filling, blending, and packaging lines.",
  },
  {
    image: "/images/industries/fmcg/fmcg-facility-cta/solution-home-care.png",
    title: "Home Care & Cleaning Products Manufacturing:",
    description:
      "Chemical-resistant flooring and process-ready layouts for liquid filling and packaging units.",
  },
  {
    image: "/images/industries/fmcg/fmcg-facility-cta/solution-beverage.png",
    title: "Beverage Bottling & Packaging Units:",
    description:
      "High-speed production plants designed for continuous, automation-ready bottling and canning lines.",
  },
  {
    image: "/images/industries/fmcg/fmcg-facility-cta/solution-nutraceutical.png",
    title: "Pharma-Adjacent & Nutraceutical Packaging:",
    description:
      "Controlled environments built for consistent quality and regulatory compliance.",
  },
  {
    image: "/images/industries/fmcg/fmcg-facility-cta/solution-warehousing.png",
    title: "FMCG Warehousing & Distribution Centres:",
    description:
      "Multi-tenant-ready, high-bay warehouses with flexible bay design for scaling distribution.",
  },
];

export const features: FeatureItem[] = [
  {
    icon: "/images/industries/fmcg/fmcg-facility-cta/icon-pen-tool.svg",
    title: "In-House Engineering-Led Design",
    titleNoWrap: true,
    description:
      "Every facility is designed using STAAD Pro, TEKLA, and Autodesk by our in-house structural engineers, MEP teams, and hygiene specialists.",
  },
  {
    icon: "/images/industries/fmcg/fmcg-facility-cta/icon-factory.svg",
    title: "Large-Scale In-House Fabrication Capacity",
    titleLines: ["Large-Scale In-House Fabrication", "Capacity"],
    descriptionMaxWidth: "max-w-[289px]",
    description:
      "Mekark fabricates over 3,000 MT of precision steel per month across four manufacturing plants in Tamil Nadu, with zero third-party dependency.",
  },
  {
    icon: "/images/industries/fmcg/fmcg-facility-cta/icon-map-pinned.svg",
    title: "Regional Project Execution Across South India",
    titleLines: ["Regional Project Execution Across", "South India"],
    descriptionWidth: "w-full lg:w-[327px]",
    descriptionLines: [
      "From Chennai and Coimbatore to Hosur,",
      "Bengaluru, Hyderabad, and Kochi, our teams",
      "deliver FMCG factory construction backed by an",
      "integrated design-to-commissioning process.",
    ],
    description:
      "From Chennai and Coimbatore to Hosur, Bengaluru, Hyderabad, and Kochi, our teams deliver FMCG factory construction backed by an integrated design-to-commissioning process.",
  },
  {
    icon: "/images/industries/fmcg/fmcg-facility-cta/icon-clock.svg",
    title: "30–40% Faster Delivery Than Conventional Construction",
    description:
      "Factory-controlled fabrication and pre-engineered methods mean your production line starts generating revenue sooner.",
  },
  {
    icon: "/images/industries/fmcg/fmcg-facility-cta/icon-repeat.svg",
    title: "True Turnkey, Zero Fragmentation",
    titleNoWrap: true,
    description:
      "Structural steel, civil works, MEP, HVAC, warehousing, and hygienic interiors, one team, one contract, no blame-shifting between trades.",
  },
  {
    icon: "/images/industries/fmcg/fmcg-facility-cta/icon-shield-check.svg",
    title: "GMP & FSSAI-Compliant Construction Standards",
    descriptionWidth: "w-full lg:w-[327px]",
    descriptionLines: [
      "Every facility is delivered to certified",
      "hygiene and safety benchmarks, with documented",
      "engineering before a single beam is cut.",
    ],
    description:
      "Every facility is delivered to certified hygiene and safety benchmarks, with documented engineering before a single beam is cut.",
  },
];
