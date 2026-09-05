import { Suspense } from "react";
import { AboutMekarkSection } from "@/components/about/AboutMekarkSection";
import { EngineeringNumbersSection } from "@/components/engineering/EngineeringNumbersSection";
import { HeroSection } from "@/components/hero/HeroSection";
import { CoreEpcCapabilitiesSection } from "@/components/capabilities/CoreEpcCapabilitiesSection";
import { OurServicesSection } from "@/components/services/OurServicesSection";
import { IndustriesSection } from "@/components/industries/IndustriesSection";
import { OnePartnerSection } from "@/components/one-partner/OnePartnerSection";
import { FaqSection } from "@/components/faq/FaqSection";
import { MekarkBlogsSection } from "@/components/blogs/MekarkBlogsSection";
import { EnquirySection } from "@/components/enquiry/EnquirySection";
import { FooterSection } from "@/components/footer/FooterSection";
import { CompletedProjectsListingSection } from "@/components/completed-projects-listing/CompletedProjectsListingSection";
import { PrecisionDrivenEngineeringSection } from "@/components/precision-engineering/PrecisionDrivenEngineeringSection";
import { TrustedSectorsSection } from "@/components/trusted-sectors/TrustedSectorsSection";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";

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
      {/* <IndustrialInfrastructureSection /> */}
      <PrecisionDrivenEngineeringSection />
      {/* <ManufacturingFactoriesSection /> */}
      {/* <CompletedProjectsSection /> */}
      <CompletedProjectsListingSection />
      <TrustedSectorsSection />
      <MekarkBlogsSection />
      <TestimonialsSection />
      {/* <AchievementsTestimonialsSection /> */}
      <FaqSection />
      <Suspense fallback={null}>
        <EnquirySection />
      </Suspense>
      <FooterSection />
    </div>
  );
}
