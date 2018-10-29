import { loadLocations } from "../data/locationData.js";

const writeLocations = (locationsArray, divId) => {
    let domString = '';
    locationsArray.forEach((locations) => {
        domString += `<div id="${locations.id}" class="card locations flex-row-wrap text-center m-3" style="width: 23rem;">`
        domString += `<div class="card-header card-search">`
        domString += `<h4 class="location-name">${locations.name}</h>`
        domString += `</div>`
        domString += `<div class="card-body card-search">`
        domString += `<img class="location-img" style="width:80%; height:10.75rem;" src="${locations.imageUrl}" alt="${locations.name}">`
        domString += `<h6 class="card-text address py-2">${locations.address}</h6>`
        domString += `</div>`
        domString += `<div class="card-footer">`
        domString += `<h6 class="shoot-time">${locations.shootTime}</h6>`
        domString += `</div>`
        domString += `</div>`
    })
    $(divId).append(domString)
}

const initialLocationView = () => {
    loadLocations().then((locations) => {
        writeLocations(locations, "#locations")
    }).catch((error) => {
        console.log('error on initialLocationsView', error)
    })
}

export {initialLocationView, writeLocations}