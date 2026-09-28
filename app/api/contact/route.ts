import { createHash } from "node:crypto";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 30;

const services: Record<string, string> = {
  "custom-website": "Custom Website Design",
  "web-development": "Website Development",
  "ui-ux-design": "UI/UX Design",
  "ecommerce-website": "E-Commerce Website",
  "online-store": "Online Store Setup",
  "web-application": "Custom Web Application",
  "enterprise-platform": "Enterprise Platform",
  "api-integration": "API Integration",
  "website-maintenance": "Website Maintenance",
  "performance-optimization": "Performance Optimization",
  "seo-optimization": "SEO Services",
  consultation: "Free Consultation",
  other: "Other Services",
};

// Best-effort protection per running instance; provider idempotency works across instances.
const attempts = new Map<string, { count: number; expires: number }>();
const fallback = "We couldn't send your enquiry. Please try again or email info@byow.lk.";

function reply(body: Record<string, unknown>, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const allowedOrigins = new Set([
    new URL(request.url).origin,
    "https://byow.lk",
    "https://www.byow.lk",
    ...(process.env.VERCEL_URL ? [`https://${process.env.VERCEL_URL}`] : []),
  ]);
  if (!origin || !allowedOrigins.has(origin)) {
    return reply({ error: "Please submit the form from the BYOW website." }, 403);
  }
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return reply({ error: "Invalid submission format." }, 415);
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  if (ip) {
    const now = Date.now();
    for (const [key, entry] of attempts) {
      if (entry.expires <= now) attempts.delete(key);
    }
    const key = createHash("sha256").update(ip).digest("hex");
    const entry = attempts.get(key) ?? { count: 0, expires: now + 10 * 60_000 };
    if (entry.count >= 10 || attempts.size >= 10_000) {
      return reply({ error: "Too many attempts. Please wait a few minutes or email info@byow.lk." }, 429);
    }
    entry.count++;
    attempts.set(key, entry);
  }

  let body: Record<string, unknown>;
  try {
    // Bound the actual stream, including requests without a Content-Length header.
    const reader = request.body?.getReader();
    if (!reader) return reply({ error: "Please complete the form." }, 400);
    const chunks: Uint8Array[] = [];
    let length = 0;
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      length += value.byteLength;
      if (length > 8192) {
        await reader.cancel();
        return reply({ error: "Your submission is too large." }, 413);
      }
      chunks.push(value);
    }
    body = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    if (!body || typeof body !== "object" || Array.isArray(body)) throw new Error("Invalid body");
  } catch {
    return reply({ error: "Please complete the form and try again." }, 400);
  }

  if (body.website) return reply({ error: "Unable to submit this form." }, 400);

  const fields: Record<string, string> = {};
  const limits: Record<string, number> = {
    firstName: 100, lastName: 100, business: 200, email: 254, phone: 30, service: 50,
  };
  for (const [key, limit] of Object.entries(limits)) {
    const value = body[key];
    if (typeof value !== "string" || !value.trim() || value.length > limit || /[\r\n\u0000-\u001f\u007f]/.test(value)) {
      return reply({ error: "Please complete all fields with valid details." }, 400);
    }
    fields[key] = value.trim();
  }
  if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(fields.email) ||
      !/^\+?[0-9\s()\-]{7,30}$/.test(fields.phone) ||
      fields.phone.replace(/\D/g, "").length < 7 ||
      fields.phone.replace(/\D/g, "").length > 15 ||
      !Object.hasOwn(services, fields.service)) {
    return reply({ error: "Please check your email, phone number and selected service." }, 400);
  }
  if (typeof body.submissionId !== "string" || !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(body.submissionId)) {
    return reply({ error: "Please refresh the page and try again." }, 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not configured.");
    return reply({ error: fallback }, 503);
  }
  const payload = {
    from: process.env.CONTACT_FROM_EMAIL || "BYOW Website <website@byow.lk>",
    to: [process.env.CONTACT_TO_EMAIL || "info@byow.lk"],
    reply_to: fields.email,
    subject: `BYOW website enquiry: ${services[fields.service]}`,
    text: [
      "New enquiry from the BYOW website", "",
      `Name: ${fields.firstName} ${fields.lastName}`,
      `Business: ${fields.business}`,
      `Service: ${services[fields.service]}`,
      `Email: ${fields.email}`,
      `Phone: ${fields.phone}`, "",
      "Reply to this email to contact the enquirer.",
    ].join("\n"),
  };

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `byow-contact/${body.submissionId}/${createHash("sha256").update(JSON.stringify(payload)).digest("hex")}`,
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(15_000),
    });
    const result = await response.json();
    if (!response.ok || typeof result.id !== "string") {
      console.error("Contact form: Resend rejected delivery", { status: response.status });
      return reply({ error: fallback }, 502);
    }
    return reply({ success: true, id: result.id });
  } catch {
    console.error("Contact form: Resend request failed or timed out.");
    return reply({ error: fallback }, 502);
  }
}
