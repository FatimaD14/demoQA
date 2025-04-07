import { test, Page, expect } from '@playwright/test';

// Page Object Model for DemoQA Practice Form
export class FormPageClass {
    readonly page: Page;

    constructor(pageForConstructor: Page) {
        this.page = pageForConstructor;
    }

  async open() {
    await this.page.goto('https://demoqa.com/automation-practice-form');
  }

  async fillForm() {
    await this.page.fill('#firstName', 'Jane');
    await this.page.fill('#lastName', 'Doe');
    await this.page.fill('#userEmail', 'jane.doe@example.com');
    await this.page.locator('label[for="gender-radio-2"]').click(); // Female
    await this.page.fill('#userNumber', '1234567890');
    await this.page.fill('#dateOfBirthInput', '10 Dec 1995');
    //await this.page.keyboard.press('Enter');
    await this.page.locator('label[for="hobbies-checkbox-1"]').click(); // Sports
    // Assume picture upload is skipped
    await this.page.fill('#currentAddress', '123 Main St');
    await this.page.click('#submit');
  }

  getSubmissionModal() {
    return this.page.locator('#example-modal-sizes-title-lg');
  }
}
