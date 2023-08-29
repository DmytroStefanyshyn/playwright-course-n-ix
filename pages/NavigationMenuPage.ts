import { type Locator, type Page } from '@playwright/test';

/**
 * NavigationMenuPage class representing Navigation Menu application page
 *
 * @class NavigationMenuPage
 */
export class NavigationMenuPage {
    readonly page: Page;
    readonly languageSelectDropdown: Locator;
    readonly dotNetMenuItem: Locator;
    readonly menuTitle: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.languageSelectDropdown = page.locator(".navbar__items .dropdown");
        this.dotNetMenuItem = page.locator(".dropdown__menu *[href='/dotnet/']");
        this.menuTitle = page.locator(".navbar__brand");
    }
    
    async selectDotNetMenuItem() {
        await this.languageSelectDropdown.hover();
        await this.dotNetMenuItem.click();
    }
}