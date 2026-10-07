"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getImageProps } from "next/image";
import { motion } from "framer-motion";
import ContactForm from "@/components/navbar/ContactForm";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";

const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=MEKARK,+5th+Floor,+Polyhose+Towers,+Anna+Salai,+Guindy,+Chennai,+Tamil+Nadu+600032&ll=13.0118788,80.2179685&t=m&z=18&ie=UTF8&iwloc=&output=embed";
const WHATSAPP_HREF = `https://wa.me/919790924754?text=${encodeURIComponent(
  "Hello Mekark, I would like to discuss an industrial building project.",
)}`;
const OFFICE_ADDRESS =
  "5th Floor, Polyhose Towers, Anna Salai, Little Mount, Guindy, Chennai, Tamil Nadu 600032";

const HERO_SRC = "/images/hero/peb-poster.webp";

// Desktop uses the original hero; mobile uses a separate, compressed copy.
const { props: HERO_DESKTOP_PROPS } = getImageProps({
  src: HERO_SRC,
  alt: "",
  fill: true,
  sizes: "100vw",
  fetchPriority: "high",
  loading: "eager",
  className: "object-cover object-center",
});
// Pre-sized, pre-compressed mobile files served as-is (no Next.js re-encode).
const HERO_MOBILE_SRCSET = [640, 750, 828, 1080]
  .map((w) => `/images/hero/mobile/peb-poster-${w}.webp ${w}w`)
  .join(", ");

const VIEWPORT = { once: true, margin: "-80px" as const };

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
      <circle
        cx="12"
        cy="10"
        r="2.4"
        stroke="currentColor"
        strokeWidth="1.75"
      />
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

const MAP_FRAME_CLASS =
  "h-[157px] w-full rounded-[18px] sm:h-full sm:min-h-[360px] sm:rounded-none md:min-h-[460px]";

/**
 * Google Maps pulls in ~200 KB of scripts. On mobile, only mount the iframe
 * once the user scrolls near it; desktop mounts it straight away as before.
 */
function MapFrame() {
  const placeholderRef = useRef<HTMLDivElement>(null);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(max-width: 1023px)").matches) {
      setShowMap(true);
      return;
    }
    const placeholder = placeholderRef.current;
    if (!placeholder) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShowMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(placeholder);
    return () => observer.disconnect();
  }, []);

  if (!showMap) {
    return <div ref={placeholderRef} className={MAP_FRAME_CLASS} aria-hidden />;
  }

  return (
    <iframe
      title="Mekark Chennai office on Google Maps"
      src={MAP_EMBED_URL}
      className={MAP_FRAME_CLASS}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}

