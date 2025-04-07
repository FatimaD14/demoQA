import { test, Page, expect } from '@playwright/test';

// Page Object Model for DemoQA Practice Modal page
export class ModalPageClass {
    readonly page: Page;

    constructor(pageForConstructor: Page) {
        this.page = pageForConstructor;
    }

  async open() {
    await this.page.goto('https://demoqa.com/modal-dialogs');
  }


    async clickSmallModal() {
        await this.page.click('#showSmallModal');
    }

    async clickLargeModal() {
        await this.page.click('#showLargeModal');
    }

    getSmallModalTitle() {
        return this.page.locator('#example-modal-sizes-title-sm');
    }

    getLargeModalTitle() {
        return this.page.locator('#example-modal-sizes-title-lg');
    }

    async closeSmallModal() {
        await this.page.click('#closeSmallModal');
    }

    async closeLargeModal() {
        await this.page.click('#closeLargeModal');
    }

}
