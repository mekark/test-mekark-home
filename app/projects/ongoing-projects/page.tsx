import type { Metadata } from "next";
import { OngoingProjectsPage } from "@/components/projects/ongoing/OngoingProjectsPage";
// import { EnquirySection } from "@/components/enquiry/EnquirySection";
import { FooterSection } from "@/components/footer/FooterSection";

import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Ongoing Construction Projects Portfolio | Mekark",
  description:
    "View Mekark's ongoing construction projects across manufacturing, turnkey and apparel facilities, showcasing our industrial construction expertise.",
  pathname: "/projects/ongoing-projects",
});

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
