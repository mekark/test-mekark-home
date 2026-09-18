"use client";

import { type FormEvent, type ReactNode, useId, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useNavigationLoading } from "@/components/ui/NavigationLoadingProvider";
import {
  INDUSTRY_TYPES,
  PROJECT_AREAS,
  PROJECT_BUDGETS,
  PROJECT_TIMELINES,
  SERVICE_TYPES,
  TENSILE_PROJECT_AREAS,
  clearEnquirySource,
  getEnquirySource,
  isValidPhone,
  normalizePhone,
} from "@/components/enquiry/enquiry-form-shared";
import styles from "./enquiry-form.module.css";

function isTensileService(service: string) {
  return service.trim().toLowerCase() === "tensile";
}

function resolveProjectAreas(
  service: string,
  fallbackAreas: readonly string[],
) {
  return isTensileService(service) ? TENSILE_PROJECT_AREAS : fallbackAreas;
}

type SubmitStatus = "idle" | "submitting" | "error";

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
  disabled,
}: {
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
  required?: boolean;
  id: string;
  disabled?: boolean;
}) {
  const placeholder = options[0];

  return (
    <div className={styles.buttonListbox}>
      <select
        id={id}
        name={name}
        required={required}
        disabled={disabled}
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
        alt="Dropdown arrow"
        aria-hidden
      />
    </div>
  );
}

export type EnquiryFormCoreProps = {
  formId?: string;
  title?: string;
  defaultService?: string;
  defaultIndustry?: string;
  defaultMessage?: string;
  sourcePage?: string;
  lockService?: boolean;
  lockIndustry?: boolean;
  variant?: "section" | "modal";
  submitLabel?: string;
  projectAreas?: readonly string[];
  onSubmitSuccess?: () => void;
  onBeforeNavigate?: () => void;
  onTrackSubmit?: () => void;
};

export function EnquiryFormCore({
  formId = "enquiry-form",
  title = "Enquiry Form",
  defaultService = "",
  defaultIndustry = "",
  defaultMessage = "",
  sourcePage,
  lockService = false,
  lockIndustry = false,
  variant = "section",
  submitLabel = "Request Project Proposal",
  projectAreas = PROJECT_AREAS,
  onSubmitSuccess,
  onBeforeNavigate,
  onTrackSubmit,
}: EnquiryFormCoreProps) {
  const router = useRouter();
  const { startNavigation } = useNavigationLoading();
  const fieldIdPrefix = useId().replace(/:/g, "");
  const [projectArea, setProjectArea] = useState("");
  const [industryType, setIndustryType] = useState(defaultIndustry);
  const [serviceType, setServiceType] = useState(defaultService);
  const [projectTimeline, setProjectTimeline] = useState("");
  const [projectBudget, setProjectBudget] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(defaultMessage);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const activeService = serviceType || defaultService;
  const areaOptions = resolveProjectAreas(activeService, projectAreas);

  function handleServiceChange(value: string) {
    setServiceType(value);
    const nextAreas = resolveProjectAreas(value, projectAreas);
    if (projectArea && !nextAreas.includes(projectArea)) {
      setProjectArea("");
    }
  }

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

    const industry =
      String(formData.get("industry") ?? "").trim() ||
      industryType.trim() ||
      defaultIndustry.trim();
    const service =
      String(formData.get("service") ?? "").trim() ||
      serviceType.trim() ||
      defaultService.trim();
    const details = String(formData.get("message") ?? "").trim();
    const resolvedSourcePage =
      sourcePage?.trim() || getEnquirySource() || "";

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
      sourcePage: resolvedSourcePage,
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

      onTrackSubmit?.();
      clearEnquirySource();
      onSubmitSuccess?.();
      onBeforeNavigate?.();
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

  const rootClassName =
    variant === "modal"
      ? `${styles.frameParent} ${styles.modalRoot}`
      : styles.frameParent;

  return (
    <div className={rootClassName}>
      <div className={styles.formShape}>
        <Image
          className={styles.vectorIcon}
          src="/images/enquiry/Vector.webp"
          fill
          sizes="(max-width: 1024px) 0px, min(52rem, 55vw)"
          alt="Enquiry form decorative frame"
          aria-hidden
        />

        <div className={styles.frameGroup}>
          <div className={styles.background}>
            <form id={formId} onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.label}>
                <div className={styles.enquiryForm}>{title}</div>
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
                  <>
                    {lockIndustry && (industryType || defaultIndustry) ? (
                      <input
                        type="hidden"
                        name="industry"
                        value={industryType || defaultIndustry}
                      />
                    ) : null}
                    <SelectField
                      id={`${fieldIdPrefix}-industry`}
                      name="industry"
                      required
                      value={industryType}
                      onChange={setIndustryType}
                      options={INDUSTRY_TYPES}
                      disabled={lockIndustry && Boolean(defaultIndustry)}
                    />
                  </>
                </FormField>
              </div>

              <div className={styles.formRow}>
                <FormField label="Service">
                  <>
                    {lockService && (serviceType || defaultService) ? (
                      <input
                        type="hidden"
                        name="service"
                        value={serviceType || defaultService}
                      />
                    ) : null}
                    <SelectField
                      id={`${fieldIdPrefix}-service`}
                      name="service"
                      value={serviceType}
                      onChange={handleServiceChange}
                      options={SERVICE_TYPES}
                      disabled={lockService && Boolean(defaultService)}
                    />
                  </>
                </FormField>
                <FormField label="Project Sq.ft" required>
                  <SelectField
                    id={`${fieldIdPrefix}-area`}
                    name="sqft"
                    required
                    value={projectArea}
                    onChange={setProjectArea}
                    options={areaOptions}
                  />
                </FormField>
              </div>

              <div className={styles.formRow}>
                <FormField label="Project Start Timeline" required>
                  <SelectField
                    id={`${fieldIdPrefix}-timeline`}
                    name="projectTimeline"
                    required
                    value={projectTimeline}
                    onChange={setProjectTimeline}
                    options={PROJECT_TIMELINES}
                  />
                </FormField>
                <FormField label="Project Budget" required>
                  <SelectField
                    id={`${fieldIdPrefix}-budget`}
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
                  rows={variant === "modal" ? 2 : 3}
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
          form={formId}
          disabled={submitStatus === "submitting"}
          className={styles.button}
        >
          <div className={styles.requestProjectProposal}>
            {submitStatus === "submitting" ? "Submitting..." : submitLabel}
          </div>
        </button>
      </div>
    </div>
  );
}
