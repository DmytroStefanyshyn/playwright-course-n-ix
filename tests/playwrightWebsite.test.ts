import { test, expect } from '@playwright/test';
import { NavigationMenuPage } from '../pages/NavigationMenuPage';
import { PlaywrightDevPage } from '../pages/PlaywrightDevPage';
import { DocumentationsPage } from '../pages/DocumentationsPage';
import { FooterMenuPage } from '../pages/FooterMenuPage';

test.describe("Playwright website:", () => {
  let navigationMenu: NavigationMenuPage;
  let playwrightDev: PlaywrightDevPage;
  let documentations: DocumentationsPage;
  let footerMenu: FooterMenuPage;

  test.beforeEach(async ({ page }) => {
    navigationMenu = new NavigationMenuPage(page);
    playwrightDev = new PlaywrightDevPage(page);
    documentations = new DocumentationsPage(page);
    footerMenu = new FooterMenuPage(page);
  });

  test('should have correct title when select .Net in navigation menu', async () => {
    playwrightDev.goto();
    navigationMenu.selectDotNetMenuItem();
    
    await expect(navigationMenu.menuTitle).toHaveText("Playwright for .NET");
  });

  test('some of menu items are collapsed and expanded in Docs page', async () => {
    playwrightDev.goto();
    playwrightDev.clickOnGetStartedLink();
    
    await expect(documentations.gettingStartedMenuLink).toHaveAttribute("aria-expanded", "true");
    await expect(documentations.migrationMenuLinks).toHaveAttribute("aria-expanded", "false");
  });

  test('menu item is collapsed when clicking on Getting Started menu item', async () => {
    playwrightDev.goto();
    playwrightDev.clickOnGetStartedLink();
    documentations.clickOnGettingStartedMenuLink();
    
    await expect(documentations.gettingStartedMenuLink).toHaveAttribute("aria-expanded", "false");
  });

  test('the search result should contains 11 items when you search - locators', async () => {
    playwrightDev.goto();
    playwrightDev.enterTextInSearchField("locators")
    
    await expect(playwrightDev.searchResult).toHaveCount(11);
  });

  test('new tab with Playwright YouTube channel is opened when click on YouTube link in footer', async ({ context }) => {
    playwrightDev.goto();
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      footerMenu.clickOnYouTubeLink(),
    ])
    
    await expect(newPage).toHaveTitle("Playwright - YouTube");
  });
});