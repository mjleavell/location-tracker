import { printLocations, setLocations, getLocations } from "../components/locationComponent.js";

// Load Location Data
$.get("../../db/locations.json")
  .done(data => {
    setLocations(data.locations);
    printLocations(getLocations());
  })
  .fail(error => {
    console.log(error);
  });