export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavSection = {
  label: string;
  children: NavLink[];
};

export type NavSpotlight = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  image: string;
  imageAlt: string;
};

export type NavItem = {
  label: string;
  href?: string;
  children?: NavLink[];
  /** Nested groups under a dropdown (e.g. Extended Service) */
  sections?: NavSection[];
  /** Featured panel — enables spotlight mega menu layout */
  spotlight?: NavSpotlight;
};

export type SolutionOption = {
  label: string;
  slug: string;
  href: string;
};

function slugify(label: string): string {
  return label
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function childLinks(basePath: string, labels: string[]): NavLink[] {
  return labels.map((label) => ({
    label,
    href: `${basePath}/${slugify(label)}`,
  }));
}

const SERVICE_EXTERNAL_URLS: Record<string, string> = {
  Civil: "https://civil-new.vercel.app/",
  PEB: "https://peb-newpage.vercel.app/",
  "Multi Storey": "https://new-multi-mekark.vercel.app/",
  MEP: "https://new-mep-mekark.vercel.app/",
  EOT: "https://eot-crane.vercel.app/",
  Racking: "https://mekark-racking.vercel.app/",
  "Clean Room": "https://mekark-cleanroom.vercel.app/",
};

const SERVICE_DESCRIPTIONS: Record<string, string> = {
  Civil: "Turnkey civil & RCC construction for industrial projects",
  PEB: "Design, fabrication & erection of pre-engineered buildings",
  "Multi Storey": "Multi-storey steel structures for factories & offices",
  MEP: "Industrial MEP design-build — HVAC, electrical & plumbing",
  Solar: "Solar infrastructure for industrial facilities",
  Tensile: "Tensile membrane structures & canopies",
  EOT: "Electric overhead travelling cranes for heavy lifting",
  Racking: "Heavy-duty pallet racking & warehouse storage systems",
  "Clean Room":
    "Contamination-controlled environments for precision manufacturing",
};

function serviceLinks(basePath: string, labels: string[]): NavLink[] {
  return labels.map((label) => ({
    label,
    href: SERVICE_EXTERNAL_URLS[label] ?? `${basePath}/${slugify(label)}`,
    description: SERVICE_DESCRIPTIONS[label],
  }));
}

export type HomeService = {
  id: string;
  label: string;
  title: string;
  href: string;
  description: string;
  group: "core" | "extended";
};

const HOME_SERVICE_TITLES: Record<string, string> = {
  Civil: "Civil Construction",
  PEB: "Pre-Engineered Buildings",
  "Multi Storey": "Multi-Storey Steel",
  MEP: "MEP Services",
  Solar: "Solar Infrastructure",
  Tensile: "Tensile Structures",
  EOT: "EOT Cranes",
  Racking: "Racking Systems",
  "Clean Room": "Clean Room",
};

function homeService(
  label: string,
  group: "core" | "extended",
  basePath: string,
): HomeService {
  return {
    id: slugify(label),
    label,
    title: HOME_SERVICE_TITLES[label] ?? label,
    href: SERVICE_EXTERNAL_URLS[label] ?? `${basePath}/${slugify(label)}`,
    description: SERVICE_DESCRIPTIONS[label],
    group,
  };
}

/** Full service menu for the home page — mirrors navbar Our Service. */
export const HOME_SERVICES: HomeService[] = [
  ...["Civil", "PEB", "Multi Storey", "MEP", "Solar", "Tensile"].map((label) =>
    homeService(label, "core", "/services"),
  ),
  ...["EOT", "Racking", "Clean Room"].map((label) =>
    homeService(label, "extended", "/services/extended"),
  ),
];

function solutionOptions(
  basePath: string,
  labels: string[],
): SolutionOption[] {
  return labels.map((label) => {
    const slug = slugify(label);
    return {
      label,
      slug,
      href: `${basePath}/${slug}`,
    };
  });
}

export const FIND_INDUSTRIES: SolutionOption[] = solutionOptions(
  "/industries",
  [
    "Logistics & Warehouse",
    "Textile",
    "Electronics",
    "Cold Storage",
    "Food & Beverage",
    "FMCG",
    "Pharma",
    "Automotive",
    "Data Center",
  ],
);

export const FIND_SERVICES: SolutionOption[] = [
  ...solutionOptions("/services", [
    "Civil",
    "PEB",
    "Multi Storey",
    "MEP",
    "Solar",
    "Tensile",
  ]),
  ...solutionOptions("/services/extended", [
    "EOT",
    "Racking",
    "Clean Room",
  ]),
];

export function buildSolutionHref(
  industry: SolutionOption,
  service: SolutionOption,
): string {
  const params = new URLSearchParams({
    industry: industry.slug,
    service: service.slug,
    industryLabel: industry.label,
    serviceLabel: service.label,
  });
  return `/?${params.toString()}#enquiry`;
}

/** Map Find-your-solution industry slugs → enquiry form options */
export const ENQUIRY_INDUSTRY_BY_SLUG: Record<string, string> = {
  "logistics-and-warehouse": "Warehouse & Logistics",
  textile: "Manufacturing",
  electronics: "Manufacturing",
  "cold-storage": "Cold Storage",
  "food-and-beverage": "Factories, Industries & Plants",
  fmcg: "Factories, Industries & Plants",
  pharma: "Clean Rooms",
  automotive: "Factories, Industries & Plants",
  "data-center": "Datacentre",
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: "About Us",
    children: childLinks("/about", [
      "Our history",
      "Life at Mekark",
      "Certifications",
      "Safety",
      "R&D",
    ]),
  },
  {
    label: "Our Service",
    children: serviceLinks("/services", [
      "Civil",
      "PEB",
      "Multi Storey",
      "MEP",
      "Solar",
      "Tensile",
    ]),
    sections: [
      {
        label: "Extended Service",
        children: serviceLinks("/services/extended", [
          "EOT",
          "Racking",
          "Clean Room",
        ]),
      },
    ],
  },
  {
    label: "Industries We Serve",
    children: childLinks("/industries", [
      "Logistics & Warehouse",
      "Textile",
      "Electronics",
      "Cold Storage",
      "Food & Beverage",
      "FMCG",
      "Pharma",
      "Automotive",
      "Data Center",
    ]),
  },
  { label: "Institutional", href: "/institutional" },
  {
    label: "Projects",
    children: childLinks("/projects", [
      "Completed projects",
      "Ongoing projects",
    ]),
  },
  {
    label: "Resources",
    children: childLinks("/resources", [
      "Blog",
      "Testimonials",
      "Careers",
    ]),
  },
];
