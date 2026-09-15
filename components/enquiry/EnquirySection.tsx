"use client";

import { type FormEvent, type ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { useNavigationLoading } from "@/components/ui/NavigationLoadingProvider";
import {
  FIND_SERVICES,
  NAV_ITEMS,
} from "@/components/navbar/nav-data";
import {
  enquiryCopyItem,
  enquiryCopyReveal,
  enquiryFormReveal,
  enquiryHighlightItem,
  enquiryHighlightStagger,
  enquirySectionStagger,
} from "@/lib/motion-variants";
import { SECTION_CONTAINER_CLASS } from "@/lib/sectionLayout";
import styles from "./enquiry-form.module.css";

const VIEWPORT = { once: true, margin: "-80px" as const };

const HIGHLIGHTS = [
  "200+ industrial projects delivered",
  "18+ years of structural expertise",
  "98% on-time project execution",
] as const;

const PROJECT_AREAS = [
  "Select area",
  "10,000 - 20,000 Sq.ft",
  "20,000 - 30,000 Sq.ft",
  "30,000 - 50,000 Sq.ft",
  "50,000+ Sq.ft",
] as const;

const INDUSTRY_LINKS = [
  ...(NAV_ITEMS.find((item) => item.label === "Industries We Serve")?.children ?? []),
  { label: "Institutional", href: "/institutional" },
];
const SERVICE_LINKS = FIND_SERVICES.map((service) => ({
  ...service,
  label: service.label === "EOT" ? "EOT Crane" : service.label,
}));

const INDUSTRY_TYPES = [
  "Select industry type",
  ...INDUSTRY_LINKS.map((industry) => industry.label),
] as const;

const PROJECT_TIMELINES = [
  "Select timeline",
  "Immediately",
  "Within 1 Month",
  "Within 3 Months",
  "Planning for Future",
] as const;

const PROJECT_BUDGETS = [
  "Select budget",
  "Below ₹50 Lakhs",
  "₹50 Lakhs – ₹1 Crore",
  "₹1 Crore – ₹5 Crores",
  "Above ₹5 Crores",
] as const;

const SERVICE_TYPES = [
  "Select service",
  ...SERVICE_LINKS.map((service) => service.label),
] as const;

function resolveIndustryValue(
  industrySlug: string | null,
  industryLabel: string | null,
) {
  return INDUSTRY_LINKS.find(
    (option) =>
      option.href.split("/").pop() === industrySlug ||
      option.label.toLowerCase() === (industryLabel ?? "").toLowerCase(),
  )?.label ?? "";
}

function resolveServiceValue(
  serviceSlug: string | null,
  serviceLabel: string | null,
) {
  const matched = FIND_SERVICES.find(
    (option) =>
      option.slug === serviceSlug ||
      option.label.toLowerCase() === (serviceLabel ?? "").toLowerCase(),
  );

  return SERVICE_LINKS.find(
    (option) =>
      option.slug === serviceSlug ||
      option.label.toLowerCase() === (serviceLabel ?? "").toLowerCase() ||
      option.slug === matched?.slug,
  )?.label ?? "";
}

function buildSolutionPrefill(
  industryLabel: string | null,
  serviceLabel: string | null,
) {
  const parts = [
    industryLabel ? `Industry: ${industryLabel}` : null,
    serviceLabel ? `Service: ${serviceLabel}` : null,
  ].filter(Boolean);

  return parts.length ? `${parts.join(" · ")}.` : "";
}

function normalizePhone(value: string) {
  return value.replace(/\D/g, "").slice(0, 10);
}

function isValidPhone(phone: string) {
  return /^\d{10}$/.test(phone);
}

function getEnquirySource() {
  try {
    return sessionStorage.getItem("enquiry_source") ?? "";
  } catch {
    return "";
  }
}

function clearEnquirySource() {
  try {
    sessionStorage.removeItem("enquiry_source");
  } catch {
    // Storage can be unavailable in privacy-restricted browsers.
  }
}

function FormField({
  label,
  required,
  className,
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className ?? styles.field}>
      <label className={styles.name}>
        {required ? `${label} *` : label}
      </label>
      {children}
    </div>
  );
}

