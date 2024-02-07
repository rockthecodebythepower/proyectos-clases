const { default: mongoose, mongo } = require("mongoose");
const puppeteer = require("puppeteer");
const Shelving = require("../../api/models/shelving");

const SHELVINGS = [];

const scrapp = async () => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto(
      "https://www.ikea.com/es/es/cat/estanterias-librerias-st002/?page=50"
    );

    await page.setViewport({ width: 1080, height: 1024 });

    const buttonCookies = await page.waitForSelector(
      "#onetrust-reject-all-handler"
    );

    await buttonCookies.evaluate((el) => el.click());

    const products = await page.$$(".plp-fragment-wrapper");

    for (const product of products) {
      const shelving = {
        cleanImage: "",
        exampleImage: "",
        name: "",
        offer: false,
        price: "",
        stars: "",
        opinions: "",
      };

      const cleanImage = await product.$(".plp-image.plp-product__image");
      const cleanImageSrc = (await cleanImage?.evaluate((e) => e.src)) || "";

      shelving.cleanImage = cleanImageSrc;

      const exampleImage = await product.$(
        ".image.plp-product__image.plp-product__image--alt"
      );
      const exampleImageSrc =
        (await exampleImage?.evaluate((e) => e.src)) || "";

      shelving.exampleImage = exampleImageSrc;

      const name = await product.$(
        ".notranslate.plp-price-module__product-name"
      );
      const nameText = (await name?.evaluate((e) => e.textContent)) || "";

      shelving.name = nameText;

      const offer = await product.$(".plp-commercial-message__title");
      const offerFinal = (await offer?.evaluate((e) => true)) || false;

      shelving.offer = offerFinal;

      const price = await product.$(".plp-price__sr-text");
      const priceText = (await price?.evaluate((e) => e.textContent)) || "";

      shelving.price = priceText;

      const stars = await product.$("span[aria-label]");
      const starsQuantity =
        (await stars?.evaluate((e) => e.ariaLabel.split(" ")[1])) || "";
      const opinionsQuantity =
        (await stars?.evaluate((e) => e.ariaLabel.split(" ").at(-1))) || "";

      shelving.stars = starsQuantity;
      shelving.opinions = opinionsQuantity;

      SHELVINGS.push(shelving);
    }

    await mongoose.connect(
      "mongodb+srv://root:root@cluster0.isb6s71.mongodb.net/?retryWrites=true&w=majority"
    );

    await Shelving.insertMany(SHELVINGS);

    console.log("Datos insertados correctamente");

    await mongoose.disconnect();

    await browser.close();

  } catch (error) {
    console.log(error);
  }
};

scrapp();
