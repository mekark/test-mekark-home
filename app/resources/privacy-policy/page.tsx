import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrivacyPolicyPage } from "@/components/legal/PrivacyPolicyPage";
import { FooterSection } from "@/components/footer/FooterSection";
import { LEGAL_AND_COOKIE_CONSENT_ENABLED } from "@/lib/feature-flags";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy | Mekark",
  description:
    "Learn how Mekark collects, uses, and protects personal information submitted through the website, enquiry forms, and contact channels.",
  pathname: "/resources/privacy-policy",
});

export default function PrivacyPolicyRoute() {
  if (!LEGAL_AND_COOKIE_CONSENT_ENABLED) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col bg-white">
      <PrivacyPolicyPage />
      <FooterSection />
    </div>
  );
}
