import Cta from "@/components/services/solar/cta";
import EndToEnd from "@/components/services/solar/end-to-end";
import Faq from "@/components/services/solar/faq";
import SolarFooterCta from "@/components/services/solar/footer";
import Hero from "@/components/services/solar/hero";
import Why from "@/components/services/solar/why";
import { TrustedSectorsSection } from "@/components/trusted-sectors/TrustedSectorsSection";

export function SolarPage() {
  return (
    <main className="solar-service-page flex flex-1 flex-col overflow-x-hidden bg-white">
      <Hero />
      <EndToEnd />
      <Cta />
      <Why />
      <TrustedSectorsSection variant="services" />

      <Faq />
      <SolarFooterCta />
    </main>
  );
}
