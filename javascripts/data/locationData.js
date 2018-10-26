// Load Location Data on page
const loadLocations = (movies) => {
  return new Promise((resolve, reject) => {
    $.get("../../db/locations.json")
      .done(data => {
        // const locationsForMovies = data.locations.filter(location => location.id === movies.locations);
        // console.log(locationsForMovies);
        // resolve(locationsForMovies);
      console.log(data.locations)
        resolve(data.locations);
      })
      .fail(error => {
        reject('loadLocationsError',error);
      });
  });
};

export { loadLocations };