const indexRouter = require("express").Router();

//? esto es una petición de las más básicas
/* indexRouter.use("/api/v1", (req, res, next) => {
  return res.json("Esto funciona gucci");
}); */

//? esto es una petición que recibe un parámetro (indicaciones adicionales a la ruta)
/* indexRouter.use("/peliculas/:titulo", (req, res, next) => {
  const peliculas = [
    {
      titulo: "Avatar",
      duracion: 3000,
    },
    {
      titulo: "Interestellar",
      duracion: 2000,
    },
    {
      titulo: "Saw",
      duracion: 2500,
    },
  ];

  const peliculaEncontrada = peliculas.find(
    (pelicula) => pelicula.titulo === req.params.titulo
  );

  if (!peliculaEncontrada) {
    return res.json("Esa película no la tenemos");
  }

  return res.json(peliculaEncontrada);
}); */

/* indexRouter.use("/query", (req, res, next) => {
  const peliculas = [
    {
      titulo: "Avatar",
      duracion: 3000,
    },
    {
      titulo: "Interestellar",
      duracion: 1900,
    },
    {
      titulo: "El bonito mar",
      duracion: 1800,
    },
    {
      titulo: "Saw",
      duracion: 2500,
    },
  ];

  const peliculasEncontradas = peliculas.filter((pelicula) => {
    /* req.query.terminacion.length //! 3
    "Avatar".slice(-3)

    if (
      pelicula.titulo.slice(-req.query.terminacion.length) ===
        req.query.terminacion &&
      pelicula.duracion < parseInt(req.query.duracion)
    ) {
        return pelicula
    }

  });

  if (peliculasEncontradas.length === 0) {
    res.json("No existen esas películas")
  }

  return res.json(peliculasEncontradas);
}); */

indexRouter.use("/categorias", (req, res, next) => {

  const categorias = ["animacion", "comedia", "miedo", "acción", "ciencia_ficción", "romántica"];

  return res.status(200).json(categorias);

});

indexRouter.all("/peliculas", (req, res, next) => {
  const peliculas = [
    {
      titulo: "Avatar",
      duracion: 2000,
      puntuacion: 9,
      imagen: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ae4816cade1a5b7f29787d0b89610132c72c7747041481c6619b9cc3302c0101._RI_TTW_.jpg",
      categoria: "ciencia_ficción"
    },
    {
      titulo: "Interestellar",
      duracion: 1800,
      puntuacion: 10,
      imagen: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/79194981293eabf6620ece96eb5a9c1fffa04d3374ae12986e0748800b37b9cf._RI_TTW_.jpg",
      categoria: "ciencia_ficción"
    },
    {
      titulo: "Saw",
      duracion: 1700,
      puntuacion: 2,
      imagen: "https://m.media-amazon.com/images/I/91PKG11r2sL._AC_UF1000,1000_QL80_.jpg",
      categoria: "miedo"
    }
  ];

  console.log(req.body);

  if (req.body?.categoria) {

    console.log(req.body.categoria);

    const peliculasFiltradas = peliculas.filter((pelicula) => pelicula.categoria === req.body.categoria);

    return res.status(200).json(peliculasFiltradas);

  } else {
    return res.status(200).json(peliculas);
  }

})

module.exports = indexRouter;