function SelectField({
  name,
  value,
  onChange,
  options,
  required,
  id,
}: {
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
  required?: boolean;
  id: string;
}) {
  const placeholder = options[0];

  return (
    <div className={styles.buttonListbox}>
      <select
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={styles.selectArea}
      >
        {options.map((option) => (
          <option
            key={option}
            value={option === placeholder ? "" : option}
            disabled={option === placeholder}
          >
            {option}
          </option>
        ))}
      </select>
      <Image
        className={styles.svgIcon4}
        src="/images/enquiry/SVG-chevron.svg"
        width={11}
        height={7}
        alt=""
        aria-hidden
      />
    </div>
  );
}

type SubmitStatus = "idle" | "submitting" | "error";

function scrollToEnquirySection() {
  requestAnimationFrame(() => {
    document.getElementById("enquiry")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

export function EnquirySection() {
  const router = useRouter();
  const { startNavigation } = useNavigationLoading();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [projectArea, setProjectArea] = useState("");
  const [industryType, setIndustryType] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [projectTimeline, setProjectTimeline] = useState("");
  const [projectBudget, setProjectBudget] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const queryString = searchParams.toString();

  useEffect(() => {
    const handleHashNavigation = () => {
      if (window.location.hash === "#enquiry") {
        scrollToEnquirySection();
      }
    };

    handleHashNavigation();
    window.addEventListener("hashchange", handleHashNavigation);

    return () => window.removeEventListener("hashchange", handleHashNavigation);
  }, [pathname]);

  useEffect(() => {
    const params = new URLSearchParams(queryString);
    const industrySlug = params.get("industry");
    const industryLabel = params.get("industryLabel");
    const serviceSlug = params.get("service");
    const serviceLabel = params.get("serviceLabel");

    if (!industrySlug && !industryLabel && !serviceSlug && !serviceLabel) {
      return;
    }

    const nextIndustry = resolveIndustryValue(industrySlug, industryLabel);
    if (nextIndustry) {
      setIndustryType(nextIndustry);
    }

    const nextService = resolveServiceValue(serviceSlug, serviceLabel);
    if (nextService) {
      setServiceType(nextService);
    }

    const prefill = buildSolutionPrefill(industryLabel, serviceLabel);

    if (prefill) {
      setMessage(prefill);
    }

    router.replace(`${pathname}#enquiry`, { scroll: false });
    scrollToEnquirySection();
  }, [pathname, router, queryString]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submitStatus === "submitting") {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const normalizedPhone = normalizePhone(String(formData.get("phone") ?? ""));

    if (!isValidPhone(normalizedPhone)) {
      setSubmitStatus("error");
      setSubmitMessage("Phone number must be exactly 10 digits.");
      return;
    }

    const industry = String(formData.get("industry") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();
    const details = String(formData.get("message") ?? "").trim();
    const sourcePage = getEnquirySource();

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: normalizedPhone,
      company: String(formData.get("company") ?? "").trim(),
      location: String(formData.get("location") ?? "").trim(),
      industry,
      service,
      sqf: String(formData.get("sqft") ?? "").trim(),
      startTimeline: String(formData.get("projectTimeline") ?? "").trim(),
      budget: String(formData.get("projectBudget") ?? "").trim(),
      message: details,
      sourcePage,
    };

    setSubmitStatus("submitting");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/enquiry-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(30_000),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        setSubmitStatus("error");
        setSubmitMessage(
          data.message ?? "Unable to submit your enquiry. Please try again.",
        );
        return;
      }

      clearEnquirySource();
      startNavigation();
      router.push("/thank-you");
    } catch (error) {
      const timedOut =
        error instanceof Error &&
        (error.name === "TimeoutError" || error.name === "AbortError");
      setSubmitStatus("error");
      setSubmitMessage(
        timedOut
          ? "The enquiry service is taking too long. Please try again in a moment."
          : "Unable to submit your enquiry. Please check your connection and try again.",
      );
    }
  }

  return (
    <section
      id="enquiry"
      className="relative w-full scroll-mt-28 overflow-hidden bg-[#0a0a0a] font-[family-name:var(--font-manrope)]"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/enquiry/div.absolute.png"
          alt=""
          fill
          className="object-cover opacity-50"
          sizes="100vw"
          priority={false}
        />
        <Image
          src="/images/enquiry/homeabout 1.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-[rgba(10,10,10,0.65)]" aria-hidden />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,#000_0%,rgba(16,16,16,0)_55%)]"
          aria-hidden
        />
      </div>

      <motion.div
        variants={enquirySectionStagger}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className={`${SECTION_CONTAINER_CLASS} relative z-[1] flex flex-col items-center gap-8 py-12 lg:min-h-0 lg:flex-row lg:items-start lg:justify-between lg:gap-8 lg:py-14 xl:gap-10 xl:py-16 2xl:gap-14 2xl:py-[3vw]`}
      >
        <motion.div
          variants={enquiryCopyReveal}
          className="w-full shrink-0 lg:w-[min(100%,22rem)] xl:w-[min(34%,26rem)] 2xl:w-[min(30%,32rem)]"
        >
          <motion.p
            variants={enquiryCopyItem}
            className="text-[15px] font-extrabold uppercase leading-[22px] tracking-[3.73px] text-[#e40015] lg:text-[clamp(0.7rem,0.78vw,0.875rem)] lg:leading-normal lg:tracking-[0.2em]"
          >
            Start Your Project
          </motion.p>

          <motion.h2
            variants={enquiryCopyItem}
            className="mt-2 text-[clamp(2rem,4.2vw,3.73rem)] font-extrabold leading-[1.08] tracking-[-1.5px] text-white lg:mt-3 lg:text-[clamp(2rem,2.8vw,3.73rem)] lg:leading-[1.1]"
          >
            <span className="block 2xl:whitespace-nowrap">
              Let&apos;s Build Your Next
            </span>
            <span className="block">Industrial Project.</span>
          </motion.h2>

          <motion.p
            variants={enquiryCopyItem}
            className="mt-2 max-w-[512px] text-[clamp(1rem,1.4vw,1.267rem)] leading-[1.75] text-white/80 lg:mt-3 lg:max-w-none lg:text-[clamp(0.9375rem,1.05vw,1.267rem)] lg:leading-[1.7]"
          >
            Partner with Mekark for high-quality, fast-track, and cost-efficient
            industrial construction solutions.
          </motion.p>

          <motion.ul
            variants={enquiryHighlightStagger}
            className="mt-4 flex flex-col gap-3 lg:mt-5 lg:gap-3"
          >
            {HIGHLIGHTS.map((item) => (
              <motion.li
                key={item}
                variants={enquiryHighlightItem}
                className="flex items-center gap-3 sm:gap-4"
              >
                <span className="flex size-[27px] shrink-0 items-center justify-center rounded-full bg-[#ed2024] lg:size-7 2xl:size-[1.3889vw]">
                  <Image
                    src="/images/enquiry/SVG.svg"
                    alt=""
                    width={14}
                    height={11}
                    className="h-[10px] w-[13px]"
                    aria-hidden
                  />
                </span>
                <span className="text-[clamp(0.95rem,1.3vw,1.175rem)] font-semibold leading-[1.5] text-white/90 lg:text-[clamp(0.9rem,0.98vw,1.175rem)]">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          variants={enquiryFormReveal}
          className={`${styles.frameParent} w-full`}
        >
          <div className={styles.formShape}>
            <Image
              className={styles.vectorIcon}
              src="/images/enquiry/Vector.png"
              fill
              sizes="(max-width: 1024px) 0px, min(52rem, 55vw)"
              alt=""
              aria-hidden
            />

            <div className={styles.frameGroup}>
              <div className={styles.background}>
              <form
                id="enquiry-form"
                onSubmit={handleSubmit}
                className={styles.form}
              >
                <div className={styles.label}>
                  <div className={styles.enquiryForm}>Enquiry Form</div>
                </div>

                <div className={styles.formRow}>
                  <FormField label="Name" required>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      className={styles.input}
                    />
                  </FormField>
                  <FormField label="Email" required>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@company.com"
                      className={styles.input}
                    />
                  </FormField>
                </div>

                <div className={styles.formRow}>
                  <FormField label="Phone" required>
                    <input
                      type="tel"
                      name="phone"
                      required
                      inputMode="numeric"
                      autoComplete="tel-national"
                      maxLength={10}
                      pattern="\d{10}"
                      value={phone}
                      onChange={(event) =>
                        setPhone(normalizePhone(event.target.value))
                      }
                      placeholder="+91 98XXX XXXXX"
                      className={styles.input}
                    />
                  </FormField>
                  <FormField label="Company" required>
                    <input
                      type="text"
                      name="company"
                      required
                      placeholder="Company name"
                      className={styles.input}
                    />
                  </FormField>
                </div>

                <div className={styles.formRow}>
                  <FormField label="Location" required>
                    <input
                      type="text"
                      name="location"
                      required
                      placeholder="City / District"
                      className={styles.input}
                    />
                  </FormField>
                  <FormField label="Industry Type" required>
                    <SelectField
                      id="enquiry-industry"
                      name="industry"
                      required
                      value={industryType}
                      onChange={setIndustryType}
                      options={INDUSTRY_TYPES}
                    />
                  </FormField>
                </div>

                <div className={styles.formRow}>
                  <FormField label="Service" required>
                    <SelectField
                      id="enquiry-service"
                      name="service"
                      required
                      value={serviceType}
                      onChange={setServiceType}
                      options={SERVICE_TYPES}
                    />
                  </FormField>
                  <FormField label="Project (Sq.ft)" required>
                    <SelectField
                      id="enquiry-area"
                      name="sqft"
                      required
                      value={projectArea}
                      onChange={setProjectArea}
                      options={PROJECT_AREAS}
                    />
                  </FormField>
                </div>

                <div className={styles.formRow}>
                  <FormField label="Project Start Timeline" required>
                    <SelectField
                      id="enquiry-timeline"
                      name="projectTimeline"
                      required
                      value={projectTimeline}
                      onChange={setProjectTimeline}
                      options={PROJECT_TIMELINES}
                    />
                  </FormField>
                  <FormField label="Project Budget" required>
                    <SelectField
                      id="enquiry-budget"
                      name="projectBudget"
                      required
                      value={projectBudget}
                      onChange={setProjectBudget}
                      options={PROJECT_BUDGETS}
                    />
                  </FormField>
                </div>

                <FormField
                  label="Project Details"
                  required
                  className={styles.fieldFull}
                >
                  <textarea
                    name="message"
                    rows={3}
                    required
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Describe your project — type, usage, timeline…"
                    className={styles.textarea}
                  />
                </FormField>
              </form>
            </div>
          </div>
          </div>

          <div className={styles.buttonmargin}>
            {submitMessage ? (
              <p role="alert" className={styles.errorMessage}>
                {submitMessage}
              </p>
            ) : null}
            <button
              type="submit"
              form="enquiry-form"
              disabled={submitStatus === "submitting"}
              className={styles.button}
            >
              <div className={styles.requestProjectProposal}>
                {submitStatus === "submitting"
                  ? "Submitting..."
                  : "Request Project Proposal"}
              </div>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
