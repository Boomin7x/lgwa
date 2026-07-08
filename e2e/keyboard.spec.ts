import { test, expect } from "@playwright/test"

test("mobile nav sheet opens and closes with Escape", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 800 })
    await page.goto("/fr")
    await page.getByRole("button", { name: "Menu" }).click()
    const drawerLink = page
        .locator("header")
        .getByRole("link", { name: "Accueil" })
        .last()
    await expect(drawerLink).toBeVisible()
    await page.keyboard.press("Escape")
    await expect(drawerLink).not.toBeVisible()
})

test("reference detail dialog opens and closes with Escape", async ({
    page,
}) => {
    await page.goto("/fr/references")
    await page.getByRole("button", { name: /PALIGO/ }).click()
    await expect(page.getByText(/40%/).first()).toBeVisible()
    await page.keyboard.press("Escape")
    await expect(page.getByText(/40%/)).toHaveCount(0)
})

test("cookie banner choice persists across reloads", async ({ page }) => {
    await page.goto("/fr")
    const banner = page.getByText(/cookies/i).first()
    await expect(banner).toBeVisible()
    await page
        .getByRole("button", { name: /accepter|accept/i })
        .first()
        .click()
    await page.reload()
    await expect(page.getByText(/cookies/i)).toHaveCount(0)
})
