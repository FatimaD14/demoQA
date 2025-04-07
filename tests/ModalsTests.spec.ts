import { test, expect } from '../fixtures/e2ebase';


// Test Case 1: Click Modals on DemoQA
test('Click Small Modal on DemoQA', async ({ page, modalPage}) => {
    await modalPage.open();
    await modalPage.clickSmallModal();
    await expect(modalPage.getSmallModalTitle()).toHaveText('Small Modal');
    await modalPage.closeSmallModal();
  });
  //Click large modal
  test('Click Large Modal on DemoQA', async ({ page, modalPage }) => {
    await modalPage.open();
    await modalPage.clickLargeModal();
    await expect(modalPage.getLargeModalTitle()).toHaveText('Large Modal');
    await modalPage.closeLargeModal();
  });

