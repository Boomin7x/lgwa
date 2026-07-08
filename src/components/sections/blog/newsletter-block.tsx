"use client"

import { useState } from "react"
import { useLocale, useTranslations } from "next-intl"
import { Section } from "@/components/layout/section"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/sonner"
import { subscribeToNewsletter } from "@/lib/actions/subscribe"

export function NewsletterBlock() {
    const t = useTranslations("blog.newsletter")
    const tForm = useTranslations("common.form")
    const locale = useLocale()
    const { toast } = useToast()
    const [email, setEmail] = useState("")
    const [submitting, setSubmitting] = useState(false)

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setSubmitting(true)
        const result = await subscribeToNewsletter({
            email,
            locale,
            website: "",
        })
        if (result.ok) {
            toast(t("success"), "success")
            setEmail("")
        } else {
            toast(tForm("invalidEmail"), "error")
        }
        setSubmitting(false)
    }

    return (
        <Section variant="bordeaux" className="text-center">
            <h2 className="font-heading text-h1 text-foreground uppercase">
                {t("title")}
            </h2>
            <p className="text-body text-body-text mx-auto mt-4 max-w-lg text-pretty">
                {t("subtitle")}
            </p>
            <form
                onSubmit={handleSubmit}
                noValidate
                className="mx-auto mt-8 flex max-w-md gap-3"
            >
                <Input
                    type="email"
                    aria-label={t("placeholder")}
                    placeholder={t("placeholder")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-foreground/40 placeholder:text-muted"
                />
                <Button type="submit" disabled={submitting}>
                    {t("button")}
                </Button>
            </form>
        </Section>
    )
}
