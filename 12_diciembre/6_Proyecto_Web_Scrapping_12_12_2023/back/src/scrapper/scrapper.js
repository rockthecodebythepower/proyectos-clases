const { default: puppeteer } = require("puppeteer");

//! scrapper
const scrapper = async (url) => {
  const arrayImgs = [];

  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();

  await page.goto(url);

  const divsMorZF = await page.$$("div.MorZF");

  let inicio = Math.floor(Math.random() * divsMorZF.length);

  if (inicio >= divsMorZF.length - 20) {
    inicio -= 20;
  }

  let final = inicio + 20;

  for (let i = inicio; i < final; i += 2) {
    const div = divsMorZF[i];
    const img = await div.$eval("img", (e) => e.src);
    arrayImgs.push(img);
  }

  browser.close();
  return arrayImgs;
};

module.exports = { scrapper }