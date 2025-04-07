import { test, Page, expect } from '@playwright/test';

// Page Object Model for DemoQA Links page
export class LinksPageClass {
    readonly page: Page;

    constructor(pageForConstructor: Page) {
        this.page = pageForConstructor;
    }
    async open() {
        await this.page.goto('https://demoqa.com/links');
      }
    
      async clickHomeLink() {
        await this.page.click('#simpleLink');
      }
    
      async clickApiLink(linkId: string) {
        await this.page.click(`#${linkId}`);
      }
    
      getLinkResponse() {
        return this.page.locator('#linkResponse');
      }
    }
    