"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { CAREER_MAX_RESUME_BYTES } from "@/lib/career-application";
import { AssetIcon } from "./AssetIcon";

const expertiseAreas = [
  "PEB Structures",
  "Civil Construction",
  "MEP",
  "HVAC",
  "Fire Systems",
  "Solar",
  "Sales & Business Development",
  "Project Management",
  "Other",
];

async function fileToBase64(file: File) {
  const dataUrl = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
        return;
      }

      reject(new Error("Failed to read resume"));
    };
    reader.onerror = () =>
      reject(reader.error ?? new Error("Failed to read resume"));
    reader.readAsDataURL(file);
  });

  const commaIndex = dataUrl.indexOf(",");
  return commaIndex >= 0 ? dataUrl.slice(commaIndex + 1) : dataUrl;
}

export function CtaSection() {
  const [resumeName, setResumeName] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const resume = data.get("resume");

    if (!(resume instanceof File) || !resume.name) {
      setStatus("error");
      setStatusMessage("Resume is required");
      return;
    }

    if (resume.size > CAREER_MAX_RESUME_BYTES) {
      setStatus("error");
      setStatusMessage("Resume must be 5MB or smaller");
      return;
    }

    setStatus("sending");
    setStatusMessage("");

    try {
      const resumeBase64 = await fileToBase64(resume);
      const response = await fetch("/api/career-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: String(data.get("name") ?? "").trim(),
          email: String(data.get("email") ?? "").trim(),
          role: String(data.get("role") ?? "").trim(),
          experience: String(data.get("experience") ?? "").trim(),
          expertise: String(data.get("expertise") ?? "").trim(),
          applicationType: "Open Application",
          sourceDomain: window.location.hostname,
          sourceName: "Mekark Careers",
          resumeBase64,
          resumeFileName: resume.name,
          resumeContentType: resume.type || undefined,
        }),
      });

      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !result.success) {
        setStatus("error");
        setStatusMessage(result.message || "Failed to send application");
        return;
      }

      form.reset();
      setResumeName("");
      setStatus("success");
      setStatusMessage("Application sent successfully!");
    } catch {
      setStatus("error");
      setStatusMessage("Failed to send application. Please try again.");
    }
  }

  return (
    <section
      id="open-application"
      className="relative scroll-mt-24 overflow-hidden bg-[#111827] sm:scroll-mt-28"
    >
      <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <Image
          src="/assets/careers/cta-bg.webp"
          alt="Careers call-to-action background"
          fill
          className="object-cover object-center"
          sizes="50vw"
        />
      </div>
      <div className="absolute inset-0 bg-[#111827] lg:bg-gradient-to-r lg:from-[#111827] lg:via-[#111827] lg:via-50% lg:to-transparent" />
      <div className="relative mx-auto flex max-w-[1111px] flex-col gap-8 px-5 py-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-0 lg:py-12">
        <div className="max-w-[432px]">
          <h2 className="text-[28px] font-bold leading-[34px] tracking-[-0.85px] text-white sm:text-[36px] sm:leading-[41px]">
            Ready to build your career
            <br />
            with <span className="text-[#e31b23]">Mekark?</span>
          </h2>
          <p className="mt-2.5 max-w-[337px] border-l-[3px] border-[#e31b23] pl-4 font-manrope text-[14px] leading-[22px] text-[#d1d5db] sm:text-[15px] sm:leading-[24px]">
            Join a team that believes in engineering quality, project
            accountability, and industrial progress.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-[597px] flex-col gap-[12px] overflow-hidden rounded-[13px]"
        >
          <div className="grid grid-cols-1 gap-[12px] sm:grid-cols-2">
            <input
              name="name"
              required
              placeholder="Full Name"
              className="h-[48px] w-full min-w-0 rounded-[10px] border border-[#e8e8e8] bg-white px-[18px] text-[16px] font-medium text-[#111111] outline-none placeholder:text-[#888888] sm:rounded-none sm:rounded-tl-[13px] sm:text-[14px]"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email Address"
              className="h-[48px] w-full min-w-0 rounded-[10px] border border-[#e8e8e8] bg-white px-[18px] text-[16px] font-medium text-[#111111] outline-none placeholder:text-[#888888] sm:rounded-none sm:rounded-tr-[13px] sm:text-[14px]"
            />
            <input
              name="role"
              required
              placeholder="Current Role / Designation"
              className="h-[48px] w-full min-w-0 rounded-[10px] border border-[#e8e8e8] bg-white px-[18px] text-[16px] font-medium text-[#111111] outline-none placeholder:text-[#888888] sm:rounded-none sm:text-[14px]"
            />
            <input
              name="experience"
              required
              placeholder="Years of Experience"
              className="h-[48px] w-full min-w-0 rounded-[10px] border border-[#e8e8e8] bg-white px-[18px] text-[16px] font-medium text-[#111111] outline-none placeholder:text-[#888888] sm:rounded-none sm:text-[14px]"
            />
          </div>
          <div className="grid grid-cols-1 gap-[12px] sm:grid-cols-2">
            <select
              name="expertise"
              required
              defaultValue=""
              className="h-[48px] w-full min-w-0 rounded-[10px] border border-[#e8e8e8] bg-white px-[18px] text-[16px] font-medium text-[#111111] outline-none sm:rounded-none sm:text-[14px]"
            >
              <option value="" disabled>
                Area of Expertise
              </option>
              {expertiseAreas.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
            <label className="relative flex h-[48px] min-w-0 cursor-pointer items-center overflow-hidden rounded-[10px] border border-[#e8e8e8] bg-white px-[18px] text-[16px] font-medium sm:rounded-none sm:text-[14px]">
              <span
                className={
                  resumeName
                    ? "truncate text-[#111111]"
                    : "truncate text-[#888888]"
                }
              >
                {resumeName || "Upload Resume (PDF, DOC, DOCX)"}
              </span>
              <input
                name="resume"
                type="file"
                required
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                className="absolute inset-0 cursor-pointer opacity-0"
                onChange={(event) =>
                  setResumeName(event.target.files?.[0]?.name ?? "")
                }
              />
            </label>
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="flex h-[50px] w-full items-center justify-center gap-2.5 bg-[#ed2024] text-[13px] font-bold tracking-[0.48px] text-white disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "sending"
              ? "Sending application..."
              : "Submit Open Application"}
            {status !== "sending" ? (
              <AssetIcon
                src="/assets/careers/icons/arrow-submit.svg"
                alt="Submit application arrow"
                size={15}
              />
            ) : null}
          </button>
          {statusMessage ? (
            <p
              role="status"
              className={`text-[13px] font-medium ${
                status === "success" ? "text-[#86efac]" : "text-[#fca5a5]"
              }`}
            >
              {statusMessage}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
