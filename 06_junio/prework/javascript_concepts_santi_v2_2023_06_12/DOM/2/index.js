const alojamientos = [
  {
    categoria: 4,
    distancia: 2,
    ocio: ["Piscina", "Gimnasio"],
    playa: "Primera línea de playa",
    tipo: "Hotel",
    lugares_de_interes: ["Museo", "Parque"],
    puntuacion: 9,
    servicios: ["Parking", "Restaurante"],
    servicios_de_habitacion: "Baño privado",
    marca: "Hilton",
    imagen:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/271502309.jpg?k=9613a58db12918174ae2df3481bdeee273c2a660f1aa65e8da5351ef9cca654b&o=&hp=1",
  },
  {
    categoria: 3,
    distancia: 5,
    ocio: ["Spa"],
    playa: "Otros",
    tipo: "Apartamento",
    lugares_de_interes: ["Catedral", "Mercado"],
    puntuacion: 7,
    servicios: ["WiFi", "Recepción 24h"],
    servicios_de_habitacion: "Cocina equipada",
    marca: "Airbnb",
    imagen:
      "https://images.adsttc.com/media/images/6374/e5f6/bd52/ae40/da37/3477/newsletter/apartamento-pepyra-estudio-bra_1.jpg?1668605462",
  },
  {
    categoria: "otros",
    distancia: 10,
    ocio: ["Excursiones", "Actividades acuáticas"],
    playa: "Otros",
    tipo: "Apartamento",
    lugares_de_interes: ["Teatro", "Centro comercial"],
    puntuacion: 6,
    servicios: ["Piscina comunitaria"],
    servicios_de_habitacion: ["Terraza privada"],
    marca: "Booking.com",
    imagen: "https://img00.rhimg.com/h.20757332.795.500.0.ffffff.acc4a5fd.jpg",
  },
  {
    categoria: 4,
    distancia: 2,
    ocio: ["Piscina", "Gimnasio"],
    playa: "Primera línea de playa",
    tipo: "Hotel",
    lugares_de_interes: ["Museo", "Parque"],
    puntuacion: 9,
    servicios: ["Parking", "Restaurante"],
    servicios_de_habitacion: ["Baño privado"],
    marca: "Hilton",
    imagen:
      "https://www.costabravaverdhotels.com//media/hoteles/alga/1.hotel-alga-piscina_021.jpg",
  },
  {
    categoria: 3,
    distancia: 5,
    ocio: ["Spa"],
    playa: "Otros",
    tipo: "Apartamento",
    lugares_de_interes: ["Catedral", "Mercado"],
    puntuacion: 7,
    servicios: ["WiFi", "Recepción 24h"],
    servicios_de_habitacion: ["Cocina equipada"],
    marca: "Airbnb",
    imagen:
      "https://www.sensacionrural.es/blog/wp-content/uploads/2020/01/casas-rurales-spa.jpg",
  },
  {
    categoria: "otros",
    distancia: 10,
    ocio: ["Excursiones", "Actividades acuáticas"],
    playa: "Otros",
    tipo: "Apartamento",
    lugares_de_interes: ["Teatro", "Centro comercial"],
    puntuacion: 6,
    servicios: ["Piscina comunitaria"],
    servicios_de_habitacion: ["Terraza privada"],
    marca: "Booking.com",
    imagen: "https://img00.rhimg.com/h.13658974.795.500.0.ffffff.b21b3a6f.jpg",
  },
  {
    categoria: 5,
    distancia: 1,
    ocio: ["Playa privada", "Spa, Golf"],
    playa: "Primera línea de playa",
    tipo: "Resort",
    lugares_de_interes: ["Acuario", "Parque nacional"],
    puntuacion: 10,
    servicios: ["Parking", "Restaurante", "Gimnasio"],
    servicios_de_habitacion: ["Jacuzzi privado", "Vistas al mar"],
    marca: "Marriott",
    imagen:
      "https://www.guiadehoteles.es/img/jacuzzi-vistas-al-mar-portada.jpg",
  },
  {
    categoria: 2,
    distancia: 8,
    ocio: ["Senderismo", "Bicicleta"],
    playa: "Otros",
    tipo: "Cabaña",
    lugares_de_interes: ["Montaña", "Lago"],
    puntuacion: 5,
    servicios: ["Chimenea", "Barbacoa"],
    servicios_de_habitacion: ["Cocina básica"],
    marca: "Rustic Retreats",
    imagen:
      "https://i.blogs.es/19c82e/la-cabana-del-lago-o-hara-chalet-dent-blanche-4-mejores-cabananas-de-montana-del-mundo/450_1000.jpg",
  },
  {
    categoria: 4,
    distancia: 2,
    ocio: ["Piscina", "Gimnasio"],
    playa: "Primera línea de playa",
    tipo: "Hotel",
    lugares_de_interes: ["Museo", "Parque"],
    puntuacion: 9,
    servicios: ["Parking", "Restaurante"],
    servicios_de_habitacion: ["Baño privado"],
    marca: "Hilton",
    imagen:
      "https://majestichotelgroup.com/web/majestic/homepage/mobile/slider/00majestic-hotel-and--spa-fachada.jpg",
  },
  {
    categoria: 3,
    distancia: 5,
    ocio: ["Spa"],
    playa: "Otros",
    tipo: "Apartamento",
    lugares_de_interes: ["Catedral", "Mercado"],
    puntuacion: 7,
    servicios: ["WiFi", "Recepción 24h"],
    servicios_de_habitacion: ["Cocina equipada"],
    marca: "Airbnb",
    imagen:
      "https://espaciobono.com/wp-content/uploads/2020/02/espacioBONO_KUOBIcocinas_sevilla_Apartamentos_5.jpg",
  },
  {
    categoria: "otros",
    distancia: 10,
    ocio: ["Excursiones", "Actividades acuáticas"],
    playa: "Otros",
    tipo: "Apartamento",
    lugares_de_interes: ["Teatro", "Centro comercial"],
    puntuacion: 6,
    servicios: ["Piscina comunitaria"],
    servicios_de_habitacion: ["Terraza privada"],
    marca: "Booking.com",
    imagen:
      "https://media-cdn.tripadvisor.com/media/vr-splice-j/04/e9/ec/8e.jpg",
  },
  {
    categoria: 5,
    distancia: 1,
    ocio: ["Playa privada", "Spa", "Golf"],
    playa: "Primera línea de playa",
    tipo: "Resort",
    lugares_de_interes: ["Acuario", "Parque nacional"],
    puntuacion: 10,
    servicios: ["Parking", "Restaurante, Gimnasio"],
    servicios_de_habitacion: ["Jacuzzi privado", "Vistas al mar"],
    marca: "Marriott",
    imagen:
      "https://dondealojarseen.com/wp-content/uploads/2020/02/Qu%C3%A9-es-un-resort.jpg",
  },
  {
    categoria: 2,
    distancia: 8,
    ocio: ["Senderismo", "Bicicleta"],
    playa: "Otros",
    tipo: "Cabaña",
    lugares_de_interes: ["Montaña", "Lago"],
    puntuacion: 5,
    servicios: ["Chimenea", "Barbacoa"],
    servicios_de_habitacion: ["Cocina básica"],
    marca: "Rustic Retreats",
    imagen:
      "https://media-cdn.tripadvisor.com/media/photo-s/18/43/ad/61/nieve-en-cabanas-huitan.jpg",
  },
  {
    categoria: 4,
    distancia: 3,
    ocio: ["Piscina", "Tenis"],
    playa: "Otros",
    tipo: "Hotel",
    lugares_de_interes: ["Zoológico", "Centro histórico"],
    puntuacion: 8,
    servicios: ["Spa", "Bar"],
    servicios_de_habitacion: ["Balcón", "Minibar"],
    marca: "Radisson",
    imagen:
      "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
  },
  {
    categoria: 3,
    distancia: 4,
    ocio: ["Surf", "Yoga"],
    playa: "Primera línea de playa",
    tipo: "Bungalow",
    lugares_de_interes: ["Cafetería", "Tiendas"],
    puntuacion: 7,
    servicios: ["Piscina exterior", "Jardín"],
    servicios_de_habitacion: ["Aire acondicionado"],
    marca: "Beachcomber",
    imagen:
      "https://www.campingelastral.es/images/paginas_p/grandes/3723272b62cc6b3e503e6d13664366c9.jpg",
  },
];

