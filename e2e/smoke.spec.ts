import { test, expect } from "@playwright/test"

test.describe("french-preferring browser", () => {
    test.use({ locale: "fr-FR" })

    test("root redirects to the french locale", async ({ page }) => {
        await page.goto("/")
        await expect(page).toHaveURL(/\/fr$/)
        await expect(page.locator("html")).toHaveAttribute("lang", "fr")
    })
})

test.describe("english-preferring browser", () => {
    test.use({ locale: "en-US" })

    test("root redirects to the english locale", async ({ page }) => {
        await page.goto("/")
        await expect(page).toHaveURL(/\/en$/)
        await expect(page.locator("html")).toHaveAttribute("lang", "en")
    })
})

test("english home renders with english content", async ({ page }) => {
    await page.goto("/en")
    await expect(page.locator("html")).toHaveAttribute("lang", "en")
    await expect(page.locator("h1")).toBeVisible()
})

test("french home renders a single h1", async ({ page }) => {
    await page.goto("/fr")
    await expect(page.locator("h1")).toHaveCount(1)
})

test("unknown page under a valid locale returns 404", async ({ page }) => {
    const response = await page.goto("/fr/nonexistent-page")
    expect(response?.status()).toBe(404)
})
