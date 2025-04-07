import { test, Page, expect } from '@playwright/test';

// Page Object Model for DemoQA Practice Modal page
export class AccordionPageClass {
    readonly page: Page;

    constructor(pageForConstructor: Page) {
        this.page = pageForConstructor;
    }

    async open() {
        await this.page.goto('https://demoqa.com/accordian');
      }
    
      async expandSection(sectionId: string) {
        await this.page.click(`#${sectionId}`);
      }
    
      getSectionContent(sectionContentId: string) {
        return this.page.locator(`#${sectionContentId}`);
      }
}