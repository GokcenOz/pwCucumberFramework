import { Given, When, Then, setDefaultTimeout, Before, After } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { getPage } from "../../corelib/corelib.spec";
import PaymentPage from "../pages/paymentpage"

let paymentPage: PaymentPage;


Given('User is on payment page', async function () {
  this.log('this is start of user on payment page....!')//"this"(not console) keyword used for to read on html report
 // await getPage().locator("//h3[.=' Payment Information']").waitFor({ timeout: 5000 });
 // expect(getPage().locator("//h3[.=' Payment Information']")).toBeVisible();
  this.parameters.a = 10; //stepler içinde ortak value kullanmak için örnek olusturuldu(selenium get saved text gibi)
});

When('User enter user email as {string}', async function (email: string) {
  await getPage().locator("xpath=//input[@id='profile-email-input']").fill(email);
  this.attach('enter user name is successfull!..')
  console.log(`value is ${this.parameters.a} `) //a degeri tüm spec file larda kullanılabilir.
});

When('User enter amount as {int}', async function (amount: number) {
  await getPage().locator("xpath=//input[@id='amount-input']").fill(amount.toString());
});

Then('User enter credit card details', async function () {
  paymentPage = new PaymentPage(getPage(), this.attach);
  await paymentPage.creditCardDetails();

});

Then('User click payment button', async function () {
  paymentPage = new PaymentPage(getPage(), this.attach);
  await paymentPage.clickContractCheckbox();
  await paymentPage.clickPaymentButton();
});


Then('Verify {string} is visible', function (xpath: string) {

  getPage().locator(xpath).waitFor({ timeout: 5000 });
  expect(getPage().locator(xpath)).toBeVisible();
  console.log(`${xpath} value is visible!`)
});

Then('Verify {string} is visible and text includes {string}', function (xpath: string, textValue: string) {

  getPage().locator(xpath).waitFor({ timeout: 5000 });
  expect(getPage().locator(xpath)).toBeVisible();
  expect(getPage().locator(xpath)).toHaveText(textValue);
  console.log(`${xpath} value is visible and includes " ${textValue}" !`)
});


Then('Clear {string} input', async function (xpath: string) {
  await getPage().locator(xpath).clear();
});

When('User enter phone as {string}', async function (phoneNumber: string) {
  getPage().locator("//input[@id='profile-phone-input']").waitFor({ timeout: 5000 });
  await getPage().locator("//input[@id='profile-phone-input']").fill(phoneNumber);
});


When('User enter phone as {string}', async function (phoneNumber: string) {
  getPage().locator("//input[@id='profile-phone-input']").waitFor({ timeout: 5000 });
  await getPage().locator("//input[@id='profile-phone-input']").fill(phoneNumber);
});

When('User enter name and surname randomly', async function () {
  await paymentPage.enterRandomNameSurname();
});

Then('Verify {string} text value is not visible', function (string) {
    expect(getPage().getByText(string)).not.toBeVisible();
});

Then('User click garanti pay button', async function () {
  await (getPage().locator("//button[@id='garantiPay-button']")).click();
  await (getPage().locator("//div[@class='simprakit-checkbox-wrapper-check']")).click();
});

Then('User click payment button garanti pay', async function () {
  await (getPage().locator("//button[@class='simprakit-button primary full payment-page-submit-button']")).click();
});

Then('This is a dummy step to fail', async function () { //written to test fail step and ss attach 
  expect(1).toBe(2);
})

