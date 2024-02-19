// assertions.ts
import { Frame, expect, Page } from '@playwright/test';

export async function assertErrorMessageAppears(frame: Frame): Promise<void> {
  const errorMessage = await frame.frameLocator('iframe[title="Form 0"]').getByText('Email must be formatted');
  await expect(errorMessage).not.toBe(null);
};

export async function assertPageTitle(page: Page, expectedTitle: string): Promise<void> {
  const pageTitle = await page.title();
  await expect(pageTitle).toBe(expectedTitle);
}

export async function assertButtonColor(page: Page, expectedColor: string): Promise<void> {
  // Localize Button
  const button = await page.$('li.html.header-button-1 > div.header-button > a.button.primary');

  if (button !== null) {
    // Get button background color 
    const buttonColor = await page.evaluate(button => {
      // Get style of button
      const computedStyle = window.getComputedStyle(button);
      // Return button color
      return computedStyle.getPropertyValue('background-color');
    }, button);

    // Assert the button color
    expect(buttonColor).toBe(expectedColor);
  } else {
    throw new Error("Element is null. Unable to call someFunction.");
  }
}

export async function assertRedirectedUrl(page: Page, expectedUrlSubstring: string): Promise<void> {
  const redirectedUrl = page.url();
  await expect(redirectedUrl).toContain(expectedUrlSubstring);
}