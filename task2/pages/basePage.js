const { expect } = require('@playwright/test');

exports.BasePage = class BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;

        //Catalog navigation
        this.navCatalogSelector = page.locator("button[class*='ga-catalog']");
        this.medicamentsInCatalog = page.locator(".menu__item");

        //HP Elements
        this.hpSearchContainer = page.locator(".home__top-container");
    }

    async goto() {
        await this.page.goto('https://tabletki.ua/uk/');
    }

}