const fs = require("fs/promises");
const path = require("path");
const pdf = require("html-pdf");

const JSON_FILE = "coches.json";
const CSV_FILE = "coches.csv";

const READ_PATHNAME = path.join(__dirname, `./${JSON_FILE}`);
const WRITE_PATHNAME = path.join(__dirname, `./${CSV_FILE}`);

const main = async () => {
  const fileContent = await fs.readFile(READ_PATHNAME);

  const data = JSON.parse(fileContent.toString());

  const headerColumns = Object.keys(data[0]);
  const valuesColumns = data.map((element) => Object.values(element));

  let csvContent = ``;
  csvContent += headerColumns.join(";");

  let sumaTotal = 0;

  for (const values of valuesColumns) {
    let valuesString = `\n`;

    sumaTotal += values[5];

    values.forEach((value) => {
      valuesString += `${value};`;
    });

    csvContent += valuesString;
  }

  csvContent += `\n Precio Total: ;${sumaTotal}`;

  await fs.writeFile(WRITE_PATHNAME, csvContent);
  console.log("CSV creado correctamente");

  crearPdf(data, sumaTotal);
};

const crearPdf = (coches, sumaTotal) => {
  let crearHtml = ``;

  for (let i = 0; i < coches.length; i++) {
    const coche = coches[i];

    crearHtml += `
            <div style="border: 1px solid black; background-color: orange; margin: 10px">
                <div style="padding: 20px">
                    <h2>Identificador: ${coche.identificador}</h2>
                    <h3>Coche: ${coche.marca} ${coche.modelo.toLowerCase()}</h3>
                </div>
                <img style="width: 100px; float: right" src="${coche.imagen}" alt="${coche.marca}"/>
                <p style="width: 100%; text-align: center">${coche.precio}</p>
            </div>
        `;
  }

  crearHtml += `
    <div style="background-color: black; color: white;  margin: 10px; height: 50px">
        <p>La suma total de los coches es: ${sumaTotal}</p>
    </div>
  `

  pdf.create(crearHtml).toFile("./factura.pdf", function (error, res) {
    if (error) {
      return console.log(error);
    } else {
      console.log("PDF creado correctamente");
    }
  });
};

main();