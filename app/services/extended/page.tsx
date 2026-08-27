import { Suspense } from "react";
import type { Metadata } from "next";
import { ExtendedServiceSection } from "@/components/extended-service/ExtendedServiceSection";
import { EnquirySection } from "@/components/enquiry/EnquirySection";
import { FooterSection } from "@/components/footer/FooterSection";

export const metadata: Metadata = {
  title: "Extended Service — Mekark",
  description:
    "Mekark extended services covering EOT cranes, industrial racking, clean room, and cold storage infrastructure across South India.",
};

export default function ExtendedServicePage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <ExtendedServiceSection />
      <Suspense fallback={null}>
        <EnquirySection />
      </Suspense>
      <FooterSection />
    </div>
  );
}
