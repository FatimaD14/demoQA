import { test, expect } from '../fixtures/e2ebase';


// Test Case 1: Open new tab from Browser Windows page and verify new page
test('Open new tab from Browser Windows page', async ({ context, page, browserWindowsPage }) => {
    await browserWindowsPage.open();
    const [newTab] = await Promise.all([
      context.waitForEvent('page'),
      browserWindowsPage.clickNewTab()
    ]);
    await newTab.waitForLoadState();
    await expect(newTab.locator('body')).toContainText('This is a sample page');
  });