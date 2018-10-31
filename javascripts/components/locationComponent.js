import { loadLocations } from "../data/locationData.js";
import { loadMovies } from "../data/movieData.js";

const writeLocations = (locationsArray) => {
    let domString = '';
    locationsArray.forEach((locations) => {
        domString += `<div id="${locations.id}" class="card locations flex-row-wrap text-center m-3" style="max-width: 23rem;">`
        domString += `<div class="card-header card-search">`
        domString += `<h4 class="location-name">${locations.name}</h>`
        domString += `</div>`
        domString += `<div class="card-body">`
        domString += `<img class="location-img" style="width:80%; height:10.75rem;" src="${locations.imageUrl}" alt="${locations.name}">`
        domString += `<h6 class="card-text card-search py-2">${locations.address}</h6>`
        domString += `<p class="card-text py-2 m-0">Appears in ${locations.movies.length} movies</p>`
        domString += `</div>`
        domString += `<div class="card-footer">`
        domString += `<h6 class="shoot-time">${locations.shootTime}</h6>`
        domString += `</div>`
        domString += `</div>`
    })
    $("#locations").append(domString)
}

const writeLocationsSingleMovie = (locationsArray) => {
    let domString = '';
    locationsArray.forEach((locations) => {
        domString += `<div id="${locations.id}" class="card locations flex-row-wrap text-center m-3" style="max-width: 23rem;">`
        domString += `<div class="card-header card-search">`
        domString += `<h4 class="location-name">${locations.name}</h>`
        domString += `</div>`
        domString += `<div class="card-body">`
        domString += `<img class="location-img" style="width:80%; height:10.75rem;" src="${locations.imageUrl}" alt="${locations.name}">`
        domString += `<h6 class="card-text card-search py-2">${locations.address}</h6>`
        domString += `</div>`
        domString += `<div class="card-footer">`
        domString += `<h6 class="shoot-time">${locations.shootTime}</h6>`
        domString += `</div>`
        domString += `</div>`
    })
    $("#movie-view-location").append(domString)
}

const initialLocationView = () => {
    loadLocations().then((locations) => {
        loadMovies().then((movies) => {
            const locationsWithMovies = locations.map((location) => {
                const newLocation = location;
                newLocation.movies = movies.filter(movie => movie.locations.includes(location.id));
                return newLocation;
            })
            writeLocations(locationsWithMovies)
        })
    }).catch((error) => {
        console.log('error on initialLocationsView', error)
    })
}

export { initialLocationView, writeLocations, writeLocationsSingleMovie }