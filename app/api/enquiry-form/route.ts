import { NextRequest, NextResponse } from "next/server";

const UPSTREAM_ENDPOINT = "https://mekark-mail.onrender.com/api/enquiry-form";
const UPSTREAM_TIMEOUT_MS = 30_000;

type EnquiryFormPayload = {
  name: string;
  email: string;
  phone: string;
  company: string;
  location: string;
  industry: string;
  service: string;
  sqf: string;
  startTimeline: string;
  budget: string;
  message: string;
};

function normalizePhone(value: string) {
  return value.replace(/\D/g, "");
}

function isValidPhone(phone: string) {
  return /^\d{10}$/.test(phone);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function parseEnquiryPayload(body: unknown): EnquiryFormPayload | null {
  if (!body || typeof body !== "object") {
    return null;
  }

  const data = body as Record<string, unknown>;

  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const phone =
    typeof data.phone === "string" ? normalizePhone(data.phone.trim()) : "";
  const company = typeof data.company === "string" ? data.company.trim() : "";
  const location =
    typeof data.location === "string" ? data.location.trim() : "";
  const industry =
    typeof data.industry === "string" ? data.industry.trim() : "";
  const service = typeof data.service === "string" ? data.service.trim() : "";
  const sqf = typeof data.sqf === "string" ? data.sqf.trim() : "";
  const startTimeline =
    typeof data.startTimeline === "string" ? data.startTimeline.trim() : "";
  const budget = typeof data.budget === "string" ? data.budget.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";

  if (!name || !phone || !industry || !sqf || !startTimeline || !budget) {
    return null;
  }

  if (email && !isValidEmail(email)) {
    return null;
  }

  if (!isValidPhone(phone)) {
    return null;
  }

  return {
    name,
    email,
    phone,
    company,
    location,
    industry: industry || "General Enquiry",
    service,
    sqf,
    startTimeline: startTimeline || "Not specified",
    budget: budget || "Not specified",
    message,
  };
}

function resolveUpstreamOrigin(request: NextRequest) {
  const directOrigin = request.headers.get("origin");

  if (directOrigin) {
    return directOrigin;
  }

  const forwardedHost =
    request.headers.get("x-forwarded-host") || request.headers.get("host");

  const forwardedProto = request.headers.get("x-forwarded-proto") || "https";

  if (forwardedHost) {
    return `${forwardedProto}://${forwardedHost}`;
  }

  return new URL(request.url).origin;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const payload = parseEnquiryPayload(body);

    if (!payload) {
      const phoneValue =
        body &&
        typeof body === "object" &&
        "phone" in body &&
        typeof body.phone === "string"
          ? normalizePhone(body.phone.trim())
          : "";

      if (phoneValue && !isValidPhone(phoneValue)) {
        return NextResponse.json(
          {
            message: "Phone number must be exactly 10 digits.",
          },
          {
            status: 400,
          },
        );
      }

      return NextResponse.json(
        {
          message: "Missing or invalid required fields.",
        },
        {
          status: 400,
        },
      );
    }

    const upstreamOrigin = resolveUpstreamOrigin(request);

    let response: Response;
    try {
      response = await fetch(UPSTREAM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: upstreamOrigin,
        },
        body: JSON.stringify(payload),
        cache: "no-store",
        signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
      });
    } catch (error) {
      const timedOut =
        error instanceof Error &&
        (error.name === "TimeoutError" || error.name === "AbortError");

      console.error("Upstream enquiry request failed:", error);

      return NextResponse.json(
        {
          success: false,
          message: timedOut
            ? "The enquiry service is taking too long. Please try again in a moment."
            : "Unable to reach the enquiry service. Please try again.",
        },
        {
          status: timedOut ? 504 : 502,
        },
      );
    }

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          message: "Unable to submit your enquiry right now. Please try again.",
        },
        {
          status: 500,
        },
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("API route error:", error);

    return NextResponse.json(
      {
        message: "Internal server error",
      },
      {
        status: 500,
      },
    );
  }
}
