import {Page} from "playwright";
import * as paymentPageLoc from "../locators/paymentpageloc.json";
import BasePage from "../pages/basepage";



export default class PaymentPage extends BasePage{

    constructor(page: Page){
        super(page);
    }


    async  creditCardDetails() {
        await this.enter(paymentPageLoc.cardHolder,'card holder');
        await this.enter(paymentPageLoc.cardNumber,'4444444444444444');
        await this.page.getByPlaceholder('mm/yy').fill('06/26'); //basepage kullanılmadan yazıldı 
        await this.enter(paymentPageLoc.cardCvv,'123');
    }

    async clickContractCheckbox(){
        await this.click(paymentPageLoc.contract);
        //await this.page.locator(paymentPageLoc.contract.locator).click();
    }

    async clickPaymentButton(){
        await this.click(paymentPageLoc.paymentButton);
        //await this.page.locator(paymentPageLoc.paymentButton.locator).click();
    }
}