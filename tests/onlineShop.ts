import { browser } from "protractor";
import { onlineShopPage } from "../pageObjects/onlineShopPage";
import { homePage } from "../pageObjects/homePage";

let expect = require('chai').expect;
let onlineShop = new onlineShopPage();
let home = new homePage();
declare const allure: any;

describe('Testing New Screen-Shop online', function () {

    it('Verify user is able to navigate to online shop page', async function () {
        await home.clickOnlineShopMenu();
    });

    it('Verify title of online shop screen', async function () {
        expect(await onlineShop.getPageTitleText()).to.equal("Foods / Treats");
    });

    afterEach(async function () {
        if(this.currentTest.state !== "passed"){
        const png = await browser.takeScreenshot();
        allure.createAttachment('Screenshot', new Buffer(png, 'base64'), 'image/png');
        }
    })

});

