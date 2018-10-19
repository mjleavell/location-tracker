import { filterSearchResults } from "./components/locationComponent.js";

const searchEvent = () => {
    $("#search-bar").on("keyup", e => {
        const searchInput = $(e.target).val();
        if (e.key === "Enter" && searchInput !== "") {
            filterSearchResults()
            return;
        } else if (e.key === "Enter" && searchInput === ""){
            alert('Please enter text');
        }
    });
};

export { searchEvent };
