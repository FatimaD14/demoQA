import { test, expect } from '../../fixtures/e2ebase';

  
  // Test Case 1: Test pagination with 5 rows
  test('Set rows per page to 5 and verify pagination exists', async ({ page, selectRowsPerPage }) => {
    await selectRowsPerPage.openBooksPage();
    await selectRowsPerPage.selectRowsPerPage('5');
    await expect(page.locator('button[type="button"][class="-btn"]').nth(1)).toHaveText('Next');

  });
  
  // Test Case 2: Search for "Git Pocket Guide"
  test('Search for Git Pocket Guide in Book Store', async ({ page, searchBook }) => {
    await searchBook.openBooksPage();
    await searchBook.searchBook('Git Pocket Guide');
    await expect(searchBook.getFirstBookTitle()).toContainText('Git Pocket Guide');
  });