"use client"

import { useTranslations } from "next-intl"
import type { MessageKey } from "@/types/i18n"

export function FieldError({ message }: { message?: string }) {
    const t = useTranslations()
    if (!message) return null
    return (
        <p role="alert" className="text-small text-danger">
            {t(message as MessageKey)}
        </p>
    )
}
