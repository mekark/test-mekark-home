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
      "Understanding your production\nline layout, hygiene classification,\nwarehousing requirements, and\nexpansion plans before design\nbegins.",
  },
  {
    number: "02",
    title: "Design & Engineering",
    description:
      "Structural layout, electrical\nzoning, HVAC, and MEP\ncoordination planned into a\nbuild-ready engineering\npackage using STAAD Pro,\nTEKLA, and Autodesk.",
  },
  {
    number: "03",
    title: "Factory Fabrication",
    description:
      "Precision manufacturing at our\nTamil Nadu plants, with\nstructural steel, cladding, and\ncold storage panels fabricated\nto exact specs.",
  },
  {
    number: "04",
    title: "Civil, Structural & MEP Execution",
    description:
      "Hygienic flooring, steel\nframing, HVAC, warehousing,\nand utility integration\nexecuted with precision\nsequencing for a compliant,\nproduction-ready base.",
  },
  {
    number: "05",
    title: "Commissioning & Handover",
    description:
      "Testing, hygiene checks, and final commissioning completed; your food & beverage facility handed over production-ready.",
  },
];
