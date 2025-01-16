const { test, expect } = require('@playwright/test');
const axios = require('axios');
const URL = 'https://rctest-clone-1625730023-rc.expoplatform.com/api/v1/community/exhibitors';
let apiContext;

test.skip('API test', async ({ page }) => {

    await test.step('API POST, checking keys data and compare key with value', async () => {

        await axios
        .get("https://reqres.in/api/users?page=2")
        .then(function (response) {
          console.log(response.data.data);
          console.log(response.status);
          console.log(response.statusText);
            }); 

        await axios({
            method: 'get',
            url: 'https://reqres.in/api/users/2',
            })
            .then(function (response){
            console.log(response.data.data);
            console.log(response.status);
            console.log(response.statusText);
            });

        await axios
            .get("https://reqres.in/api/users/23")
            .then(function (response) {
                console.log(response.data.data);
                console.log(response.status);
                console.log(response.statusText);
            })
            .catch(function (error) {
                console.log(error);
              });
                    
         });

    await test.step('API POST, checking keys data and compare key with value', async () => {

        await axios({
            method: 'post',
            url: 'https://reqres.in/api/users',
            data: {
                "name": "morpheus",
                "job": "leader"
              }
            })
            .then(function (response){
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            });
        });

        await test.step('API POST, checking keys data and compare key with value', async () => {

            await axios({
                method: 'put',
                url: 'https://reqres.in/api/users/2',
                data: {
                    "name": "morpheus",
                    "job": "zion resident"
                }
                })
                .then(function (response){
                console.log(response.data);
                console.log(response.status);
                console.log(response.statusText);
                });
            });
         
    });