// Load Movie Data
const loadMovies = () => {
  return new Promise((resolve, reject) => {
    $.get("../../db/movie.json")
    .done(data => {
      resolve(data.movie);
      console.log(data.movie)
    })
    .fail(error => {
      reject(error);
    });
  })
}

export {loadMovies}