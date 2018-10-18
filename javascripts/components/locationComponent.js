const printLocations = (locationsArray) => {
    let domString = '';
    locationsArray.forEach((locations) => {
        domString += `<div class="card locations flex-row-wrap text-center m-3" style="width: 23rem;">`
        domString += `<div class="card-header">`
        domString += `<h4>${locations.name}</h>`
        domString += `</div>`
        domString += `<div class="card-body">`
        domString += `<img class="location-img" width="80%" src="${locations.imageUrl}" alt="${locations.name}">`
        domString += `<h6 class="card-text">Address: ${locations.address}</h6>`
        domString += `</div>`
        domString += `<div class="card-footer">`
        domString += `<h6>${locations.shootTime}</h6>`
        domString += `</div>`
        domString += `</div>`
    })
    $("#locations").append(domString)
}

export {printLocations}