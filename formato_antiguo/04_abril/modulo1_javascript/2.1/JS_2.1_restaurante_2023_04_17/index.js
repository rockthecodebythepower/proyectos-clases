const menu = [
  {
    imagen:
      "https://fostershollywood.es/sites/default/files/images/product/fosters_caesar_salad.png",
    titulo: "Ensalada César",
    descripcion:
      "Lechuga romana, pollo a la parrilla, croutones y aderezo César.",
    precio: 8.5,
    categoria: "entrante",
  },
  {
    imagen:
      "https://www.mujerhoy.com/contentfactory/post/wp-content/uploads/sites/4/2020/05/ternera-web-reducido-1024x711.png",
    titulo: "Filete de ternera",
    descripcion:
      "Filete de ternera a la parrilla con salsa de vino tinto, patatas y verduras salteadas.",
    precio: 22.5,
    categoria: "principal",
  },
  {
    imagen: "https://www.sushifresh.es/img/uploads/det2x_arroz_blanco.png",
    titulo: "Arroz blanco",
    descripcion: "Arroz blanco cocido en agua y sal.",
    precio: 3.5,
    categoria: "secundario",
  },
  {
    imagen:
      "https://lafenomenal.com/wp-content/uploads/2022/12/pngwing.com_.png",
    titulo: "Tarta de queso",
    descripcion:
      "Tarta de queso con base de galleta y mermelada de frutos rojos.",
    precio: 6.5,
    categoria: "postre",
  },
  {
    imagen:
      "https://www.lacuevade1900.es/html5/promociones/menu-dia/platos/primeros/carpaccio-de-calabacin.png",
    titulo: "Carpaccio de calabacín",
    descripcion:
      "Calabacín crudo cortado en finas láminas, aliñado con aceite de oliva y vinagre balsámico.",
    precio: 7.5,
    categoria: "entrante",
  },
  {
    imagen:
      "https://troncosycarbon.unicentropereira.com/wp-content/uploads/sites/11/2020/05/3.Salmon-a-la-parrilla.png",
    titulo: "Salmón a la parrilla",
    descripcion:
      "Salmón fresco a la parrilla con salsa de eneldo, arroz salvaje y brócoli al vapor.",
    precio: 18.5,
    categoria: "principal",
  },
  {
    imagen:
      "https://cdn.discordapp.com/attachments/1090225245136367629/1097463497333416047/Patatas_Fritas-2221.png",
    titulo: "Patatas fritas",
    descripcion: "Patatas cortadas en tiras y fritas en aceite caliente.",
    precio: 4.0,
    categoria: "secundario",
  },
  {
    imagen:
      "https://panamarbakery.com/public/Image/2022/3/4016_tartamanzana_red585_int2.png",
    titulo: "Tarta de manzana",
    descripcion: "Tarta de manzana con canela y azúcar glas.",
    precio: 6.5,
    categoria: "postre",
  },
  {
    imagen:
      "https://valledearas.com/2688-thickbox_default/tabla-de-quesos-nacionales.jpg",
    titulo: "Tabla de quesos",
    descripcion: "Selección de quesos artesanos con frutos secos y mermelada.",
    precio: 12.5,
    categoria: "entrante",
  },
  {
    imagen:
      "https://i.pinimg.com/originals/28/b3/7b/28b37b5795c5ac02e562a62ab23153fd.png",
    titulo: "Lasaña vegetariana",
    descripcion: "Lasaña de verduras asadas, queso de cabra y tomate.",
    precio: 16.5,
    categoria: "principal",
  },
  {
    imagen:
      "https://lapulperiadepaco.es/wp-content/uploads/2021/04/gambasajillo.png",
    titulo: "Gambas al ajillo",
    descripcion: "Gambas peladas salteadas con ajo y guindilla.",
    precio: 10.5,
    categoria: "entrante",
  },
  /* {
    imagen: "https://restaurante.com/principal4.jpg",
    titulo: "Pollo al curry",
    descripcion:
      "Pollo troceado cocinado en una salsa de curry con arroz basmati.",
    precio: 14.5,
    categoria: "principal",
  },
  {
    imagen: "https://restaurante.com/secundario3.jpg",
    titulo: "Ensalada verde",
    descripcion: "Lechuga, tomate, pepino, cebolla y vinagreta.",
    precio: 4.5,
    categoria: "secundario",
  },
  {
    imagen: "https://restaurante.com/postre3.jpg",
    titulo: "Tiramisú",
    descripcion:
      "Postre italiano de bizcocho de café, queso mascarpone y cacao en polvo.",
    precio: 7.5,
    categoria: "postre",
  },
  {
    imagen: "https://restaurante.com/entrante5.jpg",
    titulo: "Tostadas de aguacate",
    descripcion: "Rebanadas de pan tostado con aguacate, tomate y huevo poché.",
    precio: 9.5,
    categoria: "entrante",
  },
  {
    imagen: "https://restaurante.com/principal5.jpg",
    titulo: "Parrillada de mariscos",
    descripcion: "Selección de mariscos a la parrilla con patatas y verduras.",
    precio: 26.5,
    categoria: "principal",
  },
  {
    imagen: "https://restaurante.com/secundario4.jpg",
    titulo: "Arroz integral",
    descripcion: "Arroz integral cocido en agua y sal.",
    precio: 4.5,
    categoria: "secundario",
  },
  {
    imagen: "https://restaurante.com/postre4.jpg",
    titulo: "Coulant de chocolate",
    descripcion:
      "Bizcocho de chocolate con interior fundido de chocolate y helado de vainilla.",
    precio: 8.5,
    categoria: "postre",
  },
  {
    imagen: "https://restaurante.com/entrante6.jpg",
    titulo: "Hummus",
    descripcion: "Puré de garbanzos con tahini, aceite de oliva y especias.",
    precio: 6.5,
    categoria: "entrante",
  },
  {
    imagen: "https://restaurante.com/principal6.jpg",
    titulo: "Ternera estofada",
    descripcion: "Ternera cocinada a fuego lento con verduras y patatas.",
    precio: 18.5,
    categoria: "principal",
  }, */
];

