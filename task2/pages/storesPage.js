const { expect } = require('@playwright/test');
const { BasePage } = require("../pages/basePage");

exports.StoresPage = class StoresPage extends BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        super(page);

        this.storeList = page.locator("[class*='tabletki-adcontainer']");
        this.reserveOrder = page.locator("[class*='btn-reserve']");
        this.storesMap = page.locator("#map");
        this.goToCartBtn = page.locator("#quantityAddToCard");
    }
}