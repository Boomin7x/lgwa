"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"

export default function ErrorPage({
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    const t = useTranslations("error")

    return (
        <div className="flex min-h-dvh flex-col items-center justify-center px-5 text-center sm:px-8">
            <h1 className="font-heading text-h1 text-foreground uppercase">
                {t("title")}
            </h1>
            <p className="text-body text-muted mt-4 max-w-md">
                {t("description")}
            </p>
            <div className="mt-8">
                <Button onClick={reset}>{t("retry")}</Button>
            </div>
        </div>
    )
}
