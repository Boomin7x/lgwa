"use server"

import { leadSchema, type ActionResult } from "./schemas"

export async function submitLead(input: unknown): Promise<ActionResult> {
    const parsed = leadSchema.safeParse(input)
    if (!parsed.success) {
        return { ok: false, error: "validation" }
    }
    if (parsed.data.website) {
        return { ok: true }
    }
    await new Promise((resolve) => setTimeout(resolve, 400))
    console.info("[mock-crm] lead received", {
        pole: parsed.data.pole,
        intent: parsed.data.intent,
        subject: parsed.data.subject,
        locale: parsed.data.locale,
    })
    return { ok: true }
}
