import type { Metadata } from "next";
import { CareersPage } from "@/components/careers/CareersPage";
import { FooterSection } from "@/components/footer/FooterSection";

import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Mekark Careers | Jobs in Industrial Construction & Engineering",
  description:
    "Explore career opportunities at Mekark in industrial construction, engineering, design, project execution, sales, internships and more.",
  pathname: "/resources/careers",
});

export default function CareersRoute() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <CareersPage />
      <FooterSection />
    </div>
  );
}
