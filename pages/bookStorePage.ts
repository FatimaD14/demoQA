import { test, Page, expect } from '@playwright/test';


// Page Object Model for Book Store Application
export class BookStorePageClass {
    readonly page: Page;

    constructor(pageForConstructor: Page) {
        this.page = pageForConstructor;
    }
   
    
      async openBooksPage() {
        await this.page.goto('https://demoqa.com/books');
      }
      async selectRowsPerPage(rows: string) {
        await this.page.selectOption('select[aria-label="rows per page"]', rows +' rows');
   
      }
    
      async searchBook(title: string) {
        await this.page.fill('#searchBox', title);
      }
    
      getFirstBookTitle() {
        return this.page.locator('.rt-tbody .rt-tr-group').first();
      }
    }
    