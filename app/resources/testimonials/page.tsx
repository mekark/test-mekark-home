import type { Metadata } from "next";
import { FooterSection } from "@/components/footer/FooterSection";
import { TestimonialsPage } from "@/components/testimonials/TestimonialsPage";

import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Client Testimonials | Industrial Construction Reviews",
  description:
    "Read client testimonials about Mekark's industrial construction, project execution, quality, coordination and timely delivery across industrial projects.",
  pathname: "/resources/testimonials",
});

export default function TestimonialsRoute() {
  return (
    <div className="flex flex-1 flex-col">
      <TestimonialsPage />
      <FooterSection />
    </div>
  );
}
