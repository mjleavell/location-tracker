// Load Location Data on page
const loadLocations = () => {
  return new Promise((resolve, reject) => {
    $.get("../db/locations.json")
      .done(data => {
        resolve(data.locations);
      })
      .fail(error => {
        reject("loadLocationsError", error);
      });
  });
};

// Load locations for single movie
const loadLocationsForMovie = movieLocations => {
  let locationsForMovieArr = [];
  return new Promise((resolve, reject) => {
    $.get("../db/locations.json")
      .done(data => {
        // trying to get the location objects for the movie.locations
        movieLocations.forEach((movieLocation) => {
          data.locations.forEach((location) => {
            if (location.id === movieLocation) {
              locationsForMovieArr.push(location);
            }
          });
        });
        resolve(locationsForMovieArr);
      })
      .fail(error => {
        reject("error on loadLocationsForMovie", error);
      });
  });
};

export { loadLocations, loadLocationsForMovie };
