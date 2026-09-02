const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto("http://localhost:3000/industries/food-and-beverage", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  await page.screenshot({ path: ".tmp-fb-mobile.png", clip: { x: 0, y: 0, width: 390, height: 500 } });
  await browser.close();
  console.log("done");
})().catch((e) => { console.error(e); process.exit(1); });
