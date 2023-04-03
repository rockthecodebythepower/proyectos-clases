import puppeteer from "puppeteer"
import fs from "fs"
import inquirer from "inquirer"

const BASE_URL = "https://www.game.es/"

//Creamos la función que realizará el scrapping
const scrapping = async (keyword) => {
  //Creamos un navegador que se va a lanzar con x opciones
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  })
  //Abrir una nueva página
  const page = await browser.newPage()
  //Vamos a navegar hasta la URL seleccionada
  await page.goto(BASE_URL)
  //Clicamos en el input #searchinput
  await page.click("#searchinput")
  //Escribimos nuestra keyword
  await page.type("#searchinput", keyword)
  //Pulsamos Enter para buscar la palabra
  await page.keyboard.press("Enter")

  await page.waitForTimeout(3000)
  await page.evaluate(async () => {
    const element = document.getElementById("l-footer")
    //Calculamos lo que sobra por encima del footer y lo que nos falta por ver de la pagina hacia arriba, sacamos un numero de pixeles y hacemos scroll esa cantidad
    const y = element.getBoundingClientRect().top + window.pageYOffset
    window.scrollTo({top: y})
  })

  //Se va a quedar 10 segundos haciendo scroll hasta el elemento
  await page.waitForTimeout(15000)

  //Recorremos cada una de las "cartas" de los productos
  const items = await page.$$eval("div.search-item", (nodes) => {
    return nodes.map((n) => ({
      title: n.querySelector("a.cm-txt").innerText,
      price: n.querySelector("div.buy--price")?.innerText,
      image: n.querySelector("img.img-responsive").src,
      type: n.querySelector("span.cm-txt").innerText,
    }))
  })

  //El último item siempre viene vacío
  items.pop()

  //Convertir a json nuestros items y los guardamos en un fichero json
  const jsonItems = JSON.stringify(items)
  fs.writeFile(
    `${keyword.replaceAll(" ", "").toLowerCase()}.json`,
    jsonItems,
    () => {
      console.log("Items created!")
    }
  )

  await browser.close()
}

inquirer
  .prompt([
    {
      name: "search",
      message: "¿Qué quieres buscar en GAME?",
    },
  ])
  .then((answers) => {
    scrapping(answers.search)
  })
