import "expect-puppeteer";
import * as path from "path";

const screenshotDir = process.env.SCREENSHOT_DIR;
describe("Google", () => {
	beforeAll(async () => {
		await page.goto("https://google.com");
	});

	it('should display "google" text on page', async () => {
		await expect(page).toMatch("google");
		if (screenshotDir) await page.screenshot({ path: path.join(screenshotDir, "google-01.png") });
	});
});
