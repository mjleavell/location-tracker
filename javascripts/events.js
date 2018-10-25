// overwrites old selector; case insensitive
jQuery.expr[':'].icontains = function (obj,index,meta) {
    return jQuery(obj).text().toUpperCase().indexOf(meta[3].toUpperCase()) >= 0;
}

const filterSearchResults = (e) => {
    const searchInput = $(e.target).val();
    $('.card-header').not(`:icontains(${searchInput})`).closest('.locations').hide();
    $(`.card-header:icontains(${searchInput})`).closest('.locations').show();
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