import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TermsOfServicePage } from "@/components/legal/TermsOfServicePage";
import { FooterSection } from "@/components/footer/FooterSection";
import { LEGAL_AND_COOKIE_CONSENT_ENABLED } from "@/lib/feature-flags";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Service | Mekark",
  description:
    "Read the Terms of Service for using the Mekark website, including permitted use, enquiries, intellectual property, and legal disclaimers.",
  pathname: "/resources/terms-of-service",
});

export default function TermsOfServiceRoute() {
  if (!LEGAL_AND_COOKIE_CONSENT_ENABLED) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col bg-white">
      <TermsOfServicePage />
      <FooterSection />
    </div>
  );
}
