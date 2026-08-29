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

const VIEWPORT = { once: true, margin: "-80px" as const };

const HIGHLIGHTS = [
  "200+ industrial projects delivered",
  "18+ years of structural expertise",
  "98% on-time project execution",
] as const;

const PROJECT_AREAS = [
  "Select area",
  "10,000 - 20,000 sq.ft",
  "20,000 - 30,000 sq.ft",
  "30,000 - 50,000 sq.ft",
  "Above 50,000 sq.ft",
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

function normalizePhone(value: string) {
  return value.replace(/\D/g, "").slice(0, 10);
}

function isValidPhone(phone: string) {
  return /^\d{10}$/.test(phone);
}

const INPUT_CLASS =
  "w-full rounded-[12px] border border-[rgba(63,63,63,0.1)] bg-[rgba(237,32,36,0.06)] px-[15px] py-3 text-[13px] leading-normal text-[#03080f] outline-none transition-[border-color,box-shadow] placeholder:text-[#03080f]/45 focus:border-[#ed1c24]/30 focus:ring-2 focus:ring-[#ed1c24]/10";

const LABEL_CLASS =
  "text-[11px] font-extrabold uppercase tracking-[1.93px] text-black/50 leading-[14.5px]";

function CheckIcon() {
  return (
    <svg
      width="10"
      height="8"
      viewBox="0 0 10 8"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <path
        d="M1 4L3.5 6.5L9 1"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
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
    <div className={`flex flex-col gap-[7px]${className ? ` ${className}` : ""}`}>
      <label className={LABEL_CLASS}>
        {label}
        {required ? " *" : ""}
      </label>
      {children}
    </div>
  );
}

function EnquiryFormCard({ children }: { children: ReactNode }) {
  const redClip = "polygon(0 0, 100% 0, 85% 100%, 0 100%)";

  return (
    <div className="relative w-full overflow-hidden rounded-[20px] bg-white shadow-[0px_8px_32px_rgba(0,0,0,0.12)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-[88px]"
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#c41218] to-[#ed2024]"
          style={{ clipPath: redClip }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent to-black/[0.08]"
          style={{ clipPath: redClip }}
        />
      </div>
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
}: {
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
  required?: boolean;
}) {
  const placeholder = options[0];

  return (
    <div className="relative">
      <select
        name={name}
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`${INPUT_CLASS} appearance-none pr-10`}
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
        src="/images/enquiry/icon-chevron.svg"
        alt=""
        width={10}
        height={6}
        aria-hidden
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 opacity-40"
      />
    </div>
  );
}

type SubmitStatus = "idle" | "submitting" | "error";

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

  // Prefill from Find your solution redirect: /?industry=…&service=…#enquiry
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

    requestAnimationFrame(() => {
      document.getElementById("enquiry")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
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
      className="relative w-full scroll-mt-28 overflow-hidden bg-[#0a0a0a]"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/enquiry/homeabout 1.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={false}
        />
        <div
          className="absolute inset-0 bg-[rgba(10,10,10,0.65)]"
          aria-hidden
        />
        <div
          className="absolute inset-y-0 left-0 w-full max-w-[min(100%,680px)] bg-gradient-to-r from-black to-transparent"
          aria-hidden
        />
      </div>

      <motion.div
        variants={enquirySectionStagger}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="relative mx-auto flex min-h-[560px] w-full max-w-[1440px] flex-col items-center gap-12 px-5 py-14 sm:px-8 lg:min-h-[678px] lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-[72px] lg:py-16 xl:px-20"
      >
        <motion.div
          variants={enquiryCopyReveal}
          className="w-full max-w-[580px] shrink-0 lg:max-w-[520px]"
        >
          <motion.p
            variants={enquiryCopyItem}
            className="text-[15px] font-extrabold uppercase leading-[22px] tracking-[3.73px] text-[#e40015]"
          >
            Start Your Project
          </motion.p>

          <motion.h2
            variants={enquiryCopyItem}
            className="mt-[15px] text-[clamp(2rem,4.2vw,3.73rem)] font-extrabold leading-[1.08] tracking-[-1.5px] text-white lg:leading-[64.5px]"
          >
            Let&apos;s Build Your Next Industrial Project.
          </motion.h2>

          <motion.p
            variants={enquiryCopyItem}
            className="mt-4 max-w-[512px] text-[clamp(1rem,1.4vw,1.267rem)] leading-[1.75] text-white/80"
          >
            Partner with Mekark for high-quality, fast-track, and cost-efficient
            industrial construction solutions.
          </motion.p>

          <motion.ul
            variants={enquiryHighlightStagger}
            className="mt-8 flex flex-col gap-[21px]"
          >
            {HIGHLIGHTS.map((item) => (
              <motion.li
                key={item}
                variants={enquiryHighlightItem}
                className="flex items-center gap-4"
              >
                <span className="flex size-[27px] shrink-0 items-center justify-center rounded-full bg-[#ed2024]">
                  <CheckIcon />
                </span>
                <span className="text-[clamp(0.95rem,1.3vw,1.175rem)] font-semibold leading-[1.5] text-white/90">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          variants={enquiryFormReveal}
          className="relative w-full max-w-[807px] shrink-0"
        >
          <div className="relative w-full lg:pb-[72px]">
            <EnquiryFormCard>
              <form
                id="enquiry-form"
                onSubmit={handleSubmit}
                className="relative flex flex-col pl-14 pr-5 pt-8 pb-8 sm:pl-[96px] sm:pr-7 sm:pt-9 sm:pb-9 lg:pl-[102px] lg:pr-8 lg:pt-10 lg:pb-10"
              >
                <h3 className="text-xl font-extrabold capitalize leading-none text-black">
                  Enquiry Form
                </h3>

                <div className="mt-6 grid grid-cols-1 gap-[17px] md:grid-cols-2 md:gap-x-6">
                  <FormField label="Name" required>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      className={INPUT_CLASS}
                    />
                  </FormField>
                  <FormField label="Email" required>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@company.com"
                      className={INPUT_CLASS}
                    />
                  </FormField>
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
                      placeholder="10-digit mobile number"
                      className={INPUT_CLASS}
                    />
                  </FormField>
                  <FormField label="Company">
                    <input
                      type="text"
                      name="company"
                      placeholder="Company name"
                      className={INPUT_CLASS}
                    />
                  </FormField>
                  <FormField label="Location">
                    <input
                      type="text"
                      name="location"
                      placeholder="City / District"
                      className={INPUT_CLASS}
                    />
                  </FormField>
                  <FormField label="Industry Type" required>
                    <SelectField
                      name="industry"
                      required
                      value={industryType}
                      onChange={setIndustryType}
                      options={industryOptions}
                    />
                  </FormField>
                  <FormField label="Service">
                    <SelectField
                      name="service"
                      value={serviceType}
                      onChange={setServiceType}
                      options={serviceOptions}
                    />
                  </FormField>
                  <FormField label="Project Area" required>
                    <SelectField
                      name="sqft"
                      required
                      value={projectArea}
                      onChange={setProjectArea}
                      options={PROJECT_AREAS}
                    />
                  </FormField>
                  <FormField label="Project Start Timeline" required>
                    <SelectField
                      name="projectTimeline"
                      required
                      value={projectTimeline}
                      onChange={setProjectTimeline}
                      options={PROJECT_TIMELINES}
                    />
                  </FormField>
                  <FormField label="Project Budget" required>
                    <SelectField
                      name="projectBudget"
                      required
                      value={projectBudget}
                      onChange={setProjectBudget}
                      options={PROJECT_BUDGETS}
                    />
                  </FormField>
                  <FormField label="Project Details" className="md:col-span-2">
                    <textarea
                      name="message"
                      rows={3}
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      placeholder="Describe your project — type, usage, timeline…"
                      className={`${INPUT_CLASS} min-h-[80px] resize-none leading-[19.5px]`}
                    />
                  </FormField>
                </div>
            </form>
          </EnquiryFormCard>

          <div className="mt-4 flex flex-col items-center gap-3 lg:absolute lg:bottom-0 lg:left-[calc(50%+24px)] lg:mt-0 lg:w-[379px] lg:-translate-x-1/2">
            {submitMessage ? (
              <p
                role="alert"
                className="w-full text-center text-sm font-semibold text-[#ed1c24]"
              >
                {submitMessage}
              </p>
            ) : null}
            <button
              type="submit"
              form="enquiry-form"
              disabled={submitStatus === "submitting"}
              className="w-full rounded-[14px] bg-[#ed1c24] px-6 py-4 text-base font-extrabold text-white shadow-[0px_8px_16px_rgba(237,28,36,0.35)] transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
            >
              {submitStatus === "submitting"
                ? "Submitting..."
                : "Request Project Proposal"}
            </button>
          </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
