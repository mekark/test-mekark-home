import LogisticsHero from "@/components/industries/logistics/hero/hero";
import CompleteLogisticsSolutions from "@/components/industries/logistics/complete-logwar/complete-logwar";
import LogisticsCta from "@/components/industries/logistics/cta/CTA";
import LogisticsIndustriesServed from "@/components/industries/logistics/industries/industries";
import LogisticsProcess from "@/components/industries/logistics/process/process";
import LogisticsFaq from "@/components/industries/logistics/faq/faq";
import LogisticsFooterCta from "@/components/industries/logistics/footer/footer";

export function LogisticsPage() {
  return (
    <main className="logistics-industry-page flex flex-1 flex-col overflow-x-clip bg-white">
      <LogisticsHero />
      <CompleteLogisticsSolutions />
      <LogisticsCta />
      <LogisticsIndustriesServed />
      <LogisticsProcess />
      <LogisticsFaq />
      <LogisticsFooterCta />
    </main>
  );
}
