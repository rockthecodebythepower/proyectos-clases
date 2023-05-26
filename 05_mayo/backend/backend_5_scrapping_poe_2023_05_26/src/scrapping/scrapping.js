const puppeteer = require("puppeteer");
const fs = require("fs");

const WEAPON_URL = "https://www.pathofexile.com/item-data/weapon";

const scrapeWeapons = async () => {
	//Crear nuestra ventana de navegador
	const browser = await puppeteer.launch({
		headless: false,
		defaultViewport: null,
		args: ["--start-maximized"],
	});
	//Abrimos una nueva pestaña en el navegador
	const page = await browser.newPage();
	//Ir a la URL que hemos almacenado
	await page.goto(WEAPON_URL);
	//Como los datos de la aplicación están dentro de tr vamos a buscarlos todos
	const trs = await page.$$eval("tr", async (nodes) => {
		return nodes.map((node) => {
			//Si la tr tiene 8 tds dentro...
			if (node.children.length === 8) {
				return {
					name: node.children[1].innerText,
					level: node.children[2].innerText,
					dex: node.children[3].innerText,
					damage: node.children[4].innerText,
					critical: node.children[5].innerText,
					aps: node.children[6].innerText,
					dps: node.children[7].innerText,
					image: node.children[0].children[0]?.currentSrc,
				};
			} else if (node.children.length === 9) {
				return {
					name: node.children[1].innerText,
					level: node.children[2].innerText,
					dex: node.children[3].innerText,
					int: node.children[4].innerText,
					damage: node.children[5].innerText,
					critical: node.children[6].innerText,
					aps: node.children[7].innerText,
					dps: node.children[8].innerText,
					image: node.children[0].children[0]?.currentSrc,
				};
			}
		});
	});

	//Como la primera fila son los titulos de la tabla la vamos a eliminar
	trs.shift();
	//Y ahora vamos a eliminar los null de nuestra lista
	const weaponList = trs.filter((tr) => tr !== null);

	const jsonWeapons = JSON.stringify(weaponList);
	fs.writeFile("weapons.json", jsonWeapons, () => {
		console.log("Weapons JSON created!");
	});

	//Cerraremos el navegador
	await browser.close();
};

scrapeWeapons();
