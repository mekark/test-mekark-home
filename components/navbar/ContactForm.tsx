"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const START_TIMELINES = [
  "Immediately",
  "Within 1 Month",
  "Within 3 Months",
  "Planning for Future",
];

const BUDGETS = [
  "Below ₹50 Lakhs",
  "₹50 Lakhs – ₹1 Crore",
  "₹1 Crore – ₹5 Crores",
  "Above ₹5 Crores",
];

const PROJECT_AREAS = [
  "10,000 - 20,000 Sq.ft",
  "20,000 - 30,000 Sq.ft",
  "30,000 - 50,000 Sq.ft",
  "50,000+ Sq.ft",
];

const serviceOptions = [
  "Pre-Engineered Building",
  "Multi Storey Steel Building",
  "Warehouse Steel",
  "Institutional Building",
  "Factory/Industrial Buildings",
  "Civil Construction",
  "MEP",
  "Tensile",
  "Solar",
  "Others",
];

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  sqf: string;
  startTimeline: string;
  budget: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  sqf: "",
  startTimeline: "",
  budget: "",
  message: "",
};

const inputClass =
  "mt-1 w-full h-11 px-4 rounded-lg border border-gray-200 bg-white text-[#111] text-[14px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ED2024]/30";
const selectClass =
  "mt-1 w-full h-11 appearance-none pl-4 pr-9 rounded-lg border border-gray-200 bg-white bg-no-repeat text-[#111] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#ED2024]/30";
const selectArrowStyle = {
  backgroundImage:
    "url(\"data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none' stroke='%236b7280' stroke-width='1.5'%3E%3Cpath d='M6 8l4 4 4-4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
  backgroundPosition: "right 14px center",
  backgroundSize: "14px 14px",
};
const labelClass = "text-sm font-medium text-[#111]";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const clearError = (field: keyof FormData) => {
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: value }));
    clearError("phone");
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Mobile number must be exactly 10 digits";
    }

    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.sqf) {
      newErrors.sqf = "Please select the project area";
    }

    if (!formData.startTimeline) {
      newErrors.startTimeline = "Please select a project start timeline";
    }

    if (!formData.budget) {
      newErrors.budget = "Please select a project budget";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildMessage = () => {
    const parts: string[] = [];

    if (formData.service) {
      parts.push(`Service: ${formData.service}`);
    }

    if (formData.message.trim()) {
      parts.push(formData.message.trim());
    }

    return parts.join("\n\n");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enquiry-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          company: formData.company.trim(),
          location: "",
          industry: formData.service || "General Enquiry",
          sqf: formData.sqf,
          startTimeline: formData.startTimeline,
          budget: formData.budget,
          message: buildMessage(),
        }),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        setSubmitError(
          data.message ?? "Unable to submit your enquiry. Please try again.",
        );
        return;
      }

      setFormData(initialFormData);
      window.location.assign("/thank-you");
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-[24px] border border-black/8 bg-white p-6 shadow-[0px_18px_44px_rgba(0,0,0,0.08)] md:p-8"
    >
      <div className="mb-6">
        <p className="text-[11px] font-extrabold uppercase tracking-[2.2px] text-[#ed1c24]">
          Enquiry form
        </p>
        <h2 className="mt-1 text-[22px] font-extrabold tracking-[-0.4px] text-black">
          Request a consultation
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <label htmlFor="contact-name" className={labelClass}>
              Name <span className="text-[#ED2024]">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                clearError("name");
              }}
              placeholder="Enter your full name"
              className={inputClass}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <label htmlFor="contact-company" className={labelClass}>
              Company Name
            </label>
            <input
              id="contact-company"
              type="text"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
              placeholder="Enter your company name"
              className={inputClass}
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <label htmlFor="contact-phone" className={labelClass}>
              Mobile Number <span className="text-[#ED2024]">*</span>
            </label>
            <input
              id="contact-phone"
              type="tel"
              inputMode="numeric"
              maxLength={10}
              value={formData.phone}
              onChange={handlePhoneChange}
              placeholder="10 digit mobile number"
              className={inputClass}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <label htmlFor="contact-email" className={labelClass}>
              Email <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              id="contact-email"
              type="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                clearError("email");
              }}
              placeholder="Enter your email address"
              className={inputClass}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <label htmlFor="contact-service" className={labelClass}>
              Select Service{" "}
              <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <select
              id="contact-service"
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
              className={selectClass}
              style={selectArrowStyle}
            >
              <option value="">Select a service</option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.21 }}
          >
            <label htmlFor="contact-sqf" className={labelClass}>
              Project Area (Sq.ft) <span className="text-[#ED2024]">*</span>
            </label>
            <select
              id="contact-sqf"
              value={formData.sqf}
              onChange={(e) => {
                setFormData({ ...formData, sqf: e.target.value });
                clearError("sqf");
              }}
              className={selectClass}
              style={selectArrowStyle}
            >
              <option value="">Select area</option>
              {PROJECT_AREAS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.sqf && (
              <p className="text-red-500 text-xs mt-1">{errors.sqf}</p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.22 }}
          >
            <label htmlFor="contact-startTimeline" className={labelClass}>
              Project Start Timeline <span className="text-[#ED2024]">*</span>
            </label>
            <select
              id="contact-startTimeline"
              value={formData.startTimeline}
              onChange={(e) => {
                setFormData({ ...formData, startTimeline: e.target.value });
                clearError("startTimeline");
              }}
              className={selectClass}
              style={selectArrowStyle}
            >
              <option value="">Select timeline</option>
              {START_TIMELINES.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.startTimeline && (
              <p className="text-red-500 text-xs mt-1">{errors.startTimeline}</p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.24 }}
          >
            <label htmlFor="contact-budget" className={labelClass}>
              Project Budget <span className="text-[#ED2024]">*</span>
            </label>
            <select
              id="contact-budget"
              value={formData.budget}
              onChange={(e) => {
                setFormData({ ...formData, budget: e.target.value });
                clearError("budget");
              }}
              className={selectClass}
              style={selectArrowStyle}
            >
              <option value="">Select budget range</option>
              {BUDGETS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.budget && (
              <p className="text-red-500 text-xs mt-1">{errors.budget}</p>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <label htmlFor="contact-message" className={labelClass}>
            Message
          </label>
          <textarea
            id="contact-message"
            rows={4}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder="Tell us about your project or enquiry"
            className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#111] text-[14px] placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#ED2024]/30"
          />
        </motion.div>

        {submitError && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm"
          >
            {submitError}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          className="h-[52px] w-full rounded-[12px] bg-[#ed1c24] text-sm font-extrabold text-white shadow-[0px_8px_16px_rgba(237,28,36,0.28)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Send project enquiry"}
        </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
}