export default function ContactUsContent() {
  return (
    <main className="contact-static">
      <section className="relative overflow-hidden bg-[#0a0a0a] pt-[60px] text-white">
        <div className="absolute inset-0">
          <picture>
            <source
              media="(max-width: 1023px)"
              srcSet={HERO_MOBILE_SRCSET}
              sizes="100vw"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              {...HERO_DESKTOP_PROPS}
              alt="Pre-engineered building construction showcase"
            />
          </picture>
          <div
            className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/35"
            aria-hidden
          />
        </div>

        <div className="relative mx-auto flex w-full max-w-[1440px] flex-col justify-end px-5 py-[33px] sm:min-h-[420px] sm:px-4 sm:pb-12 sm:pt-8 md:min-h-[460px] md:px-8 md:pb-16 lg:px-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="m-static max-w-[720px]"
          >
            <motion.nav
              variants={fadeUp}
              aria-label="Breadcrumb"
              className="m-static flex items-center gap-2 text-sm text-white/55"
            >
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">Contact Us</span>
            </motion.nav>

            <motion.p
              variants={fadeUp}
              className="m-static mt-8 hidden text-[13px] font-extrabold uppercase tracking-[3.2px] text-[#ed1c24] sm:block"
            >
              Contact
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="m-static mt-3 text-[28px] font-extrabold leading-[1.08] tracking-[-1.2px] sm:text-[clamp(2rem,5vw,3.5rem)]"
            >
              Let&apos;s plan your next <br className="sm:hidden" />
              industrial project.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="m-static mt-4 max-w-[540px] text-sm leading-[22px] text-white/75 sm:leading-7 md:text-[17px]"
            >
              Share a brief, call the team, or visit our Chennai office. We
              respond within one business day with a clear next step.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="m-static mt-5 flex flex-wrap gap-x-2.5 gap-y-[19px] sm:mt-8 sm:gap-3"
            >
              <a
                href="tel:+919790924754"
                className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-[12px] bg-[#ed1c24] text-sm font-extrabold text-white shadow-[0px_5px_12px_rgba(237,32,36,0.17)] transition-transform hover:scale-[1.02] active:scale-[0.98] sm:flex-none sm:px-5 sm:shadow-[0px_8px_16px_rgba(237,28,36,0.35)]"
              >
                <PhoneIcon />
                <span className="sm:hidden">Call Mekark</span>
                <span className="hidden sm:inline">Call +91 97909 24754</span>
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-[174px] items-center justify-center gap-2 rounded-[12px] bg-[#25D366] text-sm font-extrabold text-white transition-transform hover:scale-[1.02] active:scale-[0.98] sm:w-auto sm:px-5"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
              <a
                href="#enquiry"
                onClick={(event) => {
                  event.preventDefault();
                  document.getElementById("enquiry")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="inline-flex basis-full items-center justify-center gap-2 text-[13px] font-extrabold text-white transition sm:h-12 sm:basis-auto sm:rounded-[12px] sm:border sm:border-white/20 sm:bg-white/10 sm:px-5 sm:text-sm sm:backdrop-blur-sm sm:hover:bg-white/16"
              >
                <span className="underline sm:no-underline">
                  <span className="sm:hidden">Send a project enquiry</span>
                  <span className="hidden sm:inline">Send an enquiry</span>
                </span>
                <ArrowIcon />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section
        id="enquiry"
        className="scroll-mt-28 bg-[#f8f6f6] py-[33px] text-[#111] sm:py-16 md:py-20"
      >
        <div className="mx-auto grid w-full max-w-[1440px] gap-[25px] px-4 sm:gap-12 md:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-16 lg:px-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <motion.p
              variants={fadeUp}
              className="text-[10px] font-extrabold uppercase leading-[19.5px] tracking-[2.8px] text-[#ed1c24] sm:text-[13px] sm:leading-normal"
            >
              Project enquiry
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-0.5 text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-[35px] tracking-[-0.6px] sm:mt-3 sm:leading-tight"
            >
              Tell us what you want to <br className="sm:hidden" />
              build.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 max-w-[480px] text-sm leading-[22px] text-black/65 sm:mt-4 sm:leading-7"
            >
              Use the form for PEB, factory, warehouse, or specialised
              infrastructure projects. The more context you share, the faster we
              can come back with a practical recommendation.
            </motion.p>

            <div className="mt-[25px] space-y-5 sm:mt-10">
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
          </motion.div>

          <div className="lg:sticky lg:top-28">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-[#f8f6f6] text-[#111] sm:border-t sm:border-black/6 sm:bg-white sm:py-16 md:py-20">
        <div className="mx-auto grid w-full max-w-[1440px] gap-0 px-0 sm:gap-8 sm:px-4 md:px-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:items-stretch lg:gap-10 lg:px-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="flex flex-col justify-between bg-[#15191d] px-5 pb-[9px] pt-[33px] text-white sm:rounded-[24px] sm:bg-[#111] sm:p-7 md:p-9"
          >
            <div>
              <motion.p
                variants={fadeUp}
                className="text-[10px] font-extrabold uppercase tracking-[1.5px] text-[#e50818] sm:text-[12px] sm:tracking-[2.6px] sm:text-[#ed1c24]"
              >
                Head office
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="mt-[7px] text-[18px] font-bold tracking-[-0.3px] sm:mt-2 sm:text-[28px] sm:font-extrabold sm:tracking-[-0.5px] md:text-[32px]"
              >
                Visit us in Chennai
              </motion.h2>
              <motion.div
                variants={fadeUp}
                className="mt-[7px] flex items-start gap-3 text-[13px] leading-[20.8px] text-[#c7cdd2] sm:mt-6 sm:text-[15px] sm:leading-7 sm:text-white/75"
              >
                <span className="mt-1 hidden text-[#ed1c24] sm:block">
                  <PinIcon />
                </span>
                <p>{OFFICE_ADDRESS}</p>
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp}
              className="mt-3.5 space-y-[9px] pb-[7px] sm:mt-8 sm:space-y-3 sm:pb-0"
            >
              <a
                href="tel:+919790924754"
                className="flex items-center gap-[9px] text-[13px] font-bold text-white transition hover:text-white sm:gap-3 sm:text-sm sm:font-semibold sm:text-white/85 [&>svg]:size-4 [&>svg]:text-[#e50818] sm:[&>svg]:size-[18px] sm:[&>svg]:text-current"
              >
                <PhoneIcon />
                +91 97909 24754
              </a>
              <a
                href="tel:04447709518"
                className="hidden sm:flex items-center gap-[9px] text-[13px] font-bold text-white transition hover:text-white sm:gap-3 sm:text-sm sm:font-semibold sm:text-white/85 [&>svg]:size-4 [&>svg]:text-[#e50818] sm:[&>svg]:size-[18px] sm:[&>svg]:text-current"
              >
                <PhoneIcon />
                044 - 47709518
              </a>
              <a
                href="mailto:admin@mekark.com"
                className="flex items-center gap-[9px] text-[13px] font-bold text-white transition hover:text-white sm:gap-3 sm:text-sm sm:font-semibold sm:text-white/85 [&>svg]:size-4 [&>svg]:text-[#e50818] sm:[&>svg]:size-[18px] sm:[&>svg]:text-current"
              >
                <MailIcon />
                admin@mekark.com
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-[#15191d] px-5 sm:min-h-[360px] sm:rounded-[24px] sm:border sm:border-black/8 sm:bg-transparent sm:px-0 md:min-h-[460px]"
          >
            <MapFrame />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
