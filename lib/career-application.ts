export type CareerApplicationPayload = {
  name: string;
  email: string;
  role: string;
  experience: string;
  expertise: string;
  applicationType?: string;
  sourceDomain?: string;
  sourceName?: string;
  resumeBase64: string;
  resumeFileName: string;
  resumeContentType?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_RESUME_EXTENSIONS = [".pdf", ".doc", ".docx"];
const MAX_RESUME_BYTES = 5 * 1024 * 1024;

function hasValue(value: unknown) {
  return value != null && String(value).trim().length > 0;
}

function resumeExtension(fileName: string) {
  const match = fileName.toLowerCase().match(/\.[a-z0-9]+$/);
  return match?.[0] ?? "";
}

export function validateCareerPayload(
  body: Partial<CareerApplicationPayload>,
) {
  if (!hasValue(body.name)) {
    return "Full name is required";
  }

  if (!hasValue(body.email)) {
    return "Email address is required";
  }

  if (!EMAIL_PATTERN.test(String(body.email).trim())) {
    return "Enter a valid email address";
  }

  if (!hasValue(body.role)) {
    return "Current role / designation is required";
  }

  if (!hasValue(body.experience)) {
    return "Years of experience is required";
  }

  if (!hasValue(body.expertise) || body.expertise === "Area of Expertise") {
    return "Area of expertise is required";
  }

  if (!hasValue(body.resumeBase64) || !hasValue(body.resumeFileName)) {
    return "Resume is required";
  }

  const extension = resumeExtension(String(body.resumeFileName));

  if (!ALLOWED_RESUME_EXTENSIONS.includes(extension)) {
    return "Resume must be a PDF, DOC, or DOCX file";
  }

  const padding = (body.resumeBase64?.match(/=+$/) ?? [""])[0].length;
  const estimatedBytes = Math.floor(
    (String(body.resumeBase64).length * 3) / 4 - padding,
  );

  if (estimatedBytes > MAX_RESUME_BYTES) {
    return "Resume must be 5MB or smaller";
  }

  return null;
}

export const CAREER_MAX_RESUME_BYTES = MAX_RESUME_BYTES;
