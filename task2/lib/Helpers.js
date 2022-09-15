const { fields } = require("../lib/Selectors");
const { userInfo } = require("../lib/Constants");

const fillCheckoutFields = async (page) => {
    await page.waitForSelector(fields.cartPhone);
    await page.fill(fields.cartPhone, userInfo.phoneNumber);

    await page.waitForSelector(fields.cartEmail);
    await page.fill(fields.cartEmail, userInfo.email);
};

module.exports = {
    fillCheckoutFields
}