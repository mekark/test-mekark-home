"use client";

import { type FormEvent, type ReactNode, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
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
  "450+ industrial projects delivered",
  "15+ years of structural expertise",
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
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-[7px]">
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
  const [projectArea, setProjectArea] = useState<string>(PROJECT_AREAS[0]);
  const [industryType, setIndustryType] = useState<string>(INDUSTRY_TYPES[0]);
  const [projectTimeline, setProjectTimeline] = useState<string>(
    PROJECT_TIMELINES[0],
  );
  const [projectBudget, setProjectBudget] = useState<string>(
    PROJECT_BUDGETS[0],
  );
  const [phone, setPhone] = useState("");
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitMessage, setSubmitMessage] = useState("");

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

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: normalizedPhone,
      company: String(formData.get("company") ?? "").trim(),
      location: String(formData.get("location") ?? "").trim(),
      industry: String(formData.get("industry") ?? "").trim(),
      sqf: String(formData.get("sqft") ?? "").trim(),
      startTimeline: String(formData.get("projectTimeline") ?? "").trim(),
      budget: String(formData.get("projectBudget") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
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

      router.push("/thank-you");
    } catch {
      setSubmitStatus("error");
      setSubmitMessage(
        "Unable to submit your enquiry. Please check your connection and try again.",
      );
    }
  }

  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/enquiry/background.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={false}
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[rgba(14,14,15,0.55)] via-[rgba(14,14,15,0.35)] to-[rgba(22,22,24,0)]"
          aria-hidden
        />
      </div>

      <motion.div
        variants={enquirySectionStagger}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="relative mx-auto flex min-h-[560px] w-full max-w-[1440px] flex-col items-center gap-12 px-5 py-14 sm:px-8 lg:min-h-[670px] lg:flex-row lg:items-start lg:justify-between lg:gap-10 lg:px-20 lg:py-20"
      >
        <motion.div
          variants={enquiryCopyReveal}
          className="w-full max-w-[520px] shrink-0 lg:max-w-[434px] lg:pt-10"
        >
          <motion.p
            variants={enquiryCopyItem}
            className="text-[11px] font-extrabold uppercase tracking-[2.8px] text-white/70"
          >
            Start Your Project
          </motion.p>

          <motion.h2
            variants={enquiryCopyItem}
            className="mt-3 text-[clamp(1.75rem,4vw,2.8rem)] font-extrabold leading-[1.08] tracking-[-1.12px] text-white lg:text-[44px] lg:leading-[48px]"
          >
            Let&apos;s Build Your Next Industrial Project.
          </motion.h2>

          <motion.p
            variants={enquiryCopyItem}
            className="mt-3 max-w-[384px] text-[15px] leading-[26px] text-white/80"
          >
            Partner with Mekark for high-quality, fast-track, and cost-efficient
            industrial building solutions.
          </motion.p>

          <motion.ul
            variants={enquiryHighlightStagger}
            className="mt-6 flex flex-col gap-4"
          >
            {HIGHLIGHTS.map((item) => (
              <motion.li
                key={item}
                variants={enquiryHighlightItem}
                className="flex items-center gap-3"
              >
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#ed2024]">
                  <CheckIcon />
                </span>
                <span className="text-sm font-semibold text-white/90">
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
                      options={INDUSTRY_TYPES}
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
                  <FormField label="Project Details">
                    <textarea
                      name="message"
                      rows={3}
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
