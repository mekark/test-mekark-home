import type { Metadata } from "next";
import { SafetyPage } from "@/components/about/safety/SafetyPage";
import { FooterSection } from "@/components/footer/FooterSection";

export const metadata: Metadata = {
  title: "Safety — Mekark",
  description:
    "Strong structures start with strong safety practices. Mekark is ISO 45001:2018 certified and recognized for workplace safety excellence across every project stage.",
};

export default function SafetyRoute() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <SafetyPage />
      <FooterSection />
    </div>
  );
}
