import type { Metadata } from "next";
import { CareersPage } from "@/components/careers/CareersPage";
import { FooterSection } from "@/components/footer/FooterSection";

export const metadata: Metadata = {
  title: "Careers at Mekark",
  description:
    "Join Mekark and help build the future of industrial infrastructure.",
};

export default function CareersRoute() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <CareersPage />
      <FooterSection />
    </div>
  );
}
