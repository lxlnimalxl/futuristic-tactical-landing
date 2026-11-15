import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outDir = 'F:\\works\\International Portfolio\\n7\\screenshots';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function run() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 2 },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.goto('http://localhost:5179', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1500));

  console.log('1. Capturing Desktop Hero Showcase...');
  await page.screenshot({ path: path.join(outDir, 'hero-showcase.png') });

  console.log('2. Capturing Full Page Showcase...');
  await page.screenshot({ path: path.join(outDir, 'full-page-landing.png'), fullPage: true });

  console.log('3. Capturing Feature Section...');
  const featureEl = await page.$('#features');
  if (featureEl) {
    await featureEl.scrollIntoView();
    await new Promise(r => setTimeout(r, 600));
    await featureEl.screenshot({ path: path.join(outDir, 'features-showcase.png') });
  }

  console.log('4. Capturing Characters Section...');
  const charEl = await page.$('#characters');
  if (charEl) {
    await charEl.scrollIntoView();
    await new Promise(r => setTimeout(r, 600));
    await charEl.screenshot({ path: path.join(outDir, 'characters-showcase.png') });
  }

  console.log('5. Capturing Pricing Section...');
  const pricingEl = await page.$('#pricing');
  if (pricingEl) {
    await pricingEl.scrollIntoView();
    await new Promise(r => setTimeout(r, 600));
    await pricingEl.screenshot({ path: path.join(outDir, 'pricing-showcase.png') });
  }

  console.log('6. Capturing FAQ Section...');
  const faqEl = await page.$('#faq');
  if (faqEl) {
    await faqEl.scrollIntoView();
    await new Promise(r => setTimeout(r, 600));
    await faqEl.screenshot({ path: path.join(outDir, 'faq-showcase.png') });
  }

  console.log('7. Capturing Buy Game Modal...');
  await page.evaluate(() => {
    window.scrollTo(0, 0);
  });
  await new Promise(r => setTimeout(r, 400));
  // Click Header Buy Game button
  const buyBtn = await page.$('header button.btn-chamfer-solid');
  if (buyBtn) {
    await buyBtn.click();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(outDir, 'modal-buy-game.png') });
    // close modal
    const closeBtn = await page.$('div[role="dialog"] button, div.fixed button');
    if (closeBtn) await closeBtn.click();
    await new Promise(r => setTimeout(r, 400));
  }

  console.log('8. Capturing Operative Dossier Modal...');
  const firstCharCard = await page.$('#characters div.cursor-pointer');
  if (firstCharCard) {
    await firstCharCard.scrollIntoView();
    await new Promise(r => setTimeout(r, 400));
    await firstCharCard.click();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(outDir, 'modal-operative-dossier.png') });
    const closeBtn = await page.$('div.fixed button');
    if (closeBtn) await closeBtn.click();
    await new Promise(r => setTimeout(r, 400));
  }

  console.log('9. Capturing Tablet Viewport...');
  await page.setViewport({ width: 768, height: 1024, deviceScaleFactor: 2 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outDir, 'responsive-tablet.png') });

  console.log('10. Capturing Mobile Viewport...');
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outDir, 'responsive-mobile.png') });

  await browser.close();
  console.log('All screenshots captured successfully!');
}

run().catch(err => {
  console.error('Capture error:', err);
  process.exit(1);
});
