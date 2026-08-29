export type ProcessStepItem = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStepItem[] = [
  {
    number: "01",
    title: "Process & Feasibility Study",
    description:
      "Understanding your production line layout, hygiene classification, warehousing requirements, and expansion plans before design begins.",
  },
  {
    number: "02",
    title: "Design & Engineering",
    description:
      "Structural layout, electrical zoning, HVAC, and MEP coordination planned into a build-ready engineering package using STAAD Pro, TEKLA, and Autodesk.",
  },
  {
    number: "03",
    title: "Factory Fabrication",
    description:
      "Precision manufacturing at our Tamil Nadu plants, with structural steel, cladding, and cold storage panels fabricated to exact specs.",
  },
  {
    number: "04",
    title: "Civil, Structural & MEP Execution",
    description:
      "Hygienic flooring, steel framing, HVAC, warehousing, and utility integration executed with precision sequencing for a compliant, production-ready base.",
  },
  {
    number: "05",
    title: "Commissioning & Handover",
    description:
      "Testing, hygiene checks, and final commissioning completed; your food & beverage facility handed over production-ready.",
  },
];
