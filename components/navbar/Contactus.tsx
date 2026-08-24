"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactForm from "@/components/navbar/ContactForm";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";

const MAP_SHARE_URL =
  "https://www.google.com/maps/place/MEKARK/@13.0118788,80.2179685,18z/data=!3m1!1e3";
const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=MEKARK,+5th+Floor,+Polyhose+Towers,+Anna+Salai,+Guindy,+Chennai,+Tamil+Nadu+600032&ll=13.0118788,80.2179685&t=k&z=18&ie=UTF8&iwloc=&output=embed";
const WHATSAPP_HREF = `https://wa.me/919790924754?text=${encodeURIComponent(
  "Hello Mekark, I would like to discuss an industrial building project.",
)}`;
const OFFICE_ADDRESS =
  "5th Floor, Polyhose Towers, Anna Salai, Little Mount, Guindy, Chennai, Tamil Nadu 600032";

const VIEWPORT = { once: true, margin: "-80px" as const };

const CONTACT_CHANNELS = [
  {
    label: "Call",
    value: "+91 97909 24754",
    href: "tel:+919790924754",
    icon: PhoneIcon,
  },
  {
    label: "WhatsApp",
    value: "Chat with an engineer",
    href: WHATSAPP_HREF,
    icon: WhatsAppIcon,
    external: true,
  },
  {
    label: "Email",
    value: "admin@mekark.com",
    href: "mailto:admin@mekark.com",
    icon: MailIcon,
  },
] as const;

