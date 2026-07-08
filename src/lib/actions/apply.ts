"use server"

import { applicationSchema, type ActionResult } from "./schemas"

export async function submitApplication(input: unknown): Promise<ActionResult> {
    const parsed = applicationSchema.safeParse(input)
    if (!parsed.success) {
        return { ok: false, error: "validation" }
    }
    if (parsed.data.website) {
        return { ok: true }
    }
    await new Promise((resolve) => setTimeout(resolve, 400))
    console.info("[mock-crm] application received", {
        position: parsed.data.position,
        locale: parsed.data.locale,
    })
    return { ok: true }
}
