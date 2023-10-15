/* un modelo me va a indicar donde se encuentran mis datos en la bbdd y cómo son esos datos, es decir, si tiene la propiedad nombre que es de tipo string, etc. */

const mongoose = require("mongoose");

const entertainmentSchema = new mongoose.Schema(
  {
    title: { type: "String", required: true },
    genre: [{
      type: "String",
      enum: [
        "Drama",
        "Science Fiction",
        "Comedy",
        "Fantasy",
        "Adventure",
        "Horror",
        "Crime",
        "Mystery",
      ],
      required: true,
    }],
    release_year: { type: "Number", required: true  },
    platform: { type: "String", required: true },
    status: { type: "String", enum: ["Ongoing", "Finished"], required: true },
    portrait: { type: "String", required: true },
    cover: { type: "String", required: true },
    type: { type: "String", required: true, emun: ["show", "movie"]}
  },
  {
    collection: "entertainment",
    timestamps: true,
  }
);


const Entertainment = mongoose.model("entertainment", entertainmentSchema,"entertainment")
module.exports = Entertainment;