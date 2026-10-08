"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { m, type Variants } from "framer-motion";
import { STATIC_MOBILE_PATHS } from "@/components/navbar/Navbar";
import { CookieSettingsButton } from "@/components/cookie-consent/CookieSettingsButton";
import { NAV_ITEMS, type NavItem } from "@/components/navbar/nav-data";
import { LEGAL_AND_COOKIE_CONSENT_ENABLED } from "@/lib/feature-flags";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { SECTION_CONTAINER_CLASS } from "@/lib/sectionLayout";

const INSTANT_VARIANTS: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

const VIEWPORT = { once: true, margin: "-80px" as const };

function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

function navItemHref(item: NavItem): string {
  return item.href ?? item.children?.[0]?.href ?? "/";
}

const MENU_LINKS = NAV_ITEMS.map((item) => ({
  label: item.label,
  href: navItemHref(item),
}));

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/resources/privacy-policy" },
  { label: "Terms Of Service", href: "/resources/terms-of-service" },
  { label: "Cookie Policy", href: "/resources/cookie-policy" },
] as const;

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/mekarkindustrialmanufacturers",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mekarkindustrial/",
  },
  {
    label: "X",
    href: "https://x.com/MekarkPEB",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCsCdBcilS4Ib5l1C7l2u3bg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/mekark/",
  },
] as const;

function LocationIcon() {
  return (
    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" aria-hidden>
      <path
        d="M7 0C3.686 0 1 2.686 1 6c0 4.125 6 10 6 10s6-5.875 6-10c0-3.314-2.686-6-6-6Z"
        stroke="#ed1c24"
        strokeWidth="1.25"
      />
      <circle cx="7" cy="6" r="2" stroke="#ed1c24" strokeWidth="1.25" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M12.5 9.75v2a1 1 0 0 1-1.08 1 9.96 9.96 0 0 1-4.33-1.54 9.82 9.82 0 0 1-3.01-3.01A9.96 9.96 0 0 1 2.5 3.58 1 1 0 0 1 3.5 2.5h2a1 1 0 0 1 1 .86 6.36 6.36 0 0 0 .35 1.39 1 1 0 0 1-.23 1.05l-.85.85a8 8 0 0 0 3.01 3.01l.85-.85a1 1 0 0 1 1.05-.23 6.36 6.36 0 0 0 1.39.35 1 1 0 0 1 .86 1Z"
        stroke="#ed1c24"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="11" viewBox="0 0 14 11" fill="none" aria-hidden>
      <rect
        x="1"
        y="1"
        width="12"
        height="9"
        rx="1.5"
        stroke="#ed1c24"
        strokeWidth="1.25"
      />
      <path
        d="M1 2.5 7 6.5l6-4"
        stroke="#ed1c24"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 14 14" fill="none" aria-hidden>
      <rect
        x="1.75"
        y="1.75"
        width="10.5"
        height="10.5"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <circle cx="7" cy="7" r="2.25" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="10.25" cy="3.75" r="0.5" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971h-1.513c-1.491 0-1.956.931-1.956 1.887v2.263h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.64 7.584H.47l8.6-9.835L0 1.154h7.594l5.243 6.932 6.064-6.933Zm-1.29 19.49h2.039L6.487 3.24H4.3l13.31 17.403Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.121 2.136c1.872.505 9.377.505 9.377.505s7.505 0 9.376-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
    </svg>
  );
}

const SOCIAL_ICONS = {
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  X: XIcon,
  YouTube: YouTubeIcon,
} as const;

function PhoneHandsetIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M17.5 14.25v2.5a1.67 1.67 0 0 1-1.8 1.67 16.6 16.6 0 0 1-7.2-2.57 16.4 16.4 0 0 1-5.01-5.01A16.6 16.6 0 0 1 1 5.3 1.67 1.67 0 0 1 2.67 3.5h2.5a1.67 1.67 0 0 1 1.67 1.43 10.6 10.6 0 0 0 .58 2.32 1.67 1.67 0 0 1-.38 1.75l-1.42 1.42a13.33 13.33 0 0 0 5.01 5.01l1.42-1.42a1.67 1.67 0 0 1 1.75-.38 10.6 10.6 0 0 0 2.32.58 1.67 1.67 0 0 1 1.43 1.67Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path
        d="M11 2a9 9 0 0 0-7.82 13.54L2 20l4.58-1.14A9 9 0 1 0 11 2Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.25 9.5c.25.75 1.25 2.25 2.75 3 1.5.75 2.5.75 3 .5"
        stroke="white"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FooterLinkColumn({
  title,
  links,
  linksDisabled = false,
  children,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
  linksDisabled?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-[11px] font-extrabold uppercase tracking-[2px] text-[#ed1c24]">
        {title}
      </p>
      <ul className="flex flex-col gap-3">
        {links.map((link) => {
          const className = linksDisabled
            ? "cursor-not-allowed text-sm text-white/45 opacity-80"
            : "text-sm text-white/55 transition-colors hover:text-white/85";
          const external = isExternalHref(link.href);

          return (
            <li key={link.label}>
              {linksDisabled ? (
                <span
                  aria-disabled="true"
                  className={className}
                  title="Under review"
                >
                  {link.label}
                </span>
              ) : external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {link.label}
                </a>
              ) : (
                <Link href={link.href} prefetch={false} className={className}>
                  {link.label}
                </Link>
              )}
            </li>
          );
        })}
        {children}
      </ul>
    </div>
  );
}

