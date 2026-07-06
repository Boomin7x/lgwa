"use client"

import { useTranslations } from "next-intl"
import { useState } from "react"
import { Section } from "@/components/layout/section"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/sonner"

export function NewsletterBlock() {
    const t = useTranslations("blog.newsletter")
    const { toast } = useToast()
    const [email, setEmail] = useState("")
    const [submitting, setSubmitting] = useState(false)

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (!email) return
        setSubmitting(true)
        await new Promise((r) => setTimeout(r, 800))
        toast(t("success"), "success")
        setEmail("")
        setSubmitting(false)
    }

    return (
        <Section variant="bordeaux" className="text-center">
            <h2 className="font-display text-h3 text-foreground">
                {t("title")}
            </h2>
            <p className="text-body text-muted mt-3">{t("subtitle")}</p>
            <form
                onSubmit={handleSubmit}
                className="mx-auto mt-6 flex max-w-md gap-3"
            >
                <Input
                    type="email"
                    placeholder={t("placeholder")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-secondary/50"
                />
                <Button type="submit" disabled={submitting}>
                    {t("button")}
                </Button>
            </form>
        </Section>
    )
}
