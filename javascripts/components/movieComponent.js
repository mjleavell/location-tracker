import { loadMovies, loadMovieLocations } from "../data/movieData.js";
import { loadLocationsForMovie } from "../data/locationData.js";
import { bindEvents, movieClickEvent } from "../events.js";
import { writeLocations } from "./locationComponent.js";

const writeMovie = (movieArray) => {
    let domString = '';
    movieArray.forEach((movie) => {
        domString += `<div id="${movie.id}" class="card card-movie d-flex m-2 bg-light" style="width: 25rem;">`
        domString += `<div class="card-body">`
        domString += `<h5 class="card-title text-center">${movie.name}</h5>`
        domString += `<hr>`
        domString += `<p class="card-subtitle mb-2 text-dark text-center">Genre: ${movie.genre}</p>`
        domString += `<p class="card-subtitle mb-2 text-dark text-center">Release Date: ${movie.releaseDate}</p>`
        domString += `<p class="card-subtitle text-dark text-center">Number of Locations: ${movie.locations.length}</p>`
        domString += `<hr>`
        domString += `<p class="card-text text-justify">${movie.description}</p>`
        domString += `</div>`
        domString += `</div>`
    })
    $("#movie").append(domString);
    movieClickEvent()
}

const writeSingleMovie = (moviesArr, clickedMovieId) => {
    let domString = '';
    moviesArr.forEach((movie) => {
        if (movie.id === clickedMovieId){
            domString += `<div id="${movie.id}" class="card card-movie d-flex m-2 bg-light" style="width: 25rem;">`
            domString += `<div class="card-body">`
            domString += `<h5 class="card-title text-center">${movie.name}</h5>`
            domString += `<hr>`
            domString += `<p class="card-subtitle mb-2 text-dark text-center">Genre: ${movie.genre}</p>`
            domString += `<p class="card-subtitle mb-2 text-dark text-center">Release Date: ${movie.releaseDate}</p>`
            domString += `<p class="card-subtitle text-dark text-center">Number of Locations: ${movie.locations.length}</p>`
            domString += `<hr>`
            domString += `<p class="card-text text-justify">${movie.description}</p>`
            domString += `</div>`
            domString += `</div>`
        }
    })
    $("#single-movie").append(domString);
}

const singleMovieView = (movieId) => {
    loadMovieLocations(movieId).then((data) => {
        // data is the movie.locations array for the clicked movie
        return loadLocationsForMovie(data)
    }).then((moviesWithLocations) => {
        writeLocations(moviesWithLocations, "#movie-view-location")
    }).catch((error) => {
        console.log('error on singleMovieView', error)
    })
}

const initialPageView = () => {
    loadMovies().then((movies) => {
        writeMovie(movies)
        bindEvents()
    }).catch((error) => {
        console.log('error on initialPageView', error)
    })
}

export { initialPageView, singleMovieView, writeSingleMovie }