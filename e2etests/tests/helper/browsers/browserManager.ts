import { LaunchOptions, chromium, firefox, webkit } from "@playwright/test";

const options: LaunchOptions = {
    headless: !true
}
export const invokeBrowser = () => {
    const browserType = process.env.npm_config_BROWSER || "chrome";
    switch (browserType) {
        case "chrome":
            return chromium.launch({headless:true});
        case "firefox":
            return firefox.launch({headless:true});
        case "webkit":
            return webkit.launch({headless:true});
        default:
            throw new Error("Please set the proper browser!")
    }

}