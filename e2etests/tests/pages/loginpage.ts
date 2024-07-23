import {Page} from "playwright";
import BasePage from "../pages/basepage";
import * as loginpageloc from "../locators/loginpageloc.json";


export default class LoginPage extends BasePage{

    constructor(page: Page){
        super(page);
    }
}
