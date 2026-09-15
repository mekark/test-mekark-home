import type { Metadata } from "next";
import { CompletedProjectsPage } from "@/components/projects/completed/CompletedProjectsPage";
// import { EnquirySection } from "@/components/enquiry/EnquirySection";
import { FooterSection } from "@/components/footer/FooterSection";

export const metadata: Metadata = {
  title: "Completed Projects — Mekark",
  description:
    "Explore Mekark's completed PEB, commercial, industrial, and infrastructure projects across South India.",
};

export default function CompletedProjectsRoute() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <CompletedProjectsPage />
      {/* <Suspense fallback={null}>
        <EnquirySection />
      </Suspense> */}
      <FooterSection />
    </div>
  );
}
