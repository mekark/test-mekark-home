import TextileHero from "@/components/industries/textile/HeroSection";
import TextileBuildSection from "@/components/industries/textile/BuildSection";
import TextileWhyMekark from "@/components/industries/textile/WhyMekarkSection";
import TextileExecutionProcess from "@/components/industries/textile/ExecutionProcessSection";
import TextileFaq from "@/components/industries/textile/Faq";
import TextileFooterCta from "@/components/industries/textile/FooterCta";

export function TextilePage() {
  return (
    <main className="textile-industry-page flex flex-1 flex-col overflow-x-clip bg-white">
      <TextileHero />
      <TextileBuildSection />
      <TextileWhyMekark />
      <TextileExecutionProcess />
      <TextileFaq />
      <TextileFooterCta />
    </main>
  );
}
