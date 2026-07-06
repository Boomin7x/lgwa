"use client"

import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/sonner"

type LeadPole = "it" | "cosmetics"
type FormData = {
    name: string
    email: string
    phone: string
    subject: string
    message: string
    pole: LeadPole
}

function PolePreSelector() {
    const searchParams = useSearchParams()
    const pole = searchParams.get("pole") as LeadPole | null
    return <input type="hidden" name="preselectedPole" value={pole || ""} />
}

export function ContactForm() {
    const t = useTranslations("contact.form")
    const { toast } = useToast()
    const [submitting, setSubmitting] = useState(false)
    const { register, handleSubmit, reset } = useForm<FormData>({
        defaultValues: { pole: "it" },
    })

    async function onSubmit() {
        setSubmitting(true)
        await new Promise((r) => setTimeout(r, 800))
        toast(t("success"), "success")
        reset()
        setSubmitting(false)
    }

    return (
        <Section>
            <SectionHeading label={t("label")} headline="" />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-lg space-y-5"
            >
                <Suspense>
                    <PolePreSelector />
                </Suspense>
                <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="contact-name">{t("name")}</Label>
                        <Input
                            id="contact-name"
                            {...register("name", { required: true })}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="contact-email">{t("email")}</Label>
                        <Input
                            id="contact-email"
                            type="email"
                            {...register("email", { required: true })}
                        />
                    </div>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="contact-phone">{t("phone")}</Label>
                        <Input
                            id="contact-phone"
                            type="tel"
                            {...register("phone")}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="contact-subject">{t("subject")}</Label>
                        <Input
                            id="contact-subject"
                            {...register("subject", { required: true })}
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="contact-pole">{t("pole")}</Label>
                    <Select id="contact-pole" {...register("pole")}>
                        <option value="it">{t("poleIt")}</option>
                        <option value="cosmetics">{t("poleCosmetics")}</option>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="contact-message">{t("message")}</Label>
                    <Textarea
                        id="contact-message"
                        {...register("message", { required: true })}
                    />
                </div>
                <Button type="submit" disabled={submitting}>
                    {t("submit")}
                </Button>
            </form>
        </Section>
    )
}
