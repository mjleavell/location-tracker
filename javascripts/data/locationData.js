import { printLocations } from "../components/locationComponent.js";

// Load Location Data
$.get("../../db/locations.json")
  .done(data => {
    printLocations(data.locations);
  })
  .fail(error => {
    console.log(error);
  });