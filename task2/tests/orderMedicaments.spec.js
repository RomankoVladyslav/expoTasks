const { test, expect } = require('@playwright/test');
const { BasePage } = require("../pages/basePage");
const { PlpPage } = require("../pages/plpPage");
const { PdpPage } = require("../pages/pdpPage");
const { StoresPage } = require("../pages/storesPage");
const { CheckoutPage } = require("../pages/checkoutPage");

test.skip('Complete order with any medicaments', async ({ page }) => {
    const basePage = new BasePage(page);
    const plpPage = new PlpPage(page);
    const pdpPage = new PdpPage(page);
    const storesPage = new StoresPage(page);
    const checkoutPage = new CheckoutPage(page);

    await test.step('Go to https://tabletki.ua/uk/', async () => {
        await basePage.goto();
        expect(await basePage.hpSearchContainer.isVisible()).toBeTruthy();
    });

    await test.step('Go to medicaments PLP by Category menu ', async () => {
        await basePage.navCatalogSelector.click();
        await basePage.medicamentsInCatalog.first().click();
        await expect(page).toHaveURL(/.*category\/*/);
        expect(await plpPage.categoryFilters.isVisible()).toBeTruthy();
        expect(await plpPage.productsList.isVisible()).toBeTruthy();
    });

    await test.step('Go to any PDP', async () => {
        await plpPage.carouselProductCard.first().click();
        expect(pdpPage.productCardInfo.isVisible()).toBeTruthy();
        expect(pdpPage.findProductInMarketsBtn.isVisible()).toBeTruthy();
    });

    await test.step('Go to Stores list page', async () => {
        await pdpPage.findProductInMarketsBtn.click();
        await expect(page).toHaveURL(/.*pharmacy\/kiev/);
        expect(storesPage.storeList.isVisible()).toBeTruthy();
        expect(storesPage.storesMap.isVisible()).toBeTruthy();
    });

    await test.step('Go to Reserve page', async () => {
        await storesPage.reserveOrder.first().click();
        await storesPage.goToCartBtn.click();
        await expect(page).toHaveURL(/.*reserve/);
        expect(checkoutPage.reservationBtn.isVisible()).toBeTruthy();
        expect(checkoutPage.cartProductList.isVisible()).toBeTruthy();
        expect(checkoutPage.cartTotalPrice.isVisible()).toBeTruthy();
    });

    await test.step('Fill all required info and complete order', async () => {
        await checkoutPage.reservationBtn.click();
        expect(checkoutPage.reservationUserInfo.isVisible()).toBeTruthy();
        await checkoutPage.fillCheckoutFields(page);
        await checkoutPage.submitCheckoutBtn.click();
        await expect(page).toHaveURL(/.*success\/*/);
        expect(checkoutPage.checkoutCardInfo.isVisible()).toBeTruthy();
    });
});