const SELECCIONADOS = [];

const btnLista$$ = document.querySelector(".btn-lista");
const cerrarLista$$ = document.querySelector(".cerrar");

const initApp = () => {
  pintarPlatos(menu);
};

const pintarPlatos = (platos) => {
  const entrantes$$ = document.querySelector(".entrantes-platos");
  const primeros$$ = document.querySelector(".primeros-platos");
  const segundos$$ = document.querySelector(".segundos-platos");
  const postres$$ = document.querySelector(".postres-platos");

  for (const plato of platos) {
    const plato$$ = document.createElement("div");
    const titulo$$ = document.createElement("h3");
    const img_wrp$$ = document.createElement("div");
    const imagen$$ = document.createElement("img");
    const like$$ = document.createElement("img");
    const precio$$ = document.createElement("p");

    plato$$.className = "plato";
    img_wrp$$.className = "img_wrp";
    like$$.className = "like";
    precio$$.classList.add("precio");

    titulo$$.textContent = plato.titulo;
    imagen$$.src = plato.imagen;
    like$$.src = "./assets/me-gusta-vacio.png";
    precio$$.textContent = `${plato.precio}€`;
    plato$$.title = plato.descripcion;

    like$$.addEventListener("click", (e) => meGusta(e.target, plato));

    img_wrp$$.appendChild(imagen$$);
    plato$$.appendChild(img_wrp$$);
    plato$$.appendChild(titulo$$);
    plato$$.appendChild(precio$$);
    plato$$.appendChild(like$$);

    if (plato.categoria === "entrante") {
      entrantes$$.appendChild(plato$$);
    } else if (plato.categoria === "principal") {
      primeros$$.appendChild(plato$$);
    } else if (plato.categoria === "secundario") {
      segundos$$.appendChild(plato$$);
    } else {
      postres$$.appendChild(plato$$);
    }
  }
};

const toggle = (parametro) => {
  const miLista$$ = document.querySelector(".mi-lista");

  if (parametro === "cerrar") {
    miLista$$.classList.remove("abierto");
  } else {
    miLista$$.classList.add("abierto");
  }
};

const pintarLista = () => {
  const platosLista$$ = document.querySelector(".platos-lista");
  platosLista$$.innerHTML = "";

  for (const seleccionado of SELECCIONADOS) {
    const titulo$$ = document.createElement("h3");
    titulo$$.textContent = seleccionado.titulo;
    platosLista$$.appendChild(titulo$$);
  }
};

const meGusta = (elemento, plato) => {
    SELECCIONADOS.push(plato);
    pintarLista();
    elemento.src = "./assets/me-gusta.png"
}

btnLista$$.addEventListener("click", () => toggle("abrir"));
cerrarLista$$.addEventListener("click", () => toggle("cerrar"));

initApp();
pintarLista();