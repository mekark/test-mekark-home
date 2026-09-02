const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  for (const w of [320, 340, 360, 375, 390, 412, 430]) {
    const page = await browser.newPage({ viewport: { width: w, height: 700 } });
    await page.goto("http://localhost:3000/industries/food-and-beverage", { waitUntil: "networkidle" });
    await page.waitForTimeout(400);
    await page.screenshot({ path: `.tmp-fb-${w}.png`, clip: { x: 0, y: 130, width: w, height: 130 } });
    await page.close();
  }
  await browser.close();
  console.log("done");
})().catch((e) => { console.error(e); process.exit(1); });
