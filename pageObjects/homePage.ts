import { ElementFinder, element, by, ElementArrayFinder, browser } from "protractor";

export class homePage {

    private onlineShopMenu = element(by.css("[routerlink='/onlineShop']"));
    private cartMenu=element(by.css("[href='/petclinic/cart']"));
    private cartMenuSymbol=element(by.css("[alt='cart.png']"));

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

    async displayCartSymbol() {
        return this.cartMenuSymbol;
    }

}