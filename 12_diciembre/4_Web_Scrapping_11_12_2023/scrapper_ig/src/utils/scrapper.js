const puppeteer = require("puppeteer");
const fs = require("fs");

const gamesArray = [];

const scrapper = async (url) => {
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();

  await page.goto(url);

  await page.setViewport({ width: 1080, height: 1024 });

  repeat(page, browser);
  /* write(gamesArray); */
};

const repeat = async (page, browser) => {
  const arrayDivs = await page.$$(".force-badge");

  for (const gameDiv of arrayDivs) {
    let price;
    let title = await gameDiv.$eval(".title", (el) => el.textContent);
    let img = await gameDiv.$eval("img", (el) => el.src);

    try {
      price = await gameDiv.$eval(".price", (el) =>
        parseFloat(el.textContent.slice(0, el.textContent.length - 1))
      );
      const game = {
        title,
        price,
        img,
      };
      gamesArray.push(game);
    } catch (error) {
      const game = {
        title,
        img,
        stock: false,
      };
      gamesArray.push(game);
    }
  }

  try {
    await page.$eval("[title='Next']", (el) => el.click());
    await page.waitForNavigation();
    repeat(page, browser);
  } catch (error) {
    write(gamesArray);
    await browser.close();
  }
};

const write = (gamesArray) => {
  fs.writeFile("games.json", JSON.stringify(gamesArray), () => {
    console.log("Archivo escrito");
  });
};

module.exports = { scrapper };