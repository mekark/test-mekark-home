import type { Metadata } from "next";
import { RdPage } from "@/components/about/r-and-d/RdPage";
import { FooterSection } from "@/components/footer/FooterSection";

export const metadata: Metadata = {
  title: "R&D — Mekark",
  description:
    "Advancing pre-cast and pre-fab methods to eliminate delays, while researching client working cultures to deliver a truly global-ready experience.",
};

export default function ResearchAndDevelopmentRoute() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <RdPage />
      <FooterSection />
    </div>
  );
}
