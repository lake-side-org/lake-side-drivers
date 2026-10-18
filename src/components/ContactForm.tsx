"use client";

import { FormEvent, useState } from "react";
import {
  contactFormSchema,
  type ContactFormFieldErrors,
} from "@/lib/validation";
import { Button } from "./Button";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [errors, setErrors] = useState<ContactFormFieldErrors>({});
  const [state, setState] = useState<SubmitState>("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerMessage(null);

    const formData = new FormData(event.currentTarget);
    const values = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      message: String(formData.get("message") ?? ""),
      company: String(formData.get("company") ?? ""), // honeypot
    };

    // Validate on the client first, purely for fast, friendly feedback.
    // The server re-validates everything independently — see api/contact/route.ts.
    const result = contactFormSchema.safeParse(values);

    if (!result.success) {
      const fieldErrors: ContactFormFieldErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof ContactFormFieldErrors;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setState("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      const body = (await response.json()) as {
        ok: boolean;
        message?: string;
        fieldErrors?: ContactFormFieldErrors;
      };

      if (!response.ok || !body.ok) {
        if (body.fieldErrors) setErrors(body.fieldErrors);
        setState("error");
        setServerMessage(
          body.message ?? "Something went wrong. Please try again."
        );
        return;
      }

      setState("success");
      event.currentTarget.reset();
    } catch {
      setState("error");
      setServerMessage(
        "Couldn't reach the server. Check your connection and try again."
      );
    }
  }

  if (state === "success") {
    return (
      <div
        role="status"
        className="rounded-card border border-lake/10 bg-white p-6 text-center"
      >
        <p className="font-heading text-lg font-medium text-lake">
          Message sent
        </p>
        <p className="mt-2 text-sm text-lake-dark/80">
          Thank you for reaching out. We'll get back to you at the email you
          provided.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block font-heading text-sm font-medium text-lake"
        >
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="mt-1 w-full rounded-card border border-lake/20 px-4 py-2 text-sm focus-visible:outline-none"
        />
        {errors.name ? (
          <p id="name-error" className="mt-1 text-xs text-red-700">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block font-heading text-sm font-medium text-lake"
        >
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="mt-1 w-full rounded-card border border-lake/20 px-4 py-2 text-sm focus-visible:outline-none"
        />
        {errors.email ? (
          <p id="email-error" className="mt-1 text-xs text-red-700">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block font-heading text-sm font-medium text-lake"
        >
          Phone number{" "}
          <span className="font-normal text-lake-dark/60">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className="mt-1 w-full rounded-card border border-lake/20 px-4 py-2 text-sm focus-visible:outline-none"
        />
        {errors.phone ? (
          <p id="phone-error" className="mt-1 text-xs text-red-700">
            {errors.phone}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block font-heading text-sm font-medium text-lake"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-1 w-full rounded-card border border-lake/20 px-4 py-2 text-sm focus-visible:outline-none"
        />
        {errors.message ? (
          <p id="message-error" className="mt-1 text-xs text-red-700">
            {errors.message}
          </p>
        ) : null}
      </div>

      {/* Honeypot field — hidden from real visitors with CSS (not display:none,
          which some bots skip), left empty by humans, filled in by bots that
          auto-complete every field. Never rename this without matching
          the API route and the "left" style below. */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label htmlFor="company">Leave this field blank</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {serverMessage ? (
        <p role="alert" className="text-sm text-red-700">
          {serverMessage}
        </p>
      ) : null}

      <Button type="submit" disabled={state === "submitting"}>
        {state === "submitting" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
