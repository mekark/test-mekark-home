import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CookiePolicyPage } from "@/components/legal/CookiePolicyPage";
import { FooterSection } from "@/components/footer/FooterSection";
import { LEGAL_AND_COOKIE_CONSENT_ENABLED } from "@/lib/feature-flags";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Cookie Policy | Mekark",
  description:
    "Read how Mekark uses cookies and similar technologies, including Google Tag Manager, analytics, and live chat on the website.",
  pathname: "/resources/cookie-policy",
});

export default function CookiePolicyRoute() {
  if (!LEGAL_AND_COOKIE_CONSENT_ENABLED) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col bg-white">
      <CookiePolicyPage />
      <FooterSection />
    </div>
  );
}
