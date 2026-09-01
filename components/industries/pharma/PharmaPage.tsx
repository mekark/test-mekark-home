import PharmaHero from "@/components/industries/pharma/hero/hero";
import CompletePharma from "@/components/industries/pharma/complete-pharma/complete-pharma";
import PharmaCta from "@/components/industries/pharma/cta/CTA";
// import PharmaSolutions from "@/components/industries/pharma/solutions/Solutions";
import PharmaSolutionsIcons from "@/components/industries/pharma/solutions-icons/SolutionsIcons";
import PharmaProcess from "@/components/industries/pharma/process/process";
import PharmaFaq from "@/components/industries/pharma/faq/faq";
import PharmaFooterCta from "@/components/industries/pharma/footer/footer";

export function PharmaPage() {
  return (
    <main className="pharma-industry-page flex flex-1 flex-col overflow-x-clip bg-white">
      <PharmaHero />
      <CompletePharma />
      <PharmaCta />
      {/* <PharmaSolutions /> */}
      <PharmaSolutionsIcons />
      <PharmaProcess />
      <PharmaFaq />
      <PharmaFooterCta />
    </main>
  );
}
