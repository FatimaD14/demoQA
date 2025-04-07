import { test, Page, expect } from '@playwright/test';
// Page Object Model for Resizable Page
export class ToolTipsPageClass {
    readonly page: Page;

    constructor(pageForConstructor: Page) {
        this.page = pageForConstructor;
    }
  
    async open() {
      await this.page.goto('https://demoqa.com/tool-tips');
    }
  
    async hoverOverButton() {
      await this.page.hover('#toolTipButton');
    }
  
    async hoverOverTextField() {
      await this.page.hover('#toolTipTextField');
    }
  
    getTooltip() {
      return this.page.locator('.tooltip-inner');
    }
  }