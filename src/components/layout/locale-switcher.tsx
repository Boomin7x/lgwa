"use client"

import { useTranslations, useLocale } from "next-intl"
import { usePathname, useRouter } from "@/i18n/navigation"
import { Globe } from "lucide-react"

const locales = ["fr", "en"] as const

export function LocaleSwitcher() {
    const t = useTranslations("common.localeSwitcher")
    const locale = useLocale()
    const pathname = usePathname()
    const router = useRouter()

    function handleChange(nextLocale: string) {
        router.replace(pathname, { locale: nextLocale })
    }

    return (
        <div className="flex items-center gap-1">
            <Globe className="text-muted h-4 w-4" />
            {locales.map((l) => (
                <button
                    key={l}
                    type="button"
                    onClick={() => handleChange(l)}
                    className={`hover:text-accent px-1 text-xs font-medium transition-colors ${
                        locale === l ? "text-accent" : "text-muted"
                    }`}
                    aria-label={t(l)}
                >
                    {l.toUpperCase()}
                </button>
            ))}
        </div>
    )
}
