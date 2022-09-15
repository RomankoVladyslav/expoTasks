const { expect } = require('@playwright/test');
const { BasePage } = require("../pages/basePage");

exports.PlpPage = class PlpPage extends BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        super(page);

        //Category Filters Section
        this.categoryFilters = page.locator("[class*='category-card__filters']");

        //Recommended Products Section
        this.productsList = page.locator("#groupbody");
        this.carouselProductCard = page.locator("[class*='carousel-simple-item']");
    }
}