import Link from "next/link";
import { SECTION_CONTAINER_CLASS } from "@/lib/sectionLayout";

export type LegalSection = {
  title: string;
  id?: string;
  body: string[];
  list?: readonly string[];
  contact?: boolean;
};

export type LegalFootnote = {
  marker: string;
  text: string;
};

type LegalDocumentPageProps = {
  title: string;
  lastUpdated: string;
  sections: readonly LegalSection[];
  footnotes?: readonly LegalFootnote[];
  relatedLinks?: readonly { label: string; href: string }[];
};

function LegalContactBlock() {
  return (
    <address className="not-italic">
      <p className="font-semibold text-[#111]">
        Mekark Structure India Private Limited
      </p>
      <p className="mt-2">
        5th Floor, Polyhose Towers, Anna Salai, Little Mount, Guindy, Chennai,
        Tamil Nadu 600032, India
      </p>
      <p className="mt-2">
        Phone:{" "}
        <a href="tel:+919790924754" className="text-[#ed1c24] hover:underline">
          +91 97909 24754
        </a>
      </p>
      <p>
        Email:{" "}
        <a
          href="mailto:admin@mekark.com"
          className="text-[#ed1c24] hover:underline"
        >
          admin@mekark.com
        </a>
      </p>
    </address>
  );
}

export function LegalDocumentPage({
  title,
  lastUpdated,
  sections,
  footnotes,
  relatedLinks,
}: LegalDocumentPageProps) {
  return (
    <main className="bg-white font-[family-name:var(--font-manrope)] text-[#111]">
      <div className={`${SECTION_CONTAINER_CLASS} py-14 sm:py-16 lg:py-20`}>
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[2px] text-[#ed1c24]">
            Legal
          </p>
          <h1 className="mt-3 text-[clamp(2rem,4vw,2.75rem)] font-bold leading-tight tracking-[-0.02em] text-[#080808]">
            {title}
          </h1>
          <p className="mt-4 text-sm text-[#656565]">
            Last updated: {lastUpdated}
          </p>

          <div className="mt-10 space-y-10 border-t border-[#e8e8e8] pt-10">
            {sections.map((section) => (
              <section key={section.title} id={section.id}>
                <h2 className="text-lg font-bold text-[#111] sm:text-xl">
                  {section.title}
                </h2>
                <div className="mt-3 space-y-3 text-sm leading-7 text-[#4c4c4c] sm:text-[15px]">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.list && (
                    <ul className="list-disc space-y-2 pl-5">
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {section.contact && <LegalContactBlock />}
                </div>
              </section>
            ))}
          </div>

          {footnotes && footnotes.length > 0 && (
            <div className="mt-12 space-y-3 border-t border-[#e8e8e8] pt-8">
              <p className="text-xs font-bold uppercase tracking-[1.5px] text-[#888]">
                Footnotes
              </p>
              {footnotes.map((footnote) => (
                <p key={footnote.marker} className="text-xs leading-6 text-[#666]">
                  <span className="mr-1 font-bold text-[#ed1c24]">
                    {footnote.marker}
                  </span>
                  {footnote.text}
                </p>
              ))}
            </div>
          )}

          <p className="mt-12 text-xs leading-6 text-[#888]">
            This document is provided for general information. Mekark recommends
            independent legal review before relying on it for regulatory or
            contractual purposes.
          </p>

          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:gap-6">
            <Link
              href="/resources/contact-us"
              className="text-sm font-semibold text-[#ed1c24] hover:underline"
            >
              Contact us with questions →
            </Link>
            {relatedLinks?.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-[#ed1c24] hover:underline"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
