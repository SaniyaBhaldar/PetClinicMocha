import { browser } from "protractor";
exports.config = {

    directConnect: true,
    framework: 'mocha',

    SELENIUM_PROMISE_MANAGER: false,
    capabilities:
    {
        browserName: 'chrome',
        chromeOptions: {
            args: ["--incognito"],
        }
    },


    suites: {
        mochaTest: ['./tests/home.js',
                   // './tests/onlineShop.js'
                
                ]
    },
    onPrepare: async function () {
        await browser.driver.manage().window().maximize();
    },

    mochaOpts: {
        reporter: 'mocha-allure-reporter',
        timeout: 100000
    },
}