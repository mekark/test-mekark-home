import type { Metadata } from "next";
import { ElectronicsPage } from "@/components/industries/electronics/ElectronicsPage";
import { FooterSection } from "@/components/footer/FooterSection";

export const metadata: Metadata = {
  title:
    "Electronics Manufacturing Facility Construction in South India | Mekark",
  description:
    "Mekark builds turnkey clean rooms, ESD-safe assembly plants, and precision electronics manufacturing facilities across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala. Engineered for precision. Delivered on time.",
};

export default function ElectronicsIndustryPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <ElectronicsPage />
      <FooterSection />
    </div>
  );
}
