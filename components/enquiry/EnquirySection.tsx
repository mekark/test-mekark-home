"use client";

import { type FormEvent, type ReactNode, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { useNavigationLoading } from "@/components/ui/NavigationLoadingProvider";
import {
  ENQUIRY_INDUSTRY_BY_SLUG,
  FIND_SERVICES,
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
  "Under 5,000 sq ft",
  "5,000 – 20,000 sq ft",
  "20,000 – 50,000 sq ft",
  "50,000+ sq ft",
] as const;

const INDUSTRY_TYPES = [
  "Select industry type",
  "Institutional — Auditoriums & Stadiums",
  "Warehouse & Logistics",
  "Factories, Industries & Plants",
  "Manufacturing",
  "Multistorey Steel",
  "Cold Storage",
  "EOT Crane",
  "Datacentre",
  "Clean Rooms",
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
  ...FIND_SERVICES.map((service) => service.label),
] as const;

function withExtraOption(options: readonly string[], extra: string) {
  if (!extra || extra === options[0] || options.includes(extra)) {
    return options;
  }

  return [options[0], extra, ...options.slice(1)];
}

function resolveIndustryValue(
  industrySlug: string | null,
  industryLabel: string | null,
) {
  if (industryLabel) {
    const exact = INDUSTRY_TYPES.find(
      (option) => option.toLowerCase() === industryLabel.toLowerCase(),
    );

    if (exact && exact !== INDUSTRY_TYPES[0]) {
      return exact;
    }

    return industryLabel;
  }

  if (industrySlug && ENQUIRY_INDUSTRY_BY_SLUG[industrySlug]) {
    return ENQUIRY_INDUSTRY_BY_SLUG[industrySlug];
  }

  return "";
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

  return matched?.label ?? serviceLabel ?? "";
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
        {label}
        {required ? " *" : ""}
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

  const industryOptions = useMemo(
    () => withExtraOption(INDUSTRY_TYPES, industryType),
    [industryType],
  );
  const serviceOptions = useMemo(
    () => withExtraOption(SERVICE_TYPES, serviceType),
    [serviceType],
  );

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
    const messageBody =
      service && !details.toLowerCase().includes(service.toLowerCase())
        ? [details, `Service: ${service}`].filter(Boolean).join("\n")
        : details;

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: normalizedPhone,
      company: String(formData.get("company") ?? "").trim(),
      location: String(formData.get("location") ?? "").trim(),
      industry,
      sqf: String(formData.get("sqft") ?? "").trim(),
      startTimeline: String(formData.get("projectTimeline") ?? "").trim(),
      budget: String(formData.get("projectBudget") ?? "").trim(),
      message: messageBody,
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
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        setSubmitStatus("error");
        setSubmitMessage(
          data.message ?? "Unable to submit your enquiry. Please try again.",
        );
        return;
      }

      startNavigation();
      router.push("/thank-you");
    } catch {
      setSubmitStatus("error");
      setSubmitMessage(
        "Unable to submit your enquiry. Please check your connection and try again.",
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
        className={`${SECTION_CONTAINER_CLASS} relative z-[1] flex flex-col items-center justify-between gap-8 py-12 lg:min-h-[25vw] lg:flex-row lg:items-start lg:gap-[3.75vw] lg:pt-[2.6vw] lg:pb-[1.6vw]`}
      >
        <motion.div
          variants={enquiryCopyReveal}
          className="w-full shrink-0 lg:w-[30.1389vw] lg:pl-[2.0833vw] lg:pt-[1.5vw]"
        >
          <motion.p
            variants={enquiryCopyItem}
            className="text-[15px] font-extrabold uppercase leading-[22px] tracking-[3.73px] text-[#e40015] lg:text-[0.7778vw] lg:leading-[1.1667vw] lg:tracking-[0.1944vw]"
          >
            Start Your Project
          </motion.p>

          <motion.h2
            variants={enquiryCopyItem}
            className="mt-2 text-[clamp(2rem,4.2vw,3.73rem)] font-extrabold leading-[1.08] tracking-[-1.5px] text-white lg:mt-[0.5556vw] lg:text-[3.1111vw] lg:leading-[3.3597vw] lg:tracking-[-0.0778vw]"
          >
            <span className="block lg:whitespace-nowrap">
              Let&apos;s Build Your Next
            </span>
            <span className="block">Industrial Project.</span>
          </motion.h2>

          <motion.p
            variants={enquiryCopyItem}
            className="mt-2 max-w-[512px] text-[clamp(1rem,1.4vw,1.267rem)] leading-[1.75] text-white/80 lg:mt-[0.5556vw] lg:max-w-[26.6667vw] lg:text-[1.0556vw] lg:leading-[1.8472vw]"
          >
            Partner with Mekark for high-quality, fast-track, and cost-efficient
            industrial construction solutions.
          </motion.p>

          <motion.ul
            variants={enquiryHighlightStagger}
            className="mt-4 flex flex-col gap-3 lg:mt-[1.25vw] lg:gap-[0.8333vw]"
          >
            {HIGHLIGHTS.map((item) => (
              <motion.li
                key={item}
                variants={enquiryHighlightItem}
                className="flex items-center gap-4 lg:gap-[0.8333vw]"
              >
                <span className="flex size-[27px] shrink-0 items-center justify-center rounded-full bg-[#ed2024] lg:size-[1.3889vw]">
                  <Image
                    src="/images/enquiry/SVG.svg"
                    alt=""
                    width={14}
                    height={11}
                    className="h-[10px] w-[13px] lg:h-[0.5573vw] lg:w-[0.6927vw]"
                    aria-hidden
                  />
                </span>
                <span className="text-[clamp(0.95rem,1.3vw,1.175rem)] font-semibold leading-[1.5] text-white/90 lg:text-[0.9792vw] lg:leading-[1.4667vw]">
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
              sizes="(max-width: 1024px) 0px, 44vw"
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
                  <FormField label="Company">
                    <input
                      type="text"
                      name="company"
                      placeholder="Company name"
                      className={styles.input}
                    />
                  </FormField>
                </div>

                <div className={styles.formRow}>
                  <FormField label="Location">
                    <input
                      type="text"
                      name="location"
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
                      options={industryOptions}
                    />
                  </FormField>
                </div>

                <div className={styles.formRow}>
                  <FormField label="Service">
                    <SelectField
                      id="enquiry-service"
                      name="service"
                      value={serviceType}
                      onChange={setServiceType}
                      options={serviceOptions}
                    />
                  </FormField>
                  <FormField label="Project Area" required>
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

                <FormField label="Project Details" className={styles.fieldFull}>
                  <textarea
                    name="message"
                    rows={3}
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
