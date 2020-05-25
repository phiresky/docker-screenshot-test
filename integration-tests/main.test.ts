import "expect-puppeteer";
import * as path from "path";
import * as fs from "fs";
const screenshotDir = process.env.SCREENSHOT_DIR;
if (screenshotDir) {
	console.log("outputting screenshots to", screenshotDir);
	fs.mkdirSync(screenshotDir, { recursive: true });
}

async function screenshot(name: string) {
	if (!screenshotDir) return;
	await page.screenshot({ path: path.join(screenshotDir, name + ".png") });
}

describe("Google", () => {
	it("should go to google", async function(this: any) {
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
	});
});
