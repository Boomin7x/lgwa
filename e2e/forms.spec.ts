import { test, expect } from "@playwright/test"

test("contact form shows localized validation errors on empty submit", async ({
    page,
}) => {
    await page.goto("/fr/contact")
    await page.getByRole("button", { name: /envoyer/i }).click()
    await expect(page.getByRole("alert").first()).toBeVisible()
})

test("contact form submits successfully with valid data", async ({ page }) => {
    await page.goto("/fr/contact")
    await page.locator("#contact-name").fill("Test Utilisateur")
    await page.locator("#contact-email").fill("test@example.com")
    await page.locator("#contact-subject").fill("Demande de renseignements")
    await page
        .locator("#contact-message")
        .fill("Bonjour, ceci est un message de test suffisamment long.")
    await page.getByRole("button", { name: /envoyer/i }).click()
    await expect(page.getByRole("status").first()).toBeVisible()
})

test("quote CTA deep-links contact with IT pole and quote intent", async ({
    page,
}) => {
    await page.goto("/fr/contact?pole=it&intent=quote")
    await expect(page.locator("#contact-pole")).toHaveValue("it")
    await expect(page.getByText("Demande de devis")).toBeVisible()
})

test("careers application submits successfully", async ({ page }) => {
    await page.goto("/fr/careers")
    await page.locator("#app-name").fill("Candidate Test")
    await page.locator("#app-email").fill("candidate@example.com")
    await page.locator("#app-position").fill("Développeur Full-Stack")
    await page
        .locator("#app-message")
        .fill("Je souhaite rejoindre votre équipe à Douala.")
    await page.getByRole("button", { name: /envoyer|postuler/i }).click()
    await expect(page.getByRole("status").first()).toBeVisible()
})

test("blog category filter and search narrow the list", async ({ page }) => {
    await page.goto("/fr/blog?category=news")
    const cards = page.locator("a[href*='/blog/']")
    await expect(cards.first()).toBeVisible()
    await page.goto("/fr/blog")
    await page.getByRole("searchbox").fill("PALIGO")
    await expect(page.locator("a[href*='/blog/paligo']")).toBeVisible()
    await page.getByRole("searchbox").fill("zzzzintrouvable")
    await expect(page.getByText(/aucun article/i)).toBeVisible()
})

test("references sector filter narrows the grid via url", async ({ page }) => {
    await page.goto("/fr/references?sector=logistics")
    await expect(page.getByText("Port Autonome de Douala")).toBeVisible()
    await expect(page.getByText("PALIGO")).toHaveCount(0)
})
