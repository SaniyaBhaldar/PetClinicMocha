import { ElementFinder, element, by, ElementArrayFinder, browser } from "protractor";

export class homePage {

    private onlineShopMenu = element(by.css("[routerlink='/onlineShop']"));

    async getPageTitle() {
        return await browser.getTitle();
    }

    async getURL() {
        return await browser.getCurrentUrl();
    }

    async getOnlineShopMenuText() {
        return await this.onlineShopMenu.getText();
    }

    clickOnlineShopMenu() {
        return this.onlineShopMenu.click();
    }

}