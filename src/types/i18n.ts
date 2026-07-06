import type fr from "../../messages/fr.json"

export type Messages = typeof fr

export type MessageKey = NestedKeyOf<Messages>

type NestedKeyOf<T, K extends keyof T = keyof T> = K extends string
    ? T[K] extends Record<string, unknown>
        ? `${K}.${NestedKeyOf<T[K]>}`
        : K
    : never
