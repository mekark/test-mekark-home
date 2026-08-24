import type { Metadata } from "next";
import ContactUsContent from "@/components/navbar/Contactus";
import { FooterSection } from "@/components/footer/FooterSection";

export const metadata: Metadata = {
  title: "Contact Us — Mekark",
  description:
    "Contact Mekark in Chennai for PEB, factory, and warehouse projects. Call, WhatsApp, or send an enquiry for a free consultation."
};

export default function ContactUsPage() {
  return (
    <div className="flex flex-1 flex-col bg-[#f8f6f6]">
      <ContactUsContent />
      <FooterSection />
    </div>
  );
}
