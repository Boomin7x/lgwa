import { z } from "zod"

export const honeypotField = z.string().max(0).optional().or(z.literal(""))

export const leadSchema = z.object({
    name: z.string().min(2, "common.form.required"),
    email: z.email("common.form.invalidEmail"),
    phone: z.string(),
    subject: z.string().min(2, "common.form.required"),
    message: z.string().min(10, "common.form.messageTooShort"),
    pole: z.enum(["it", "cosmetics"]),
    intent: z.enum(["quote"]).optional(),
    locale: z.enum(["fr", "en"]),
    website: honeypotField,
})

export const applicationSchema = z.object({
    name: z.string().min(2, "common.form.required"),
    email: z.email("common.form.invalidEmail"),
    phone: z.string(),
    position: z.string().min(2, "common.form.required"),
    message: z.string().min(10, "common.form.messageTooShort"),
    cvNote: z.string(),
    locale: z.enum(["fr", "en"]),
    website: honeypotField,
})

export const newsletterSchema = z.object({
    email: z.email("common.form.invalidEmail"),
    locale: z.enum(["fr", "en"]),
    website: honeypotField,
})

export type LeadInput = z.infer<typeof leadSchema>
export type ApplicationInput = z.infer<typeof applicationSchema>
export type NewsletterInput = z.infer<typeof newsletterSchema>

export type ActionResult =
    { ok: true } | { ok: false; error: "validation" | "server" }
