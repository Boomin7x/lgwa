import { describe, expect, it } from "vitest"
import { estimateReadTime } from "./read-time"

describe("estimateReadTime", () => {
    it("returns at least one minute for short content", () => {
        expect(estimateReadTime("<p>Bonjour le monde</p>")).toBe(1)
    })

    it("scales with word count at 200 words per minute", () => {
        const words = Array.from({ length: 600 }, () => "mot").join(" ")
        expect(estimateReadTime(`<p>${words}</p>`)).toBe(3)
    })

    it("ignores html markup when counting words", () => {
        const html =
            "<div class='verbose markup attribute'><span>un</span></div>"
        expect(estimateReadTime(html)).toBe(1)
    })
})
