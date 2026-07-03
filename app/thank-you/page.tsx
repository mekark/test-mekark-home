import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FooterSection } from "@/components/footer/FooterSection";

export const metadata: Metadata = {
  title: "Thank You — Mekark",
  description:
    "Thank you for your enquiry. Our team will contact you shortly with your project proposal.",
};

export default function ThankYouPage() {
  return (
    <div className="flex flex-1 flex-col bg-black">
      <section className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden px-5 py-20 sm:px-8 lg:px-20">
        <div className="absolute inset-0">
          <Image
            src="/images/enquiry/background.png"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[rgba(14,14,15,0.72)] via-[rgba(14,14,15,0.55)] to-[rgba(22,22,24,0.35)]"
            aria-hidden
          />
        </div>

        <div className="relative z-10 w-full max-w-[640px] rounded-[20px] bg-white px-8 py-10 text-center shadow-[0px_8px_32px_rgba(0,0,0,0.18)] sm:px-12 sm:py-12">
          <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#ed1c24]/10">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              aria-hidden
            >
              <path
                d="M7 14.5L11.5 19L21 9"
                stroke="#ed1c24"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <p className="mt-6 text-[11px] font-extrabold uppercase tracking-[2.8px] text-black/45">
            Enquiry Received
          </p>

          <h1 className="mt-3 text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold leading-tight tracking-[-0.8px] text-black">
            Thank You for Reaching Out
          </h1>

          <p className="mt-4 text-[15px] leading-[26px] text-black/70">
            Our team has received your project enquiry and will contact you
            shortly with your project proposal.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex w-full items-center justify-center rounded-[14px] bg-[#ed1c24] px-6 py-4 text-base font-extrabold text-white shadow-[0px_8px_16px_rgba(237,28,36,0.35)] transition-transform hover:scale-[1.01] active:scale-[0.99] sm:w-auto"
          >
            Back to Home
          </Link>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
