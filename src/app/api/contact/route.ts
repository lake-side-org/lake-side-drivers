import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";
import { isRateLimited } from "@/lib/rateLimit";

export async function POST(request: NextRequest) {
  // 1. Rate limit by IP first — cheapest check, stops obvious abuse
  // before we spend time parsing or validating anything.
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, message: "Too many requests. Please try again in a minute." },
      { status: 429 }
    );
  }

  // 2. Never trust the shape of the incoming body.
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 }
    );
  }

  // 3. Re-validate on the server — the client-side check in ContactForm.tsx
  // is only there for user experience and can always be bypassed.
  const result = contactFormSchema.safeParse(body);

  if (!result.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of result.error.issues) {
      const field = String(issue.path[0]);
      if (!fieldErrors[field]) fieldErrors[field] = issue.message;
    }
    return NextResponse.json(
      { ok: false, fieldErrors, message: "Please fix the highlighted fields." },
      { status: 400 }
    );
  }

  const { name, email, phone, message, company } = result.data;

  // 4. Honeypot check: a real visitor never fills this hidden field.
  // Reject silently with a generic success-shaped error so bots don't
  // learn which check caught them.
  if (company) {
    return NextResponse.json(
      { ok: false, message: "Please try again." },
      { status: 400 }
    );
  }

  // 5. Forward the message. Web3Forms is a free service that emails
  // submissions to CONTACT_NOTIFICATION_EMAIL without needing a mail
  // server of your own. Get a free access key at https://web3forms.com
  // and set WEB3FORMS_ACCESS_KEY in .env.local before going live.
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    // No key configured yet — log locally so development isn't blocked,
    // but make it obvious in production logs that this still needs setup.
    console.warn(
      "[contact] WEB3FORMS_ACCESS_KEY is not set — message was received but not emailed.",
      { name, email, phone, message }
    );
    return NextResponse.json({ ok: true });
  }

  try {
    const forward = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New message from ${name} via the website`,
        from_name: name,
        email,
        phone: phone || "Not provided",
        message,
        to: process.env.CONTACT_NOTIFICATION_EMAIL,
      }),
    });

    if (!forward.ok) {
      throw new Error(`Email service responded with ${forward.status}`);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] Failed to forward message:", error);
    return NextResponse.json(
      {
        ok: false,
        message:
          "We received your message but couldn't send the notification email. Please try again shortly.",
      },
      { status: 502 }
    );
  }
}

// Reject any method other than POST explicitly, rather than letting
// Next.js fall through to a generic 405 with no clear body.
export async function GET() {
  return NextResponse.json(
    { ok: false, message: "Method not allowed." },
    { status: 405 }
  );
}
