import { CtaSection } from "./CtaSection";
import { HeroSection } from "./HeroSection";
import { InternshipSection } from "./InternshipSection";
import { IntroSection } from "./IntroSection";
import { LifeAtMekarkSection } from "./LifeAtMekarkSection";
import { OpeningsSection } from "./OpeningsSection";
import { WhyJoinSection } from "./WhyJoinSection";

export function CareersPage() {
  return (
    <main className="careers-page w-full overflow-x-hidden bg-white font-manrope text-gray">
      <HeroSection />
      <IntroSection />
      <WhyJoinSection />
      <LifeAtMekarkSection />
      <OpeningsSection />
      <InternshipSection />
      <CtaSection />
    </main>
  );
}
