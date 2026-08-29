import type { Metadata } from "next";
import { FooterSection } from "@/components/footer/FooterSection";
import { TestimonialsPage } from "@/components/testimonials/TestimonialsPage";

export const metadata: Metadata = {
  title: "Client Testimonials — Mekark",
  description:
    "Read what Bosch, Danfoss, Komatsu, and other clients say about working with Mekark on industrial construction projects.",
};

export default function TestimonialsRoute() {
  return (
    <div className="flex flex-1 flex-col">
      <TestimonialsPage />
      <FooterSection />
    </div>
  );
}
