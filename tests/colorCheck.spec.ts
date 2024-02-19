import { test, expect, Page } from "@playwright/test";
import { buttonSelector } from "./assets/selectors";
import { assertButtonColor } from "./assets/assertions";

test.describe("Verify button background color", async () => {
  test("test2", async ({ page }) => {
    // Go to the SAP Fioneer page
    await page.goto("https://www.sapfioneer.com");

    // Localize Button
    await page.locator(buttonSelector);

    // Assert that the button color is yellow
    await assertButtonColor(page, "rgb(255, 212, 60)");
  });
});