/** Client-side title guard — keep in sync with each route's `createPageMetadata` title. */
export const PAGE_TITLES: Record<string, string> = {
  "/": "Industrial EPC Contractor & Turnkey Construction Company | Mekark",
  "/about/life-at-mekark": "Life at Mekark — Mekark",
  "/about/our-history": "Our History — Mekark",
  "/about/research-and-development": "R&D — Mekark",
  "/about/safety": "Safety — Mekark",
  "/blog": "Mekark Blog | Industrial Construction & PEB Insights",
  "/industries/automation":
    "Automation Manufacturing Facility Construction in South India | Mekark",
  "/industries/data-center":
    "Data Centre Construction Company in South India | Mekark",
  "/industries/electronics":
    "Electronics Manufacturing Facility Construction | Mekark",
  "/industries/fmcg": "FMCG Manufacturing Facility Construction | Mekark",
  "/industries/food-and-beverage":
    "Food & Beverage Facility Construction Company | Mekark",
  "/industries/logistics-and-warehouse":
    "Warehouse Construction Company in Chennai | Mekark",
  "/industries/pharma":
    "Pharmaceutical Manufacturing Facility Construction | Mekark",
  "/industries/textile":
    "Textile Factory Construction Company in South India | Mekark",
  "/institutional": "Institutional Construction Company in South India | Mekark",
  "/projects/completed-projects":
    "Completed Industrial Construction Projects | Mekark",
  "/projects/ongoing-projects": "Ongoing Construction Projects Portfolio | Mekark",
  "/resources/careers":
    "Mekark Careers | Jobs in Industrial Construction & Engineering",
  "/resources/contact-us":
    "Contact Mekark | Turnkey Industrial Construction Company Chennai",
  "/resources/cookie-policy": "Cookie Policy | Mekark",
  "/resources/privacy-policy": "Privacy Policy | Mekark",
  "/resources/terms-of-service": "Terms of Service | Mekark",
  "/resources/testimonials": "Client Testimonials | Industrial Construction Reviews",
  "/services/civil":
    "Industrial Civil Construction Company in Chennai | Mekark",
  "/services/extended": "Extended Service — Mekark",
  "/services/mep":
    "Industrial MEP Contractor in Chennai | Turnkey MEP Services | Mekark",
  "/services/multi-storey":
    "Multi Storey Steel Building Construction Company | Mekark",
  "/services/peb":
    "PEB Manufacturer in Chennai | Pre Engineered Building | Mekark",
  "/services/solar":
    "Commercial Solar Installation Company in South India | Mekark",
  "/services/tensile": "Tensile Structure Manufacturer in Chennai | Mekark",
  "/thank-you": "Thank You — Mekark",
};

export function normalizePathname(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname || "/";
}

export function getPageTitle(pathname: string): string | undefined {
  return PAGE_TITLES[normalizePathname(pathname)];
}
