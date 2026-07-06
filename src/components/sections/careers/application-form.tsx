"use client"

import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/sonner"

type FormData = {
    name: string
    email: string
    phone: string
    position: string
    message: string
}

export function CareersApplicationForm() {
    const t = useTranslations("careers.form")
    const { toast } = useToast()
    const [submitting, setSubmitting] = useState(false)
    const { register, handleSubmit, reset } = useForm<FormData>()

    async function onSubmit() {
        setSubmitting(true)
        await new Promise((r) => setTimeout(r, 800))
        toast(t("success"), "success")
        reset()
        setSubmitting(false)
    }

    return (
        <Section>
            <SectionHeading
                label={t("label")}
                headline={t("headline")}
                lede={t("subtitle")}
            />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-lg space-y-5"
            >
                <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="app-name">{t("name")}</Label>
                        <Input
                            id="app-name"
                            {...register("name", { required: true })}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="app-email">{t("email")}</Label>
                        <Input
                            id="app-email"
                            type="email"
                            {...register("email", { required: true })}
                        />
                    </div>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="app-phone">{t("phone")}</Label>
                        <Input
                            id="app-phone"
                            type="tel"
                            {...register("phone")}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="app-position">{t("position")}</Label>
                        <Input id="app-position" {...register("position")} />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="app-message">{t("message")}</Label>
                    <Textarea
                        id="app-message"
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
