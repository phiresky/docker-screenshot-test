import * as path from "path";
import * as fs from "fs";

const screenshotDir = process.env.SCREENSHOT_DIR;
if (screenshotDir) {
	console.log("outputting screenshots to", screenshotDir);
	fs.mkdirSync(screenshotDir, { recursive: true });
}

export async function screenshot(name: string) {
	if (!screenshotDir) return;
	await page.screenshot({ path: path.join(screenshotDir, name + ".png") });
}