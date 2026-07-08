"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useLocale, useTranslations } from "next-intl"
import { z } from "zod"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/sonner"
import { applicationSchema } from "@/lib/actions/schemas"
import { submitApplication } from "@/lib/actions/apply"
import { FieldError } from "@/components/sections/contact/field-error"

const formSchema = applicationSchema.omit({ locale: true })

type FormValues = z.infer<typeof formSchema>

export function CareersApplicationForm() {
    const t = useTranslations("careers.form")
    const locale = useLocale()
    const { toast } = useToast()
    const [submitting, setSubmitting] = useState(false)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: { phone: "", cvNote: "", website: "" },
    })

    async function onSubmit(values: FormValues) {
        setSubmitting(true)
        const result = await submitApplication({ ...values, locale })
        if (result.ok) {
            toast(t("success"), "success")
            reset()
        } else {
            toast(t("error"), "error")
        }
        setSubmitting(false)
    }

    return (
        <Section className="pt-0 md:pt-0">
            <SectionHeading headline={t("headline")} lede={t("subtitle")} />
            <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="bg-surface-raised max-w-2xl space-y-5 p-7 sm:p-10"
            >
                <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                    {...register("website")}
                />
                <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="app-name">{t("name")}</Label>
                        <Input id="app-name" {...register("name")} />
                        <FieldError message={errors.name?.message} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="app-email">{t("email")}</Label>
                        <Input
                            id="app-email"
                            type="email"
                            {...register("email")}
                        />
                        <FieldError message={errors.email?.message} />
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
                        <FieldError message={errors.position?.message} />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="app-cv-note">{t("cvNote")}</Label>
                    <Input id="app-cv-note" {...register("cvNote")} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="app-message">{t("message")}</Label>
                    <Textarea id="app-message" {...register("message")} />
                    <FieldError message={errors.message?.message} />
                </div>
                <Button type="submit" disabled={submitting}>
                    {t("submit")}
                </Button>
            </form>
        </Section>
    )
}
