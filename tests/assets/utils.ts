import { Page, Locator } from '@playwright/test';

export async function clickElementByRoleAndText(page: Page, selector: string, role: 'link' | 'button' | 'checkbox' | 'radio' | 'switch' | 'heading' | 'textbox' | 'searchbox' | 'slider' | 'spinbutton' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'tab' | 'treeitem', text: string): Promise<void> {
  const element = await page.locator(selector).getByRole(role, { name: text });
  await element.click();
}

