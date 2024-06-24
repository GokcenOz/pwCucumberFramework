import { Page } from "playwright";

export default class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async enter(object:any, data: string){
        await this.getLocator(object).fill(data);
        console.log(`entered value ${data}`);  
    }

    async click(object:any){
        await this.getLocator(object).click(object["locator"]);
    }

    getLocator(object:any){
        return this.page.locator(object["locator"]);
    }

}