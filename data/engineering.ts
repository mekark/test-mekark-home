export type EngineeringPlaque = {
  src: string;
  alt: string;
  unitLabel: string;
};

export type EngineeringNumbersContent = {
  eyebrow: string;
  title: string;
  plaque: EngineeringPlaque;
  description: { line1: string; line2: string };
  watermarkSrc: string;
};

export const engineeringNumbers = {
  eyebrow: "Scale that speaks for itself",
  title: "Annual Production Capacity",
  plaque: {
    src: "/images/engineering/stat-40000-plaque.png",
    alt: "40,000+",
    unitLabel: "metric ton per annum",
  },
  description: {
    line1: "Tons of structural steel manufactured at our",
    line2: "fully integrated Tamil Nadu facility.",
  },
  watermarkSrc: "/images/engineering/background-watermark.png",
} as const satisfies EngineeringNumbersContent;
