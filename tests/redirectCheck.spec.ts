import { test } from "@playwright/test";
import { clickElementByRoleAndText } from "./assets/utils";
import {
  ESGKPIEngineLinkSelector,
  ESGKPIEngineLinkText,
} from "./assets/selectors";
import { assertPageTitle } from "./assets/assertions";

test.describe("Verify redirection to ESG KPI Engine page", async () => {
  test("Test2", async ({ page }) => {
    await page.goto("https://www.sapfioneer.com");

    // Click on the Finance & ESG bookmark and ESG KPI Engine link
    await clickElementByRoleAndText(
      page,
      ESGKPIEngineLinkSelector,
      "link",
      ESGKPIEngineLinkText
    );

    // Reload the page
    await page.reload();

    // Assert the title of the current page
    await assertPageTitle(
      page,
      "Stay audit-ready with the ESG KPI Engine | SAP Fioneer"
    );
  });
});
