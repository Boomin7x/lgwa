import { describe, expect, it, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import { Reveal } from "./reveal"
import { StaggerGroup } from "./stagger-group"

vi.mock("./use-reduced-motion", () => ({
    useReducedMotion: () => true,
}))

describe("motion wrappers with reduced motion", () => {
    it("Reveal renders children statically", () => {
        render(
            <Reveal>
                <p>contenu visible</p>
            </Reveal>
        )
        expect(screen.getByText("contenu visible")).toBeInTheDocument()
    })

    it("StaggerGroup renders children statically", () => {
        render(
            <StaggerGroup>
                <p>premier</p>
                <p>second</p>
            </StaggerGroup>
        )
        expect(screen.getByText("premier")).toBeInTheDocument()
        expect(screen.getByText("second")).toBeInTheDocument()
    })
})
