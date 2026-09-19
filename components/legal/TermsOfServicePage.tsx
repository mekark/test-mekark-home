import {
  LegalDocumentPage,
  type LegalSection,
} from "@/components/legal/LegalDocumentPage";
import {
  FOOTNOTE_150_DAYS_DISCLAIMER,
  FOOTNOTE_150_DAYS_ID,
  FOOTNOTE_150_DAYS_SUMMARY,
} from "@/lib/legal-disclaimers";

const LAST_UPDATED = "September 18, 2026";

const SECTIONS: readonly LegalSection[] = [
  {
    title: "1. Acceptance of Terms",
    body: [
      "These Terms of Service (“Terms”) govern your access to and use of the website operated by Mekark Structure India Private Limited (“Mekark”, “we”, “us”, or “our”), including mekark.com and related pages (collectively, the “Site”).",
      "By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, please do not use the Site.",
    ],
  },
  {
    title: "2. About Mekark",
    body: [
      "Mekark is an engineering, procurement, and construction (EPC) company providing industrial and commercial building solutions, including pre-engineered buildings (PEB), civil construction, MEP, solar, and related services.",
      "Information on the Site is provided for general business and marketing purposes. It does not constitute a binding offer, contract, or professional advice unless expressly agreed in a separate written agreement.",
    ],
  },
  {
    title: "3. Permitted Use",
    body: [
      "You may use the Site to learn about Mekark’s services, view project information, submit enquiries, and contact us for legitimate business purposes.",
      "You agree not to:",
    ],
    list: [
      "Use the Site in any way that violates applicable laws or regulations in India or your jurisdiction;",
      "Attempt to gain unauthorized access to the Site, its servers, or connected systems;",
      "Introduce malware, automated scraping tools, or other harmful or disruptive code;",
      "Copy, reproduce, or republish Site content without our prior written consent;",
      "Misrepresent your identity or affiliation when submitting forms or communications.",
    ],
  },
  {
    title: "4. Enquiries and Form Submissions",
    body: [
      "When you submit an enquiry, contact form, career application, or other information through the Site, you confirm that the information you provide is accurate to the best of your knowledge.",
      "Submitting a form does not create a client relationship or project contract. Mekark will review your submission and may contact you using the details provided. Response times may vary based on scope and availability.",
      "You are responsible for ensuring that any personal or business information you share is appropriate for transmission through the Site.",
    ],
  },
  {
    title: "5. Intellectual Property",
    body: [
      "All content on the Site—including text, graphics, logos, images, videos, layouts, trademarks, and design elements—is owned by Mekark or its licensors and is protected by applicable intellectual property laws.",
      "You may view and download content for personal, non-commercial reference only. You may not modify, distribute, sell, or create derivative works from Site content without our express written permission.",
    ],
  },
  {
    title: "6. Project Information and Disclaimers",
    body: [
      "Project images, case studies, timelines, capacities, certifications, and performance metrics shown on the Site are illustrative and may represent completed work, representative examples, or marketing summaries.",
      "Actual project outcomes depend on site conditions, scope, approvals, materials, and contractual terms. Nothing on the Site guarantees specific results, delivery dates, or pricing.",
      "Marketing claims marked with an asterisk (*) on the Site, including the “150 Days*” design-to-handover turnaround, are subject to the terms in Section 6.1 below. Terms and conditions apply.",
      "The Site may contain links to third-party websites or resources. Mekark is not responsible for the content, policies, or practices of those third parties.",
    ],
  },
  {
    title: "6.1 150 Days* Design-to-Handover Turnaround",
    id: FOOTNOTE_150_DAYS_ID,
    body: [...FOOTNOTE_150_DAYS_DISCLAIMER],
  },
  {
    title: "7. Disclaimer of Warranties",
    body: [
      "The Site is provided on an “as is” and “as available” basis. To the fullest extent permitted by law, Mekark disclaims all warranties, whether express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.",
      "We do not warrant that the Site will be uninterrupted, error-free, or free from security vulnerabilities.",
    ],
  },
  {
    title: "8. Limitation of Liability",
    body: [
      "To the maximum extent permitted by applicable law, Mekark and its directors, officers, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of—or inability to use—the Site.",
      "Our total liability for any claim relating to the Site shall not exceed INR 5,000 or the amount you paid to access the Site (if any), whichever is greater, except where liability cannot be excluded under applicable law.",
    ],
  },
  {
    title: "9. Indemnity",
    body: [
      "You agree to indemnify and hold harmless Mekark from any claims, losses, liabilities, or expenses (including reasonable legal fees) arising from your misuse of the Site or breach of these Terms.",
    ],
  },
  {
    title: "10. Privacy",
    body: [
      "Your use of the Site is also subject to our Privacy Policy at /resources/privacy-policy, which explains how we collect, use, and protect personal information. Please review the Privacy Policy before submitting personal data through the Site.",
    ],
  },
  {
    title: "11. Changes to These Terms",
    body: [
      "We may update these Terms from time to time. The “Last updated” date at the top of this page will reflect the latest revision. Continued use of the Site after changes are posted constitutes acceptance of the revised Terms.",
    ],
  },
  {
    title: "12. Governing Law and Jurisdiction",
    body: [
      "These Terms are governed by the laws of India. Any dispute arising out of or relating to the Site or these Terms shall be subject to the exclusive jurisdiction of the courts at Chennai, Tamil Nadu, India.",
    ],
  },
  {
    title: "13. Contact Us",
    body: ["If you have questions about these Terms, please contact:"],
    contact: true,
  },
];

export function TermsOfServicePage() {
  return (
    <LegalDocumentPage
      title="Terms of Service"
      lastUpdated={LAST_UPDATED}
      sections={SECTIONS}
      footnotes={[
        {
          marker: "*",
          text: FOOTNOTE_150_DAYS_SUMMARY,
        },
      ]}
      relatedLinks={[
        { label: "Privacy Policy", href: "/resources/privacy-policy" },
        { label: "Cookie Policy", href: "/resources/cookie-policy" },
      ]}
    />
  );
}
