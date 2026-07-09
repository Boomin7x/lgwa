import { describe, expect, it } from "vitest"
import fr from "../../messages/fr.json"
import en from "../../messages/en.json"
import de from "../../messages/de.json"

const catalogs: [locale: string, catalog: object][] = [
    ["fr", fr],
    ["en", en],
    ["de", de],
]

function flattenKeys(value: object, prefix = ""): string[] {
    return Object.entries(value).flatMap(([key, child]) =>
        typeof child === "object" && child !== null
            ? flattenKeys(child, `${prefix}${key}.`)
            : [`${prefix}${key}`]
    )
}

describe("message catalogs", () => {
    const referenceKeys = flattenKeys(fr).sort()

    it.each(catalogs)(
        "the %s catalog has the same key set as french",
        (_locale, catalog) => {
            expect(flattenKeys(catalog).sort()).toEqual(referenceKeys)
        }
    )

    it.each(catalogs)(
        "the %s catalog has no empty values",
        (_locale, catalog) => {
            const empty = flattenKeys(catalog).filter((key) => {
                const value = key
                    .split(".")
                    .reduce<unknown>(
                        (node, part) =>
                            (node as Record<string, unknown> | undefined)?.[
                                part
                            ],
                        catalog
                    )
                return value === ""
            })
            expect(empty).toEqual([])
        }
    )
})
