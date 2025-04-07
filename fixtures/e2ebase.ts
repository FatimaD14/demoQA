import { test as base } from '@playwright/test';
import { FormPageClass } from '../pages/demoFormPage'; 
import { ModalPageClass } from '../pages/modalsPage'; 
import { AccordionPageClass } from '../pages/accordionPage'; 
import { BrowserWindowsPageClass } from '../pages/browsersPage'; 
import { LinksPageClass } from '../pages/linkPage'; 
import { BookStorePageClass } from '../pages/bookStorePage'; 
import { ToolTipsPageClass } from '../pages/toolTipPage'; 
import { WebTablesPageClass } from '../pages/tablesPage';




type EndToEndTestsFixtures = {
formPage: FormPageClass;
modalPage: ModalPageClass;
accordionPage: AccordionPageClass;
browserWindowsPage: BrowserWindowsPageClass;
linkPage: LinksPageClass;
selectRowsPerPage: BookStorePageClass;
clickNextPagination: BookStorePageClass;
searchBook: BookStorePageClass;
addOnTablePage: WebTablesPageClass;
toolTipsPage: ToolTipsPageClass;

};

export const test = base.extend<EndToEndTestsFixtures>({
    formPage: async ({ page }, use) => {
        await use(new FormPageClass(page));
    },
    modalPage: async ({ page }, use) => {
        await use(new ModalPageClass(page));
    },
    accordionPage: async ({ page }, use) => {
        await use(new AccordionPageClass(page));
    },
    browserWindowsPage: async ({ page }, use) => {
        await use(new BrowserWindowsPageClass(page));
    },
    linkPage: async ({ page }, use) => {
        await use(new LinksPageClass(page));
    },
    selectRowsPerPage: async ({ page }, use) => {
        await use(new BookStorePageClass(page));
    },
    searchBook: async ({ page }, use) => {
        await use(new BookStorePageClass(page));
    },
    addOnTablePage: async ({ page }, use) => {
        await use(new WebTablesPageClass(page));
    },
    toolTipsPage: async ({ page }, use) => {
        await use(new ToolTipsPageClass(page));
    },
});

export { expect } from '@playwright/test';