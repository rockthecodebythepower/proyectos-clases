// nosotros queremos una semilla para partir con x valores en nuestra bbdd

const mongoose = require("mongoose");
const Movie = require("../../api/models/movies");

const movies = [
  {
    title: "Interestellar",
    portrait: "Interestellar",
  },
  {
    title: "Megalodón",
    portrait: "Megalodón",
  },
  {
    title: "Jurasic Park",
    portrait: "Jurasic Park",
  },
];

mongoose
  .connect(
    "mongodb+srv://root:root@cluster0.k91nlb7.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(async () => {

    const previousMovies = await Movie.find();

    if (previousMovies.length > 0) {
        await Movie.collection.drop();
    }

    await Movie.insertMany(movies);
    console.log("los datos se han insertado correctamente");
  }).finally(() => {
    mongoose.disconnect();
  });
