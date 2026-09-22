import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceEnquiryFormPage } from "@/components/enquiry/ServiceEnquiryFormPage";
import {
  getFormHeroBackdrop,
  getIndustryEnquiryConfig,
  INDUSTRY_ENQUIRY_BY_SLUG,
} from "@/components/enquiry/enquiryConfigRegistry";
import { FooterSection } from "@/components/footer/FooterSection";
import { createPageMetadata } from "@/lib/page-metadata";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return Object.keys(INDUSTRY_ENQUIRY_BY_SLUG).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const config = getIndustryEnquiryConfig(slug);

  if (!config) {
    return {};
  }

  return createPageMetadata({
    title: `${config.title} | Mekark`,
    description: config.description,
    pathname: config.formSourcePage,
  });
}

export default async function IndustryEnquiryFormRoute({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const config = getIndustryEnquiryConfig(slug);

  if (!config) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col bg-white">
      <ServiceEnquiryFormPage
        config={config}
        heroBackdrop={getFormHeroBackdrop(slug)}
      />
      <div className="hidden sm:block">
        <FooterSection />
      </div>
    </div>
  );
}
