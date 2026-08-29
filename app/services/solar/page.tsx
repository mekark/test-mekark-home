import type { Metadata } from "next";
import { SolarPage } from "@/components/services/solar/SolarPage";
import { FooterSection } from "@/components/footer/FooterSection";

export const metadata: Metadata = {
  title: "Commercial Solar Installation Company in South India | Mekark",
  description:
    "Mekark delivers turnkey commercial solar installations for factories, warehouses, and industrial plants across Tamil Nadu, Chennai, Bangalore, and Hyderabad. Get a free quote today.",
};

export default function SolarServicePage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <SolarPage />
      <FooterSection />
    </div>
  );
}
