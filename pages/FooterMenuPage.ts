import { type Locator, type Page } from '@playwright/test';

/**
 * FooterMenuPage class representing Footer Menu application page
 *
 * @class FooterMenuPage
 */
export class FooterMenuPage {
    readonly page: Page;
    readonly youTubeLink: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.youTubeLink = page.locator(".footer__item").getByText("YouTube");
    }

    async clickOnYouTubeLink() {
        await this.youTubeLink.click();
    }
}