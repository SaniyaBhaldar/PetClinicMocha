import { browser, ProtractorExpectedConditions, ExpectedConditions, by } from "protractor";
import { homePage } from "../pageObjects/homePage";
import { describe, it } from 'mocha';
import testdata from "../testData/userData";

const log = require("../logFile/logging").default;

let expect = require('chai').expect;
let home=new homePage();
declare const allure:any;

describe('Verify user will able to navigate to Petclinic application', function () {

    this.beforeAll('Enter application url in the browser window', async function () {
        await browser.get(testdata.appUrl);
    });

    it('Should be able to load the page', async function () {
         expect(await home.getURL()).to.equal("http://petclinicui.e46708b92c054086909b.eastus.aksapp.io/petclinic/"); 
    });

    it('User should able to see title of the webpage', async function () {
        //expect(await home.getPageTitle()).to.equal("Spring");
        expect(await home.getPageTitle()).to.equal("SpringPetclinicAngular");  
    });

    afterEach(async function () {
        if(this.currentTest.state !== "passed"){
        const png = await browser.takeScreenshot();
        allure.createAttachment('Screenshot', new Buffer(png, 'base64'), 'image/png');
        }
    })


});

describe('Verify user able to see menu on homepage', function () {

    it('Should display menu labeled as SHOP ONLINE on petclinic homepage', async function () {
        await expect(await home.getOnlineShopMenuText()).to.equal("ONLINE SHOP"); 
    });

    afterEach(async function () {
        if(this.currentTest.state !== "passed"){
        const png = await browser.takeScreenshot();
        allure.createAttachment('Screenshot', new Buffer(png, 'base64'), 'image/png');
        }
    })

});




