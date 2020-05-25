import "expect-puppeteer";

import { screenshot } from "./util";

describe("Google", () => {
	it("should go to google", async function (this: any) {
		await page.goto("https://google.com");
		await screenshot("01 google homepage");
	});

	it('should display "google" text on page', async () => {
		await expect(page).toMatch("google");
	});

	it("should be able to search for bing", async () => {
		await page.type("input[name=q]", "bing search");
		await screenshot("02 entering bing search");
		// click
		await Promise.all([page.click("[aria-label='Google Search']"), page.waitForNavigation()]);
		await screenshot("03 searched for bing");
		await screenshot("03 searched for bing b");
	});
  
});
