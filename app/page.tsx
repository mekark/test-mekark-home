import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { createPageMetadata } from "@/lib/page-metadata";
import { EngineeringNumbersSection } from "@/components/engineering/EngineeringNumbersSection";
import { HeroSection } from "@/components/hero/HeroSection";

const AboutMekarkSection = dynamic(() =>
  import("@/components/about/AboutMekarkSection").then(
    (module) => module.AboutMekarkSection,
  ),
);
const CoreEpcCapabilitiesSection = dynamic(() =>
  import("@/components/capabilities/CoreEpcCapabilitiesSection").then(
    (module) => module.CoreEpcCapabilitiesSection,
  ),
);
const OurServicesSection = dynamic(() =>
  import("@/components/services/OurServicesSection").then(
    (module) => module.OurServicesSection,
  ),
);
const IndustriesSection = dynamic(() =>
  import("@/components/industries/IndustriesSection").then(
    (module) => module.IndustriesSection,
  ),
);
const OnePartnerSection = dynamic(() =>
  import("@/components/one-partner/OnePartnerSection").then(
    (module) => module.OnePartnerSection,
  ),
);
const PrecisionDrivenEngineeringSection = dynamic(() =>
  import("@/components/precision-engineering/PrecisionDrivenEngineeringSection").then(
    (module) => module.PrecisionDrivenEngineeringSection,
  ),
);
const CompletedProjectsListingSection = dynamic(() =>
  import("@/components/completed-projects-listing/CompletedProjectsListingSection").then(
    (module) => module.CompletedProjectsListingSection,
  ),
);
const TrustedSectorsSection = dynamic(() =>
  import("@/components/trusted-sectors/TrustedSectorsSection").then(
    (module) => module.TrustedSectorsSection,
  ),
);
const MekarkBlogsSection = dynamic(() =>
  import("@/components/blogs/MekarkBlogsSection").then(
    (module) => module.MekarkBlogsSection,
  ),
);
const TestimonialsSection = dynamic(() =>
  import("@/components/testimonials/TestimonialsSection").then(
    (module) => module.TestimonialsSection,
  ),
);
const FaqSection = dynamic(() =>
  import("@/components/faq/FaqSection").then((module) => module.FaqSection),
);
const EnquirySection = dynamic(
  () =>
    import("@/components/enquiry/EnquirySection").then(
      (module) => module.EnquirySection,
    ),
  { loading: () => null },
);
const FooterSection = dynamic(() =>
  import("@/components/footer/FooterSection").then(
    (module) => module.FooterSection,
  ),
);

export const metadata: Metadata = createPageMetadata({
  title: "Industrial EPC Contractor & Turnkey Construction Company | Mekark",
  description:
    "Mekark is a turnkey industrial EPC solutions provider delivering end-to-end design, engineering, construction, PEB, MEP and industrial infrastructure solutions across India.",
  pathname: "/",
});

export default function Home() {
  return (
    <div className="flex flex-1 flex-col overflow-x-clip bg-black">
      <HeroSection />
      <EngineeringNumbersSection />
      <AboutMekarkSection />
      <CoreEpcCapabilitiesSection />
      <OurServicesSection />
      <IndustriesSection />
      <OnePartnerSection />
      <PrecisionDrivenEngineeringSection />
      <CompletedProjectsListingSection />
      <TrustedSectorsSection />
      <MekarkBlogsSection />
      <TestimonialsSection />
      <FaqSection />
      <Suspense fallback={null}>
        <EnquirySection />
      </Suspense>
      <FooterSection />
    </div>
  );
}
