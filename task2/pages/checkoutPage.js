const { expect } = require('@playwright/test');
const { BasePage } = require("../pages/basePage");
const { userInfo } = require("../lib/Constants");

exports.CheckoutPage = class CheckoutPage extends BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        super(page);

        //Cart page
        this.reservationBtn = page.locator("[title='Оформити бронь']");
        this.cartProductList = page.locator("[id*='reserveCard']");
        this.cartTotalPrice = page.locator("[class*='shopping-card__price-info']");

        //Reserve page
        this.cartPhoneField = page.locator("#reservationPhoneMain");
        this.cartEmailField = page.locator("#reservationEmail");
        this.submitCheckoutBtn = page.locator("#submitCheckout");

        //AfterOrder Page
        this.reservationUserInfo = page.locator(".reservation__user-info");
        this.checkoutCardInfo = page.locator("#checkoutCardContainer");
    }

    async fillCheckoutFields(page){
        await page.waitForSelector(this.cartPhoneField);
        await page.fill(this.cartPhoneField, userInfo.phoneNumber);

        await page.waitForSelector(this.cartEmailField);
        await page.fill(this.cartEmailField, userInfo.email);
    };
}