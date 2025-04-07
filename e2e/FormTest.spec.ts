import { test, expect } from '../fixtures/e2ebase';


// Test Case 1: Fill out DemoQA Practice Form
test('Fill out the practice form on DemoQA', async ({ page, formPage }) => {
 // const formPage = new PracticeFormPage(page);
  await formPage.open();

  await formPage.fillForm();

  await expect(formPage.getSubmissionModal()).toHaveText('Thanks for submitting the form');
});


