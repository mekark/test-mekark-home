import type { Metadata } from "next";
import { InstitutionHeroSection } from "@/components/institution/InstitutionHeroSection";
import { InstitutionMapSection } from "@/components/institution/InstitutionMapSection";
import { InstitutionTypesSection } from "@/components/institution/InstitutionTypesSection";
import { InstitutionalEnquiryProvider } from "@/components/institution/InstitutionalEnquiryProvider";
import { FooterSection } from "@/components/footer/FooterSection";

import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Institutional Construction Company in South India | Mekark",
  description:
    "Mekark delivers institutional construction across South India, including auditoriums, sports stadiums, schools, colleges, community halls and tensile structures.",
  pathname: "/institutional",
});

export default function InstitutionalRoute() {
  return (
    <InstitutionalEnquiryProvider>
      <div className="flex flex-1 flex-col bg-white">
        <InstitutionHeroSection />
        <InstitutionMapSection />
        <InstitutionTypesSection />
        <FooterSection />
      </div>
    </InstitutionalEnquiryProvider>
  );
}
