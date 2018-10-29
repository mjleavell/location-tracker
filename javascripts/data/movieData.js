// Load Movie Data
const loadMovies = () => {
  return new Promise((resolve, reject) => {
    $.get("../../db/movie.json")
      .done(data => {
        resolve(data.movie);
      })
      .fail(error => {
        reject(error);
      });
  });
};

const loadMovieLocations = movieId => {
  return new Promise((resolve, reject) => {
    $.get("../db/movie.json")
      .done(data => {
        // gives clicked movie object
        const clickedMovie = data.movie.filter(movie => movie.id === movieId);
        const movieLocationArr = clickedMovie[0].locations;
        resolve(movieLocationArr);
      })
      .fail(error => {
        reject(error);
      });
  });
};

export { loadMovies, loadMovieLocations };
