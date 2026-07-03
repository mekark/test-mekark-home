"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";

const VIEWPORT = { once: true, margin: "-80px" as const };

const CORPORATE_LINKS = [
  { label: "About Us", href: "#" },
  { label: "Global Locations", href: "#" },
  { label: "HSE Standards", href: "#" },
  { label: "Career", href: "#" },
] as const;

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms Of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
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
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M3.5 5.25v5.25M3.5 3.5h.01M6.125 10.5V8.312a1.75 1.75 0 0 1 3.5 0V10.5M6.125 5.25V10.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
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
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M8.75 4.375h1.75V2.625A7 7 0 0 0 8.75 2.625H7a3.5 3.5 0 0 0-3.5 3.5v1.75H2.625v2.625H3.5V12.25h2.625V8.75h1.75l.875-2.625H6.125V6.125c0-.484.391-.875.875-.875Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M2.5 2.5 11.5 11.5M11.5 2.5 2.5 11.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <rect
        x="1.25"
        y="3.25"
        width="11.5"
        height="7.5"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path d="M6 5.25v3.5l3-1.75L6 5.25Z" fill="currentColor" />
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
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-[11px] font-extrabold uppercase tracking-[2px] text-[#ed1c24]">
        {title}
      </p>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-white/55 transition-colors hover:text-white/85"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FloatingActions() {
  return (
    <div className="pointer-events-none fixed bottom-6 right-5 z-40 flex flex-col gap-3 sm:bottom-8 sm:right-8">
      <a
        href="tel:+919790924754"
        aria-label="Call Mekark"
        className="pointer-events-auto flex size-12 items-center justify-center rounded-full bg-[#ed1c24] shadow-[0px_8px_16px_rgba(237,28,36,0.35)] transition-transform hover:scale-105 active:scale-95"
      >
        <PhoneHandsetIcon />
      </a>
      <a
        href="https://wa.me/919790924754"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Mekark"
        className="pointer-events-auto flex size-12 items-center justify-center rounded-full bg-[#25D366] shadow-[0px_8px_16px_rgba(37,211,102,0.35)] transition-transform hover:scale-105 active:scale-95"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}

export function FooterSection() {
  return (
    <>
      <footer className="relative w-full overflow-hidden bg-black text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          aria-hidden
          style={{
            backgroundImage: "url('/images/footer/pattern-bg.svg')",
            backgroundSize: "400px 400px",
            backgroundPosition: "left center",
          }}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="relative mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 lg:px-20 lg:py-20"
        >
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
            <motion.div
              variants={fadeUp}
              className="flex max-w-[640px] flex-col gap-6"
            >
              <div className="flex flex-wrap items-center gap-4">
                <Image
                  src="/images/LogoMekark.png"
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
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-8 sm:flex-row sm:gap-16 lg:gap-20 lg:pt-1"
            >
              <FooterLinkColumn title="Corporate" links={CORPORATE_LINKS} />
              <FooterLinkColumn title="Legal" links={LEGAL_LINKS} />
            </motion.div>
          </div>
        </motion.div>
      </footer>

      <FloatingActions />
    </>
  );
}
