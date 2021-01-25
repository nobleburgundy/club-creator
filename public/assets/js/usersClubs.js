// this is a jquery file to check if a user has joined a specific club and update the DOM accordingly
$(document).ready(() => {
  function getCurrentUserClubs(cb) {
    // api call to /user_data/ to get id
    $.get("/api/user_data").then((data) => {
      // get joined clubs /api/clubs/user/:id
      $.get("/api/clubs/user/" + data.id).then((clubs) => {
        // gets joined clubs by id and return array of ids
        const ids = clubs.map((e) => e.id);
        return cb(ids);
      });
    });
  }

  getCurrentUserClubs((result) => {
    console.log(result);
  });
});
