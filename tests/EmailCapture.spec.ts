import { test, expect } from "@playwright/test"

test.describe("EmailCapture Component", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/")
    await page.click('button:has-text("+ de matchs")')
  })

  test("display correctly dialog when isOpen is true", async ({ page }) => {
    await expect(page.getByText("Autres matchs de légendes ?")).toBeVisible()

    await expect(page.getByPlaceholder("Votre email ici ...")).toBeVisible()

    await expect(
      page.getByRole("button", { name: "Je veux d'autres matchs !" })
    ).toBeVisible()
  })

  test("allow email entry and submission", async ({ page }) => {
    await page.getByPlaceholder("Votre email ici ...").fill("test@example.com")

    await page
      .getByRole("button", { name: "Je veux d'autres matchs !" })
      .click()

    await expect(page.getByText("Envoi en cours...")).toBeVisible()
  })

  test("Display error when invalid email is entered", async ({ page }) => {
    await page
      .getByPlaceholder("Votre email ici ...")
      .fill("invalid-email@test")

    await page
      .getByRole("button", { name: "Je veux d'autres matchs !" })
      .click()

    await expect(page.getByTestId("toast-provider")).toBeVisible()
    await expect(page.getByTestId("toast-provider")).toContainText(
      "Une erreur est survenue"
    )
  })

  test("handle submission valid email", async ({ page }) => {
    await page.route("/api/send-email", async (route) => {
      await route.fulfill({ status: 200 })
    })

    await page.getByPlaceholder("Votre email ici ...").fill("test@example.com")

    await page
      .getByRole("button", { name: "Je veux d'autres matchs !" })
      .click()

    await expect(page.getByTestId("toast-provider")).toBeVisible()
    await expect(page.getByTestId("toast-provider")).toContainText(
      "Vous recevrez bientôt de nouveaux matchs par email."
    )
  })
})
