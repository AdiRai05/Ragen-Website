const puppeteer = require('puppeteer');
const path = require('path');

const postNum = process.argv[2] || '1';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1080 });

  const htmlPath = 'file://' + path.join(__dirname, `public/ragen-instagram-post-${postNum}.html`);
  console.log(`Loading: ${htmlPath}`);
  await page.goto(htmlPath, { waitUntil: 'networkidle0' });

  const slides = await page.$$('.slide');
  console.log(`Found ${slides.length} slides`);

  for (let i = 0; i < slides.length; i++) {
    const filename = path.join(__dirname, `public/post-${postNum}-slide-${i + 1}.png`);
    await slides[i].screenshot({ path: filename });
    console.log(`Saved ${filename}`);
  }

  await browser.close();
  console.log('Done!');
})();
