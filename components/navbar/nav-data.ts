export type NavLink = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href?: string;
  children?: NavLink[];
};

function slugify(label: string): string {
  return label
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function childLinks(
  basePath: string,
  labels: string[],
): NavLink[] {
  return labels.map((label) => ({
    label,
    href: `${basePath}/${slugify(label)}`,
  }));
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "https://new-mekark.vercel.app/about" },
  {
    label: "Solutions",
    children: childLinks("/solutions", [
      "Industrial EPC Solutions",
      "Pre-Engineered Buildings (PEB)",
      "Warehouse Construction",
      "Factory & Industrial Buildings",
      "Multi-Storey Steel Buildings",
      "Tensile Structures",
      "Space Frame Structures",
      "MEP & Utility Systems",
      "EOT Crane Systems",
      "Industrial Tank Construction",
      "Solar & Green Energy Solutions",
    ]),
  },
  {
    label: "Industries",
    children: childLinks("/industries", [
      "Manufacturing",
      "Logistics & Warehousing",
      "Automotive",
      "Pharma & Healthcare",
      "FMCG",
      "Textile",
      "Electronics",
      "Energy & Power",
      "Cold Storage",
      "Cleanroom Facilities",
      "Windmill / Renewable Projects",
      "Food & Beverages",
      "Data center",
    ]),
  },
  // {
  //   label: "Projects",
  //   children: childLinks("/projects", [
  //     "Completed Projects",
  //     "Ongoing Projects",
  //     "Case Studies",
  //   ]),
  // },
  {
    label: "Resources",
    children: childLinks("/resources", [
      "Blog",
      // "Videos",
      // "Downloads (Brochures)",
      // "Testimonials",
    ]),
  },
  {
    label: "Contact",
    children: childLinks("/contact", ["Contact Us", "Careers"]),
  },
];
