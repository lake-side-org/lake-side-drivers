import { z } from "zod";

/**
 * Shared contact-form schema.
 *
 * This runs on BOTH the client (for instant feedback) and the server
 * (because client-side checks can always be bypassed — never trust
 * input that only the browser has validated).
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter your full name.")
    .max(100, "That name is too long."),
  email: z
    .string()
    .trim()
    .min(1, "Enter your email address.")
    .email("Enter a valid email address.")
    .max(254),
  phone: z
    .string()
    .trim()
    .max(20, "That phone number is too long.")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Say a little more — at least 10 characters.")
    .max(2000, "Keep the message under 2000 characters."),
  // Honeypot field: real visitors never see or fill this (hidden via CSS).
  // Bots that auto-fill every field on a page will fill it, which is how
  // we quietly reject them without a CAPTCHA.
  company: z.string().max(0, "Spam detected.").optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export type ContactFormFieldErrors = Partial<
  Record<keyof ContactFormValues, string>
>;
