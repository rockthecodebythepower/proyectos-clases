//Importamos puppeteer para automatizar nuestro script
import puppeteer from "puppeteer"
//Importamos FS para escribir ficheros
import fs from "fs"
//Importamos request para descargar la imagen a través de una URL
import request from "request"
//Importamos inquirer para realizar preguntas
import inquirer from "inquirer"

//Almacenamos la URL principal
const BASE_URL = "https://www.movieposterdb.com/"

const scrapePosters = async (searchTerm, type) => {
  //Creamos el navegador
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
    args: ["--start-maximized"],
  })

  //Crear una página abriendo el navegador
  const page = await browser.newPage()
  //Vamos a la URL almacenada
  await page.goto(BASE_URL)
  //Entramos en el input y escribimos nuestro searchTerm
  await page.type("input", searchTerm)
  //Hacemos click en la lupa para realizar la búsqueda
  await page.click("button.btn")
  //Vamos a indicarle que sean solo peliculas
  const searchURL = await page.url()
  const moviesURL =
    type === "pelicula" ? `${searchURL}&type=1` : `${searchURL}&type=2`
  await page.goto(moviesURL)
  //Hacemos click en el primer resultado. Al hacer un querySelector nos quedamos con el primero y hacemos click en el
  await page.click("div.gallery-item")

  //Vamos a añadirle la query para mostrar toda la colección de posters a la url actual

  //Obtenemos la URL actual
  const currentURL = await page.url()
  const postersURL = `${currentURL}?v=posters`
  await page.goto(postersURL)

  //Vamos a calcular los pixeles que hay de diferencia entre donde estamos, y donde esta el footer y hacer tantos pixeles de scroll verticalmente hacia abajo
  await page.evaluate(() => {
    const footer = document.querySelector("footer")
    const y = footer.getBoundingClientRect().top + window.pageYOffset
    window.scrollTo({top: y})
  })

  //Vamos a recorrer todos los figure y recuperar todos los src de las imagenes que tienen dentro
  const posters = await page.$$eval("figure", async (nodes) => {
    //Reemplazamos el s_ por l_ para tener las imagenes en una mejor resolución
    return nodes.map((n) => n.querySelector("img").src.replace("s_", "l_"))
  })

  await page.waitForTimeout(3000)

  await page.screenshot({
    path: "./screenshot.png",
    fullPage: true,
  })

  //Creamos el nombre de la carpeta-ficheros
  const name = searchTerm.toLowerCase().replaceAll(" ", "")

  //Vamos a crear con fs un carpeta que se llame igual que el comienzo de los ficheros
  fs.mkdir(name, (err) => {
    if (err) throw err
  })

  //Recorremos los posters con forEach, al obtener el index de cada una de las "vueltas", podemos nombrar los ficheros con el nombre de la busqueda más el index
  posters.forEach((url, index) => {
    //Con el método request vamos a descargar la información de la imagen
    request(url).pipe(fs.createWriteStream(`${name}/${name}${index}.jpg`))
  })

  await browser.close()
  console.log(`Colección de posters de ${searchTerm} creada 🎉`)
}

inquirer
  .prompt([
    {
      name: "title",
      message: "¿Qué posters quieres buscar?",
    },
    {
      type: "list",
      name: "type",
      message: "¿Es una serie o una película?",
      choices: ["Serie", "Pelicula"],
    },
  ])
  .then((answers) => {
    //Almacenamos las respuestas en las variables
    const searchTerm = answers.title
    const type = answers.type.toLowerCase()
    //Lanzar la función de scrapping
    scrapePosters(searchTerm, type)
  })
