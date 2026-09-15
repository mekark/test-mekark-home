import type { Metadata } from "next";
import { OngoingProjectsPage } from "@/components/projects/ongoing/OngoingProjectsPage";
// import { EnquirySection } from "@/components/enquiry/EnquirySection";
import { FooterSection } from "@/components/footer/FooterSection";

export const metadata: Metadata = {
  title: "Ongoing Projects — Mekark",
  description:
    "See Mekark's ongoing PEB, commercial, industrial, and infrastructure projects currently under construction.",
};

export default function OngoingProjectsRoute() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <OngoingProjectsPage />
      {/* <Suspense fallback={null}>
        <EnquirySection />
      </Suspense> */}
      <FooterSection />
    </div>
  );
}
