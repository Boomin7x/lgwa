"use server"

import { newsletterSchema, type ActionResult } from "./schemas"

export async function subscribeToNewsletter(
    input: unknown
): Promise<ActionResult> {
    const parsed = newsletterSchema.safeParse(input)
    if (!parsed.success) {
        return { ok: false, error: "validation" }
    }
    if (parsed.data.website) {
        return { ok: true }
    }
    await new Promise((resolve) => setTimeout(resolve, 400))
    console.info("[mock-newsletter] subscriber added", {
        locale: parsed.data.locale,
    })
    return { ok: true }
}
