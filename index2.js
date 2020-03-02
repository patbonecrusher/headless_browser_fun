const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const MODALBUTTONSELECTOR = '.modal-footer > button';

  await page.goto('https://native-land.ca/');
  await page.click(MODALBUTTONSELECTOR);

  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
