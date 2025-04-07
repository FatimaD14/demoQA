import { test, expect } from '../fixtures/e2ebase';

// Test Case 1: Expand Accordian Section and Validate Content
test('Expand accordian section and validate content', async ({ page, accordionPage }) => {
    await accordionPage.open();
    await accordionPage.expandSection('section1Heading');
    await expect(accordionPage.getSectionContent('section1Content')).toBeVisible();
  });

