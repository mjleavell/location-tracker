import { loadMovies } from "../data/movieData.js";
import { bindEvents } from "../events.js";
import { loadLocations } from "../data/locationData.js";

const writeMovie = (movieArray) => {
    let domString = '';
    movieArray.forEach((movie) => {
        domString += `<div id="${movie.id}" class="card movie d-flex m-2 bg-light" style="width: 25rem;">`
        domString += `<div class="card-body">`
        domString += `<h5 class="card-title text-center">${movie.name}</h5>`
        domString += `<hr>`
        domString += `<p class="card-subtitle mb-2 text-dark text-center">Genre: ${movie.genre}</p>`
        domString += `<p class="card-subtitle mb-2 text-dark text-center">Release Date: ${movie.releaseDate}</p>`
    // PRINTS LOCATIONS TWICE. DIVIDING BY 11 GIVES ME THE RIGHT NUMBER OF LOCATIONS
    // DEFINITELY A BETTER WAY TO DO THIS
        domString += `<p class="card-subtitle text-dark text-center">Number of Locations: ${(movie.locations.length)/11}</p>`
        domString += `<hr>`
        domString += `<p class="card-text text-justify">${movie.description}</p>`
        domString += `</div>`
        domString += `</div>`
    })
    $("#movie").append(domString);
}

const initialPageView = () => {
    loadMovies().then((movies) => {
        // console.log(movies)
        // console.log(loadLocations(movies))
        // return loadLocations(movies);
        // console.log(movies)
        writeMovie(movies)
        bindEvents()
    // }).then((moviesWithLocations) => {
        // writeMovie(moviesWithLocations);
        // bindEvents();
    }).catch((error) => {
        console.log('error on initialPageView', error)
    })
}

export { initialPageView }