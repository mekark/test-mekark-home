import type { Metadata } from "next";
import { MepPage } from "@/components/services/mep/MepPage";
import { FooterSection } from "@/components/footer/FooterSection";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Industrial MEP Contractor in Chennai | Turnkey MEP Services | Mekark",
  description:
    "Industrial MEP company in Chennai delivering turnkey HVAC, electrical, plumbing and MEP design-build solutions for factories and industrial buildings.",
  pathname: "/services/mep",
});

export default function MepServicePage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <MepPage />
      <FooterSection />
    </div>
  );
}
