import { NextRequest, NextResponse } from "next/server";
import {
  type CareerApplicationPayload,
  validateCareerPayload,
} from "@/lib/career-application";

const UPSTREAM_ENDPOINT =
  process.env.CAREER_UPSTREAM_URL ??
  "https://mekark-mail.onrender.com/api/career-application";

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
    const body = (await request.json()) as Partial<CareerApplicationPayload>;
    const validationError = validateCareerPayload(body);

    if (validationError) {
      return NextResponse.json(
        {
          success: false,
          message: validationError,
        },
        {
          status: 400,
        },
      );
    }

    const payload: CareerApplicationPayload = {
      name: body.name!.trim(),
      email: body.email!.trim(),
      role: body.role!.trim(),
      experience: body.experience!.trim(),
      expertise: body.expertise!.trim(),
      applicationType: body.applicationType?.trim() || "Open Application",
      sourceDomain: body.sourceDomain?.trim(),
      sourceName: body.sourceName?.trim() || "Career Page",
      resumeBase64: body.resumeBase64!,
      resumeFileName: body.resumeFileName!.trim(),
      resumeContentType: body.resumeContentType?.trim(),
    };

    const upstreamOrigin = resolveUpstreamOrigin(request);

    const response = await fetch(UPSTREAM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: upstreamOrigin,
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const responseText = await response.text();

    if (!response.ok) {
      console.error("CAREER UPSTREAM STATUS:", response.status);
      console.error("CAREER UPSTREAM RESPONSE:", responseText);

      let message = "Failed to send application";

      try {
        const parsed = JSON.parse(responseText) as {
          error?: string;
          message?: string;
          details?: string;
        };
        message = parsed.error || parsed.message || parsed.details || message;
      } catch {
        // Keep the fallback message when upstream is not JSON.
      }

      return NextResponse.json(
        {
          success: false,
          message,
        },
        {
          status:
            response.status >= 400 && response.status < 500
              ? response.status
              : 500,
        },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Application sent successfully!",
    });
  } catch (error) {
    console.error("Career API route error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      {
        status: 500,
      },
    );
  }
}
