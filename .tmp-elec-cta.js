const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  for (const w of [320, 360, 375, 390, 430]) {
    const page = await browser.newPage({ viewport: { width: w, height: 900 } });
    await page.goto("http://localhost:3000/industries/electronics", { waitUntil: "networkidle" });
    await page.waitForTimeout(500);
    const el = page.locator("main section").nth(2); // CtaSection is 3rd top-level section
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(700);
    await page.screenshot({ path: `.tmp-elec-cta-${w}.png` });
    await page.close();
  }
  await browser.close();
  console.log("done");
})().catch((e) => { console.error(e); process.exit(1); });
