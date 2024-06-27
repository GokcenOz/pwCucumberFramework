import {Page} from "playwright";
import * as paymentPageLoc from "../locators/paymentpageloc.json";
import BasePage from "../pages/basepage";
import { ICreateAttachment, ICreateLog } from "@cucumber/cucumber/lib/runtime/attachment_manager";
import { faker } from '@faker-js/faker';




export default class PaymentPage extends BasePage{

    constructor(page: Page,log: ICreateAttachment){
        super(page, log);
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

    async enterRandomNameSurname(){
        await this.enterRandomValue(paymentPageLoc.customerName);
        await this.enterRandomValue(paymentPageLoc.customerSurname);
    }

}