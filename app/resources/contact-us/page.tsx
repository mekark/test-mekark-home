import type { Metadata } from "next";
import ContactUsContent from "@/components/navbar/Contactus";
import { FooterSection } from "@/components/footer/FooterSection";

import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Mekark | Turnkey Industrial Construction Company Chennai",
  description:
    "Contact Mekark for turnkey PEB, factory, warehouse and industrial construction projects. Get expert consultation and end-to-end project solutions.",
  pathname: "/resources/contact-us",
});

export default function ContactUsPage() {
  return (
    <div className="flex flex-1 flex-col bg-[#f8f6f6]">
      <ContactUsContent />
      <FooterSection />
    </div>
  );
}