const alojamientos$$ = document.querySelector(".alojamientos");

const pintarAlojamiento = (alojamiento) => {
  const div$$ = document.createElement("div");
  const img$$ = document.createElement("img");
  const eliminar$$ = document.createElement("img");

  div$$.className = "alojamiento"; // sobreescribir todas las posibles clases que haya y ponemos la que le indicamos
  //div$$.classList.add("alojamiento"); // añadir una clase
  eliminar$$.className = "eliminar";

  eliminar$$.src = "./x.png";
  img$$.src = alojamiento.imagen;
  /* div$$.innerHTML = `
        <img src="${alojamiento.imagen}"/>
    ` */
  /* img$$.setAttribute("src", alojamiento.imagen); */

  //! eventos -> aunque todo el rato estén ocurriendo eventos en la página hasta que no los ESCUCHE no puedo controlarlos
  eliminar$$.addEventListener("click", eliminarAlojamiento);

  div$$.appendChild(img$$);
  div$$.appendChild(eliminar$$);
  alojamientos$$.appendChild(div$$);
};

const eliminarAlojamiento = (evento) => {
  //* evento realizado
  console.log(evento);

  //* elemento que ha escuchado el evento realizado
  console.log(evento.target.parentElement);

  //! EVENTO O EVENT O E -> simplemente es la información del evento que se ha realizado.
  //! esta información trae consigo el ELEMENTO o TARGET que ha escuchado este evento realizado.

  //? seleccionar el último div que tenga la clase alojamiento de todos

  /* const allAlojamientos$$ = document.querySelectorAll(".alojamiento"); */

  /* console.log(allAlojamientos$$); */

  evento.target.parentElement.remove();
  /* allAlojamientos$$[allAlojamientos$$.length - 1].remove(); */
};

alojamientos.forEach(pintarAlojamiento);

const buscador$$ = document.querySelector("#buscador");

const buscar = (e) => {
  const alojamientosFiltrados = alojamientos.filter((alojamiento) =>
    alojamiento.marca.toLowerCase().includes(e.target.value.toLowerCase())
  );

  alojamientos$$.innerHTML = "";

  alojamientosFiltrados.forEach(pintarAlojamiento);
};

buscador$$.addEventListener("keyup", buscar);

const stars$$ = document.querySelector("#stars");

const filtroEstrellas = (e) => {

    /* console.log(typeof e.target.value); */

  const alojamientosFiltrados = alojamientos.filter((alojamiento) =>
    alojamiento.categoria >= parseInt(e.target.value)
  );

  alojamientos$$.innerHTML = "";

  alojamientosFiltrados.forEach(pintarAlojamiento);

};

stars$$.addEventListener("change", filtroEstrellas);