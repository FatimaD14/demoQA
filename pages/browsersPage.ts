import { test, Page, expect } from '@playwright/test';

// Page Object Model for DemoQA Practice browser windows page
export class BrowserWindowsPageClass {
    readonly page: Page;

    constructor(pageForConstructor: Page) {
        this.page = pageForConstructor;
    }

    async open() {
        await this.page.goto('https://demoqa.com/browser-windows');
      }
    
      async clickNewTab() {
        await this.page.click('#tabButton');
      }
    
      async clickNewWindow() {
        await this.page.click('#windowButton');
      }
    
      async clickNewWindowMessage() {
        await this.page.click('#messageWindowButton');
      }
    
}