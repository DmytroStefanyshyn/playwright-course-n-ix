import { type Locator, type Page } from '@playwright/test';

/**
 * DocumentationsPage class representing Playwright Documentations application page
 *
 * @class DocumentationsPage
 */
export class DocumentationsPage {
    readonly page: Page;
    readonly menuLinks: Locator;
    readonly gettingStartedMenuLink: Locator;
    readonly migrationMenuLinks: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.menuLinks = page.locator(".menu__link");
        this.gettingStartedMenuLink = this.menuLinks.getByText("Getting Started", { exact: true });
        this.migrationMenuLinks = this.menuLinks.getByText("Migration");
    }

    async clickOnGettingStartedMenuLink() {
        await this.gettingStartedMenuLink.click();
    }
}