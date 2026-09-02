import type { Metadata } from "next";
import DesignScale from "@/components/services/DesignScale";
import { ExtendedServiceSection } from "@/components/extended-service/ExtendedServiceSection";
import { FooterSection } from "@/components/footer/FooterSection";

export const metadata: Metadata = {
  title: "Extended Service — Mekark",
  description:
    "Mekark extended services covering EOT cranes, industrial racking, clean room, and cold storage infrastructure across South India.",
};

export default function ExtendedServicePage() {
  return (
    <div className="extended-service-page flex flex-1 flex-col bg-white">
      <DesignScale>
        <ExtendedServiceSection />
      </DesignScale>
      <FooterSection />
    </div>
  );
}
