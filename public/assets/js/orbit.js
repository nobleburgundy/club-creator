// Front-End jQuery Code
$(document).ready(() => {
  const searchForm = $("form#search-form");
  const searchInput = $("input#stretch");
  const searchButton = $("button#search-button");

  searchForm.on("submit", (event) => {
    event.preventDefault();
    const query = searchInput.val();
    // handlebars /search route will handle rendering the data, so just nav to
    // /search with the query parameter
    window.location.replace("/search?q=" + query);
  });
});
