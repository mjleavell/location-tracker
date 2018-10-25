const printMovie = (movieArray) => {
    let domString = '';
    movieArray.forEach((movie) => {
        domString += `<div class="card movie d-flex m-2 bg-light" style="width: 25rem;">`
        domString += `<div class="card-body">`
        domString += `<h5 class="card-title text-center">${movie.name}</h5>`
        domString += `<h6 class="card-subtitle mb-2 text-center">Genre: ${movie.genre}</h6>`
        domString += `<h6 class="card-subtitle mb-2 text-center">Release Date: ${movie.releaseDate}</h6>`
        domString += `<p class="card-text text-justify">${movie.description}</p>`
        domString += `</div>`
        domString += `</div>`
    })
    $("#movie").append(domString);
}

export { printMovie }