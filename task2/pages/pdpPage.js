const { expect } = require('@playwright/test');
const { BasePage } = require("../pages/basePage");

exports.PdpPage = class PdpPage extends BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        super(page);

        this.findProductInMarketsBtn = page.locator("#findProduct");
        this.productCardInfo = page.locator("#productCardInformation");
    }
}