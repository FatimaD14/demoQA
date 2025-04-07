import { test, Page, expect } from '@playwright/test';


// Page Object Model for Progress Bar Page
export class WebTablesPageClass {
    readonly page: Page;

    constructor(pageForConstructor: Page) {
        this.page = pageForConstructor;
    }
  
    async open() {
      await this.page.goto('https://demoqa.com/webtables');
    }
  
    async clickAddButton() {
      await this.page.click('#addNewRecordButton');
    }
  
    async fillAndSubmitForm(firstName: string, lastName: string, email: string, age: string, salary: string, department: string) {
      await this.page.fill('#firstName', firstName);
      await this.page.fill('#lastName', lastName);
      await this.page.fill('#userEmail', email);
      await this.page.fill('#age', age);
      await this.page.fill('#salary', salary);
      await this.page.fill('#department', department);
      await this.page.click('#submit');
    }
  
    getTableRows() {
      return this.page.locator('.rt-tbody .rt-tr-group').nth(3);
    }
  }