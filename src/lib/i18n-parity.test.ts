import { describe, expect, it } from "vitest"
import fr from "../../messages/fr.json"
import en from "../../messages/en.json"

function flattenKeys(value: object, prefix = ""): string[] {
    return Object.entries(value).flatMap(([key, child]) =>
        typeof child === "object" && child !== null
            ? flattenKeys(child, `${prefix}${key}.`)
            : [`${prefix}${key}`]
    )
}

describe("message catalogs", () => {
    it("have identical key sets in both locales", () => {
        const frKeys = flattenKeys(fr).sort()
        const enKeys = flattenKeys(en).sort()
        expect(frKeys).toEqual(enKeys)
    })

    it("have no empty values", () => {
        const emptyFr = flattenKeys(fr).filter((key) => {
            const value = key
                .split(".")
                .reduce<unknown>(
                    (node, part) =>
                        (node as Record<string, unknown> | undefined)?.[part],
                    fr
                )
            return value === ""
        })
        expect(emptyFr).toEqual([])
    })
})
