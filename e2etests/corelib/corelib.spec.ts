
import { Given, When, Then, setDefaultTimeout, Before, After, BeforeAll, AfterAll, BeforeStep, AfterStep, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium, firefox } from "playwright";
import { expect } from "@playwright/test";
import dotenv from "dotenv";

setDefaultTimeout(1000 * 60 * 2);

let browser: Browser;
let bCtx: BrowserContext;
let page: Page;

BeforeAll(async function () {
  dotenv.config({
    path: `${process.cwd()}/config/.env.${process.env.npm_config_env}` //prod veya qa ortamında testi koşmak için parametre girilir "npm test --env=prod"
  });

  let browserType = process.env.browser;

  switch (browserType) {

    case 'chrome':
    case 'gc':
      browser = await chromium.launch({ headless: false, channel: "chrome", args: ['--start-maximized'] });
      break;
    case 'firefox':
    case 'ff':
      browser = await firefox.launch({ headless: false, args: ['--start-maximized'] });
      break;
    default:
      throw new Error(`invalid browser ${browserType} is passed..'`)
      break;

  }
})


Before(async function (scenario) {
  bCtx = await browser.newContext({ viewport: null, javaScriptEnabled: true });
  page = await bCtx.newPage();
  this.attach(`...........${scenario.pickle.name} is started.........`);

  await page.goto(process.env.app_url!);

});

AfterAll(async function () {
  //await browser.close();
})


After(async function (scenario) {
    // await page.close();
   //  await bCtx.close();
  this.attach(`..........${scenario.pickle.name} is ended..........`);
  this.attach(`...SCENARIO STATUS IS>>> ${scenario.result?.status}...`)
  if (scenario.result?.status == Status.FAILED) {
    this.attach(`...I'm taking screenshot!.....`)
    const img= await page.screenshot({
      path: `./reports/${scenario.pickle.name}.png`
    });
    this.attach(img,'image/png');
  }
});

BeforeStep(async function (scenario) {
  this.attach(`..........${scenario.pickleStep.text} is started..........`);

})

AfterStep(async function (scenario) {
  this.attach(`..........${scenario.pickleStep.text} is ended..........`);

})


export function getPage(): Page {
  return page;
}