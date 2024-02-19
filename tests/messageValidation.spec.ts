import { test } from "@playwright/test";
import {
  buttonSelector,
  emailInputSelector,
  submitButtonSelector,
} from "./assets/selectors";
import {
  assertErrorMessageAppears,
  assertRedirectedUrl,
} from "./assets/assertions";

test.describe("erify validation message for incorrect email value", async () => {
  test("Test3", async ({ page }) => {
    // Go to the SAP Fioneer page
    await page.goto("https://www.sapfioneer.com");

    // Localize Button

    // Click on the Get in touch button
    if (buttonSelector !== null) {
      await page.locator(buttonSelector).click();
    } else {
      throw new Error("Element is null. Unable to call someFunction.");
    }

    // Verify if the user has been redirected to the correct page
    const redirectedUrl = page.url();
    await assertRedirectedUrl(page, "/contact");

    // Type incorrect email value in the Work email field and submit
    // Get the email input field and fill it
    await page.locator(emailInputSelector).fill("342323");

    // Get the submit button and click it
    await page.locator(submitButtonSelector).click();

    // Assert the presence of the error message
    await assertErrorMessageAppears;
  });
});