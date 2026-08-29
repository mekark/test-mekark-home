import type { Metadata } from "next";
import { PharmaPage } from "@/components/industries/pharma/PharmaPage";
import { FooterSection } from "@/components/footer/FooterSection";

export const metadata: Metadata = {
  title:
    "Pharmaceutical Manufacturing Facility Construction in South India | Mekark",
  description:
    "Mekark builds turnkey pharmaceutical plants, GMP cleanrooms, API production units, and cold chain infrastructure across South India.",
};

export default function PharmaIndustryPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <PharmaPage />
      <FooterSection />
    </div>
  );
}
