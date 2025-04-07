import { test, expect } from '../fixtures/e2ebase';
import { LinksPageClass } from '../pages/linkPage';


// Test Case 1: Click link on DemoQA Links page and verify new tab
test('Click home link on DemoQA Links page and verify navigation', async ({ context, page, linkPage }) => {
    await linkPage.open();
    const [newTab] = await Promise.all([
      context.waitForEvent('page'),
      linkPage.clickHomeLink()
    ]);
    await newTab.waitForLoadState();
    await expect(newTab).toHaveURL('https://demoqa.com/');
  });
  
  // Test Case 2: Validate API response for Created link
  const apiLinks = [
    { id: 'created', text: 'Created' },
    { id: 'no-content', text: 'No Content' },
    { id: 'moved', text: 'Moved' },
    { id: 'bad-request', text: 'Bad Request' },
    { id: 'unauthorized', text: 'Unauthorized' },
    { id: 'forbidden', text: 'Forbidden' },
    { id: 'invalid-url', text: 'Not Found' },
  ];
  
  for (const link of apiLinks) {
    test(`Validate response when clicking '${link.text}' link`, async ({ page, linkPage }) => {
      const linksPage = new LinksPageClass(page);
      await linksPage.open();
      await linksPage.clickApiLink(link.id);
      await expect(linksPage.getLinkResponse()).toContainText(link.text);
    });
  }
  