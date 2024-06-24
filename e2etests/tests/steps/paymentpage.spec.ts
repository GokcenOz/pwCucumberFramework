import { Given, When, Then, setDefaultTimeout, Before, After } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { getPage } from "../../corelib/basepage.spec";
import PaymentPage from "../pages/paymentpage"

let paymentPage: PaymentPage;



Given('User is on payment page', async function () {

  await getPage().goto('https://proteintech.simpralink.com/');
  await getPage().locator("//h3[.=' Payment Information']").waitFor({ timeout: 5000 });
  expect(getPage().locator("//h3[.=' Payment Information']")).toBeVisible();
});

When('User enter user email', async function () {
  await getPage().locator("xpath=//input[@id='profile-email-input']").fill('aa@a.com');
});

When('User enter amount', async function () {
  await getPage().locator("xpath=//input[@id='amount-input']").fill('34');
});

Then('User enter credit card details', async function () {
  paymentPage = new PaymentPage(getPage());
  await paymentPage.creditCardDetails();

});

Then('User click payment button', async function () {
  paymentPage = new PaymentPage(getPage());
  await paymentPage.clickContractCheckbox();
  await paymentPage.clickPaymentButton();
});


