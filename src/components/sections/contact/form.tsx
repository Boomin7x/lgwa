"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useLocale, useTranslations } from "next-intl"
import { z } from "zod"
import { MicroLabel } from "@/components/layout/micro-label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/sonner"
import { leadSchema } from "@/lib/actions/schemas"
import { submitLead } from "@/lib/actions/submit-lead"
import { FieldError } from "./field-error"

const formSchema = leadSchema.omit({ locale: true })

type FormValues = z.infer<typeof formSchema>

type ContactFormProps = {
    initialPole?: "it" | "cosmetics"
    intent?: "quote"
}

export function ContactForm({ initialPole, intent }: ContactFormProps) {
    const t = useTranslations("contact.form")
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
        defaultValues: {
            pole: initialPole ?? "it",
            intent,
            phone: "",
            website: "",
        },
    })

    async function onSubmit(values: FormValues) {
        setSubmitting(true)
        const result = await submitLead({ ...values, locale })
        if (result.ok) {
            toast(t("success"), "success")
            reset()
        } else {
            toast(t("error"), "error")
        }
        setSubmitting(false)
    }

    return (
        <div className="bg-surface-raised rounded-sm p-8 md:p-12">
            <MicroLabel className="mb-8">{t("label")}</MicroLabel>
            {intent === "quote" && (
                <p className="text-small text-accent border-accent/40 mb-6 inline-block rounded-sm border px-3 py-1">
                    {t("intentQuote")}
                </p>
            )}
            <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="space-y-5"
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
                        <Label htmlFor="contact-name">{t("name")}</Label>
                        <Input id="contact-name" {...register("name")} />
                        <FieldError message={errors.name?.message} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="contact-email">{t("email")}</Label>
                        <Input
                            id="contact-email"
                            type="email"
                            {...register("email")}
                        />
                        <FieldError message={errors.email?.message} />
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
                        <Label htmlFor="contact-pole">{t("pole")}</Label>
                        <Select id="contact-pole" {...register("pole")}>
                            <option value="it">{t("poleIt")}</option>
                            <option value="cosmetics">
                                {t("poleCosmetics")}
                            </option>
                        </Select>
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="contact-subject">{t("subject")}</Label>
                    <Input id="contact-subject" {...register("subject")} />
                    <FieldError message={errors.subject?.message} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="contact-message">{t("message")}</Label>
                    <Textarea id="contact-message" {...register("message")} />
                    <FieldError message={errors.message?.message} />
                </div>
                <Button type="submit" disabled={submitting}>
                    {t("submit")}
                </Button>
            </form>
        </div>
    )
}
