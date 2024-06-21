const products = [
  {
    img: "https://www.elllagardetiti.com/wp-content/uploads/2020/04/chulet%C3%B3n-perfecto.jpg",
    name: "Chuletón",
    price: 23,
  },
  {
    img: "https://pedalmoto.com/blog/wp-content/uploads/2019/10/bicycle-daylight-forest-100582-min.jpg",
    name: "Bicicleta",
    price: 232,
  },
  {
    img: "https://fotografias.lasexta.com/clipping/cmsimages02/2022/05/12/AA51421D-2EA6-4935-9381-A1A163645556/convierte-viejo-televisor-inteligente_98.jpg?crop=1300,731,x0,y10&width=1900&height=1069&optimize=high&format=webply",
    name: "Televisor",
    price: 2433,
  },
  {
    img: "https://www.pinkpomelo.es/wp-content/uploads/sudadera-oversize-5.jpg",
    name: "Sudadera",
    price: 54,
  },
  {
    img: "https://tiendaonline.larazon.es/1826-medium_default/robot-de-cocina-silver-negro.jpg",
    name: "Robot de cocina",
    price: 345,
  },
  {
    img: "https://img.pccomponentes.com/pcblog/4002/como-elegir-raton-1.jpg",
    name: "Ratón",
    price: 34,
  },
  {
    img: "https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2022/08/12/fotografia-de-una-bota-de-vino.jpeg",
    name: "Bota de vino",
    price: 45,
  },
];

const form = document.createElement("form");
form.classList.add("filters");
document.body.append(form);

const filtrar = (e) => {
  e.preventDefault();
  const [inputName, inputPrice] = e.target;

  // filter
  const arrResultante = products.filter(
    (product) =>
      product.name.toLowerCase().includes(inputName.value.toLowerCase()) &&
      product.price <= (parseInt(inputPrice.value) || Infinity)
  );

  printProducts(undefined, arrResultante);

  // array bucles y condicionales
  /* const arrResultante = [];

  for (const product of products) {
    if (
      product.name.toLowerCase().includes(inputName.value.toLowerCase()) &&
      product.price <= (parseInt(inputPrice.value) || Infinity)
    ) {
        arrResultante.push(product);
    }
  }

  console.log(arrResultante);

  printProducts(undefined, arrResultante); */
};

form.addEventListener("submit", filtrar);

const printForm = (parentElement) => {
  parentElement.innerHTML = `
            <div>
                <label>Nombre</label>
                <input/>
            </div>
            <div>
                <label>Precio</label>
                <input/>
            </div>
            <button type="submit">Filtrar</button>
    `;
};

printForm(form);

const divProducts = document.createElement("div");
divProducts.classList.add("products");
document.body.append(divProducts);

const printProducts = (parentElement = divProducts, arrProducts = products) => {
  parentElement.innerHTML = "";

  for (const product of arrProducts) {
    parentElement.innerHTML += `
            <div>
                <div>
                    <img src="${product.img}" alt="${product.name}"/>
                </div>
                <h3>${product.name}</h3>
                <p>${product.price}€</p>
            </div>
        `;
  }
};

printProducts();
