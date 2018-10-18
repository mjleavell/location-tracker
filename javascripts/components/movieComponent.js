const printMovie = (movieArray) => {
    let domString = '';
    movieArray.forEach((movie) => {
        domString += `<div class="card movie" style="width: 23rem;">`
        domString += `<div class="card-body">`
        domString += `<h5 class="card-title">${movie.name}</h5>`
        domString += `<h6 class="card-subtitle mb-2">Genre: ${movie.genre}</h6>`
        domString += `<h6 class="card-subtitle mb-2">Release Date: ${movie.releaseDate}</h6>`
        domString += `<p class="card-text">${movie.description}</p>`
        domString += `</div>`
        domString += `</div>`
    })
    $("#movie").append(domString);
}

export { printMovie }