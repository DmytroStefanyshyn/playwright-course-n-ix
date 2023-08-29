import { type Locator, type Page } from '@playwright/test';

/**
 * PlaywrightDevPage class representing Playwright Dev application page
 *
 * @class PlaywrightDevPage
 */
export class PlaywrightDevPage {
    readonly page: Page;
    readonly getStartedLink: Locator;
    readonly searchBtn: Locator;
    readonly searchInput: Locator;
    readonly searchResult: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.getStartedLink = page.locator(".getStarted_Sjon");
        this.searchBtn = page.locator(".DocSearch-Button-Placeholder");
        this.searchInput = page.locator(".DocSearch-Input");
        this.searchResult = page.locator(".DocSearch-Hit");
    }

    async goto(){
        await this.page.goto('https://playwright.dev');
    }
    
    async clickOnGetStartedLink() {
        await this.getStartedLink.click();
    }

    async enterTextInSearchField(text: string) {
        await this.searchBtn.click();
        await this.searchInput.fill(text);
    }
}