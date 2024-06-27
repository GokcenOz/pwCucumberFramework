import { ICreateAttachment, ICreateLog } from "@cucumber/cucumber/lib/runtime/attachment_manager";
import { Page } from "playwright";
import { faker } from '@faker-js/faker';


export default class BasePage {
    protected page: Page;
    protected log: ICreateLog;

    constructor(page: Page, log: ICreateAttachment) {
        this.page = page;
        this.log = log;
    }

    async enter(object: any, data: string) {
        await this.getLocator(object).fill(data);
        this.log(`entered value ${data}`);
    }

    async click(object: any) {
        await this.getLocator(object).click(object["locator"]);
    }

    async enterRandomValue(object: any) {
        const randomText = faker.internet.displayName();
        this.log("fake value: " + randomText);
        await this.enter(object, randomText);
    }

    getLocator(object: any) {
        return this.page.locator(object["locator"]);
    }

}