function FloatingTooltip({ children }: { children: ReactNode }) {
  return (
    <span
      role="tooltip"
      className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-[#111] px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block"
    >
      {children}
    </span>
  );
}

function FloatingActions() {
  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-40 flex flex-col gap-3 sm:bottom-8 sm:right-8">
      <a
        href="tel:+919790924754"
        aria-label="Call Mekark"
        className="group pointer-events-auto relative flex size-12 items-center justify-center rounded-full bg-[#ed1c24] shadow-[0px_8px_16px_rgba(237,28,36,0.35)] transition-transform hover:scale-105 active:scale-95"
      >
        <PhoneHandsetIcon />
        <FloatingTooltip>Call us</FloatingTooltip>
      </a>
      <a
        href="https://wa.me/919790924754"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Mekark"
        className="group pointer-events-auto relative flex size-12 items-center justify-center rounded-full bg-[#25D366] shadow-[0px_8px_16px_rgba(37,211,102,0.35)] transition-transform hover:scale-105 active:scale-95"
      >
        <WhatsAppIcon />
        <FloatingTooltip>Chat on WhatsApp</FloatingTooltip>
      </a>
    </div>
  );
}

export function FooterSection({
  hideContactDetails = false,
}: {
  hideContactDetails?: boolean;
}) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const staticPage = STATIC_MOBILE_PATHS.includes(pathname);
  const stillClass = staticPage ? "m-static" : "";
  const isStatic = isMobile && staticPage;
  const container = isStatic ? INSTANT_VARIANTS : staggerContainer;
  const item = isStatic ? INSTANT_VARIANTS : fadeUp;

  return (
    <>
      <footer
        className={`relative -mt-px w-full overflow-hidden bg-black text-white ${
          staticPage ? "m-lazy-footer" : ""
        }`}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          aria-hidden
          style={{
            backgroundImage: "url('/images/footer/pattern-bg.svg')",
            backgroundSize: "400px 400px",
            backgroundPosition: "left center",
          }}
        />

        <m.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className={`${stillClass} ${SECTION_CONTAINER_CLASS} py-14 sm:py-16 lg:py-20 xl:py-16 2xl:py-20`}
        >
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16 xl:gap-12 2xl:gap-16">
            <m.div
              variants={item}
              className={`${stillClass} flex max-w-[640px] flex-col gap-6`}
            >
              <div className="flex flex-wrap items-center gap-4">
                <Image
                  src="/images/LogoMekark.webp"
                  alt="Mekark"
                  width={227}
                  height={80}
                  className="h-10 w-auto rounded-[10px]"
                />

                <div className="flex flex-wrap items-center gap-2.5">
                  {SOCIAL_LINKS.map(({ label, href }) => {
                    const Icon = SOCIAL_ICONS[label];
                    return (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex size-11 min-h-11 min-w-11 items-center justify-center rounded-full bg-[#1a1a1a] text-white/70 transition-colors hover:bg-[#252525] hover:text-white"
                      >
                        <Icon />
                      </a>
                    );
                  })}
                </div>
              </div>

              <p className="text-[15px] leading-[26px] text-white/55">
                Engineered for Performance. Built for Scale. Delivered with
                Certainty.
              </p>

              <p className="max-w-[560px] text-sm leading-[24px] text-white/45">
                Mekark continues to partner with leading enterprises to deliver
                industrial infrastructure that performs beyond construction and
                scales with ambition.
              </p>

              {!hideContactDetails && (
                <div className="mt-2 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-10">
                  <div className="flex gap-3">
                    <span className="mt-0.5 shrink-0">
                      <LocationIcon />
                    </span>
                    <p className="text-sm leading-[22px] text-white/55">
                      5th Floor, Polyhose Towers, Anna Salai, Little Mount,
                      Guindy, Chennai, TN 600032
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <a
                      href="tel:+919790924754"
                      className="flex items-center gap-3 text-sm text-white/55 transition-colors hover:text-white/85"
                    >
                      <PhoneIcon />
                      +91 97909 24754
                    </a>
                    <a
                      href="mailto:admin@mekark.com"
                      className="flex items-center gap-3 text-sm text-white/55 transition-colors hover:text-white/85"
                    >
                      <MailIcon />
                      admin@mekark.com
                    </a>
                  </div>
                </div>
              )}
            </m.div>

            <m.div
              variants={item}
              className={`${stillClass} flex flex-row gap-14 sm:gap-16 lg:gap-26 lg:pt-1 xl:gap-20 2xl:gap-26`}
            >
              <FooterLinkColumn title="Menu" links={MENU_LINKS} />
              <FooterLinkColumn
                title="Legal"
                links={LEGAL_LINKS}
                linksDisabled={!LEGAL_AND_COOKIE_CONSENT_ENABLED}
              >
                <CookieSettingsButton />
              </FooterLinkColumn>
            </m.div>
          </div>

          <m.div
            variants={item}
            className={`${stillClass} mt-12 border-t border-white/10 pt-6 sm:mt-16 lg:mt-20`}
          >
            <p className="text-center text-xs leading-5 tracking-wide text-white/40 sm:text-sm">
              © {new Date().getFullYear()} Mekark Structure India Private
              Limited. All rights reserved.
            </p>
          </m.div>
        </m.div>
      </footer>

      <FloatingActions />
    </>
  );
}
