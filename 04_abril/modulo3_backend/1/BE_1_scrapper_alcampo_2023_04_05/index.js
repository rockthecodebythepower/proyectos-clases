const puppeteer = require("puppeteer");
const { crearSemilla } = require("./products.seed");

const main = async () => {
  const links = [
    "https://www.alcampo.es/compra-online/frescos/carne/pollo/c/W1301?q=%3Arelevance",
    "https://www.alcampo.es/compra-online/frescos/carne/vacuno/c/W1304?q=%3Arelevance",
    "https://www.alcampo.es/compra-online/frescos/pescados-mariscos-y-moluscos/c/W14?q=%3Arelevance",
    "https://www.alcampo.es/compra-online/frescos/pescados-mariscos-y-moluscos/c/W14?q=%3Arelevance",
    "https://www.alcampo.es/compra-online/bebidas/agua-soda-y-gaseosas/c/W1101?q=%3Arelevance",
    "https://www.alcampo.es/compra-online/bebidas/zumos-de-frutas/c/W1102?q=%3Arelevance",
    "https://www.alcampo.es/compra-online/alimentacion/aceite-vinagre-salsas-especias/aceites/c/W2301?q=%3Arelevance",
    "https://www.alcampo.es/compra-online/alimentacion/caldos-pasta-arroz-legumbres-pure/pasta/c/W100501?q=%3Arelevance",
    "https://www.alcampo.es/compra-online/alimentacion/leche-huevos-yogures-y-lacteos/leche/c/W1603?q=%3Arelevance",
    "https://www.alcampo.es/compra-online/frio-y-congelados/congelados/patatas-croquetas-y-empanadillas/c/WCroquetasEmpanadillas?q=%3Arelevance",
    "https://www.alcampo.es/compra-online/frio-y-congelados/congelados/verduras/esparragos-y-guisantes/c/W120302?q=%3Arelevance",
  ];

  let ALLPRODUCTS = [];

  for (const link of links) {
    let pagina = 0;

    let puedo = true;

    while (puedo === true) {
      
      const browser = await puppeteer.launch({
        headless: false,
      });

      const page = await browser.newPage();

      await page.goto(link + `&page=${pagina}`);
      console.log(pagina);

      await page.waitForSelector(".cookie-button");

      await page.evaluate(() => {
        document.querySelector(".cookie-button").click();
      });

      await page.waitForSelector(".popupMyStore");

      await page.evaluate(() => {
        document.querySelector("#header-container").click();
        document.querySelector(".first-time-overlay").click();
      });

      const pageProducts = await page.evaluate(() => {
        const products = document.querySelectorAll(".productGridItem");
        if (products.length === 0) {
          puedo = false;
          return [];
        }
        return Array.from(products).map((product) => {
          const productName = product
            .querySelector(".productName span")
            ?.innerHTML.trim();

          const price = product
            .querySelector(".long-price")
            ?.innerText.trim()
            .split("\n");
          const priceUd = parseFloat(price[0].split(" ")[0].replace(",", "."));

          const img = product.querySelector("img")?.src;

          return { productName, priceUd, img };
        });
      });

      /* await page.evaluate(() => {
        document.querySelector(".next a").click();
      }); */

	  if (pageProducts.length === 0) {
		puedo = false;
	  }

      pageProducts.sort((a, b) => a.priceUd - b.priceUd);

      ALLPRODUCTS = [...ALLPRODUCTS, ...pageProducts];
      pagina++;

	  await browser.close();
    }

  }

  crearSemilla(ALLPRODUCTS);
};

main();
