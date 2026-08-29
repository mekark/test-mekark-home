import DataCenterHero from "@/components/industries/data-center/hero/hero";
import CompleteDataCenter from "@/components/industries/data-center/complete-dc/complete-dc";
import DataCenterCta from "@/components/industries/data-center/cta/CTA";
import DataCenterSolutions from "@/components/industries/data-center/solutions-icons/SolutionsIcons";
import DataCenterProcess from "@/components/industries/data-center/process/process";
import DataCenterFaq from "@/components/industries/data-center/faq/faq";
import DataCenterFooterCta from "@/components/industries/data-center/footer/footer";

export function DataCenterPage() {
  return (
    <main className="data-center-industry-page flex flex-1 flex-col overflow-x-clip bg-white">
      <DataCenterHero />
      <CompleteDataCenter />
      <DataCenterCta />
      <DataCenterSolutions />
      <DataCenterProcess />
      <DataCenterFaq />
      <DataCenterFooterCta />
    </main>
  );
}
