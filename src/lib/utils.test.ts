import { describe, expect, it } from "vitest"
import { cn } from "./utils"

describe("cn", () => {
    it("merges class names", () => {
        expect(cn("a", "b")).toBe("a b")
    })

    it("resolves conflicting tailwind classes", () => {
        expect(cn("px-4", "px-8")).toBe("px-8")
    })

    it("handles conditional classes", () => {
        expect(cn("a", false && "b", "c")).toBe("a c")
    })

    it("merges tailwind classes properly", () => {
        expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500")
    })
})
