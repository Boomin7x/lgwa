import type fr from "../../messages/fr.json"
import type { routing } from "@/i18n/routing"

declare module "next-intl" {
    interface AppConfig {
        Locale: (typeof routing.locales)[number]
        Messages: typeof fr
    }
}

export type Messages = typeof fr

export type MessageKey = NestedKeyOf<Messages>

type NestedKeyOf<T, K extends keyof T = keyof T> = K extends string
    ? T[K] extends Record<string, unknown>
        ? `${K}.${NestedKeyOf<T[K]>}`
        : K
    : never
