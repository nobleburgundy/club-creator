// this is a jquery file to check if a user has joined a specific club and update the DOM accordingly
$(document).ready(() => {
  // api call to /users/
  //   $.get("/api/user_data").then((data) => {
  //     console.log("data = " + data);
  //     // get joined clubs /api/clubs/user/:id
  //     $.get("/api/clubs/user/" + data.id).then((clubs) => {
  //       // gets joined clubs by id
  //       const ids = clubs.map((e) => e.id);
  //     });
  //   });

  function getCurrentUserClubs(cb) {
    $.get("/api/user_data").then((data) => {
      console.log("data = " + data);
      // get joined clubs /api/clubs/user/:id
      $.get("/api/clubs/user/" + data.id).then((clubs) => {
        // gets joined clubs by id
        const ids = clubs.map((e) => e.id);
        return cb(ids);
      });
    });
  }

  getCurrentUserClubs((result) => {
    console.log(result);
  });
});
