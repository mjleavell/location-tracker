import { initialPageView } from "./components/movieComponent.js";
import { initialLocationView } from "./components/locationComponent.js";
import { movieClickEvent } from "./events.js";

const initApp = () => {
    initialPageView();
    initialLocationView();
    movieClickEvent();
}

initApp();