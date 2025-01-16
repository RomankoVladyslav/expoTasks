const { test, expect } = require('@playwright/test');
const URL = 'https://rctest-clone-1625730023-rc.expoplatform.com/api/v1/community/exhibitors';
let apiContext;

test.beforeAll(async ({ playwright }) => {
    apiContext = await playwright.request.newContext({
        baseURL: 'https://rctest-clone-1625730023-rc.expoplatform.com',
        extraHTTPHeaders: {
            'Accept': '/api/v1/community/exhibitors',
        },
    });
})

test.skip('API test', async ({ page }) => {

    await test.step('API POST, checking keys data and compare key with value', async () => {
        const _response = await apiContext.post(`${URL}`, {});
        expect(_response.ok()).toBeTruthy();

        const res = await _response.json();
        const data = res.data;
        let result;

        data.list.map(item => {
            function compareKeysAndValues (keyToCompare, valueToCompare){
                const newArr = Object.keys(item).filter(key => item[key] === valueToCompare);
                const keyAvailable = newArr.some(element => keyToCompare == element);
                if (keyAvailable){
                    return true;
                }else{
                    return false;
                }
            };

            result = compareKeysAndValues('name', 'testss');
            console.log('Result API', result);

            const values = Object.values(item);
            values.map(element => {
                console.log(typeof element);
            });

        });
        await expect(result).toBe(true);
    });
});