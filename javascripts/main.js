import { initialPageView } from "./components/movieComponent.js";
import { initialLocations } from "./components/locationComponent.js";

const initApp = () => {
    initialPageView();
    initialLocations();
}

initApp();