const NEXT_STEPS = [
  {
    step: "01",
    title: "Share your brief",
    text: "Tell us the building type, location, and timeline.",
  },
  {
    step: "02",
    title: "Engineering review",
    text: "Our team assesses scope, feasibility, and budget range.",
  },
  {
    step: "03",
    title: "We get back to you",
    text: "Expect a call with a clear next step within one business day.",
  },
] as const;

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M21 16.5v2.2a1.8 1.8 0 0 1-2 1.78 17.8 17.8 0 0 1-7.76-2.76 17.5 17.5 0 0 1-5.4-5.4A17.8 17.8 0 0 1 3.08 4.56 1.8 1.8 0 0 1 4.86 2.6H7.2a1.8 1.8 0 0 1 1.8 1.55c.12.9.32 1.78.6 2.63a1.8 1.8 0 0 1-.4 1.9l-1.53 1.53a14.4 14.4 0 0 0 5.4 5.4l1.53-1.53a1.8 1.8 0 0 1 1.9-.4c.85.28 1.73.48 2.63.6A1.8 1.8 0 0 1 21 16.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3a9 9 0 0 0-7.82 13.54L3 21l4.58-1.14A9 9 0 1 0 12 3Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.25 9.5c.25.75 1.25 2.25 2.75 3 1.5.75 2.5.75 3 .5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContactUsContent() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#0a0a0a] pt-[76px] text-white sm:pt-[88px]">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/peb-poster.png"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/35"
            aria-hidden
          />
        </div>

        <div className="relative mx-auto flex min-h-[420px] w-full max-w-[1440px] flex-col justify-end px-4 pb-12 pt-8 md:min-h-[460px] md:px-8 md:pb-16 lg:px-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-[720px]"
          >
            <motion.nav
              variants={fadeUp}
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-sm text-white/55"
            >
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">Contact Us</span>
            </motion.nav>

            <motion.p
              variants={fadeUp}
              className="mt-8 text-[13px] font-extrabold uppercase tracking-[3.2px] text-[#ed1c24]"
            >
              Contact
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="mt-3 text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.08] tracking-[-1.2px]"
            >
              Let&apos;s plan your next industrial project.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-[540px] text-[16px] leading-7 text-white/75 md:text-[17px]"
            >
              Share a brief, call the team, or visit our Chennai office. We
              respond within one business day with a clear next step.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <a
                href="tel:+919790924754"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-[12px] bg-[#ed1c24] px-5 text-sm font-extrabold text-white shadow-[0px_8px_16px_rgba(237,28,36,0.35)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <PhoneIcon />
                Call +91 97909 24754
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-[12px] bg-[#25D366] px-5 text-sm font-extrabold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
              <a
                href="#enquiry"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-[12px] border border-white/20 bg-white/10 px-5 text-sm font-extrabold text-white backdrop-blur-sm transition hover:bg-white/16"
              >
                Send an enquiry
                <ArrowIcon />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section
        id="enquiry"
        className="scroll-mt-28 bg-[#f8f6f6] py-16 text-[#111] md:py-20"
      >
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-4 md:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-16 lg:px-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <motion.p
              variants={fadeUp}
              className="text-[13px] font-extrabold uppercase tracking-[2.8px] text-[#ed1c24]"
            >
              Project enquiry
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-3 text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-tight tracking-[-0.6px]"
            >
              Tell us what you want to build.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-[480px] text-[15px] leading-7 text-black/65"
            >
              Use the form for PEB, factory, warehouse, or specialised
              infrastructure projects. The more context you share, the faster we
              can come back with a practical recommendation.
            </motion.p>

            <div className="mt-10 space-y-5">
              {NEXT_STEPS.map((item) => (
                <motion.div
                  key={item.step}
                  variants={fadeUp}
                  className="flex gap-4"
                >
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ed1c24]/10 text-[12px] font-extrabold text-[#ed1c24]">
                    {item.step}
                  </span>
                  <div>
                    <p className="text-[16px] font-extrabold">{item.title}</p>
                    <p className="mt-1 text-[14px] leading-6 text-black/60">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              className="mt-10 grid gap-3 sm:grid-cols-3"
            >
              {CONTACT_CHANNELS.map((channel) => {
                const Icon = channel.icon;
                return (
                  <a
                    key={channel.label}
                    href={channel.href}
                    {...("external" in channel && channel.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="rounded-2xl border border-black/8 bg-white p-4 transition hover:border-[#ed1c24]/30 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ed1c24]/10 text-[#ed1c24]">
                      <Icon />
                    </span>
                    <p className="mt-3 text-[11px] font-extrabold uppercase tracking-[1.4px] text-black/45">
                      {channel.label}
                    </p>
                    <p className="mt-1 text-[13px] font-semibold leading-5 text-[#111]">
                      {channel.value}
                    </p>
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          <div className="lg:sticky lg:top-28">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="border-t border-black/6 bg-white py-16 text-[#111] md:py-20">
        <div className="mx-auto grid w-full max-w-[1440px] gap-8 px-4 md:px-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:items-stretch lg:gap-10 lg:px-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="flex flex-col justify-between rounded-[24px] bg-[#111] p-7 text-white md:p-9"
          >
            <div>
              <motion.p
                variants={fadeUp}
                className="text-[12px] font-extrabold uppercase tracking-[2.6px] text-[#ed1c24]"
              >
                Head office
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="mt-2 text-[28px] font-extrabold tracking-[-0.5px] md:text-[32px]"
              >
                Visit us in Chennai
              </motion.h2>
              <motion.div
                variants={fadeUp}
                className="mt-6 flex items-start gap-3 text-[15px] leading-7 text-white/75"
              >
                <span className="mt-1 text-[#ed1c24]">
                  <PinIcon />
                </span>
                <p>{OFFICE_ADDRESS}</p>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="mt-8 space-y-3">
              <a
                href="tel:+919790924754"
                className="flex items-center gap-3 text-sm font-semibold text-white/85 transition hover:text-white"
              >
                <PhoneIcon />
                +91 97909 24754
              </a>
              <a
                href="tel:04447709518"
                className="flex items-center gap-3 text-sm font-semibold text-white/85 transition hover:text-white"
              >
                <PhoneIcon />
                044 - 47709518
              </a>
              <a
                href="mailto:admin@mekark.com"
                className="flex items-center gap-3 text-sm font-semibold text-white/85 transition hover:text-white"
              >
                <MailIcon />
                admin@mekark.com
              </a>
              <a
                href={MAP_SHARE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex h-12 items-center justify-center gap-2 rounded-[12px] bg-white px-5 text-sm font-extrabold text-[#111] transition hover:bg-white/90"
              >
                Open in Google Maps
                <ArrowIcon />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="min-h-[360px] overflow-hidden rounded-[24px] border border-black/8 md:min-h-[460px]"
          >
            <iframe
              title="Mekark Chennai office on Google Maps"
              src={MAP_EMBED_URL}
              className="h-full min-h-[360px] w-full md:min-h-[460px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
