import type { Metadata } from "next";
import { CompletedProjectsPage } from "@/components/projects/completed/CompletedProjectsPage";
// import { EnquirySection } from "@/components/enquiry/EnquirySection";
import { FooterSection } from "@/components/footer/FooterSection";

import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Completed Industrial Construction Projects | Mekark",
  description:
    "Explore Mekark's completed industrial construction projects, including warehouses, manufacturing units, showrooms and institutional buildings across South India.",
  pathname: "/projects/completed-projects",
});

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
