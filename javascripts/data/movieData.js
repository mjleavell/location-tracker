import { printMovie } from "../components/movieComponent.js";

// Load Movie Data
$.get("../../db/movie.json")
  .done(data => {
    console.log(data.movie);
    printMovie(data.movie);
  })
  .fail(error => {
    console.log(error);
  });