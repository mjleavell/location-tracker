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
        // if location.id on loadLocations === movieLocationArr
        // for each location in movieLocationArr, if locations.id on loadLocations === movieLocation element
        // console.log(clickedMovie, movieLocationArr)
        resolve(movieLocationArr);
      })
      .fail(error => {
        reject(error);
      });
  });
};

export { loadMovies, loadMovieLocations };
