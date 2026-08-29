import type { Metadata } from "next";
import { AutomationPage } from "@/components/industries/automation/AutomationPage";
import { FooterSection } from "@/components/footer/FooterSection";

export const metadata: Metadata = {
  title:
    "Automation Manufacturing Facility Construction in South India | Mekark",
  description:
    "Mekark builds turnkey automation and robotics manufacturing plants, control panel assembly units, and Industry 4.0-ready smart factories across South India.",
};

export default function AutomationIndustryPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <AutomationPage />
      <FooterSection />
    </div>
  );
}
