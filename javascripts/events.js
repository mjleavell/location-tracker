// overwrites old selector; case insensitive
jQuery.expr[':'].icontains = function (obj,index,meta) {
    return jQuery(obj).text().toUpperCase().indexOf(meta[3].toUpperCase()) >= 0;
}

const filterSearchResults = (e) => {
    const searchInput = $(e.target).val();
    $('.locations').not(`:icontains(${searchInput})`).hide();
    $(`.locations:icontains(${searchInput})`).show();
}

const searchEvent = () => {
    $("#search-bar").on("keyup", (e) => {
       if (e.keyCode === 13) {
           filterSearchResults(e);
       }
    })
};

const filterButton = (e) => {
    const buttonId = $(e.target).html();
    console.log(buttonId)
    $('.locations').not(`:icontains(${buttonId})`).hide();
    $(`.locations:icontains(${buttonId})`).show();
}

const buttonEvent = () => {
    $(".btn").on('click', (e) => {
        filterButton(e)
    })
}
export { searchEvent, buttonEvent };