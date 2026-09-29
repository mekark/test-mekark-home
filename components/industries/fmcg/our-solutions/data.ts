export type SolutionItem = {
  title: string;
  description: string;
  image: string;
  top: number;
  left: number;
};

/** Figma artboard width for the timeline + cards column */
export const TIMELINE_DESIGN_WIDTH = 1024;
export const CARD_DESIGN_WIDTH = 740;
export const CARD_DESIGN_HEIGHT = 193;
/** Card 6 top derived from timeline SVG horizontal line at y=1318.5 */
export const TIMELINE_HEIGHT = 1494;

export const solutions: SolutionItem[] = [
  {
    title: "Turnkey FMCG Plant Construction",
    description:
      "Full-scope design, civil works, structural steel, and MEP delivered under one contract for FMCG manufacturing and packaging units.",
    image: "/images/industries/fmcg/our-solutions/turnkey-plant.webp",
    top: 0,
    left: 73,
  },
  {
    title: "Hygienic Flooring & Clean-Process Interiors",
    description:
      "GMP and FSSAI-compliant epoxy and PU flooring, coved skirting, and wash-down-ready wall systems for personal care, home care, and packaged food production lines.",
    image: "/images/industries/fmcg/our-solutions/hygienic-flooring.webp",
    top: 259,
    left: 284,
  },
  {
    title: "Warehousing & Distribution Infrastructure",
    description:
      "High-bay racking-ready warehouses, cross-dock facilities, and cold storage for fast-moving consumer goods logistics.",
    image: "/images/industries/fmcg/our-solutions/warehousing.webp",
    top: 519,
    left: 73,
  },
  {
    title: "HVAC & Air Handling Systems",
    description:
      "Temperature, humidity, and air quality control engineered specifically for FMCG production, filling, and packaging environments.",
    image: "/images/industries/fmcg/our-solutions/hvac.webp",
    top: 778,
    left: 284,
  },
  {
    title: "MEP & Utility Infrastructure",
    description:
      "Electrical, mechanical, plumbing, compressed air, and process utility systems built for uninterrupted, high-speed FMCG plant operations.",
    image: "/images/industries/fmcg/our-solutions/mep.webp",
    top: 1037,
    left: 73,
  },
  {
    title: "EOT Crane & Material Handling Systems",
    description:
      "Overhead crane, conveyor, and internal logistics infrastructure for bulk raw material handling and high-volume packaging lines.",
    image: "/images/industries/fmcg/our-solutions/eot-crane.webp",
    top: 1301,
    left: 284,
  },
];

export function getCardLayout(solution: SolutionItem) {
  return {
    top: solution.top,
    left: solution.left,
    width: CARD_DESIGN_WIDTH,
    height: CARD_DESIGN_HEIGHT,
  };
}
