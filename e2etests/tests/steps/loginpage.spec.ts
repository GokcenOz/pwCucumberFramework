import { getPage } from "../../corelib/basepage.spec";
import { Given, When, Then, setDefaultTimeout, Before, After } from "@cucumber/cucumber";
import LoginPage from "../pages/loginpage"

let loginPage: LoginPage;
//loginPage = new LoginPage(getPage()); use in steps
