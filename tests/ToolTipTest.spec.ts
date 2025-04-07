import { test, expect } from '../fixtures/e2ebase';

  
test('Show tooltip when hovering over elements on Tool Tips page', async ({ page, toolTipsPage }) => {
    await toolTipsPage.open();
    await toolTipsPage.hoverOverButton();
    await expect(toolTipsPage.getTooltip()).toBeVisible();
    await toolTipsPage.hoverOverTextField();
    await expect(toolTipsPage.getTooltip()).toBeVisible();
  });