import { AboutMekarkSection } from "@/components/about/AboutMekarkSection";
import { EngineeringNumbersSection } from "@/components/engineering/EngineeringNumbersSection";
import { HeroSection } from "@/components/hero/HeroSection";
import { CoreEpcCapabilitiesSection } from "@/components/capabilities/CoreEpcCapabilitiesSection";
import { IndustriesSection } from "@/components/industries/IndustriesSection";
import { IndustrialInfrastructureSection } from "@/components/industrial-infrastructure/IndustrialInfrastructureSection";
import { OnePartnerSection } from "@/components/one-partner/OnePartnerSection";
import { AchievementsTestimonialsSection } from "@/components/achievements-testimonials/AchievementsTestimonialsSection";
import { FaqSection } from "@/components/faq/FaqSection";
import { MekarkBlogsSection } from "@/components/blogs/MekarkBlogsSection";
import { EnquirySection } from "@/components/enquiry/EnquirySection";
import { FooterSection } from "@/components/footer/FooterSection";
import { CompletedProjectsSection } from "@/components/completed-projects/CompletedProjectsSection";
import { ManufacturingFactoriesSection } from "@/components/manufacturing-factories/ManufacturingFactoriesSection";
import { PrecisionDrivenEngineeringSection } from "@/components/precision-engineering/PrecisionDrivenEngineeringSection";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-black">
      <HeroSection />
      <EngineeringNumbersSection />
      <AboutMekarkSection />
      <CoreEpcCapabilitiesSection />
      <IndustriesSection />
      <OnePartnerSection />
      <IndustrialInfrastructureSection />
      <PrecisionDrivenEngineeringSection />
      <ManufacturingFactoriesSection />
      <CompletedProjectsSection />
      <AchievementsTestimonialsSection />
      <FaqSection />
      <MekarkBlogsSection />
      <EnquirySection />
      <FooterSection />
    </div>
  );
}
